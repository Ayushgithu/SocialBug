"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import { collaborationLogos } from "@/lib/data";
import {
  InstagramIcon,
  XIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
  ProductHuntIcon,
  SlackIcon,
  DiscordIcon,
  FacebookIcon,
  RedditIcon,
  PinterestIcon,
  TwitchIcon,
  SpotifyIcon,
  TelegramIcon,
  WhatsAppIcon,
  SnapchatIcon,
  GitHubIcon,
  BehanceIcon,
  DribbbleIcon,
  MediumIcon,
  SubstackIcon,
  ThreadsIcon,
  GoogleIcon,
  FigmaIcon,
  NotionIcon,
} from "@/components/ui/SocialIcons";

const ICON_MAP: Record<string, ComponentType<{ size?: number }>> = {
  Instagram: InstagramIcon,
  "X / Twitter": XIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  "Product Hunt": ProductHuntIcon,
  Slack: SlackIcon,
  Discord: DiscordIcon,
  Facebook: FacebookIcon,
  Reddit: RedditIcon,
  Pinterest: PinterestIcon,
  Twitch: TwitchIcon,
  Spotify: SpotifyIcon,
  Telegram: TelegramIcon,
  WhatsApp: WhatsAppIcon,
  Snapchat: SnapchatIcon,
  GitHub: GitHubIcon,
  Behance: BehanceIcon,
  Dribbble: DribbbleIcon,
  Medium: MediumIcon,
  Substack: SubstackIcon,
  Threads: ThreadsIcon,
  Google: GoogleIcon,
  Figma: FigmaIcon,
  Notion: NotionIcon,
};

const PARTNER_SHAPES = ["rounded-md", "rounded-full", "rotate-45"];
const PARTNER_COLORS = [
  "from-sb-pink to-sb-orange",
  "from-sb-orange to-sb-lime",
  "from-sb-lime to-sb-blue",
  "from-sb-blue to-sb-purple",
  "from-sb-purple to-sb-pink",
];

function LogoChip({ name, type, index }: { name: string; type: "platform" | "partner"; index: number }) {
  const Icon = ICON_MAP[name];

  if (type === "platform" && Icon) {
    return (
      <div
        data-cursor="pointer"
        className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md">
          <Icon size={22} />
        </span>
        <span className="whitespace-nowrap font-heading text-sm font-medium text-sb-white/80 transition-colors group-hover:text-sb-white">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div
      data-cursor="pointer"
      className="group flex shrink-0 items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sb-lime/40 hover:bg-white/[0.05]"
    >
      <span
        className={`h-3 w-3 shrink-0 bg-gradient-to-br ${PARTNER_COLORS[index % PARTNER_COLORS.length]} ${
          PARTNER_SHAPES[index % PARTNER_SHAPES.length]
        }`}
      />
      <span className="whitespace-nowrap font-heading text-sm font-semibold tracking-tight text-sb-white/65 transition-colors group-hover:text-sb-white">
        {name}
      </span>
    </div>
  );
}

export default function LogoWall() {
  const rows = [
    collaborationLogos.slice(0, 30),
    collaborationLogos.slice(30, 60),
    collaborationLogos.slice(60),
  ];
  const directions = [false, true, false];
  const speeds = [46, 55, 40];

  return (
    <div className="flex flex-col gap-10">
      {/* Auto-scrolling rows */}
      <div className="flex flex-col gap-4">
        {rows.map((row, i) => (
          <Marquee key={i} reverse={directions[i]} speed={speeds[i]}>
            {row.map((logo, j) => (
              <LogoChip key={`${logo.name}-${j}`} name={logo.name} type={logo.type} index={j} />
            ))}
          </Marquee>
        ))}
      </div>

      {/* Everything, all at once */}
      <div>
        <p className="mb-6 text-center font-heading text-xs uppercase tracking-[0.25em] text-sb-white/40">
          Every platform &amp; partner, in one place — {collaborationLogos.length} and counting
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:grid-cols-8"
        >
          {collaborationLogos.map((logo, i) => {
            const Icon = ICON_MAP[logo.name];
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 24) * 0.015 }}
                data-cursor="pointer"
                className="group flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] p-2 text-center transition-colors hover:border-white/25 hover:bg-white/[0.05]"
              >
                {Icon ? (
                  <Icon size={20} />
                ) : (
                  <span
                    className={`h-2.5 w-2.5 bg-gradient-to-br ${PARTNER_COLORS[i % PARTNER_COLORS.length]} ${
                      PARTNER_SHAPES[i % PARTNER_SHAPES.length]
                    }`}
                  />
                )}
                <span className="truncate font-heading text-[9px] leading-tight text-sb-white/45 group-hover:text-sb-white/70 sm:text-[10px]">
                  {logo.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
