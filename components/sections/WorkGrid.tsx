"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CaseCover from "@/components/ui/CaseCover";
import { caseStudies } from "@/lib/data";
import { cardAccentFor } from "@/lib/cardAccents";

/**
 * Full campaign grid for the /case-studies ("Work") page.
 * Cream card, image on top with a white brand badge, result numbers as
 * mini stat boxes, and a gradient arrow button in the footer.
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => {
            const a = cardAccentFor(i);
            const stats: { value: string; label: string }[] = cs.stats
              ? cs.stats.slice(0, 3)
              : cs.result
                ? [{ value: cs.result.value, label: cs.result.label }]
                : [];

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
                  className="group relative flex h-full flex-col rounded-[28px] bg-[#faf9f8] p-3 shadow-[0_12px_40px_-14px_rgba(60,30,80,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-14px_rgba(60,30,80,0.26)]"
                >
                  {/* image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-black/5">
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

                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.06em] text-[#2b1b3d] backdrop-blur">
                      {cs.industry}
                    </span>

                    {/* brand badge */}
                    <span className="absolute bottom-3 left-3 flex h-11 min-w-11 items-center justify-center rounded-2xl bg-white px-2 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]">
                      {cs.brandLogo ? (
                        <span className="relative h-6 w-14">
                          <Image
                            src={cs.brandLogoWhite}
                            alt={cs.name}
                            fill
                            sizes="56px"
                            className="object-contain"
                          />
                        </span>
                      ) : (
                        <span className="font-heading text-xs font-bold" style={{ color: a.text }}>
                          {cs.logo}
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4">
                    <h3 className="font-heading text-lg font-bold leading-tight text-[#2b1b3d]">
                      {cs.name}
                    </h3>

                    {stats.length > 0 ? (
                      <div
                        className="mt-4 grid gap-2"
                        style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
                      >
                        {stats.map((st) => (
                          <div
                            key={st.label}
                            className="rounded-xl px-2 py-3 text-center"
                            style={{ background: a.soft }}
                          >
                            <p className="font-heading text-lg font-bold leading-none" style={{ color: a.text }}>
                              {st.value}
                            </p>
                            <p className="mt-1.5 truncate text-[10px] uppercase tracking-wider text-[#6b5b78]">
                              {st.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#6b5b78]">
                        {cs.challenge}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-5 [margin-top:1.75rem]">
                      <span className="font-heading text-[15px] font-semibold" style={{ color: a.text }}>
                        Read the story
                      </span>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                        style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                      >
                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                    </div>
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