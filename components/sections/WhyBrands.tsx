"use client";

import { motion } from "framer-motion";
import { Users, Clock, LineChart, ShieldCheck } from "lucide-react";
import Counter from "@/components/ui/Counter";

const points = [
  {
    icon: Users,
    value: "1000+",
    title: "Creators on speed dial",
    text: "Relationships built over years, not a marketplace list bought last month.",
  },
  {
    icon: Clock,
    value: "1",
    title: "Day to go live",
    text: "A single post can go live within a few hours of approval.",
  },
  {
    icon: LineChart,
    value: "100+",
    title: "Campaigns delivered",
    text: "Planned, produced, posted and reported by the same small team.",
  },
  {
    icon: ShieldCheck,
    value: "20+",
    title: "Agencies rely on us",
    text: "Other agencies quietly use our network for their own clients.",
  },
];

/**
 * The one light section on the page, a deliberate flip to a white canvas so
 * the dark sections above and below read as separate chapters.
 */
export default function WhyBrands() {
  return (
    <section className="sb-light relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-sb-pink">
              Why teams pick us
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.02] sm:text-5xl">
              A SMALL TEAM WITH A{" "}
              <span className="text-sb-pink">BIG</span>{" "}
              <span className="text-sb-orange">ROLODEX.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-black/55">
            No account-manager relay, no reselling someone else&apos;s network. You talk to the
            people actually running the campaign.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-xl border border-black/10 bg-black/3 p-5 shadow-[0_10px_22px_-16px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-sb-orange/60 hover:shadow-[0_18px_32px_-16px_rgba(252,132,46,0.35)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sb-orange text-black transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110">
                <p.icon size={18} />
              </span>
              <p className="font-display mt-5 text-4xl text-black">
                <Counter value={p.value} />
              </p>
              <h3 className="font-heading mt-2 text-base font-semibold text-black">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
