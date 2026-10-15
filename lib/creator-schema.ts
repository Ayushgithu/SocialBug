import { z } from "zod";

export const NICHES = [
  "Tech",
  "Content",
  "Marketing",
  "LinkedIn",
  "Startups & SaaS",
  "Business & Finance",
  "Lifestyle",
  "Fashion & Beauty",
  "Food",
  "Travel",
  "Fitness & Health",
  "Gaming",
  "Education",
  "Entertainment & Comedy",
  "Others",
] as const;

export type PlatformKey = "linkedin" | "twitter" | "instagram";

export const PLATFORMS: Record<
  PlatformKey,
  { label: string; domains: string[]; urlPlaceholder: string; costLabel: string }
> = {
  linkedin: {
    label: "LinkedIn",
    domains: ["linkedin.com"],
    urlPlaceholder: "linkedin.com/in/yourname",
    costLabel: "Your rate for 1 LinkedIn post (₹)",
  },
  twitter: {
    label: "Twitter / X",
    domains: ["twitter.com", "x.com"],
    urlPlaceholder: "x.com/yourhandle or @yourhandle",
    costLabel: "Your rate for 1 tweet (₹)",
  },
  instagram: {
    label: "Instagram",
    domains: ["instagram.com"],
    urlPlaceholder: "instagram.com/yourhandle or @yourhandle",
    costLabel: "Your rate for 1 reel (₹)",
  },
};

/** Turns "@handle", "instagram.com/x" or a full URL into a clean https URL. Returns null if invalid. */
export function normalizeProfileUrl(platform: PlatformKey, raw: string): string | null {
  const value = raw.trim();
  if (!value) return null;

  if (value.startsWith("@") && platform !== "linkedin") {
    const handle = value.slice(1);
    if (!/^[A-Za-z0-9._]{1,30}$/.test(handle)) return null;
    return platform === "instagram"
      ? `https://www.instagram.com/${handle}`
      : `https://x.com/${handle}`;
  }

  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    const ok = PLATFORMS[platform].domains.some((d) => host === d || host.endsWith(`.${d}`));
    if (!ok) return null;
    // Must point at a profile, not just the homepage.
    if (url.pathname.replace(/\//g, "").length === 0) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/** "25,000" -> 25000, "12k" -> 12000, "1.5M" -> 1500000, "2L" -> 200000. null if not a number. */
export function parseCount(raw: string): number | null {
  const cleaned = raw.trim().toLowerCase().replace(/[,\s₹]/g, "");
  const m = cleaned.match(/^(\d+(?:\.\d+)?)(k|m|l)?$/);
  if (!m) return null;
  const mult = m[2] === "k" ? 1e3 : m[2] === "m" ? 1e6 : m[2] === "l" ? 1e5 : 1;
  const n = Math.round(parseFloat(m[1]) * mult);
  return Number.isFinite(n) && n <= 1e10 ? n : null;
}

export function normalizeWhatsapp(raw: string): string {
  const t = raw.trim();
  const digits = t.replace(/\D/g, "");
  return t.startsWith("+") ? `+${digits}` : digits;
}

const platformSchema = z.object({
  enabled: z.boolean(),
  url: z.string().max(300),
  followers: z.string().max(20),
  cost: z.string().max(20),
});

export const creatorSchema = z
  .object({
    name: z.string().trim().min(2, "Tell us your name.").max(80),
    whatsapp: z.string().trim().max(25),
    email: z.string().trim().max(120).email("Enter a valid email."),
    city: z.string().trim().max(80),
    niche: z.array(z.enum(NICHES)).max(NICHES.length),
    nicheOther: z.string().trim().max(80),
    designation: z.string().trim().max(100),
    company: z.string().trim().max(100),
    age: z.string().trim().max(3),
    highlights: z.string().trim().max(1000, "Keep it under 1000 characters."),
    linkedin: platformSchema,
    twitter: platformSchema,
    instagram: platformSchema,
    // Honeypot: real visitors never see this field.
    companyWebsiteConfirm: z.string().optional().or(z.literal("")),
  })
  .superRefine((v, ctx) => {
    const digits = v.whatsapp.replace(/\D/g, "");
    if (!/^\+?[\d\s\-()]+$/.test(v.whatsapp) || digits.length < 10 || digits.length > 15) {
      ctx.addIssue({
        code: "custom",
        path: ["whatsapp"],
        message: "Enter a valid WhatsApp number (10 to 15 digits).",
      });
    }

    if (v.age) {
      const age = Number(v.age);
      if (!/^\d{2}$/.test(v.age) || age < 16 || age > 80) {
        ctx.addIssue({ code: "custom", path: ["age"], message: "Enter an age between 16 and 80." });
      }
    }

    if (v.niche.includes("Others") && !v.nicheOther) {
      ctx.addIssue({ code: "custom", path: ["nicheOther"], message: "Tell us your niche." });
    }

    const keys: PlatformKey[] = ["linkedin", "twitter", "instagram"];
    const active = keys.filter((k) => v[k].enabled);
    if (active.length === 0) {
      ctx.addIssue({
        code: "custom",
        path: ["linkedin", "enabled"],
        message: "Pick at least one platform you create on.",
      });
    }
    for (const k of active) {
      const p = v[k];
      if (!normalizeProfileUrl(k, p.url)) {
        ctx.addIssue({
          code: "custom",
          path: [k, "url"],
          message: `Enter a valid ${PLATFORMS[k].label} profile link.`,
        });
      }
      if (parseCount(p.followers) === null) {
        ctx.addIssue({
          code: "custom",
          path: [k, "followers"],
          message: "Enter followers as a number, like 25000 or 25k.",
        });
      }
      if (p.cost && parseCount(p.cost) === null) {
        ctx.addIssue({
          code: "custom",
          path: [k, "cost"],
          message: "Enter your rate as a number, like 5000.",
        });
      }
    }
  });

export type CreatorFormValues = z.infer<typeof creatorSchema>;