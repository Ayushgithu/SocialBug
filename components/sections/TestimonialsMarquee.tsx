"use client";

import { Quote } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import { testimonials } from "@/lib/data";

<<<<<<< HEAD
function QuoteChip({ brand, quote }: { brand: string; quote: string }) {
  return (
    <div className="glow-border flex w-[320px] shrink-0 flex-col justify-between rounded-lg bg-white/[0.02] p-6 sm:w-[380px]">
=======
function QuoteChip({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="glow-border flex w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-white/[0.02] p-6 sm:w-[380px]">
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      <Quote className="mb-3 text-sb-lime/60" size={18} />
      <p className="text-sm leading-relaxed text-sb-white/80">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-pink to-sb-orange font-heading text-xs font-bold text-sb-black">
<<<<<<< HEAD
          {brand.charAt(0)}
        </div>
        <p className="font-heading text-xs font-semibold">{brand}</p>
=======
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-xs font-semibold">{name}</p>
          <p className="text-[11px] text-sb-white/40">{role}</p>
        </div>
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <div className="flex flex-col gap-4">
      <Marquee speed={48}>
        {rowA.map((t) => (
<<<<<<< HEAD
          <QuoteChip key={t.brand} brand={t.brand} quote={t.quote} />
=======
          <QuoteChip key={t.name} name={t.name} role={t.role} quote={t.quote} />
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        ))}
      </Marquee>
      <Marquee speed={54} reverse>
        {rowB.map((t) => (
<<<<<<< HEAD
          <QuoteChip key={t.brand} brand={t.brand} quote={t.quote} />
=======
          <QuoteChip key={t.name} name={t.name} role={t.role} quote={t.quote} />
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        ))}
      </Marquee>
    </div>
  );
}
