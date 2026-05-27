"use client";

import { motion } from "framer-motion";
import { BarChart3, CalendarCheck, TrendingUp, Users, ArrowUpRight, Clock } from "lucide-react";

const stats = [
  { label: "Today's Revenue", value: "₹14,200", change: "+12%", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { label: "Slots Booked", value: "28 / 32", change: "87.5%", icon: CalendarCheck, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { label: "Monthly Revenue", value: "₹3,84,000", change: "+18%", icon: BarChart3, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { label: "Active Players", value: "127", change: "+5 today", icon: Users, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
];

const recentBookings = [
  { id: "BK001", player: "Arjun Nair", turf: "Football A", slot: "6:00 AM – 7:00 AM", date: "Today", amount: "₹800", status: "confirmed" },
  { id: "BK002", player: "Priya Menon", turf: "Badminton 1", slot: "7:00 AM – 8:00 AM", date: "Today", amount: "₹400", status: "confirmed" },
  { id: "BK003", player: "Ravi Kumar", turf: "Cricket Net", slot: "5:00 PM – 6:00 PM", date: "Today", amount: "₹600", status: "pending" },
  { id: "BK004", player: "Sneha Roy", turf: "Football B", slot: "6:00 PM – 7:00 PM", date: "Today", amount: "₹900", status: "confirmed" },
  { id: "BK005", player: "Kiran Das", turf: "Badminton 2", slot: "7:00 PM – 8:00 PM", date: "Today", amount: "₹400", status: "cancelled" },
];

const upcomingSlots = [
  { time: "6 AM", turf: "Football A", status: "booked" },
  { time: "7 AM", turf: "Football A", status: "booked" },
  { time: "8 AM", turf: "Football A", status: "available" },
  { time: "9 AM", turf: "Football A", status: "available" },
  { time: "5 PM", turf: "Football A", status: "booked" },
  { time: "6 PM", turf: "Football A", status: "booked" },
  { time: "7 PM", turf: "Football A", status: "available" },
  { time: "8 PM", turf: "Football A", status: "booked" },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-green-500/15 text-green-400",
  pending: "bg-yellow-500/15 text-yellow-400",
  cancelled: "bg-red-500/15 text-red-400",
};

export default function DashboardPage() {
  return (
    <div className="space-y-7 w-full">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black">Dashboard</h1>
        <p className="text-white/40 text-base mt-1">Welcome back — here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className={`bg-white/3 border ${s.border} rounded-2xl p-6`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={18} className={s.color} />
                </div>
                <span className="text-sm text-green-400 font-semibold">{s.change}</span>
              </div>
              <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-sm text-white/35">{s.label}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent bookings */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white/3 border border-white/6 rounded-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <h2 className="text-base font-semibold">Recent Bookings</h2>
            <a href="/bookings" className="text-sm text-green-400 hover:text-green-300 flex items-center gap-1">
              View all <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="divide-y divide-white/4">
            {recentBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xs font-black text-white flex-shrink-0">
                    {b.player.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">{b.player}</p>
                    <p className="text-xs text-white/35">{b.turf} · {b.slot}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white/70">{b.amount}</span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors[b.status]}`}>
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Today's slot overview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/3 border border-white/6 rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
            <Clock size={15} className="text-white/40" />
            <h2 className="text-base font-semibold">Today&apos;s Slots</h2>
          </div>
          <div className="p-4 space-y-2">
            {upcomingSlots.map((slot) => (
              <div key={slot.time} className="flex items-center justify-between">
                <span className="text-sm text-white/40 w-12">{slot.time}</span>
                <div className="flex-1 mx-3">
                  <div className={`h-7 rounded-lg text-xs flex items-center px-2.5 font-medium ${
                    slot.status === "booked"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/15 text-green-400"
                  }`}>
                    {slot.status === "booked" ? "Booked" : "Available"}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4 flex gap-4">
            <span className="text-xs text-green-400 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-green-500/40 inline-block" /> Available
            </span>
            <span className="text-xs text-red-400 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-red-500/40 inline-block" /> Booked
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
