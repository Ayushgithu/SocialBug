// Simplified, colour-accurate glyphs for common platforms. These are original
// geometric redraws (not traced brand assets) but use each platform's real
// brand colour so the logo wall reads as genuine at a glance.

type IconProps = { size?: number };

export function InstagramIcon({ size = 20 }: IconProps) {
  const id = "ig-grad";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="30%" stopColor="#FF543E" />
          <stop offset="60%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#5B51D8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#${id})`} />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
    </svg>
  );
}

export function XIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#000" />
      <path
        fill="#fff"
        d="M16.5 6.5h1.9l-4.1 4.7 4.8 6.3h-3.8l-3-3.9-3.4 3.9H6.9l4.4-5-4.6-6h3.9l2.7 3.6 3.2-3.6Z"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
      <circle cx="7.5" cy="8" r="1.6" fill="#fff" />
      <rect x="6.2" y="10.5" width="2.6" height="8" fill="#fff" />
      <path
        fill="#fff"
        d="M11.3 10.5h2.5v1.3h.03c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4V18.5h-2.6v-3.5c0-.83-.02-1.9-1.16-1.9-1.16 0-1.34.9-1.34 1.84v3.56h-2.6v-8Z"
      />
    </svg>
  );
}

export function YouTubeIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="1" y="4.5" width="22" height="15" rx="4" fill="#FF0000" />
      <path d="M10 8.7v6.6l6-3.3-6-3.3Z" fill="#fff" />
    </svg>
  );
}

export function TikTokIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#000" />
      <path fill="#25F4EE" d="M14.3 5.2h2.2c.15.98.86 1.9 2.3 2.06v2.24a5.1 5.1 0 0 1-2.3-.62v4.5a4.1 4.1 0 1 1-4.1-4.1c.2 0 .4.01.6.04v2.28a1.9 1.9 0 1 0 1.3 1.8V5.2Z" />
      <path fill="#FE2C55" d="M13.7 4.7h2.2c.15.98.86 1.9 2.3 2.06v2.24a5.1 5.1 0 0 1-2.3-.62v4.5a4.1 4.1 0 1 1-4.1-4.1c.2 0 .4.01.6.04v2.28a1.9 1.9 0 1 0 1.3 1.8V4.7Z" opacity="0.7" />
    </svg>
  );
}

export function ProductHuntIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#DA552F" />
      <path
        fill="#fff"
        d="M13.2 12.9h-2.4V16H8.4V8h4.8a2.45 2.45 0 0 1 0 4.9Zm0-2.9h-2.4v1h2.4a.5.5 0 0 0 0-1Z"
      />
    </svg>
  );
}

export function SlackIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#36C5F0" d="M9 2.2a1.8 1.8 0 1 0 0 3.6H10.8V4A1.8 1.8 0 0 0 9 2.2Z" />
      <path fill="#36C5F0" d="M9 7.8H3.8a1.8 1.8 0 1 0 0 3.6H9a1.8 1.8 0 0 0 0-3.6Z" />
      <path fill="#2EB67D" d="M15 21.8a1.8 1.8 0 1 0 0-3.6h-1.8V20a1.8 1.8 0 0 0 1.8 1.8Z" />
      <path fill="#2EB67D" d="M15 16.2h5.2a1.8 1.8 0 1 0 0-3.6H15a1.8 1.8 0 0 0 0 3.6Z" />
      <path fill="#ECB22E" d="M16.2 9a1.8 1.8 0 0 0 3.6 0V3.8a1.8 1.8 0 1 0-3.6 0Z" />
      <path fill="#ECB22E" d="M10.6 9v5.2a1.8 1.8 0 1 0 3.6 0V9a1.8 1.8 0 0 0-3.6 0Z" />
      <path fill="#E01E5A" d="M7.8 15a1.8 1.8 0 0 0-3.6 0v5.2a1.8 1.8 0 1 0 3.6 0Z" />
      <path fill="#E01E5A" d="M13.4 15h-5.2a1.8 1.8 0 1 0 0 3.6h5.2a1.8 1.8 0 0 0 0-3.6Z" />
    </svg>
  );
}

