"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/** True on phones/tablets: covers touch-primary pointers, devices that
 *  report touch support at all, and narrow/tablet-width screens — any
 *  one of these being true is enough to skip the JS smooth-scroll
 *  engine, so we don't rely on a single (sometimes unreliable) signal. */
function isMobileDevice() {
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const hasTouch =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const narrowScreen = window.innerWidth <= 1024;
  return coarsePointer || hasTouch || narrowScreen;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Mobile gets plain native scrolling, full stop: the JS smooth-scroll
    // engine (Lenis) is what makes scrolling feel eased/springy instead of
    // the normal, direct scroll a phone does on its own.
    if (prefersReduced || isMobileDevice()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
