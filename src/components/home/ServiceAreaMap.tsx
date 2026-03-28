import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ServiceAreaMap() {
  return (
    <section id="service-areas" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — map embed */}
          <ScrollReveal>
            <div className="w-full h-[400px] bg-stone-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Service area map — Orange County, CA"
              />
            </div>
          </ScrollReveal>

          {/* Right — content */}
          <ScrollReveal delay={0.15}>
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-walnut-600">
              Where We Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4">
              Kitchen Remodeling Across Orange County
            </h2>
            <p className="text-stone-500 text-base lg:text-lg leading-relaxed mb-8">
              Based in {company.address.city}, we serve homeowners throughout
              Orange County. If you can see it on this map, we can build your kitchen.
            </p>

            {/* City pills */}
            <div className="flex flex-wrap gap-2">
              {company.areasServed.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 bg-walnut-50 text-walnut-700 rounded-full border border-walnut-200 hover:bg-walnut-100 transition-colors duration-300"
                >
                  <MapPin className="w-3 h-3" />
                  {city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
