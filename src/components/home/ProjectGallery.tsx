"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/company";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ProjectGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1
    );
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 lg:py-32 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            label="Our Work"
            title="Kitchens We've Built in Orange County"
            subtitle="Every project is a real kitchen in a real Orange County home. No stock photos, no renders — just finished work."
            align="center"
          />

          {/* Asymmetric bento grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {galleryImages.map((img, i) => {
              const isLarge = i === 0 || i === 5;
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.05}
                  className={`${
                    isLarge ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <button
                    onClick={() => openLightbox(i)}
                    className="group relative w-full overflow-hidden rounded-lg cursor-pointer"
                    style={{ aspectRatio: isLarge ? "4/3" : "1/1" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes={isLarge ? "50vw" : "25vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-brass-300 font-medium">
                        {img.category}
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={900}
              className="object-contain w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white text-sm font-medium">
                {galleryImages[lightboxIndex].alt}
              </p>
              <p className="text-white/60 text-xs mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
