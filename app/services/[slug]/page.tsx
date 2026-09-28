import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Target,
  Settings2,
  Gift,
} from "lucide-react";
import { services, accentFor } from "@/lib/data";
import { pageOG } from "@/lib/utils";
import Button from "@/components/ui/Button";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  const title = `${svc.title} | SocialBug Media`;
  return {
    title: svc.title,
    description: svc.short,
    ...pageOG(title, svc.short, `/services/${svc.slug}`, svc.image),
  };
}

const STATS = [
  { value: "1000+", label: "Creators in the network" },
  { value: "100+", label: "Campaigns delivered" },
  { value: "22+", label: "Platforms & niches covered" },
  { value: "1", label: "Team, start to finish" },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const accent = accentFor(currentIndex);
  const related = [1, 2, 3]
    .map((offset) => services[(currentIndex + offset) % services.length])
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const faqs: FaqItem[] = [
    { q: `What exactly does "${svc.title}" include?`, a: svc.what },
    { q: "Who is this built for?", a: svc.who },
    { q: "What do you handle for us?", a: svc.handle },
    { q: "What do we walk away with?", a: svc.outcomes },
  ];

  return (
    <div className="sb-light">
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal direction="left">
            <Link
              href="/services"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-black/45 transition-colors hover:text-sb-orange"
            >
              <ArrowLeft size={14} /> All services
            </Link>

            <div className="mt-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-heading font-bold uppercase tracking-[0.15em]"
                style={{ background: accent.hex, color: accent.on }}
              >
                {svc.number} · Service
              </span>
            </div>

            <h1 className="font-display mt-5 text-4xl leading-[1.05] sm:text-5xl">
              {svc.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              {svc.what}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/contact"
                badge={
                  <>
                    <Sparkles size={11} /> 2 mins
                  </>
                }
              >
                Get Started <ArrowRight size={15} />
              </Button>
              <Button href="/case-studies" variant="outlineDark">
                See it in action
              </Button>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.1}
            className="relative mx-auto aspect-4/5 w-full max-w-70 overflow-hidden rounded-xl border border-black/10 shadow-[0_16px_36px_-18px_rgba(0,0,0,0.35)] lg:max-w-none"
          >
            <Image
              src={svc.image}
              alt={svc.title}
              fill
              sizes="(min-width: 1024px) 26vw, 60vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.15} className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6 text-center sm:text-left">
              <p className="font-display gradient-text-alt text-2xl sm:text-3xl">
                <Counter value={s.value} />
              </p>
              <p className="mt-1.5 text-xs leading-snug text-black/50">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* What / Who / Handle / Outcomes */}
      <section className="relative px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-3.5 sm:grid-cols-2">
            {[
              { label: "What it is", text: svc.what, icon: Sparkles, tint: "bg-blue-50 text-blue-600" },
              { label: "Who it's for", text: svc.who, icon: Target, tint: "bg-pink-50 text-pink-500" },
              { label: "What we handle", text: svc.handle, icon: Settings2, tint: "bg-amber-50 text-amber-500" },
              { label: "What you get", text: svc.outcomes, icon: Gift, tint: "bg-emerald-50 text-emerald-600" },
            ].map((b, i) => (
              <Reveal key={b.label} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 0.08}>
                <div className="card-shiny sb-auto-shine h-full rounded-xl border border-black/10 bg-white p-5">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${b.tint}`}>
                    <b.icon size={16} />
                  </span>
                  <p className="mt-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: accent.hex }}>
                    {b.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="relative px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-sb-pink">
              How it runs
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.05] sm:text-4xl">
              FROM BRIEF TO <span className="gradient-text">LIVE.</span>
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {svc.workflow.map((step, i) => (
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
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <Reveal direction="right">
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-sb-orange">
              Good to know
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.05] sm:text-4xl">
              QUESTIONS, <span className="gradient-text">ANSWERED.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" className="mt-6">
            <FaqAccordion items={faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="relative px-6 pb-16 pt-10">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="left">
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-sb-pink">
              Pair it with
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.05] sm:text-4xl">
              OTHER WAYS <span className="gradient-text">WE HELP.</span>
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-3">
            {related.map((r, i) => {
              const idxR = services.findIndex((s) => s.slug === r.slug);
              const accentR = accentFor(idxR);
              return (
                <Reveal key={r.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                  <Link
                    href={`/services/${r.slug}`}
                    data-cursor="pointer"
                    className="card-shiny sb-auto-shine group flex h-full flex-col justify-between rounded-xl border border-black/10 bg-white p-5"
                  >
                    <div>
                      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40">
                        {r.number}
                      </p>
                      <p className="font-heading mt-2 text-base font-bold leading-tight text-black">
                        {r.title}
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-black/55">{r.short}</p>
                    </div>
                    <span
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: accentR.hex }}
                    >
                      Learn more <ArrowRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow={svc.title}
        heading={
          <>
            LET&apos;S PUT THIS <span className="gradient-text">TO WORK.</span>
          </>
        }
      />
    </div>
  );
}
