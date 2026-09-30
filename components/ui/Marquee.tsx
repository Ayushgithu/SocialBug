"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px 0px" });
  const trackStyle = { "--marquee-duration": `${speed}s` } as CSSProperties;

  return (
    <div
      ref={ref}
      className={cn("group flex overflow-hidden", className)}
      data-in-view={inView}
    >
      <div
        className="marquee-track flex shrink-0 items-center gap-6 pr-6"
        data-reverse={reverse}
        style={trackStyle}
      >
        {children}
      </div>
      <div
        className="marquee-track flex shrink-0 items-center gap-6 pr-6"
        data-reverse={reverse}
        aria-hidden
        style={trackStyle}
      >
        {children}
      </div>
      <style jsx>{`
        .marquee-track {
          animation: marquee var(--marquee-duration) linear infinite;
        }
        .marquee-track[data-reverse="true"] {
          animation-direction: reverse;
        }
        [data-in-view="false"] .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @media (hover: hover) and (pointer: fine) {
          .group:hover > div {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}
