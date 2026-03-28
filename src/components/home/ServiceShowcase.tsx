import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ServiceShowcase() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          label="What We Do"
          title="Every Detail of Your Kitchen, Handled"
          subtitle="Nine specialized trades under one licensed contractor. One point of contact, one timeline, one team that owns the result."
        />

        {/* Numbered rows */}
        <div className="mt-12 divide-y divide-stone-200">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex items-center gap-6 lg:gap-10 py-6 lg:py-8 transition-colors duration-300 hover:bg-stone-50 -mx-4 px-4 rounded-lg"
              >
                <span className="font-heading text-4xl lg:text-5xl font-bold text-stone-200 group-hover:text-walnut-600 transition-colors duration-300 w-16 shrink-0 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-stone-900 w-48 lg:w-64 shrink-0">
                  {service.title}
                </h3>
                <p className="hidden md:block text-sm text-stone-500 flex-1 leading-relaxed">
                  {service.shortDescription}
                </p>
                <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-walnut-600 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
