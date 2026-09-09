"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, XIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-sb-black-soft px-6 pt-20 pb-8">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sb-pink/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[13vw] leading-[0.92] sm:text-7xl lg:text-8xl"
        >
          LET&apos;S MAKE
          <br />
          THE INTERNET <span className="gradient-text">TALK.</span>
        </motion.h2>

        <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image src="/logo/socialbug-icon.png" alt="SocialBug Media" fill className="object-contain" />
              </div>
              <span className="font-heading text-lg font-semibold">
                SocialBug<span className="text-sb-pink">Media</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-sb-white/50">
              Strategy, creators, and content built to turn ambitious products into conversations.
            </p>
            <div className="flex gap-4">
              {[InstagramIcon, XIcon, LinkedInIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-cursor="pointer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sb-white/70 transition-colors hover:border-sb-lime hover:text-sb-lime"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
                Navigate
              </p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-sb-white/70 hover:text-sb-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
                More
              </p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.slice(5).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-sb-white/70 hover:text-sb-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
                Newsletter
              </p>
              <form className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-sb-white/30"
                />
                <button
                  type="submit"
                  data-cursor="pointer"
                  aria-label="Subscribe"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sb-white text-sb-black"
                >
                  <ArrowUpRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-sb-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} SocialBug Media. All rights reserved.</p>
          <p className="font-heading uppercase tracking-[0.2em]">
            Strategy. Content. Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
