"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PixelBlast from '@/components/ui/backgrounds/PixelBlast';
import Button from '@/components/ui/Button';

interface ActionPageProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

const ActionPage = ({ title, subtitle, ctaText, ctaHref }: ActionPageProps) => {
  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
        <PixelBlast pixelSize={10} color="#839470" patternDensity={0.4} speed={0.2} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <h1 className="text-3xl md:text-[64px] font-black text-[var(--c-fg)] mb-6 uppercase tracking-tighter leading-none">{title}</h1>
        <p className="text-xl text-[var(--c-fg2)] mb-10 font-medium">{subtitle}</p>
        <Button href={ctaHref || "/contact"} size="lg">{ctaText || "Get Started"}</Button>
      </motion.div>
    </div>
  );
};

export default ActionPage;
