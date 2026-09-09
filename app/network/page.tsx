import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import NetworkVisualization from "@/components/ui/NetworkVisualization";
import TopCreatorsGrid from "@/components/sections/TopCreatorsGrid";

export const metadata: Metadata = {
  title: "Network",
  description:
    "The right people at the right moment — 1000+ curated founders, developers, marketers, and creators across every major platform.",
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
        description="We don't expose private data — just the categories of people who move your category, and how they fit a campaign."
      />

      <section className="relative px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <NetworkVisualization />
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Top Creators">
            FACES BEHIND
            <br />
            THE <span className="gradient-text">NETWORK.</span>
          </SectionHeading>
          <div className="mt-16">
            <TopCreatorsGrid />
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display gradient-text-alt text-4xl sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-sb-white/50 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
