import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Quote } from "lucide-react";
import { caseStudies } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GradientBlobs from "@/components/ui/GradientBlobs";

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
  return { title: cs.name, description: cs.challenge };
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
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <GradientBlobs className="opacity-60" />
        <div className="relative mx-auto max-w-5xl">
          <Badge>{cs.industry}</Badge>
          <h1 className="font-display mt-6 text-[16vw] leading-[0.88] sm:text-8xl">
            {cs.name.toUpperCase()}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sb-white/60">{cs.campaignType}</p>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-4">
          {cs.metrics.map((m) => (
            <div key={m.label} className="glow-border rounded-2xl bg-white/[0.02] p-6 text-center">
              <p className="gradient-text font-display text-3xl sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-sb-white/50">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-14">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-orange">
              The Challenge
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-sb-white/80 sm:text-2xl">
              {cs.challenge}
            </p>
          </div>
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-lime">
              The Strategy
            </p>
            <p className="mt-4 max-w-2xl text-sb-white/65">{cs.strategy}</p>
          </div>
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-blue">
              Execution
            </p>
            <p className="mt-4 max-w-2xl text-sb-white/65">{cs.execution}</p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="glow-border mx-auto max-w-4xl rounded-3xl bg-white/[0.02] p-10 text-center sm:p-16">
          <Quote className="mx-auto mb-6 text-sb-pink" size={28} />
          <p className="font-heading text-xl leading-snug sm:text-2xl">&ldquo;{cs.quote}&rdquo;</p>
          <p className="mt-6 text-sm text-sb-white/50">{cs.author}</p>
        </div>
      </section>

      <section className="relative px-6 pb-28 pt-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
            <p className="text-sm text-sb-white/50">Want a result like this for your launch?</p>
            <Button href="/contact" variant="outline">
              Book a demo <ArrowUpRight size={15} />
            </Button>
          </div>

          <Link
            href={`/case-studies/${next.slug}`}
            data-cursor="pointer"
            className="group mt-14 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-7 transition-colors hover:bg-white/[0.05]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sb-white/40">Next project</p>
              <p className="font-heading mt-2 text-2xl font-semibold">{next.name}</p>
            </div>
            <ArrowUpRight
              size={22}
              className="text-sb-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sb-lime"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
