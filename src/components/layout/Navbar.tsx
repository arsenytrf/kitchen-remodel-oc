"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, Shield } from "lucide-react";
import { company, basePath } from "@/data/company";
import { navLinks } from "@/data/navigation";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = 0;
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 400 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar — license + phone (desktop only) */}
      <div
        className={`fixed top-0 left-0 right-0 z-[51] transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled ? "bg-walnut-800" : "bg-walnut-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-8">
          <div className="flex items-center gap-2 text-[11px] text-walnut-200">
            <Shield className="w-3 h-3 text-brass-400" />
            <span>CA License {company.license} | State Licensed General Contractor</span>
          </div>
          <a
            href={company.phoneLink}
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-brass-300 transition-colors duration-300"
          >
            <Phone className="w-3 h-3" />
            {company.phone}
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          hidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-walnut-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-base leading-tight transition-colors duration-300 ${
                  scrolled ? "text-stone-900" : "text-white"
                }`}
              >
                Kitchen Remodeling
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-walnut-600" : "text-brass-300"
                }`}
              >
                by Misael
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                    isActive
                      ? scrolled
                        ? "text-walnut-700"
                        : "text-brass-300"
                      : scrolled
                      ? "text-stone-600 hover:text-walnut-700"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phoneLink}
              className={`flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${
                scrolled ? "text-stone-900" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
            <Link
              href="/contact"
              className="bg-walnut-700 hover:bg-walnut-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-stone-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
