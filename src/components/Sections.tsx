"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarCheck, BarChart3, Bell } from "lucide-react";

const sections = [
  {
    badge: "Smart Scheduling",
    title: "A slot always\nready for you",
    desc: "Real-time calendar that fills itself. Players book directly — you just show up.",
    img: "/newgroupppl.png",
    imgAlt: "Sports players",
    flip: false,
    accent: "from-green-500/20 to-emerald-500/5",
    glow: "bg-green-500/15",
    icon: CalendarCheck,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    stat: { value: "87%", label: "avg occupancy rate" },
  },
  {
    badge: "Revenue Tracking",
    title: "Know your\nearnings daily",
    desc: "Track income, spot peak hours, and make decisions backed by data — not guesswork.",
    img: "/makenewfriends.png",
    imgAlt: "Badminton players",
    flip: true,
    accent: "from-blue-500/20 to-cyan-500/5",
    glow: "bg-blue-500/15",
    icon: BarChart3,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    stat: { value: "40%", label: "avg revenue increase" },
  },
  {
    badge: "Auto Reminders",
    title: "Zero no-shows,\nfull bookings",
    desc: "WhatsApp and SMS reminders go out automatically. Your turf stays full, every day.",
    img: "/finalone.png",
    imgAlt: "Happy player",
    flip: false,
    accent: "from-purple-500/20 to-violet-500/5",
    glow: "bg-purple-500/15",
    icon: Bell,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    stat: { value: "52%", label: "drop in no-shows" },
  },
];

export default function Sections() {
  return (
    <div className="bg-[#0d0d14]">
      {sections.map((s, i) => {
        const Icon = s.icon;
        return (
          <section key={i} className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} pointer-events-none`} />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${s.flip ? "md:[&>*:first-child]:order-2" : ""}`}>

                {/* Text side */}
                <motion.div
                  initial={{ opacity: 0, x: s.flip ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center gap-2 w-fit">
                    <div className={`w-8 h-8 ${s.iconBg} rounded-lg flex items-center justify-center`}>
                      <Icon size={16} className={s.iconColor} />
                    </div>
                    <span className={`text-xs font-semibold ${s.iconColor}`}>{s.badge}</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight whitespace-pre-line">
                    {s.title}
                  </h2>

                  <p className="text-white/45 text-base leading-relaxed max-w-sm">{s.desc}</p>

                  {/* Stat pill */}
                  <div className="flex items-center gap-3 w-fit bg-white/5 border border-white/8 rounded-2xl px-5 py-3">
                    <span className={`text-3xl font-black ${s.iconColor}`}>{s.stat.value}</span>
                    <span className="text-xs text-white/40">{s.stat.label}</span>
                  </div>
                </motion.div>

                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, x: s.flip ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex items-end justify-center h-[380px] md:h-[440px]"
                >
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-48 ${s.glow} rounded-full blur-[70px]`} />
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    width={420}
                    height={440}
                    className="relative z-10 object-contain h-full w-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
