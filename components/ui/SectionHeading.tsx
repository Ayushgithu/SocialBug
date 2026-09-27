"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  children,
  align = "left",
  className,
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD
          className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-sb-pink"
=======
          className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-sb-lime"
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
<<<<<<< HEAD
        className="font-display text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]"
=======
        className="font-display text-[12vw] leading-[0.92] sm:text-[7vw] lg:text-[4.4vw]"
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      >
        {children}
      </motion.h2>
    </div>
  );
}
