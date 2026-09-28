"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/** Sticky bottom bar on phones: Get Started + WhatsApp. Hidden on /contact and on sm+ screens. */
export default function MobileCTABar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Wait until the splash screen is done.
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4300);
    return () => clearTimeout(t);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-white/10 bg-sb-black/90 px-4 pt-3 backdrop-blur-xl sm:hidden"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
        >
          <Link
            href="/contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sb-orange py-3 font-heading text-sm font-semibold text-sb-black transition-transform active:scale-95"
          >
            <Sparkles size={15} /> Get Started
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-heading text-sm font-semibold text-white transition-transform active:scale-95"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}