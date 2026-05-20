"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  BarChart3,
  Bell,
  Smartphone,
  Shield,
  Zap,
  Users2,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Slot Management",
    description:
      "Real-time availability calendar with drag-and-drop booking, conflict detection, and automated confirmations.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    glow: "group-hover:shadow-green-500/20",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description:
      "Track daily, weekly, and monthly income with beautiful charts. Export reports with one click.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    glow: "group-hover:shadow-cyan-500/20",
    highlight: false,
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description:
      "SMS and WhatsApp reminders to players, reducing no-shows by up to 60%. Custom timing settings.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    glow: "group-hover:shadow-yellow-500/20",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Player-Facing App",
    description:
      "Your players get a branded mobile experience to browse slots, book, and pay — all without calls.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "group-hover:shadow-purple-500/20",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    description:
      "Accept UPI, cards, wallets, and pay-at-venue. Automatic reconciliation and payout tracking.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    glow: "group-hover:shadow-pink-500/20",
    highlight: false,
  },
  {
    icon: Users2,
    title: "Team & Staff Access",
    description:
      "Role-based access for managers, staff, and owners. Know exactly who did what and when.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    glow: "group-hover:shadow-orange-500/20",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Dispute Protection",
    description:
      "Every booking is timestamped and logged. Resolve player disputes with audit trails instantly.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "group-hover:shadow-blue-500/20",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "Go live in under 10 minutes. Import your existing schedule, customise your turf profile, done.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "group-hover:shadow-emerald-500/20",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-green-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-green-400 tracking-widest uppercase mb-3 block">
            Everything you need
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Built for serious{" "}
            <span className="gradient-text">turf businesses</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Stop managing bookings in WhatsApp groups and spreadsheets. TurfPro gives you a
            professional toolkit from day one.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group glass rounded-2xl p-6 cursor-default transition-all duration-300 hover:shadow-2xl ${feat.glow} border border-white/5 hover:border-white/10 ${
                  feat.highlight ? "md:col-span-2 md:row-span-1" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 ${feat.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={18} className={feat.color} />
                </div>
                <h3 className="text-sm font-bold text-white/90 mb-2">{feat.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{feat.description}</p>
                <div className={`mt-4 text-xs font-semibold ${feat.color} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Learn more →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
