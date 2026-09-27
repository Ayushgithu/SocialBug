"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useReducedMotion } from "framer-motion";
import Image from "next/image";

/**
 * Splash screen, clean black stage, no curtain.
 * Logo scales/fades in, then the three words reveal one by one
 * (STRATEGY. CONTENT. GROWTH.), a soft animated line-grid drifts
 * behind everything, and a progress counter runs bottom-left before
 * the whole thing fades to reveal the site.
 *
 * Plays on every full page load/refresh (not stored across visits).
 * RouteLoadingBar (see components/layout/RouteLoadingBar.tsx) handles
 * the lightweight in-between-pages loading feedback instead.
 */
const SHOW_ONCE_PER_SESSION = false;

const WORDS = ["STRATEGY.", "CONTENT.", "GROWTH."];
const WORD_COLORS = ["#ef2f7a", "#fc842e", "#a855f7"]; // pink, orange, purple — matches the logo's tagline

const CREAM = "#f7f6f3";
const ROSE = "#f2611f";
const CORAL = "#fc842e";
const HONEY = "#ffa45c";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [wordIndex, setWordIndex] = useState(-1);
  const [wordsDone, setWordsDone] = useState(false);
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setMounted(true);

    if (SHOW_ONCE_PER_SESSION) {
      if (sessionStorage.getItem("sb-splash-seen")) return;
      sessionStorage.setItem("sb-splash-seen", "1");
    }

    setShow(true);

    if (reducedMotion) {
      const t = setTimeout(() => setShow(false), 500);
      timers.current.push(t);
      return () => timers.current.forEach(clearTimeout);
    }

    WORDS.forEach((_, i) => {
      const t = setTimeout(() => setWordIndex(i), 800 + i * 300);
      timers.current.push(t);
    });
    timers.current.push(setTimeout(() => setWordsDone(true), 800 + WORDS.length * 300));

    const controls = animate(0, 100, {
      duration: 2.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });

    timers.current.push(setTimeout(() => setExiting(true), 2900));
    timers.current.push(setTimeout(() => setShow(false), 4100));

    return () => {
      controls.stop();
      timers.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-[200] bg-sb-black" />;
  if (!show) return null;

  if (reducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        onAnimationComplete={() => setShow(false)}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-sb-black"
      >
        <div className="sb-logo-badge relative h-16 w-24">
          <Image src="/logo/sb-logo-full.png" alt="SocialBug Media" fill sizes="96px" className="object-contain" priority />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[200] overflow-hidden bg-sb-black"
      style={{ pointerEvents: exiting ? "none" : "auto" }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: exiting ? 1.1 : 0.3, ease: "easeInOut" }}
    >
      {/* symmetric vignette, dark edges, clean centre stage */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(20,20,20,0) 0%, rgba(5,5,5,0.55) 75%, rgba(5,5,5,0.9) 100%)",
        }}
      />

      {/* centre content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.55, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-28 w-40 sm:h-36 sm:w-52"
        >
          <motion.div
            className="sb-logo-badge relative h-full w-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, delay: 0.9 }}
            style={{ filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.5))" }}
          >
            <Image
              src="/logo/sb-logo-full.png"
              alt="SocialBug Media"
              fill
              className="object-contain"
              priority
              quality={100}
              sizes="208px"
            />
          </motion.div>
        </motion.div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {WORDS.map((word, i) => (
            <span key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: wordIndex >= i ? "0%" : "120%", opacity: wordIndex >= i ? 1 : 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-logo inline-block text-3xl font-bold tracking-tight sm:text-5xl"
                style={{ color: WORD_COLORS[i] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: wordsDone ? 0.45 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading mt-4 text-[11px] uppercase tracking-[0.3em] sm:text-xs"
          style={{ color: CREAM }}
        >
          Creator-led growth for ambitious products
        </motion.p>
      </div>

      {/* bottom-left counter + progress bar */}
      <div className="absolute bottom-8 left-6 z-20 sm:bottom-10 sm:left-10">
        <span className="font-display text-4xl leading-none sm:text-5xl" style={{ color: CREAM }}>
          {count}
          <span style={{ color: CORAL }}>%</span>
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/10">
        <div
          className="h-full"
          style={{
            width: `${count}%`,
            background: `linear-gradient(90deg, ${ROSE}, ${CORAL}, ${HONEY})`,
          }}
        />
      </div>
    </motion.div>
  );
}
