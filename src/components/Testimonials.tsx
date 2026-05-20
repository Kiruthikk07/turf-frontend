"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Owner, Prime Sports Arena",
    location: "Chennai",
    avatar: "RK",
    avatarColor: "from-green-500 to-emerald-600",
    stars: 5,
    quote:
      "Before TurfPro, I was managing 3 football turfs on WhatsApp. Now I can see everything in one place — bookings, income, who's on shift. It's like having an extra manager for free.",
    stats: "↑ 40% revenue in 3 months",
  },
  {
    name: "Priya Menon",
    role: "Co-owner, Ace Badminton Centre",
    location: "Bengaluru",
    avatar: "PM",
    avatarColor: "from-purple-500 to-violet-600",
    stars: 5,
    quote:
      "The automated WhatsApp reminders alone cut our no-shows by half. Players love the self-booking — they say it's simpler than other apps. Setup took me 15 minutes flat.",
    stats: "↓ 52% no-show rate",
  },
  {
    name: "Arjun Nair",
    role: "Manager, City Sports Complex",
    location: "Kochi",
    avatar: "AN",
    avatarColor: "from-cyan-500 to-blue-600",
    stars: 5,
    quote:
      "We have 6 different sport courts and the multi-turf view is a lifesaver. The revenue reports are so detailed — I share them with investors and they're genuinely impressed.",
    stats: "₹8L+ tracked monthly",
  },
  {
    name: "Santhosh Reddy",
    role: "Founder, Greenfield Turfs",
    location: "Hyderabad",
    avatar: "SR",
    avatarColor: "from-yellow-500 to-orange-600",
    stars: 5,
    quote:
      "Switched from a local POS system to TurfPro six months ago. Never looking back. The payment integrations are solid, customers pay online and my team focuses on the ground.",
    stats: "6 turfs managed seamlessly",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-green-400 tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Loved by turf{" "}
            <span className="gradient-text">professionals</span>
          </h2>
          <p className="text-white/50">Don't take our word for it — hear from the people using TurfPro daily.</p>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass gradient-border rounded-3xl p-8 md:p-10 w-full"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-green-500/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-medium">
                "{t.quote}"
              </blockquote>

              {/* Author row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-sm font-black text-white flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white/90 text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                    <div className="text-xs text-white/30">{t.location}</div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-xs text-green-400 font-semibold">{t.stats}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full glass border border-white/10 hover:border-green-500/40 flex items-center justify-center text-white/60 hover:text-white transition-all"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-green-400"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(1)}
            className="w-10 h-10 rounded-full glass border border-white/10 hover:border-green-500/40 flex items-center justify-center text-white/60 hover:text-white transition-all"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
