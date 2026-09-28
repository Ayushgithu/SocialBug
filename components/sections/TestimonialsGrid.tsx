"use client";

import { useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

const filters = ["All", "Founders", "SaaS", "Creators"];

export default function TestimonialsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? testimonials : testimonials.filter((t) => t.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            data-cursor="pointer"
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-xs font-heading uppercase tracking-wide transition-colors ${
              active === f
                ? "border-sb-lime text-sb-lime"
                : "border-white/15 text-sb-white/50 hover:text-sb-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 *:mb-5 *:break-inside-avoid">
        {filtered.map((t, i) => (
          <TestimonialCard
            key={t.brand}
            brand={t.brand}
            quote={t.quote}
            format={t.format as "quote" | "social" | "voice"}
            index={i}
          />
        ))}
      </div>
    </>
  );
}
