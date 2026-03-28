import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* Main footer — compact single-row */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-walnut-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm text-white leading-tight">
                  Kitchen Remodeling
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-walnut-400">
                  by Misael
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-500 mb-4 leading-relaxed">
              Licensed kitchen remodeling in Orange County. From design to final inspection.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={company.phoneLink}
                className="flex items-center gap-2 text-white hover:text-brass-400 transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-brass-500" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-brass-400 transition-colors duration-300"
              >
                <Mail className="w-3.5 h-3.5 text-brass-500" />
                {company.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brass-500" />
                {company.address.city}, {company.address.region}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brass-500" />
                {company.hours}
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brass-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brass-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-4 mt-8">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brass-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Service areas */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase mb-5">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {company.areasServed.map((area) => (
                <span
                  key={area}
                  className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="w-full h-36 bg-stone-800 rounded-lg overflow-hidden">
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                title="Service area map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-600">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-brass-600" />
              CA License {company.license}
            </span>
            <span>Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
