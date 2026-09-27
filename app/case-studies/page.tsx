import type { Metadata } from "next";
<<<<<<< HEAD
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import WorkGrid from "@/components/sections/WorkGrid";
import CampaignThinking from "@/components/sections/CampaignThinking";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected social-first campaigns across e-commerce, AI, fintech, consumer and sustainability, with the thinking behind each one.",
  ...pageOG(
    "Our Work | SocialBug Media",
    "Selected social-first campaigns across e-commerce, AI, fintech, consumer and sustainability, with the thinking behind each one.",
    "/case-studies"
  ),
=======
import PageHero from "@/components/ui/PageHero";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected campaigns across SaaS, startups, product launches, and creator-led growth — with the strategy and the numbers behind them.",
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
<<<<<<< HEAD
        eyebrow="Our Work"
        title={
          <>
            CAMPAIGNS WE&apos;RE <span className="gradient-text">PROUD OF.</span>
          </>
        }
        description="A selection of the campaigns we've built, each with the challenge, the idea and how it moved through social. Pick one to see the full story."
      />

      <WorkGrid
        eyebrow="Featured"
        note="Every campaign here is a real, shipped piece of work, click any card for the full story."
      />

      <CampaignThinking />

      <FinalCTA
        eyebrow="Your Turn"
        heading={
          <>
            WANT RESULTS
            <br />
            LIKE <span className="gradient-text">THESE?</span>
          </>
        }
      />
=======
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
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    </>
  );
}
