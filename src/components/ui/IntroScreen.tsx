"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setShouldRender(true);
    setIsVisible(true);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 1000);
    }, 4000); 

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Technical Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

          {/* Logo Container */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
              className="relative z-10 mb-10"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src="/WBM/WBMLogoWhite.svg"
                  alt="WBM Logo"
                  width={400}
                  height={160}
                  className="w-[180px] md:w-[400px] h-auto"
                  priority
                />
                
                {/* Light Sweep Animation */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] z-20 pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-[180px] md:w-[300px] h-[2px] bg-white/10 rounded-full relative overflow-hidden mb-4">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-[var(--c-highlight)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
              {/* Glow follow */}
              <motion.div 
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-[var(--c-highlight)] to-transparent opacity-50"
                animate={{ left: `${progress - 10}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/30"
            >
              <span>Initializing</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LiBERT Engine
              </motion.span>
              <span className="text-[var(--c-highlight)]">{progress}%</span>
            </motion.div>
          </div>

          {/* Floating Ambient Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  y: [null, `${Math.random() * -50}%`],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3, 
                  repeat: Infinity, 
                  delay: Math.random() * 4 
                }}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
