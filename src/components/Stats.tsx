"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";

const stats = [
  { value: 2400, suffix: "+", label: "Turf Owners", color: "text-green-400" },
  { value: 180000, suffix: "+", label: "Slots Booked", color: "text-cyan-400" },
  { value: 98, suffix: "%", label: "Uptime", color: "text-purple-400" },
  { value: 4.9, suffix: "★", label: "Avg Rating", color: "text-yellow-400" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const inc = target / (1600 / 16);
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(target < 10 ? 1 : 0)));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  const display = target < 10 ? count.toFixed(1) : Math.round(count).toLocaleString();
  return <>{display}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 bg-[#0d0d14] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`text-4xl font-black mb-1 ${s.color}`}>
                <CountUp target={s.value} suffix={s.suffix} active={inView} />
              </div>
              <div className="text-xs text-white/35 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
