"use client";

import React, { useEffect, useRef, useState } from "react";

interface MotionBannerProps {
  items: string[];
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  accentText?: string;
  badge?: string;
  className?: string;
  velocity?: number; // pixels per second for constant speed
}

export function MotionBanner({
  items,
  reverse = false,
  accentText,
  badge,
  className = "",
  velocity = 120, // Constant fast velocity across every banner (matching page 5 & 6)
}: MotionBannerProps) {
  const setRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(14);

  useEffect(() => {
    const updateDuration = () => {
      if (setRef.current) {
        const setWidth = setRef.current.offsetWidth;
        if (setWidth > 0) {
          // Duration = Distance / Constant Velocity
          // Ensures every banner moves at the exact same physical speed regardless of text length
          const computedDuration = setWidth / velocity;
          setDuration(computedDuration);
        }
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, [items, velocity]);

  return (
    <div
      className={`relative w-full overflow-hidden py-2.5 sm:py-3 bg-black select-none group z-20 ${className}`}
      aria-hidden="true"
    >
      {/* Ambient edge masks for seamless entry/exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {/* Render 3 identical sets to ensure continuous gapless looping on wide screens */}
        {[0, 1, 2].map((setIndex) => (
          <div
            key={setIndex}
            ref={setIndex === 0 ? setRef : undefined}
            className="flex shrink-0 items-center gap-6 sm:gap-9 pr-6 sm:pr-9"
          >
            {badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest bg-[#eca8d6]/10 text-[#eca8d6]">
                {badge}
              </span>
            )}
            {items.map((item, itemIndex) => {
              const isAccent = accentText && item.includes(accentText);
              return (
                <React.Fragment key={`${setIndex}-${itemIndex}`}>
                  <span
                    className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] whitespace-nowrap transition-colors duration-300 ${
                      isAccent
                        ? "text-[#eca8d6] font-semibold drop-shadow-[0_0_8px_rgba(236,168,214,0.35)]"
                        : "text-white/60 group-hover:text-white/85"
                    }`}
                  >
                    {item}
                  </span>
                  <span className="text-[#eca8d6]/60 text-xs sm:text-sm select-none">
                    ✦
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
