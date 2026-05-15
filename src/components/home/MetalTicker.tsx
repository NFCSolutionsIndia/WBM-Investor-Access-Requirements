"use client";

import { motion } from "framer-motion";

const metals = [
  { symbol: "Cu", name: "Copper" },
  { symbol: "Pd", name: "Palladium" },
  { symbol: "Li", name: "Lithium" },
  { symbol: "Co", name: "Cobalt" },
  { symbol: "Ni", name: "Nickel" },
  { symbol: "Al", name: "Aluminium" },
  { symbol: "Pb", name: "Lead" },
  { symbol: "Dy", name: "Dysprosium" },
  { symbol: "Nd", name: "Neodymium" },
  { symbol: "Ti", name: "Titanium" },
  { symbol: "Au", name: "Gold" },
  { symbol: "Ag", name: "Silver" },
];

const TickerItem = ({ symbol, name }: { symbol: string; name: string }) => (
  <div className="flex items-center gap-3 mx-8 flex-shrink-0">
    <div
      className="w-10 h-10 rounded-[10px] flex items-center justify-center font-sans font-black text-sm"
      style={{ background: "var(--color-lime)", color: "var(--c-bg)" }}
    >
      {symbol}
    </div>
    <span className="font-sans font-bold text-sm uppercase tracking-widest text-[var(--c-fg2)]">
      {name}
    </span>
  </div>
);

export default function MetalTicker() {
  const doubled = [...metals, ...metals];

  return (
    <section className="py-5 border-b border-[var(--c-border)] bg-[var(--c-bg2)] overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--c-bg2)] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--c-bg2)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((m, i) => (
          <TickerItem key={`${m.symbol}-${i}`} symbol={m.symbol} name={m.name} />
        ))}
      </motion.div>
    </section>
  );
}
