"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Search } from "lucide-react";

const payments = [
  { id: "PAY001", bookingId: "BK001", player: "Arjun Nair", turf: "Football A", amount: 800, method: "UPI", status: "success", date: "2026-05-27", time: "05:48 AM" },
  { id: "PAY002", bookingId: "BK002", player: "Priya Menon", turf: "Badminton 1", amount: 400, method: "Card", status: "success", date: "2026-05-27", time: "06:52 AM" },
  { id: "PAY003", bookingId: "BK003", player: "Ravi Kumar", turf: "Cricket Net", amount: 600, method: "UPI", status: "pending", date: "2026-05-27", time: "04:10 PM" },
  { id: "PAY004", bookingId: "BK004", player: "Sneha Roy", turf: "Football B", amount: 900, method: "Wallet", status: "success", date: "2026-05-27", time: "05:30 PM" },
  { id: "PAY005", bookingId: "BK005", player: "Kiran Das", turf: "Badminton 2", amount: 400, method: "UPI", status: "refunded", date: "2026-05-26", time: "06:15 PM" },
  { id: "PAY006", bookingId: "BK006", player: "Amal Raj", turf: "Football A", amount: 800, method: "Card", status: "success", date: "2026-05-26", time: "07:50 AM" },
  { id: "PAY007", bookingId: "BK007", player: "Divya S", turf: "Tennis", amount: 500, method: "UPI", status: "success", date: "2026-05-26", time: "03:40 PM" },
];

const statusStyle: Record<string, string> = {
  success: "bg-green-500/15 text-green-400",
  pending: "bg-yellow-500/15 text-yellow-400",
  refunded: "bg-blue-500/15 text-blue-400",
  failed: "bg-red-500/15 text-red-400",
};

const summaryCards = [
  { label: "Today's Collection", value: "₹2,700", sub: "4 transactions", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { label: "This Month", value: "₹3,84,000", sub: "412 transactions", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { label: "Pending", value: "₹600", sub: "1 transaction", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { label: "Refunded", value: "₹400", sub: "1 transaction", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");

  const filtered = payments.filter((p) =>
    p.player.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black">Payments</h1>
          <p className="text-white/40 text-base mt-1">Track all transactions and revenue</p>
        </div>
        <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all">
          <Download size={15} /> Export
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {summaryCards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`bg-white/3 border ${c.border} rounded-2xl p-5`}
          >
            <p className="text-xs text-white/35 mb-2">{c.label}</p>
            <p className={`text-2xl font-black ${c.color}`}>{c.value}</p>
            <p className="text-xs text-white/30 mt-1">{c.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search payments..."
          className="w-full bg-white/5 border border-white/8 focus:border-green-500/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-white/3 border border-white/6 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5 text-white/35 text-sm">
                <th className="text-left px-5 py-3.5 font-medium">Payment ID</th>
                <th className="text-left px-5 py-3.5 font-medium">Player</th>
                <th className="text-left px-5 py-3.5 font-medium">Turf</th>
                <th className="text-left px-5 py-3.5 font-medium">Amount</th>
                <th className="text-left px-5 py-3.5 font-medium">Method</th>
                <th className="text-left px-5 py-3.5 font-medium">Date & Time</th>
                <th className="text-left px-5 py-3.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {filtered.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="hover:bg-white/2 transition-colors"
                >
                  <td className="px-5 py-3.5">
                    <p className="text-sm text-green-400 font-mono">{p.id}</p>
                    <p className="text-xs text-white/25">{p.bookingId}</p>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-white/70">{p.player}</td>
                  <td className="px-5 py-3.5 text-sm text-white/50">{p.turf}</td>
                  <td className="px-5 py-3.5 text-sm font-bold text-white/80">₹{p.amount}</td>
                  <td className="px-5 py-3.5 text-sm text-white/50">{p.method}</td>
                  <td className="px-5 py-3.5">
                    <p className="text-sm text-white/60">{p.date}</p>
                    <p className="text-xs text-white/30">{p.time}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyle[p.status]}`}>{p.status}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-14 text-white/30 text-base">No payments found</div>
          )}
        </div>
      </div>
    </div>
  );
}
