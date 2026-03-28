import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Hammer, Users, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CountUp } from "@/components/shared/CountUp";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Misael — state-licensed general contractor with 15+ years remodeling kitchens across Orange County, CA. License #1152610.",
};

const values = [
  {
    icon: Shield,
    title: "Licensed & Accountable",
    description: `CA License ${company.license}. Not a handyman card — a full general contractor license. We pull permits, carry insurance, and stand behind every project.`,
  },
  {
    icon: Hammer,
    title: "Craftsmanship First",
    description:
      "Every cabinet is level. Every tile line is straight. Every countertop seam is invisible. We don't cut corners — literally or figuratively.",
  },
  {
    icon: Users,
    title: "One Team, One Contact",
    description:
      "You deal with Misael directly — not a sales rep, not a rotating crew. Same contractor from first walk-through to final inspection.",
  },
  {
    icon: Award,
    title: "No Surprises",
    description:
      "Written estimate before we start. Documented change orders. Daily cleanup. You know exactly what's happening and what it costs, always.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00k0k_gArRTQwIiZn_0t20CI_600x450.jpg')",
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
            <span className="text-brass-400">About</span>
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            15 Years Building
            <br />
            <span className="text-stroke-white">OC Kitchens.</span>
          </h1>
          <p className="text-stone-300 text-base lg:text-lg max-w-xl mt-6 leading-relaxed">
            One contractor. One license. Hundreds of kitchens across Orange County.
          </p>
        </div>
      </section>

      {/* Story split */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.craigslist.org/00909_iY7Ek54de8w_0CI0t2_600x450.jpg"
                    alt="Kitchen renovation project by Misael in Orange County"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
                {/* Floating credential badge */}
                <div className="absolute -bottom-4 -right-4 bg-walnut-700 text-white px-5 py-3 rounded-xl shadow-lg">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-walnut-200">
                    Licensed Since
                  </p>
                  <p className="font-heading text-2xl font-bold">{company.founded}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="lg:col-span-6 lg:col-start-7">
              <ScrollReveal>
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-walnut-600">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-6">
                  Started with a Toolbelt.
                  <br />
                  <span className="text-walnut-700">Built a Reputation.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-stone-500 text-base leading-relaxed mb-4">
                  Misael started in construction as a teenager, learning the trades from the ground up — framing, plumbing, electrical, finish carpentry. After years working for other contractors, he got his own general contractor license and focused on the one room homeowners care about most: the kitchen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-stone-500 text-base leading-relaxed mb-6">
                  That was over 15 years ago. Since then, he&apos;s remodeled hundreds of kitchens across Orange County — from modest condo updates in Santa Ana to full teardown-and-rebuild projects in Newport Beach. Every project gets the same attention to detail, because every client deserves work they can be proud of.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <blockquote className="border-l-4 border-brass-500 pl-5 py-2 mb-6">
                  <p className="text-stone-700 text-lg font-heading italic leading-relaxed">
                    &ldquo;I don&apos;t hire sales reps. When you call, you talk to me. When the work starts, I&apos;m there. That&apos;s how I&apos;ve always done it.&rdquo;
                  </p>
                  <cite className="text-sm text-walnut-600 not-italic font-semibold mt-2 block">
                    — Misael
                  </cite>
                </blockquote>
              </ScrollReveal>

              {/* Inline stats */}
              <ScrollReveal delay={0.25}>
                <div className="flex flex-wrap gap-8 pt-4 border-t border-stone-200">
                  <div>
                    <p className="font-heading text-3xl font-bold text-walnut-700">
                      <CountUp target={500} suffix="+" />
                    </p>
                    <p className="text-xs text-stone-400 tracking-wide uppercase">
                      Kitchens
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-walnut-700">
                      <CountUp target={15} suffix="+" />
                    </p>
                    <p className="text-xs text-stone-400 tracking-wide uppercase">
                      Years
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-walnut-700">
                      <CountUp target={12} />
                    </p>
                    <p className="text-xs text-stone-400 tracking-wide uppercase">
                      OC Cities
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 lg:py-32 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-walnut-600">
              How We Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
              Four Things That Never Change
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white border border-stone-200 rounded-xl p-6 lg:p-8 h-full hover:border-walnut-300 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-walnut-50 border border-walnut-200 rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-walnut-700" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-stone-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax break */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00P0P_kkhpoIV3OM7_0CI0t2_600x450.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-stone-950/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            &ldquo;The kitchen is where your family starts and ends every day. It should be the best room in the house.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-brass-300 text-sm tracking-[0.2em] uppercase not-italic font-medium">
            — Misael, {company.experience}+ Years in Orange County
          </cite>
        </div>
      </section>

      {/* Service area */}
      <section id="service-areas" className="py-20 md:py-28 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="w-full h-[400px] bg-stone-100 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={company.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Service area"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 text-walnut-600">
                Service Area
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
                We Cover All of Orange County
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                Based in {company.address.city}, we drive to every corner of OC for kitchen projects. No travel charges, no distance limits within the county.
              </p>
              <div className="flex flex-wrap gap-2">
                {company.areasServed.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 bg-walnut-50 text-walnut-700 rounded-full border border-walnut-200"
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

      <CtaBanner
        headline="Want to See If We're the Right Fit?"
        description="No pitch, no pressure. Just a conversation about your kitchen, what's possible, and what it'll cost. Call or fill out the form."
        primaryCta="Let's Talk About Your Kitchen"
        primaryHref="/contact"
      />
    </>
  );
}
