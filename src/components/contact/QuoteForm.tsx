"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function QuoteForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("_honey")) return;
    setStatus("loading");

    const firstName = data.get("firstName") || "";
    const lastName = data.get("lastName") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const serviceType = data.get("serviceType") || "";
    const preferredDate = data.get("preferredDate") || "";
    const kitchenSize = data.get("kitchenSize") || "";
    const details = data.get("details") || "";

    const subject = encodeURIComponent(
      `Kitchen Remodel Estimate — ${firstName} ${lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nService: ${serviceType}\nPreferred Start Date: ${preferredDate}\nKitchen Size: ${kitchenSize}\n\nProject Details:\n${details}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 500);
  }

  const inputClass =
    "w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:border-walnut-500 focus:outline-none focus:ring-1 focus:ring-walnut-500/20 transition-all duration-300";

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-stone-900 mb-2">
          Request Received
        </h3>
        <p className="text-stone-500 mb-6">
          We&apos;ll review your project and reach out within a few hours to schedule your free consultation.
        </p>
        <a
          href={company.phoneLink}
          className="inline-flex items-center gap-2 bg-walnut-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-walnut-800 transition-colors duration-300"
        >
          <Phone className="w-4 h-4" />
          Or call now: {company.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Sidebar */}
      <div className="lg:col-span-4">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-stone-900 mb-6">
            Contact Info
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: company.phone,
                href: company.phoneLink,
              },
              {
                icon: Mail,
                label: "Email",
                value: company.email,
                href: `mailto:${company.email}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: `${company.address.city}, ${company.address.region}`,
              },
              { icon: Clock, label: "Hours", value: company.hours },
              {
                icon: Shield,
                label: "License",
                value: `CA ${company.license}`,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const Content = (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-walnut-50 border border-walnut-200 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-walnut-700" />
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-stone-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if ("href" in item && item.href) {
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="block hover:bg-stone-50 rounded-lg p-2 -mx-2 transition-colors duration-300"
                  >
                    {Content}
                  </a>
                );
              }

              return (
                <div key={i} className="p-2 -mx-2">
                  {Content}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="w-full h-48 bg-stone-100 rounded-xl overflow-hidden">
            <iframe
              src={company.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location map"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Form */}
      <div className="lg:col-span-8">
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Project type + timeline — industry fields first */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                  Project Type *
                </label>
                <select
                  name="serviceType"
                  required
                  className={`${inputClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Full Kitchen Remodel">
                    Full Kitchen Remodel
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                  Preferred Start Date
                </label>
                <input
                  name="preferredDate"
                  type="date"
                  className={`${inputClass} min-h-[46px] [-webkit-appearance:none]`}
                />
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                  First Name *
                </label>
                <input
                  name="firstName"
                  required
                  className={inputClass}
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                  Last Name *
                </label>
                <input
                  name="lastName"
                  required
                  className={inputClass}
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Phone + email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className={inputClass}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Kitchen size */}
            <div>
              <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                Kitchen Size
              </label>
              <select
                name="kitchenSize"
                className={`${inputClass} appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  Approximate kitchen size
                </option>
                <option value="Small (under 100 sq ft)">
                  Small (under 100 sq ft)
                </option>
                <option value="Medium (100-200 sq ft)">
                  Medium (100-200 sq ft)
                </option>
                <option value="Large (200-300 sq ft)">
                  Large (200-300 sq ft)
                </option>
                <option value="Extra large (300+ sq ft)">
                  Extra large (300+ sq ft)
                </option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block text-xs font-medium text-stone-600 uppercase tracking-wide mb-1.5">
                Project Details
              </label>
              <textarea
                name="details"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Describe what you'd like to change about your kitchen — cabinets, countertops, layout, budget range, anything helps."
              />
            </div>

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
              className="w-full bg-walnut-700 hover:bg-walnut-800 text-white py-4 rounded-lg font-bold tracking-wide uppercase text-sm transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {status === "loading"
                ? "Sending..."
                : "Submit My Estimate Request"}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-xs text-center" role="alert">
                Something went wrong.{" "}
                <a href={company.phoneLink} className="underline">
                  Call us directly at {company.phone}
                </a>
                .
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
