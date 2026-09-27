"use client";

import Marquee from "@/components/ui/Marquee";
import { Sparkles } from "lucide-react";

const PHRASES = [
  "FROM SCROLL TO STOP",
  "FROM STOP TO NOTICE",
  "FROM NOTICE TO SHARE",
  "FROM SHARE TO TALK",
];

/**
 * A single bold, premium marquee line, big display type, alternating
 * solid/outline treatment, gradient sheen and a soft animated line-field
 * behind it. Replaces the old two-row crossing marquee with one clean,
 * high-impact strip that leads into Featured Campaigns.
 */
export default function CrossMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-sb-black py-10 sm:py-14">
      <div className="sb-line-field opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,132,46,0.14),transparent_65%)]" />

      <div className="posts-mask relative">
        <Marquee speed={30}>
          {PHRASES.map((t, i) => (
            <span key={t} className="flex items-center gap-6 whitespace-nowrap px-6">
              <span
                className={
                  i % 2 === 0
                    ? "gradient-text font-display text-3xl sm:text-5xl"
                    : "text-outline font-display text-3xl sm:text-5xl"
                }
              >
                {t}
              </span>
              <Sparkles size={20} className="shrink-0 text-sb-orange/70" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
