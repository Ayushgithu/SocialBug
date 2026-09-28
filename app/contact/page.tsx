import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ContactPanel from "@/components/forms/ContactPanel";
import SideReveal from "@/components/ui/SideReveal";
import Marquee from "@/components/ui/Marquee";
import { Mail, MapPin, Clock } from "lucide-react";
import { partnerLogos, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo with SocialBug Media, tell us about your product and what growth looks like for you.",
  ...pageOG(
    "Contact | SocialBug Media",
    "Book a demo with SocialBug Media, tell us about your product and what growth looks like for you.",
    "/contact"
  ),
};

const details = [
  { icon: Mail, label: socialLinks.email },
  { icon: Clock, label: "Replies within 1 business day" },
  { icon: MapPin, label: "Working with teams globally" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started in 2 Minutes"
        title={
          <>
            LET&apos;S MAKE
            <br />
            SOME <span className="gradient-text">NOISE.</span>
          </>
        }
        description="Tell us about your product, your stage, and what you need, we'll come back with a plan, not a pitch deck."
      />

      <section className="relative px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SideReveal from="left" className="flex min-w-0 flex-col justify-between gap-10">
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

            <div className="glow-border rounded-xl bg-white/[0.02] p-7">
              <p className="font-heading text-sm font-semibold">What happens next</p>
              <ol className="mt-4 flex flex-col gap-3 text-sm text-sb-white/55">
                <li>1. We review your project and reply within minutes.</li>
                <li>2. A short call to understand goals and fit.</li>
                <li>3. A tailored plan, creators, timeline, and budget.</li>
              </ol>
            </div>
          </SideReveal>

          <SideReveal from="right" delay={0.12} className="min-w-0">
            <ContactPanel />
          </SideReveal>
        </div>
      </section>

      {/* Partner logos, white strip under the form */}
      <section className="sb-light relative px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-black/40">
            Trusted by teams at
          </p>
          <div className="mt-8">
            <Marquee speed={34} reverse>
              {partnerLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-16 w-36 shrink-0 items-center justify-center sm:h-20 sm:w-44"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={90}
                    className="h-auto max-h-12 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 sm:max-h-14"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}