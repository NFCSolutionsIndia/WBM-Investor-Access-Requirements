"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "hover" | "text" | "drag" | "view";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState("");

  // Outer ring — slow, springy
  const ox = useMotionValue(-200);
  const oy = useMotionValue(-200);
  const sx = useSpring(ox, { stiffness: 80, damping: 14, mass: 0.6 });
  const sy = useSpring(oy, { stiffness: 80, damping: 14, mass: 0.6 });

  // Inner dot — instant
  const dx = useMotionValue(-200);
  const dy = useMotionValue(-200);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      ox.set(e.clientX);
      oy.set(e.clientY);
      dx.set(e.clientX);
      dy.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const btn = el.closest("button, a");
      const drag = el.closest("[data-cursor='drag']");
      const view = el.closest("[data-cursor='view']");
      const txt = el.closest("p, h1, h2, h3, h4, span, li");

      if (drag) { setMode("drag"); setLabel("DRAG"); }
      else if (view) { setMode("view"); setLabel("VIEW"); }
      else if (btn) { setMode("hover"); setLabel((btn as HTMLElement).dataset?.cursor || ""); }
      else if (txt) { setMode("text"); setLabel(""); }
      else { setMode("default"); setLabel(""); }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [ox, oy, dx, dy, visible]);

  if (!visible) return null;

  const ringSize = {
    default: 36,
    hover: 64,
    text: 4,
    drag: 72,
    view: 80,
  }[mode];

  const ringColor = {
    default: "var(--c-highlight)",
    hover: "var(--c-highlight)",
    text: "var(--c-fg)",
    drag: "var(--c-orange)",
    view: "var(--c-ice)",
  }[mode];

  const dotSize = mode === "text" ? 0 : mode === "hover" ? 6 : 8;

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            borderColor: ringColor,
            opacity: mode === "text" ? 0 : 1,
            rotate: mode === "drag" ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="rounded-full border-2 flex items-center justify-center"
        >
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[9px] font-sans font-black uppercase tracking-widest"
              style={{ color: ringColor }}
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner dot — instant tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: dx, y: dy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: dotSize,
            height: dotSize,
            backgroundColor: ringColor,
            scale: mode === "hover" ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full"
        />
      </motion.div>

      {/* Subtle glow trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99990]"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: ringSize + 40,
            height: ringSize + 40,
            backgroundColor: ringColor,
            opacity: mode === "default" ? 0.04 : 0.06,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="rounded-full blur-2xl"
        />
      </motion.div>
    </>
  );
}
