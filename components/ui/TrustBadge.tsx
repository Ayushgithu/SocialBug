import { Star } from "lucide-react";

/**
 * Award badge matching the reference: filled gold laurel wreaths either
 * side, a row of stars on top, plain label underneath, no rating number.
 */
export default function TrustBadge({
  label,
  filledStars = 4.5,
}: {
  label: string;
  filledStars?: number;
}) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2.5">
      <Laurel />
      <div className="flex flex-col items-center gap-2 px-1">
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => {
            const fill =
              i + 1 <= filledStars ? 1 : i < filledStars ? filledStars - i : 0;
            return (
              <span key={i} className="relative inline-block h-3.75 w-3.75">
                <Star size={15} className="absolute inset-0 text-[#caa227]" strokeWidth={1.5} />
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fill * 100}%` }}
                >
                  <Star size={15} className="fill-[#f4b83c] text-[#caa227]" strokeWidth={1.5} />
                </span>
              </span>
            );
          })}
        </span>
        <span className="font-heading text-sm font-semibold text-sb-white/80 sm:text-base">
          {label}
        </span>
      </div>
      <Laurel flip />
    </div>
  );
}

function Laurel({ flip = false }: { flip?: boolean }) {
  const leaves = Array.from({ length: 8 }).map((_, i) => {
    const t = i / 7;
    const y = 4 + t * 52;
    const bend = Math.sin(t * Math.PI) * 13;
    const x = 22 - bend;
    const angle = -55 + t * 78;
    const scale = 0.72 + Math.sin(t * Math.PI) * 0.4;
    return { x, y, angle, scale, key: i };
  });

  return (
    <svg
      width="26"
      height="60"
      viewBox="0 0 26 60"
      fill="none"
      className={flip ? "-scale-x-100" : ""}
    >
      {/* stem */}
      <path
        d="M21 4C11 9 6 20 6 30c0 10 5 21 15 26"
        stroke="#f4b83c"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {leaves.map((l) => (
        <ellipse
          key={l.key}
          cx={l.x}
          cy={l.y}
          rx={5.2 * l.scale}
          ry={2.6 * l.scale}
          transform={`rotate(${angleFor(l)} ${l.x} ${l.y})`}
          fill="#f4b83c"
        />
      ))}
    </svg>
  );

  function angleFor(l: { angle: number }) {
    return l.angle;
  }
}
