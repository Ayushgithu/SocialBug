"use client";

import { motion } from "framer-motion";
import { Quote, Mic, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
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
  name,
  role,
  quote,
  format = "quote",
  index = 0,
  className,
}: TestimonialCardProps) {
  const Icon = formatIcon[format];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.07 }}
      className={cn(
        "glow-border relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.02] p-7",
        className
      )}
    >
      <Icon className="mb-5 text-sb-lime/70" size={22} />
      <p className="flex-1 font-heading text-lg leading-snug text-sb-white/90">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-pink to-sb-orange font-heading text-sm font-bold text-sb-black">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-sm font-semibold">{name}</p>
          <p className="text-xs text-sb-white/45">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
