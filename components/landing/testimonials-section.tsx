"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight, GraduationCap, Laptop, Radio } from "lucide-react";

const experienceItems = [
  {
    institution: "Saveetha University",
    role: "Final-Year B.Tech in Software Engineering",
    period: "2023 — Present",
    tag: "Academic Foundation",
    summary: "Final-year software engineering student with focused study in distributed systems, operating system concepts, and database architectures. Applied theory directly to multithreaded concurrency labs and federated clinical networks.",
    highlights: [
      "Core focus: AI systems, mobile architecture, and real-time software",
      "Coursework: Concurrency, Thread Safety, Database Management Systems, Data Structures",
      "Academic standing: Final-Year Student (B.Tech)",
    ],
    metric: { value: "Final Year", label: "Saveetha University B.Tech" },
  },
  {
    institution: "Independent Project Engineering",
    role: "Software Architect & Builder",
    period: "2024 — Present",
    tag: "Product Development",
    summary: "Architecting and shipping end-to-end applications across AI, mobile, and web. Built DriverLink Pro with an 82-screen RBAC architecture, and developed SugarScan AI's multimodal vision pipeline.",
    highlights: [
      "DriverLink Pro: 3-sided chauffeur app with 8-role RBAC modeled",
      "SugarScan AI: Local vision SLM with Supabase integration and automated CI/CD",
      "Fashion Marketplace: Multi-role commerce platform with ASP.NET Core & Flutter",
    ],
    metric: { value: "07", label: "Real venture & engineering systems built" },
  },
  {
    institution: "Real-Time & Audio Systems R&D",
    role: "Native Android & C++ Developer",
    period: "2025 — Present",
    tag: "Systems Engineering",
    summary: "Engineering low-latency audio processing on Android. Built VoiceShift's native C++ NDK sound engine and WebRTC pipeline targeting sub-50ms buffer latency.",
    highlights: [
      "C++ 20 & Android NDK low-latency ring buffers",
      "Operational DSP voice preset algorithms (pitch, formant, resonant)",
      "Honest status: Custom neural voice model integration actively in progress",
    ],
    metric: { value: "<50ms", label: "Target audio ring buffer latency" },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + experienceItems.length) % experienceItems.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % experienceItems.length);
  };

  const active = experienceItems[activeIndex];

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 lg:py-36 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-white/50 mb-4 uppercase tracking-wider">
              10 // Experience &amp; Milestones
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Education &amp; <span className="text-white/40">engineering track.</span>
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-2.5 rounded-sm border border-transparent hover:border-white/20 text-white/70 hover:text-white transition-colors"
              aria-label="Previous milestone"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="p-2.5 rounded-sm border border-transparent hover:border-white/20 text-white/70 hover:text-white transition-colors"
              aria-label="Next milestone"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content - Clean Split Layout with Great Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Narrative Side */}
          <div className="flex flex-col justify-between">
            <div key={activeIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-white/[0.03] text-white/80 border border-transparent hover:border-white/10 transition-colors">
                  {active.tag}
                </span>
                <span className="text-xs font-mono text-white/[0.42]">{active.period}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#F5F5F5] tracking-tight">
                {active.institution}
              </h3>

              <p className="text-base sm:text-lg font-medium text-white/[0.85] font-sans">
                {active.role}
              </p>

              <p className="text-sm sm:text-base text-white/[0.72] leading-relaxed font-sans font-light">
                {active.summary}
              </p>

              <ul className="space-y-2.5 pt-4">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/[0.60] font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] mt-2 shrink-0 opacity-70" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Switch Pills */}
            <div className="mt-10 pt-6 flex flex-wrap gap-2.5">
              {experienceItems.map((item, idx) => (
                <button
                  key={item.institution}
                  onClick={() => goTo(idx)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-sm border transition-all ${
                    idx === activeIndex 
                      ? "border-white/30 bg-white/[0.08] text-white font-medium" 
                      : "border-transparent text-white/[0.50] hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item.institution}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Side */}
          <div className="flex flex-col gap-6">
            <div 
              key={`metric-${activeIndex}`}
              className="p-8 sm:p-10 rounded-sm border border-transparent hover:border-white/20 transition-all duration-300 bg-black"
            >
              <span className="text-4xl sm:text-5xl font-display block mb-2 text-[#F5F5F5]">
                {active.metric.value}
              </span>
              <span className="text-xs font-mono text-white/[0.42] uppercase tracking-wider block">
                {active.metric.label}
              </span>
            </div>

            {/* Truthful Disclosure Standard */}
            <div className="p-6 rounded-sm border border-transparent hover:border-white/20 transition-all duration-300 bg-black space-y-2 text-xs font-mono text-white/[0.42]">
              <span className="text-white/[0.72] uppercase tracking-wider font-semibold block">Academic Integrity Standard</span>
              <p className="leading-relaxed">
                Strict truthful disclosure: no fabricated corporate employers, fake client logos, or ghost positions. Every project listed represents functional code authored by Niranjan Karthick.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TestimonialsSection as ExperienceSection };
