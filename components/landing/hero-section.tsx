"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] h-[100svh] flex flex-col justify-between overflow-hidden bg-black pt-20 lg:pt-24 pb-8"
    >
      {/* 1. Unified Hero Cinematic Tree Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Video spanning the hero canvas */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-[72%_center] lg:object-[80%_center] opacity-85 brightness-[1.04] contrast-[1.04]"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" type="video/mp4" />
        </video>

        {/* Controlled Subtle Black Sync Fade — Exact Reference Match */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 40%, transparent 65%), linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, transparent 20%, transparent 60%, rgba(0,0,0,0.60) 100%)"
          }}
        />
      </div>

      {/* 3. Main Hero Content - Vertically centered in viewport, connected to the scene */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 my-auto py-4 lg:py-6">
        <div className="max-w-[600px] lg:max-w-[660px]">
          
          {/* Eyebrow matching reference line + mono tag */}
          <div 
            className={`flex items-center gap-3 text-xs sm:text-sm font-mono tracking-wider text-white/50 mb-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span>Autonomous AI &amp; Systems Engineering</span>
          </div>
          
          {/* Confident 2-line Headline matching reference proportion */}
          <div className="mb-5 lg:mb-7">
            <h1 
              className={`text-left font-display tracking-tight text-white leading-[1.04] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                fontSize: "clamp(42px, 4.8vw, 70px)",
              }}
            >
              <span className="block">Engineering systems,</span>
              <span className="block mt-1 text-white">that work in the real world.</span>
            </h1>
          </div>

          {/* Supporting Statement: concise, readable */}
          <p 
            className={`text-base sm:text-lg text-white/[0.72] font-sans font-light leading-relaxed max-w-[540px] mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Building AI-powered products and real-world software systems for the Indian market.
          </p>

          {/* Action CTAs */}
          <div 
            className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-sm bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white/90 hover:scale-[1.01] transition-all shadow-xl h-10"
            >
              Explore Selected Work &rarr;
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-sm border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all h-10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* 4. Bottom Stats - Aligned naturally on the lower hero canvas, resting directly over subtle terrain */}
      <div 
        className={`relative z-10 w-full px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-start justify-start gap-12 sm:gap-24 pb-2">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-[40px] font-display text-[#F5F5F5]">07+</div>
            <div className="text-xs font-mono text-white/[0.48] tracking-wider mt-1">Real projects built</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-[40px] font-display text-[#F5F5F5]">82</div>
            <div className="text-xs font-mono text-white/[0.48] tracking-wider mt-1">Screens in prototype</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-[40px] font-display text-[#F5F5F5]">&lt;50ms</div>
            <div className="text-xs font-mono text-white/[0.48] tracking-wider mt-1">VoIP audio latency target</div>
          </div>
        </div>
      </div>
    </section>
  );
}
