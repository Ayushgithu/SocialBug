import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import TestimonialsGrid from "@/components/sections/TestimonialsGrid";
import FinalCTA from "@/components/sections/FinalCTA";
import MarqueeTicker from "@/components/ui/MarqueeTicker";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Founders, growth leads, and creators on what it's actually like to work with SocialBug Media.",
  ...pageOG(
    "Testimonials | SocialBug Media",
    "Founders, growth leads, and creators on what it's actually like to work with SocialBug Media.",
    "/testimonials"
  ),
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
          </p>
        </div>
      </section>

      <MarqueeTicker
        items={["1000+ CREATORS", "100+ CAMPAIGNS", "4.8★ AVERAGE RATING", "22+ PLATFORMS", "LINKEDIN-FIRST"]}
      />

      <section className="relative px-6 pb-28 pt-20">
        <div className="mx-auto max-w-6xl">
          <TestimonialsGrid />
        </div>
      </section>

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
    </>
  );
}
