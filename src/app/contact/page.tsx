import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, CalendarCheck, Hammer, Shield, FileCheck, Phone } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free kitchen remodel estimate in Orange County. Call (657) 333-7848 or fill out our form. Licensed general contractor #1152610.",
};

const nextSteps = [
  {
    icon: ClipboardList,
    title: "We Review Your Request",
    description: "Within a few hours, we'll look at your project details and prepare for a conversation.",
  },
  {
    icon: CalendarCheck,
    title: "Free On-Site Walk-Through",
    description: "We schedule a time to visit your home, measure the kitchen, and discuss materials, layout, and budget.",
  },
  {
    icon: Hammer,
    title: "Detailed Written Estimate",
    description: "You get a line-item estimate with materials, labor, timeline, and permit costs — all in writing before any work starts.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00d0d_iLRaX4nZ7RN_0CI0t2_600x450.jpg')",
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
            <span className="text-brass-400">Contact</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Get Your Free
            <br />
            <span className="accent-shimmer">Kitchen Estimate.</span>
          </h1>
          <p className="text-stone-300 text-base lg:text-lg max-w-xl mt-6 leading-relaxed">
            Tell us what your kitchen needs. We&apos;ll come out, measure, and give you a written estimate — free, no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <QuoteForm />
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 md:py-28 lg:py-32 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-walnut-600">
              What Happens Next
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Three Steps to Your New Kitchen
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-walnut-50 border border-walnut-200 rounded-xl flex items-center justify-center mx-auto mb-5 relative">
                      <Icon className="w-6 h-6 text-walnut-700" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-walnut-700 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust section — editorial layout */}
      <section className="py-20 md:py-28 lg:py-32 bg-stone-950 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00o0o_hBPVRKDnLm8_0CI0t2_600x450.jpg')",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8">
              Still Have Questions? Just Call.
            </h2>
            <p className="text-stone-400 text-base lg:text-lg leading-relaxed mb-10">
              No phone tree. No receptionist. Misael answers directly. Ask about materials, timelines, budgets, permits — whatever you need to know.
            </p>

            <a
              href={company.phoneLink}
              className="inline-flex items-center gap-3 bg-brass-600 hover:bg-brass-700 text-white px-8 py-4 rounded-xl font-bold tracking-wide text-lg transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {company.phone}
            </a>

            <div className="flex items-center justify-center gap-6 mt-8 text-stone-500 text-xs">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brass-500" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-brass-500" />
                CA License {company.license}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
