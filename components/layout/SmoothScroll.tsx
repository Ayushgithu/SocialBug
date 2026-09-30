"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mobileViewport = window.matchMedia(
      "(max-width: 767px), (pointer: coarse)",
    );
    let lenis: Lenis | undefined;

    const updateSmoothScroll = () => {
      if (mobileViewport.matches) {
        lenis?.destroy();
        lenis = undefined;
        return;
      }

      if (!lenis) {
        lenis = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
          autoRaf: true,
          respectReducedMotion: true,
        });
      }
    };

    updateSmoothScroll();
    mobileViewport.addEventListener("change", updateSmoothScroll);

    return () => {
      mobileViewport.removeEventListener("change", updateSmoothScroll);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
