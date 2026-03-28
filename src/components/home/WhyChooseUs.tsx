import { Shield, UserCheck, Wrench, ClipboardCheck, DollarSign, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/data/company";

const reasons = [
  {
    icon: Shield,
    title: "State Licensed",
    description: `CA License ${company.license}. General contractor license — not a handyman card. We pull permits, pass inspections, and protect your investment.`,
  },
  {
    icon: UserCheck,
    title: "One Contractor, Start to Finish",
    description: "No juggling five subcontractors. Misael manages every trade — cabinets, counters, plumbing, electrical, tile, paint — one point of contact.",
  },
  {
    icon: Wrench,
    title: "15+ Years in OC Kitchens",
    description: "Not a general handyman who does kitchens on the side. Kitchen remodeling is all we do, and we've done hundreds across Orange County.",
  },
  {
    icon: ClipboardCheck,
    title: "Permits & Inspections Included",
    description: "We handle all permit applications, plan submissions, and city inspections. You never have to visit the building department.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing, No Surprises",
    description: "Detailed written estimates before we start. Material costs, labor, timeline — all in writing. Change orders documented and approved by you.",
  },
  {
    icon: Clock,
    title: "Clean Site, Every Day",
    description: "Your home isn't a construction zone to us. We clean up daily, protect your floors and furniture, and keep disruption to your family minimal.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-stone-950 relative overflow-hidden">
      {/* Photo bg at 12% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.craigslist.org/00Q0Q_f5bfBDFrTyI_0CI0t2_600x450.jpg')",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-brass-400">
            Why Homeowners Choose Misael
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Not the cheapest. Not the fastest.
            <br />
            <span className="accent-shimmer">The one you won&apos;t regret hiring.</span>
          </h2>
        </ScrollReveal>

        {/* Bento grid — mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isWide = i === 0 || i === 5;
            return (
              <ScrollReveal
                key={i}
                delay={i * 0.08}
                className={isWide ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm rounded-xl p-6 lg:p-8 h-full hover:bg-white/[0.06] transition-colors duration-300">
                  <div className="w-12 h-12 bg-walnut-700/20 border border-walnut-700/30 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brass-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
