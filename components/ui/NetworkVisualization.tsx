"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { networkCategories } from "@/lib/data";
import {
  Rocket,
  Code2,
  Megaphone,
  Briefcase,
  Hammer,
  Sparkles,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [Rocket, Code2, Megaphone, Briefcase, Hammer, Sparkles, Cpu];

/**
 * Category explorer. Deliberately a plain responsive card layout, it looks
 * and behaves the same on a phone as on a desktop, unlike the old radial
 * canvas which reflowed differently at every breakpoint.
 */
export default function NetworkVisualization() {
  const [active, setActive] = useState(0);
  const current = networkCategories[active];
  const ActiveIcon = ICONS[active % ICONS.length];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
        {networkCategories.map((cat, i) => {
          const Icon = ICONS[i % ICONS.length];
          const isActive = i === active;
          return (
            <button
              key={cat.label}
              type="button"
              data-cursor="pointer"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`sb-card-shine flex items-center gap-2.5 rounded-xl border px-3.5 py-3.5 text-left transition-all duration-300 ${
                isActive
                  ? "border-sb-orange/70 bg-sb-orange/10"
                  : "border-white/10 bg-white/2 hover:border-white/25"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isActive ? "bg-sb-orange text-sb-black" : "bg-white/5 text-sb-orange"
                }`}
              >
                <Icon size={16} />
              </span>
              <span className="font-heading text-[13px] font-semibold leading-tight">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={current.label}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] to-transparent p-7 sm:p-9"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sb-orange text-sb-black">
          <ActiveIcon size={22} />
        </span>
        <h3 className="font-display mt-6 text-3xl sm:text-4xl">{current.label.toUpperCase()}</h3>
        <p className="mt-4 text-lg text-sb-white/80">{current.desc}</p>
        <p className="mt-3 text-sm leading-relaxed text-sb-white/55">{current.detail}</p>
        <p className="mt-8 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-sb-white/40">
          Matched to your brief, not pulled from a list
        </p>
      </motion.div>
    </div>
  );
}
