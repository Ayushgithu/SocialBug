"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 font-heading font-semibold text-sm tracking-wide transition-colors duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-sb-white text-sb-black hover:text-sb-white",
    outline:
      "border border-white/25 text-sb-white hover:border-white/60",
    ghost: "text-sb-white/80 hover:text-sb-white",
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
