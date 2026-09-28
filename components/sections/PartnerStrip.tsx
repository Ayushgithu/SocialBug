"use client";

import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { partnerLogos } from "@/lib/data";

function Row({ speed }: { speed: number }) {
  return (
    <Marquee speed={speed} reverse>
      {partnerLogos.map((logo) => (
        <div
          key={logo.name}
          className="flex mix-blend-screen h-16 w-32 shrink-0 items-center justify-center p-2.5 sm:h-20 sm:w-44 sm:p-3"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={200}
            height={100}
            className="h-auto max-h-10 w-auto max-w-full mix-blend-screen object-contain transition-transform duration-300 hover:scale-110 sm:max-h-14"
          />
        </div>
      ))}
    </Marquee>
  );
}

/**
 * A single logo rail, scrolling left to right, looping seamlessly. `compact`
 * drops the border/heading so it can sit directly under another section
 * (the phone-posts marquee) with no visual gap between the two.
 */
export default function PartnerStrip({
  label = "Brands we've worked with",
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={
        compact
          ? "relative overflow-hidden pb-14 pt-2"
          : "relative overflow-hidden border-y border-white/10 py-10"
      }
    >
      {!compact && (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-sb-orange/25 to-transparent" />
      )}
      <p className="mb-7 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-sb-white/40">
        {label}
      </p>
      <div className="posts-mask">
        <Row speed={38} />
      </div>
    </section>
  );
}
