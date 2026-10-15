import type { Metadata } from "next";
import { pageOG } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import SideReveal from "@/components/ui/SideReveal";
import CreatorForm from "@/components/forms/CreatorForm";
import { BadgeCheck, MessageCircle, Wallet } from "lucide-react";

const title = "Get Listed as a Creator";
const description =
  "Join SocialBug's creator network. Brands find you, pitch you, and pay you for real campaigns on LinkedIn, Twitter and Instagram.";

export const metadata: Metadata = {
  title,
  description,
  ...pageOG(`${title} | SocialBug Media`, description, "/creators/join"),
};

const perks = [
  { icon: BadgeCheck, label: "Free to join, no exclusivity" },
  { icon: Wallet, label: "You set your own rates" },
  { icon: MessageCircle, label: "Campaign pitches land on WhatsApp or email" },
];

export default function JoinCreatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Creator Network"
        title={
          <>
            YOUR AUDIENCE
            <br />
            HAS A <span className="gradient-text">PRICE.</span>
            <br />
            GET LISTED.
          </>
        }
        description="Join SocialBug's creator network. Brands find you, pitch you, and pay you for real campaigns."
      />

      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SideReveal from="left" className="flex min-w-0 flex-col gap-10">
            <div className="flex flex-col gap-5">
              {perks.map((p) => (
                <div key={p.label} className="flex items-center gap-3 text-sm text-sb-white/60">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15">
                    <p.icon size={15} className="text-sb-lime" />
                  </span>
                  {p.label}
                </div>
              ))}
            </div>

            <div className="glow-border rounded-xl bg-black/2 p-7">
              <p className="font-heading text-sm font-semibold">What happens next</p>
              <ol className="mt-4 flex flex-col gap-3 text-sm text-sb-white/55">
                <li>1. We review your profile and numbers.</li>
                <li>2. You join our creator network.</li>
                <li>3. When a brand campaign fits, we reach out to you directly.</li>
              </ol>
            </div>
          </SideReveal>

          <SideReveal from="right" delay={0.12} className="min-w-0">
            <div className="glow-border min-w-0 rounded-xl bg-white/2 p-6 sm:p-10">
              <CreatorForm />
            </div>
          </SideReveal>
        </div>
      </section>
    </>
  );
}