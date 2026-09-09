"use client";

import { Quote } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import { testimonials } from "@/lib/data";

function QuoteChip({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="glow-border flex w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-white/[0.02] p-6 sm:w-[380px]">
      <Quote className="mb-3 text-sb-lime/60" size={18} />
      <p className="text-sm leading-relaxed text-sb-white/80">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-pink to-sb-orange font-heading text-xs font-bold text-sb-black">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-xs font-semibold">{name}</p>
          <p className="text-[11px] text-sb-white/40">{role}</p>
        </div>
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
          <QuoteChip key={t.name} name={t.name} role={t.role} quote={t.quote} />
        ))}
      </Marquee>
      <Marquee speed={54} reverse>
        {rowB.map((t) => (
          <QuoteChip key={t.name} name={t.name} role={t.role} quote={t.quote} />
        ))}
      </Marquee>
    </div>
  );
}
