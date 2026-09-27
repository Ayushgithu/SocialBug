"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const badges = [
  "SaaS Experts",
  "Founders",
  "Tech Professionals",
  "Product Builders",
  "Building in Public",
  "Creators",
];

const flow = ["Brand", "Strategy", "Creators", "Content", "Distribution", "Growth"];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, count, rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function NetworkSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The Network">
          1000+ CURATED
          <br />
          <span className="gradient-text">CREATORS</span> & PROFESSIONALS
        </SectionHeading>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-display text-6xl sm:text-7xl">
              <Counter to={1000} suffix="+" />
            </p>
            <p className="mt-2 font-heading text-sm uppercase tracking-[0.2em] text-sb-white/50">
              Creators across every major platform
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {badges.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Badge>{b}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glow-border rounded-3xl bg-white/[0.02] p-8 backdrop-blur-sm">
            <p className="mb-8 font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
              How the network moves
            </p>
            <div className="flex flex-col">
              {flow.map((step, i) => (
                <div key={step} className="relative flex items-center gap-4 pb-8 last:pb-0">
                  {i < flow.length - 1 && (
                    <span className="absolute left-[15px] top-8 h-full w-px bg-gradient-to-b from-sb-pink/60 to-transparent" />
                  )}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-pink to-sb-orange text-xs font-bold text-sb-black"
                  >
                    {i + 1}
                  </motion.span>
                  <span className="font-heading text-lg font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
