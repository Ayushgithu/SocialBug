import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactPanel from "@/components/forms/ContactPanel";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo with SocialBug Media — tell us about your product and what growth looks like for you.",
};

const details = [
  { icon: Mail, label: "hello@socialbugmedia.com" },
  { icon: Clock, label: "Replies within 1 business day" },
  { icon: MapPin, label: "Working with teams globally" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        title={
          <>
            LET&apos;S MAKE
            <br />
            SOME <span className="gradient-text">NOISE.</span>
          </>
        }
        description="Tell us about your product, your stage, and what you need — we'll come back with a plan, not a pitch deck."
      />

      <section className="relative px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex min-w-0 flex-col justify-between gap-10">
            <div className="flex flex-col gap-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-3 text-sm text-sb-white/60">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15">
                    <d.icon size={15} className="text-sb-lime" />
                  </span>
                  {d.label}
                </div>
              ))}
            </div>

            <div className="glow-border rounded-3xl bg-white/[0.02] p-7">
              <p className="font-heading text-sm font-semibold">What happens next</p>
              <ol className="mt-4 flex flex-col gap-3 text-sm text-sb-white/55">
                <li>1. We review your project within one business day.</li>
                <li>2. A short call to understand goals and fit.</li>
                <li>3. A tailored plan — creators, timeline, and budget.</li>
              </ol>
            </div>
          </div>

          <ContactPanel />
        </div>
      </section>
    </>
  );
}