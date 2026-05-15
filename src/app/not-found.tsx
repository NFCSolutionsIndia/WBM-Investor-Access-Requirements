"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--c-bg)] pt-20 transition-colors duration-300">
      <div className="text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-9xl font-black text-[var(--c-lime)] mb-4 tracking-tighter"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-black text-[var(--c-fg)] uppercase tracking-tight mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--c-fg2)] mb-10 max-w-md mx-auto font-medium"
        >
          The resource you are looking for might have been moved, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            href="/" 
            className="bg-[var(--c-lime)] text-black px-10 py-4 rounded-[4px] hover:bg-white transition-all font-black uppercase tracking-widest text-xs inline-block"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
