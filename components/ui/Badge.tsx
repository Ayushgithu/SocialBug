import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-heading font-medium uppercase tracking-[0.15em] text-sb-white/80 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
