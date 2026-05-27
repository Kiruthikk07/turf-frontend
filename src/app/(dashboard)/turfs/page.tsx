"use client";

import { motion } from "framer-motion";
import { Plus, MapPin, Clock, Users, MoreVertical } from "lucide-react";

const turfs = [
  { id: "T001", name: "Football Turf A", venue: "Prime Sports Arena", location: "Velachery, Chennai", sports: ["Football"], capacity: 10, slotDuration: 60, pricePerHour: 800, status: "active", occupancy: 87 },
  { id: "T002", name: "Football Turf B", venue: "Prime Sports Arena", location: "Velachery, Chennai", sports: ["Football"], capacity: 10, slotDuration: 60, pricePerHour: 900, status: "active", occupancy: 74 },
  { id: "T003", name: "Badminton Court 1", venue: "Prime Sports Arena", location: "Velachery, Chennai", sports: ["Badminton"], capacity: 4, slotDuration: 60, pricePerHour: 400, status: "active", occupancy: 91 },
  { id: "T004", name: "Badminton Court 2", venue: "City Sports Complex", location: "Anna Nagar, Chennai", sports: ["Badminton"], capacity: 4, slotDuration: 60, pricePerHour: 400, status: "active", occupancy: 65 },
  { id: "T005", name: "Cricket Net", venue: "City Sports Complex", location: "Anna Nagar, Chennai", sports: ["Cricket"], capacity: 6, slotDuration: 60, pricePerHour: 600, status: "active", occupancy: 55 },
  { id: "T006", name: "Tennis Court", venue: "City Sports Complex", location: "Anna Nagar, Chennai", sports: ["Tennis"], capacity: 4, slotDuration: 60, pricePerHour: 500, status: "maintenance", occupancy: 0 },
];

const sportEmoji: Record<string, string> = {
  Football: "⚽", Badminton: "🏸", Cricket: "🏏", Tennis: "🎾", Basketball: "🏀",
};

export default function TurfsPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">Turfs</h1>
          <p className="text-white/40 text-sm mt-0.5">{turfs.length} turfs across all venues</p>
        </div>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={14} /> Add Turf
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {turfs.map((turf, i) => (
          <motion.div
            key={turf.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -3 }}
            className="bg-white/3 border border-white/6 hover:border-white/10 rounded-2xl p-5 flex flex-col gap-4 cursor-default transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{sportEmoji[turf.sports[0]] ?? "🏟️"}</span>
                  <h3 className="text-sm font-bold text-white/90">{turf.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-white/35">
                  <MapPin size={10} /> {turf.location}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${turf.status === "active" ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>
                  {turf.status}
                </span>
                <button className="text-white/30 hover:text-white/60 transition-colors">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>

            {/* Occupancy bar */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-white/35">Today's Occupancy</span>
                <span className="text-[10px] font-semibold text-white/60">{turf.occupancy}%</span>
              </div>
              <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${turf.occupancy}%` }}
                  transition={{ delay: i * 0.07 + 0.3, duration: 0.6 }}
                  className={`h-full rounded-full ${turf.occupancy > 80 ? "bg-green-500" : turf.occupancy > 50 ? "bg-yellow-500" : "bg-white/30"}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
              <div>
                <p className="text-[10px] text-white/30 mb-0.5">Price</p>
                <p className="text-xs font-semibold text-white/70">₹{turf.pricePerHour}/hr</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 mb-0.5">Capacity</p>
                <p className="text-xs font-semibold text-white/70">{turf.capacity} players</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 mb-0.5">Slot</p>
                <p className="text-xs font-semibold text-white/70">{turf.slotDuration} min</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
