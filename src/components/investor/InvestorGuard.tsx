"use client";

import { useEffect, useState } from "react";
import { isAuthenticated, getSession } from "@/lib/auth";
import { useSecurity, detectDevTools } from "@/lib/security";
import { motion } from "framer-motion";
import { ShieldCheck, AlertCircle, Lock } from "lucide-react";
import { SecurityToast } from "./SecurityToast";

interface InvestorGuardProps {
  children: React.ReactNode;
}

export const InvestorGuard = ({ children }: InvestorGuardProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useSecurity(isAuthorized);

  useEffect(() => {
    const check = () => {
      const session = getSession();
      if (!session) {
        window.location.href = "/WBM/investor/login";
      } else {
        setIsAuthorized(true);
      }
      setChecking(false);
    };

    check();

    // Re-check periodically for session timeout
    const interval = setInterval(check, 60000); // every minute

    // DevTools detection
    const cleanupDevTools = detectDevTools(() => {
      setIsDevToolsOpen(true);
    });

    return () => {
      clearInterval(interval);
      if (cleanupDevTools) cleanupDevTools();
    };
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 rounded-full border-2 border-[var(--c-lime)] border-t-transparent animate-spin"></div>
        <p className="text-[var(--c-lime)] text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Authenticating Session</p>
      </div>
    );
  }

  if (isDevToolsOpen) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-md bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] p-12 text-center shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mx-auto mb-8 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-4">Security Violation</h2>
          <p className="text-xs text-[var(--c-fg2)] leading-relaxed mb-10 uppercase tracking-widest opacity-60">
            Developer Tools are strictly prohibited on confidential investor pages. 
            Please close the tools and refresh the page to continue.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-lg uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Refresh Page
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div 
        id="security-blur-overlay"
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-8 hidden select-none pointer-events-none"
      >
        <div className="w-20 h-20 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-6 border border-[var(--c-lime)]/20 shadow-[0_0_50px_rgba(139,195,74,0.2)]">
          <ShieldCheck size={40} />
        </div>
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">Content Protected</h2>
        <p className="text-xs text-[var(--c-fg2)] uppercase tracking-widest opacity-60 max-w-xs">
          Confidential data is restricted. Screen capturing is prohibited.
        </p>
      </div>
      <div id="main-content-wrapper" className="transition-all duration-300">
        {children}
      </div>
      <SecurityToast />
    </>
  );
};
