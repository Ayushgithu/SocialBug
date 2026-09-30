import Image from "next/image";

const badges = [
  {
    label: "Google trust badge",
    src: "https://res.cloudinary.com/q00g4kki/image/upload/f_png/v1790751764/google.svg",
    width: 213,
  },
  {
    label: "Best Execution Team trust badge",
    src: "https://res.cloudinary.com/q00g4kki/image/upload/f_png/v1790751763/bestExecutionTeam.svg",
    width: 222,
  },
];

export default function TrustBadges() {
  return (
    <div
      className={`  rounded-xl border border-sb-orange/25 px-6 py-7 sm:px-12 sm:py-9`}
      style={{
        background:
          "radial-gradient(120% 160% at 0% 0%, rgba(252,132,46,0.16), transparent 60%), radial-gradient(120% 160% at 100% 100%, rgba(242,97,31,0.14), transparent 60%), #141210",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.05]" />
      <div className=" flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between sm:gap-8">
        <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-sb-white/45 sm:text-left">
          Trusted &amp; recognised
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-5 min-[420px]:flex-row min-[420px]:gap-6 sm:w-auto sm:gap-8">
          {badges?.map((badge) => (
            <Image
              key={badge.label}
              src={badge.src}
              alt={badge.label}
              width={badge.width}
              height={60}
              sizes="(max-width: 639px) 213px, 222px"
              className="h-auto w-full max-w-53.25 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
