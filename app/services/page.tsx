import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import EngagementTable from "@/components/sections/EngagementTable";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Influencer campaigns, SaaS growth, Product Hunt launches, creator sourcing, content, launch strategy, community activation, and reporting.",
};

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
          ))}
        </div>
      </section>

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
    </>
  );
}
