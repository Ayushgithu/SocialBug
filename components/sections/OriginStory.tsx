"use client";

import { motion } from "framer-motion";
import { Home, Lightbulb, Users, Rocket, Heart, TrendingUp } from "lucide-react";

const timeline = [
  {
    tag: "THEN",
    dot: "bg-blue-500",
    icon: Home,
    title: "Our Roots",
    sub: "A Small Town, Big Dreams",
    text: "We come from a small town in Madhya Pradesh, where we learned the value of hard work, humility, and making the most of every opportunity.",
  },
  {
    tag: "IDEA",
    dot: "bg-violet-500",
    icon: Lightbulb,
    title: "The Idea",
    sub: "Conversations to a Plan",
    text: "Our interest in social media, creators, and technology turned into endless discussions. We saw how brands struggled to get authentic reach, and creators needed the right opportunities. That's when the idea for SocialBug Media started taking shape.",
  },
  {
    tag: "TODAY",
    dot: "bg-emerald-500",
    icon: Users,
    title: "Building Together",
    sub: "Two Siblings, One Mission",
    text: "With Mansi leading the vision and Shivam driving strategy and execution, we combined our strengths to build SocialBug Media, a creator marketing agency focused on helping brands, founders, and products grow through authentic content and real conversations.",
  },
  {
    tag: "NEXT",
    dot: "bg-pink-500",
    icon: Rocket,
    title: "The Road Ahead",
    sub: "A Bigger Tomorrow",
    text: "Today, SocialBug Media works with 1,000+ creators and has executed 100+ campaigns. But this is just the beginning. Our goal is to keep helping brands, founders, and products get discovered, and to create more opportunities for creators across the world.",
  },
];

const values = [
  { icon: Heart, label: "People first" },
  { icon: Users, label: "Creators always" },
  { icon: TrendingUp, label: "Bigger opportunities for a better tomorrow" },
];

export default function OriginStory() {
  return (
    <section className="sb-light relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* story copy */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-indigo-500">
            Our Story
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.15] sm:text-5xl">
            A Sister&apos;s Vision.
            <br />
            A <span className="gradient-text">Shared Mission.</span>
          </h2>

          <div className="mx-auto mt-6 space-y-4 text-left text-sm leading-relaxed text-black/60 sm:text-base">
            <p>
              SocialBug Media started with two siblings, one big belief, that great ideas
              deserve great visibility.
            </p>
            <p>
              I&apos;m Mansi, the founder, and this is my brother Shivam, my co-founder and
              biggest support. We come from a small town in Madhya Pradesh, where opportunities
              are limited, but dreams are not.
            </p>
            <p>
              What began as our shared interest in social media, creators, and the power of the
              internet slowly turned into SocialBug Media, a platform to help brands, founders,
              and products get the attention they deserve.
            </p>
          </div>
        </div>

        {/* timeline */}
        <div className="mt-16 text-left">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <motion.div
                key={t.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${t.dot} text-white`}>
                  <t.icon size={18} />
                </span>
                <h3 className="font-heading mt-4 text-base font-bold text-black">{t.title}</h3>
                <p className="text-xs font-medium text-black/45">{t.sub}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-black/55">{t.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-10 h-px w-full bg-black/10">
            <div className="absolute inset-0 flex justify-between">
              {timeline.map((t) => (
                <span key={t.tag} className={`-mt-1 h-2.5 w-2.5 rounded-full ${t.dot}`} />
              ))}
            </div>
          </div>
          <div className="mt-3 flex justify-between text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-black/40">
            {timeline.map((t) => (
              <span key={t.tag}>{t.tag}</span>
            ))}
          </div>
        </div>

        {/* quote + values */}
        <div className="card-shiny mt-12 grid gap-8 rounded-xl border border-black/10 bg-white p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs italic text-black/35">More than a business, it&apos;s personal.</p>
            <blockquote className="font-display mt-3 text-xl leading-snug text-black sm:text-2xl">
              &ldquo;We started SocialBug Media to bridge the gap between great ideas and the
              right audience. Because we&apos;ve seen how powerful opportunities can be when the
              world actually hears your story.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-black/50">
              Founders, SocialBug Media
            </p>
          </div>
          <ul className="space-y-4 border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {values.map((v) => (
              <li key={v.label} className="flex items-center gap-3">
                <v.icon size={18} className="shrink-0 text-sb-orange" />
                <span className="text-sm text-black/70">{v.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
