"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { title: "Strategy", desc: "We map the category, the audience, and the moment worth building around." },
  { title: "Source", desc: "We match your brief against a network of 1000+ vetted creators." },
  { title: "Create", desc: "Creative direction and content built for how each platform actually works." },
  { title: "Distribute", desc: "Coordinated posting timed for maximum reach and relevance." },
  { title: "Measure", desc: "Live reporting so you always know what's moving the needle." },
  { title: "Grow", desc: "We double down on what works and turn a campaign into a pipeline." },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="How It Works" align="center">
          FROM STRATEGY
          <br />
          TO <span className="gradient-text">GROWTH.</span>
        </SectionHeading>

        <div ref={ref} className="relative mt-20 pl-10">
          <div className="absolute left-[7px] top-0 h-full w-[2px] bg-white/10" />
          <motion.div
            style={{ height }}
            className="absolute left-[7px] top-0 w-[2px] bg-gradient-to-b from-sb-pink via-sb-orange to-sb-lime"
          />

          <div className="flex flex-col gap-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-10 top-1 h-4 w-4 rounded-full border-2 border-sb-lime bg-sb-black" />
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-2 text-3xl sm:text-4xl">{step.title.toUpperCase()}</h3>
                <p className="mt-3 max-w-md text-sb-white/55">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
