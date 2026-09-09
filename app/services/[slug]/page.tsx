import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GradientBlobs from "@/components/ui/GradientBlobs";
import ServiceVisual from "@/components/ui/ServiceVisual";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const next = services[(currentIndex + 1) % services.length];

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40">
        <GradientBlobs className="opacity-60" />
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge>{service.number} / {String(services.length).padStart(2, "0")}</Badge>
            <h1 className="font-display mt-6 text-[11vw] leading-[0.92] sm:text-6xl lg:text-6xl">
              {service.title.toUpperCase()}
            </h1>
            <p className="mt-6 max-w-lg text-base text-sb-white/60 sm:text-lg">
              {service.what}
            </p>
            <div className="mt-9">
              <Button href="/contact">
                Book a Demo <ArrowRight size={15} />
              </Button>
            </div>
          </div>
          <ServiceVisual type={service.visual} />
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          <div className="glow-border rounded-3xl bg-white/[0.02] p-8">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-lime">
              Who it&apos;s for
            </p>
            <p className="mt-4 text-sb-white/70">{service.who}</p>
          </div>
          <div className="glow-border rounded-3xl bg-white/[0.02] p-8">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-orange">
              Expected outcomes
            </p>
            <p className="mt-4 text-sb-white/70">{service.outcomes}</p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="glow-border rounded-3xl bg-white/[0.02] p-8 sm:p-12">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-sb-white/40">
              What we handle
            </p>
            <p className="mt-4 max-w-2xl text-sb-white/70">{service.handle}</p>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
              {service.workflow.map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sb-pink to-sb-orange text-[11px] font-bold text-sb-black">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm text-sb-white/50">
              <Check size={16} className="text-sb-lime" />
              Ready when you are — no lock-in, no bloated retainers.
            </div>
            <Button href="/contact" variant="outline">
              Start the conversation <ArrowUpRight size={15} />
            </Button>
          </div>

          <Link
            href={`/services/${next.slug}`}
            data-cursor="pointer"
            className="group mt-14 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-7 transition-colors hover:bg-white/[0.05]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sb-white/40">Next service</p>
              <p className="font-heading mt-2 text-2xl font-semibold">{next.title}</p>
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
