"use client";

<<<<<<< HEAD
import type { CSSProperties } from "react";
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
import { motion } from "framer-motion";
import { Quote, Mic, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
<<<<<<< HEAD
  brand: string;
=======
  name: string;
  role: string;
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
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
<<<<<<< HEAD
  brand,
=======
  name,
  role,
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
  quote,
  format = "quote",
  index = 0,
  className,
}: TestimonialCardProps) {
  const Icon = formatIcon[format];
<<<<<<< HEAD
  const tilt = (index % 2 === 0 ? -1 : 1) * (1 + (index % 3) * 0.4);
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.07 }}
<<<<<<< HEAD
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
=======
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
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      </div>
    </motion.div>
  );
}
