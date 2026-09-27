"use client";

import { motion } from "framer-motion";
import { Users, Zap, Globe2, TrendingUp, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";

const stats: { icon: LucideIcon; value: string; label: string; accent: string }[] = [
  {
    icon: Users,
    value: "1000+",
    label: "Vetted creators across every major platform",
    accent: "from-sb-pink to-sb-orange",
  },
  {
    icon: Zap,
    value: "30",
    label: "Minutes to get a ready campaign live",
    accent: "from-sb-orange to-sb-lime",
  },
  {
    icon: Globe2,
    value: "22+",
    label: "Platforms our network reaches, LinkedIn-first",
    accent: "from-sb-blue to-sb-purple",
  },
  {
    icon: TrendingUp,
    value: "5M+",
    label: "Cumulative views generated for client campaigns",
    accent: "from-sb-purple to-sb-pink",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sb-orange/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="The Impact" align="center">
          NUMBERS THAT MAKE
          <br />
          BRANDS <span className="gradient-text">TALK.</span>
        </SectionHeading>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="sb-card-shine group relative flex flex-col gap-3.5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-sb-orange/50"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${s.accent} text-sb-black shadow-[0_8px_20px_-6px_rgba(252,132,46,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                <s.icon size={16} />
              </span>
              <p className="font-display text-3xl leading-none sm:text-[2.2rem]">
                <Counter value={s.value} />
              </p>
              <p className="text-[13px] leading-relaxed text-sb-white/55">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
