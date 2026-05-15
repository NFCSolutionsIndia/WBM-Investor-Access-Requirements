"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera, RoundedBox, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const FLOW_SPEED = 0.45;
const COOL_COLOR = new THREE.Color("#00E5FF"); // Vibrant Ice Blue
const HOT_COLOR = new THREE.Color("#FF6B35");  // Vibrant Brand Orange

const ResponsiveScene = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  useFrame(() => {
    if (groupRef.current) {
      const s = Math.min(viewport.width / 8, 1.2);
      groupRef.current.scale.set(s, s, s);
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const CoolantSegment = ({ curve, offset }: { curve: THREE.CatmullRomCurve3, offset: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * FLOW_SPEED;
    const t = (offset + time) % 1;
    
    if (meshRef.current) {
      const pos = curve.getPointAt(t);
      meshRef.current.position.copy(pos);
      
      const nextT = (t + 0.01) % 1;
      meshRef.current.lookAt(curve.getPointAt(nextT));

      if (matRef.current) {
        // Color transition: Hot when passing through servers (approx t=0.25 to 0.5)
        // Cool when returning (approx t=0.75 to 0.1)
        if (t > 0.2 && t < 0.6) {
          matRef.current.color.lerp(HOT_COLOR, 0.15);
          matRef.current.emissive.lerp(HOT_COLOR, 0.15);
        } else {
          matRef.current.color.lerp(COOL_COLOR, 0.15);
          matRef.current.emissive.lerp(COOL_COLOR, 0.15);
        }
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <capsuleGeometry args={[0.06, 0.2, 4, 8]} />
      <meshStandardMaterial ref={matRef} emissiveIntensity={4} transparent opacity={1} />
    </mesh>
  );
};

const SystemInfrastructure = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.8, 0, 0),      
      new THREE.Vector3(-2.8, 1.8, 0),    
      new THREE.Vector3(0, 1.8, 0),       
      new THREE.Vector3(2.8, 1.8, 0),     
      new THREE.Vector3(2.8, 0, 0),       
      new THREE.Vector3(2.8, -1.8, 0),    
      new THREE.Vector3(0, -1.8, 0),      
      new THREE.Vector3(-2.8, -1.8, 0),   
      new THREE.Vector3(-2.8, 0, 0),      
    ], true);
  }, []);

  const serverGroupRef = useRef<THREE.Group>(null);
  const exchangerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (serverGroupRef.current) {
      const pulse = 0.5 + Math.sin(time * 3) * 0.5;
      serverGroupRef.current.children.forEach((child: any) => {
        if (child.material) child.material.emissiveIntensity = pulse;
      });
    }
    if (exchangerRef.current) {
      const mat = exchangerRef.current.material as any;
      mat.emissiveIntensity = 1 + Math.sin(time * 4) * 0.5;
    }
  });

  return (
    <group>
      {/* 1. Server Rack Hub */}
      <group ref={serverGroupRef} position={[-2.8, 0.5, 0]}>
        {[0.5, 0, -0.5].map((y, i) => (
          <RoundedBox key={i} args={[1.2, 0.35, 1.2]} radius={0.05} position={[0, y, 0]}>
            <meshStandardMaterial 
              color="#222" 
              metalness={0.8} 
              roughness={0.2} 
              emissive={HOT_COLOR} 
              emissiveIntensity={0.5} 
            />
          </RoundedBox>
        ))}
        {/* Glow Panel */}
        <mesh position={[0, 0, 0.61]}>
          <planeGeometry args={[0.9, 1.4]} />
          <meshBasicMaterial color={HOT_COLOR} transparent opacity={0.1} />
        </mesh>
      </group>

      {/* 2. Heat Exchanger */}
      <mesh ref={exchangerRef} position={[2.8, 0.5, 0]}>
        <boxGeometry args={[1.2, 1.5, 1.2]} />
        <meshStandardMaterial 
          color="#111" 
          metalness={1} 
          roughness={0} 
          emissive={COOL_COLOR} 
          emissiveIntensity={1} 
          wireframe
        />
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={i} position={[0, 0.6 - i * 0.13, 0]}>
            <boxGeometry args={[1, 0.03, 1]} />
            <meshStandardMaterial color={COOL_COLOR} transparent opacity={0.6} />
          </mesh>
        ))}
      </mesh>

      {/* 3. High-Contrast Pipelines */}
      <mesh>
        <tubeGeometry args={[curve, 100, 0.12, 12, true]} />
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.25} 
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* 4. Vibrant Flow Particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <CoolantSegment key={i} curve={curve} offset={i / 18} />
      ))}

      {/* 5. Central Label Anchor */}
      <Float speed={2} rotationIntensity={0.2}>
         <mesh position={[0, 0, 0]}>
           <octahedronGeometry args={[0.4]} />
           <meshStandardMaterial color="#839470" emissive="#839470" emissiveIntensity={1} />
         </mesh>
      </Float>
    </group>
  );
};

export default function LiquidCoolingAnimation() {
  return (
    <div className="w-full h-full relative overflow-visible flex items-center justify-center">
      {/* Background radial glow to improve contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)]" />

      <div className="w-full h-[500px] md:h-full relative overflow-visible">
        <Canvas dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
          <PerspectiveCamera makeDefault position={[0, 0.5, 9]} fov={40} />
          
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
          <spotLight position={[-10, 5, 10]} angle={0.25} penumbra={1} intensity={2} color="#ffffff" />
          
          <Environment preset="night" />

          <ResponsiveScene>
            <SystemInfrastructure />
            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={15} blur={2} far={4.5} />
          </ResponsiveScene>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={false} 
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      {/* Storytelling Labels with better visibility */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <div className="w-full h-full max-w-[800px] relative">
           {/* Step 1: Servers */}
           <div className="absolute top-[10%] sm:top-[20%] left-[2%] md:left-[5%] text-left">
              <div className="bg-white/90 backdrop-blur-xl border-l-4 border-[#FF6B35] p-3 sm:p-4 rounded-r-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                 <div className="text-[10px] sm:text-[12px] font-black text-gray-900 uppercase tracking-widest mb-1">Step 1: Thermal Load</div>
                 <div className="text-[8px] sm:text-[9px] text-[#FF6B35] font-black uppercase tracking-widest">Liquid absorbs heat energy</div>
              </div>
           </div>

           {/* Step 2: Exchanger */}
           <div className="absolute top-[28%] sm:top-[20%] right-[2%] md:right-[5%] text-right">
              <div className="bg-white/90 backdrop-blur-xl border-r-4 border-[#00E5FF] p-3 sm:p-4 rounded-l-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                 <div className="text-[10px] sm:text-[12px] font-black text-gray-900 uppercase tracking-widest mb-1">Step 2: Heat Exchange</div>
                 <div className="text-[8px] sm:text-[9px] text-[#00E5FF] font-black uppercase tracking-widest">Energy dissipated + recovered</div>
              </div>
           </div>

           {/* Step 3: Return */}
           <div className="absolute bottom-[2%] sm:bottom-[10%] left-1/2 -translate-x-1/2 text-center">
              <div className="bg-[#111] backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                 <div className="text-[12px] font-black text-white uppercase tracking-widest mb-1">Closed-Loop Recovery</div>
                 <div className="text-[9px] text-[var(--c-lime)] font-black uppercase tracking-widest">Cooled liquid returns for re-use</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
