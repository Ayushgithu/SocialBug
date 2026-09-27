import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { campaignThinking, accentFor } from "@/lib/data";

/** Closing section of the work page: how every campaign is built. Same
 * light, white-card language as the rest of the site, with each step
 * keyed to its own rotating accent color for the number badge. */
export default function CampaignThinking() {
  return (
    <section className="sb-light relative px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="left">
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-sb-orange">
            How we think
          </p>
          <h2 className="font-display mt-3 text-3xl leading-[1.05] sm:text-4xl">
            OUR CAMPAIGN <span className="gradient-text">THINKING</span>
          </h2>
        </Reveal>

        <ol className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {campaignThinking.map((item, i) => {
            const accent = accentFor(i);
            return (
              <Fragment key={item.step}>
                <li className="flex-1">
                  <Reveal direction="up" delay={i * 0.06} className="h-full">
                    <div className="card-shiny sb-auto-shine h-full rounded-xl border border-black/10 bg-white p-5">
                      <span
                        className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full font-heading text-xs font-bold"
                        style={{ background: accent.soft, color: accent.hex }}
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-heading text-base font-bold text-black">{item.step}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-black/60">{item.line}</p>
                    </div>
                  </Reveal>
                </li>
                {i < campaignThinking.length - 1 && (
                  <li aria-hidden className="hidden items-center justify-center text-black/20 lg:flex">
                    <ArrowRight size={16} />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>

        <Reveal direction="up" delay={0.1}>
          <p className="font-display mt-12 text-2xl leading-[1.15] text-black sm:text-3xl">
            WE DON&apos;T JUST MAKE CONTENT.
            <br />
            <span className="gradient-text">WE BUILD THINGS PEOPLE REMEMBER.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
