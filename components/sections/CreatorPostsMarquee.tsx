"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CLD } from "@/lib/cloudinary";

/**
 * Real screenshots of network creators posting about brand campaigns.
 * Purely visual — cards do not link out anywhere. Tapping one opens it
 * large in a lightbox; the cross (or backdrop / Esc) closes it again.
 *
 * Plain horizontal ticker, scrolling left in a straight line and looping
 * seamlessly — not the old 3D rotateY wheel.
 */
const posts = CLD.creatorPosts.map((src, i) => ({
  src,
  alt: `Creator LinkedIn post example ${i + 1}`,
}));

export default function CreatorPostsMarquee({
  heading = true,
  compact = false,
}: {
  heading?: boolean;
  compact?: boolean;
}) {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const openPost = posts.find((p) => p.src === openSrc) ?? null;

  useEffect(() => {
    if (!openSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSrc(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openSrc]);

  const track = (
    <div className="posts-track flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5">
      {posts.map((post) => (
        <button
          key={post.src}
          type="button"
          data-cursor="pointer"
          onClick={() => setOpenSrc(post.src)}
          aria-label={`Open ${post.alt}`}
          className="post-shadow block h-[260px] w-[132px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-0 bg-transparent p-0 sm:h-[320px] sm:w-[162px]"
        >
          <Image
            src={post.src}
            alt={post.alt}
            width={720}
            height={1426}
            className="h-full w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.04]"
            draggable={false}
          />
        </button>
      ))}
    </div>
  );

  return (
    <section
      className={
        compact ? "relative overflow-hidden px-0 pt-14 pb-8" : "relative overflow-hidden px-0 py-10"
      }
    >
      {heading && (
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="From The Network" align="center">
            REAL POSTS. REAL <span className="gradient-text">REACH.</span>
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm text-sb-white/55">
            The kind of content our creator network puts out.
          </p>
        </div>
      )}

      <div className="posts-mask mt-6">
        <div className="posts-row flex" style={{ ["--dur" as string]: "55s" }}>
          {track}
          {track}
        </div>
      </div>

      <AnimatePresence>
        {openPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenSrc(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] max-w-[92vw]"
            >
              <button
                type="button"
                data-cursor="pointer"
                onClick={() => setOpenSrc(null)}
                aria-label="Close"
                className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-sb-black text-sb-white shadow-lg transition-transform hover:scale-110"
              >
                <X size={18} />
              </button>
              <Image
                src={openPost.src}
                alt={openPost.alt}
                width={720}
                height={1426}
                className="max-h-[88vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}