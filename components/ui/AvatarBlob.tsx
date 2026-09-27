"use client";

import { motion } from "framer-motion";

const ACCENTS = {
  pink: ["#ef2f7a", "#ff6fa5"],
  orange: ["#fc842e", "#ffb26b"],
  lime: ["#d9f24e", "#eefb9c"],
  blue: ["#3fa9ff", "#8ecbff"],
  purple: ["#a855f7", "#d6a8ff"],
} as const;

type Accent = keyof typeof ACCENTS;

// A handful of hand-tuned organic blob paths (viewBox 0 0 200 200) so every
// avatar reads as a unique cutout shape rather than a repeated circle.
const BLOBS = [
  "M150.5 32.6c22.6 15.9 33.6 45.6 29.8 74.1-3.8 28.6-22.4 55.9-49.1 66.6-26.7 10.7-61.5 5.6-82.9-13.2C26.9 141.2 17 111 22.4 82.6c5.4-28.4 26-52.9 53-63.4 27-10.5 53.5-1.5 75.1 13.4Z",
  "M158 45c18.7 20.1 24.6 51.6 14.6 78.3-10 26.7-35.9 48.6-65.3 51.9-29.4 3.3-62.3-12.1-77.6-38.3C14.4 110.7 15 76.9 33.4 52.1 51.8 27.3 82.9 15.4 111.4 20.1 139.9 24.8 139.3 24.9 158 45Z",
  "M145.9 27.5c25.6 12.4 41.6 40.9 41.1 70.2-.5 29.3-17.5 58.6-44 71.9-26.5 13.3-62.5 10.6-84.9-8.7C35.7 141.6 25.9 110 31.8 81.3 37.7 52.6 59.5 26.8 88 19.5c28.5-7.3 32.3-4.4 57.9 8Z",
];

export default function AvatarBlob({
  initials,
  accent = "pink",
  size = 96,
  index = 0,
  className = "",
  photo,
}: {
  initials: string;
  accent?: Accent;
  size?: number;
  index?: number;
  className?: string;
  /** Optional real photo URL. When provided, it's masked into the same
   *  organic blob shape used for the initials-only version, so a real
   *  founder photo and a placeholder avatar look like one design
   *  language rather than two different components. */
  photo?: string;
}) {
  const [c1, c2] = ACCENTS[accent];
  const blob = BLOBS[index % BLOBS.length];
  const gradId = `avatarGrad-${accent}-${index}`;
  const clipId = `avatarClip-${accent}-${index}`;

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
          <filter id={`glow-${gradId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {photo && (
            <clipPath id={clipId}>
              <path d={blob} />
            </clipPath>
          )}
        </defs>

        {/* soft glow behind */}
        <path d={blob} fill={c1} opacity="0.18" filter={`url(#glow-${gradId})`} />

        {photo ? (
          <>
            {/* photo, cropped to the same blob silhouette */}
            <image
              href={photo}
              x="0"
              y="0"
              width="200"
              height="200"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${clipId})`}
            />
            {/* outline ring on top so the photo still reads as "branded" */}
            <path
              d={blob}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            {/* outline ring, matching the reference's hand-drawn cutout look */}
            <path
              d={blob}
              fill="#101010"
              stroke={`url(#${gradId})`}
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* initials */}
            <text
              x="100"
              y="112"
              textAnchor="middle"
              fontSize="52"
              fontWeight="700"
              fill={`url(#${gradId})`}
              fontFamily="var(--font-heading, sans-serif)"
            >
              {initials}
            </text>
          </>
        )}
      </svg>
    </motion.div>
  );
}
