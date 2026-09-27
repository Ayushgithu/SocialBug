"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let ringX = 0,
      ringY = 0;
    let mouseX = 0,
      mouseY = 0;
    let started = false;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        // Snap the ring straight to the pointer on the very first move so it
        // doesn't glide in from the (0,0) corner.
        ringX = mouseX;
        ringY = mouseY;
        started = true;
        setActive(true);
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor='pointer']"));
    }

    function onLeave() {
      setActive(false);
    }

    function raf() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(raf);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    const id = requestAnimationFrame(raf);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(id);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sb-lime mix-blend-difference transition-opacity duration-200"
        style={{ opacity: active ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 mix-blend-difference transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: active ? (hovering ? 0.9 : 0.5) : 0,
        }}
      />
    </>
  );
}
