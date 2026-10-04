"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Isolated Local Inference",
    description: "Multimodal meal scans processed on-device via Ollama with zero cloud data leakage.",
    image: "/images/isolated.jpg",
  },
  {
    icon: Lock,
    title: "Privacy-Preserving Federated Graphs",
    description: "Cross-institutional SPARQL queries without centralizing sensitive patient clinical records.",
    image: "/images/encrypted.jpg",
  },
  {
    icon: Eye,
    title: "Strict 8-Role Granular RBAC",
    description: "Comprehensive Role-Based Access Control enforcing least privilege across 8 operational tiers.",
    image: "/images/permissions.jpg",
  },
  {
    icon: FileCheck,
    title: "Deterministic Concurrency",
    description: "Zero race conditions or deadlocks via strict resource ordering and ReentrantLocks.",
    image: "/images/audit.jpg",
  },
];

const standards = ["Zero-Trust Auth", "Local Inference", "Thread Safety", "Federated Privacy"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
      setActiveFeature((prev) => (prev + 1) % securityFeatures.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-xs md:text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            07 // Engineering Principles &amp; Reliability
          </span>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            Rigorous by design, <span className="text-muted-foreground">safe by default.</span>
          </h2>
          
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-sans">
              Reliability is not an afterthought. Every architecture is designed around data isolation, deterministic concurrency, and defense in depth.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Large visual card */}
          <div className={`relative p-8 lg:p-12 border border-transparent hover:border-white/20 rounded-sm bg-black min-h-[420px] overflow-hidden transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Dynamic feature image cross-fade preserved */}
            <div className="absolute inset-0 pointer-events-none items-center justify-end hidden lg:flex">
              {securityFeatures.map((feature, index) => (
                <img
                  key={feature.title}
                  src={feature.image}
                  alt={feature.title}
                  className="absolute h-3/4 w-3/4 object-contain object-right transition-opacity duration-500"
                  style={{ opacity: activeFeature === index ? 0.85 : 0 }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <span className="font-mono text-xs text-white/[0.42] uppercase tracking-wider">Engineering Integrity</span>
              <div className="mt-8">
                <span className="text-6xl lg:text-7xl font-display text-[#F5F5F5]">0</span>
                <span className="block text-sm font-mono text-white/[0.50] mt-2">Fabricated claims or ghost metrics</span>
              </div>
            </div>
            
            {/* Standards badges */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
              {standards.map((std, index) => (
                <span
                  key={std}
                  className={`px-3 py-1 border border-transparent hover:border-white/10 rounded-sm text-xs font-mono text-white/[0.50] transition-all duration-300 bg-white/[0.02] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {std}
                </span>
              ))}
            </div>
          </div>

          {/* Feature cards stack */}
          <div className="flex flex-col gap-3">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-5 border rounded-sm transition-all duration-300 cursor-default bg-black ${
                  activeFeature === index 
                    ? "border-white/[0.22]" 
                    : "border-transparent hover:border-white/20"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-9 h-9 rounded-sm flex items-center justify-center border transition-colors ${
                    activeFeature === index 
                      ? "border-white/30 bg-white/10 text-white" 
                      : "border-white/10 text-white/50"
                  }`}>
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-[#F5F5F5] mb-1">{feature.title}</h3>
                    <p className="text-xs text-white/[0.60] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
