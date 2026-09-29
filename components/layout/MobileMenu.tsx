"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, socialLinks } from "@/lib/data";
import { X, Sparkles, ChevronRight } from "lucide-react";
import NavIcon from "@/components/ui/NavIcon";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

// Testimonials lives on its own page but isn't a primary nav destination -
// keep the mobile menu to the core site sections.
const mobileLinks = navLinks.filter((l) => l.label !== "Testimonials");

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 92% 5%)" }}
      animate={{ clipPath: "circle(150% at 92% 5%)" }}
      exit={{ clipPath: "circle(0% at 92% 5%)" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-100 flex flex-col overflow-y-auto bg-sb-black px-5 py-6 sm:px-6 sm:py-8"
    >
      <GradientBlobs />

      {/* Top bar */}
      <div className="relative flex items-center justify-between">
        <span className="font-heading text-[13px] font-semibold tracking-wide">
          SocialBug <span className="text-sb-pink">Media</span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition-transform active:scale-90"
        >
          <X size={18} />
        </button>
      </div>

      {/* Links */}
      <nav className="relative flex flex-col gap-2 pt-8 sm:pt-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-1 px-1 font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-white/40"
        >
          Menu
        </motion.p>

        {mobileLinks.map((link, i) => {
          const active = isActive(link.href);
          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-2xl border px-3 py-2 transition-all duration-200 active:scale-[0.98] ${
                  active
                    ? "border-sb-orange/30 bg-sb-orange/10"
                    : "border-white/5 bg-white/3 active:border-sb-orange/30 active:bg-sb-orange/10"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                    active
                      ? "border-sb-orange/40 bg-sb-orange/20 text-sb-orange"
                      : "border-sb-orange/20 bg-sb-orange/10 text-sb-orange"
                  }`}
                >
                  <NavIcon name={link.icon} size={16} />
                </span>

                <span
                  className={`font-display text-[1.15rem] leading-none tracking-wide sm:text-[1.35rem] ${
                    active ? "text-sb-white" : "text-sb-white/90"
                  }`}
                >
                  {link.label}
                </span>

                <ChevronRight
                  size={16}
                  className={`ml-auto shrink-0 transition-all duration-200 ${
                    active ? "text-sb-orange" : "text-white/25 group-active:translate-x-0.5"
                  }`}
                />
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="relative mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:gap-4 sm:border-0 sm:pt-0">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 sm:hidden">
            Follow us
          </p>
          <div className="flex items-center gap-4">
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
                className="sb-icon-3d flex items-center justify-center transition-transform duration-300 ease-out active:scale-90"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-sb-white px-5 py-3 text-center font-heading text-[13px] font-semibold leading-tight text-sb-black shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] transition-transform active:scale-[0.98] sm:w-auto sm:py-2.5 sm:text-xs"
        >
          Get Started
          <span className="flex items-center gap-1 rounded-full bg-sb-black px-2.5 py-1 text-[11px] font-bold text-sb-lime">
            <Sparkles size={10} /> 2 mins
          </span>
        </Link>
      </div>
    </motion.div>
  );
}