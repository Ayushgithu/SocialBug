"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: ReactNode;
<<<<<<< HEAD
  variant?: "primary" | "outline" | "outlineDark" | "ghost";
=======
  variant?: "primary" | "outline" | "ghost";
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
<<<<<<< HEAD
  /** Small pill-in-pill badge rendered at the end, e.g. "⚡ 2 mins". */
  badge?: ReactNode;
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
<<<<<<< HEAD
  badge,
=======
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
<<<<<<< HEAD
    const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
=======
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
<<<<<<< HEAD
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full pl-6 pr-2.5 py-2.5 font-heading font-semibold text-sm tracking-wide transition-all duration-200 overflow-hidden active:scale-[0.96]";

  const variants = {
    primary:
      "bg-sb-orange text-sb-black hover:bg-sb-lime shadow-[0_8px_20px_-6px_rgba(252,132,46,0.5)] active:shadow-[0_0_0_8px_rgba(252,132,46,0.28)]",
    outline:
      "rounded-full border border-white/25 px-6 text-sb-white hover:border-sb-orange hover:text-sb-orange active:border-sb-orange active:shadow-[0_0_0_8px_rgba(252,132,46,0.18)]",
    outlineDark:
      "rounded-full border border-black/20 px-6 text-black bg-black/[0.02] hover:border-sb-orange hover:text-sb-orange hover:bg-sb-orange/5 active:border-sb-orange active:shadow-[0_0_0_8px_rgba(252,132,46,0.15)]",
    ghost: "rounded-full px-6 text-sb-white/80 hover:text-sb-white",
=======
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 font-heading font-semibold text-sm tracking-wide transition-colors duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-sb-white text-sb-black hover:text-sb-white",
    outline:
      "border border-white/25 text-sb-white hover:border-white/60",
    ghost: "text-sb-white/80 hover:text-sb-white",
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className="transition-transform duration-200 ease-out inline-block"
      data-cursor="pointer"
    >
<<<<<<< HEAD
      <span className={cn(base, variant !== "ghost" && "sb-btn-sheen", variants[variant], className)}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {badge && (
          <span className="relative z-10 flex items-center gap-1 rounded-full bg-sb-black/90 px-3 py-1.5 text-xs font-bold text-sb-lime">
            {badge}
          </span>
        )}
=======
      <span className={cn(base, variants[variant], className)}>
        {variant === "primary" && (
          <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-sb-pink via-sb-orange to-sb-lime transition-transform duration-400 ease-out group-hover:translate-y-0" />
        )}
        <span
          className={cn(
            "absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-sb-pink via-sb-orange to-sb-lime transition-transform duration-300 ease-out",
            variant === "primary" && "group-hover:scale-y-100"
          )}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
>>>>>>> 6b81a0d4e236a5067c50a0ddff3171c6cdad7525
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="group inline-block disabled:opacity-50">
      {content}
    </button>
  );
}
