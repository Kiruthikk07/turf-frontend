"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  // scrolled = past the threshold, show pill instead of full bar
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const THRESHOLD = 80;

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > THRESHOLD);
  });

  return (
    <>
      {/* ── Full-width top bar — visible only at top ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: scrolled ? -80 : 0, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none border-b border-white/8"
        style={{ background: "rgba(2, 11, 6, 0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className="pointer-events-auto max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a href="#" className="flex items-center gap-2" whileHover={{ scale: 1.03 }}>
            <Image src="/Logo.png" alt="TurfPro Logo" width={36} height={36} className="rounded-md" />
            <span className="text-lg font-bold tracking-tight">
              Turf<span className="text-green-400">Pro</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-green-400 transition-colors duration-200 relative group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400 transition-all duration-200 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2"
              whileHover={{ scale: 1.02 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="#"
              className="text-sm font-semibold bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Free
            </motion.a>
          </div>

          <motion.button
            className="md:hidden text-white/70 hover:text-white pointer-events-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Floating pill — visible after scrolling past threshold ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: scrolled ? 0 : -80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-2xl">
          <motion.div
            layout
            className="glass border border-white/12 shadow-2xl shadow-black/50 rounded-2xl px-4 h-12 flex items-center justify-between gap-4"
          >
            {/* Logo */}
            <motion.a href="#" className="flex items-center gap-1.5 flex-shrink-0" whileHover={{ scale: 1.04 }}>
              <Image src="/Logo.png" alt="TurfPro Logo" width={28} height={28} className="rounded-md" />
              <span className="text-sm font-bold hidden sm:block">
                Turf<span className="text-green-400">Pro</span>
              </span>
            </motion.a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/55 hover:text-white transition-colors duration-200"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <motion.a
                href="#"
                className="hidden sm:block text-xs text-white/50 hover:text-white transition-colors px-2 py-1.5"
                whileHover={{ scale: 1.02 }}
              >
                Sign In
              </motion.a>
              <motion.a
                href="#"
                className="text-xs font-bold bg-green-500 hover:bg-green-400 text-black px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.button
                className="md:hidden text-white/60 hover:text-white ml-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="mt-2 glass border border-white/10 rounded-2xl px-5 py-4 flex flex-col gap-3"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-green-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
