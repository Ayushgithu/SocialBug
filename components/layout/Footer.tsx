"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { navLinks, legalLinks, socialLinks } from "@/lib/data";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import NavIcon from "@/components/ui/NavIcon";
import CopyRow from "@/components/ui/CopyRow";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { CLD } from "@/lib/cloudinary";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden border-t border-white/10 bg-sb-black-soft px-6 pt-10 pb-6">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sb-orange/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
        >
          LET&apos;S MAKE
          <br />
          THE INTERNET <span className="gradient-text">TALK.</span>
        </motion.h2>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-5">
            <Link href="/" data-cursor="pointer" className="sb-logo-hop flex w-fit items-center">
              <div className="sb-logo-badge relative h-36 w-52 shrink-0">
                <Image src={CLD.logo.full} alt="SocialBug Media" fill sizes="208px" className="object-contain" />
              </div>
            </Link>
            <p className="max-w-xs text-sm text-sb-white/50">
              Strategy, creators, and content built to turn ambitious products into conversations.
            </p>

            <AvailabilityBadge />

            {/* contact, tap to open, copy button beside each */}
            <div className="flex max-w-xs flex-col gap-3">
              <CopyRow icon={Mail} value={socialLinks.email} href={`mailto:${socialLinks.email}`} />
              <CopyRow icon={Phone} value={socialLinks.phone} href={`tel:${socialLinks.phone.replace(/\s+/g, "")}`} />
            </div>

            <div className="flex gap-4">
              {[
                { Icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram" },
                { Icon: LinkedInIcon, href: socialLinks.linkedinCompany, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  aria-label={label}
                  className="sb-icon-3d flex items-center justify-center transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 active:scale-95"
                >
                  <Icon size={34} />
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
                    <Link
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-sb-white/70 transition-colors hover:text-sb-white"
                    >
                      <NavIcon name={l.icon} size={13} className="text-sb-orange/70" />
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
                {[...navLinks.slice(5), ...legalLinks].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-sb-white/70 transition-colors hover:text-sb-white"
                    >
                      <NavIcon name={l.icon} size={13} className="text-sb-orange/70" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
                Get In Touch
              </p>
              <Link
                href="/contact"
                data-cursor="pointer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition-colors duration-300 hover:border-sb-orange/60 hover:bg-sb-orange/10"
              >
                <span className="text-sm text-sb-white/70 transition-colors group-hover:text-sb-white">
                  Start a project with us
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sb-white text-sb-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-sb-white/40 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
            <p>© {new Date().getFullYear()} SocialBug Media. All rights reserved.</p>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <p>GSTIN: {business.gstin}</p>
          </div>
          <p className="font-logo text-sm normal-case tracking-[0.02em]">
            <span style={{ color: "#ef2f7a" }}>Strategy.</span>{" "}
            <span style={{ color: "#fc842e" }}>Content.</span>{" "}
            <span style={{ color: "#a855f7" }}>Growth.</span>
          </p>
        </div>

        <div className="mt-3 flex justify-center">
          <div className="flex items-center gap-1.5 rounded-full border border-sb-orange/20 bg-sb-orange/6 px-4 py-2 text-center text-[11px] text-sb-white/60">
            <span>Made with</span>
            <span className="text-sb-orange">♥</span>
            <span>
              created by{" "}
              <a href="https://lexicalsoftware.in"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="font-semibold text-sb-orange underline decoration-sb-orange/40 underline-offset-2 transition-colors hover:text-sb-lime hover:decoration-sb-lime"
              >
                Lexical Software
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}