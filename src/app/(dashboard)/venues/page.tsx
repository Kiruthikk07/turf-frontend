"use client";

import { motion } from "framer-motion";
import { Plus, MapPin, Building2, ChevronRight } from "lucide-react";

const venues = [
  {
    id: "V001", name: "Prime Sports Arena", city: "Chennai", locations: [
      { id: "L001", name: "Velachery Branch", address: "45 Velachery Main Rd, Chennai", turfs: 3, status: "active" },
      { id: "L002", name: "OMR Branch", address: "12 Old Mahabalipuram Rd, Chennai", turfs: 2, status: "active" },
    ],
  },
  {
    id: "V002", name: "City Sports Complex", city: "Chennai", locations: [
      { id: "L003", name: "Anna Nagar Branch", address: "7 Anna Nagar 2nd Ave, Chennai", turfs: 3, status: "active" },
    ],
  },
];

export default function VenuesPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">Venues</h1>
          <p className="text-white/40 text-sm mt-0.5">Manage your brands and locations</p>
        </div>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={14} /> Add Venue
        </button>
      </div>

      <div className="space-y-4">
        {venues.map((venue, i) => (
          <motion.div
            key={venue.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/3 border border-white/6 rounded-2xl overflow-hidden"
          >
            {/* Venue header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Building2 size={16} className="text-green-400" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white/90">{venue.name}</h2>
                  <p className="text-[10px] text-white/35">{venue.city} · {venue.locations.length} location{venue.locations.length > 1 ? "s" : ""}</p>
                </div>
              </div>
              <button className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1">
                Edit <ChevronRight size={12} />
              </button>
            </div>

            {/* Locations */}
            <div className="divide-y divide-white/4">
              {venue.locations.map((loc) => (
                <div key={loc.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-white/2 transition-colors">
                  <div className="flex items-start gap-3">
                    <MapPin size={13} className="text-white/30 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-white/70">{loc.name}</p>
                      <p className="text-[10px] text-white/30">{loc.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs font-semibold text-white/60">{loc.turfs} turfs</p>
                      <span className="text-[10px] text-green-400 font-semibold">{loc.status}</span>
                    </div>
                    <button className="text-xs text-white/30 hover:text-green-400 transition-colors">
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="px-5 py-3">
                <button className="text-xs text-white/30 hover:text-green-400 flex items-center gap-1.5 transition-colors">
                  <Plus size={12} /> Add location
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
