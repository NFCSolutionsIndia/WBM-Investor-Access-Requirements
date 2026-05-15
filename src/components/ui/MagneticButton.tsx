"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "lime" | "ghost" | "orange";
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  variant = "lime",
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 25 });
  const sy = useSpring(y, { stiffness: 350, damping: 25 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    lime: "bg-lime text-ink font-bold hover:shadow-[0_0_40px_rgba(199,245,62,0.5)] border-2 border-lime",
    ghost: "bg-transparent text-lime border-2 border-lime/40 hover:border-lime hover:shadow-[0_0_30px_rgba(199,245,62,0.2)]",
    orange: "bg-orange text-white font-bold hover:shadow-[0_0_40px_rgba(255,107,53,0.5)] border-2 border-orange",
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-sans tracking-wide transition-all duration-300 ${styles[variant]} ${className}`}
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === "lime"
            ? "radial-gradient(circle, rgba(199,245,62,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />
      {children}
    </motion.button>
  );
}
