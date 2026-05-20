"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { InvestorGuard } from '@/components/investor/InvestorGuard';

const PDFViewer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <InvestorGuard>
      <div className="fixed inset-0 bg-black z-[200] flex flex-col">
        {/* Viewer Header */}
        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)]">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h2 className="text-white text-xs font-bold uppercase tracking-widest">Confidential Pitch Deck</h2>
              <p className="text-[var(--c-fg2)] text-[10px] uppercase tracking-widest">Confidential & Proprietary</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
              <Lock size={12} className="text-red-500" />
              <span className="text-red-500 text-[9px] font-black uppercase tracking-widest">Downloads Disabled</span>
            </div>
            <button
              onClick={() => window.location.href = '/WBM-Investor-Access-Requirements/for-you/investor/'}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Viewer Content */}
        <div className="flex-1 relative bg-[#1a1a1a] overflow-hidden">
          {/* Protection Overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none border-[20px] border-black/20"
            style={{
              backgroundImage: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%)',
              mixBlendMode: 'multiply'
            }}
          />

          <iframe
            src="/WBM-Investor-Access-Requirements/media/PitchDeskForWBM.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-full border-none select-none"
            title="WBM Pitch Deck"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-[0.03] rotate-[-30deg]">
            <span className="text-[10vw] font-black text-white uppercase tracking-[0.5em] whitespace-nowrap">
              CONFIDENTIAL • WBM
            </span>
          </div>
        </div>
      </div>
    </InvestorGuard>
  );
};

export default PDFViewer;
