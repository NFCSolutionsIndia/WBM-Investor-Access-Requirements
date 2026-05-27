"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { motion, AnimatePresence } from 'framer-motion';

const WBM_LOCS = [
  { id: "usa", lat: 28.6604, lng: -93.9698, name: "Houston", full: "Houston, USA" },
  { id: "austin", lat: 31.6672, lng: -99.6431, name: "Austin", full: "Austin, USA" },
  { id: "michigan", lat: 42.3314, lng: -83.0458, name: "Michigan", full: "Michigan, USA" },
  { id: "nevada", lat: 39.5296, lng: -119.8138, name: "Nevada", full: "Nevada, USA" },
  { id: "mexico", lat: 19.4326, lng: -99.1332, name: "Mexico City", full: "Mexico City, Mexico" },
  { id: "uae", lat: 25.7895, lng: 55.9432, name: "Ras al-Khaimah", full: "Ras al-Khaimah, UAE" },
  { id: "hyderabad", lat: 17.3850, lng: 78.4867, name: "Hyderabad", full: "Hyderabad, India" },
  { id: "odisha", lat: 20.2961, lng: 85.8245, name: "Bhubaneswar", full: "Bhubaneswar (Odisha)" },
  { id: "sa", lat: -26.2041, lng: 28.0473, name: "Johannesburg", full: "Johannesburg, SA" }
];

