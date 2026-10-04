"use client";

import { useEffect, useRef, useState } from "react";

export function AiSection() {
  const [activeTab, setActiveTab] = useState<"sugarscan" | "general">("sugarscan");
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

  const sugarscanPipeline = [
    {
      step: "01",
      title: "Mobile Capture",
      tech: "React Native & Expo",
      description: "Captures meal photos with instant on-device compression.",
    },
    {
      step: "02",
      title: "API Routing",
      tech: "FastAPI Gateway",
      description: "FastAPI gateway routes async analysis without UI lag.",
    },
    {
      step: "03",
      title: "Local Vision Inference",
      tech: "Ollama Vision SLM",
      description: "Local Ollama model parses ingredients & estimates carbs on-device.",
    },
    {
      step: "04",
      title: "Private Storage & Chat",
      tech: "Supabase & PostgreSQL",
      description: "Private glucose logs protected by PostgreSQL Row-Level Security.",
    },
  ];

  const generalPipeline = [
    { step: "01", name: "User Interface", role: "Mobile / Web Client", desc: "Captures user input and device context." },
    { step: "02", name: "API Gateway", role: "FastAPI Routing", desc: "Validates request payload and checks auth tokens." },
    { step: "03", name: "Context Grounding", role: "Prompt Engine", desc: "Pairs user history with task instructions." },
    { step: "04", name: "Model Execution", role: "Local Ollama", desc: "Runs deterministic models entirely on-device." },
    { step: "05", name: "Data Persistence", role: "PostgreSQL & Vector", desc: "Stores results securely with strict user isolation." },
    { step: "06", name: "Client Stream", role: "Reactive UI", desc: "Streams structured output directly to client." },
  ];

  return (
    <section id="ai" ref={sectionRef} className="relative py-28 lg:py-36 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-white/50 mb-6 uppercase tracking-wider">
              04 // AI Systems &amp; Practical Engineering
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Deterministic systems. <span className="text-white/40">Grounded intelligence.</span>
            </h2>
          </div>

          <div className="max-w-md w-full">
            <p className="text-base text-white/70 leading-relaxed font-sans mb-6">
              Local-first AI without cloud token bills. Fast on-device vision and strict data privacy.
            </p>
            
            {/* Tab switch */}
            <div className="inline-flex p-1 rounded-full border border-white/15 bg-white/5">
              <button
                onClick={() => setActiveTab("sugarscan")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === "sugarscan" ? "bg-white text-black font-semibold shadow" : "text-white/60 hover:text-white"
                }`}
              >
                SugarScan Pipeline
              </button>
              <button
                onClick={() => setActiveTab("general")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === "general" ? "bg-white text-black font-semibold shadow" : "text-white/60 hover:text-white"
                }`}
              >
                General Architecture
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: SugarScan Pipeline */}
        {activeTab === "sugarscan" ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sugarscanPipeline.map((item) => (
                <div
                  key={item.step}
                  className="p-8 rounded-sm border border-transparent bg-black hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#eca8d6] font-semibold">{item.step}</span>
                      <span className="text-[11px] font-mono text-white/[0.42] uppercase tracking-wider">{item.tech}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display text-[#F5F5F5] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/[0.72] leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-transparent hover:border-white/[0.07] transition-colors mt-6 flex items-center justify-between text-xs font-mono text-white/[0.42]">
                    <span>STAGE {item.step}</span>
                    <span className="text-emerald-400/90">VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Tab 2: General Pipeline */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalPipeline.map((p) => (
              <div
                key={p.step}
                className="p-8 rounded-sm border border-transparent bg-black hover:border-white/20 flex flex-col justify-between min-h-[220px] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#eca8d6] font-semibold">{p.step}</span>
                  <span className="text-[11px] font-mono text-white/[0.42]">{p.role}</span>
                </div>
                <div>
                  <h4 className="text-xl font-display text-[#F5F5F5] mb-2">{p.name}</h4>
                  <p className="text-sm text-white/[0.72] font-sans font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3 Core Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-xl font-display text-white">Local Vision Models</h4>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Running vision models locally via Ollama eliminates unpredictable cloud API bills and prevents personal user imagery from being stored by third parties.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-display text-white">Deterministic Data Boundaries</h4>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              AI outputs are validated against strict TypeScript and Pydantic schemas before writing to persistent relational databases or displaying to users.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-display text-white">AI-Assisted Workflow</h4>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Using Google Antigravity and AI coding agents to accelerate prototyping, test generation, and architectural exploration while retaining full human code ownership.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
