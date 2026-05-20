"use client";

import { motion } from "framer-motion";
import { UserPlus, LayoutDashboard, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in 60 seconds. Add your turf details, sports available, and operating hours.",
    color: "text-green-400",
    bg: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
  },
  {
    step: "02",
    icon: LayoutDashboard,
    title: "Set Up Your Dashboard",
    description:
      "Configure slot durations, pricing per sport, and staff access. Your command center is ready.",
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Accept Bookings",
    description:
      "Players find and book slots directly. You get notified instantly. No more back-and-forth.",
    color: "text-purple-400",
    bg: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Watch Your Revenue Grow",
    description:
      "Monitor income, occupancy rates, and peak hours. Make data-driven decisions every day.",
    color: "text-yellow-400",
    bg: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-green-400 tracking-widest uppercase mb-3 block">
            Simple process
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Up and running in{" "}
            <span className="gradient-text">four steps</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            No tech skills needed. If you can use a smartphone, you can run TurfPro.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.bg} border ${step.border} flex items-center justify-center mb-6 cursor-default`}
                  >
                    <Icon size={28} className={step.color} />
                    <span className={`absolute -top-2 -right-2 text-xs font-black ${step.color} bg-background border ${step.border} rounded-lg px-1.5 py-0.5`}>
                      {step.step}
                    </span>
                    {/* Pulse ring on hover */}
                    <div className={`absolute inset-0 rounded-2xl border ${step.border} opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
                  </motion.div>

                  <h3 className="text-base font-bold text-white/90 mb-3">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 glass gradient-border rounded-3xl overflow-hidden"
        >
          {/* Mock browser bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/5 rounded-md px-16 py-1 text-xs text-white/25">
                app.turfpro.io/dashboard
              </div>
            </div>
          </div>

          {/* Mock dashboard content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left sidebar */}
            <div className="hidden md:flex flex-col gap-3">
              {["Dashboard", "Bookings", "Slots", "Revenue", "Customers", "Settings"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-colors ${
                      i === 0 ? "bg-green-500/20 text-green-400 font-semibold" : "text-white/30 hover:text-white/50"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-green-400" : "bg-white/20"}`}
                    />
                    {item}
                  </div>
                )
              )}
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-4">
              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Today's Revenue", value: "₹12,400", change: "+18%", color: "text-green-400" },
                  { label: "Slots Booked", value: "34/40", change: "85%", color: "text-cyan-400" },
                  { label: "Active Players", value: "127", change: "+5 today", color: "text-purple-400" },
                ].map((card) => (
                  <div key={card.label} className="bg-white/4 rounded-xl p-3">
                    <div className="text-xs text-white/30 mb-1">{card.label}</div>
                    <div className={`text-base font-bold ${card.color}`}>{card.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{card.change}</div>
                  </div>
                ))}
              </div>

              {/* Slot grid */}
              <div className="bg-white/4 rounded-xl p-4">
                <div className="text-xs text-white/40 mb-3 font-medium">Today's Slots — Football Turf A</div>
                <div className="grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-5 rounded text-[9px] flex items-center justify-center font-medium ${
                        i < 6
                          ? "bg-green-500/30 text-green-400"
                          : i < 11
                          ? "bg-red-500/30 text-red-400"
                          : "bg-white/5 text-white/20"
                      }`}
                    >
                      {i < 6 ? "✓" : i < 11 ? "✗" : "—"}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-3">
                  <span className="text-[10px] text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm bg-green-500/40 inline-block" /> Available
                  </span>
                  <span className="text-[10px] text-red-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm bg-red-500/40 inline-block" /> Booked
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
