"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircuitBoard, Battery, Magnet, Database } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

/* ─── Data & Connections ───────────────────────────────────────────────────── */
const OFFERINGS = [
  { id: "ewaste",  label: "E-Waste",         short: "EW",    accent: "#839470", icon: <CircuitBoard size={20} />, desc: "PCBs, chips, laptops, servers — extracted under one roof." },
  { id: "bwaste",  label: "B-Waste",         short: "BW",    accent: "#9F7AEA", icon: <Battery size={20} />, desc: "Lithium-ion only. No acid-filled. Closed-loop chemistry." },
  { id: "ree",     label: "Rare Earth Magnets", short: "REE",   accent: "#F6AD55", icon: <Magnet size={20} />, desc: "Rare-earth magnets from MRIs, wind turbines, decommissioned units." },
  { id: "aidc",    label: "AI Data Centres", short: "AI-DC", accent: "#F687B3", icon: <Database size={20} />, desc: "Co-located, multi-tenant, 6-layer encryption, 100% uptime." },
];


const REVENUES = [
  { id: "tipping",   num: "01", title: "Tipping Fees",        desc: "Government-paid intake fees. Revenue earned the moment feedstock arrives." },
  { id: "crushed",   num: "02", title: "Crushed Powders",     desc: "Aluminium powder → aluminium mfrs. Plastic powder → plastic mfrs." },
  { id: "minerals",  num: "03", title: "Extracted Minerals",  desc: "The core 11 — sold to OEM off-take partners worldwide." },
  { id: "carbon",    num: "04", title: "Carbon Credits",      desc: "Landfill diversion + on-site renewables. Verified, auditable, tradeable." },
  { id: "leasing",   num: "05", title: "Data Centre Leasing", desc: "15-year leases. 100% uptime. 6-layer encryption. NVIDIA-ready." },
];

const MINERALS = [
  { id: "au", symbol: "Au", name: "Gold",       group: "precious" },
  { id: "ag", symbol: "Ag", name: "Silver",     group: "precious" },
  { id: "cu", symbol: "Cu", name: "Copper",     group: "precious" },
  { id: "pd", symbol: "Pd", name: "Palladium",  group: "precious" },
  { id: "li", symbol: "Li", name: "Lithium",    group: "critical" },
  { id: "co", symbol: "Co", name: "Cobalt",     group: "critical" },
  { id: "ni", symbol: "Ni", name: "Nickel",     group: "critical" },
  { id: "al", symbol: "Al", name: "Aluminium",  group: "critical" },
  { id: "pb", symbol: "Pb", name: "Lead",       group: "critical" },
  { id: "ti", symbol: "Ti", name: "Titanium",   group: "critical" },
  { id: "dy", symbol: "Dy", name: "Dysprosium", group: "ree" },
  { id: "nd", symbol: "Nd", name: "Neodymium",  group: "ree" },
];


/* Mandatory Data Mapping */
const RELATIONSHIPS = [
  { offering: 'ewaste', revenues: ['tipping', 'minerals'], minerals: ['au', 'ag', 'cu', 'pd'], color: '#839470' },
  { offering: 'bwaste', revenues: ['crushed', 'minerals'], minerals: ['li', 'co', 'ni'], color: '#9F7AEA' },
  { offering: 'ree',    revenues: ['minerals'],          minerals: ['dy', 'nd'],        color: '#F6AD55' },
  { offering: 'aidc',   revenues: ['carbon', 'leasing'], minerals: ['al', 'ti', 'pb'], color: '#F687B3' },
];

/* ─── Helper to compute active sets ──────────────────────────────────────── */
function getActive(hover: { id: string, type: 'offering' | 'revenue' | 'mineral' } | null) {
  if (!hover) return { offs: new Set<string>(), revs: new Set<string>(), mins: new Set<string>(), color: '#839470' };
  
  const offs = new Set<string>();
  const revs = new Set<string>();
  const mins = new Set<string>();
  let color = '#839470';

  RELATIONSHIPS.forEach(rel => {
    const isOffMatch = hover.type === 'offering' && hover.id === rel.offering;
    const isRevMatch = hover.type === 'revenue' && rel.revenues.includes(hover.id);
    const isMinMatch = hover.type === 'mineral' && rel.minerals.includes(hover.id);

    if (isOffMatch || isRevMatch || isMinMatch) {
      offs.add(rel.offering);
      rel.revenues.forEach(r => revs.add(r));
      rel.minerals.forEach(m => mins.add(m));
      if (isOffMatch || (isRevMatch && offs.size === 1) || (isMinMatch && offs.size === 1)) {
        color = rel.color;
      }
    }
  });

  return { offs, revs, mins, color };
}


