"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { showSecurityToast } from "@/components/investor/SecurityToast";

// Configurable activation delay in milliseconds after entering a protected page or navigating.
// Default is 5000ms (5 seconds). Can be easily modified here.
export const SECURITY_ACTIVATION_DELAY = 5000;

export const useSecurity = (enabled: boolean, delay: number = SECURITY_ACTIVATION_DELAY) => {
  const pathname = usePathname();
  const [monitoringStarted, setMonitoringStarted] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setMonitoringStarted(false);
      return;
    }

    // Reset monitoring state when page changes/navigation happens
    setMonitoringStarted(false);

    const timer = setTimeout(() => {
      setMonitoringStarted(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [enabled, pathname, delay]);

  useEffect(() => {
    if (!enabled) return;

    // Hard Shield - Solid Black to prevent any capture
    const setHardShield = (active: boolean) => {
        const overlay = document.getElementById("security-blur-overlay");
        const mainContent = document.getElementById("main-content-wrapper");

        if (active) {
            if (overlay) {
                overlay.style.display = "flex";
                overlay.style.backgroundColor = "black";
                overlay.style.opacity = "1";
                overlay.style.zIndex = "2147483647";
            }
            if (mainContent) {
                mainContent.style.filter = "blur(150px) brightness(0)";
                mainContent.style.opacity = "0";
                mainContent.style.visibility = "hidden";
                mainContent.style.pointerEvents = "none";
            }
        } else {
            if (overlay) {
                overlay.style.opacity = "0";
                setTimeout(() => {
                    if (overlay.style.opacity === "0") overlay.style.display = "none";
                }, 200);
            }
            if (mainContent) {
                mainContent.style.filter = "none";
                mainContent.style.opacity = "1";
                mainContent.style.visibility = "visible";
                mainContent.style.pointerEvents = "auto";
            }
        }
    };

    // Prevent right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showSecurityToast("Right-click restricted.");
      return false;
    };

    // Block all "save" and "capture" shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      
      // Proactive detection: if Meta/Win or Ctrl/Alt are pressed, we prepare for potential shortcuts
      // Some OS shortcuts are hard to block, so we blackout as soon as the combination starts
      const isModifier = key === "Meta" || key === "Control" || key === "Alt" || key === "OS";
      const isPrintKey = key === "PrintScreen" || key === "Snapshot";
      
      const isForbiddenShortcut = 
        isPrintKey ||
        (e.ctrlKey && (key === "p" || key === "s" || key === "u")) ||
        (e.metaKey && (key === "p" || key === "s" || key === "3" || key === "4" || key === "5")) ||
        (e.ctrlKey && e.shiftKey && (key === "I" || key === "J" || key === "C" || key === "S" || key === "s")) ||
        (e.metaKey && e.shiftKey && (key === "S" || key === "s" || key === "4" || key === "3"));

      if (isForbiddenShortcut) {
        setHardShield(true);
        e.preventDefault();
        e.stopPropagation();
        setTimeout(() => setHardShield(false), 3000);
        showSecurityToast("Confidential: Capture restricted.");
      }
      
      if (key === "F12") {
          setHardShield(true);
          e.preventDefault();
          setTimeout(() => setHardShield(false), 3000);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.key === "Snapshot") {
        setHardShield(true);
        setTimeout(() => setHardShield(false), 2000);
        try {
          if (navigator.clipboard) {
            navigator.clipboard.writeText("SECURITY VIOLATION: DATA PROTECTED").catch(() => {});
          }
        } catch (err) {}
      }
    };

    // Heartbeat Focus Check - Extremely aggressive (every 50ms)
    // This catches focus loss that events might miss
    const heartbeat = setInterval(() => {
        if (!monitoringStarted) return;
        if (!document.hasFocus()) {
            setHardShield(true);
        } else if (!document.hidden) {
            // Only restore if focus is back AND tab is visible
            const overlay = document.getElementById("security-blur-overlay");
            if (overlay && overlay.style.display === "flex" && !isForbiddenShortcutActive.current) {
                setHardShield(false);
            }
        }
    }, 50);

    // Track if a forbidden shortcut is currently being held to prevent heartbeat from restoring
    const isForbiddenShortcutActive = { current: false };

    // More aggressive blur/focus
    const handleBlur = () => {
        if (monitoringStarted) setHardShield(true);
    };
    const handleFocus = () => {
        if (!document.hidden) setHardShield(false);
    };

    // Mouse leave detection - Snipping tool often triggers this
    const handleMouseLeave = () => {
        if (monitoringStarted) setHardShield(true);
    };
    const handleMouseEnter = () => {
        if (document.hasFocus()) setHardShield(false);
    };

    window.addEventListener("contextmenu", handleContextMenu, true);
    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);
    window.addEventListener("blur", handleBlur, true);
    window.addEventListener("focus", handleFocus, true);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("visibilitychange", () => {
        if (document.hidden && monitoringStarted) setHardShield(true);
        else if (document.hasFocus()) setHardShield(false);
    });
    
    // Global drag/select prevention
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.onselectstart = () => false;
    document.ondragstart = () => false;

    // CSS Print Protection
    const style = document.createElement("style");
    style.id = "security-hard-shield-css";
    style.innerHTML = `
      @media print {
        body { display: none !important; opacity: 0 !important; visibility: hidden !important; }
      }
      * { -webkit-print-color-adjust: exact !important; }
      img, video { pointer-events: none !important; -webkit-user-drag: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(heartbeat);
      window.removeEventListener("contextmenu", handleContextMenu, true);
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("keyup", handleKeyUp, true);
      window.removeEventListener("blur", handleBlur, true);
      window.removeEventListener("focus", handleFocus, true);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.userSelect = "auto";
      document.body.style.webkitUserSelect = "auto";
      const s = document.getElementById("security-hard-shield-css");
      if (s) s.remove();
    };
  }, [enabled, monitoringStarted]);
};

export const detectDevTools = (callback: () => void) => {
  if (typeof window === "undefined") return;
  const threshold = 160;
  const check = () => {
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
      callback();
    }
  };
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
};
