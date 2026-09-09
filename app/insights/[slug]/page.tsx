import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { insights } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import GradientBlobs from "@/components/ui/GradientBlobs";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="relative overflow-hidden px-6 pb-28 pt-40">
      <GradientBlobs className="opacity-50" />
      <div className="relative mx-auto max-w-3xl">
        <Link
          href="/insights"
          data-cursor="pointer"
          className="inline-flex items-center gap-2 text-sm text-sb-white/50 hover:text-sb-white"
        >
          <ArrowLeft size={15} /> All insights
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-sb-white/45">
            <Clock size={13} /> {post.readTime} read
          </span>
        </div>

        <h1 className="font-display mt-6 text-4xl leading-[0.95] sm:text-6xl">
          {post.title}
        </h1>

        <div className="mt-12 flex max-w-none flex-col gap-5 text-base leading-relaxed text-sb-white/70">
          <p>
            Attention is the scarcest resource in every launch. The teams that
            win aren&apos;t always the ones with the best product — they&apos;re
            the ones who get the right people talking about it, at the right
            moment, in a way that feels earned rather than bought.
          </p>
          <p>
            That&apos;s the thread running through everything we do at
            SocialBug Media: strategy first, distribution second, noise last.
            This piece is a placeholder — swap in your real article content,
            images, and data when you&apos;re ready to publish.
          </p>
          <p>
            Want help turning an idea like this into an actual campaign?{" "}
            <Link href="/contact" className="text-sb-lime hover:underline">
              Let&apos;s talk.
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
