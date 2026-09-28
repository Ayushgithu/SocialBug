import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import AvatarBlob from "@/components/ui/AvatarBlob";
import FounderCard from "@/components/ui/FounderCard";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import PartnerLogoWall from "@/components/sections/PartnerLogoWall";
import TrustBadges from "@/components/sections/TrustBadges";
import OriginStory from "@/components/sections/OriginStory";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/ui/Counter";
import { founders, teamGrid } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "SocialBug Media helps SaaS companies, startups, and product launches grow through a curated network of 1000+ influencers and professionals.",
  ...pageOG(
    "About | SocialBug Media",
    "SocialBug Media helps SaaS companies, startups, and product launches grow through a curated network of 1000+ influencers and professionals.",
    "/about"
  ),
};


// TODO: these are rounded, approximate figures, swap in exact numbers
// whenever they're confirmed.
const stats = [
  { value: "1000+", label: "Creators in our LinkedIn & Instagram network" },
  { value: "100+", label: "Campaigns executed end-to-end" },
  { value: "20+", label: "Agencies working with us directly" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SocialBug Media"
        title={
          <>
            STRATEGY. CONTENT.
            <br />
            <span className="gradient-text">GROWTH.</span>
          </>
        }
        description="SocialBug Media helps SaaS companies, startups, founders, and product launches grow through a curated network of 1000+ influencers and professionals, including creators from leading technology companies and founders building in public."
      />

      {/* Quick trust stats, up front, before the story unfolds */}
      <section className="relative border-y border-white/10 bg-white/2 px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display gradient-text-alt text-3xl sm:text-4xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-2 text-xs text-sb-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our story, founders' origin story, timeline, and values */}
      <OriginStory />

      {/* Founders */}
      <section className="relative overflow-hidden px-6 py-10">
        <div className="sb-line-field opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading eyebrow="Who's Behind It">
            THE FOUNDERS BEHIND THE <span className="gradient-text">BUZZ.</span>
          </SectionHeading>

          <div className="mx-auto mt-12 grid max-w-4xl gap-14 md:grid-cols-2 md:gap-20">
            {founders.map((f) => (
              <FounderCard
                key={f.name}
                name={f.name}
                role={f.role}
                chips={f.chips}
                bio={f.bio}
                photo={f.photo}
                linkedin={f.linkedin}
                showLinkedin={f.showLinkedin ?? true}
              />
            ))}
          </div>

          <div className="mt-14">
            <TrustBadges />
          </div>

          {/* Team grid, hidden until real team members beyond the two
              founders are added to `teamGrid` in lib/data.ts */}
          {teamGrid.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {teamGrid.map((t, i) => (
                <div key={t.name} className="flex flex-col items-center text-center">
                  <AvatarBlob initials={t.initials} accent={t.accent} size={72} index={i + 2} />
                  <p className="font-heading mt-4 text-sm font-semibold">{t.name}</p>
                  <p className="mt-1 text-xs text-sb-white/45">{t.role}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Hunt callout */}
      <section className="relative px-6 py-14">
        <div className="glow-border mx-auto max-w-6xl rounded-xl bg-white/2 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-sb-orange">
                Launch Support
              </p>
              <h3 className="font-display mt-4 text-3xl sm:text-4xl">
                PRODUCT HUNT,
                <br />
                DONE PROPERLY.
              </h3>
            </div>
            <p className="text-sb-white/60">
              Timing, positioning, community push, and launch-day strategy -
              we treat your Product Hunt launch like the campaign it actually
              is, not an afterthought bolted onto the roadmap.
            </p>
          </div>
        </div>
      </section>

      <PartnerLogoWall />

      <MarqueeTicker
        items={["FOUNDER-LED", "10+ YEARS IN CREATOR MARKETING", "SAAS OBSESSED", "BUILT IN PUBLIC"]}
        className="my-2"
      />

      {/* Why choose us, closes with its own embedded CTA */}
      <div className="pb-8">
        <WhyChooseUs />
      </div>
    </>
  );
}