export function DiscordIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="1" y="3" width="22" height="18" rx="6" fill="#5865F2" />
      <path
        fill="#fff"
        d="M16.9 8.3a10 10 0 0 0-2.4-.8l-.2.4a8 8 0 0 1 2 .9 9 9 0 0 0-8.6 0 8 8 0 0 1 2-1l-.2-.4a10 10 0 0 0-2.4.8C5.6 10.5 5.1 12.6 5.3 14.7a10 10 0 0 0 3.1 1.6l.5-.8a6 6 0 0 1-1-.5l.3-.2a7.3 7.3 0 0 0 6.7 0l.3.2a6 6 0 0 1-1 .5l.5.8a10 10 0 0 0 3.1-1.6c.3-2.5-.4-4.5-1.9-6.4ZM9.7 13.3c-.5 0-.9-.5-.9-1s.4-1 .9-1 .9.5.9 1-.4 1-.9 1Zm3.3 0c-.5 0-.9-.5-.9-1s.4-1 .9-1 .9.5.9 1-.4 1-.9 1Z"
      />
    </svg>
  );
}

export function FacebookIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#1877F2" />
      <path
        fill="#fff"
        d="M13.5 22v-7.2h2.4l.36-2.8h-2.76V10.2c0-.8.22-1.35 1.37-1.35h1.47V6.35C15.86 6.24 15 6.17 14.03 6.17c-2.03 0-3.42 1.24-3.42 3.51v1.96H8.17v2.8h2.44V22h2.89Z"
      />
    </svg>
  );
}

export function RedditIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#FF4500" />
      <circle cx="9" cy="14" r="1.3" fill="#fff" />
      <circle cx="15" cy="14" r="1.3" fill="#fff" />
      <path d="M8.5 16.8c1 .8 2.2 1 3.5 1s2.5-.2 3.5-1" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="12.5" r="5" fill="none" stroke="#fff" strokeWidth="1.2" />
      <circle cx="17" cy="8.5" r="1.3" fill="#fff" />
      <path d="M12 7.5 12.8 4l2.6.7" fill="none" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

export function PinterestIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#E60023" />
      <path
        fill="#fff"
        d="M12.3 6.3c-3.2 0-4.9 2.15-4.9 4.5 0 1.1.6 2.45 1.55 2.9.15.07.23.04.26-.1l.22-.85c.03-.11.02-.15-.06-.25a2.8 2.8 0 0 1-.56-1.6c0-2.06 1.56-3.9 4.06-3.9 2.2 0 3.42 1.35 3.42 3.15 0 2.37-1.05 4.37-2.6 4.37-.86 0-1.5-.7-1.3-1.57.25-1.04.73-2.16.73-2.91 0-.67-.36-1.23-1.1-1.23-.88 0-1.58.9-1.58 2.11 0 .77.26 1.29.26 1.29l-1.06 4.47c-.31 1.32-.05 2.94-.02 3.1.02.1.14.12.2.05.08-.1 1.1-1.37 1.45-2.65l.55-2.1c.29.55.98.99 1.87.99 2.46 0 4.13-2.24 4.13-5.24 0-2.3-1.95-4.5-4.83-4.5Z"
      />
    </svg>
  );
}

export function TwitchIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#9146FF" />
      <path fill="#fff" d="M8 6.5h9v6.4l-2.5 2.5h-2.6l-1.6 1.6H8.9v-1.6H6.5V8Zm1.2 1.2v6.4h1.9v1.6l1.6-1.6h2.8l1.7-1.7V7.7H9.2Z" />
      <rect x="11" y="9" width="1.1" height="3" fill="#fff" />
      <rect x="13.6" y="9" width="1.1" height="3" fill="#fff" />
    </svg>
  );
}

export function SpotifyIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#1DB954" />
      <path d="M7 10.2c2.9-.8 6-.7 8.6.7" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7.6 13c2.4-.6 5-.5 7.1.6" fill="none" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M8.2 15.7c2-.4 4.1-.4 5.8.5" fill="none" stroke="#fff" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export function TelegramIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#229ED9" />
      <path fill="#fff" d="m6.5 12 11-4.3c.5-.2.95.13.77.9l-1.9 8.9c-.14.62-.5.77-1 .48l-2.8-2.06-1.35 1.3c-.15.15-.28.28-.56.28l.2-2.86 5.2-4.7c.23-.2-.05-.32-.35-.12l-6.43 4.05-2.77-.86c-.6-.19-.6-.6.13-.9Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        fill="#fff"
        d="M12 6.5a5.4 5.4 0 0 0-4.6 8.2l-.7 2.8 2.85-.75A5.4 5.4 0 1 0 12 6.5Zm3.15 7.7c-.13.37-.76.7-1.05.74-.27.04-.6.06-.97-.06a8 8 0 0 1-3.8-2.35c-.7-.75-1.17-1.68-1.3-1.96-.14-.28-.02-.43.1-.57.11-.13.26-.3.38-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.4-.82-1.92-.22-.5-.44-.44-.6-.44h-.51a1 1 0 0 0-.72.34c-.25.27-.94.9-.94 2.2s.96 2.55 1.1 2.73c.13.17 1.87 2.85 4.53 3.88.63.27 1.13.44 1.51.56.64.2 1.22.17 1.68.1.51-.07 1.57-.64 1.79-1.26.22-.62.22-1.15.16-1.26-.06-.11-.24-.18-.5-.31Z"
      />
    </svg>
  );
}