function GlobeInstance({ 
  externalHoveredId, 
  externalHoverSource,
  onGlobeHover,
  locations
}: { 
  externalHoveredId: string | null, 
  externalHoverSource: 'card' | 'globe' | null,
  onGlobeHover: (id: string | null) => void,
  locations: any[]
}) {
  const { scene, raycaster, mouse, camera } = useThree();
  const [internalHoveredId, setInternalHoveredId] = useState<string | null>(null);
  
  const activeHoverId = externalHoveredId || internalHoveredId;
  const activeHoverSource = externalHoveredId ? externalHoverSource : (internalHoveredId ? 'globe' : null);

  const pointsData = useMemo(() => WBM_LOCS.map(loc => ({
    id: loc.id,
    lat: loc.lat,
    lng: loc.lng,
    size: loc.id === activeHoverId ? 2.8 : 1.2,
    color: loc.id === activeHoverId ? '#ffffff' : '#839470'
  })), [activeHoverId]);

  const labelsData = useMemo(() => WBM_LOCS.map(loc => ({
    id: loc.id,
    lat: loc.lat,
    lng: loc.lng,
    text: loc.name.split(',')[0],
    color: '#ffffff',
    size: loc.id === activeHoverId ? 4.0 : 1.8,
    dotRadius: loc.id === activeHoverId ? 1.0 : 0.5
  })), [activeHoverId]);

  const arcsData = useMemo(() => {
    const arcs = [];
    for (let i = 0; i < WBM_LOCS.length; i++) {
      for (let j = i + 1; j < WBM_LOCS.length; j++) {
        arcs.push({
          startLat: WBM_LOCS[i].lat,
          startLng: WBM_LOCS[i].lng,
          endLat: WBM_LOCS[j].lat,
          endLng: WBM_LOCS[j].lng,
          color: ['#839470', '#ffffff']
        });
      }
    }
    return arcs;
  }, []);

  const globe = useMemo(() => {
    try {
      const GlobeConstructor = typeof ThreeGlobe === 'function' ? ThreeGlobe : (ThreeGlobe as any).default;
      return new GlobeConstructor();
    } catch (e) {
      console.error("Failed to initialize ThreeGlobe:", e);
      return null;
    }
  }, []);

  useEffect(() => {
    if (!globe) return;

    globe
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .pointsData(pointsData)
      .pointAltitude(0.02)
      .pointColor('color')
      .pointRadius('size')
      .pointsTransitionDuration(400)
      .labelsData(labelsData)
      .labelText('text')
      .labelSize('size')
      .labelColor('color')
      .labelDotRadius('dotRadius')
      .labelAltitude(0.05)
      .labelsTransitionDuration(400)
      .arcsData(arcsData)
      .arcColor('color')
      .arcAltitude(0.25)
      .arcDashLength(0.5)
      .arcDashGap(2)
      .arcDashAnimateTime(1500)
      .arcStroke(0.8);

    scene.add(globe);

    return () => {
      scene.remove(globe);
    };
  }, [scene, globe, pointsData, labelsData, arcsData]);

  const lastRaycastTime = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const [isOccluded, setIsOccluded] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const activeLoc = WBM_LOCS.find(loc => loc.id === activeHoverId);
  const locData = locations.find(l => l.id === activeHoverId);

  const activeCoords = useMemo(() => {
    if (!activeLoc || !globe) return null;
    return globe.getCoords(activeLoc.lat, activeLoc.lng, 0.08);
  }, [activeLoc, globe]);

  useEffect(() => {
    setIsOccluded(false);
  }, [activeHoverId]);

  useFrame((state) => {
    if (!globe || isScrolling.current) return;
    
    const now = state.clock.getElapsedTime() * 1000;
    if (now - lastRaycastTime.current >= 150) {
      lastRaycastTime.current = now;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([globe], true);
      
      let foundId: string | null = null;
      for (const intersect of intersects) {
        const obj = intersect.object;
        const data = (obj as any).__data;
        if (data && data.id) {
          foundId = data.id;
          break;
        }
      }

      if (foundId !== internalHoveredId) {
        setInternalHoveredId(foundId);
        onGlobeHover(foundId);
      }
    }

    if (activeCoords) {
      const px = activeCoords.x;
      const py = activeCoords.y;
      const pz = activeCoords.z;
      const cx = state.camera.position.x;
      const cy = state.camera.position.y;
      const cz = state.camera.position.z;
      
      const dot = px * (cx - px) + py * (cy - py) + pz * (cz - pz);
      const visible = dot > 0;
      
      if (isOccluded === visible) {
        setIsOccluded(!visible);
      }
    }

    if (activeCoords && !isOccluded && popupRef.current && arrowRef.current) {
      const rect = popupRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const margin = 16;

      let shift = 0;
      if (rect.left < margin) {
        shift = margin - rect.left;
      } else if (rect.right > viewportWidth - margin) {
        shift = viewportWidth - margin - rect.right;
      }

      popupRef.current.style.transform = `translateX(${shift}px)`;
      arrowRef.current.style.transform = `translateX(calc(-50% - ${shift}px)) rotate(45deg)`;
    }
  });

  return (
    <AnimatePresence>
      {activeCoords && !isOccluded && locData && activeHoverSource === 'globe' && (
        <Html
          position={[activeCoords.x, activeCoords.y, activeCoords.z]}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 100
          }}
        >
          <div className="pointer-events-none" style={{ position: 'absolute', transform: 'translate(-50%, 12px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 5 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none"
            >
              <div 
                ref={popupRef}
                className="w-[280px] sm:w-[320px] max-w-[calc(100vw-32px)] rounded-[10px] p-4 md:p-5 shadow-2xl border backdrop-blur-2xl bg-[#080c10]/98 border-white/20 relative overflow-hidden text-left pointer-events-none"
                style={{ transform: 'translateX(0px)', transition: 'transform 0.1s ease-out' }}
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${locData.color}, transparent)` }} />
                
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sans font-black text-[9px] md:text-[10px] uppercase tracking-widest text-white/50">{locData.country}</span>
                  <span className="font-sans font-bold text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ color: locData.color, background: `${locData.color}15`, border: `1px solid ${locData.color}40` }}>
                    {locData.status}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-sans font-black tracking-tight mb-1 text-white">{locData.city}</h3>
                <p className="font-sans text-[10px] md:text-[11px] leading-relaxed mb-4 text-white/60">{locData.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg p-2 border border-white/10 bg-white/5 text-center">
                    <div className="font-sans text-[8px] uppercase tracking-widest mb-0.5 text-white/40">Footprint</div>
                    <div className="font-sans font-bold text-[9px] md:text-[10px] text-white/90">{locData.footprint}</div>
                  </div>
                  <div className="rounded-lg p-2 border border-white/10 bg-white/5 text-center">
                    <div className="font-sans text-[8px] uppercase tracking-widest mb-0.5 text-white/40">Capacity</div>
                    <div className="font-sans font-bold text-[9px] md:text-[10px] text-white/90">{locData.capacity}</div>
                  </div>
                </div>
                
                <div 
                  ref={arrowRef}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#080c10] border-l border-t border-white/20 rotate-45"
                  style={{ transform: 'translateX(-50%) rotate(45deg)', transition: 'transform 0.1s ease-out' }}
                />
              </div>
            </motion.div>
          </div>
        </Html>
      )}
    </AnimatePresence>
  );
}

export default function FootprintGlobe({ 
  hoveredId = null, 
  hoverSource = null,
  onHoverChange,
  locations = []
}: { 
  hoveredId?: string | null, 
  hoverSource?: 'card' | 'globe' | null,
  onHoverChange?: (state: { id: string, source: 'globe' } | null) => void,
  locations?: any[]
}) {
  const [mounted, setMounted] = useState(false);
  const [isHoveringGlobePoint, setIsHoveringGlobePoint] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Rotation is paused if either an external ID is hovered (Legend Card) 
  // or a point on the globe is directly hovered.
  const isRotationPaused = !!hoveredId || isHoveringGlobePoint;

  return (
    <section className="relative w-full h-[450px] md:h-[650px] bg-transparent overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[#839470]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full h-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 320]} />
          <ambientLight intensity={3} />
          <directionalLight position={[100, 100, 100]} intensity={2} />
          <pointLight position={[-100, -100, -100]} intensity={1} color="#839470" />
          
          <GlobeInstance 
            externalHoveredId={hoveredId} 
            externalHoverSource={hoverSource}
            onGlobeHover={(id) => {
              setIsHoveringGlobePoint(!!id);
              if (onHoverChange) {
                onHoverChange(id ? { id, source: 'globe' } : null);
              }
            }} 
            locations={locations}
          />
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            autoRotate={!isRotationPaused} 
            autoRotateSpeed={0.8} 
          />
        </Canvas>
      </div>
    </section>
  );
}
