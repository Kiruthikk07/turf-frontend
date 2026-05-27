"use client";

import { motion } from "framer-motion";
import { CalendarCheck, BarChart3, Bell, CreditCard, Users2, Zap } from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "Slot Booking", desc: "Real-time calendar, instant confirmations", color: "text-green-400", bg: "bg-green-500/10", border: "hover:border-green-500/30" },
  { icon: BarChart3, title: "Revenue Reports", desc: "Daily & monthly income at a glance", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "hover:border-cyan-500/30" },
  { icon: Bell, title: "Auto Reminders", desc: "WhatsApp & SMS, zero effort", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "hover:border-yellow-500/30" },
  { icon: CreditCard, title: "Online Payments", desc: "UPI, cards, wallets — all reconciled", color: "text-pink-400", bg: "bg-pink-500/10", border: "hover:border-pink-500/30" },
  { icon: Users2, title: "Team Access", desc: "Roles for staff, managers, and owners", color: "text-purple-400", bg: "bg-purple-500/10", border: "hover:border-purple-500/30" },
  { icon: Zap, title: "10-min Setup", desc: "Go live faster than a cup of tea", color: "text-orange-400", bg: "bg-orange-500/10", border: "hover:border-orange-500/30" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#0d0d14]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Everything you need,{" "}
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-white/40 text-sm">Built for turf owners who want results.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={`bg-white/3 border border-white/6 ${f.border} rounded-2xl p-5 flex items-start gap-4 group cursor-default transition-all duration-300`}
              >
                <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className={f.color} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-1">{f.title}</h3>
                  <p className="text-xs text-white/38 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
