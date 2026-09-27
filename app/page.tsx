import Hero from "@/components/sections/Hero";
<<<<<<< HEAD
import CreatorPostsMarquee from "@/components/sections/CreatorPostsMarquee";
import PartnerStrip from "@/components/sections/PartnerStrip";
import ImpactStats from "@/components/sections/ImpactStats";
import CrossMarquee from "@/components/sections/CrossMarquee";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import WhyBrands from "@/components/sections/WhyBrands";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedCampaigns from "@/components/sections/FeaturedCampaigns";
import TestimonialPreview from "@/components/sections/TestimonialPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import TrustBadges from "@/components/sections/TrustBadges";
import StatementBanner from "@/components/sections/StatementBanner";
=======
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
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525

export default function Home() {
  return (
    <>
      <Hero />
<<<<<<< HEAD

      {/* Posts scrolling left-to-right, logos right underneath scrolling
          right-to-left, moved up near the top instead of buried at the
          bottom of the page. */}
      <CreatorPostsMarquee compact />
      <PartnerStrip compact />

      <StatementBanner />

      <ImpactStats />
      <ServicesShowcase limit={6} showViewAll />
      <WhyBrands />
      <HowItWorks />
      <CrossMarquee />
      <FeaturedCampaigns limit={3} showViewAll />
      <TestimonialPreview />

      <section className="relative px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <TrustBadges />
        </div>
      </section>

=======
      <NetworkSection />
      <PlatformMarquee />
      <MarqueeTicker items={TICKER_ITEMS} className="my-4" />
      <WhatWeDo />
      <HowItWorks />
      <SelectedWork />
      <SocialProof />
      <TestimonialPreview />
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      <FinalCTA />
    </>
  );
}
