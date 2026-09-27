"use client";

import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Layers,
  TrendingUp,
  Eye,
  Target,
  Settings,
  Handshake,
  Share2,
  type LucideIcon,
} from "lucide-react";
import LightCTA from "@/components/sections/LightCTA";

const ICON_BG: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  red: "bg-rose-50 text-rose-500",
  purple: "bg-violet-50 text-violet-600",
  yellow: "bg-amber-50 text-amber-500",
  pink: "bg-pink-50 text-pink-500",
};

interface Reason {
  icon: LucideIcon;
  tint: keyof typeof ICON_BG;
  title: string;
  sub: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    icon: Users,
    tint: "blue",
    title: "1,000+",
    sub: "Creators",
    desc: "Access a network of 1,000+ creators across Tech, AI, Fintech, SaaS, Founders, Marketing, and Business.",
  },
  {
    icon: Zap,
    tint: "green",
    title: "30 Minutes",
    sub: "Campaign Activation",
    desc: "Have a campaign that needs to go live quickly? We can activate campaigns in as little as 30 minutes, depending on requirements and creator availability.",
  },
  {
    icon: Layers,
    tint: "red",
    title: "Lower",
    sub: "Campaign Costs",
    desc: "Share your existing campaign cost with us. We can often execute the same creator profiles and requirements at a lower cost.",
  },
  {
    icon: TrendingUp,
    tint: "purple",
    title: "5,000+ Likes",
    sub: "2,000+ Comments · 100+ Reposts",
    desc: "Need high-volume engagement on a brand or founder post? We have the network and execution capability to scale campaigns to your requirements.",
  },
  {
    icon: Eye,
    tint: "yellow",
    title: "Millions",
    sub: "of Social Views",
    desc: "We amplify campaigns across X and Instagram to drive millions of views, shares, likes, and comments.",
  },
  {
    icon: Target,
    tint: "pink",
    title: "100+",
    sub: "Campaigns Executed",
    desc: "With 100+ campaigns executed, we've built the experience and processes to manage campaigns at scale.",
  },
  {
    icon: Settings,
    tint: "green",
    title: "End-to-End",
    sub: "Execution",
    desc: "Your team doesn't need to coordinate with hundreds of creators. We handle everything, creator selection, outreach, briefs, drafts, coordination, publishing, and engagement.",
  },
  {
    icon: Handshake,
    tint: "purple",
    title: "Trusted by",
    sub: "20+ Agencies",
    desc: "We work with agencies behind the scenes to execute creator campaigns and social amplification for their clients.",
  },
  {
    icon: Share2,
    tint: "blue",
    title: "One-Stop",
    sub: "Social Growth Partner",
    desc: "LinkedIn, X, Instagram, Product Hunt, Founder Branding, Creator Marketing, and Meme Marketing, all under one roof.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="sb-light relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative text-center">
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-500">
            Why Choose Us
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.1] sm:text-5xl">
            Your Campaign. Live in <span className="gradient-text">30 Minutes.</span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-black/80">
            Faster. Bigger. More Cost-Effective.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-black/55">
            We make creator-led campaigns simple to launch, easy to manage, and built for scale.
          </p>

          {/* hand-drawn-style callout, echoing the reference layout */}
          <span
            aria-hidden
            className="absolute -right-4 top-0 hidden -rotate-6 font-heading text-[11px] italic text-indigo-400 sm:block lg:right-4"
          >
            From idea
            <br />
            to impact
            <br />
            in 30 mins!
          </span>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title + r.sub}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card-shiny rounded-xl border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${ICON_BG[r.tint]}`}
                >
                  <r.icon size={18} />
                </span>
                <h3 className="font-heading text-base font-bold leading-tight text-black">
                  {r.title} {r.sub}
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-black/55">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <LightCTA />
        </div>
      </div>
    </section>
  );
}
