"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  slug: string;
  name: string;
  industry: string;
  result: string;
  challenge: string;
  index?: number;
  className?: string;
}

export default function CaseStudyCard({
  slug,
  name,
  industry,
  result,
  challenge,
  index = 0,
  className,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
      className={cn(className)}
    >
      <Link href={`/case-studies/${slug}`} data-cursor="pointer" className="group block">
        <div className="glow-border relative overflow-hidden rounded-3xl bg-white/[0.02] p-8 transition-colors duration-300 hover:bg-white/[0.04] sm:p-10">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sb-purple/10 blur-[100px] transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-sb-white/40">
                {industry}
              </p>
              <h3 className="font-display mt-3 text-4xl sm:text-5xl">{name}</h3>
              <p className="mt-4 max-w-md text-sm text-sb-white/55">{challenge}</p>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <div className="text-right">
                <p className="gradient-text font-display text-3xl sm:text-4xl">{result}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sb-white/40">
                  Headline result
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-sb-lime group-hover:bg-sb-lime group-hover:text-sb-black">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
