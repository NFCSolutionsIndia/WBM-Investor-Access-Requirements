"use client";

import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

const WBM_LOCS = [
  { id: "hyderabad", lat: 17.3850, lng: 78.4867, name: "Hyderabad", full: "Hyderabad, India" },
  { id: "odisha", lat: 20.2961, lng: 85.8245, name: "Bhubaneswar", full: "Bhubaneswar (Odisha)" },
  { id: "uae", lat: 25.7895, lng: 55.9432, name: "Ras al-Khaimah", full: "Ras al-Khaimah, UAE" },
  { id: "sa", lat: -26.2041, lng: 28.0473, name: "Johannesburg", full: "Johannesburg, SA" },
  { id: "usa", lat: 29.7604, lng: -95.3698, name: "Houston", full: "Houston, USA" }
];

function GlobeInstance({ 
  externalHoveredId, 
  onGlobeHover 
}: { 
  externalHoveredId: string | null, 
  onGlobeHover: (id: string | null) => void 
}) {
  const { scene, raycaster, mouse, camera } = useThree();
  const [internalHoveredId, setInternalHoveredId] = useState<string | null>(null);
  
  const activeHoverId = externalHoveredId || internalHoveredId;

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
      .arcDashLength(0.5)
      .arcDashGap(2)
      .arcDashAnimateTime(1500)
      .arcStroke(0.8);

    scene.add(globe);

    return () => {
      scene.remove(globe);
    };
  }, [scene, globe, pointsData, labelsData, arcsData]);

  useFrame(() => {
    if (!globe) return;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    
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
  });

  return null;
}

export default function FootprintGlobe({ 
  hoveredId = null, 
  onHoverChange 
}: { 
  hoveredId?: string | null, 
  onHoverChange?: (id: string | null) => void 
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
          <PerspectiveCamera makeDefault position={[0, 0, 280]} />
          <ambientLight intensity={3} />
          <directionalLight position={[100, 100, 100]} intensity={2} />
          <pointLight position={[-100, -100, -100]} intensity={1} color="#839470" />
          
          <GlobeInstance 
            externalHoveredId={hoveredId} 
            onGlobeHover={(id) => {
              setIsHoveringGlobePoint(!!id);
              if (onHoverChange) onHoverChange(id);
            }} 
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
