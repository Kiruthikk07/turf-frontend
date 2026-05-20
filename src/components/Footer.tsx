"use client";

import { motion } from "framer-motion";
import { Zap, Mail, Globe, Send, AtSign } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Dashboard", "Mobile App", "API Docs"],
  Company: ["About Us", "Blog", "Careers", "Press Kit"],
  Support: ["Help Center", "Contact Us", "Status Page", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

const socials = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: AtSign, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.02 }}>
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center glow-green">
                <Zap size={16} className="text-black fill-black" />
              </div>
              <span className="text-lg font-bold">
                Turf<span className="text-green-400">Pro</span>
              </span>
            </motion.div>
            <p className="text-sm text-white/40 leading-relaxed mb-5 max-w-[220px]">
              The all-in-one platform for modern turf management. Trusted by 2,400+ facilities.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-white/40 hover:text-green-400 hover:border-green-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-green-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} TurfPro. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-white/25">
            Made with
            <span className="text-green-500 mx-0.5">♥</span>
            for turf owners everywhere
          </div>
        </div>
      </div>
    </footer>
  );
}
