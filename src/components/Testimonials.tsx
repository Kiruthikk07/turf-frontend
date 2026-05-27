"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ravi Kumar", role: "Prime Sports Arena, Chennai", avatar: "RK", color: "from-green-500 to-emerald-600", text: "Went from WhatsApp chaos to a proper system in one day. Revenue up 40%." },
  { name: "Priya Menon", role: "Ace Badminton Centre, Bengaluru", avatar: "PM", color: "from-purple-500 to-violet-600", text: "No-shows dropped by half. Players love the self-booking experience." },
  { name: "Arjun Nair", role: "City Sports Complex, Kochi", avatar: "AN", color: "from-cyan-500 to-blue-600", text: "Managing 6 courts is effortless now. The reports genuinely impress investors." },
  { name: "Santhosh Reddy", role: "Greenfield Turfs, Hyderabad", avatar: "SR", color: "from-yellow-500 to-orange-500", text: "Switched 6 months ago. Best decision for the business. Never looking back." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0d0d14] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            Loved by turf owners <span className="text-red-400">❤️</span>
          </h2>
          <p className="text-white/40 text-sm">Real results from real businesses.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white/3 border border-white/6 hover:border-white/10 rounded-2xl p-5 flex flex-col gap-4 cursor-default transition-all"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/65 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-[11px] font-black text-white flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/80">{r.name}</p>
                  <p className="text-[10px] text-white/35">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
