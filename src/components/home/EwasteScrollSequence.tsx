"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function EwasteScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 192; // 00001.png to 00192.png

  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  useEffect(() => {
    let loadedCount = 0;
    const loadImages = async () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(5, "0");
        img.src = `/WBM-Investor-Access-Requirements/media/E-waste_flow_animation/${frameNum}.png`;
        
        img.onload = () => {
          loadedCount++;
          setLoadedFrames(loadedCount);
          if (i === 1) {
            requestAnimationFrame(() => drawFrame(0));
          }
        };
        imagesRef.current[i - 1] = img;
      }
    };
    loadImages();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  const rectRef = useRef({ width: 0, height: 0 });

  const drawFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = imagesRef.current[index];
    if (!img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    let { width, height } = rectRef.current;
    
    if (width === 0 || height === 0) {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      rectRef.current = { width, height };
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }
    
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    
    const scale = Math.max(width / img.width, height / img.height);
    const x = (width / 2) - (img.width / 2) * scale;
    const y = (height / 2) - (img.height / 2) * scale;
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    return frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => drawFrame(Math.floor(latest)));
    });
  }, [frameIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      rectRef.current = { width: rect.width, height: rect.height };
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
      
      drawFrame(Math.floor(frameIndex.get()));
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-white">
      {loadedFrames < totalFrames && (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center z-50 pointer-events-none">
          <div className="text-[var(--c-fg)] text-sm opacity-50 font-mono tracking-widest uppercase">
            Loading Sequence [{Math.round((loadedFrames / totalFrames) * 100)}%]
          </div>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-contain mix-blend-normal"
        />

      </div>
    </div>
  );
}
