"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWork() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected Work">
            CAMPAIGNS THAT
            <br />
            <span className="gradient-text">MOVED THE NEEDLE.</span>
          </SectionHeading>
          <Link
            href="/case-studies"
            data-cursor="pointer"
            className="hidden items-center gap-1 font-heading text-sm text-sb-white/60 hover:text-sb-white sm:flex"
          >
            View all case studies <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-16 flex flex-col gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                data-cursor="pointer"
                className={`group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/25 sm:p-10 lg:grid-cols-[1.2fr_auto_1fr] lg:items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
                    {cs.industry}
                  </p>
                  <h3 className="font-display mt-3 text-4xl sm:text-5xl">{cs.name}</h3>
                  <p className="mt-4 max-w-md text-sm text-sb-white/55">{cs.challenge}</p>
                  <span className="mt-6 inline-flex items-center gap-1 font-heading text-sm text-sb-lime opacity-0 transition-opacity group-hover:opacity-100">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>

                <div className="hidden h-full w-px bg-white/10 lg:block" />

                <div className="grid grid-cols-2 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display gradient-text text-3xl sm:text-4xl">{m.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-sb-white/40">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
