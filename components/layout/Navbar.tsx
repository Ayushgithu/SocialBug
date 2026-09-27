"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNavLinks } from "@/lib/data";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { Menu, Sparkles } from "lucide-react";
import NavIcon from "@/components/ui/NavIcon";

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
          className={`relative mx-4 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/8 px-5 py-2 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 ${
            scrolled
              ? "bg-sb-black/85 backdrop-blur-xl"
              : "bg-sb-black/60 backdrop-blur-xl"
          }`}
        >
          <Link href="/" data-cursor="pointer" className="sb-logo-hop flex items-center gap-1.5">
            <div className="sb-logo-badge relative flex h-11 w-11 shrink-0 items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src="/logo/sb-icon-dark.png"
                  alt="SocialBug Media logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span className="font-heading text-[15px] font-semibold tracking-wide">
              <span className="sb-logo-anim">SocialBug</span>{" "}
              <span className="text-sb-orange">Media</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {primaryNavLinks.map((link) => (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  data-cursor="pointer"
                  className="relative flex items-center gap-1.5 rounded-full px-3.5 py-2 font-heading text-[13px] font-medium text-sb-white/75 transition-all duration-300 hover:bg-white/6 hover:text-sb-white"
                >
                  <NavIcon
                    name={link.icon}
                    size={14}
                    className="text-sb-orange/70 transition-colors duration-300 group-hover:text-sb-orange"
                  />
                  {link.label}
                  <span className="absolute inset-x-3.5 bottom-1 h-px scale-x-0 bg-linear-to-r from-sb-pink to-sb-lime transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href="/contact"
                variant="primary"
                className="px-5! py-2! text-xs!"
                badge={
                  <>
                    <Sparkles size={10} /> 2 mins
                  </>
                }
              >
                Get Started
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
