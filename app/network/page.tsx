import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import NetworkVisualization from "@/components/ui/NetworkVisualization";
import CreatorShowcase from "@/components/sections/CreatorShowcase";
import Counter from "@/components/ui/Counter";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Network",
  description:
    "The right people at the right moment, 1000+ curated founders, developers, marketers, and creators across every major platform.",
  ...pageOG(
    "Network | SocialBug Media",
    "The right people at the right moment, 1000+ curated founders, developers, marketers, and creators across every major platform.",
    "/network"
  ),
};

const stats = [
  { value: "1000+", label: "Curated people" },
  { value: "7", label: "Categories" },
  { value: "Global", label: "Reach" },
];

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="The Network"
        title={
          <>
            THE RIGHT PEOPLE.
            <br />
            AT THE RIGHT <span className="gradient-text">MOMENT.</span>
          </>
        }
        description="We don't expose private data, just the categories of people who move your category, and how they fit a campaign."
      />

      <section className="relative px-6 pb-20 pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-sb-white/55 sm:text-base">
            Every campaign starts with a question: who actually influences the people you&apos;re
            trying to reach? Pick a category below to see who lives there and why they fit -
            it&apos;s the same shortlisting logic our team uses on every brief.
          </p>
          <NetworkVisualization />
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Top Creators" align="center">
            TOP <span className="gradient-text">CREATORS.</span>
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm text-sb-white/55">
            A slice of the roster we activate for brand campaigns, finance, health, startups,
            culture and everything in between.
          </p>
          <div className="mt-14">
            <CreatorShowcase />
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-white/[0.02] px-6 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display gradient-text-alt text-3xl sm:text-4xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-sb-white/50 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        eyebrow="Get Matched"
        heading={
          <>
            WANT ACCESS TO
            <br />
            THE <span className="gradient-text">NETWORK?</span>
          </>
        }
      />
    </>
  );
}
