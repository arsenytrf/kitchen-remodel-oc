"use client";

import { useRef, useEffect } from "react";

type GsapCallback = (gsap: typeof import("gsap").gsap) => void;

export function useGsapScroll<T extends HTMLElement>(callback: GsapCallback) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => callback(gsap));
      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, [callback]);

  return ref;
}
