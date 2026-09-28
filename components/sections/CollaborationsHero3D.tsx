"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MarketingOrbit3D = dynamic(() => import("@/components/three/MarketingOrbit3D"), {
  ssr: false,
});

export default function CollaborationsHero3D() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  return (
    <div className="relative mx-auto h-65 w-full max-w-lg sm:h-80">
      {isDesktop ? (
        <MarketingOrbit3D />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full bg-linear-to-br from-sb-pink via-sb-orange to-sb-lime opacity-25 blur-2xl" />
          <div className="grid grid-cols-3 gap-4">
            {["bg-sb-pink", "bg-sb-orange", "bg-sb-lime", "bg-sb-blue", "bg-sb-purple", "bg-sb-pink"].map(
              (c, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 rounded-xl ${c} opacity-80`}
                  style={{
                    animation: `float 3s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
