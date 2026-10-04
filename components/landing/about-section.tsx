"use client";

import { useEffect, useRef, useState } from "react";
import { AsciiScene } from "./ascii-scene";
import { CheckCircle2, Code2, Layers, Sparkles, Terminal } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const workflowSteps = [
    {
      role: "Architect",
      desc: "Clean schemas, modular boundaries, and dependable APIs from product requirements.",
      icon: Layers,
    },
    {
      role: "Builder",
      desc: "Core logic across React Native, native Android Kotlin, C++ NDK audio, and FastAPI.",
      icon: Code2,
    },
    {
      role: "Prompt Engineer",
      desc: "Google Antigravity and AI coding agents for accelerated prototyping, exploration, and test suites.",
      icon: Sparkles,
    },
    {
      role: "Verifier",
      desc: "Latency benchmarks, payload inspections, and concurrency verification for production stability.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-28 lg:py-36 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <div className={`mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono tracking-wider text-white/50 uppercase">
            01 // About &amp; Philosophy
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Natural Narrative */}
          <div className="flex flex-col justify-between">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05] mb-8 text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Turning technical ideas into <span className="text-white/40 italic font-normal">usable, reliable</span> software.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-white/80 leading-relaxed font-sans font-light max-w-2xl">
              <p>
                Final-year software engineering student at <span className="text-white font-medium">Saveetha University</span> building software across AI, mobile, web, and real-time systems.
              </p>
              <p>
                Focused on end-to-end products: multi-sided mobility apps with strict role permissions, federated clinical research graphs protecting patient privacy, and low-latency audio processing pipelines.
              </p>
              
              {/* Honest AI-assisted workflow card */}
              <div className="p-6 rounded-sm border border-transparent hover:border-white/20 transition-all duration-300 bg-black space-y-3">
                <div className="flex items-center gap-2 text-[#eca8d6]">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wider uppercase font-semibold">Honest AI-Assisted Workflow</span>
                </div>
                <p className="text-sm text-white/[0.72] leading-relaxed font-sans font-light">
                  I use Google Antigravity and AI coding agents to accelerate exploration and test generation. I personally architect the systems, write critical-path code, and verify every release for production readiness.
                </p>
              </div>
            </div>

            {/* 4 Roles Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {workflowSteps.map((step, idx) => (
                <div 
                  key={step.role}
                  className={`p-5 rounded-sm border border-transparent hover:border-white/20 transition-all duration-300 bg-black ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 80 + 200}ms` }}
                >
                  <div className="flex items-center gap-2.5 mb-2 text-[#F5F5F5] font-medium text-sm">
                    <step.icon className="w-4 h-4 text-[#eca8d6] opacity-80" />
                    <span>{step.role}</span>
                  </div>
                  <p className="text-xs text-white/[0.60] leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D ASCII Sculpture - Pure Seamless Canvas */}
          <div className="relative">
            <div className="relative w-full h-[520px] bg-transparent overflow-hidden flex flex-col justify-between p-2 sm:p-4 select-none">
              
              {/* Subtle ambient sakura glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,168,214,0.06)_0%,rgba(0,0,0,0)_70%)]" />

              {/* Edge fade masks for seamless black canvas synchronization */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />

              {/* Top Header - Box-free Typography */}
              <div className="relative z-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#eca8d6] shadow-[0_0_8px_#eca8d6] animate-pulse" />
                  <span className="text-xs font-mono text-white/70 uppercase tracking-widest">3D ASCII Torus Knot</span>
                </div>
                <span className="text-[10px] font-mono text-[#eca8d6]/80 tracking-widest uppercase">
                  Interactive Canvas_
                </span>
              </div>

              {/* The 3D ASCII Canvas with radial vignette mask */}
              <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_92%)]">
                <AsciiScene />
              </div>

              {/* Bottom Caption - Box-free Typography */}
              <div className="relative z-20 text-xs font-mono text-white/70">
                <p className="text-[#eca8d6] font-medium mb-1 text-[11px] uppercase tracking-wider">Procedural Math &amp; Rendering</p>
                <p className="text-[11px] text-white/50 leading-relaxed font-sans font-light max-w-sm">
                  Real-time perspective projection of a (p:2, q:3) torus knot rendered into ASCII character buffers with mouse influence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
