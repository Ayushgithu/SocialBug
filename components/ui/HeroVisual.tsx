"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Heart, MessageCircle } from "lucide-react";
import { networkCreators } from "@/lib/data";

const POOL = networkCreators.slice(0, 12);
const COLUMNS = [POOL.slice(0, 4), POOL.slice(4, 8), POOL.slice(8, 12)];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** One tile. Falls back to a gradient initial instead of a broken-image
 *  icon if the source photo fails to load, and shows a soft pulsing
 *  skeleton instead of a flat blank box while the photo is still loading. */
function Tile({ creator }: { creator: (typeof POOL)[number] }) {
  const [broken, setBroken] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-900">
      {!loaded && !broken && (
        <div className="absolute inset-0 animate-pulse bg-linear-to-br from-white/3 via-white/9 to-white/3" />
      )}
      {broken ? (
        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-sb-orange/70 via-sb-pink/60 to-sb-purple/60 font-heading text-lg font-bold text-white">
          {initialsOf(creator.name)}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={creator.photo}
          alt=""
          aria-hidden
          loading="eager"
          onError={() => setBroken(true)}
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />
      <span className="absolute bottom-2 left-2 font-heading text-[9px] uppercase tracking-wide text-sb-white/70">
        {creator.category.split(" ")[0]}
      </span>
    </div>
  );
}

/**
 * Hero visual, three columns of creator tiles, each auto-scrolling
 * vertically and non-stop: the outer two columns drift upward, the
 * middle one drifts downward, so the wall always feels alive without
 * needing any user interaction.
 */
function Column({
  tiles,
  direction,
  duration,
}: {
  tiles: (typeof POOL);
  direction: "up" | "down";
  duration: number;
}) {
  // duplicate the tiles once so the loop (translateY -50%) is seamless
  const looped = [...tiles, ...tiles];

  return (
    <div className="relative h-full overflow-hidden rounded-xl">
      <div
        className={direction === "up" ? "sb-col-up" : "sb-col-down"}
        style={{ "--dur": `${duration}s` } as CSSProperties}
      >
        {looped.map((c, i) => (
          <div
            key={`${c.id}-${i}`}
            className="mb-2.5 overflow-hidden rounded-xl border border-white/10 sm:mb-3"
          >
            <Tile creator={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-105">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-linear-to-br from-sb-pink/30 via-sb-orange/20 to-transparent blur-[70px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid h-75 grid-cols-3 gap-2.5 sm:h-90 sm:gap-3"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      >
        {/* left & right columns scroll up, middle scrolls down, one line
            left-to-right feel, one right-to-left, as asked */}
        <Column tiles={COLUMNS[0]} direction="up" duration={24} />
        <Column tiles={COLUMNS[1]} direction="down" duration={30} />
        <Column tiles={COLUMNS[2]} direction="up" duration={26} />
      </motion.div>

      {/* floating stat chips */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="sb-float absolute -left-2 top-10 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-sb-black/85 px-3 py-2 backdrop-blur sm:-left-6"
      >
        <TrendingUp size={14} className="text-sb-lime" />
        <span className="font-heading text-[11px] font-semibold">3.9M reach</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{ animationDelay: "1.4s" }}
        className="sb-float absolute -right-2 bottom-12 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-sb-black/85 px-3 py-2 backdrop-blur sm:-right-6"
      >
        <Heart size={14} className="text-sb-pink" />
        <span className="font-heading text-[11px] font-semibold">30.3K likes</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{ animationDelay: "0.8s" }}
        className="sb-float absolute -bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-sb-black/85 px-3 py-2 backdrop-blur"
      >
        <MessageCircle size={14} className="text-sb-orange" />
        <span className="font-heading text-[11px] font-semibold">1.2K comments</span>
      </motion.div>
    </div>
  );
}
