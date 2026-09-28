"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CaseCover from "@/components/ui/CaseCover";
import { caseStudies, accentFor } from "@/lib/data";

/**
 * Full campaign grid for the /case-studies ("Work") page. Same light-theme,
 * white-card language as the Services grid, each card keyed to its own
 * rotating accent color for the industry tag, number and hover state.
 */
export default function WorkGrid({
  eyebrow = "Featured",
  note = "Every campaign here is a real, shipped piece of work, click any card for the full story.",
}: {
  eyebrow?: string;
  note?: string;
}) {
  return (
    <section className="sb-light relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-lg text-sm text-black/55">
          <span className="mr-2 font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-sb-orange">
            {eyebrow}
          </span>
          {note}
        </p>

        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => {
            const accent = accentFor(i);
            return (
              <motion.article
                key={cs.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/case-studies/${cs.slug}`}
                  data-cursor="pointer"
                  className="card-shiny sb-auto-shine group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-black/5">
                    {cs.image ? (
                      <Image
                        src={cs.image}
                        alt={`${cs.name} campaign`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <CaseCover name={cs.name} logo={cs.logo} industry={cs.industry} />
                    )}
                    <span
                      className="absolute left-3 top-3 rounded-full px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.06em]"
                      style={{ background: accent.hex, color: accent.on }}
                    >
                      {cs.industry}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-center gap-2.5">
                      {cs.brandLogo ? (
                        <span className="relative h-8 w-16 shrink-0">
                          <Image
                            src={cs.brandLogoWhite}
                            alt={cs.name}
                            fill
                            sizes="64px"
                            className="object-contain object-left"
                          />
                        </span>
                      ) : (
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold"
                          style={{ background: accent.soft, color: accent.hex }}
                        >
                          {cs.logo}
                        </span>
                      )}
                      <h3 className="truncate font-heading text-[15px] font-bold leading-tight text-black transition-colors group-hover:text-sb-orange">
                        {cs.name}
                      </h3>
                    </div>

                    {cs.stats ? (
                      <div className="mt-3.5 flex flex-wrap gap-x-3.5 gap-y-1 rounded-lg bg-black/3 px-3 py-2.5">
                        {cs.stats.map((st) => (
                          <span key={st.label} className="text-[11px] text-black/50">
                            <strong className="font-heading text-black">{st.value}</strong> {st.label}
                          </span>
                        ))}
                      </div>
                    ) : cs.result ? (
                      <div className="mt-3.5 flex items-baseline gap-2 rounded-lg bg-black/3 px-3 py-2.5">
                        <span className="font-heading text-sm font-bold" style={{ color: accent.hex }}>
                          {cs.result.value}
                        </span>
                        <span className="text-[11px] text-black/50">{cs.result.label}</span>
                      </div>
                    ) : (
                      <p className="mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-black/55">
                        {cs.challenge}
                      </p>
                    )}

                    <span className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-black/40 transition-all duration-300 group-hover:gap-2.5 group-hover:text-sb-orange">
                      Read the story <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
