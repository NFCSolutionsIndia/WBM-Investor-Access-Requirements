"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

export const SecurityToast = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleSecurityEvent = (e: any) => {
      if (e.detail && e.detail.message) {
        setMessage(e.detail.message);
        setVisible(true);
        setTimeout(() => setVisible(false), 5000);
      }
    };

    window.addEventListener("security-warning", handleSecurityEvent);
    return () => window.removeEventListener("security-warning", handleSecurityEvent);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] min-w-[320px] max-w-[90vw]"
        >
          <div className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
              <ShieldAlert size={20} />
            </div>
            <div className="flex-1">
              <p className="text-white text-[11px] font-bold uppercase tracking-widest leading-tight">Security Notice</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1 leading-relaxed">{message}</p>
            </div>
            <button 
              onClick={() => setVisible(false)}
              className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <motion.div 
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute bottom-0 left-4 right-12 h-[2px] bg-red-500/50 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const showSecurityToast = (message: string) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("security-warning", { detail: { message } });
    window.dispatchEvent(event);
  }
};
