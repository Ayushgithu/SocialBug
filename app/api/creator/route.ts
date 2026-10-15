import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  creatorSchema,
  normalizeProfileUrl,
  normalizeWhatsapp,
  parseCount,
  PLATFORMS,
  type PlatformKey,
} from "@/lib/creator-schema";
import { creatorNotificationEmail } from "@/lib/email-templates";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const FROM_ADDRESS = "SocialBug Media <hello@socialbugmedia.in>";
const TEAM_INBOX = process.env.CONTACT_TEAM_EMAIL || "shivam@socialbugmedia.in";

// Max submissions per IP per hour.
const RATE_MAX = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

type SheetResult = "saved" | "duplicate" | "failed";

async function saveToSheet(payload: Record<string, unknown>): Promise<SheetResult> {
  const url = process.env.CREATOR_SHEET_URL;
  const secret = process.env.CREATOR_SHEET_SECRET;
  if (!url || !secret) {
    console.error("CREATOR_SHEET_URL / CREATOR_SHEET_SECRET are not set.");
    return "failed";
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      // text/plain keeps Apps Script happy (no CORS preflight semantics needed server-side).
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, secret }),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const data = (await res.json()) as { ok?: boolean; error?: string };
    if (data.ok) return "saved";
    if (data.error === "duplicate") return "duplicate";
    console.error("Sheet rejected the row:", data.error);
    return "failed";
  } catch (error) {
    console.error("Sheet request failed:", error);
    return "failed";
  }
}

async function emailOwner(name: string, email: string, rows: Array<[string, string]>) {
  const key = process.env.SOCIAL_BUG_MEDIA; // same Resend key variable the contact form uses
  if (!key) {
    console.error("SOCIAL_BUG_MEDIA (Resend key) is not set; owner email skipped.");
    return false;
  }
  try {
    const { error } = await new Resend(key).emails.send({
      from: FROM_ADDRESS,
      to: TEAM_INBOX,
      subject: `New Creator Listing, ${name}`,
      html: creatorNotificationEmail(name, email, rows),
      replyTo: email,
    });
    if (error) {
      console.error("Resend error:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Resend error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  const limit = rateLimit(`creator:${clientIp(request)}`, RATE_MAX, RATE_WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = creatorSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }
  const v = parsed.data;

  // Honeypot tripped: pretend success, store nothing.
  if (v.companyWebsiteConfirm) {
    return NextResponse.json({ success: true });
  }

  const nicheText = v.niche
    .map((n) => (n === "Others" ? `Others: ${v.nicheOther}` : n))
    .join(", ");

  const platformData = (k: PlatformKey) => {
    const p = v[k];
    if (!p.enabled) return { url: "", followers: "", cost: "" };
    return {
      url: normalizeProfileUrl(k, p.url) ?? "",
      followers: parseCount(p.followers) ?? "",
      cost: p.cost ? (parseCount(p.cost) ?? "") : "",
    };
  };
  const li = platformData("linkedin");
  const tw = platformData("twitter");
  const ig = platformData("instagram");

  const record = {
    name: v.name,
    whatsapp: normalizeWhatsapp(v.whatsapp),
    email: v.email.toLowerCase(),
    city: v.city,
    niche: nicheText,
    designation: v.designation,
    company: v.company,
    age: v.age ? Number(v.age) : "",
    linkedinUrl: li.url,
    linkedinFollowers: li.followers,
    linkedinCost: li.cost,
    twitterUrl: tw.url,
    twitterFollowers: tw.followers,
    twitterCost: tw.cost,
    instagramUrl: ig.url,
    instagramFollowers: ig.followers,
    instagramCost: ig.cost,
  };

  const sheet = await saveToSheet(record);
  if (sheet === "duplicate") {
    return NextResponse.json(
      { error: "This email is already on our creator list." },
      { status: 409 }
    );
  }

  const rows: Array<[string, string]> = [
    ["WhatsApp", record.whatsapp],
    ["Email", record.email],
    ["City", record.city],
    ["Niche", record.niche],
    ["Designation", record.designation],
    ["Company", record.company],
    ["Age", String(record.age)],
  ];
  (["linkedin", "twitter", "instagram"] as PlatformKey[]).forEach((k) => {
    if (!v[k].enabled) return;
    const d = k === "linkedin" ? li : k === "twitter" ? tw : ig;
    rows.push([`${PLATFORMS[k].label} profile`, String(d.url)]);
    rows.push([`${PLATFORMS[k].label} followers`, String(d.followers)]);
    rows.push([`${PLATFORMS[k].label} rate`, d.cost ? `₹${d.cost}` : "Not shared"]);
  });
  if (sheet === "failed") rows.unshift(["Note", "Could not save to Google Sheet. This email is the only copy."]);

  const emailed = await emailOwner(v.name, record.email, rows);

  // Success if the lead landed in at least one place (sheet or owner inbox).
  if (sheet === "saved" || emailed) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: "Could not save your details." }, { status: 502 });
}