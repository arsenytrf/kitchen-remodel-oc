import { processSteps } from "@/data/company";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function ProcessTimeline() {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left header */}
          <div className="lg:col-span-4">
            <SectionHeader
              label="Our Process"
              title="Five Steps to Your New Kitchen"
              subtitle="From first phone call to final walkthrough. No guessing, no chaos — a clear path from old kitchen to new."
            />
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-stone-200" />

            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-6">
                    {/* Number node */}
                    <div className="w-10 h-10 bg-walnut-700 rounded-lg flex items-center justify-center shrink-0 relative z-10">
                      <span className="text-white text-sm font-bold font-heading">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
