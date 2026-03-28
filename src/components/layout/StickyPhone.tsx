"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";

export function StickyPhone() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={company.phoneLink}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-walnut-700 hover:bg-walnut-800 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
          aria-label={`Call ${company.phone}`}
        >
          <Phone className="w-5 h-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
