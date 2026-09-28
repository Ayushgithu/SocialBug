import type { ReactNode } from "react";
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
  ProductHuntIcon,
  RedditIcon,
  ThreadsIcon,
} from "@/components/ui/SocialIcons";

const ICONS_BY_SLUG: Record<string, (size: number) => ReactNode[]> = {
  "linkedin-x-creator-campaigns": (s) => [<LinkedInIcon key="li" size={s} />, <XIcon key="x" size={s} />],
  "instagram-youtube-tech-fintech-campaigns": (s) => [<InstagramIcon key="ig" size={s} />, <YouTubeIcon key="yt" size={s} />],
  "linkedin-founder-brand-amplification": (s) => [<LinkedInIcon key="li" size={s} />],
  "one-partner-all-platforms": (s) => [
    <LinkedInIcon key="li" size={s} />,
    <XIcon key="x" size={s} />,
    <InstagramIcon key="ig" size={s} />,
    <YouTubeIcon key="yt" size={s} />,
  ],
  "instagram-x-viral-amplification": (s) => [<InstagramIcon key="ig" size={s} />, <XIcon key="x" size={s} />],
  "product-hunt-launches": (s) => [<ProductHuntIcon key="ph" size={s} />],
  "founder-personal-branding": (s) => [<LinkedInIcon key="li" size={s} />, <ThreadsIcon key="th" size={s} />],
  "meme-marketing": (s) => [<InstagramIcon key="ig" size={s} />, <RedditIcon key="rd" size={s} />],
};

/** Overlapping white tiles with real platform icons. They fan out on card hover (needs a `group` parent). */
export default function ServicePlatformIcons({ slug }: { slug: string }) {
  const make = ICONS_BY_SLUG[slug];
  const icons = make ? make(30) : [<LinkedInIcon key="li" size={30} />];
  const tilts = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];

  return (
    <div className="flex items-center">
      {icons.map((icon, i) => (
        <span
          key={i}
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_10px_24px_-8px_rgba(40,20,60,0.28)] transition-all duration-300 -ml-3 first:ml-0 group-hover:ml-1 group-hover:first:ml-0 group-hover:rotate-0 ${tilts[i % tilts.length]}`}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}