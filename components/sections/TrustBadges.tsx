"use client";

import { motion } from "framer-motion";
import TrustBadge from "@/components/ui/TrustBadge";

/**
 * Award-strip. Star ratings below are placeholders, swap in real figures /
 * verified links (Google Business, Clutch, etc.) before this goes live.
 */
const badges = [
  { label: "Google", filledStars: 4.5 },
  { label: "Best Execution Team", filledStars: 4.5 },
];

export default function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-xl border border-sb-orange/25 px-8 py-9 sm:px-12 ${className}`}
      style={{
        background:
          "radial-gradient(120% 160% at 0% 0%, rgba(252,132,46,0.16), transparent 60%), radial-gradient(120% 160% at 100% 100%, rgba(242,97,31,0.14), transparent 60%), #141210",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="relative flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:justify-between">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-sb-white/45">
          Trusted &amp; recognised
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {badges.map((b) => (
            <TrustBadge key={b.label} {...b} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
