import type { Metadata } from "next";
<<<<<<< HEAD
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import CrossMarquee from "@/components/sections/CrossMarquee";
import { Check } from "lucide-react";
=======
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import EngagementTable from "@/components/sections/EngagementTable";
import { services } from "@/lib/data";
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525

export const metadata: Metadata = {
  title: "Services",
  description:
<<<<<<< HEAD
    "LinkedIn & X creator campaigns, Instagram/YT tech & fintech campaigns, LinkedIn founder amplification, engagement at scale, viral amplification, Product Hunt launches, personal branding, and meme marketing.",
  ...pageOG(
    "Services | SocialBug Media",
    "LinkedIn & X creator campaigns, Instagram/YT tech & fintech campaigns, LinkedIn founder amplification, engagement at scale, viral amplification, Product Hunt launches, personal branding, and meme marketing.",
    "/services"
  ),
};

const included = [
  "A named strategist who stays on the account start to finish",
  "Creator shortlists with audience-quality checks, not follower counts",
  "Rate negotiation and contracting handled by us",
  "Creative direction and script review before anything goes live",
  "Coordinated posting calendar across every creator",
  "A plain-English wrap report with what we'd change next time",
];

const timeline = [
  { step: "1", title: "Brief & strategy", text: "Positioning, audience, the moment worth building around, and the success metric we'll be judged on." },
  { step: "2", title: "Shortlist & lock", text: "Creator shortlist with reasoning, rates negotiated, contracts signed, calendar drafted." },
  { step: "3", title: "Create & review", text: "Briefs out, drafts in, feedback rounds handled between you and each creator by us." },
  { step: "4", title: "Go live & report", text: "Staggered publishing, live monitoring, amplification where it's working, wrap report at the end." },
];

const faqs = [
  { q: "Do you work with brands outside SaaS?", a: "Yes. The network started in tech, but we've run campaigns in e-commerce, energy, fintech, consumer and pet care. What matters is whether the story can be told credibly by a real person." },
  { q: "How fast can a campaign go live?", a: "A single creator post can go live within a few hours of approval. Full multi-creator campaigns typically run over a couple of weeks end to end." },
  { q: "Can we pick our own creators?", a: "Absolutely. You get the shortlist with our reasoning, swap anyone out, or hand the whole selection to us." },
  { q: "What does reporting look like?", a: "Reach, engagement, comments, click-throughs where we can track them, and an honest note on what underperformed and why." },
];

const stats = [
  { value: "1000+", label: "Creators" },
  { value: "100+", label: "Campaigns" },
  { value: "22+", label: "Platforms" },
  { value: "1", label: "Day to go live, within a few hours" },
];

=======
    "Influencer campaigns, SaaS growth, Product Hunt launches, creator sourcing, content, launch strategy, community activation, and reporting.",
};

>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            WE DON&apos;T JUST FIND
            <br />
            INFLUENCERS. WE CREATE
            <br />
            <span className="gradient-text">MOMENTUM.</span>
          </>
        }
<<<<<<< HEAD
        description="Eight ways we help ambitious products get seen, talked about and shared, pick one, or let us run the whole thing."
      />

      <ServicesShowcase />

      {/* stats */}
      <section className="relative border-y border-white/10 bg-white/[0.02] px-6 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display gradient-text-alt text-3xl sm:text-4xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-sb-white/50">{s.label}</p>
            </div>
=======
        description="Eight ways we help ambitious products get seen, talked about, and shared — pick one, or let us run the whole loop."
      />

      <section className="relative px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              number={s.number}
              title={s.title}
              short={s.short}
              slug={s.slug}
              index={i}
            />
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* what's included, light section */}
      <section className="sb-light relative px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-sb-pink">
              Every engagement
            </p>
            <h2 className="font-display mt-3 text-4xl leading-[0.95] sm:text-5xl">
              WHAT&apos;S <span className="text-sb-orange">ALWAYS</span> INCLUDED.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-black/60">
              Whether you book one launch or a year of always-on content, this is the floor -
              not an upsell list.
            </p>
          </div>
          <ul className="grid gap-3">
            {included.map((item, i) => (
              <Reveal key={item} direction="right" delay={i * 0.05}>
                <li className="flex items-start gap-3 rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-sb-orange" />
                  <span className="text-sm text-black/75">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CrossMarquee />

      {/* timeline */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How It Runs" align="center">
            BRIEF TO LIVE, <span className="gradient-text">STEP BY STEP.</span>
          </SectionHeading>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.step} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                <div className="sb-card-shine h-full rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="font-display gradient-text-alt text-3xl">{t.step}</span>
                  <h3 className="font-heading mt-3 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sb-white/55">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="relative px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Questions" align="center">
            THINGS PEOPLE <span className="gradient-text">ASK US.</span>
          </SectionHeading>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-heading text-base font-semibold sm:text-lg">{f.q}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-sb-white/55">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Get Started"
        heading={
          <>
            LET&apos;S BUILD YOUR
            <br />
            NEXT <span className="gradient-text">CAMPAIGN.</span>
          </>
        }
        primaryLabel="Start a Project"
      />
=======
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Engagement Models">
            PICK YOUR
            <br />
            <span className="gradient-text">PACE.</span>
          </SectionHeading>
          <div className="mt-14">
            <EngagementTable />
          </div>
        </div>
      </section>
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    </>
  );
}
