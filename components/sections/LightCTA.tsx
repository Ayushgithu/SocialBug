"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

/**
 * Light, off-white CTA banner, a deliberate contrast card dropped inside
 * an otherwise dark section (or a `.sb-light` section). Reused across
 * About, Services, and the homepage wherever a lighter, punchier close is
 * wanted instead of the full-bleed dark FinalCTA.
 */
export default function LightCTA({
  eyebrow = "Ready To Get Started?",
  heading = "Have a campaign going live?",
  description = (
    <>
      Tell us your requirements. We&apos;ll help you take it live in as little as{" "}
      <strong className="font-semibold text-black">30 minutes</strong>.
    </>
  ),
  buttonLabel = "Launch My Campaign",
  buttonHref = "/contact",
  footnote = "Fast. Flexible. Hassle-Free.",
}: {
  eyebrow?: string;
  heading?: string;
  description?: ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
  footnote?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#eef0fb] via-[#f3f2fb] to-[#eef2fc] px-6 py-6 sm:px-8 sm:py-7"
    >
      {/* decorative dash accent, top right, echoes the hand-drawn sparkle */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-8 top-6 hidden text-indigo-300 sm:block"
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M4 4L14 14M30 6L26 2M32 12L28 10M6 30L2 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500">
            {eyebrow}
          </p>
          <h3 className="font-display mt-1.5 text-xl leading-tight text-[#0a0a0a] sm:text-2xl">
            {heading}
          </h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-black/55">{description}</p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <Button
            href={buttonHref}
            className="!bg-[#0a0a0f] !text-white hover:!bg-black"
            badge={
              <>
                <Sparkles size={10} /> 2 mins
              </>
            }
          >
            {buttonLabel}
          </Button>
          {footnote && <p className="text-xs text-black/40">{footnote}</p>}
        </div>
      </div>
    </motion.div>
  );
}
