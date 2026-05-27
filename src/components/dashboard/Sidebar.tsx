"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, CalendarCheck, Clock, Building2,
  MapPin, CreditCard, Star, LogOut, ChevronLeft, Menu, Loader2, Sun, Moon,
} from "lucide-react";
import { createClient } from "@/lib/supabase";
import { useTheme } from "@/lib/theme";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Bookings", href: "/bookings", icon: CalendarCheck },
  { label: "Slots", href: "/slots", icon: Clock },
  { label: "Turfs", href: "/turfs", icon: MapPin },
  { label: "Venues", href: "/venues", icon: Building2 },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Reviews", href: "/reviews", icon: Star },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const { theme, toggle: toggleTheme } = useTheme();

  async function handleLogout() {
    setSigningOut(true);
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch {
      setSigningOut(false);
    }
  }

  function renderContent() {
    return (
      <div className="flex flex-col h-full">
        {/* ── Header: logo + collapse toggle ── */}
        <div className={`flex items-center border-b border-white/5 py-4 ${collapsed ? "justify-center px-3 gap-0" : "justify-between px-4 gap-2"}`}>
          <div className="flex items-center gap-2.5 min-w-0 overflow-hidden">
            <Image src="/Logo.png" alt="TurfPro" width={30} height={30} className="rounded-md flex-shrink-0" />
            {!collapsed && (
              <span className="font-black text-base truncate">
                Turf<span className="text-green-400">Pro</span>
              </span>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <ChevronLeft
              size={13}
              className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* ── Nav items ── */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-green-500/15 text-green-400 border border-green-500/20"
                    : "text-white/45 hover:text-white/85 hover:bg-white/5"
                } ${collapsed ? "justify-center px-0" : ""}`}
              >
                <Icon size={18} className="flex-shrink-0" />
                {!collapsed && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* ── Bottom: theme toggle + sign out ── */}
        <div className="px-2 pb-4 pt-3 border-t border-white/5 space-y-1">
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/45 hover:text-white/85 hover:bg-white/5 transition-all w-full ${collapsed ? "justify-center px-0" : ""}`}
          >
            {theme === "dark"
              ? <Sun size={18} className="flex-shrink-0" />
              : <Moon size={18} className="flex-shrink-0" />
            }
            {!collapsed && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
          </button>

          <button
            onClick={handleLogout}
            disabled={signingOut}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/45 hover:text-red-400 hover:bg-red-500/10 transition-all w-full disabled:opacity-50 disabled:cursor-not-allowed ${collapsed ? "justify-center px-0" : ""}`}
          >
            {signingOut
              ? <Loader2 size={18} className="animate-spin flex-shrink-0" />
              : <LogOut size={18} className="flex-shrink-0" />
            }
            {!collapsed && <span>{signingOut ? "Signing out…" : "Sign Out"}</span>}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        className={`sidebar-panel hidden lg:flex flex-col border-r border-white/5 transition-all duration-300 flex-shrink-0 ${
          collapsed ? "w-[60px]" : "w-56"
        }`}
      >
        {renderContent()}
      </aside>

      {/* ── Mobile toggle button ── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-9 h-9 bg-[#0d0d14] border border-white/10 rounded-xl flex items-center justify-center text-white/60"
      >
        <Menu size={18} />
      </button>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="sidebar-panel fixed left-0 top-0 bottom-0 w-56 border-r border-white/5 z-50 lg:hidden"
            >
              {renderContent()}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
