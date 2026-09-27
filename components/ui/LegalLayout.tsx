"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { Mail, Clock3 } from "lucide-react";
import { socialLinks } from "@/lib/data";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

/**
 * Shared shell for legal pages: hero, a sticky in-view table of contents on
 * desktop, and numbered sections with anchor targets so each clause is
 * linkable and easy to scan on mobile too.
 */
export default function LegalLayout({
  eyebrow,
  title,
  description,
  updated,
  sections,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="relative px-6 pb-28">
        <div className="mx-auto flex max-w-6xl items-start gap-3 border-b border-white/10 pb-6 text-xs text-sb-white/45">
          <Clock3 size={14} className="text-sb-orange" />
          Last updated {updated}
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 pt-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* table of contents */}
          <nav className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-1">
              <p className="mb-3 font-heading text-[11px] uppercase tracking-[0.2em] text-sb-white/40">
                On this page
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  data-cursor="pointer"
                  className={`border-l-2 py-1.5 pl-3 text-[13px] leading-snug transition-colors ${
                    active === s.id
                      ? "border-sb-orange text-sb-white"
                      : "border-white/10 text-sb-white/45 hover:text-sb-white/70"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </nav>

          {/* content */}
          <div className="flex flex-col gap-14">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-28"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display gradient-text-alt text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-xl font-semibold sm:text-2xl">{s.title}</h2>
                </div>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-sb-white/65 sm:text-[15px]">
                  {s.content}
                </div>
              </motion.div>
            ))}

            {/* contact card */}
            <div className="glow-border rounded-xl bg-white/[0.02] p-7 sm:p-8">
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-orange">
                Questions about this policy?
              </p>
              <p className="mt-3 text-sm text-sb-white/60">
                Reach out and we&apos;ll get back to you within one business day.
              </p>
              <Link
                href="/contact"
                data-cursor="pointer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sb-white transition-colors hover:text-sb-orange"
              >
                <Mail size={15} className="text-sb-lime" />
                {socialLinks.email}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
