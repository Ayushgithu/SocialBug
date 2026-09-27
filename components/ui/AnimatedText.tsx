"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "div" | "h1" | "h2" | "p";
}) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block overflow-hidden", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em]">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
