"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  onClick, 
  href,
  className = "", 
  variant = 'primary',
  showArrow = false,
  size = 'md',
  style,
  type = 'button'
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-4 text-[11px]",
    md: "h-12 px-6 text-[13px]",
    lg: "h-14 px-8 text-[15px]"
  };

  const arrowSize = size === 'sm' ? 10 : 12;
  const arrowBgSize = size === 'sm' ? "w-5 h-5" : "w-6 h-6";

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={style}
      className={`relative overflow-hidden rounded-[10px] group border border-[var(--c-border)] ${variant === 'primary' ? 'bg-[var(--c-fg)] shadow-[0_10px_20px_rgba(0,0,0,0.1)]' : 'bg-[var(--c-bg)] shadow-sm'} flex items-center justify-center transition-all duration-300 ${sizeClasses[size]} ${className}`}
    >
      {/* Hover background slide */}
      <div className="absolute inset-0 w-full h-full bg-[var(--c-highlight)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 border border-[var(--c-highlight)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]" />
      
      <div className="relative z-10 flex items-center gap-3">
        <span className={`font-bold uppercase tracking-[0.15em] ${variant === 'primary' ? 'text-[var(--c-bg)]' : 'text-[var(--c-fg)]'} group-hover:text-[var(--c-bg)] transition-colors duration-300`}>
          {children}
        </span>
        
        {showArrow && (
          <motion.div 
            className={`${arrowBgSize} rounded-full bg-[var(--c-fg)]/10 flex items-center justify-center group-hover:bg-[var(--c-bg)]/20 transition-all duration-300 group-hover:translate-x-1`}
          >
            <svg width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${variant === 'primary' ? 'text-[var(--c-bg)]' : 'text-[var(--c-fg)]'} group-hover:text-[var(--c-bg)]`}>
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.div>
        )}
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </motion.button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
