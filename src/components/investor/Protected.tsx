"use client";

import { useState, useEffect } from "react";
import { isAuthenticated } from "@/lib/auth";
import { Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ProtectedProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const Protected = ({ children, fallback }: ProtectedProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    setIsAuth(isAuthenticated());
    setChecking(false);
  }, []);

  if (checking) return null;

  if (isAuth) {
    return <>{children}</>;
  }

  return fallback ? (
    <>{fallback}</>
  ) : (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative w-full max-w-md mx-auto bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] p-10 text-center shadow-2xl"
    >
      <div className="w-16 h-16 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-6 border border-[var(--c-lime)]/20 shadow-[0_0_30px_rgba(139,195,74,0.1)]">
        <Lock size={32} />
      </div>
      <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">Investor Access Restricted</h2>
      <p className="text-xs text-[var(--c-fg2)] leading-relaxed mb-8 uppercase tracking-widest opacity-60">
        Please log in to your investor account to view this confidential content.
      </p>
      <a 
        href="/WBM/investor/login"
        className="block w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all text-center"
      >
        Investor Login
      </a>
    </motion.div>
  );
};
