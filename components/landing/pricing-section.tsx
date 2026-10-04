"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ventures = [
  {
    name: "DriverLink Pro",
    statusBadge: "PROTOTYPE",
    categoryStatus: "Prototype · Mobility Platform",
    highlight: false,
    description: "Three-sided chauffeur platform across 82 routed screens with 8-role RBAC security.",
    stack: "React Native · Expo · TypeScript · R3F",
    features: [
      "82 routed mobile screens across 3 distinct portals",
      "8-role client-side permission model",
      "Interactive 3D web presentation showcase",
    ],
    cta: "Explore Prototype",
    href: "#work",
  },
  {
    name: "SugarScan AI",
    statusBadge: "IN DEVELOPMENT",
    categoryStatus: "In Development · AI Health",
    highlight: true,
    description: "Private AI meal scanner and glucose companion running quantized vision models locally.",
    stack: "React Native · FastAPI · Ollama · Supabase",
    features: [
      "On-device vision analysis with zero cloud fees",
      "Encrypted glucose logs via Supabase RLS",
      "Automated CI/CD build & lint verification",
    ],
    cta: "View System Design",
    href: "#ai",
  },
  {
    name: "Fashion Marketplace",
    statusBadge: "IN DEVELOPMENT",
    categoryStatus: "In Development · Commerce",
    highlight: false,
    description: "Multi-vendor apparel platform with instant role switching and clean CQRS architecture.",
    stack: "Flutter · ASP.NET Core · PostgreSQL · EF Core",
    features: [
      "Customer, seller & admin in one Flutter client",
      "Clean architecture with MediatR CQRS",
      "Abstracted payment gateway ready for Razorpay",
    ],
    cta: "Inspect Architecture",
    href: "#work",
  },
];

export function PricingSection() {
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

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-28 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-white/50 mb-4 uppercase tracking-wider">
              05 // Products &amp; Ventures
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-display tracking-tight leading-[1.04] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Built for <span className="text-white/40">real-world impact.</span>
            </h2>
          </div>

          <div className="max-w-md w-full">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
              Three focused software ventures engineered with commercial discipline, pragmatic technology, and clear market relevance.
            </p>
          </div>
        </div>

        {/* 3 Column Grid with compact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {ventures.map((venture, index) => (
            <div
              key={venture.name}
              className="relative rounded-sm border p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 bg-black border-transparent hover:border-white/20"
            >
              {/* Highlight badge */}
              {venture.highlight && (
                <div className="absolute -top-3 left-6 right-6 flex justify-center z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black border border-white/20 text-white text-[9px] font-mono uppercase tracking-widest rounded-sm">
                    <Sparkles className="w-2.5 h-2.5 text-[#eca8d6]" />
                    Active Development
                  </span>
                </div>
              )}

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-[#eca8d6] uppercase tracking-wider">
                    0{index + 1} // VENTURE
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono rounded-sm tracking-wider uppercase border border-white/10 bg-white/[0.02] text-white/[0.60]">
                    {venture.statusBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display text-[#F5F5F5] mb-1">
                  {venture.name}
                </h3>
                
                <p className="text-[10px] font-mono text-white/[0.42] mb-3">
                  {venture.categoryStatus}
                </p>

                {/* Concise natural description */}
                <p className="text-xs sm:text-[13px] text-white/[0.72] leading-normal font-sans font-light mb-4">
                  {venture.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 pt-2">
                  <span className="text-[10px] font-mono text-white/[0.42] uppercase tracking-wider block mb-1">
                    Technology Stack
                  </span>
                  <p className="text-[11px] font-mono text-white/[0.50] leading-snug">
                    {venture.stack}
                  </p>
                </div>

                {/* Features list */}
                <div className="mb-5">
                  <span className="text-[10px] font-mono text-white/[0.42] uppercase tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {venture.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[11px] sm:text-xs text-white/[0.60] font-sans">
                        <Check className="w-3 h-3 text-[#eca8d6] mt-0.5 shrink-0 opacity-70" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <Button
                asChild
                className="w-full py-2 h-8 rounded-sm font-mono text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-white/10 bg-white/[0.03] text-white hover:bg-white hover:text-black"
              >
                <a href={venture.href}>
                  <span>{venture.cta}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingSection as ProductsSection };
