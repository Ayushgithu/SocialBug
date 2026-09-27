"use client";

<<<<<<< HEAD
import { useRef, MouseEvent, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { Sparkles } from "lucide-react";

export default function FinalCTA({
  eyebrow = "Make Them Stop Scrolling.",
  heading,
  primaryLabel = "Get Started in 2 Minutes",
  primaryHref = "/contact",
  secondaryLabel = "See Our Work",
  secondaryHref = "/case-studies",
}: {
  eyebrow?: string;
  heading?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
=======
import { useRef, MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
<<<<<<< HEAD
      className="relative overflow-hidden px-6 py-10"
=======
      className="relative overflow-hidden px-6 py-32"
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    >
      <GradientBlobs />

      <motion.div
        className="pointer-events-none absolute h-16 w-16 rounded-full bg-gradient-to-br from-sb-pink to-sb-lime opacity-0 blur-xl"
        animate={{ x: pos.x - 32, y: pos.y - 32, opacity: active ? 0.5 : 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
<<<<<<< HEAD
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-sb-orange"
          >
            {eyebrow}
          </motion.p>
        )}
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
<<<<<<< HEAD
          className="font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl"
        >
          {heading ?? (
            <>
              READY TO
              <br />
              CREATE A LITTLE
              <br />
              <span className="gradient-text">BUZZ?</span>
            </>
          )}
=======
          className="font-display text-[13vw] leading-[0.92] sm:text-7xl lg:text-8xl"
        >
          READY TO
          <br />
          CREATE A LITTLE
          <br />
          <span className="gradient-text">BUZZ?</span>
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
<<<<<<< HEAD
          <Button
            href={primaryHref}
            badge={
              <>
                <Sparkles size={11} /> 2 mins
              </>
            }
          >
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline">
            {secondaryLabel}
=======
          <Button href="/contact">
            Book a Demo <ArrowRight size={15} />
          </Button>
          <Button href="/case-studies" variant="outline">
            See Our Work
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
