"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

const proof = [
  "1000+ Creator Network",
  "Global Audience",
  "End-to-End Campaigns",
  "Startup Focused",
  "Product Launch Specialists",
  "SaaS Growth Experts",
  "Community-First",
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4">
        {proof.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <motion.div
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            >
              <Badge>{p}</Badge>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
