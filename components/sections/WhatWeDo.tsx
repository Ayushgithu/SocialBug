"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6 }}
    >
      <Link
        href={`/services/${service.slug}`}
        data-cursor="pointer"
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-7 transition-[transform,border-color] duration-200 ease-out hover:border-white/25"
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br from-sb-pink to-sb-orange opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
        <div className="relative flex items-start justify-between">
          <span className="font-display text-sm text-sb-white/30">{service.number}</span>
          <ArrowUpRight
            size={18}
            className="text-sb-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sb-lime"
          />
        </div>
        <h3 className="font-heading relative mt-16 text-2xl font-semibold leading-tight">
          {service.title}
        </h3>
        <p className="relative mt-3 text-sm text-sb-white/50">{service.short}</p>
      </Link>
    </motion.div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What We Do">
          WE DON&apos;T JUST
          <br />
          FIND INFLUENCERS.
          <br />
          <span className="gradient-text-alt">WE CREATE MOMENTUM.</span>
        </SectionHeading>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
