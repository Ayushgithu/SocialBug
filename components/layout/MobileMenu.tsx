"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, socialLinks } from "@/lib/data";
import { X, Sparkles } from "lucide-react";
import NavIcon from "@/components/ui/NavIcon";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

// Testimonials lives on its own page but isn't a primary nav destination -
// keep the mobile menu to the core site sections.
const mobileLinks = navLinks.filter((l) => l.label !== "Testimonials");

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 92% 5%)" }}
      animate={{ clipPath: "circle(150% at 92% 5%)" }}
      exit={{ clipPath: "circle(0% at 92% 5%)" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-sb-black px-5 py-6 sm:px-6 sm:py-8"
    >
      <GradientBlobs />

      <div className="flex items-center justify-between">
        <span className="font-heading text-sm font-semibold tracking-wide">
          SocialBug <span className="text-sb-pink">Media</span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-1 pt-8 sm:gap-1.5 sm:pt-10">
        {mobileLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="group flex items-center gap-3 py-2.5 text-sb-white transition-colors active:text-sb-lime"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sb-orange/30 bg-sb-orange/10 text-sb-orange">
                <NavIcon name={link.icon} size={17} />
              </span>
              <span className="font-display text-[2rem] leading-[1.05] sm:text-4xl">{link.label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
        <div className="flex items-center gap-4">
          {[
            { Icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram" },
            { Icon: LinkedInIcon, href: socialLinks.linkedinCompany, label: "LinkedIn" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              aria-label={label}
              className="sb-icon-3d flex items-center justify-center transition-transform duration-300 ease-out active:scale-90"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
        <Link
          href="/contact"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-sb-white px-5 py-3.5 text-center font-heading text-sm font-semibold leading-tight text-sb-black sm:w-auto sm:py-2.5 sm:text-xs"
        >
          Get Started
          <span className="flex items-center gap-1 rounded-full bg-sb-black px-3 py-1.5 text-xs font-bold text-sb-lime">
            <Sparkles size={11} /> 2 mins
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
