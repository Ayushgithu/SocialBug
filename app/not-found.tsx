"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { ArrowLeft, RadioTower } from "lucide-react";

const GLYPHS = "01STRATEGY01CONTENT01GROWTH01BUZZ01".split("");

function ScrambleWord({ word }: { word: string }) {
  const [display, setDisplay] = useState(word);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 18;
    const interval = setInterval(() => {
      frame++;
      if (frame >= totalFrames) {
        setDisplay(word);
        clearInterval(interval);
        return;
      }
      setDisplay(
        word
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            const reveal = (frame / totalFrames) * word.length;
            if (i < reveal) return word[i];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
    }, 45);
    return () => clearInterval(interval);
  }, [word]);

  return <>{display}</>;
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <GradientBlobs />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* floating signal nodes */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-sb-lime/70"
            style={{ top: `${(i * 29) % 100}%`, left: `${(i * 61) % 100}%` }}
            animate={{ opacity: [0.15, 0.8, 0.15], scale: [1, 1.6, 1] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6 h-20 w-20"
      >
        <motion.div
          className="relative flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full border border-sb-pink/50"
            animate={{ scale: [1, 1.6, 1.9], opacity: [0.6, 0.2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <RadioTower className="text-sb-lime" size={30} />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-sb-white/50"
      >
        Signal lost
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display mt-4 text-[26vw] leading-none text-sb-white sm:text-[13rem]"
      >
        <span className="text-outline">4</span>
        <span className="gradient-text">0</span>
        <span className="text-outline">4</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-heading mt-4 max-w-lg text-2xl font-semibold sm:text-3xl"
      >
        This page went quiet.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="mt-4 max-w-md text-sb-white/55"
      >
        No creators, no campaigns, no buzz here, just a broken link. Let&apos;s
        get you back to where the conversation is actually happening.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 font-heading text-sm uppercase tracking-[0.2em] text-sb-lime"
      >
        <ScrambleWord word="Strategy. Content. Growth." />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button href="/">
          <ArrowLeft size={15} /> Back To The Hive
        </Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </motion.div>
    </section>
  );
}
