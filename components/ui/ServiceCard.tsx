"use client";

import { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  number: string;
  title: string;
  short: string;
  slug: string;
  index?: number;
  className?: string;
}

export default function ServiceCard({
  number,
  title,
  short,
  slug,
  index = 0,
  className,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06 }}
      className={cn("perspective-[1000px]", className)}
    >
      <Link href={`/services/${slug}`} data-cursor="pointer">
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
          className="group glow-border relative flex h-full min-h-55 flex-col justify-between overflow-hidden rounded-3xl bg-white/2 p-7 transition-transform duration-300 ease-out"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-linear-to-br from-sb-pink/0 to-sb-orange/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:from-sb-pink/40 group-hover:to-sb-orange/30 group-hover:opacity-100" />

          <div className="relative z-10 flex items-start justify-between">
            <span className="font-heading text-sm text-sb-white/40">{number}</span>
            <ArrowUpRight
              size={18}
              className="text-sb-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sb-lime"
            />
          </div>

          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-semibold leading-tight sm:text-[1.7rem]">
              {title}
            </h3>
            <p className="mt-3 text-sm text-sb-white/55">{short}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
