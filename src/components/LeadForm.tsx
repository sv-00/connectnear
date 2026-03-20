"use client";

import { useState } from "react";

export function LeadForm() {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10) return;

    setState("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleaned }),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="animate-slide-up text-center space-y-3 py-2">
        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-base font-semibold text-white">We&apos;ve got your number</p>
        <p className="text-sm text-zinc-500">We&apos;ll reach out shortly. Talk soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-sm mx-auto">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500 select-none">+91</span>
        <input
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
          placeholder="Phone number"
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/40 transition-all"
          maxLength={10}
          required
        />
      </div>
      <button
        type="submit"
        disabled={state === "loading" || phone.replace(/\D/g, "").length < 10}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-sm font-medium text-white hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : "Request a callback"}
      </button>
      {state === "error" && (
        <p className="text-xs text-red-400 text-center">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
