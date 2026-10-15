// Simple in-memory sliding-window limiter. On serverless hosts (Vercel) each
// instance keeps its own counters, so this is "best effort" protection that
// stops casual spam. The Google Sheet also rejects duplicate emails.
const hits = new Map<string, number[]>();

export function rateLimit(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= max) {
    hits.set(key, recent);
    return { ok: false as const, retryAfterSec: Math.ceil((windowMs - (now - recent[0])) / 1000) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Occasional cleanup so the map can't grow forever.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return { ok: true as const, retryAfterSec: 0 };
}

export function clientIp(request: Request) {
  const fwd = request.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] || request.headers.get("x-real-ip") || "unknown").trim();
}