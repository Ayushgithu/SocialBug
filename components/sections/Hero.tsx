"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GradientBlobs from "@/components/ui/GradientBlobs";
import HeroVisual from "@/components/ui/HeroVisual";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import { ArrowRight, Sparkles } from "lucide-react";

const ROTATING = ["STRATEGY.", "IDEAS.", "CONTENT.", "DISTRIBUTION.", "CONVERSATION."];

const TICKER_ITEMS = [
  "1000+ CREATORS", "22+ PLATFORMS", "PRODUCT HUNT SPECIALISTS",
  "STRATEGY FIRST", "100+ CAMPAIGNS RUN", "BUILT FOR SAAS",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const t = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 1800);
  //   return () => clearInterval(t);
  // }, []);

  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
      <GradientBlobs />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-9 sm:mb-12"
      >
        <MarqueeTicker items={TICKER_ITEMS} speed={26} reverse tilt="up" />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
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

          <h1 className="font-display mt-6 text-4xl leading-[1.02] sm:text-5xl lg:text-[3.75rem]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              WE MAKE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              BRANDS WORTH
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="gradient-text block"
            >
              TALKING ABOUT.
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
            className="mt-6 max-w-md text-sm text-sb-white/60 sm:text-base"
          >
            Social strategy, creative campaigns and content built for the way{" "}
            <span className="font-semibold text-sb-orange">people</span> actually{" "}
            <span className="font-semibold text-sb-lime">consume</span> the{" "}
            <span className="font-semibold text-sb-pink">internet</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              href="/contact"
              badge={
                <>
                  <Sparkles size={11} /> 2 mins
                </>
              }
            >
              Book Your Campaign <ArrowRight size={15} />
            </Button>
            <Button href="/case-studies" variant="outline">
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative w-full shrink-0 lg:w-110"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
