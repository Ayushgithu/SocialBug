"use client";

import { useState } from "react";
import { Copy, Check, type LucideIcon } from "lucide-react";

/**
 * A contact line with an icon and a one-tap copy button.
 * - `href` is optional: without it the value is shown as plain text.
 * - `label` is optional: shown before the value (e.g. "GSTIN") and NOT copied,
 *   only `value` is copied.
 */
export default function CopyRow({
  icon: Icon,
  value,
  href,
  label,
}: {
  icon: LucideIcon;
  value: string;
  href?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-sb-lime">
        <Icon size={14} />
      </span>
      <span className="truncate">
        {label && <span className="mr-1.5 text-sb-white/40">{label}:</span>}
        {value}
      </span>
    </>
  );

  const rowClass =
    "flex min-w-0 flex-1 items-center gap-2.5 text-sm text-sb-white/70 transition-colors hover:text-sb-white";

  return (
    <div className="flex items-center gap-2.5">
      {href ? (
        <a href={href} data-cursor="pointer" className={rowClass}>
          {content}
        </a>
      ) : (
        <div className={rowClass}>{content}</div>
      )}
      <button
        type="button"
        data-cursor="pointer"
        aria-label={`Copy ${label ? label + " " : ""}${value}`}
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