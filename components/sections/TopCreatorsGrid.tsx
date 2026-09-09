"use client";

import { motion } from "framer-motion";
import AvatarBlob from "@/components/ui/AvatarBlob";
import { networkCreators } from "@/lib/data";

export default function TopCreatorsGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-14 sm:grid-cols-4">
      {networkCreators.map((c, i) => (
        <motion.div
          key={c.handle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % 8) * 0.06 }}
          className="flex flex-col items-center text-center"
        >
          <div
            className={`mb-4 ${
              i % 2 === 0 ? "" : "sm:mt-8"
            }`}
          >
            <AvatarBlob initials={c.name.split(" ").map((n) => n[0]).join("")} accent={c.accent} size={104} index={i} />
          </div>
          <p className="font-heading text-sm font-semibold text-sb-white">{c.name}</p>
          <p className="mt-1 text-xs text-sb-white/45">{c.handle}</p>
          <span className="mt-2 rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-sb-white/40">
            {c.category}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
