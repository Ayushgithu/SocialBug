import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import { insights } from "@/lib/data";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on influencer marketing, SaaS growth, Product Hunt launches, and the creator economy.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            NOTES ON GROWTH,
            <br />
            LAUNCHES & THE <span className="gradient-text">CREATOR ECONOMY.</span>
          </>
        }
        description="Short, practical reads on what's actually working right now."
      />

      <section className="relative px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              data-cursor="pointer"
              className="group glow-border relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-sb-blue/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:bg-sb-blue/30 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center justify-between">
                <Badge>{post.category}</Badge>
                <ArrowUpRight
                  size={16}
                  className="text-sb-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sb-lime"
                />
              </div>

              <h3 className="font-heading relative z-10 mt-8 text-xl font-semibold leading-snug">
                {post.title}
              </h3>

              <div className="relative z-10 mt-8 flex items-center gap-1.5 text-xs text-sb-white/45">
                <Clock size={13} /> {post.readTime} read
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
