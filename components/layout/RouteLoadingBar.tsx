"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Thin progress bar across the top of the viewport, shown briefly whenever
 * the route changes. The splash screen only plays once per session (see
 * SplashScreen.tsx); this is the lighter "moving from page to page" cue
 * for every navigation after that.
 */
export default function RouteLoadingBar() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const isFirstRender = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    timers.current.forEach(clearTimeout);
    setActive(true);
    const t = setTimeout(() => setActive(false), 480);
    timers.current.push(t);

    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="route-loading-bar"
          className="pointer-events-none fixed inset-x-0 top-0 z-[300] h-[2.5px] overflow-hidden bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-sb-pink via-sb-orange to-sb-lime"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "140%", "320%"] }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
