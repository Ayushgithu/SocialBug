import type { Metadata } from "next";
<<<<<<< HEAD
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
=======
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AvatarBlob from "@/components/ui/AvatarBlob";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import { ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
import { founders, teamGrid } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "SocialBug Media helps SaaS companies, startups, and product launches grow through a curated network of 1000+ influencers and professionals.",
<<<<<<< HEAD
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
=======
};

const loop = [
  {
    step: "Strategy",
    desc: "We start with positioning, audience, and the moment worth building around — before a single creator is contacted.",
  },
  {
    step: "Sourcing",
    desc: "Precision-matched against a network of 1000+ vetted creators, founders, and tech professionals.",
  },
  {
    step: "Creative Direction",
    desc: "Every campaign gets a point of view, not a generic brief. Content built for how each platform actually works.",
  },
  {
    step: "Content",
    desc: "Production, editing, and platform-native formatting handled end-to-end.",
  },
  {
    step: "Posting",
    desc: "Coordinated timing across creators so the moment lands together, not in scattered posts.",
  },
  {
    step: "Reporting",
    desc: "Transparent, real-time data on what moved — and a clear next step.",
  },
];

const stats = [
  { value: "1000+", label: "Curated creators & professionals" },
  { value: "60+", label: "Campaigns run end-to-end" },
  { value: "3", label: "Product Hunt top-5 launches" },
  { value: "4.2x", label: "Average engagement lift" },
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
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
<<<<<<< HEAD
        description="SocialBug Media helps SaaS companies, startups, founders, and product launches grow through a curated network of 1000+ influencers and professionals, including creators from leading technology companies and founders building in public."
      />

      {/* Quick trust stats, up front, before the story unfolds */}
      <section className="relative border-y border-white/10 bg-white/[0.02] px-6 py-12">
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
        <div className="glow-border mx-auto max-w-6xl rounded-xl bg-white/[0.02] p-8 sm:p-12">
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
=======
        description="SocialBug Media helps SaaS companies, startups, founders, and product launches grow through a curated network of 1000+ influencers and professionals — including creators from leading technology companies and founders building in public."
      />

      {/* Editorial statement */}
      <section className="relative px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.25em] text-sb-lime">
              Who we are
            </p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] sm:text-5xl">
              WE DON&apos;T PITCH.
              <br />
              WE PLUG PRODUCTS
              <br />
              INTO CONVERSATIONS.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 text-sb-white/65">
            <p>
              Most agencies stop at &ldquo;find some influencers.&rdquo; We run
              managed campaigns end-to-end — strategy, influencer sourcing,
              creative direction, content, posting, and reporting — so founders
              can stay focused on the product.
            </p>
            <p>
              We also help companies win their Product Hunt moment: launch
              timing, positioning, community activation, and growth strategy,
              all built around a single day that actually counts.
            </p>
            <Button href="/services" variant="outline" className="w-fit">
              See how we work <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Who's Behind It">
            THE FOUNDERS
            <br />
            BEHIND THE <span className="gradient-text">BUZZ.</span>
          </SectionHeading>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className="glow-border flex flex-col items-start gap-6 rounded-3xl bg-white/[0.02] p-8 sm:flex-row sm:items-center"
              >
                <AvatarBlob initials={f.initials} accent={f.accent} size={104} index={i} />
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-lime">
                    {f.role}
                  </p>
                  <h3 className="font-heading mt-2 text-2xl font-semibold">{f.name}</h3>
                  <p className="mt-3 text-sm text-sb-white/60">{f.bio}</p>
                  <a
                    href="#"
                    data-cursor="pointer"
                    className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sb-white/60 transition-colors hover:border-sb-lime hover:text-sb-lime"
                  >
                    <LinkedInIcon size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Team grid */}
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {teamGrid.map((t, i) => (
              <div key={t.name} className="flex flex-col items-center text-center">
                <AvatarBlob initials={t.initials} accent={t.accent} size={72} index={i + 2} />
                <p className="font-heading mt-4 text-sm font-semibold">{t.name}</p>
                <p className="mt-1 text-xs text-sb-white/45">{t.role}</p>
              </div>
            ))}
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <PartnerLogoWall />

=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      <MarqueeTicker
        items={["FOUNDER-LED", "10+ YEARS IN CREATOR MARKETING", "SAAS OBSESSED", "BUILT IN PUBLIC"]}
        className="my-2"
      />

<<<<<<< HEAD
      {/* Why choose us, closes with its own embedded CTA */}
      <div className="pb-8">
        <WhyChooseUs />
      </div>
=======
      {/* Stats strip */}
      <section className="relative border-y border-white/10 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display gradient-text-alt text-4xl sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-sb-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The loop */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The Loop We Live In">
            THAT&apos;S THE LOOP
            <br />
            WE LIVE <span className="gradient-text">IN.</span>
          </SectionHeading>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loop.map((item, i) => (
              <div
                key={item.step}
                className="glow-border rounded-3xl bg-white/[0.02] p-7"
              >
                <Badge className="mb-5">0{i + 1}</Badge>
                <h3 className="font-heading text-xl font-semibold">{item.step}</h3>
                <p className="mt-3 text-sm text-sb-white/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Hunt callout */}
      <section className="relative px-6 pb-28">
        <div className="glow-border mx-auto max-w-6xl rounded-3xl bg-white/[0.02] p-10 sm:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-sb-orange">
                Launch Support
              </p>
              <h3 className="font-display mt-4 text-4xl sm:text-5xl">
                PRODUCT HUNT,
                <br />
                DONE PROPERLY.
              </h3>
            </div>
            <p className="text-sb-white/60">
              Timing, positioning, community push, and launch-day strategy —
              we treat your Product Hunt launch like the campaign it actually
              is, not an afterthought bolted onto the roadmap.
            </p>
          </div>
        </div>
      </section>
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    </>
  );
}
