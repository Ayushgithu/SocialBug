"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

/**
 * Counts up from 0 to the number inside `value` when it scrolls into view,
 * keeping any prefix/suffix ("1000+", "3.9M", "30.3K", "1,009") intact.
 */
export default function Counter({
  value,
  duration = 1.8,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const raw = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = raw ? Number(raw.replace(/,/g, "")) : NaN;
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const grouped = raw.includes(",");
  const count = useMotionValue(0);
  const display = useTransform(count, (number) => {
    const formatted = decimals ? number.toFixed(decimals) : String(Math.round(number));
    return grouped ? Number(formatted).toLocaleString("en-US") : formatted;
  });

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    const controls = animate(count, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, inView, target, duration]);

  if (Number.isNaN(target)) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
