"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, Eye, X } from "lucide-react";

const bookings = [
  { id: "BK001", player: "Arjun Nair", mobile: "9876543210", turf: "Football A", venue: "Prime Sports", slot: "6:00–7:00 AM", date: "2026-05-27", amount: 800, status: "confirmed", payment: "paid" },
  { id: "BK002", player: "Priya Menon", mobile: "9876543211", turf: "Badminton 1", venue: "Prime Sports", slot: "7:00–8:00 AM", date: "2026-05-27", amount: 400, status: "confirmed", payment: "paid" },
  { id: "BK003", player: "Ravi Kumar", mobile: "9876543212", turf: "Cricket Net", venue: "City Complex", slot: "5:00–6:00 PM", date: "2026-05-27", amount: 600, status: "pending", payment: "pending" },
  { id: "BK004", player: "Sneha Roy", mobile: "9876543213", turf: "Football B", venue: "Prime Sports", slot: "6:00–7:00 PM", date: "2026-05-27", amount: 900, status: "confirmed", payment: "paid" },
  { id: "BK005", player: "Kiran Das", mobile: "9876543214", turf: "Badminton 2", venue: "City Complex", slot: "7:00–8:00 PM", date: "2026-05-26", amount: 400, status: "cancelled", payment: "refunded" },
  { id: "BK006", player: "Amal Raj", mobile: "9876543215", turf: "Football A", venue: "Prime Sports", slot: "8:00–9:00 AM", date: "2026-05-26", amount: 800, status: "confirmed", payment: "paid" },
  { id: "BK007", player: "Divya S", mobile: "9876543216", turf: "Tennis", venue: "City Complex", slot: "4:00–5:00 PM", date: "2026-05-26", amount: 500, status: "confirmed", payment: "paid" },
];

const statusStyle: Record<string, string> = {
  confirmed: "bg-green-500/15 text-green-400",
  pending: "bg-yellow-500/15 text-yellow-400",
  cancelled: "bg-red-500/15 text-red-400",
};
const paymentStyle: Record<string, string> = {
  paid: "bg-green-500/15 text-green-400",
  pending: "bg-yellow-500/15 text-yellow-400",
  refunded: "bg-blue-500/15 text-blue-400",
};

export default function BookingsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = bookings.filter((b) => {
    const matchSearch = b.player.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">Bookings</h1>
          <p className="text-white/40 text-sm mt-0.5">{bookings.length} total bookings</p>
        </div>
        <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-xs font-medium px-4 py-2 rounded-xl transition-all">
          <Download size={13} /> Export
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by player or booking ID..."
            className="w-full bg-white/5 border border-white/8 focus:border-green-500/40 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {["all", "confirmed", "pending", "cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`text-xs px-3 py-2 rounded-xl font-medium capitalize transition-all ${statusFilter === s ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-white/5 border border-white/8 text-white/40 hover:text-white"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/3 border border-white/6 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-white/30 text-xs">
                <th className="text-left px-5 py-3 font-medium">Booking ID</th>
                <th className="text-left px-5 py-3 font-medium">Player</th>
                <th className="text-left px-5 py-3 font-medium">Turf</th>
                <th className="text-left px-5 py-3 font-medium">Slot</th>
                <th className="text-left px-5 py-3 font-medium">Date</th>
                <th className="text-left px-5 py-3 font-medium">Amount</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-left px-5 py-3 font-medium">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {filtered.map((b, i) => (
                <motion.tr
                  key={b.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="hover:bg-white/2 transition-colors"
                >
                  <td className="px-5 py-3 text-xs text-green-400 font-mono">{b.id}</td>
                  <td className="px-5 py-3">
                    <div>
                      <p className="text-xs font-medium text-white/80">{b.player}</p>
                      <p className="text-[10px] text-white/30">{b.mobile}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-xs text-white/70">{b.turf}</p>
                    <p className="text-[10px] text-white/30">{b.venue}</p>
                  </td>
                  <td className="px-5 py-3 text-xs text-white/50">{b.slot}</td>
                  <td className="px-5 py-3 text-xs text-white/50">{b.date}</td>
                  <td className="px-5 py-3 text-xs font-semibold text-white/80">₹{b.amount}</td>
                  <td className="px-5 py-3">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusStyle[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${paymentStyle[b.payment]}`}>{b.payment}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-white/30 text-sm">No bookings found</div>
          )}
        </div>
      </div>
    </div>
  );
}
