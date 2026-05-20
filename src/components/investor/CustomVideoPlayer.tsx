"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Rewind, FastForward, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomVideoPlayerProps {
  src: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  badgeText,
  title,
  subtitle,
  className = "rounded-[24px] md:rounded-[32px] border border-[var(--c-border)]"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Time formatting (e.g. 0:45)
  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const restart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  const skip = (amount: number) => {
    if (!videoRef.current) return;
    let newTime = videoRef.current.currentTime + amount;
    newTime = Math.max(0, Math.min(newTime, duration));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = prevVolume;
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      const elem = containerRef.current as any;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Sync state with HTML5 video events
  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Auto-hide controls logic
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying && !isDragging) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    } else {
      resetControlsTimeout();
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, isDragging]);

  // Scrubbing/Timeline Dragging logic
  const calculateTimeFromPosition = (clientX: number) => {
    if (!progressBarRef.current || !videoRef.current) return 0;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    return percentage * duration;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const newTime = calculateTimeFromPosition(e.clientX);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      const newTime = calculateTimeFromPosition(e.clientX);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, duration]);

  // Keyboard shortcut listener
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      skip(-5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      skip(5);
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      toggleMute();
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      toggleFullscreen();
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={resetControlsTimeout}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`relative w-full overflow-hidden bg-[#0a0a0a] group shadow-2xl focus:outline-none select-none ${className}`}
    >
      <video 
        ref={videoRef}
        src={src} 
        playsInline 
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-auto block cursor-pointer"
        onClick={togglePlay}
        onDoubleClick={toggleFullscreen}
      />

      {/* Large Center Play Button (YouTube-style, visible when paused) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-25 bg-black/25 backdrop-blur-[2px] pointer-events-none"
          >
            <div 
              className="w-20 h-20 md:w-24 md:h-24 bg-[var(--c-highlight)]/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(131,148,112,0.3)] border border-white/20 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            >
              <Play size={44} className="text-white fill-white ml-1.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Left Badge & Fullscreen - visible when controls are active or video is paused */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-6 left-6 right-6 flex justify-between items-center z-30 pointer-events-none"
          >
            {badgeText && (
              <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 pointer-events-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-highlight)] animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{badgeText}</span>
              </div>
            )}
            {!isFullscreen && (
              <button 
                onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
                className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--c-highlight)] hover:text-black transition-all pointer-events-auto ml-auto"
              >
                <Maximize size={18} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Text Overlay - visible when paused or mouse hovered */}
      <AnimatePresence>
        {showControls && (title || subtitle) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 left-8 right-8 text-left z-20 pointer-events-none"
          >
            {subtitle && <div className="text-[10px] font-black text-[var(--c-highlight)] uppercase tracking-widest mb-1">{subtitle}</div>}
            {title && <div className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">{title}</div>}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Bottom Control Bar */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/75 to-transparent px-4 pb-4 pt-10 z-30 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Timeline / Progress Scrubber */}
            <div className="px-2">
              <div 
                ref={progressBarRef}
                className="relative w-full h-1 bg-white/20 hover:h-2 cursor-pointer rounded-full transition-all group/slider"
                onClick={handleProgressClick}
                onMouseDown={() => setIsDragging(true)}
              >
                {/* Progress Fill */}
                <div 
                  className="absolute top-0 left-0 h-full bg-[var(--c-lime)] rounded-full"
                  style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                />
                {/* Handle / Thumb */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-[var(--c-lime)] opacity-0 group-hover/slider:opacity-100 transition-opacity pointer-events-none"
                  style={{ left: `calc(${(currentTime / (duration || 1)) * 100}% - 6px)` }}
                />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between px-2">
              {/* Left Side Controls */}
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button 
                  onClick={togglePlay} 
                  className="text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={18} className="fill-white/10" /> : <Play size={18} className="fill-white/10" />}
                </button>

                {/* Restart */}
                <button 
                  onClick={restart} 
                  className="text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer"
                  title="Restart"
                >
                  <RotateCcw size={16} />
                </button>

                {/* Skip Backward 10s */}
                <button 
                  onClick={() => skip(-10)} 
                  className="text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer"
                  title="Backward 10s"
                >
                  <Rewind size={16} />
                </button>

                {/* Skip Forward 10s */}
                <button 
                  onClick={() => skip(10)} 
                  className="text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer"
                  title="Forward 10s"
                >
                  <FastForward size={16} />
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 group/volume ml-2">
                  <button 
                    onClick={toggleMute} 
                    className="text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.05" 
                    value={volume} 
                    onChange={handleVolumeChange} 
                    className="w-0 group-hover/volume:w-16 h-1 accent-[var(--c-lime)] bg-white/20 rounded-lg appearance-none cursor-pointer transition-all duration-300 origin-left opacity-0 group-hover/volume:opacity-100 select-none focus:outline-none"
                  />
                </div>

                {/* Time Display */}
                <div className="text-[11px] font-medium text-white/80 font-mono select-none">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center gap-4">
                {/* Fullscreen */}
                <button 
                  onClick={toggleFullscreen} 
                  className="text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer"
                  title="Fullscreen"
                >
                  {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
