import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected campaigns across SaaS, startups, product launches, and creator-led growth — with the strategy and the numbers behind them.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={
          <>
            RESULTS THAT
            <br />
            SPEAK IN <span className="gradient-text">NUMBERS.</span>
          </>
        }
        description="A few of the campaigns we've run end-to-end — from first strategy call to launch-day reporting."
      />

      <section className="relative px-6 pb-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard
              key={cs.slug}
              slug={cs.slug}
              name={cs.name}
              industry={cs.industry}
              result={cs.result}
              challenge={cs.challenge}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
