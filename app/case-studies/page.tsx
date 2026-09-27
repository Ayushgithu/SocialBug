import type { Metadata } from "next";
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
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
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
    </>
  );
}
