import type { Metadata } from "next";
<<<<<<< HEAD
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import FinalCTA from "@/components/sections/FinalCTA";
=======
import PageHero from "@/components/ui/PageHero";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import TestimonialsMarquee from "@/components/sections/TestimonialsMarquee";
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
import MarqueeTicker from "@/components/ui/MarqueeTicker";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Founders, growth leads, and creators on what it's actually like to work with SocialBug Media.",
<<<<<<< HEAD
  ...pageOG(
    "Testimonials | SocialBug Media",
    "Founders, growth leads, and creators on what it's actually like to work with SocialBug Media.",
    "/testimonials"
  ),
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            STORIES FROM
            <br />
            THE <span className="gradient-text">HIVE.</span>
          </>
        }
        description="Founders, growth leads, and creators on what it's actually like to work with SocialBug Media."
      />

<<<<<<< HEAD
      {/* Funky editorial pull-quote, no card, just huge type */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-5xl text-sb-orange/40 sm:text-6xl">&ldquo;</span>
          <p className="font-display -mt-8 text-3xl leading-[1.15] text-sb-white sm:text-5xl">
            People started quoting our essays{" "}
            <span className="gradient-text">back to us</span> in meetings.
          </p>
          <p className="mt-6 font-heading text-sm uppercase tracking-[0.2em] text-sb-white/40">
            OFF/BEAT
=======
      {/* Auto-scrolling reviews */}
      <section className="relative pb-20">
        <TestimonialsMarquee />
      </section>

      {/* Funky editorial pull-quote — no card, just huge type */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-display text-6xl text-sb-pink/40 sm:text-8xl">&ldquo;</span>
          <p className="font-display -mt-8 text-3xl leading-[1.15] text-sb-white sm:text-5xl">
            They treated our launch like it was their{" "}
            <span className="gradient-text">own company.</span> Rare to find.
          </p>
          <p className="mt-6 font-heading text-sm uppercase tracking-[0.2em] text-sb-white/40">
            Meher Chawla — Founder, Loopwise
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
          </p>
        </div>
      </section>

      <MarqueeTicker
<<<<<<< HEAD
        items={["1000+ CREATORS", "100+ CAMPAIGNS", "4.8★ AVERAGE RATING", "22+ PLATFORMS", "LINKEDIN-FIRST"]}
=======
        items={["1000+ CREATORS", "60+ CAMPAIGNS", "4.8★ AVERAGE RATING", "22+ PLATFORMS", "3 TOP-5 PH LAUNCHES"]}
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      />

      <section className="relative px-6 pb-28 pt-20">
        <div className="mx-auto max-w-6xl">
          <TestimonialsGrid />
        </div>
      </section>
<<<<<<< HEAD

      <FinalCTA
        eyebrow="Your Turn"
        heading={
          <>
            READY TO WRITE
            <br />
            YOUR OWN <span className="gradient-text">STORY?</span>
          </>
        }
      />
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    </>
  );
}
