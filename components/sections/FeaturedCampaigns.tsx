"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Counter from "@/components/ui/Counter";
import CaseCover from "@/components/ui/CaseCover";
import { caseStudies } from "@/lib/data";

/**
 * Featured campaign cards: cover (or typographic fallback), brand mark,
 * campaign type and the challenge (or headline result when there is one).
 */
export default function FeaturedCampaigns({
  limit = 3,
  heading,
  eyebrow = "Work",
  note = "Selected campaigns, more on request.",
  showViewAll = false,
}: {
  limit?: number;
  heading?: React.ReactNode;
  eyebrow?: string;
  note?: string;
  showViewAll?: boolean;
}) {
  const items = caseStudies.slice(0, limit);

  return (
    <section className="relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-sb-orange">
              {eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.02] sm:text-5xl">
              {heading ?? (
                <>
                  FEATURED <span className="gradient-text">CAMPAIGNS</span>
                </>
              )}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs text-sm text-sb-white/50"
          >
            {note}
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cs, i) => {
            const tint = [
              { text: "text-sb-orange", border: "border-sb-orange/40", bg: "rgba(252,132,46,0.25), rgba(255,164,92,0.05)" },
              { text: "text-sb-blue", border: "border-sb-blue/40", bg: "rgba(63,169,255,0.25), rgba(63,169,255,0.05)" },
              { text: "text-sb-pink", border: "border-sb-pink/40", bg: "rgba(236,72,153,0.25), rgba(236,72,153,0.05)" },
              { text: "text-sb-lime", border: "border-sb-lime/40", bg: "rgba(190,242,100,0.25), rgba(190,242,100,0.05)" },
            ][i % 4];
            return (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                data-cursor="pointer"
                className="group sb-card-shine relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/2 transition-all duration-400 hover:-translate-y-1.5 hover:border-sb-orange/60"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-black/20">
                  {cs.image ? (
                    <Image
                      src={cs.image}
                      alt={`${cs.name} campaign`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-900 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <CaseCover name={cs.name} logo={cs.logo} industry={cs.industry} />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-sb-black via-sb-black/20 to-transparent" />
                  <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-sb-orange text-sb-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                  <div className="flex items-center gap-2.5">
                    {cs.brandLogo ? (
                      <span className="relative h-10 w-20 shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={cs.brandLogo}
                          alt={cs.name}
                          fill
                          sizes="80px"
                          className="object-contain object-left"
                        />
                      </span>
                    ) : (
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-display text-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${tint.border} ${tint.text}`}
                        style={{
                          background: `linear-gradient(150deg, ${tint.bg})`,
                        }}
                      >
                        {cs.logo}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="truncate font-heading text-[9px] uppercase tracking-[0.16em] text-sb-white/45">
                        {cs.industry}
                      </p>
                      <h3 className="truncate font-heading text-[15px] font-semibold leading-tight">
                        {cs.name}
                      </h3>
                    </div>
                  </div>

                  {cs.stats ? (
                    <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
                      {cs.stats.map((st) => (
                        <div key={st.label}>
                          <p className="font-heading text-[13px] font-bold text-sb-white">
                            <Counter value={st.value} />
                          </p>
                          <p className="mt-1 truncate text-[9px] uppercase tracking-[0.12em] text-sb-white/40">
                            {st.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : cs.result ? (
                    <div className="mt-3 flex items-baseline gap-2 border-t border-white/10 pt-3">
                      <p className="gradient-text font-display text-2xl leading-none">
                        {cs.result.value}
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.12em] text-sb-white/40">
                        {cs.result.label}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-3 line-clamp-2 border-t border-white/10 pt-3 text-xs leading-relaxed text-sb-white/55">
                      {cs.challenge}
                    </p>
                  )}
                </div>
              </Link>
            </motion.article>
            );
          })}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/case-studies"
              data-cursor="pointer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-sb-orange/40 bg-sb-orange/6 px-7 py-3.5 font-heading text-sm font-semibold text-sb-white transition-all duration-300 hover:border-sb-orange hover:bg-sb-orange hover:text-sb-black"
            >
              <span className="absolute inset-0 -z-10 translate-x-[-105%] bg-linear-to-r from-sb-pink via-sb-orange to-sb-lime transition-transform duration-500 group-hover:translate-x-0" />
              View All Campaigns
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
