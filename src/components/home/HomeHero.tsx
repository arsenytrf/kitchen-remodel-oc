"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Shield,
  Star,
  FileCheck,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function HomeHero() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_honey")) return;
    setStatus("loading");

    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const projectType = data.get("projectType") || "";
    const timeline = data.get("timeline") || "";
    const details = data.get("details") || "";

    const subject = encodeURIComponent(
      `Kitchen Remodel Estimate Request from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject Type: ${projectType}\nTimeline: ${timeline}\n\nDetails:\n${details}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 500);
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-sm text-white placeholder:text-stone-500 focus:border-brass-500 focus:outline-none transition-colors duration-300";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.craigslist.org/00101_3hRoz1Xocf4_0CI0t2_600x450.jpg')",
          }}
        />
        {/* Overlays — max 50% so photo is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/60 to-stone-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-36 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            {/* Label badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-brass-400 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-medium">
                License {company.license} &middot; {company.experience} Years in OC
              </span>
            </div>

            {/* Split headline */}
            <h1 className="font-heading font-bold tracking-tight mb-6">
              <span className="block text-stroke-white text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95]">
                YOUR KITCHEN.
              </span>
              <span className="block accent-shimmer-animate text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] mt-2">
                BUILT RIGHT.
              </span>
            </h1>

            <p className="text-stone-300 text-base lg:text-lg max-w-lg mb-8 leading-relaxed">
              From worn-out cabinets to a kitchen you actually want to cook in.
              State-licensed general contractor serving Orange County for 15+ years.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={company.phoneLink}
                className="inline-flex items-center gap-2 bg-brass-600 hover:bg-brass-700 text-white px-6 py-3.5 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now — {company.phone}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/25 text-white hover:bg-white/10 hover:border-white/40 px-6 py-3.5 rounded-lg font-medium text-sm tracking-wide uppercase transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-white/70 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brass-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-brass-400" />
                <span>CA {company.license}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-brass-400" />
                <span>{company.experience}+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6 w-full">
            {status === "success" ? (
              <div className="bg-stone-900/80 backdrop-blur-md border border-white/10 rounded-xl p-8 lg:p-10 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-white font-bold">
                  REQUEST RECEIVED
                </h3>
                <p className="text-stone-400 mt-2">
                  We&apos;ll reach out within a few hours to schedule your free consultation.
                </p>
                <a
                  href={company.phoneLink}
                  className="inline-flex items-center gap-2 mt-4 text-brass-400 hover:text-brass-300 text-sm font-semibold transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Or call now: {company.phone}
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-stone-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 lg:p-8 space-y-4 relative"
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-px bg-brass-500 rounded-tl-xl" />
                  <div className="absolute top-0 left-0 h-full w-px bg-brass-500 rounded-tl-xl" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-px bg-brass-500 rounded-tr-xl" />
                  <div className="absolute top-0 right-0 h-full w-px bg-brass-500 rounded-tr-xl" />
                </div>

                <h3 className="font-heading text-xl font-bold tracking-wide text-white">
                  GET YOUR FREE ESTIMATE
                </h3>
                <p className="text-stone-400 text-sm">
                  Tell us about your kitchen project. Free consultation, no obligation.
                </p>

                {/* Industry-specific fields first */}
                <select
                  name="projectType"
                  required
                  className={`${inputClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-stone-900">
                    What type of project?
                  </option>
                  <option value="Full Kitchen Remodel" className="bg-stone-900">
                    Full Kitchen Remodel
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title} className="bg-stone-900">
                      {s.title}
                    </option>
                  ))}
                </select>

                <select
                  name="timeline"
                  required
                  className={`${inputClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-stone-900">
                    When do you want to start?
                  </option>
                  <option value="ASAP" className="bg-stone-900">ASAP</option>
                  <option value="Within a month" className="bg-stone-900">
                    Within a month
                  </option>
                  <option value="1-3 months" className="bg-stone-900">
                    1-3 months
                  </option>
                  <option value="Just getting quotes" className="bg-stone-900">
                    Just getting quotes
                  </option>
                </select>

                {/* Standard contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className={inputClass}
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className={inputClass}
                />

                <textarea
                  name="details"
                  placeholder="Tell us about your kitchen — what needs to change?"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                {/* Honeypot */}
                <input
                  name="_honey"
                  type="text"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-walnut-700 hover:bg-walnut-800 text-white py-3.5 rounded-lg font-bold tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === "loading"
                    ? "Sending..."
                    : "Request My Free Estimate"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center" role="alert">
                    Something went wrong.{" "}
                    <a href={company.phoneLink} className="underline">
                      Call us directly
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
