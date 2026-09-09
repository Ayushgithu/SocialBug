"use client";

import Marquee from "@/components/ui/Marquee";

const row1 = ["LINKEDIN", "X / TWITTER", "PRODUCT HUNT", "YOUTUBE", "INSTAGRAM"];
const row2 = ["NEWSLETTERS", "COMMUNITIES", "FOUNDERS", "CREATORS", "TECH"];

function Item({ label }: { label: string }) {
  return (
    <span className="font-display cursor-default text-4xl text-sb-white/15 transition-colors duration-300 hover:text-sb-white sm:text-6xl">
      {label}
    </span>
  );
}

export default function PlatformMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-10">
      <Marquee speed={26} className="mb-4">
        {row1.map((l) => (
          <Item key={l} label={l} />
        ))}
      </Marquee>
      <Marquee speed={32} reverse>
        {row2.map((l) => (
          <Item key={l} label={l} />
        ))}
      </Marquee>
    </section>
  );
}
