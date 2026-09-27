"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { cn } from "@/lib/utils";

export default function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden px-6 pb-20 pt-40", className)}>
      <GradientBlobs className="opacity-70" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge>{eyebrow}</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-sm text-sb-white/60 sm:text-base"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
