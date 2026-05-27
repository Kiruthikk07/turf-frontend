"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    features: ["1 turf", "50 bookings/mo", "Basic calendar", "Email support"],
    btn: "bg-white/8 hover:bg-white/12 text-white",
    border: "border-white/8",
  },
  {
    name: "Growth",
    monthly: 999,
    yearly: 799,
    popular: true,
    features: ["3 turfs", "Unlimited bookings", "Online payments", "WhatsApp reminders", "Revenue analytics", "Priority support"],
    btn: "bg-green-500 hover:bg-green-400 text-black font-bold",
    border: "border-green-500/40",
    glow: "shadow-green-500/15 shadow-xl",
  },
  {
    name: "Pro",
    monthly: 2499,
    yearly: 1999,
    features: ["Unlimited turfs", "Multi-location", "Custom branding", "API access", "Dedicated support"],
    btn: "bg-white/8 hover:bg-white/12 text-white",
    border: "border-white/8",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Simple <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-white/40 text-sm mb-6">Start free. Upgrade when you're ready.</p>

          <div className="inline-flex items-center gap-1 glass border border-white/10 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-green-500 text-black" : "text-white/50"}`}
            >Monthly</button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${yearly ? "bg-green-500 text-black" : "text-white/50"}`}
            >
              Yearly
              <span className="text-[10px] bg-yellow-400/20 text-yellow-400 px-1.5 py-0.5 rounded-full font-bold">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative glass border ${plan.border} ${plan.glow || ""} rounded-2xl p-6 flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-black px-3 py-1 rounded-full">
                  POPULAR
                </span>
              )}

              <div className="mb-5">
                <h3 className="text-base font-bold mb-3">{plan.name}</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearly ? "y" : "m"}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {plan.monthly === 0
                      ? <span className="text-3xl font-black">Free</span>
                      : <span className="text-3xl font-black">₹{yearly ? plan.yearly : plan.monthly}<span className="text-sm font-normal text-white/40">/mo</span></span>
                    }
                  </motion.div>
                </AnimatePresence>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                    <Check size={13} className="text-green-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-2.5 rounded-xl text-sm transition-all ${plan.btn}`}
              >
                {plan.monthly === 0 ? "Get Started" : "Start Free Trial"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
