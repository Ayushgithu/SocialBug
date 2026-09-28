"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/**
 * Floating WhatsApp button (bottom-right, sits just above the Back-to-top button).
 * Hidden on phones — the sticky bottom bar (MobileCTABar) already has WhatsApp there.
 * To change the number or the message, edit lib/whatsapp.ts.
 */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Wait until the splash screen is done before showing the button.
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="pointer"
          aria-label="Chat with SocialBug Media on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-20 right-5 z-40 hidden items-center gap-3 sm:bottom-24 sm:right-8 sm:flex"
        >
          {/* label, desktop hover only */}
          <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap rounded-full border border-white/15 bg-sb-black/90 px-4 py-2 font-heading text-xs font-medium text-sb-white opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
            Chat with us on WhatsApp
          </span>

          <span className="relative flex h-14 w-14 items-center justify-center">
            {/* soft pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
                <path d="M16.02 3C8.83 3 3 8.83 3 16.02c0 2.3.6 4.53 1.74 6.5L3 29l6.68-1.75a13 13 0 0 0 6.34 1.62h.01C23.2 28.87 29 23.04 29 15.85 29 12.4 27.66 9.16 25.22 6.72A12.9 12.9 0 0 0 16.02 3Zm0 23.66h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.23-3.96 1.04 1.06-3.86-.26-.4a10.8 10.8 0 0 1-1.66-5.7c0-5.98 4.87-10.85 10.86-10.85 2.9 0 5.62 1.13 7.67 3.18a10.78 10.78 0 0 1 3.17 7.68c0 5.99-4.87 10.64-10.97 10.64Zm5.95-8.1c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.74 0 1.61 1.18 3.17 1.34 3.39.16.22 2.31 3.53 5.6 4.95.78.34 1.39.54 1.87.69.79.25 1.5.21 2.06.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38Z" />
              </svg>
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}