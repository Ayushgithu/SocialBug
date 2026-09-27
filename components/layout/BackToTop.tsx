"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating bottom-right button that appears after scrolling and smooth-scrolls back to top. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-cursor="pointer"
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-sb-black/85 text-sb-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-colors duration-300 hover:border-sb-orange hover:text-sb-orange sm:bottom-8 sm:right-8"
        >
          <span className="sb-btn-sheen flex h-full w-full items-center justify-center rounded-full">
            <ArrowUp size={20} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
