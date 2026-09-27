"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

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

  const [display, setDisplay] = useState(raw ? (decimals ? (0).toFixed(decimals) : "0") : value);

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = decimals ? v.toFixed(decimals) : String(Math.round(v));
        setDisplay(grouped ? Number(n).toLocaleString("en-US") : n);
      },
    });
    return () => controls.stop();
  }, [inView, target, duration, decimals, grouped]);

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
      {display}
      {suffix}
    </span>
  );
}
