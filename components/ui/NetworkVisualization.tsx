"use client";

import { useState } from "react";
<<<<<<< HEAD
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
                  : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isActive ? "bg-sb-orange text-sb-black" : "bg-white/[0.05] text-sb-orange"
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
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-7 sm:p-9"
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
=======
import { motion, AnimatePresence } from "framer-motion";
import { networkCategories } from "@/lib/data";

const COLORS = ["#ff3d9a", "#ff5a1f", "#c6ff3d", "#3d7bff", "#9b3dff", "#ff3d9a", "#ff5a1f"];

export default function NetworkVisualization() {
  const [active, setActive] = useState(0);

  const radius = 36;
  const labelRadius = 44;
  const positions = networkCategories.map((_, i) => {
    const angle = (i / networkCategories.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
      labelX: 50 + labelRadius * Math.cos(angle),
      labelY: 50 + labelRadius * Math.sin(angle),
    };
  });

  return (
    <div className="grid gap-10 overflow-x-hidden lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
      <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-visible px-4">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
          {positions.map((p, i) => (
            <motion.line
              key={`line-${i}`}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              stroke={active === i ? COLORS[i % COLORS.length] : "#ffffff22"}
              strokeWidth={active === i ? 0.6 : 0.3}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
          <circle cx="50" cy="50" r="7" fill="url(#centerGrad)" />
          <defs>
            <radialGradient id="centerGrad">
              <stop offset="0%" stopColor="#ff3d9a" />
              <stop offset="100%" stopColor="#ff5a1f" />
            </radialGradient>
          </defs>
          {positions.map((p, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={p.x}
              cy={p.y}
              r={active === i ? 4.2 : 2.8}
              fill={COLORS[i % COLORS.length]}
              className="cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              animate={{ scale: active === i ? 1.15 : 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </svg>

        {positions.map((p, i) => (
          <button
            key={`label-${i}`}
            data-cursor="pointer"
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{ left: `${p.labelX}%`, top: `${p.labelY}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-sb-black/70 px-2.5 py-1 text-center text-[10px] font-heading uppercase tracking-wide text-sb-white/60 backdrop-blur-sm transition-colors hover:text-sb-white sm:text-[11px]"
          >
            {networkCategories[i].label}
          </button>
        ))}
      </div>

      <div className="glow-border rounded-3xl bg-white/[0.02] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <span
              className="inline-flex h-2.5 w-2.5 rounded-full"
              style={{ background: COLORS[active % COLORS.length] }}
            />
            <h3 className="font-heading mt-4 text-2xl font-semibold">
              {networkCategories[active].label}
            </h3>
            <p className="mt-3 text-sm text-sb-white/60">{networkCategories[active].desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {networkCategories.map((c, i) => (
            <button
              key={c.label}
              data-cursor="pointer"
              onClick={() => setActive(i)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-heading transition-colors ${
                active === i
                  ? "border-sb-lime text-sb-lime"
                  : "border-white/15 text-sb-white/50 hover:text-sb-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    </div>
  );
}
