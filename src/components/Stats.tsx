"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 2400,
    suffix: "+",
    label: "Active Turf Owners",
    description: "Managing facilities across the country",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Calendar,
    value: 180000,
    suffix: "+",
    label: "Slots Booked",
    description: "Successfully through our platform",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: DollarSign,
    value: 4.2,
    suffix: "M+",
    label: "Revenue Tracked",
    description: "Monthly across all turfs",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Uptime Guaranteed",
    description: "Reliable infrastructure, always on",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(target < 100 ? 1 : 0)));
      }
    }, step);

    return () => clearInterval(timer);
  }, [active, target]);

  const display = target < 100 ? count.toFixed(1) : Math.round(count).toLocaleString();
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Ticker bar */}
      <div className="bg-green-500/10 border-y border-green-500/20 py-3 mb-20 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
          {[...Array(2)].map((_, idx) =>
            ["Football", "Cricket", "Badminton", "Tennis", "Basketball", "Volleyball", "Hockey"].map(
              (sport) => (
                <span
                  key={`${idx}-${sport}`}
                  className="text-xs font-medium text-green-400/70 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  {sport}
                </span>
              )
            )
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Trusted by facilities{" "}
            <span className="gradient-text">across the nation</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real numbers from real turf businesses scaling with TurfPro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass gradient-border rounded-2xl p-6 group cursor-default"
              >
                <div
                  className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={18} className={stat.color} />
                </div>
                <div className={`text-3xl font-black mb-1 ${stat.color}`}>
                  <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
                </div>
                <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
