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
    description: "Three-sided chauffeur platform for riders, drivers, and administrators. Models booking workflows, driver shifts, and role-based permissions.",
    stack: "React Native · Expo · TypeScript · Vite · GSAP · React Three Fiber",
    features: [
      "82 routed mobile screens across Rider, Driver, and Admin portals",
      "8-role client-side RBAC permission model",
      "Decoupled mock engine for testing without backend freeze",
      "Interactive 3D web presentation built with Vite, GSAP, and R3F",
    ],
    cta: "Explore Prototype",
    href: "#work",
  },
  {
    name: "SugarScan AI",
    statusBadge: "IN DEVELOPMENT",
    categoryStatus: "In Development · AI Health Product",
    highlight: true,
    description: "AI food and health companion for meal understanding and glucose tracking. Combines a mobile app with local vision models and Supabase.",
    stack: "React Native · Expo · FastAPI · Supabase · Ollama · GitHub Actions",
    features: [
      "Local multimodal vision analysis using quantized Ollama models",
      "Private glucose logs and dialogue memory via Supabase RLS",
      "Automated CI/CD verification with GitHub Actions",
    ],
    cta: "View System Design",
    href: "#ai",
  },
  {
    name: "Fashion Marketplace",
    statusBadge: "IN DEVELOPMENT",
    categoryStatus: "In Development · E-Commerce Platform",
    highlight: false,
    description: "Triple-role commerce platform for boutique creators, customers, and store managers. Built with Flutter, ASP.NET Core, and PostgreSQL.",
    stack: "Flutter · ASP.NET Core · EF Core · PostgreSQL · JWT · Razorpay Mock",
    features: [
      "Customer, seller, and admin roles in a single client",
      "Clean architecture with MediatR CQRS pattern",
      "Abstracted payment gateway designed for Razorpay",
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
    <section id="products" ref={sectionRef} className="relative py-28 lg:py-36 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-white/50 mb-6 uppercase tracking-wider">
              05 // Products &amp; Ventures
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Built for <span className="text-white/40">real-world impact.</span>
            </h2>
          </div>

          <div className="max-w-md w-full">
            <p className="text-base text-white/70 leading-relaxed font-sans">
              Three focused software ventures engineered with commercial discipline, pragmatic technology choices, and clear market relevance for India.
            </p>
          </div>
        </div>

        {/* 3 Column Grid with minimal hairline black cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <div
              key={venture.name}
              className="relative rounded-sm border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 bg-black border-transparent hover:border-white/20"
            >
              {/* Highlight badge */}
              {venture.highlight && (
                <div className="absolute -top-3 left-8 right-8 flex justify-center z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-black border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest rounded-sm">
                    <Sparkles className="w-2.5 h-2.5 text-[#eca8d6]" />
                    Active Development
                  </span>
                </div>
              )}

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#eca8d6] uppercase tracking-wider">
                    0{index + 1} // VENTURE
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded-sm tracking-wider uppercase border border-white/10 bg-white/[0.02] text-white/[0.60]">
                    {venture.statusBadge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display text-[#F5F5F5] mb-1.5">
                  {venture.name}
                </h3>
                
                <p className="text-xs font-mono text-white/[0.42] mb-6">
                  {venture.categoryStatus}
                </p>

                {/* Concise natural description */}
                <p className="text-sm text-white/[0.72] leading-relaxed font-sans font-light mb-8">
                  {venture.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8 pt-4">
                  <span className="text-[11px] font-mono text-white/[0.42] uppercase tracking-wider block mb-2">
                    Technology Stack
                  </span>
                  <p className="text-xs font-mono text-white/[0.50] leading-relaxed">
                    {venture.stack}
                  </p>
                </div>

                {/* Features list */}
                <div className="mb-8">
                  <span className="text-[11px] font-mono text-white/[0.42] uppercase tracking-wider block mb-3">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2.5">
                    {venture.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/[0.60] font-sans">
                        <Check className="w-3.5 h-3.5 text-[#eca8d6] mt-0.5 shrink-0 opacity-70" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <Button
                asChild
                className="w-full py-2.5 h-9 rounded-sm font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 bg-white/[0.03] text-white hover:bg-white hover:text-black"
              >
                <a href={venture.href}>
                  <span>{venture.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
