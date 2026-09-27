"use client";

import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "zoom";

const OFFSETS: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -70 },
  right: { x: 70 },
  zoom: { scale: 0.92 },
};

/**
 * Scroll-triggered entrance. Content slides in from the side (or fades up)
 * as the section enters the viewport, used across the site so scrolling
 * always has something arriving rather than everything sitting static.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  className = "",
  style,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const offset = OFFSETS[direction];

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
