"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Sign Up", desc: "Create your account in 60 seconds", emoji: "🚀" },
  { num: "02", title: "Add Your Turf", desc: "Set sports, slots, and pricing", emoji: "🏟️" },
  { num: "03", title: "Accept Bookings", desc: "Players book & pay directly", emoji: "📅" },
  { num: "04", title: "Track & Grow", desc: "Watch your revenue in real-time", emoji: "📈" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Up and running in <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-white/40 text-sm">No tech skills. No long setup. Just results.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass border border-white/5 hover:border-green-500/20 rounded-2xl p-6 text-center group cursor-default transition-all"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{step.emoji}</div>
              <div className="text-xs text-green-400 font-bold mb-1">{step.num}</div>
              <div className="text-sm font-semibold text-white/90 mb-1">{step.title}</div>
              <div className="text-xs text-white/35">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
