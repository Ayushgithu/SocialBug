import { cn } from "@/lib/utils";

/**
 * Typographic cover for case studies that don't have a photo yet.
 * Fills its parent (parent must be `relative` and sized).
 */
export default function CaseCover({
  name,
  logo,
  industry,
  className,
  large = false,
}: {
  name: string;
  logo: string;
  industry: string;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-6 text-center",
        className,
      )}
      style={{
        background:
          "radial-gradient(120% 90% at 15% 0%, rgba(252,132,46,0.28), transparent 55%), radial-gradient(100% 90% at 100% 100%, rgba(239,47,122,0.26), transparent 55%), #0b0b0b",
      }}
    >
      <span
        aria-hidden
        className={cn(
          "font-display pointer-events-none absolute select-none leading-none text-white/5",
          large ? "text-[22rem]" : "text-[11rem]",
        )}
      >
        {logo}
      </span>
      <div
        className={cn(
          "font-display relative leading-[0.95]",
          large ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl",
        )}
      >
        {name}
      </div>
      <p
        className={cn(
          "font-heading relative mt-3 text-sb-white/55",
          large ? "text-sm" : "text-[11px]",
        )}
      >
        {industry}
      </p>
    </div>
  );
}
