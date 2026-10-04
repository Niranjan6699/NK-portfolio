"use client";

import { useEffect, useState, useRef } from "react";

const nodes = [
  { name: "DriverLink Dispatch", nodes: "82 Screens", status: "Prototype" },
  { name: "VoiceShift P2P Audio", nodes: "<50ms Target", status: "In Dev" },
  { name: "SugarScan AI Vision", nodes: "Local SLM", status: "In Dev" },
  { name: "MedGrid Nexus SPARQL", nodes: "Federated", status: "Prototype" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="infra" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-xs md:text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            05 // Architecture &amp; System Topology
          </span>
          
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-stretch">
            {/* Preserved globe visual */}
            <div className={`w-48 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                alt="System topology network sphere"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Title & Description */}
            <div className="flex flex-col justify-center">
              <h2 className={`text-5xl md:text-7xl lg:text-[110px] font-display tracking-tight leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                Architected for
                <br />
                <span className="text-muted-foreground">resilience.</span>
              </h2>

              <p className={`mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl font-sans transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                Designing systems with explicit boundaries: peer-to-peer WebRTC audio paths, client-side RBAC authorization tables, and federated SPARQL semantic nodes that keep sensitive records private.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Large stat card */}
          <div className={`relative p-8 lg:p-12 border border-transparent hover:border-white/20 rounded-xl bg-black overflow-hidden transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-7xl lg:text-[8.5rem] font-display leading-none text-foreground">07</span>
                <span className="text-xl md:text-2xl text-muted-foreground font-mono">active projects</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-md font-sans">
                Engineered across Android native (Kotlin / C++ NDK), cross-platform mobile (React Native / Flutter), and modern web architectures.
              </p>
            </div>
          </div>

          {/* Stacked stat cards */}
          <div className="flex flex-col gap-6">
            <div className={`p-8 border border-transparent hover:border-white/20 rounded-sm bg-black transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-4xl lg:text-5xl font-display text-[#F5F5F5]">&lt;50ms</span>
              <span className="block text-xs font-mono text-white/[0.42] mt-2 uppercase tracking-wider">
                VoIP Audio Ring Buffer Target
              </span>
            </div>
            
            <div className={`p-8 border border-transparent hover:border-white/20 rounded-sm bg-black transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-4xl lg:text-5xl font-display text-[#F5F5F5]">8-Role</span>
              <span className="block text-xs font-mono text-white/[0.42] mt-2 uppercase tracking-wider">
                Granular RBAC Permission Model
              </span>
            </div>
          </div>
        </div>

        {/* System node list */}
        <div className={`mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {nodes.map((node, index) => (
            <div
              key={node.name}
              className={`p-5 border rounded-sm transition-all duration-300 cursor-default bg-black ${
                activeNode === index 
                  ? "border-white/[0.22]" 
                  : "border-transparent hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full transition-colors ${
                  activeNode === index ? "bg-[#eca8d6]" : "bg-white/20"
                }`} />
                <span className="text-[10px] font-mono text-white/[0.42] uppercase tracking-wider">
                  {node.status}
                </span>
              </div>
              <span className="font-medium block mb-1 text-sm text-[#F5F5F5]">{node.name}</span>
              <span className="text-xs text-white/[0.42] font-mono">{node.nodes}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
