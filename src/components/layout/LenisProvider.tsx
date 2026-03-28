"use client";

import { useEffect, type ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: import("lenis").default | undefined;

    (async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
