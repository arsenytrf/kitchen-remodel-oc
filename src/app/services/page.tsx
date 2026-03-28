import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete kitchen remodeling services in Orange County — cabinets, countertops, tile, plumbing, electrical, flooring, drywall, permits. License #1152610.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00C0C_6MTD8XlE6P8_0CI0t2_600x450.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/60 to-stone-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-36 pb-16 lg:pt-40 lg:pb-20">
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <span>/</span>
            <span className="text-brass-400">Services</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Everything Your Kitchen Needs.
            <br />
            <span className="accent-shimmer">Under One Roof.</span>
          </h1>
          <p className="text-stone-300 text-base lg:text-lg max-w-xl mt-6 leading-relaxed">
            Nine specialized trades — design, cabinets, countertops, tile, plumbing, electrical, flooring, drywall, and permits — all managed by one licensed contractor.
          </p>
        </div>
      </section>

      {/* Services editorial grid */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug}>
                <div
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                      <div className="absolute top-4 left-4 bg-walnut-700/90 backdrop-blur-sm text-white text-xs font-heading font-bold tracking-[0.2em] px-3 py-1.5 rounded-lg">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-walnut-600 mb-2 block">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-stone-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-stone-500 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Includes list */}
                    <ul className="space-y-2 mb-6">
                      {service.includes.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-stone-600">
                          <CheckCircle className="w-4 h-4 text-walnut-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-walnut-700 hover:text-walnut-800 transition-colors duration-300 group"
                    >
                      Get a free estimate for {service.title.toLowerCase()}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax quote break */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00o0o_hBPVRKDnLm8_0CI0t2_600x450.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-stone-950/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            &ldquo;Every cut, every seam, every finish — if it&apos;s not right, we redo it. That&apos;s the standard.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-brass-300 text-sm tracking-[0.2em] uppercase not-italic font-medium">
            — Misael, License {company.license}
          </cite>
        </div>
      </section>

      <CtaBanner
        headline="Not Sure What Your Kitchen Needs?"
        description="Send us some photos or schedule a walk-through. We'll put together a plan with materials, timeline, and pricing — all in writing, before any work starts."
        primaryCta="Talk to Misael About Your Kitchen"
        primaryHref="/contact"
      />
    </>
  );
}
