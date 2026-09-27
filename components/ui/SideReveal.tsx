"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Slides its children in from the left or right on mount, with a playful
 * little overshoot (spring bounce) instead of a flat linear ease — used to
 * make the contact page feel alive when it first opens.
 */
export default function SideReveal({
  children,
  from = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const offset = from === "left" ? -90 : 90;
  return (
    <motion.div
      initial={{ x: offset, opacity: 0, rotate: from === "left" ? -2 : 2 }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, mass: 0.9, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
