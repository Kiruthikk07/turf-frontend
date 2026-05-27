"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-0 bg-[#0d0d14] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/30 via-[#0d1a10] to-[#0d0d14] border border-green-500/15">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-green-500/20 blur-[60px] rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 items-end">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 md:p-14 flex flex-col gap-5 z-10"
            >
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1]">
                Ready to grow
                <br />
                your <span className="gradient-text">turf business?</span>
              </h2>
              <p className="text-white/40 text-sm">Free to start. No credit card needed.</p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-7 py-3.5 rounded-xl text-sm transition-all glow-green w-fit"
              >
                Start for Free
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex items-end justify-center h-[340px] md:h-[400px]"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-green-500/20 rounded-full blur-[60px]" />
              <Image
                src="/newcricketer.png"
                alt="Cricket player"
                width={340}
                height={400}
                className="relative z-10 object-contain h-full w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-8" />
    </section>
  );
}
