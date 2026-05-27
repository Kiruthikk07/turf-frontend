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
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black">Venues</h1>
          <p className="text-white/40 text-base mt-1">Manage your brands and locations</p>
        </div>
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
          <Plus size={16} /> Add Venue
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
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Building2 size={18} className="text-green-400" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white/90">{venue.name}</h2>
                  <p className="text-xs text-white/35">{venue.city} · {venue.locations.length} location{venue.locations.length > 1 ? "s" : ""}</p>
                </div>
              </div>
              <button className="text-sm text-green-400 hover:text-green-300 flex items-center gap-1">
                Edit <ChevronRight size={14} />
              </button>
            </div>

            {/* Locations */}
            <div className="divide-y divide-white/4">
              {venue.locations.map((loc) => (
                <div key={loc.id} className="flex items-center justify-between px-6 py-4 hover:bg-white/2 transition-colors">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-white/30 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white/70">{loc.name}</p>
                      <p className="text-xs text-white/30">{loc.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-white/60">{loc.turfs} turfs</p>
                      <span className="text-xs text-green-400 font-semibold">{loc.status}</span>
                    </div>
                    <button className="text-white/30 hover:text-green-400 transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="px-6 py-3">
                <button className="text-sm text-white/30 hover:text-green-400 flex items-center gap-1.5 transition-colors">
                  <Plus size={14} /> Add location
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
