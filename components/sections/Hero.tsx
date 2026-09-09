"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { ArrowRight, Sparkles } from "lucide-react";

const NetworkOrb = dynamic(() => import("@/components/three/NetworkOrb"), {
  ssr: false,
});

const ROTATING = ["SAAS.", "STARTUPS.", "LAUNCHES.", "GROWTH."];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 1800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-32 pb-16">
      <GradientBlobs />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>
              <Sparkles size={12} className="text-sb-lime" /> 1000+ Curated Creators
            </Badge>
          </motion.div>

          <h1 className="font-display mt-6 text-[15vw] leading-[0.88] sm:text-7xl lg:text-[5.4vw]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              YOUR PRODUCT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              DESERVES
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="gradient-text block"
            >
              BUZZ.
            </motion.span>
          </h1>

          <div className="mt-6 flex h-10 items-center overflow-hidden font-heading text-sm font-semibold uppercase tracking-[0.25em] text-sb-white/60">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING[index]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {ROTATING[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-md text-base text-sb-white/60 sm:text-lg"
          >
            We help ambitious products get seen, talked about, and shared
            through strategy, creator networks, and campaigns built to move.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact">
              Book a Demo <ArrowRight size={15} />
            </Button>
            <Button href="/case-studies" variant="outline">
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[280px] w-full shrink-0 sm:h-[360px] lg:h-[460px] lg:w-[460px]"
        >
          {isDesktop ? (
            <NetworkOrb />
          ) : (
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute h-52 w-52 rounded-full bg-gradient-to-br from-sb-pink via-sb-orange to-sb-lime opacity-20 blur-2xl" />
              <svg viewBox="0 0 300 300" className="h-64 w-64 animate-[spin_18s_linear_infinite]">
                {Array.from({ length: 14 }).map((_, i) => {
                  const angle = (i / 14) * Math.PI * 2;
                  const x = 150 + Math.cos(angle) * 110;
                  const y = 150 + Math.sin(angle) * 110;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={i % 3 === 0 ? 5 : 3}
                      fill={i % 2 === 0 ? "#ff3d9a" : "#c6ff3d"}
                      opacity={0.85}
                    />
                  );
                })}
                <circle cx="150" cy="150" r="110" fill="none" stroke="#ffffff22" strokeWidth="1" />
                <circle cx="150" cy="150" r="70" fill="none" stroke="#ffffff14" strokeWidth="1" />
              </svg>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
