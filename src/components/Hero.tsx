"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0d14]">
      {/* Gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[85vh]">
          {/* Left — text */}
          <div className="flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-green-400">India&apos;s #1 Turf Management Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.06] tracking-tight mb-5"
            >
              The smartest
              <br />
              way to{" "}
              <span className="gradient-text">manage</span>
              <br />
              your turf
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-white/45 text-base md:text-lg mb-8 max-w-sm leading-relaxed"
            >
              Bookings, payments, and analytics — all handled for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl text-sm transition-all glow-green"
              >
                Get Started Free
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/15 hover:border-green-500/40 text-white/70 hover:text-white font-medium px-6 py-3 rounded-xl text-sm transition-all"
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[
                  "from-green-500 to-emerald-600",
                  "from-blue-500 to-cyan-600",
                  "from-purple-500 to-violet-600",
                  "from-orange-500 to-red-500",
                ].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${c} border-2 border-[#0d0d14]`} style={{ zIndex: 4 - i }} />
                ))}
              </div>
              <p className="text-xs text-white/40"><span className="text-white font-semibold">2,400+</span> turf owners trust us</p>
            </motion.div>
          </div>

          {/* Right — player image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative flex items-end justify-center h-[500px] md:h-[600px]"
          >
            {/* Glow behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-[80px]" />
            <Image
              src="/oldhero.png"
              alt="Sports players"
              width={540}
              height={580}
              className="relative z-10 object-contain h-full w-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
