"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { cardAccentFor } from "@/lib/cardAccents";
import ServicePlatformIcons from "@/components/ui/ServicePlatformIcons";
import LightCTA from "@/components/sections/LightCTA";

const STATS_BY_SLUG: Record<string, { label: string; value: string }[]> = {
  "linkedin-founder-brand-amplification": [
    { label: "Likes", value: "5,000+" },
    { label: "Comments", value: "500+" },
    { label: "Reposts", value: "500+" },
  ],
  "instagram-x-viral-amplification": [
    { label: "Views", value: "1M+" },
    { label: "Likes", value: "100K+" },
    { label: "Comments", value: "10K+" },
    { label: "Shares", value: "5K+" },
  ],
};

export default function ServicesShowcase({
  showViewAll = false,
  limit,
}: {
  showViewAll?: boolean;
  limit?: number;
}) {
  const items = limit ? services.slice(0, limit) : services;
  const gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="sb-light relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-500">
            Services We Offer
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.1] sm:text-5xl">
            Everything You Need to <span className="gradient-text">Grow on Social</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/55">
            From creator campaigns to product launches, we help brands, founders, and products get
            noticed, talked about, and seen by the right audience.
          </p>
        </div>

        <div className={`mt-10 grid gap-5 ${gridCols}`}>
          {items.map((s, i) => {
            const a = cardAccentFor(i);
            const pills = s.workflow.slice(0, 4);
            const more = s.workflow.length - pills.length;
            const stats = STATS_BY_SLUG[s.slug];

            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  data-cursor="pointer"
                  className="group relative flex h-full flex-col rounded-[28px] bg-[#faf9f8] p-3 shadow-[0_12px_40px_-14px_rgba(60,30,80,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-14px_rgba(60,30,80,0.26)]"
                >
                  {/* tinted icon zone */}
                  <div
                    className="relative flex h-32 items-center justify-between rounded-[20px] px-5"
                    style={{ background: `linear-gradient(135deg, ${a.from}26, ${a.to}0d)` }}
                  >
                    <ServicePlatformIcons slug={s.slug} />
                    <span
                      className="self-start pt-4 font-display text-3xl leading-none opacity-40"
                      style={{ color: a.text }}
                    >
                      {s.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4">
                    <h3 className="font-heading text-xl font-bold leading-snug text-[#2b1b3d]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-[#6b5b78]">{s.short}</p>

                    {/* workflow steps as pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {pills.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] text-[#2b1b3d]"
                        >
                          {b}
                        </span>
                      ))}
                      {more > 0 && (
                        <span
                          className="rounded-full px-3 py-1 text-[12px] font-semibold"
                          style={{ background: a.soft, color: a.text }}
                        >
                          +{more} more
                        </span>
                      )}
                    </div>

                    {stats && (
                      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {stats.map((st) => (
                          <div key={st.label} className="rounded-xl bg-white px-2 py-2 text-center">
                            <p className="font-heading text-[13px] font-bold" style={{ color: a.text }}>
                              {st.value}
                            </p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[#6b5b78]">
                              {st.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-5">
                      <span className="font-heading text-[15px] font-semibold" style={{ color: a.text }}>
                        Learn more
                      </span>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                        style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                      >
                        <ArrowUpRight size={18} className="-rotate-0 transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8">
          <LightCTA
            eyebrow="Ready To Grow Your Brand?"
            heading="Let's launch your campaign."
            description={
              <>
                From strategy to execution, we&apos;ll help you create a high-impact campaign and
                take it live in as little as <strong className="font-semibold text-black">30 minutes</strong>.
              </>
            }
            buttonLabel="Get Started Now"
          />
        </div>

        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              href="/services"
              data-cursor="pointer"
              className="font-heading text-sm font-semibold text-sb-orange hover:text-sb-pink"
            >
              View all services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}