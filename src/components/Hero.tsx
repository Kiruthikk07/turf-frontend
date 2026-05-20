"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

const floatingCards = [
  {
    icon: "⚽",
    label: "Football",
    booked: "92%",
    delay: 0,
    position: "top-1/3 left-6 lg:left-16",
  },
  {
    icon: "🏏",
    label: "Cricket",
    booked: "78%",
    delay: 0.3,
    position: "top-1/3 right-6 lg:right-16",
  },
  {
    icon: "🏸",
    label: "Badminton",
    booked: "85%",
    delay: 0.6,
    position: "bottom-1/4 left-6 lg:left-24",
  },
];

const avatars = [
  { initials: "RK", colors: "from-green-500 to-emerald-600" },
  { initials: "PM", colors: "from-purple-500 to-violet-600" },
  { initials: "AN", colors: "from-cyan-500 to-blue-600" },
  { initials: "SR", colors: "from-yellow-500 to-orange-500" },
  { initials: "VR", colors: "from-pink-500 to-rose-600" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-green-500/8 blur-[100px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 turf-pattern opacity-40 pointer-events-none" />

      {/* Floating sport cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          className={`absolute ${card.position} hidden lg:block z-10`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8 + card.delay, duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="float-anim glass gradient-border rounded-xl p-3 min-w-[120px]"
            style={{ animationDelay: `${card.delay}s` }}
          >
            <div className="text-2xl mb-1">{card.icon}</div>
            <div className="text-xs font-medium text-white/80">{card.label}</div>
            <div className="text-xs text-green-400 font-bold">{card.booked} booked</div>
          </div>
        </motion.div>
      ))}

      {/* Main content — flows naturally, no absolute overlap */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center"
      >
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-green-500/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs font-medium text-green-400">Now live — TurfPro 2.0</span>
          <Star size={12} className="text-green-400 fill-green-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6"
        >
          Manage Your{" "}
          <span className="gradient-text">Turf</span>
          <br />
          Like Never Before
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Book slots, track income, monitor usage, and grow your sports facility — all from one
          powerful dashboard built for turf owners.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#"
            className="group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-7 py-3.5 rounded-xl transition-all duration-200 glow-green"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Managing Free
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#"
            className="group flex items-center gap-2 glass border border-white/10 hover:border-green-500/40 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Play size={10} className="text-green-400 fill-green-400 ml-0.5" />
            </div>
            Watch Demo
          </motion.a>
        </motion.div>

        {/* Social proof — inline, no absolute positioning */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Avatars + count */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {avatars.map(({ initials, colors }, i) => (
                <div
                  key={initials}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${colors} border-2 border-[#020b06] flex items-center justify-center text-[11px] font-bold text-white`}
                  style={{ zIndex: avatars.length - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">2,400+ owners</p>
              <p className="text-xs text-white/40">trust TurfPro</p>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden sm:block w-px h-10 bg-white/10" />

          {/* Star rating */}
          <div className="flex items-center gap-2.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">4.9 / 5</p>
              <p className="text-xs text-white/40">avg. rating</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — at the very bottom of the section, no overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-20 pb-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-green-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
