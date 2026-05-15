"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
  onClick?: () => void;
}

export default function TiltCard({ 
  children, 
  className = "", 
  intensity = 10, 
  glowColor = "rgba(199,245,62,0.15)",
  onClick 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rx = useSpring(rawX, { stiffness: 200, damping: 20 });
  const ry = useSpring(rawY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(ry, [-1, 1], [intensity, -intensity]);
  const rotateY = useTransform(rx, [-1, 1], [-intensity, intensity]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    rawX.set(x);
    rawY.set(y);
    
    // Set absolute mouse position for glow
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`relative group card-theme ${className}`}
    >
      <div className="relative z-[2] h-full">{children}</div>
    </motion.div>
  );
}
