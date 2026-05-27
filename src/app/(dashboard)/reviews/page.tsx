"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: "R001", player: "Arjun Nair", turf: "Football A", venue: "Prime Sports", rating: 5, comment: "Amazing turf, well maintained. Will come again!", date: "2026-05-26", verified: true },
  { id: "R002", player: "Priya Menon", turf: "Badminton 1", venue: "Prime Sports", rating: 4, comment: "Good court, lighting could be better in the evenings.", date: "2026-05-25", verified: true },
  { id: "R003", player: "Ravi Kumar", turf: "Cricket Net", venue: "City Complex", rating: 5, comment: "Best cricket net in Chennai! Booking was super easy.", date: "2026-05-24", verified: true },
  { id: "R004", player: "Sneha Roy", turf: "Football B", venue: "Prime Sports", rating: 3, comment: "Decent but the changing room needs cleaning.", date: "2026-05-23", verified: false },
  { id: "R005", player: "Kiran Das", turf: "Badminton 2", venue: "City Complex", rating: 4, comment: "Nice court, friendly staff. Slightly expensive.", date: "2026-05-22", verified: true },
  { id: "R006", player: "Amal Raj", turf: "Football A", venue: "Prime Sports", rating: 5, comment: "Perfect turf for a morning game. Highly recommend.", date: "2026-05-21", verified: true },
];

const turfSummary = [
  { turf: "Football A", avg: 4.8, total: 48 },
  { turf: "Football B", avg: 4.2, total: 31 },
  { turf: "Badminton 1", avg: 4.5, total: 27 },
  { turf: "Badminton 2", avg: 4.1, total: 22 },
  { turf: "Cricket Net", avg: 4.9, total: 18 },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={13} className={s <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/15"} />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="space-y-6 w-full">
      <div>
        <h1 className="text-3xl font-black">Reviews</h1>
        <p className="text-white/40 text-base mt-1">Player feedback across all turfs</p>
      </div>

      {/* Overall + per-turf summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Overall rating */}
        <div className="bg-white/3 border border-white/6 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <p className="text-6xl font-black text-yellow-400 mb-3">{avgRating}</p>
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-white/35">{reviews.length} reviews total</p>
        </div>

        {/* Per turf */}
        <div className="lg:col-span-2 bg-white/3 border border-white/6 rounded-2xl p-6 space-y-4">
          <p className="text-sm font-semibold text-white/40 mb-2">Rating by Turf</p>
          {turfSummary.map((t) => (
            <div key={t.turf} className="flex items-center gap-3">
              <span className="text-sm text-white/50 w-28 flex-shrink-0">{t.turf}</span>
              <div className="flex-1 h-2 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(t.avg / 5) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-yellow-400 rounded-full"
                />
              </div>
              <span className="text-sm font-bold text-yellow-400 w-8">{t.avg}</span>
              <span className="text-xs text-white/25 w-20">{t.total} reviews</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-3">
        {reviews.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white/3 border border-white/6 rounded-2xl p-5 flex flex-col sm:flex-row gap-4"
          >
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xs font-black text-white flex-shrink-0">
                {r.player.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-white/80">{r.player}</p>
                  {r.verified && (
                    <span className="text-xs bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full font-medium">verified</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Stars rating={r.rating} />
                  <span className="text-xs text-white/30">{r.turf} · {r.venue}</span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">&quot;{r.comment}&quot;</p>
              </div>
            </div>
            <p className="text-xs text-white/25 flex-shrink-0">{r.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
