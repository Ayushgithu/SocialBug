"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  reverse = false,
  speed = 30,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 items-center gap-6 pr-6"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-6 pr-6"
        aria-hidden
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .group:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
