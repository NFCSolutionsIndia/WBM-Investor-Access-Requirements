"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, Eye, EyeOff, Play, Smartphone } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

// Easing equations mapping
const easings: Record<string, (t: number) => number> = {
  linear: (t) => t,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
  easeOutBack: (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInOutElastic: (t) => {
    const c5 = (2 * Math.PI) / 4.5;
    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5
      ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
      : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
  }
};

interface ViewerParams {
  bgColor: string;
  toneMapping: string;
  exposure: number;
  ambientColor: string;
  ambientIntensity: number;
  dirColor: string;
  dirIntensity: number;
  dirX: number;
  dirY: number;
  dirZ: number;
  pointEnabled: boolean;
  pointColor: string;
  pointIntensity: number;
  explodeSpread: number;
  explodeDuration: number;
  explodeEasing: string;
  showGrid: boolean;
}

const DEFAULT_PARAMS: ViewerParams = {
  bgColor: "#09090b",
  toneMapping: "aces",
  exposure: 1.0,
  ambientColor: "#ffffff",
  ambientIntensity: 0.6,
  dirColor: "#ffffff",
  dirIntensity: 2.2,
  dirX: 3.0,
  dirY: 5.0,
  dirZ: 2.0,
  pointEnabled: true,
  pointColor: "#4488ff",
  pointIntensity: 3.0,
  explodeSpread: 25.0,
  explodeDuration: 1.2,
  explodeEasing: "easeInOutCubic",
  showGrid: true
};

const PRESETS = [
  {
    name: "Default (ACES)",
    config: {
      bgColor: "#09090b",
      toneMapping: "aces",
      exposure: 1.0,
      ambientColor: "#ffffff",
      ambientIntensity: 0.6,
      dirColor: "#ffffff",
      dirIntensity: 2.2,
      dirX: 3.0,
      dirY: 5.0,
      dirZ: 2.0,
      pointEnabled: true,
      pointColor: "#4488ff",
      pointIntensity: 3.0,
      explodeSpread: 25.0,
      explodeDuration: 1.2,
      explodeEasing: "easeInOutCubic",
      showGrid: true
    }
  },
  {
    name: "Cinematic Gold",
    config: {
      bgColor: "#0c0a09",
      toneMapping: "cineon",
      exposure: 1.1,
      ambientColor: "#ffedd5",
      ambientIntensity: 0.4,
      dirColor: "#eab308",
      dirIntensity: 3.0,
      dirX: -3.0,
      dirY: 6.0,
      dirZ: 3.0,
      pointEnabled: true,
      pointColor: "#f59e0b",
      pointIntensity: 4.0,
      explodeSpread: 35.0,
      explodeDuration: 1.4,
      explodeEasing: "easeOutBack",
      showGrid: true
    }
  },
  {
    name: "WBM Cyber Lime",
    config: {
      bgColor: "#050802",
      toneMapping: "agx",
      exposure: 0.9,
      ambientColor: "#f7fee7",
      ambientIntensity: 0.5,
      dirColor: "#c7f53e",
      dirIntensity: 3.5,
      dirX: 2.0,
      dirY: 5.0,
      dirZ: 1.0,
      pointEnabled: true,
      pointColor: "#c7f53e",
      pointIntensity: 4.5,
      explodeSpread: 30.0,
      explodeDuration: 1.5,
      explodeEasing: "easeInOutElastic",
      showGrid: false
    }
  },
  {
    name: "Neon Blueprint",
    config: {
      bgColor: "#030712",
      toneMapping: "reinhard",
      exposure: 1.0,
      ambientColor: "#dbeafe",
      ambientIntensity: 0.3,
      dirColor: "#3b82f6",
      dirIntensity: 2.0,
      dirX: 4.0,
      dirY: 4.0,
      dirZ: 4.0,
      pointEnabled: true,
      pointColor: "#06b6d4",
      pointIntensity: 5.0,
      explodeSpread: 25.0,
      explodeDuration: 1.0,
      explodeEasing: "easeInOutCubic",
      showGrid: true
    }
  }
];

interface ModelLayer {
  name: string;
  visible: boolean;
  layerIndex: number;
  groupNode: THREE.Object3D;
  originalPos: THREE.Vector3;
}

export default function MicrochipViewerSection() {
  const mountRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<boolean>(false);
  const pointerDownPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // State variables for params and models
  const [params, setParams] = useState<ViewerParams>(DEFAULT_PARAMS);
  const [layers, setLayers] = useState<ModelLayer[]>([]);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showPanel, setShowPanel] = useState<boolean>(true);
  
  // ThreeJS core objects saved in refs to update them dynamically
  const threeRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    ambientLight: THREE.AmbientLight;
    dirLight: THREE.DirectionalLight;
    pointLight: THREE.PointLight;
    grid: THREE.GridHelper;
    modelGroup: THREE.Group | null;
  } | null>(null);

  // Keep anim and transition variables in refs to run them smoothly in RAF
  const layersRef = useRef<ModelLayer[]>([]);
  const paramsRef = useRef<ViewerParams>(params);
  const isExplodedRef = useRef<boolean>(isExploded);
  
  const animStateRef = useRef<{
    active: boolean;
    startTime: number;
    from: number;
    to: number;
    current: number;
  }>({
    active: false,
    startTime: 0,
    from: 0,
    to: 0,
    current: 0
  });

  // Keep references synced
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  useEffect(() => {
    layersRef.current = layers;
  }, [layers]);

  useEffect(() => {
    isExplodedRef.current = isExploded;
  }, [isExploded]);

  // Hide parameters panel on mount on mobile, tablet, and small laptop screens (<= 1024px)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 1024) {
        const timer = setTimeout(() => {
          setShowPanel(false);
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Set preset handler
  const handlePresetSelect = (presetConfig: ViewerParams) => {
    setParams(presetConfig);
  };

  // Toggle single layer visibility
  const toggleLayerVisibility = (index: number) => {
    setLayers((prev) => {
      const updated = [...prev];
      const layer = { ...updated[index] };
      layer.visible = !layer.visible;
      
      // Toggle visibility on all children meshes
      layer.groupNode.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.visible = layer.visible;
        }
      });
      
      updated[index] = layer;
      return updated;
    });
  };

  const showAllLayers = () => {
    setLayers((prev) =>
      prev.map((layer) => {
        layer.groupNode.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.visible = true;
          }
        });
        return { ...layer, visible: true };
      })
    );
  };

  const hideAllLayers = () => {
    setLayers((prev) =>
      prev.map((layer) => {
        layer.groupNode.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.visible = false;
          }
        });
        return { ...layer, visible: false };
      })
    );
  };

  // Trigger explode transition
  const toggleExplode = useCallback(() => {
    const nextState = !isExplodedRef.current;
    setIsExploded(nextState);
    
    if (nextState) {
      setParams((prev) => ({
        ...prev,
        explodeSpread: 50.0
      }));
    }
    
    const anim = animStateRef.current;
    anim.from = anim.current;
    anim.to = nextState ? 1 : 0;
    anim.startTime = performance.now();
    anim.active = true;
  }, []);

  // Update light/render parameters without model reloading
  useEffect(() => {
    const three = threeRef.current;
    if (!three) return;

    const toneMappingMap: Record<string, THREE.ToneMapping> = {
      none: THREE.NoToneMapping,
      linear: THREE.LinearToneMapping,
      reinhard: THREE.ReinhardToneMapping,
      cineon: THREE.CineonToneMapping,
      aces: THREE.ACESFilmicToneMapping,
      agx: THREE.AgXToneMapping
    };

    three.renderer.toneMapping = toneMappingMap[params.toneMapping] || THREE.ACESFilmicToneMapping;
    three.renderer.toneMappingExposure = params.exposure;
    
    // Update ambient light
    three.ambientLight.color.set(params.ambientColor);
    three.ambientLight.intensity = params.ambientIntensity;
    
    // Update directional light
    three.dirLight.color.set(params.dirColor);
    three.dirLight.intensity = params.dirIntensity;
    three.dirLight.position.set(params.dirX, params.dirY, params.dirZ);
    
    // Update point light
    three.pointLight.visible = params.pointEnabled;
    three.pointLight.color.set(params.pointColor);
    three.pointLight.intensity = params.pointIntensity;
    
    // Update grid helper
    three.grid.visible = params.showGrid;
  }, [params]);

  // Main ThreeJS canvas loading
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isDestroyed = false;
    let animationFrameId = 0;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(paramsRef.current.bgColor);

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 100);
    camera.position.set(2.5, 2.5, 3.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = paramsRef.current.exposure;
    
    // Append to DOM
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 30;
    controls.minDistance = 1.5;
    
    // Lights
    const ambientLight = new THREE.AmbientLight(paramsRef.current.ambientColor, paramsRef.current.ambientIntensity);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(paramsRef.current.dirColor, paramsRef.current.dirIntensity);
    dirLight.position.set(paramsRef.current.dirX, paramsRef.current.dirY, paramsRef.current.dirZ);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(
      new THREE.Color(paramsRef.current.pointColor),
      paramsRef.current.pointIntensity,
      20
    );
    pointLight.position.set(0, 1.5, 0);
    pointLight.visible = paramsRef.current.pointEnabled;
    scene.add(pointLight);

    // Grid Helper
    const grid = new THREE.GridHelper(12, 24, 0x334155, 0x1e293b); // Slate grids
    grid.position.y = -0.5;
    scene.add(grid);

    // Save references
    threeRef.current = {
      renderer,
      scene,
      camera,
      controls,
      ambientLight,
      dirLight,
      pointLight,
      grid,
      modelGroup: null
    };

    // Load Model
    const loader = new GLTFLoader();
    // Prefixed path matching Next.js base path config
    const modelUrl = "/WBM-Investor-Access-Requirements/models/microchip/scene.gltf";

    loader.load(
      modelUrl,
      (gltf) => {
        if (isDestroyed) return;

        const model = gltf.scene;

        // Center the model in scene
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        
        // Offset model position so it centers around origin
        model.position.sub(center);
        
        // Place model resting just above the grid helper
        model.position.y = -center.y - 0.4;
        
        scene.add(model);

        // Remove any node containing "ground" in the name to match original design
        const groundNodes: THREE.Object3D[] = [];
        model.traverse((node) => {
          if (node.name && node.name.toLowerCase().includes("ground")) {
            groundNodes.push(node);
          }
        });
        groundNodes.forEach((node) => node.removeFromParent());

        // Group meshes into layers based on ancestor nodes
        const layerMap = new Map<string, { objects: THREE.Object3D[]; groupNode: THREE.Object3D }>();
        
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            let layerName = child.name;
            let targetGroup = child;
            let parent = child.parent;
            
            // Go up hierarchy to find a meaningful parent node, bypassing root node wrappers
            while (parent && parent !== model) {
              if (
                parent.name &&
                !parent.name.includes(".fbx") &&
                !parent.name.includes("Sketchfab") &&
                parent.name !== "RootNode"
              ) {
                layerName = parent.name;
                targetGroup = parent;
                break;
              }
              parent = parent.parent;
            }

            // Standardize name mapping
            const prettyName = layerName
              .replace(/_low.*/, "")
              .replace(/_/g, " ")
              .trim();

            if (!layerMap.has(prettyName)) {
              layerMap.set(prettyName, { objects: [], groupNode: targetGroup });
            }
            layerMap.get(prettyName)!.objects.push(child);
          }
        });

        // Compute local bounding centers for layers to sort them vertically
        const layerTempArray: { name: string; groupNode: THREE.Object3D; yCenter: number }[] = [];
        layerMap.forEach((val, name) => {
          const lBox = new THREE.Box3();
          val.objects.forEach((obj) => lBox.expandByObject(obj));
          const yCenter = (lBox.min.y + lBox.max.y) / 2;
          layerTempArray.push({ name, groupNode: val.groupNode, yCenter });
        });

        // Sort bottom to top
        layerTempArray.sort((a, b) => a.yCenter - b.yCenter);

        const totalLayers = layerTempArray.length;
        const mappedLayers: ModelLayer[] = layerTempArray.map((item, index) => ({
          name: item.name,
          visible: true,
          layerIndex: index - Math.floor(totalLayers / 2),
          groupNode: item.groupNode,
          originalPos: item.groupNode.position.clone()
        }));

        setLayers(mappedLayers);
        setLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadingProgress(Math.floor((xhr.loaded / xhr.total) * 100));
        }
      },
      (error) => {
        console.error("Error loading model GLTF:", error);
        setLoading(false);
      }
    );

    // Animation Loop
    const animate = () => {
      if (isDestroyed) return;
      animationFrameId = requestAnimationFrame(animate);

      // Handle custom layer separation animation state
      const anim = animStateRef.current;
      const currentParams = paramsRef.current;

      if (anim.active) {
        const duration = currentParams.explodeDuration * 1000;
        const elapsed = performance.now() - anim.startTime;
        const ratio = Math.min(elapsed / duration, 1);
        
        const easeFunc = easings[currentParams.explodeEasing] || easings.easeInOutCubic;
        const progress = easeFunc(ratio);

        anim.current = anim.from + (anim.to - anim.from) * progress;

        if (ratio >= 1) {
          anim.current = anim.to;
          anim.active = false;
        }
      }

      // Apply explosive vertical offsets to layer nodes
      layersRef.current.forEach((layer) => {
        const offset = layer.layerIndex * currentParams.explodeSpread * anim.current * 0.08;
        layer.groupNode.position.set(
          layer.originalPos.x,
          layer.originalPos.y + offset,
          layer.originalPos.z
        );
      });

      // Update light controls position in case updated
      if (threeRef.current) {
        // Project layers to screen for labels
        if (layersRef.current.length > 0) {
          const targetIndices = [
            { key: "gold", layerIdx: Math.min(layersRef.current.length - 2, layersRef.current.length - 1) },
            { key: "nickel", layerIdx: Math.floor(layersRef.current.length / 2) },
            { key: "lithium", layerIdx: Math.max(0, Math.min(1, layersRef.current.length - 1)) }
          ];

          targetIndices.forEach((item) => {
            const layer = layersRef.current[item.layerIdx];
            const el = document.getElementById(`mineral-label-${item.key}`);
            if (el) {
              if (layer && layer.visible && anim.current > 0.05) {
                const vector = new THREE.Vector3();
                layer.groupNode.getWorldPosition(vector);
                
                // Project to NDCs
                vector.project(camera);

                // Check if it's behind the camera
                const isBehind = vector.z > 1;

                // Convert NDCs to pixel percentages
                const x = (vector.x * 0.5 + 0.5) * 100;
                const y = (1 - (vector.y * 0.5 + 0.5)) * 100;

                if (!isBehind && x >= 0 && x <= 100 && y >= 0 && y <= 100) {
                  el.style.display = "block";
                  el.style.left = `${x}%`;
                  el.style.top = `${y}%`;
                  el.style.opacity = `${anim.current}`; // Fade in with explode progress
                } else {
                  el.style.display = "none";
                }
              } else {
                el.style.display = "none";
              }
            }
          });
        }

        // Slow auto rotation if not user-interacting for subtle premium vibe
        if (((controls as unknown) as { state: number }).state === -1 && !isExplodedRef.current) {
          scene.rotation.y += 0.001;
        } else {
          scene.rotation.y = 0;
        }
        
        controls.update();
        renderer.render(scene, camera);
      }
    };

    animate();

    // Responsive Canvas Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0 || isDestroyed) return;
      const { width: w, height: h } = entries[0].contentRect;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      // Dispose materials & geometries
      scene.traverse((object) => {
        if ((object as THREE.Mesh).isMesh) {
          const mesh = object as THREE.Mesh;
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => mat.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });

      renderer.dispose();
      controls.dispose();
      
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Drag vs click detection to handle explode action
  const handlePointerDown = (e: React.PointerEvent) => {
    dragRef.current = false;
    pointerDownPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const dist = Math.sqrt(
      Math.pow(e.clientX - pointerDownPos.current.x, 2) +
      Math.pow(e.clientY - pointerDownPos.current.y, 2)
    );
    // If pointer moves more than 4px, flag it as a rotate/drag operation, not a click
    if (dist > 4) {
      dragRef.current = true;
    }
  };

  const handlePointerUp = () => {
    if (!dragRef.current && !loading) {
      toggleExplode();
    }
  };

  const handleParamChange = <K extends keyof ViewerParams>(key: K, value: ViewerParams[K]) => {
    setParams((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <section className="relative w-full bg-[#09090b] py-24 border-t border-white/5 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--c-highlight);
        }
        
        /* Explicit theme-independent styling for right panel parameters & HUD text */
        .parameters-sidebar {
          color: #d4d4d8 !important;
        }
        .parameters-sidebar .section-title-label {
          color: #a1a1aa !important; /* zinc-400 */
          font-weight: 700 !important;
        }
        .parameters-sidebar .param-row {
          color: #a1a1aa !important; /* zinc-400 */
        }
        .parameters-sidebar .param-row-label {
          color: #a1a1aa !important; /* zinc-400 */
        }
        .parameters-sidebar .value-text {
          color: #ffffff !important;
        }
        .parameters-sidebar select {
          color: #ffffff !important;
          background-color: #09090b !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          font-family: monospace !important;
        }
        .parameters-sidebar select option {
          color: #ffffff !important;
          background-color: #09090b !important;
        }
        .parameters-sidebar .preset-btn {
          color: #d4d4d8 !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        .parameters-sidebar .preset-btn:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: var(--c-highlight) !important;
        }
        .parameters-sidebar .layer-name-text {
          color: #d4d4d8 !important;
        }
        
        /* Controls HUD */
        .controls-hud p {
          color: #d4d4d8 !important;
        }
      `}} />
      {/* Container holding title & descriptions */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              INTERACTIVE CRITICAL MINERAL SYSTEM
            </span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] section-title mb-8">
            <span className="text-[var(--c-highlight)] lime-glow-text">AI-DRIVEN</span> <br />
            <span className="text-white">RESOURCE RECOVERY</span>
          </h2>
          <p className="font-sans text-[var(--c-fg2)] text-xl max-w-2xl mx-auto leading-relaxed">
            Interact with the WBM recovery ecosystem. Explore how AI-driven sorting, advanced processing, and circular material recovery transform electronic waste into strategic supply for future industries.
          </p>
        </ScrollReveal>
      </div>

      {/* Main 3D Canvas Box */}
      <div className="w-full">
        <div className="relative w-full h-[700px] md:h-[800px] bg-[#0c0c0e] border-y border-white/5 overflow-hidden shadow-2xl flex">
          
          {/* Canvas container */}
          <div
            ref={mountRef}
            className="w-full h-full relative cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />

          {/* Mineral Labels Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Gold (Au) - Offset left and up */}
            <div id="mineral-label-gold" className="absolute pointer-events-none transition-opacity duration-300" style={{ display: "none" }}>
              <svg className="absolute overflow-visible" style={{ left: 0, top: 0, width: 1, height: 1 }}>
                <line x1="0" y1="0" x2="-80" y2="-40" stroke="var(--c-highlight)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                <circle cx="-80" cy="-40" r="3" fill="var(--c-highlight)" />
              </svg>
              <div className="absolute w-2 h-2 rounded-full bg-[var(--c-highlight)] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--c-highlight)]" />
              <div className="absolute -translate-x-full -translate-y-full mb-2 mr-2 bg-black/85 backdrop-blur-md border border-[var(--c-highlight)]/30 rounded-lg p-2.5 w-44 shadow-lg" style={{ left: -80, top: -40 }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold text-white bg-[var(--c-highlight)]/20 px-1.5 py-0.5 rounded border border-[var(--c-highlight)]/40 font-mono">Au</span>
                  <span className="text-[10px] font-sans font-black tracking-widest text-white uppercase">GOLD</span>
                </div>
                <p className="text-[9px] text-[var(--c-fg2)] leading-normal font-mono uppercase">
                  Recovered from high-conductivity plating & bonding wires.
                </p>
              </div>
            </div>

            {/* Nickel (Ni) - Offset straight up */}
            <div id="mineral-label-nickel" className="absolute pointer-events-none transition-opacity duration-300" style={{ display: "none" }}>
              <svg className="absolute overflow-visible" style={{ left: 0, top: 0, width: 1, height: 1 }}>
                <line x1="0" y1="0" x2="0" y2="-90" stroke="var(--c-highlight)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                <circle cx="0" cy="-90" r="3" fill="var(--c-highlight)" />
              </svg>
              <div className="absolute w-2 h-2 rounded-full bg-[var(--c-highlight)] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--c-highlight)]" />
              <div className="absolute -translate-x-1/2 -translate-y-full mb-2 bg-black/85 backdrop-blur-md border border-[var(--c-highlight)]/30 rounded-lg p-2.5 w-44 shadow-lg" style={{ left: 0, top: -90 }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold text-white bg-[var(--c-highlight)]/20 px-1.5 py-0.5 rounded border border-[var(--c-highlight)]/40 font-mono">Ni</span>
                  <span className="text-[10px] font-sans font-black tracking-widest text-white uppercase">NICKEL</span>
                </div>
                <p className="text-[9px] text-[var(--c-fg2)] leading-normal font-mono uppercase">
                  Extracted from capacitor arrays & magnetic shielding layers.
                </p>
              </div>
            </div>

            {/* Lithium (Li) - Offset right and down */}
            <div id="mineral-label-lithium" className="absolute pointer-events-none transition-opacity duration-300" style={{ display: "none" }}>
              <svg className="absolute overflow-visible" style={{ left: 0, top: 0, width: 1, height: 1 }}>
                <line x1="0" y1="0" x2="80" y2="60" stroke="var(--c-highlight)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
                <circle cx="80" cy="60" r="3" fill="var(--c-highlight)" />
              </svg>
              <div className="absolute w-2 h-2 rounded-full bg-[var(--c-highlight)] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--c-highlight)]" />
              <div className="absolute -translate-y-1/2 ml-2 bg-black/85 backdrop-blur-md border border-[var(--c-highlight)]/30 rounded-lg p-2.5 w-44 shadow-lg" style={{ left: 80, top: 60 }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold text-white bg-[var(--c-highlight)]/20 px-1.5 py-0.5 rounded border border-[var(--c-highlight)]/40 font-mono">Li</span>
                  <span className="text-[10px] font-sans font-black tracking-widest text-white uppercase">LITHIUM</span>
                </div>
                <p className="text-[9px] text-[var(--c-fg2)] leading-normal font-mono uppercase">
                  Reclaimed from integrated battery cells & power lines.
                </p>
              </div>
            </div>
          </div>

          {/* Loading Layer */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#09090b] flex flex-col items-center justify-center z-30"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-t-2 border-[var(--c-highlight)] border-r-2 border-r-transparent animate-spin mb-6" />
                  <p className="text-sm font-mono tracking-widest text-[var(--c-highlight)] uppercase font-semibold">
                    Synthesizing Silicon Model...
                  </p>
                  <p className="text-xs text-[var(--c-fg3)] mt-2 font-mono">
                    {loadingProgress}% Loaded
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed Parameters Button (triggers when panel is hidden) */}
          {!showPanel && (
            <button
              onClick={() => setShowPanel(true)}
              className="absolute right-6 top-6 z-20 w-10 h-10 rounded-full border border-white/10 bg-black/60 hover:bg-black/80 hover:border-white/20 transition-all flex items-center justify-center text-white cursor-pointer group shadow-lg"
              title="Show Parameters"
            >
              <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          )}

          {/* Floating Instructions HUD */}
          {!loading && (
            <div className="controls-hud absolute left-6 bottom-6 pointer-events-none z-15 bg-black/40 backdrop-blur-md border border-white/5 rounded-xl px-4 py-3 flex flex-col gap-1.5 max-w-[280px]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[var(--c-highlight)]" />
                <span className="text-[10px] font-bold text-white tracking-widest uppercase font-mono">Controls HUD</span>
              </div>
              <div className="h-px bg-white/5 my-1" />
              <p className="text-[9px] text-[var(--c-fg2)] font-mono uppercase leading-normal">
                🖱️ Left Click + Drag: Rotate <br />
                🖱️ Right Click + Drag: Pan <br />
                🔍 Scroll / Pinch: Zoom <br />
                ⚡ Click Canvas: Explode Layering
              </p>
            </div>
          )}

          {/* Parameters Glassmorphic Sidebar */}
          <div
            className={`parameters-sidebar absolute right-0 top-0 bottom-0 w-80 bg-black/55 backdrop-blur-lg border-l border-white/5 z-25 flex flex-col transition-transform duration-300 ${
              showPanel ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3.5 border-b border-white/5">
              <span className="text-[11px] font-mono tracking-widest font-black uppercase text-white flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 text-[var(--c-highlight)] animate-spin-slow" /> Parameters
              </span>
              <button
                onClick={() => setShowPanel(false)}
                className="w-6 h-6 hover:bg-white/10 rounded flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Hide Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sidebar content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 select-none custom-scrollbar">
              
              {/* Presets Group */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] font-mono font-bold text-zinc-400 mb-2.5 section-title-label">
                  Environment Presets
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => handlePresetSelect(preset.config as ViewerParams)}
                      className="preset-btn text-[9px] py-1.5 px-2 bg-white/5 border border-white/5 hover:border-[var(--c-highlight)] hover:bg-white/10 transition-all rounded font-mono text-zinc-300 hover:text-white uppercase truncate text-left"
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* Explode settings */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] font-mono font-bold text-zinc-400 mb-3 section-title-label">
                  Explode Controls (Click Model)
                </p>
                
                <div className="space-y-4 font-mono">
                  {/* Explode trigger button */}
                  <button
                    onClick={toggleExplode}
                    className="w-full py-2 bg-[var(--c-highlight)] hover:opacity-90 active:scale-[0.98] text-[#09090b] text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                  >
                    <Play className={`w-3.5 h-3.5 ${isExploded ? "rotate-90" : ""} transition-transform`} />
                    {isExploded ? "Collapse System" : "Explode System"}
                  </button>

                  {/* Spread slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] text-zinc-400 param-row">
                      <span>SPREAD</span>
                      <span className="text-white value-text">{params.explodeSpread.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="50.0"
                      step="1.0"
                      value={params.explodeSpread}
                      onChange={(e) => handleParamChange("explodeSpread", parseFloat(e.target.value))}
                      className="w-full accent-[var(--c-highlight)] bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Duration slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] text-zinc-400 param-row">
                      <span>DURATION</span>
                      <span className="text-white value-text">{params.explodeDuration.toFixed(1)}s</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="3.0"
                      step="0.1"
                      value={params.explodeDuration}
                      onChange={(e) => handleParamChange("explodeDuration", parseFloat(e.target.value))}
                      className="w-full accent-[var(--c-highlight)] bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Easing select */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] text-zinc-400 block param-row-label">EASING ALGORITHM</label>
                    <select
                      value={params.explodeEasing}
                      onChange={(e) => handleParamChange("explodeEasing", e.target.value)}
                      className="w-full text-[10px] py-2 px-2.5 bg-white/5 border border-white/5 hover:border-white/20 transition-all rounded font-mono text-white uppercase outline-none"
                    >
                      <option value="linear" className="bg-[#09090b]">Linear</option>
                      <option value="easeInOutCubic" className="bg-[#09090b]">Ease In Out Cubic</option>
                      <option value="easeOutCubic" className="bg-[#09090b]">Ease Out Cubic</option>
                      <option value="easeOutBack" className="bg-[#09090b]">Ease Out Back</option>
                      <option value="easeInOutElastic" className="bg-[#09090b]">Ease In Out Elastic</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              {/* Lighting controls */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] font-mono font-bold text-zinc-400 mb-3 section-title-label">
                  Lighting & Render
                </p>

                <div className="space-y-4 font-mono">
                  {/* Ambient Light Intensity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] text-zinc-400 param-row">
                      <span>AMBIENT LIGHT INTENSITY</span>
                      <span className="text-white value-text">{params.ambientIntensity.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3.0"
                      step="0.05"
                      value={params.ambientIntensity}
                      onChange={(e) => handleParamChange("ambientIntensity", parseFloat(e.target.value))}
                      className="w-full accent-[var(--c-highlight)] bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Directional Light Intensity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] text-zinc-400 param-row">
                      <span>DIRECT LIGHT INTENSITY</span>
                      <span className="text-white value-text">{params.dirIntensity.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5.0"
                      step="0.05"
                      value={params.dirIntensity}
                      onChange={(e) => handleParamChange("dirIntensity", parseFloat(e.target.value))}
                      className="w-full accent-[var(--c-highlight)] bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Exposure */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px] text-zinc-400 param-row">
                      <span>CAMERA EXPOSURE</span>
                      <span className="text-white value-text">{params.exposure.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="3.0"
                      step="0.05"
                      value={params.exposure}
                      onChange={(e) => handleParamChange("exposure", parseFloat(e.target.value))}
                      className="w-full accent-[var(--c-highlight)] bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Tone mapping */}
                  <div className="space-y-1.5">
                    <label className="text-[9px] text-zinc-400 block param-row-label">TONE MAPPING PROFILES</label>
                    <select
                      value={params.toneMapping}
                      onChange={(e) => handleParamChange("toneMapping", e.target.value)}
                      className="w-full text-[10px] py-2 px-2.5 bg-white/5 border border-white/5 hover:border-white/20 transition-all rounded font-mono text-white uppercase outline-none"
                    >
                      <option value="none" className="bg-[#09090b]">None (Standard)</option>
                      <option value="linear" className="bg-[#09090b]">Linear</option>
                      <option value="reinhard" className="bg-[#09090b]">Reinhard</option>
                      <option value="cineon" className="bg-[#09090b]">Cineon</option>
                      <option value="aces" className="bg-[#09090b]">ACES Filmic</option>
                      <option value="agx" className="bg-[#09090b]">AgX Cinematic</option>
                    </select>
                  </div>

                  {/* Show grid helper */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[9px] text-zinc-400 uppercase param-row-label">SHOW HELPER GRID</span>
                    <button
                      onClick={() => handleParamChange("showGrid", !params.showGrid)}
                      className={`w-7 h-4 rounded-full transition-all duration-300 relative ${
                        params.showGrid ? "bg-[var(--c-highlight)]" : "bg-white/10"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-[#09090b] absolute top-[1px] transition-all ${
                          params.showGrid ? "left-[12px]" : "left-[1px]"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Model Parts Selector */}
              {layers.length > 0 && (
                <>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-mono font-bold text-zinc-400 mb-3 section-title-label">
                      Deconstructed Parts
                    </p>
                    
                    <div className="flex gap-1.5 mb-3 font-mono">
                      <button
                        onClick={showAllLayers}
                        className="preset-btn text-[8px] py-1 px-2 border border-white/5 hover:border-white/10 hover:bg-white/5 rounded text-zinc-300 hover:text-white uppercase transition-all flex-1"
                      >
                        Show All
                      </button>
                      <button
                        onClick={hideAllLayers}
                        className="preset-btn text-[8px] py-1 px-2 border border-white/5 hover:border-white/10 hover:bg-white/5 rounded text-zinc-300 hover:text-white uppercase transition-all flex-1"
                      >
                        Hide All
                      </button>
                    </div>

                    <div className="space-y-1.5 max-h-[220px] overflow-y-auto custom-scrollbar font-mono pr-1">
                      {layers.map((layer, index) => (
                        <label
                          key={layer.name}
                          className="flex items-center justify-between p-1.5 border border-white/5 hover:border-white/10 rounded cursor-pointer group transition-colors param-row"
                        >
                          <span className="text-[9px] uppercase text-zinc-300 group-hover:text-white truncate max-w-[200px] layer-name-text">
                            {layer.name}
                          </span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleLayerVisibility(index);
                            }}
                            className="text-zinc-500 group-hover:text-white transition-colors eye-btn"
                          >
                            {layer.visible ? (
                              <Eye className="w-3.5 h-3.5" />
                            ) : (
                              <EyeOff className="w-3.5 h-3.5 text-red-500" />
                            )}
                          </button>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