export function SnapchatIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#FFFC00" />
      <path
        fill="#000"
        d="M12 6.2c-2 0-3.2 1.5-3.2 3.3 0 .5.03.95.08 1.3-.4.15-.98.3-1.28.3-.35 0-.5.44-.2.72.24.22.9.6 1.5.85-.1.4-.5 1.3-1.5 1.9-.2.12-.15.5.15.55.4.07.75.2.85.44.08.2 0 .4-.1.55-.13.2.02.42.28.4.4-.02.85-.02 1.2.16.35.18.6.62 1.6.62s1.25-.44 1.6-.62c.35-.18.8-.18 1.2-.16.26.02.4-.2.28-.4-.1-.15-.18-.35-.1-.55.1-.24.45-.37.85-.44.3-.05.35-.43.15-.55-1-.6-1.4-1.5-1.5-1.9.6-.25 1.26-.63 1.5-.85.3-.28.15-.72-.2-.72-.3 0-.88-.15-1.28-.3.05-.35.08-.8.08-1.3 0-1.8-1.2-3.3-3.2-3.3Z"
      />
    </svg>
  );
}

export function GitHubIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path
        fill="#161614"
        d="M12 5a7 7 0 0 0-2.2 13.65c.35.06.48-.15.48-.34v-1.3c-1.95.42-2.36-.84-2.36-.84-.32-.8-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.08.72 1.08.72.62 1.07 1.64.76 2.04.58.06-.45.25-.76.44-.94-1.56-.18-3.2-.78-3.2-3.47 0-.77.28-1.4.72-1.9-.07-.18-.31-.9.07-1.87 0 0 .6-.19 1.95.72a6.8 6.8 0 0 1 3.55 0c1.35-.91 1.94-.72 1.94-.72.4.97.15 1.69.08 1.87.45.5.72 1.13.72 1.9 0 2.7-1.65 3.29-3.22 3.46.26.22.48.65.48 1.32v1.96c0 .19.13.4.49.34A7 7 0 0 0 12 5Z"
      />
    </svg>
  );
}

export function BehanceIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1769FF" />
      <path
        fill="#fff"
        d="M5.5 8h3.3c1.6 0 2.5.7 2.5 1.95 0 .75-.35 1.25-1 1.55.85.25 1.35.9 1.35 1.85 0 1.4-1.1 2.15-2.8 2.15H5.5V8Zm3 2.9c.65 0 1-.3 1-.8s-.35-.75-1-.75H7.3v1.55h1.2Zm.15 3c.7 0 1.1-.32 1.1-.87 0-.55-.4-.85-1.1-.85H7.3v1.72h1.35ZM16.4 9h2.6v.85h-2.6V9Zm-1.5 3.15c0-2.05 1.4-3.35 3.25-3.35 2 0 3.15 1.4 3.15 3.35v.4h-4.6c.1.85.62 1.35 1.45 1.35.6 0 1.02-.2 1.3-.62h1.75c-.4 1.15-1.5 1.87-3.05 1.87-1.95 0-3.25-1.3-3.25-3Zm1.82-.7h2.85c-.12-.75-.62-1.2-1.4-1.2-.75 0-1.28.42-1.45 1.2Z"
      />
    </svg>
  );
}

