"use client";

export const dynamic = "force-dynamic";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Loader2, ArrowRight, ArrowLeft } from "lucide-react";

type Step = "email" | "otp";

export default function LoginPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const supabase = createClient();

  // ── Step 1: send OTP ──────────────────────────────────
  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: true },
      });
      if (error) throw error;
      setStep("otp");
      startCooldown();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send code");
    } finally {
      setLoading(false);
    }
  }

  // ── Step 2: verify OTP ────────────────────────────────
  async function handleVerifyOtp() {
    const code = otp.join("");
    if (code.length < 6) return;
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: "email",
      });
      if (error) throw error;
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Invalid or expired code");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  }

  // ── OTP input handling ────────────────────────────────
  function handleOtpChange(value: string, index: number) {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value.slice(-1);
    setOtp(updated);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
    if (updated.every((d) => d !== "")) {
      // auto-verify when all 6 filled
      setTimeout(() => {
        const code = updated.join("");
        verifyCode(code);
      }, 100);
    }
  }

  function handleOtpKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const updated = [...otp];
    pasted.split("").forEach((char, i) => { updated[i] = char; });
    setOtp(updated);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
    if (pasted.length === 6) setTimeout(() => verifyCode(pasted), 100);
  }

  async function verifyCode(code: string) {
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.auth.verifyOtp({ email, token: code, type: "email" });
      if (error) throw error;
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Invalid or expired code");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  }

  function startCooldown() {
    setResendCooldown(30);
    const timer = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) { clearInterval(timer); return 0; }
        return c - 1;
      });
    }, 1000);
  }

  async function handleResend() {
    if (resendCooldown > 0) return;
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });
      if (error) throw error;
      setOtp(["", "", "", "", "", ""]);
      startCooldown();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to resend");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d14] flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-gradient-to-br from-green-900/40 via-[#0d1a10] to-[#0d0d14] p-12 border-r border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/8 rounded-full blur-[80px]" />

        <div className="flex items-center gap-2.5 relative z-10">
          <Image src="/Logo.png" alt="TurfPro" width={36} height={36} className="rounded-lg" />
          <span className="text-xl font-black">Turf<span className="text-green-400">Pro</span></span>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-black leading-tight mb-4">
            Manage your turf
            <br />
            <span className="gradient-text">like a pro.</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-10">
            Slots, bookings, payments, and analytics — all in one place for turf owners.
          </p>
          <div className="space-y-4">
            {["📅 Real-time slot booking", "💰 Revenue tracking & reports", "🔔 Auto WhatsApp reminders"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-sm text-white/60">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/20 relative z-10">© {new Date().getFullYear()} TurfPro</p>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <Image src="/Logo.png" alt="TurfPro" width={30} height={30} className="rounded-md" />
            <span className="font-black text-lg">Turf<span className="text-green-400">Pro</span></span>
          </div>

          <AnimatePresence mode="wait">
            {step === "email" ? (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-2xl font-black mb-1">Welcome</h1>
                <p className="text-white/40 text-sm mb-8">Enter your email to receive a 6-digit code</p>

                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block font-medium">Email address</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        autoFocus
                        className="w-full bg-white/5 border border-white/10 focus:border-green-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-2 rounded-lg">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-60 text-black font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 size={15} className="animate-spin" /> : <ArrowRight size={15} />}
                    Send Code
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => { setStep("email"); setError(""); setOtp(["","","","","",""]); }}
                  className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/60 mb-6 transition-colors"
                >
                  <ArrowLeft size={13} /> Back
                </button>

                <h1 className="text-2xl font-black mb-1">Check your email</h1>
                <p className="text-white/40 text-sm mb-2">
                  We sent a 6-digit code to
                </p>
                <p className="text-green-400 text-sm font-semibold mb-8">{email}</p>

                {/* 6-digit OTP inputs */}
                <div className="flex gap-2.5 justify-center mb-6" onPaste={handleOtpPaste}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { inputRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, i)}
                      onKeyDown={(e) => handleOtpKeyDown(e, i)}
                      autoFocus={i === 0}
                      className={`w-12 h-14 text-center text-xl font-black rounded-xl border transition-all outline-none bg-white/5 text-white ${
                        digit
                          ? "border-green-500/60 bg-green-500/8"
                          : "border-white/10 focus:border-green-500/40"
                      }`}
                    />
                  ))}
                </div>

                {error && (
                  <p className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-2 rounded-lg mb-4 text-center">{error}</p>
                )}

                {/* Loading state */}
                {loading && (
                  <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-4">
                    <Loader2 size={15} className="animate-spin" />
                    Verifying…
                  </div>
                )}

                {/* Resend */}
                <p className="text-center text-xs text-white/35 mt-4">
                  Didn't receive the code?{" "}
                  <button
                    onClick={handleResend}
                    disabled={resendCooldown > 0 || loading}
                    className="text-green-400 hover:text-green-300 font-semibold disabled:text-white/20 disabled:cursor-not-allowed transition-colors"
                  >
                    {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend"}
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
