"use client";

import { motion } from "framer-motion";
import { Zap, Mail, Globe, Send, AtSign } from "lucide-react";
import Image from "next/image";

const links = {
  Product: ["Features", "Pricing", "Dashboard", "API Docs"],
  Company: ["About", "Blog", "Careers"],
  Support: ["Help Center", "Contact", "Status"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a href="#" className="flex items-center gap-2 mb-3" whileHover={{ scale: 1.02 }}>
              <Image src="/Logo.png" alt="TurfPro" width={28} height={28} className="rounded-md" />
              <span className="font-bold">Turf<span className="text-green-400">Pro</span></span>
            </motion.a>
            <p className="text-xs text-white/35 leading-relaxed mb-4 max-w-[180px]">
              The simple way to manage and grow your turf business.
            </p>
            <div className="flex gap-2">
              {[Send, AtSign, Globe, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-7 h-7 rounded-lg glass border border-white/8 flex items-center justify-center text-white/35 hover:text-green-400 hover:border-green-500/25 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-3">{cat}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-white/30 hover:text-green-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">© {new Date().getFullYear()} TurfPro. All rights reserved.</p>
          <p className="text-xs text-white/20">Made with <span className="text-green-500">♥</span> for turf owners</p>
        </div>
      </div>
    </footer>
  );
}
