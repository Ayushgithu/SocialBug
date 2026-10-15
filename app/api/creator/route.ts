import { NextResponse } from "next/server";
import {
  creatorSchema,
  normalizeProfileUrl,
  normalizeWhatsapp,
  parseCount,
  type PlatformKey,
} from "@/lib/creator-schema";
import { clientIp, rateLimit } from "@/lib/rate-limit";

// Max submissions per IP per hour.
const RATE_MAX = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

async function saveToSheet(payload: Record<string, unknown>): Promise<boolean> {
  const url = process.env.CREATOR_SHEET_URL;
  const secret = process.env.CREATOR_SHEET_SECRET;
  if (!url || !secret) {
    console.error("CREATOR_SHEET_URL / CREATOR_SHEET_SECRET are not set.");
    return false;
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
    if (data.ok) return true;
    console.error("Sheet rejected the row:", data.error);
    return false;
  } catch (error) {
    console.error("Sheet request failed:", error);
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

  const saved = await saveToSheet({
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
    highlights: v.highlights,
  });

  if (!saved) {
    return NextResponse.json({ error: "Could not save your details." }, { status: 502 });
  }
  return NextResponse.json({ success: true });
}