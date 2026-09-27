import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import LogoWall from "@/components/sections/LogoWall";
import CollaborationsHero3D from "@/components/sections/CollaborationsHero3D";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import { collaborationStats, platformIcons } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "The platforms we run campaigns on and the partner network behind every SocialBug Media launch.",
};

export default function CollaborationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collaborations"
        title={
          <>
            EVERY PLATFORM.
            <br />
            ONE <span className="gradient-text">NETWORK.</span>
          </>
        }
        description="From LinkedIn threads to Product Hunt launches — we run coordinated campaigns across every platform that actually moves your category."
      />

      <section className="relative -mt-8 px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <CollaborationsHero3D />
        </div>
      </section>

      {/* Stats table */}
      <MarqueeTicker
        items={["22+ PLATFORMS", "80+ PARTNERS", "GLOBAL NETWORK", "ONE COORDINATED CAMPAIGN"]}
      />
      <section className="relative border-y border-white/10 bg-white/[0.02] px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {collaborationStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display gradient-text-alt text-4xl sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-sb-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform breakdown table */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Where We Show Up">
            PLATFORMS WE
            <br />
            RUN <span className="gradient-text">CAMPAIGNS ON.</span>
          </SectionHeading>

          <div className="mt-14 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.15em] text-sb-white/45">
                  <th className="px-6 py-4 font-heading font-medium">Platform</th>
                  <th className="px-6 py-4 font-heading font-medium">Best for</th>
                  <th className="px-6 py-4 font-heading font-medium">Content type</th>
                  <th className="px-6 py-4 font-heading font-medium">Typical timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["LinkedIn", "Founder-led B2B trust", "Threads, carousels", "1–2 weeks"],
                  ["X / Twitter", "Real-time momentum", "Threads, launch day", "Days"],
                  ["Product Hunt", "Category launches", "Comments, upvote push", "1 day"],
                  ["Instagram", "Brand + lifestyle reach", "Reels, stories", "2–3 weeks"],
                  ["YouTube", "Deep-dive credibility", "Reviews, walkthroughs", "3–4 weeks"],
                  ["TikTok", "Fast organic reach", "Short-form video", "1–2 weeks"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 ${
                          j === 0 ? "font-heading font-semibold text-sb-white" : "text-sb-white/60"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={`${platformIcons.length}+ Platforms · 80+ Partners`}>
            THE NETWORK
            <br />
            BEHIND THE <span className="gradient-text">NETWORK.</span>
          </SectionHeading>
        </div>

        <div className="mt-14">
          <LogoWall />
        </div>
      </section>
    </>
  );
}
