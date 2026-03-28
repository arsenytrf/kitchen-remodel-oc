import Link from "next/link";
import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface CtaBannerProps {
  headline?: string;
  description?: string;
  primaryCta?: string;
  primaryHref?: string;
}

export function CtaBanner({
  headline = "Ready to Start Your Kitchen Remodel?",
  description = "Free on-site consultation. Detailed written estimate. No pressure, no gimmicks — just honest advice from a licensed contractor with 15+ years in OC kitchens.",
  primaryCta = "Schedule My Free Consultation",
  primaryHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-walnut-700 relative overflow-hidden">
      {/* Photo bg at 12% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00d0d_iLRaX4nZ7RN_0CI0t2_600x450.jpg')",
        }}
      />

      {/* Decorative oversized text */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-heading text-[16rem] lg:text-[20rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none">
        KR
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            {headline}
          </h2>
          <p className="text-walnut-100 text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="bg-white text-walnut-700 hover:bg-brass-50 px-8 py-4 rounded-lg font-bold tracking-wide text-sm uppercase transition-all duration-300 hover:shadow-lg"
            >
              {primaryCta}
            </Link>
            <a
              href={company.phoneLink}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold tracking-wide text-sm uppercase transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
          </div>

          <p className="mt-8 text-walnut-200 text-xs tracking-wide">
            Free estimates &middot; Licensed & Insured &middot; CA License{" "}
            {company.license}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
