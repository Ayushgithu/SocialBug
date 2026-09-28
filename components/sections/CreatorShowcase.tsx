"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Copy, Check, BadgeCheck, Sparkles } from "lucide-react";
import { networkCreators } from "@/lib/data";

type Creator = (typeof networkCreators)[number];

/** Die-cut silhouettes so every sticker reads as its own shape. */
const SHAPES = [
  "polygon(50% 0%, 85% 10%, 98% 40%, 95% 76%, 70% 98%, 30% 98%, 5% 76%, 2% 40%, 15% 10%)",
  "polygon(50% 1%, 82% 12%, 96% 45%, 90% 82%, 65% 99%, 35% 99%, 10% 82%, 4% 45%, 18% 12%)",
  "polygon(50% 2%, 84% 14%, 96% 48%, 88% 84%, 68% 97%, 32% 97%, 12% 84%, 4% 48%, 16% 14%)",
  "polygon(50% 0%, 86% 15%, 98% 50%, 88% 88%, 65% 100%, 35% 100%, 12% 88%, 2% 50%, 14% 15%)",
];

function initialsOf(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

const CONTOUR =
  "drop-shadow(2.5px 0 0 var(--sb-orange)) drop-shadow(-2.5px 0 0 var(--sb-orange)) drop-shadow(0 2.5px 0 var(--sb-orange)) drop-shadow(0 -2.5px 0 var(--sb-orange))";

function Sticker({
  creator,
  index,
  active,
  onClick,
}: {
  creator: Creator;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  const [broken, setBroken] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor="pointer"
      aria-label={`Open ${creator.name}`}
      className="sb-float group relative block outline-none"
      style={{ animationDelay: `${(index % 6) * 0.5}s` }}
    >
      <span
        className="relative block h-32 w-24 transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110 sm:h-37.5 sm:w-28 lg:h-44 lg:w-33"
        style={{
          filter: active
            ? `${CONTOUR} drop-shadow(0 0 18px rgba(252,132,46,0.8))`
            : `${CONTOUR} drop-shadow(0 0 6px rgba(252,132,46,0.35))`,
        }}
      >
        <span
          className="relative flex h-full w-full items-end justify-center overflow-hidden bg-neutral-900"
          style={{ clipPath: SHAPES[index % SHAPES.length] }}
        >
          {!loaded && !broken && (
            <span className="absolute inset-0 animate-pulse bg-linear-to-br from-white/3 via-white/9 to-white/3" />
          )}
          {broken ? (
            // Graceful fallback if the photo fails to load, instead of a
            // broken-image icon with the alt text spilling out of the shape.
            <span
              className={`flex h-full w-full items-center justify-center bg-linear-to-br from-sb-orange/70 via-sb-pink/60 to-sb-purple/60 font-heading text-xl font-bold text-white transition-all duration-500 ${
                active ? "grayscale-0" : "grayscale contrast-110"
              }`}
            >
              {initialsOf(creator.name)}
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={creator.photo}
              alt={creator.name}
              loading="lazy"
              onError={() => setBroken(true)}
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-cover object-top transition-all duration-500 ${
                active ? "scale-105 grayscale-0" : "grayscale contrast-110"
              } ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          )}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent" />
          <span className="sb-sheen pointer-events-none absolute inset-0" />
        </span>
      </span>
    </button>
  );
}

function Label({
  creator,
  active,
  align,
}: {
  creator: Creator;
  active: boolean;
  align: "top" | "bottom";
}) {
  const line = (
    <span className="relative flex justify-center">
      <span
        className={`w-px transition-all duration-300 ${
          align === "top" ? "h-8 lg:h-12" : "h-8 lg:h-12"
        } ${active ? "bg-sb-orange shadow-[0_0_10px_var(--sb-orange)]" : "bg-sb-orange/40"}`}
      />
      {/* node where this creator's stem meets the shared network line */}
      <span
        className={`absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
          align === "top" ? "top-full" : "top-0"
        } ${active ? "scale-150 bg-sb-orange shadow-[0_0_8px_var(--sb-orange)]" : "bg-sb-orange/60"}`}
      />
    </span>
  );

  const text = (
    <div className="max-w-35 px-1 text-center">
      <p
        className={`font-heading text-[12px] font-bold leading-snug transition-colors sm:text-[13px] ${
          active ? "text-sb-white" : "text-sb-orange"
        }`}
      >
        {creator.name}
      </p>
      <p className="mt-0.5 truncate font-mono text-[10px] text-sb-lime/70 sm:text-[11px]">
        {creator.handle}
      </p>
    </div>
  );

  return (
    <div
      className={`flex h-21 flex-col items-center gap-2 sm:h-26 ${
        align === "top" ? "justify-end" : "justify-start"
      }`}
    >
      {align === "top" ? (
        <>
          {text}
          {line}
        </>
      ) : (
        <>
          {line}
          {text}
        </>
      )}
    </div>
  );
}

function CreatorModal({ creator, onClose }: { creator: Creator | null; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!creator) return;
    setCopied(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [creator, onClose]);

  return (
    <AnimatePresence>
      {creator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-120 flex items-end justify-center bg-black/85 p-4 backdrop-blur-md sm:items-center"
        >
          <motion.div
            initial={{ y: 40, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-sb-orange/40 bg-sb-black-soft p-6 shadow-[0_0_70px_rgba(252,132,46,0.25)] sm:p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-sb-orange/25 blur-3xl" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-sb-white/60 transition-colors hover:bg-white/10 hover:text-sb-white"
            >
              <X size={18} />
            </button>

            <div className="relative flex items-start gap-4">
              <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-sb-orange/70">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={creator.photo}
                  alt={creator.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading truncate text-lg font-semibold">{creator.name}</h3>
                  <BadgeCheck size={16} className="shrink-0 text-sb-orange" />
                </div>
                <p className="mt-0.5 truncate text-sm text-sb-orange/90">{creator.handle}</p>
                <span className="mt-2 inline-block rounded-full border border-sb-orange/30 bg-sb-orange/10 px-3 py-0.5 text-[11px] uppercase tracking-wide text-sb-lime">
                  {creator.category}
                </span>
              </div>
            </div>

            <p className="relative mt-5 text-sm leading-relaxed text-sb-white/70">{creator.bio}</p>

            <div className="relative mt-6 flex items-center gap-3">
              <span className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-xs text-sb-white/60">
                <Sparkles size={14} className="shrink-0 text-sb-orange" />
                Available for brand campaigns through SocialBug
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(creator.handle);
                  setCopied(true);
                }}
                aria-label="Copy handle"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-sb-white/70 transition-colors hover:border-sb-orange/60 hover:text-sb-orange"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * The creator ribbon: alternating name-above / name-below cut-outs joined by
 * connector lines, exactly like the banner reference, except it wraps into
 * rows instead of scrolling sideways, so it fits every screen size.
 */
export default function CreatorShowcase() {
  const [selected, setSelected] = useState<Creator | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <div className="relative">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="h-2 w-2 animate-pulse rounded-full bg-sb-orange" />
        <span className="font-heading text-[11px] uppercase tracking-[0.25em] text-sb-white/45">
          {networkCreators.length} featured creators · 2026 roster
        </span>
      </div>

      <div className="relative">
        <div className="relative z-10 grid grid-cols-2 gap-x-1 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {networkCreators.map((creator, i) => {
          const top = i % 2 === 0;
          const active = hovered === creator.id;
          return (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(creator.id)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col items-center"
            >
              {top ? (
                <Label creator={creator} active={active} align="top" />
              ) : (
                <div className="h-21 sm:h-26" aria-hidden />
              )}

              <Sticker
                creator={creator}
                index={i}
                active={active}
                onClick={() => setSelected(creator)}
              />

              {!top ? (
                <Label creator={creator} active={active} align="bottom" />
              ) : (
                <div className="h-21 sm:h-26" aria-hidden />
              )}
            </motion.div>
          );
        })}
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-sb-white/40">
        Tap any cut-out to see what they cover.
      </p>

      <CreatorModal creator={selected} onClose={close} />
    </div>
  );
}
