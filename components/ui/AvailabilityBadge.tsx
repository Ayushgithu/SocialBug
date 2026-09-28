export default function AvailabilityBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2 font-heading text-sm font-medium text-emerald-400 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      Accepting new brand partnerships
    </div>
  );
}