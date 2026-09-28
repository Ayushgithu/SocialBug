"use client";

import { Quote } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import { testimonials } from "@/lib/data";

function QuoteChip({ brand, quote }: { brand: string; quote: string }) {
  return (
    <div className="glow-border flex w-[320px] shrink-0 flex-col justify-between rounded-lg bg-white/2 p-6 sm:w-95">
      <Quote className="mb-3 text-sb-lime/60" size={18} />
      <p className="text-sm leading-relaxed text-sb-white/80">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sb-pink to-sb-orange font-heading text-xs font-bold text-sb-black">
          {brand.charAt(0)}
        </div>
        <p className="font-heading text-xs font-semibold">{brand}</p>
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
          <QuoteChip key={t.brand} brand={t.brand} quote={t.quote} />
        ))}
      </Marquee>
      <Marquee speed={54} reverse>
        {rowB.map((t) => (
          <QuoteChip key={t.brand} brand={t.brand} quote={t.quote} />
        ))}
      </Marquee>
    </div>
  );
}
