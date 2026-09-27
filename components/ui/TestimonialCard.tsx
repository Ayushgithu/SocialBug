"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Quote, Mic, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  brand: string;
  quote: string;
  format?: "quote" | "social" | "voice";
  index?: number;
  className?: string;
}

const formatIcon = {
  quote: Quote,
  social: MessageCircle,
  voice: Mic,
};

export default function TestimonialCard({
  brand,
  quote,
  format = "quote",
  index = 0,
  className,
}: TestimonialCardProps) {
  const Icon = formatIcon[format];
  const tilt = (index % 2 === 0 ? -1 : 1) * (1 + (index % 3) * 0.4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.07 }}
      style={{ "--tilt": `${tilt}deg` } as CSSProperties}
      className={cn(
        "sb-tilt glow-border relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-white/[0.02] p-5",
        className
      )}
    >
      <Icon className="mb-3 text-sb-lime/70" size={18} />
      <p className="flex-1 font-heading text-base leading-snug text-sb-white/90">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-pink to-sb-orange font-heading text-xs font-bold text-sb-black">
          {brand.charAt(0)}
        </div>
        <p className="font-heading text-sm font-semibold">{brand}</p>
      </div>
    </motion.div>
  );
}
