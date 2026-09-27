"use client";

import Marquee from "@/components/ui/Marquee";
import { Sparkles, Star, Zap } from "lucide-react";

type Variant = "solid" | "outline" | "light";

const ICONS = { solid: Sparkles, outline: Star, light: Zap };

/**
 * Angled scrolling ticker. `variant` switches the colourway and `reverse`
 * flips the direction, so two stacked tickers can run against each other.
 */
export default function MarqueeTicker({
  items,
  className = "",
  reverse = false,
  variant = "solid",
  speed = 22,
  tilt,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  variant?: Variant;
  speed?: number;
  /** Optional explicit tilt direction, independent of scroll direction. */
  tilt?: "up" | "down";
}) {
  const Icon = ICONS[variant];

  const shell =
    variant === "solid"
      ? "border-y-2 border-sb-black bg-gradient-to-r from-[#f2611f] via-[#fc842e] to-[#ffa45c] text-sb-black"
      : variant === "light"
        ? "border-y-2 border-sb-black bg-sb-white text-sb-black"
        : "border-y border-sb-orange/40 bg-sb-black text-sb-orange";

  const tiltClass = tilt
    ? tilt === "up"
      ? "-rotate-1"
      : "rotate-1"
    : reverse
      ? "rotate-1"
      : "-rotate-1";

  return (
    <div
      className={`relative overflow-hidden py-3 ${tiltClass} ${shell} ${className}`}
    >
      <Marquee speed={speed} reverse={reverse}>
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-4 font-heading text-sm font-bold uppercase tracking-wide"
          >
            <Icon size={14} />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
