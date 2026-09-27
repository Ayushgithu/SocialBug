"use client";

import { motion } from "framer-motion";

/**
 * A single bold two-line statement, dropped between sections as a
 * breather/punchline moment. Not tied to any data list, just a standalone
 * brand line, swap the two <span> lines below to change it.
 */
export default function StatementBanner() {
  return (
    <section className="relative overflow-hidden px-6 py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_65%)]" />
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display mx-auto max-w-3xl text-center text-3xl leading-[1.15] sm:text-4xl lg:text-5xl"
      >
        <span className="block text-sb-white/85">WE DON&apos;T CHASE ATTENTION.</span>
        <span className="gradient-text block">WE CREATE REASONS FOR IT.</span>
      </motion.p>
    </section>
  );
}
