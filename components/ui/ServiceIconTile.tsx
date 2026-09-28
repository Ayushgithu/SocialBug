"use client";

import {
  TrendingUp,
  Eye,
  Rocket,
  UserCircle,
  Smile,
  Share2,
  Video,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { cardAccentFor } from "@/lib/cardAccents";

const ICONS: Record<string, LucideIcon> = {
  "instagram-youtube-tech-fintech-campaigns": Video,
  "linkedin-founder-brand-amplification": TrendingUp,
  "one-partner-all-platforms": Share2,
  "instagram-x-viral-amplification": Eye,
  "product-hunt-launches": Rocket,
  "founder-personal-branding": UserCircle,
  "meme-marketing": Smile,
};

const DUAL_SLUG = "linkedin-x-creator-campaigns";

/** Plain white glyphs (no coloured box of their own) so they sit cleanly on the gradient tile. */
function LinkedInGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="6.5" cy="6.2" r="2" />
      <rect x="4.7" y="9.4" width="3.6" height="10.4" rx="0.4" />
      <path d="M10.4 9.4h3.4v1.6h.05c.5-.9 1.65-1.85 3.4-1.85 3.6 0 4.25 2.4 4.25 5.45v5.2h-3.6v-4.6c0-1.1-.02-2.5-1.55-2.5-1.55 0-1.8 1.2-1.8 2.42v4.68h-3.6V9.4Z" />
    </svg>
  );
}

function XGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.2 4.7H5.4l11.3 14.5Z" />
    </svg>
  );
}

function Tile({ accentIndex, children }: { accentIndex: number; children: ReactNode }) {
  const a = cardAccentFor(accentIndex);
  return (
    <span
      className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] text-white"
      style={{
        background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
        boxShadow: `0 12px 24px -8px ${a.glow}`,
      }}
    >
      {children}
    </span>
  );
}

/** Gradient icon tile for a service. LinkedIn & X get two separate tiles side by side. */
export default function ServiceIconTile({ slug, accentIndex }: { slug: string; accentIndex: number }) {
  if (slug === DUAL_SLUG) {
    return (
      <span className="relative flex items-center gap-3">
        <Tile accentIndex={accentIndex}>
          <LinkedInGlyph size={26} />
        </Tile>
        <Tile accentIndex={accentIndex}>
          <XGlyph size={22} />
        </Tile>
      </span>
    );
  }
  const Icon = ICONS[slug] ?? Users;
  return (
    <Tile accentIndex={accentIndex}>
      <Icon size={26} />
    </Tile>
  );
}