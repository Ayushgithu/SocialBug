"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import { cardAccentFor } from "@/lib/cardAccents";
import ServiceIconTile from "@/components/ui/ServiceIconTile";
import Sparkle from "@/components/ui/Sparkle";
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
  // On the homepage (limit set) the grid runs two-up instead of three-up.
  const gridCols = limit ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

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
            const bullets = s.workflow.slice(0, 4);
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
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#faf9f8] px-6 pb-7 pt-9 shadow-[0_12px_40px_-14px_rgba(60,30,80,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-14px_rgba(60,30,80,0.26)] sm:px-7"
                >
                  <span
                    className="absolute inset-x-0 top-0 h-1.5 opacity-60"
                    style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }}
                  />
                  <span
                    className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full"
                    style={{ background: a.soft }}
                  />

                  <ServiceIconTile slug={s.slug} accentIndex={i} />

                  <h3 className="relative mt-6 font-heading text-xl font-bold leading-snug text-[#2b1b3d]">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-[#6b5b78]">{s.short}</p>

                  <ul className="relative mt-6 flex flex-col gap-3">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] leading-snug text-[#2b1b3d]">
                        <Sparkle />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {stats && (
                    <div className="relative mt-5 flex flex-wrap gap-x-3.5 gap-y-1 border-t border-black/5 pt-4">
                      {stats.map((st) => (
                        <span key={st.label} className="text-[12px] text-[#6b5b78]">
                          <strong className="font-heading text-[#2b1b3d]">{st.value}</strong> {st.label}
                        </span>
                      ))}
                    </div>
                  )}

                  <span
                    className="relative mt-auto pt-9 text-center font-heading text-base font-semibold underline-offset-4 group-hover:underline"
                    style={{ color: a.text }}
                  >
                    Learn More
                  </span>
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