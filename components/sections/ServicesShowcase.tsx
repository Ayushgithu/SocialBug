"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Eye,
  Rocket,
  UserCircle,
  Smile,
  Share2,
  Video,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { LinkedInIcon, XIcon } from "@/components/ui/SocialIcons";
import LightCTA from "@/components/sections/LightCTA";

const ICON_BG: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  red: "bg-rose-50 text-rose-500",
  purple: "bg-violet-50 text-violet-600",
  yellow: "bg-amber-50 text-amber-500",
  pink: "bg-pink-50 text-pink-500",
  orange: "bg-orange-50 text-orange-500",
};

interface CardMeta {
  tint: keyof typeof ICON_BG;
  icon?: LucideIcon;
  stats?: { label: string; value: string }[];
  dual?: boolean;
}

const META: Record<string, CardMeta> = {
  "linkedin-x-creator-campaigns": { tint: "blue", dual: true },
  "instagram-youtube-tech-fintech-campaigns": { tint: "pink", icon: Video },
  "linkedin-founder-brand-amplification": {
    tint: "purple",
    icon: TrendingUp,
    stats: [
      { label: "Likes", value: "5,000+" },
      { label: "Comments", value: "500+" },
      { label: "Reposts", value: "500+" },
    ],
  },
  "one-partner-all-platforms": { tint: "green", icon: Share2 },
  "instagram-x-viral-amplification": {
    tint: "pink",
    icon: Eye,
    stats: [
      { label: "Views", value: "1M+" },
      { label: "Likes", value: "100K+" },
      { label: "Comments", value: "10K+" },
      { label: "Shares", value: "5K+" },
    ],
  },
  "product-hunt-launches": { tint: "orange", icon: Rocket },
  "founder-personal-branding": { tint: "purple", icon: UserCircle },
  "meme-marketing": { tint: "green", icon: Smile },
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

        <div className={`mt-10 grid gap-3.5 ${gridCols}`}>
          {items.map((s, i) => {
            const meta = META[s.slug] ?? { tint: "blue" as const };
            const Icon = meta.icon;
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
                  className="card-shiny group flex h-full flex-col rounded-xl border border-black/10 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5">
                        {meta.dual ? (
                          <div className="flex gap-1.5">
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
                              <LinkedInIcon size={16} />
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                              <XIcon size={14} />
                            </span>
                          </div>
                        ) : (
                          Icon && (
                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${ICON_BG[meta.tint]}`}>
                              <Icon size={18} />
                            </span>
                          )
                        )}
                        <h3 className="font-heading text-[15px] font-bold leading-tight text-black transition-colors group-hover:text-sb-orange">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-black/55">{s.short}</p>
                    </div>
                  </div>

                  {meta.stats && (
                    <div className="mt-3.5 flex flex-wrap gap-x-3.5 gap-y-1 rounded-lg bg-black/3 px-3 py-2.5">
                      {meta.stats.map((st) => (
                        <span key={st.label} className="text-[11px] text-black/50">
                          <strong className="font-heading text-black">{st.value}</strong> {st.label}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6">
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