/* ─── Animated SVG curved connection lines ────────────────────────────────── */
interface LineProps { from: DOMRect | null; to: DOMRect | null; color: string; container: DOMRect | null; isVertical?: boolean; }
function CurvedLine({ from, to, color, container, isVertical }: LineProps) {
  if (!from || !to || !container) return null;

  let x1, y1, x2, y2, cx1, cy1, cx2, cy2;

  if (isVertical) {
    // Top-to-bottom connection
    x1 = from.left + from.width / 2 - container.left;
    y1 = from.bottom - container.top;
    x2 = to.left + to.width / 2 - container.left;
    y2 = to.top - container.top;
    cx1 = x1;
    cy1 = y1 + (y2 - y1) * 0.5;
    cx2 = x2;
    cy2 = y1 + (y2 - y1) * 0.5;
  } else {
    // Left-to-right connection
    x1 = from.right - container.left;
    y1 = from.top + from.height / 2 - container.top;
    x2 = to.left - container.left;
    y2 = to.top + to.height / 2 - container.top;
    cx1 = x1 + (x2 - x1) * 0.4;
    cy1 = y1;
    cx2 = x1 + (x2 - x1) * 0.6;
    cy2 = y2;
  }

  const d = `M${x1},${y1} C${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
  return (
    <motion.path
      d={d} fill="none" stroke={color}
      strokeWidth="1.5" strokeLinecap="round"
      strokeOpacity="0.7"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    />
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */
export default function SystemModel4x5({ isDark = true }: { isDark?: boolean }) {
  const [hovered, setHovered] = useState<{ id: string, type: 'offering' | 'revenue' | 'mineral' } | null>(null);
  const { offs: activeOffs, revs: activeRevs, mins: activeMins, color: activeColor } = getActive(hovered);

  /* Refs for measuring elements (for SVG lines) */
  const containerRef  = useRef<HTMLDivElement>(null);

  const offeringRefs  = useRef<Record<string, HTMLDivElement | null>>({});
  const revenueRefs   = useRef<Record<string, HTMLDivElement | null>>({});
  const mineralRefs   = useRef<Record<string, HTMLDivElement | null>>({});
  const [rects, setRects] = useState<{ offerings: Record<string, DOMRect>; revenues: Record<string, DOMRect>; minerals: Record<string, DOMRect>; container: DOMRect | null }>({ offerings: {}, revenues: {}, minerals: {}, container: null });
  const [isVertical, setIsVertical] = useState(false);

  const measureRects = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const offerings: Record<string, DOMRect> = {};
    const revenues:  Record<string, DOMRect> = {};
    const minerals:  Record<string, DOMRect> = {};
    Object.entries(offeringRefs.current).forEach(([k, el]) => { if (el) offerings[k] = el.getBoundingClientRect(); });
    Object.entries(revenueRefs.current).forEach(([k, el])  => { if (el) revenues[k]  = el.getBoundingClientRect(); });
    Object.entries(mineralRefs.current).forEach(([k, el])  => { if (el) minerals[k]  = el.getBoundingClientRect(); });
    setRects({ offerings, revenues, minerals, container });
    setIsVertical(window.innerWidth < 1024);
  }, []);

  useLayoutEffect(() => {
    measureRects();
    window.addEventListener("resize", measureRects);
    return () => window.removeEventListener("resize", measureRects);
  }, [measureRects]);

  /* Active color for lines */
  const lineColor = activeColor;


  /* Opacity helpers */
  const offOp  = (id: string) => !hovered || activeOffs.has(id) ? 1 : 0.35;
  const revOp  = (id: string) => !hovered || activeRevs.has(id) ? 1 : 0.35;
  const minOp  = (id: string) => !hovered || activeMins.has(id) ? 1 : 0.35;


  /* Styles based on theme */
  const bg   = isDark ? "#0a0a0a" : "#F6F1E7";
  const card = isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.85)";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.09)";
  const fg   = isDark ? "#ffffff" : "#0a0a0a";
  const fg2  = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";
  const fg3  = isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.2)";

  const cardStyle = (opacity: number, glow?: boolean, accent?: string) => ({
    background: card,
    border: `1px solid ${glow && accent ? accent + "60" : border}`,
    borderRadius: 10,
    opacity,
    transition: "opacity 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease",
    boxShadow: glow && accent ? `0 0 18px ${accent}30` : isDark ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.07)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  });

  return (
    <section style={{ background: bg }} className="w-full py-10 relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full" style={{ border: `1px solid ${border}`, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)" }}>
            <div className="w-2 h-2 rounded-full bg-[#839470] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em]" style={{ color: fg2 }}>Our Model</span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-[clamp(32px,5vw,60px)]" style={{ color: fg }}>
            4 Offerings × 5 Revenue Streams.<br/>
            <span style={{ color: "#839470" }}>Same Roof. Same AI.</span>
          </h2>
          <p className="font-sans text-base mt-3 max-w-xl mx-auto" style={{ color: fg2 }}>
            Hover a node to see the connections. The lines between offerings, revenue, and minerals are revenue every single-stream competitor leaves on the table.
          </p>
        </ScrollReveal>
      </div>


      {/* 3-column interactive grid */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">

        {/* SVG overlay for connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
          <AnimatePresence>
            {hovered && RELATIONSHIPS.map(rel => {
              const showForRel = (hovered.type === 'offering' && hovered.id === rel.offering) ||
                                 (hovered.type === 'revenue' && rel.revenues.includes(hovered.id)) ||
                                 (hovered.type === 'mineral' && rel.minerals.includes(hovered.id));
              
              if (!showForRel) return null;

              return (
                <g key={rel.offering}>
                  {rel.revenues.map(revId => (
                    <CurvedLine
                      key={`off-${rel.offering}-${revId}`}
                      from={rects.offerings[rel.offering] ?? null}
                      to={rects.revenues[revId] ?? null}
                      color={rel.color}
                      container={rects.container ?? null}
                      isVertical={isVertical}
                    />
                  ))}
                  {rel.revenues.map(revId =>
                    rel.minerals.map(minId => (
                      <CurvedLine
                        key={`rev-${revId}-${minId}`}
                        from={rects.revenues[revId] ?? null}
                        to={rects.minerals[minId] ?? null}
                        color={rel.color}
                        container={rects.container ?? null}
                        isVertical={isVertical}
                      />
                    ))
                  )}
                </g>
              );
            })}
          </AnimatePresence>
        </svg>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-20">

          {/* ── LEFT: Offerings ── */}
          <div>
            <div className="mb-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em]" style={{ color: isDark ? "#839470" : "#1A4D2E" }}>4 Offerings</span>
              <p className="font-sans text-xs mt-1" style={{ color: fg3 }}>Three waste streams. One AI orchestration layer.</p>
            </div>
            <div className="flex flex-col gap-3">
              {OFFERINGS.map(off => (
                <motion.div
                  key={off.id}
                  ref={el => { offeringRefs.current[off.id] = el; }}
                  style={cardStyle(offOp(off.id), activeOffs.has(off.id), off.accent)}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 cursor-pointer select-none"
                  onMouseEnter={() => { setHovered({ id: off.id, type: 'offering' }); measureRects(); }}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => {
                    if (hovered?.id === off.id) setHovered(null);
                    else { setHovered({ id: off.id, type: 'offering' }); measureRects(); }
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ 
                        background: activeOffs.has(off.id) ? off.accent + "20" : "rgba(255,255,255,0.05)", 
                        border: `1px solid ${activeOffs.has(off.id) ? off.accent + "40" : "transparent"}`,
                        color: activeOffs.has(off.id) ? off.accent : fg2
                      }}>
                      {off.icon}
                    </div>
                    <span className="font-sans font-black text-base transition-colors" style={{ color: activeOffs.has(off.id) ? off.accent : fg }}>{off.label}</span>
                  </div>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: fg2 }}>{off.desc}</p>
                </motion.div>

              ))}
            </div>
          </div>

          {/* ── MIDDLE: Revenue Streams ── */}
          <div>
            <div className="mb-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em]" style={{ color: isDark ? "#839470" : "#1A4D2E" }}>5 Revenue Streams</span>
              <p className="font-sans text-xs mt-1" style={{ color: fg3 }}>Each offering compounds across multiple lines.</p>
            </div>
            <div className="flex flex-col gap-3">
              {REVENUES.map(rev => (
                <motion.div
                  key={rev.id}
                  ref={el => { revenueRefs.current[rev.id] = el; }}
                  style={cardStyle(revOp(rev.id), activeRevs.has(rev.id), activeColor)}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 cursor-pointer select-none"
                  onMouseEnter={() => { setHovered({ id: rev.id, type: 'revenue' }); measureRects(); }}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => {
                    if (hovered?.id === rev.id) setHovered(null);
                    else { setHovered({ id: rev.id, type: 'revenue' }); measureRects(); }
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-sans font-black text-base transition-colors" style={{ color: activeRevs.has(rev.id) ? activeColor : fg }}>{rev.title}</span>
                      <p className="font-sans text-xs leading-relaxed mt-1" style={{ color: fg2 }}>{rev.desc}</p>
                    </div>
                    <span className="font-sans font-black text-xs flex-shrink-0" style={{ color: fg3 }}>{rev.num}</span>
                  </div>
                </motion.div>

              ))}
            </div>
          </div>

          {/* ── RIGHT: Minerals ── */}
          <div>
            <div className="mb-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em]" style={{ color: isDark ? "#839470" : "#1A4D2E" }}>11 Minerals</span>
              <p className="font-sans text-xs mt-1" style={{ color: fg3 }}>From 118 — these are the ones that matter.</p>
            </div>

            {/* Precious Metals */}
            <div className="mb-5">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2 block" style={{ color: fg3 }}>Precious Metals</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {MINERALS.filter(m => m.group === "precious").map(m => (
                  <motion.div key={m.id} ref={el => { mineralRefs.current[m.id] = el; }}
                    style={cardStyle(minOp(m.id), activeMins.has(m.id), activeColor)}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center cursor-pointer select-none"
                    onMouseEnter={() => { setHovered({ id: m.id, type: 'mineral' }); measureRects(); }}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => {
                      if (hovered?.id === m.id) setHovered(null);
                      else { setHovered({ id: m.id, type: 'mineral' }); measureRects(); }
                    }}
                  >
                    <div className="font-sans font-black text-xl transition-colors" style={{ color: activeMins.has(m.id) ? activeColor : fg }}>{m.symbol}</div>
                    <div className="font-sans text-[9px] mt-0.5" style={{ color: fg3 }}>{m.name}</div>
                  </motion.div>

                ))}
              </div>
            </div>

            {/* Critical Minerals */}
            <div className="mb-5">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2 block" style={{ color: fg3 }}>Critical Minerals</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {MINERALS.filter(m => m.group === "critical").map(m => (
                  <motion.div key={m.id} ref={el => { mineralRefs.current[m.id] = el; }}
                    style={cardStyle(minOp(m.id), activeMins.has(m.id), activeColor)}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center cursor-pointer select-none"
                    onMouseEnter={() => { setHovered({ id: m.id, type: 'mineral' }); measureRects(); }}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => {
                      if (hovered?.id === m.id) setHovered(null);
                      else { setHovered({ id: m.id, type: 'mineral' }); measureRects(); }
                    }}
                  >
                    <div className="font-sans font-black text-xl transition-colors" style={{ color: activeMins.has(m.id) ? activeColor : fg }}>{m.symbol}</div>
                    <div className="font-sans text-[9px] mt-0.5" style={{ color: fg3 }}>{m.name}</div>
                  </motion.div>

                ))}
              </div>
            </div>

            {/* REE */}
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2 block" style={{ color: fg3 }}>Rare-Earth Elements</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {MINERALS.filter(m => m.group === "ree").map(m => (
                  <motion.div key={m.id} ref={el => { mineralRefs.current[m.id] = el; }}
                    style={cardStyle(minOp(m.id), activeMins.has(m.id), activeColor)}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center cursor-pointer select-none"
                    onMouseEnter={() => { setHovered({ id: m.id, type: 'mineral' }); measureRects(); }}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => {
                      if (hovered?.id === m.id) setHovered(null);
                      else { setHovered({ id: m.id, type: 'mineral' }); measureRects(); }
                    }}
                  >
                    <div className="font-sans font-black text-xl transition-colors" style={{ color: activeMins.has(m.id) ? activeColor : fg }}>{m.symbol}</div>
                    <div className="font-sans text-[9px] mt-0.5" style={{ color: fg3 }}>{m.name}</div>
                  </motion.div>

                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
