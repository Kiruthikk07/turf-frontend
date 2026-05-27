"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const turfs = ["Football A", "Football B", "Badminton 1", "Badminton 2", "Cricket Net", "Tennis"];
const hours = ["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM"];

const bookedSlots: Record<string, number[]> = {
  "Football A": [0, 1, 4, 5, 6, 12, 13],
  "Football B": [0, 1, 2, 9, 10, 14],
  "Badminton 1": [3, 4, 5, 11, 12, 13, 15],
  "Badminton 2": [0, 6, 7, 8, 14, 15],
  "Cricket Net": [5, 6, 7, 12, 13],
  "Tennis": [2, 3, 10, 11, 12],
};

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
}

export default function SlotsPage() {
  const [selectedTurf, setSelectedTurf] = useState("Football A");
  const [dateOffset, setDateOffset] = useState(0);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + dateOffset + i);
    return d;
  });

  const booked = bookedSlots[selectedTurf] ?? [];

  return (
    <div className="space-y-6 w-full">
      <div>
        <h1 className="text-3xl font-black">Slot Availability</h1>
        <p className="text-white/40 text-base mt-1">View and manage turf slot availability</p>
      </div>

      {/* Turf selector */}
      <div className="flex flex-wrap gap-2">
        {turfs.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTurf(t)}
            className={`text-sm px-4 py-2.5 rounded-xl font-medium transition-all ${selectedTurf === t ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-white/5 border border-white/8 text-white/40 hover:text-white"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Week navigation */}
      <div className="flex items-center gap-3">
        <button onClick={() => setDateOffset(d => d - 7)} className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white transition-colors">
          <ChevronLeft size={16} />
        </button>
        <span className="text-base text-white/60 font-medium">
          {formatDate(dates[0])} — {formatDate(dates[6])}
        </span>
        <button onClick={() => setDateOffset(d => d + 7)} className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slot grid */}
      <div className="bg-white/3 border border-white/6 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5">
          <h2 className="text-base font-semibold">{selectedTurf} — Slot Grid</h2>
        </div>

        {/* Header: dates */}
        <div className="grid grid-cols-8 border-b border-white/5 text-xs text-white/35">
          <div className="px-4 py-3 font-medium">Time</div>
          {dates.map((d) => (
            <div key={d.toISOString()} className="px-2 py-3 text-center font-medium">
              {formatDate(d)}
            </div>
          ))}
        </div>

        {/* Rows: hours */}
        <div className="divide-y divide-white/4 max-h-[480px] overflow-y-auto">
          {hours.map((hour, hi) => (
            <div key={hour} className="grid grid-cols-8 hover:bg-white/1">
              <div className="px-4 py-3 text-sm text-white/40 font-medium">{hour}</div>
              {dates.map((d, di) => {
                const isBooked = booked.includes(hi) && (di === 0 || di === 1 || di === 4);
                const isToday = di === 0;
                return (
                  <div key={di} className="px-1.5 py-2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-full h-8 rounded-md text-xs flex items-center justify-center font-semibold cursor-pointer transition-all ${
                        isBooked
                          ? "bg-red-500/25 text-red-400 hover:bg-red-500/35"
                          : "bg-green-500/15 text-green-400 hover:bg-green-500/25"
                      } ${isToday ? "ring-1 ring-white/10" : ""}`}
                    >
                      {isBooked ? "✕" : "✓"}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm text-white/40">
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-green-500/25 inline-block" /> Available</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-red-500/25 inline-block" /> Booked</span>
      </div>
    </div>
  );
}
