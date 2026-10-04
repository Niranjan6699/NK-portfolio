"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Mobile Engineering",
    description: "Production mobile apps with clean role workflows, native bridges, and dependable offline caching.",
    stack: ["React Native", "Expo", "Kotlin", "Flutter"],
    metric: "82 Screens",
    submetric: "DriverLink & SugarScan",
  },
  {
    number: "02",
    title: "Web Systems",
    description: "High-performance web apps built with React & TypeScript, locked at fluid 60 FPS animations.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    metric: "60 FPS",
    submetric: "Canvas & UI Rendering",
  },
  {
    number: "03",
    title: "Backend & API Architecture",
    description: "Fast asynchronous APIs, clean database schemas, and strict token-based authentication.",
    stack: ["FastAPI", "ASP.NET Core", "Spring Boot", "PostgreSQL"],
    metric: "Strict RBAC",
    submetric: "Token & Role Security",
  },
  {
    number: "04",
    title: "AI Systems & Tooling",
    description: "Private vision and language models running locally via Ollama with zero cloud API bills.",
    stack: ["Ollama", "Local Vision", "LLMs", "AI Tooling"],
    metric: "Zero Cloud Cost",
    submetric: "Local SLM Pipelines",
  },
  {
    number: "05",
    title: "Real-Time Communication",
    description: "Low-latency C++ sound processing routines and real-time WebRTC audio streaming for Android.",
    stack: ["WebRTC", "C++", "Android NDK"],
    metric: "<50ms",
    submetric: "Ring Buffer Latency",
  },
  {
    number: "06",
    title: "Product Engineering",
    description: "Complete ownership from architecture and UI craft to tested, deployable software.",
    stack: ["Architecture", "UI Systems", "Deployment", "Verification"],
    metric: "100%",
    submetric: "Functional Code",
  },
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden bg-black"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with clean ratio */}
        <div className="relative mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
                02 // Core Capabilities
              </span>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Technical <span className="text-muted-foreground">breadth &amp; depth.</span>
              </h2>
            </div>
            <div className="lg:pb-4">
              <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                Full-stack systems built for real-world speed — from low-level C++ audio engines to cloud APIs and fluid mobile apps.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout - 6 Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.number}
              className={`relative bg-black hover:border-white/20 border border-transparent p-8 lg:p-10 rounded-sm overflow-hidden group transition-all duration-300 flex flex-col justify-between min-h-[360px] ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#eca8d6] tracking-widest">{cap.number}</span>
                  <span className="font-mono text-[11px] text-white/[0.42] uppercase">{cap.submetric}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-display mb-3 text-[#F5F5F5] group-hover:text-white transition-colors duration-200">
                  {cap.title}
                </h3>

                <p className="text-sm md:text-base text-white/[0.72] leading-relaxed mb-6 max-w-lg font-sans font-light">
                  {cap.description}
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-transparent group-hover:border-white/[0.07] transition-colors duration-300 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cap.stack.map((item) => (
                    <span 
                      key={item} 
                      className="px-2.5 py-1 text-xs font-mono rounded-sm bg-white/[0.02] border border-transparent group-hover:border-white/[0.07] transition-colors text-white/[0.50]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl lg:text-3xl font-display text-white">{cap.metric}</span>
                  <span className="text-xs font-mono text-white/[0.42]">VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