export function DribbbleIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#EA4C89" />
      <path
        fill="#fff"
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm5.3 3.7a6.5 6.5 0 0 1 1.4 3.9 15 15 0 0 0-4.2-.2c-.15-.35-.3-.7-.47-1.05a12 12 0 0 0 3.27-2.65ZM12 5.6c1.35 0 2.6.45 3.6 1.2a10.5 10.5 0 0 1-3 2.45A22 22 0 0 0 9.9 6.1c.66-.3 1.37-.5 2.1-.5Zm-3.5 1.15a20 20 0 0 1 2.68 3.05c-2.4.6-4.5.55-4.9.53a6.5 6.5 0 0 1 2.22-3.58Zm-2.34 5.1 5.35-.02c.15.32.3.65.44.98a12 12 0 0 0-4.9 3.24 6.45 6.45 0 0 1-.89-4.2Zm1.85 5.5A10.7 10.7 0 0 1 12.7 14c.5 1.36.9 2.75 1.13 4.13a6.5 6.5 0 0 1-6.82-1.78Zm8.16 1.06a19 19 0 0 0-1.04-3.7c1.2-.19 2.5-.1 3.75.17a6.55 6.55 0 0 1-2.71 3.53Z"
      />
    </svg>
  );
}

export function MediumIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <ellipse cx="8.3" cy="12" rx="3.3" ry="4.5" fill="#000" />
      <ellipse cx="14.2" cy="12" rx="1.5" ry="4.5" fill="#000" />
      <ellipse cx="17.6" cy="12" rx="0.55" ry="4.5" fill="#000" />
    </svg>
  );
}

export function SubstackIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF6719" />
      <rect x="6" y="6" width="12" height="1.8" fill="#fff" />
      <rect x="6" y="9.5" width="12" height="1.8" fill="#fff" />
      <path d="M6 13.2h12L12 19.5l-6-6.3Z" fill="#fff" />
    </svg>
  );
}

export function ThreadsIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path
        fill="#fff"
        d="M12.2 6.3c-2.9 0-4.8 1.5-5 4l1.85.15c.15-1.5 1.15-2.4 3.05-2.4 1.7 0 2.6.8 2.6 1.9 0 .8-.4 1.3-1.5 1.5l-1.5.25c-2.5.42-3.85 1.5-3.85 3.35 0 1.9 1.55 3.1 3.9 3.1 1.9 0 3.2-.75 3.85-2 .15.5.4.95.75 1.3l1.5-1.1a3.6 3.6 0 0 1-.75-2.35v-1.5c0-2.9-1.7-4.9-4.9-5.2Zm.9 7.9c-.3.9-1.15 1.5-2.4 1.5-1.1 0-1.75-.5-1.75-1.25 0-.75.6-1.15 1.9-1.4l1.1-.2c.5-.1.9-.22 1.15-.4v.5c0 .5 0 .95 0 1.25Z"
      />
    </svg>
  );
}

export function GoogleIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path fill="#4285F4" d="M17.6 12.2c0-.6-.05-1.1-.15-1.6H12v3h3.15a2.7 2.7 0 0 1-1.17 1.8v1.5h1.9c1.1-1 1.72-2.5 1.72-4.3Z" />
      <path fill="#34A853" d="M12 18c1.6 0 2.9-.5 3.9-1.4l-1.9-1.5c-.53.35-1.2.56-2 .56-1.55 0-2.85-1.05-3.32-2.45H6.7v1.55A6 6 0 0 0 12 18Z" />
      <path fill="#FBBC05" d="M8.68 13.2a3.6 3.6 0 0 1 0-2.3V9.35H6.7a6 6 0 0 0 0 5.4Z" />
      <path fill="#EA4335" d="M12 8.05c.87 0 1.65.3 2.27.88l1.7-1.7A6 6 0 0 0 6.7 9.35l1.98 1.55C9.15 9.1 10.45 8.05 12 8.05Z" />
    </svg>
  );
}

export function FigmaIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#F24E1E" d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5Z" />
      <path fill="#FF7262" d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2Z" />
      <path fill="#A259FF" d="M16 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
      <path fill="#1ABCFE" d="M8 12h4v5a2.5 2.5 0 1 1-4 0v-5Z" />
      <path fill="#0ACF83" d="M8 17a2.5 2.5 0 1 1 4 0v0a2.5 2.5 0 1 1-4 0Z" />
    </svg>
  );
}

export function NotionIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#fff" />
      <path
        fill="#000"
        d="M6.5 6.2 15 5.6c1-.08 1.3.5.6 1L14 8v10.3c-.6.5-1.1.4-1.75-.05L6.9 14V7.2c-.5-.5-.55-.9-.4-1Zm1.4 1.1v6.4l4.9 3.1V9.6L7.9 7.3Z"
      />
    </svg>
  );
}

export function GenericPlatformIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
