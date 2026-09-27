"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

const palette = ["#ff3d9a", "#ff5a1f", "#c6ff3d", "#3d7bff", "#9b3dff"];

function NetworkVisual() {
  const nodes = Array.from({ length: 10 });
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      {nodes.map((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2;
        const x = 150 + Math.cos(angle) * 105;
        const y = 150 + Math.sin(angle) * 105;
        return (
          <motion.line
            key={`l-${i}`}
            x1="150"
            y1="150"
            x2={x}
            y2={y}
            stroke="#ffffff22"
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
          />
        );
      })}
      {nodes.map((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2;
        const x = 150 + Math.cos(angle) * 105;
        const y = 150 + Math.sin(angle) * 105;
        return (
          <motion.circle
            key={`c-${i}`}
            cx={x}
            cy={y}
            r={5}
            fill={palette[i % palette.length]}
            animate={{ r: [4, 6, 4] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.1 }}
          />
        );
      })}
      <circle cx="150" cy="150" r="26" fill="url(#ng)" />
      <defs>
        <radialGradient id="ng">
          <stop offset="0%" stopColor="#ff3d9a" />
          <stop offset="100%" stopColor="#ff5a1f" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function GraphVisual() {
  const bars = [40, 65, 50, 85, 70, 100, 90];
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={20 + i * 38}
          width="24"
          rx="6"
          fill={i % 2 === 0 ? "#c6ff3d" : "#3d7bff"}
          initial={{ height: 0, y: 200 }}
          animate={{ height: h, y: 200 - h }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <motion.path
        d="M32 150 L70 120 L108 135 L146 80 L184 100 L222 45 L260 60"
        fill="none"
        stroke="#ff3d9a"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

function RocketVisual() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      <motion.g
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M150 60 C180 100 190 150 180 200 L120 200 C110 150 120 100 150 60 Z"
          fill="url(#rg)"
        />
        <circle cx="150" cy="130" r="14" fill="#050506" opacity="0.5" />
        <path d="M120 190 L90 230 L120 215 Z" fill="#ff5a1f" />
        <path d="M180 190 L210 230 L180 215 Z" fill="#ff5a1f" />
        <path d="M138 200 L162 200 L150 240 Z" fill="#c6ff3d" />
      </motion.g>
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff3d9a" />
          <stop offset="100%" stopColor="#ff5a1f" />
        </linearGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={150 + (i - 4) * 12}
          cy={260}
          r="2"
          fill="#c6ff3d"
          animate={{ opacity: [0, 1, 0], y: [250, 280] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </svg>
  );
}

function CardsVisual() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={70 + i * 28}
          y={90 + i * 18}
          width="130"
          height="90"
          rx="14"
          fill={i === 2 ? "#ff3d9a" : "#ffffff10"}
          stroke="#ffffff22"
          animate={{ y: [90 + i * 18, 80 + i * 18, 90 + i * 18] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

function BoardVisual() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      <rect x="40" y="50" width="220" height="200" rx="16" fill="#ffffff08" stroke="#ffffff22" />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={90 + i * 65}
          cy={100}
          r="10"
          fill={palette[i]}
          animate={{ cy: [100, 220, 100] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
      <line x1="60" y1="150" x2="240" y2="150" stroke="#ffffff18" />
      <line x1="60" y1="200" x2="240" y2="200" stroke="#ffffff18" />
    </svg>
  );
}

function WavesVisual() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      <circle cx="150" cy="150" r="10" fill="#c6ff3d" />
      {[40, 70, 100].map((r, i) => (
        <motion.circle
          key={r}
          cx="150"
          cy="150"
          r={r}
          fill="none"
          stroke="#ffffff30"
          strokeWidth="1.5"
          animate={{ r: [r, r + 20, r], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}

const VISUALS: Record<string, () => JSX.Element> = {
  network: NetworkVisual,
  graph: GraphVisual,
  rocket: RocketVisual,
  cards: CardsVisual,
  board: BoardVisual,
  waves: WavesVisual,
};

export default function ServiceVisual({ type }: { type: string }) {
  const Visual = VISUALS[type] ?? NetworkVisual;
  return (
    <div className="relative flex aspect-square w-full items-center justify-center">
      <div className="absolute h-2/3 w-2/3 rounded-full bg-gradient-to-br from-sb-pink/20 via-sb-orange/10 to-sb-lime/10 blur-3xl" />
      <div className="relative h-full w-full">
        <Visual />
      </div>
    </div>
  );
}
