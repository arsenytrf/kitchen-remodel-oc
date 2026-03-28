"use client";

import { useRef, useEffect } from "react";

export function ParallaxBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current || !imageRef.current) return;

      const ctx = gsap.context(() => {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={containerRef}
      className="parallax-container h-[50vh] lg:h-[60vh] flex items-center justify-center"
    >
      <div
        ref={imageRef}
        className="parallax-image bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00v0v_4nvJT3hOFv_0CI0t2_600x450.jpg')",
        }}
      />
      {/* Overlay — max 50% for visible photo */}
      <div className="absolute inset-0 bg-stone-950/50" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          &ldquo;A kitchen remodel isn&apos;t a cost — it&apos;s the room your family
          comes back to every single day.&rdquo;
        </blockquote>
        <cite className="block mt-6 text-brass-300 text-sm tracking-[0.2em] uppercase not-italic font-medium">
          — Misael, Founder
        </cite>
      </div>
    </section>
  );
}
