"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative glass gradient-border rounded-3xl overflow-hidden p-12 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-green-500/20 blur-[60px] rounded-full pointer-events-none" />

          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-green-500/5 pointer-events-none spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-green-500/10 pointer-events-none" style={{ animationDirection: "reverse" }} />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles size={12} className="text-green-400" />
              <span className="text-xs font-semibold text-green-400">
                Join 2,400+ turf owners
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6"
            >
              Ready to transform
              <br />
              <span className="gradient-text">your turf business?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/50 text-lg mb-10 max-w-xl mx-auto"
            >
              Start free today. No credit card needed. Be live in under 10 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#"
                className="group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base glow-green"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Free — No Card Needed
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4"
                whileHover={{ scale: 1.02 }}
              >
                Talk to sales →
              </motion.a>
            </motion.div>

            <p className="text-xs text-white/25 mt-6">
              Free plan available forever · Paid plans start at ₹999/mo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
