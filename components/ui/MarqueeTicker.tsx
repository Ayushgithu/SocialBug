"use client";

import Marquee from "@/components/ui/Marquee";
import { Sparkles } from "lucide-react";

export default function MarqueeTicker({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={`relative -rotate-1 overflow-hidden border-y-2 border-sb-black bg-gradient-to-r from-sb-pink via-sb-orange to-sb-lime py-3 ${className}`}>
      <Marquee speed={22}>
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-4 font-heading text-sm font-bold uppercase tracking-wide text-sb-black"
          >
            <Sparkles size={14} />
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
