"use client";

import { cn } from "@/lib/utils";

export default function GradientBlobs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      <style jsx>{`
        .blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.35;
          mix-blend-mode: screen;
        }
        .blob-a {
          width: 42vw;
          height: 42vw;
          background: radial-gradient(circle, var(--sb-pink), transparent 70%);
          top: -10%;
          left: -10%;
          animation: float1 18s ease-in-out infinite;
        }
        .blob-b {
          width: 38vw;
          height: 38vw;
          background: radial-gradient(circle, var(--sb-blue), transparent 70%);
          bottom: -15%;
          right: -10%;
          animation: float2 22s ease-in-out infinite;
        }
        .blob-c {
          width: 30vw;
          height: 30vw;
          background: radial-gradient(circle, var(--sb-lime), transparent 70%);
          top: 40%;
          left: 45%;
          animation: float3 26s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8vw, 6vw) scale(1.15); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-6vw, -8vw) scale(1.1); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-40%, -55%) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
