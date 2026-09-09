"use client";

import { useState } from "react";
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
    </div>
  );
}
