"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  value: number | string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 2, className = "" }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  
  // Extract number and suffix (e.g., "98%" -> 98, "%")
  const numericValue = typeof value === "string" ? parseFloat(value.replace(/[^0-9.]/g, "")) : value;
  const suffix = typeof value === "string" ? value.replace(/[0-9.]/g, "") : "";
  const hasDecimal = typeof value === "string" && value.includes(".");
  
  const count = useMotionValue(0);
  const springValue = useSpring(count, {
    stiffness: 60,
    damping: 20,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      count.set(numericValue);
    }
  }, [isInView, count, numericValue]);

  // Fallback for mobile if scroll trigger is finicky
  useEffect(() => {
    const timer = setTimeout(() => {
      count.set(numericValue);
    }, 2000);
    return () => clearTimeout(timer);
  }, [count, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (hasDecimal) {
        setDisplayValue(latest.toFixed(1) + suffix);
      } else {
        setDisplayValue(Math.floor(latest).toLocaleString() + suffix);
      }
    });
  }, [springValue, suffix, hasDecimal]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
