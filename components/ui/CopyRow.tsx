"use client";

import { useState } from "react";
import { Copy, Check, type LucideIcon } from "lucide-react";

/** A contact line with an icon and a one-tap copy button. */
export default function CopyRow({
  icon: Icon,
  value,
  href,
}: {
  icon: LucideIcon;
  value: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      <a
        href={href}
        data-cursor="pointer"
        className="flex min-w-0 flex-1 items-center gap-2.5 text-sm text-sb-white/70 transition-colors hover:text-sb-white"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-sb-lime">
          <Icon size={14} />
        </span>
        <span className="truncate">{value}</span>
      </a>
      <button
        type="button"
        data-cursor="pointer"
        aria-label={`Copy ${value}`}
        onClick={() => {
          navigator.clipboard?.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-sb-white/50 transition-colors hover:border-sb-orange hover:text-sb-orange"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
    </div>
  );
}
