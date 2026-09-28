import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Sparkles } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { caseStudies, accentFor } from "@/lib/data";
import Image from "next/image";
import CaseCover from "@/components/ui/CaseCover";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { cn, pageOG } from "@/lib/utils";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  const title = `${cs.name} | SocialBug Media`;
  return {
    title: cs.name,
    description: cs.challenge,
    ...pageOG(title, cs.challenge, `/case-studies/${cs.slug}`, cs.image),
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const accent = accentFor(currentIndex);
  const total = caseStudies.length;
  const moreWork = [1, 2]
    .map((offset) => caseStudies[(currentIndex + offset) % total])
    .filter((c, i, arr) => c.slug !== slug && arr.findIndex((x) => x.slug === c.slug) === i);

  const rawRatio = cs.imageWidth && cs.imageHeight ? cs.imageWidth / cs.imageHeight : 4 / 5;
  const heroRatio = Math.min(1.35, Math.max(0.62, rawRatio));

  return (
    <div className="sb-light">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-14 pt-40">
        <div className="relative mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal direction="left">
            <Link
              href="/case-studies"
              data-cursor="pointer"
              className="mb-6 flex w-fit items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-black/45 transition-colors hover:text-sb-orange"
            >
              <ArrowLeft size={14} /> All work
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-widest"
                style={{ background: accent.hex, color: accent.on }}
              >
                {cs.industry}
              </span>
              {cs.brandLogoWhite && (
                <span className="relative inline-block h-8 w-28">
                  <Image src={cs.brandLogoWhite} alt={cs.name} fill sizes="112px" className="object-contain mix-blend-multiply object-left" />
                </span>
              )}
            </div>
            <h1 className="font-display mt-5 text-4xl leading-[1.05] sm:text-5xl">{cs.name}</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              {cs.challenge}
            </p>

            {cs.result && (
              <div className="mt-5 flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-heading text-sm font-bold"
                  style={{ borderColor: "rgba(0,0,0,0.1)", color: accent.hex }}
                >
                  <Sparkles size={14} /> {cs.result.value} {cs.result.label}
                </span>
              </div>
            )}
          </Reveal>
          <Reveal
            direction="right"
            delay={0.1}
            className="relative mx-auto w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 shadow-[0_16px_36px_-18px_rgba(0,0,0,0.35)]"
            style={{ aspectRatio: heroRatio, maxWidth: heroRatio < 0.8 ? "24rem" : undefined }}
          >
            {cs.image ? (
              <Image
                src={cs.image}
                alt={`${cs.name} campaign cover`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top "
              />
            ) : (
              <CaseCover name={cs.name} logo={cs.logo} industry={cs.industry} large />
            )}
          </Reveal>
        </div>

        {/* Results strip */}
        {cs.metrics && (
          <Reveal direction="up" delay={0.15} className="relative mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="bg-white px-5 py-6 text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl" style={{ color: accent.hex }}>
                  <Counter value={m.value} />
                </p>
                <p className="mt-1.5 text-xs leading-snug text-black/50">{m.label}</p>
              </div>
            ))}
          </Reveal>
        )}
      </section>

      {/* Challenge / Idea */}
      <section className="relative px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <Reveal direction="left">
              <div className="card-shiny sb-auto-shine h-full rounded-xl border border-black/10 bg-white p-5">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: accent.hex }}>
                  The Challenge
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-black/65">{cs.challenge}</p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.08}>
              <div className="card-shiny sb-auto-shine h-full rounded-xl border border-black/10 bg-white p-5">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: accent.hex }}>
                  The Idea
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-black/65">{cs.idea}</p>
                {cs.ideaQuote && (
                  <p className="mt-3 border-l-2 pl-3 text-sm font-semibold leading-snug text-black" style={{ borderColor: accent.hex }}>
                    &ldquo;{cs.ideaQuote}&rdquo;
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Execution */}
      <section className="relative px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent.hex }}>
              The Execution
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.05] sm:text-4xl">
              HOW WE <span className="gradient-text">MADE IT WORK.</span>
            </h2>
          </Reveal>

          {cs.executionIntro?.map((line) => (
            <Reveal key={line} direction="up">
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/65 sm:text-base">{line}</p>
            </Reveal>
          ))}

          {cs.stages && (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {cs.stages.map((st, i) => (
                <Reveal key={st.label} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 0.06}>
                  <div className="card-shiny sb-auto-shine flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-black/10 bg-white px-5 py-4">
                    <span className="font-heading text-sm text-black/45">{st.label}</span>
                    <ArrowRight size={14} style={{ color: accent.hex }} />
                    <span className="font-heading text-sm font-semibold text-black">{st.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {cs.flow && (
            <div className="mt-6">
              {cs.flowLabel && (
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-black/40">{cs.flowLabel}</p>
              )}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cs.flow.map((step, i) => (
                  <Reveal key={step} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.06}>
                    <div className="card-shiny sb-auto-shine flex items-center gap-3.5 rounded-xl border border-black/10 bg-white p-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold"
                        style={{ background: accent.soft, color: accent.hex }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-heading text-sm font-semibold text-black">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {cs.executionNote?.map((line) => (
            <Reveal key={line} direction="up" delay={0.06}>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-black/65 sm:text-base">{line}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Result-only fallback */}
      {cs.result && !cs.metrics && (
        <section className="relative px-6 py-10">
          <Reveal direction="zoom" className="mx-auto max-w-6xl">
            <div className="card-shiny sb-auto-shine max-w-sm rounded-xl border border-black/10 bg-white p-6">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: accent.hex }}>
                Result
              </p>
              <p className="font-display mt-2 text-4xl sm:text-5xl" style={{ color: accent.hex }}>
                <Counter value={cs.result.value} />
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-black/45">{cs.result.label}</p>
            </div>
          </Reveal>
        </section>
      )}

      {/* Campaign in the wild */}
      {cs.bodyImage && (
        <section className="relative px-6 py-10">
          <Reveal direction="up" className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: accent.hex, color: accent.on }}
              >
                <LinkedInIcon size={14} />
              </span>
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.15em] text-black/45">
                Campaign in the wild
              </p>
            </div>
            <div className="card-shiny sb-auto-shine overflow-hidden rounded-xl border border-black/10 bg-white p-3 sm:p-4">
              <div className="relative mx-auto aspect-9/16 max-w-xs overflow-hidden rounded-lg">
                {cs.bodyVideo ? (
                  <video
                    src={cs.bodyVideo}
                    poster={cs.bodyImage}
                    controls
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={cs.bodyImage}
                    alt={`${cs.name} campaign engagement`}
                    fill
                    sizes="(min-width: 640px) 340px, 90vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            {cs.bodyCaption && (
              <p className="mx-auto mt-4 max-w-sm text-center text-sm text-black/50">{cs.bodyCaption}</p>
            )}
          </Reveal>
        </section>
      )}

      {/* Takeaway */}
      <section className="relative px-6 py-10">
        <Reveal
          direction="up"
          className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-black/10 bg-white p-8 text-center shadow-[0_16px_40px_-24px_rgba(0,0,0,0.18)] sm:p-12"
        >
          <Quote className="mx-auto mb-4" size={22} style={{ color: accent.hex }} />
          <p className="font-heading mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black/40">
            The Takeaway
          </p>
          <p className="font-display text-2xl leading-snug text-black sm:text-3xl">{cs.takeaway}</p>
          {cs.quote && (
            <div className="mt-7 border-t border-black/10 pt-7">
              <p className="text-sm leading-snug text-black/70 sm:text-base">&ldquo;{cs.quote}&rdquo;</p>
              {cs.author && <p className="mt-3 text-xs text-black/45">{cs.author}</p>}
            </div>
          )}
        </Reveal>
      </section>

      {/* More work */}
      {moreWork.length > 0 && (
        <section className="relative px-6 pb-16 pt-6">
          <div className="mx-auto max-w-5xl">
            <Reveal direction="left">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-sb-pink">More work</p>
              <h2 className="font-display mt-3 text-3xl leading-[1.05] sm:text-4xl">
                SEE WHAT ELSE <span className="gradient-text">WE SHIPPED.</span>
              </h2>
            </Reveal>
            <div className={cn("mt-6 grid gap-3.5", moreWork.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1")}>
              {moreWork.map((cs2, i) => {
                const idx2 = caseStudies.findIndex((c) => c.slug === cs2.slug);
                const accent2 = accentFor(idx2);
                return (
                  <Reveal key={cs2.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                    <Link
                      href={`/case-studies/${cs2.slug}`}
                      data-cursor="pointer"
                      className="card-shiny sb-auto-shine group flex h-full flex-col justify-between rounded-xl border border-black/10 bg-white p-5"
                    >
                      <div>
                        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40">
                          {cs2.industry}
                        </p>
                        <p className="font-heading mt-2 text-lg font-bold leading-tight text-black">{cs2.name}</p>
                      </div>
                      <span
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: accent2.hex }}
                      >
                        Read the story <ArrowUpRight size={13} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <Reveal direction="up" delay={0.1} className="mt-10 flex items-center justify-between gap-6 border-t border-black/10 pt-8">
              <p className="text-sm text-black/50">Want a result like this for your launch?</p>
              <Button href="/contact" variant="outlineDark">
                Book a demo <ArrowUpRight size={15} />
              </Button>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
