"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNavLinks } from "@/lib/data";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`glow-border relative mx-4 flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-sb-black/70 backdrop-blur-xl"
              : "bg-white/[0.03] backdrop-blur-md"
          }`}
        >
          <Link href="/" data-cursor="pointer" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src="/logo/socialbug-icon.png"
                alt="SocialBug Media logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden font-heading text-sm font-semibold tracking-wide sm:block">
              SocialBug<span className="text-sb-pink">Media</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {primaryNavLinks.map((link) => (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  data-cursor="pointer"
                  className="relative flex items-center gap-1.5 rounded-full px-3.5 py-2 font-heading text-[13px] font-medium text-sb-white/75 transition-colors duration-300 hover:text-sb-white"
                >
                  <span className="h-1 w-1 scale-0 rounded-full bg-sb-lime transition-transform duration-300 group-hover:scale-100" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href="/contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
                Book a Demo →
              </Button>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              data-cursor="pointer"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
