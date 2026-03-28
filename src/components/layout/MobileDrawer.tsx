"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween" as const, duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring" as const,
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[420px] bg-white flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-walnut-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">K</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm leading-tight text-stone-900">
                    Kitchen Remodeling
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-walnut-600">
                    by Misael
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-stone-500 hover:text-stone-900 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Accent line */}
            <div className="h-px bg-gradient-to-r from-walnut-700 via-brass-500 to-walnut-700" />

            {/* Nav links */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring" as const,
                        stiffness: 300,
                        damping: 30,
                        delay: 0.2 + i * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`block py-3 px-4 rounded-lg font-heading text-2xl font-bold tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-walnut-700 bg-walnut-50"
                            : "text-stone-900 hover:text-walnut-700 hover:bg-stone-50"
                        }`}
                      >
                        {link.label.toUpperCase()}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 pb-4 space-y-3"
            >
              <a
                href={company.phoneLink}
                className="flex items-center gap-3 text-sm text-stone-600 hover:text-walnut-700 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-walnut-600" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-stone-600 hover:text-walnut-700 transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-walnut-600" />
                {company.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-stone-500">
                <MapPin className="w-4 h-4 text-walnut-600" />
                {company.address.city}, {company.address.region}
              </div>
            </motion.div>

            {/* License badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-6 mb-4"
            >
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-walnut-600 bg-walnut-50 px-3 py-1.5 rounded-full">
                CA License {company.license}
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="px-6 pb-8"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full bg-walnut-700 hover:bg-walnut-800 text-white text-center py-4 rounded-xl font-bold tracking-wide transition-all duration-300 hover:shadow-lg"
              >
                Get Your Free Estimate
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
