import Hero from "@/components/sections/Hero";
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
import StatementBanner from "@/components/sections/StatementBanner";
import TrustBadges from "@/components/sections/TrustBadges";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Posts scrolling left-to-right, logos right underneath scrolling
          right-to-left, moved up near the top instead of buried at the
          bottom of the page. */}
      <CreatorPostsMarquee  />
      <PartnerStrip compact />

      <StatementBanner />

      <ImpactStats />
      <ServicesShowcase limit={6} showViewAll />
      <WhyBrands />
      <HowItWorks />
      <CrossMarquee />
      <FeaturedCampaigns limit={3} showViewAll />
      <TestimonialPreview />
      <section className=" px-6 py-4">
        <div className="mx-auto max-w-6xl">
          <TrustBadges />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
