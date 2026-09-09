"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { X } from "lucide-react";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { InstagramIcon, XIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 92% 5%)" }}
      animate={{ clipPath: "circle(150% at 92% 5%)" }}
      exit={{ clipPath: "circle(0% at 92% 5%)" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-sb-black px-6 py-8"
    >
      <GradientBlobs />

      <div className="flex items-center justify-between">
        <span className="font-heading text-sm font-semibold tracking-wide">
          SocialBug<span className="text-sb-pink">Media</span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display block py-2 text-[13vw] leading-[1.05] text-sb-white transition-colors active:text-sb-lime"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="flex items-center justify-between border-t border-white/10 pt-6">
        <div className="flex gap-4 text-sb-white/60">
          <InstagramIcon size={18} />
          <XIcon size={18} />
          <LinkedInIcon size={18} />
        </div>
        <Link
          href="/contact"
          onClick={onClose}
          className="rounded-full bg-sb-white px-5 py-2.5 font-heading text-xs font-semibold text-sb-black"
        >
          Book a Demo →
        </Link>
      </div>
    </motion.div>
  );
}
