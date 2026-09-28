"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CaseCover from "@/components/ui/CaseCover";
import Sparkle from "@/components/ui/Sparkle";
import { caseStudies } from "@/lib/data";
import { cardAccentFor } from "@/lib/cardAccents";

/**
 * Full campaign grid for the /case-studies ("Work") page. Same cream-card
 * language as the Services grid: coloured top strip, soft corner circle,
 * sparkle bullets and a centred accent-coloured link.
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
            const bullets = cs.stats
              ? cs.stats.map((st) => `${st.value} ${st.label}`)
              : cs.result
                ? [`${cs.result.value} ${cs.result.label}`]
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
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#faf9f8] shadow-[0_12px_40px_-14px_rgba(60,30,80,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-14px_rgba(60,30,80,0.26)]"
                >
                  <span
                    className="absolute inset-x-0 top-0 z-10 h-1.5 opacity-60"
                    style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }}
                  />
                  <span
                    className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full"
                    style={{ background: a.soft }}
                  />

                  <div className="relative mx-3 mt-5 aspect-[16/10] overflow-hidden rounded-[20px] bg-black/5">
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
                      className="absolute left-3 top-3 rounded-full px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.06em] text-white"
                      style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }}
                    >
                      {cs.industry}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col px-6 pb-7 pt-5">
                    <div className="flex items-center gap-3">
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
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-heading text-xs font-bold text-white"
                          style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                        >
                          {cs.logo}
                        </span>
                      )}
                      <h3 className="truncate font-heading text-lg font-bold leading-tight text-[#2b1b3d]">
                        {cs.name}
                      </h3>
                    </div>

                    {bullets.length > 0 ? (
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-[15px] leading-snug text-[#2b1b3d]">
                            <Sparkle />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 line-clamp-3 text-[15px] leading-relaxed text-[#6b5b78]">
                        {cs.challenge}
                      </p>
                    )}

                    <span
                      className="mt-auto pt-8 text-center font-heading text-base font-semibold underline-offset-4 group-hover:underline"
                      style={{ color: a.text }}
                    >
                      Read the story
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