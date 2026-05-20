"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for small turfs just getting started",
    color: "border-white/10",
    btnClass: "bg-white/10 hover:bg-white/15 text-white",
    features: [
      "1 Turf profile",
      "Up to 50 bookings/month",
      "Basic slot calendar",
      "Email notifications",
      "Customer support (email)",
    ],
    notIncluded: ["Revenue analytics", "Custom branding", "Priority support"],
  },
  {
    name: "Growth",
    monthlyPrice: 999,
    yearlyPrice: 799,
    description: "For growing turf businesses managing multiple sports",
    color: "border-green-500/50",
    popular: true,
    btnClass: "bg-green-500 hover:bg-green-400 text-black font-bold",
    glowClass: "shadow-2xl shadow-green-500/20",
    features: [
      "Up to 3 Turf profiles",
      "Unlimited bookings",
      "Advanced slot management",
      "SMS + WhatsApp reminders",
      "Revenue analytics & reports",
      "Online payments (UPI/Cards)",
      "Player-facing booking page",
      "Priority support",
    ],
    notIncluded: [],
  },
  {
    name: "Enterprise",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    description: "For large complexes and multi-location operators",
    color: "border-white/10",
    btnClass: "bg-white/10 hover:bg-white/15 text-white",
    features: [
      "Unlimited turf profiles",
      "Multi-location support",
      "Custom branding & domain",
      "Advanced analytics & BI",
      "Staff & role management",
      "API access & integrations",
      "Dedicated account manager",
      "SLA-backed uptime 99.9%",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-green-400 tracking-widest uppercase mb-3 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Simple,{" "}
            <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-white/50 mb-8">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass border border-white/10 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !yearly ? "bg-green-500 text-black" : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly ? "bg-green-500 text-black" : "text-white/50 hover:text-white"
              }`}
            >
              Yearly
              <span className="text-xs bg-yellow-400/20 text-yellow-400 px-1.5 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`relative glass rounded-3xl p-7 border ${plan.color} ${plan.glowClass || ""} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    <Zap size={11} className="fill-black" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-white/40">{plan.description}</p>
              </div>

              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.monthlyPrice === 0 ? (
                      <span className="text-4xl font-black">Free</span>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-black">
                          ₹{yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-white/40 text-sm mb-1">/mo</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
                {yearly && plan.monthlyPrice > 0 && (
                  <div className="text-xs text-white/40 mt-1">
                    Billed annually (₹{plan.yearlyPrice * 12}/yr)
                  </div>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-white/70">
                    <Check size={14} className="text-green-400 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
                {plan.notIncluded?.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-white/25 line-through">
                    <span className="w-3.5 h-px bg-white/20 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-xl text-sm transition-all duration-200 ${plan.btnClass}`}
              >
                {plan.monthlyPrice === 0 ? "Get Started Free" : "Start 14-day Free Trial"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs text-white/30"
        >
          {["No credit card required", "Cancel anytime", "14-day free trial", "SOC2 compliant"].map(
            (item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check size={12} className="text-green-500" />
                {item}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
