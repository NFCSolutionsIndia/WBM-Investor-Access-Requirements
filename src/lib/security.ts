"use client";

import { useEffect } from "react";
import { showSecurityToast } from "@/components/investor/SecurityToast";

export const useSecurity = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) return;

    // Hard Shield - Solid Black to prevent any capture
    const setHardShield = (active: boolean) => {
        const overlay = document.getElementById("security-blur-overlay");
        if (overlay) {
            overlay.style.display = active ? "flex" : "none";
            overlay.style.backgroundColor = "black";
            overlay.style.opacity = active ? "1" : "0";
            overlay.style.zIndex = "2147483647"; // Max possible z-index
        }
        // Also hide the body content entirely from the DOM perspective for captures
        const mainContent = document.getElementById("main-content-wrapper");
        if (mainContent) {
            mainContent.style.opacity = active ? "0" : "1";
            mainContent.style.visibility = active ? "hidden" : "visible";
        }
    };

    // Prevent right-click and all its derivatives
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Block all "save" and "capture" shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "s") ||
        (e.ctrlKey && e.key === "p") ||
        (e.metaKey && e.key === "p") ||
        (e.metaKey && e.shiftKey && e.key === "4") ||
        (e.metaKey && e.shiftKey && e.key === "3") ||
        (e.metaKey && e.shiftKey && e.key === "s") || // Win+Shift+S
        e.key === "PrintScreen" ||
        e.key === "Snapshot"
      ) {
        e.preventDefault();
        setHardShield(true);
        
        // Auto-restore after 2 seconds
        setTimeout(() => setHardShield(false), 2000);

        if (e.key === "p" || (e.ctrlKey && e.key === "p")) {
            showSecurityToast("Printing and exporting are restricted.");
        } else {
            showSecurityToast("Screen capturing is prohibited on this page.");
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.key === "Snapshot") {
        try {
          if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText("REDACTED").catch(() => {});
          }
        } catch (err) {}
      }
    };

    // Crucial: Blackout on blur to prevent Snipping Tool / Background recording
    const handleBlur = () => setHardShield(true);
    const handleFocus = () => setHardShield(false);

    const handleVisibilityChange = () => {
        if (document.hidden) setHardShield(true);
        else setHardShield(false);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
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
        body { display: none !important; opacity: 0 !important; }
      }
      img { pointer-events: none !important; -webkit-user-drag: none !important; }
      video { pointer-events: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.body.style.userSelect = "auto";
      document.body.style.webkitUserSelect = "auto";
      const s = document.getElementById("security-hard-shield-css");
      if (s) s.remove();
    };
  }, [enabled]);
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
