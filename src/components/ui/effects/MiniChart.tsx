"use client";

import { motion } from "framer-motion";

export default function MiniChart() {
  const points = [20, 40, 35, 50, 45, 60, 55, 70, 65, 80];
  const path = points.map((p, i) => `${i * 10},${100 - p}`).join(" L ");

  return (
    <div className="w-full mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
      <div className="flex justify-between items-center mb-4">
         <div className="flex flex-col">
            <span className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-1">Latency</span>
            <span className="text-[13px] font-black text-[var(--c-highlight)] tracking-tighter">0.8ms</span>
         </div>
         <div className="flex flex-col text-right">
            <span className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-1">Stability</span>
            <span className="text-[13px] font-black text-[var(--c-highlight)] tracking-tighter">99.99%</span>
         </div>
      </div>

      <div className="w-full h-12 relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* Vertical Grid Lines */}
          {[...Array(10)].map((_, i) => (
             <line 
               key={i} 
               x1={i * 10} y1="0" x2={i * 10} y2="100" 
               stroke="white" strokeWidth="0.5" strokeOpacity="0.05" 
             />
          ))}

          <motion.path
            d="M 0,80 Q 15,40 30,60 T 60,30 T 90,50 L 100,20"
            fill="none"
            stroke="var(--c-highlight)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M 0,80 Q 15,40 30,60 T 60,30 T 90,50 L 100,20 L 100,100 L 0,100 Z"
            fill="url(#gradient-telemetry)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
          />

          {/* Scanning Bar */}
          <motion.rect 
            width="1" height="100"
            fill="var(--c-highlight)"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [0, 100], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <defs>
            <linearGradient id="gradient-telemetry" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--c-highlight)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
