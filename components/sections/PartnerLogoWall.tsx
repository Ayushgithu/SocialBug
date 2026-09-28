"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import SectionHeading from "@/components/ui/SectionHeading";
import { partnerLogos } from "@/lib/data";

/**
 * Real client/partner logos, distinct from the fictional word-chip
 * marquee in LogoWall.tsx. Each logo is an actual PNG supplied by the
 * founders, already styled as a die-cut sticker. Each one sits on its
 * own soft glass "tile" (border + faint fill) rather than floating bare
 * on the dark background, so the wall reads as a deliberate badge shelf
 * instead of empty space with logos scattered on it.
 */
export default function PartnerLogoWall() {
  return (
    <section className="relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who We've Worked With" align="center">
          OUR <span className="gradient-text">PARTNERS.</span>
        </SectionHeading>

        <div className="mt-14 mix-blend-screen">
          <Marquee speed={38} reverse>
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-20 mix-blend-screen w-36 shrink-0 items-center justify-center p-3 sm:h-24 sm:w-48"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={100}
                  className="h-auto max-h-12 mix-blend-screen w-auto max-w-full object-contain sm:max-h-16"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Static grid, for people who land here without JS/motion,
            and so the full set is visible without waiting on the loop. Each
            logo sits on its own soft "tile" instead of floating bare on the
            page background, which is what made this section feel flat. */}
        <div className="mt-10 mix-blend-screen bg-black grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {partnerLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex mix-blend-screen h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 backdrop-blur-sm transition-colors duration-300 hover:border-sb-orange/30 hover:bg-white/9 sm:h-24"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={100}
                className="h-auto mix-blend-screen  max-h-12 w-auto max-w-full object-contain sm:max-h-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
