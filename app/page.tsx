import Hero from "@/components/sections/Hero";
import NetworkSection from "@/components/sections/NetworkSection";
import PlatformMarquee from "@/components/sections/PlatformMarquee";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import WhatWeDo from "@/components/sections/WhatWeDo";
import HowItWorks from "@/components/sections/HowItWorks";
import SelectedWork from "@/components/sections/SelectedWork";
import SocialProof from "@/components/sections/SocialProof";
import TestimonialPreview from "@/components/sections/TestimonialPreview";
import FinalCTA from "@/components/sections/FinalCTA";

const TICKER_ITEMS = [
  "1000+ CREATORS", "22+ PLATFORMS", "PRODUCT HUNT SPECIALISTS",
  "STRATEGY FIRST", "60+ CAMPAIGNS RUN", "BUILT FOR SAAS",
];

export default function Home() {
  return (
    <>
      <Hero />
      <NetworkSection />
      <PlatformMarquee />
      <MarqueeTicker items={TICKER_ITEMS} className="my-4" />
      <WhatWeDo />
      <HowItWorks />
      <SelectedWork />
      <SocialProof />
      <TestimonialPreview />
      <FinalCTA />
    </>
  );
}
