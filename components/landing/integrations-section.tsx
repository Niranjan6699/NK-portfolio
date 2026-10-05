"use client";

import { useEffect, useState, useRef } from "react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Smartphone, 
  Terminal, 
  Workflow, 
  Radio, 
  Binary, 
  Sparkles, 
  GitBranch, 
  Box 
} from "lucide-react";

interface TechItem {
  name: string;
  category: "Mobile" | "Web" | "Backend" | "AI" | "Real-Time" | "Tooling";
  icon: React.ElementType;
}

const technologies: TechItem[] = [
  { name: "React Native", category: "Mobile", icon: Smartphone },
  { name: "Expo", category: "Mobile", icon: Layers },
  { name: "Kotlin", category: "Mobile", icon: Smartphone },
  { name: "Flutter", category: "Mobile", icon: Smartphone },
  { name: "React", category: "Web", icon: Globe },
  { name: "TypeScript", category: "Web", icon: Code2 },
  { name: "Vite", category: "Web", icon: Terminal },
  { name: "Tailwind CSS", category: "Web", icon: Layers },
  { name: "FastAPI", category: "Backend", icon: Terminal },
  { name: "ASP.NET Core", category: "Backend", icon: Box },
  { name: "Spring Boot", category: "Backend", icon: Layers },
  { name: "PostgreSQL", category: "Backend", icon: Database },
  { name: "Supabase", category: "Backend", icon: Database },
  { name: "Ollama", category: "AI", icon: Cpu },
  { name: "WebRTC", category: "Real-Time", icon: Radio },
  { name: "C++", category: "Real-Time", icon: Binary },
  { name: "Android NDK", category: "Real-Time", icon: Cpu },
  { name: "GSAP", category: "Web", icon: Sparkles },
  { name: "Three.js", category: "Web", icon: Box },
  { name: "React Three Fiber", category: "Web", icon: Box },
  { name: "GitHub Actions", category: "Tooling", icon: GitBranch },
  { name: "Azure DevOps", category: "Tooling", icon: Workflow },
];

export function IntegrationsSection() {
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
    <section id="technology" ref={sectionRef} className="relative overflow-hidden bg-background py-20 lg:py-28">
      
      {/* Header with controlled section typography (48-58px max) */}
      <div className="relative z-10 text-center max-w-[1400px] mx-auto px-6 lg:px-12 mb-10 lg:mb-14">
        <span className={`inline-flex items-center gap-4 text-xs md:text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider justify-center transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          07 // Production Stack &amp; Toolchain
        </span>

        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          Crafted with <span className="text-muted-foreground">purposeful tools.</span>
        </h2>

        <p className={`mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto font-sans font-light transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          A pragmatic ecosystem chosen for reliability, native execution speeds, memory safety, and rapid production delivery.
        </p>
      </div>

      {/* Cinematic Hand Connection Artwork — Full-Width Desktop Scene (Reference 01) */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden my-8 lg:my-14 flex items-center justify-center">
        <div className={`relative w-full h-[48vh] sm:h-[56vh] md:h-[64vh] lg:h-[70vh] max-h-[660px] transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png"
            alt="Organic bioluminescent hand connection artwork"
            className="w-full h-full object-cover object-center"
          />
          {/* Natural atmospheric edge integration */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Technology Index — Clean, Compact Technical Index Positioned Below Artwork */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-4">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Core Technology Index ({technologies.length} Verified)
          </span>
          <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
            Production &amp; Systems Toolchain
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 mb-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className={`group relative flex items-center justify-between px-3 py-2.5 border rounded-sm transition-all duration-300 cursor-default bg-black border-transparent hover:border-white/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 15 + 100}ms`,
                }}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-2 min-w-0">
                  <Icon className="w-3.5 h-3.5 text-white/50 shrink-0 group-hover:text-[#eca8d6] transition-colors" />
                  <span className="font-medium text-xs text-[#F5F5F5] truncate">{tech.name}</span>
                </div>

                {/* Subtle category tag */}
                <span className="text-[9px] font-mono text-white/[0.42] shrink-0 ml-2">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-4 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-8 lg:gap-16">
            {[
              { value: "22+", label: "Verified technologies in production code" },
              { value: "C++ & NDK", label: "Low-latency systems core" },
              { value: "Ollama", label: "Local vision & SLM inference" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-2xl lg:text-3xl font-display">{stat.value}</span>
                <span className="text-xs text-muted-foreground font-mono">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#work" className="group inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
            Inspect project architectures
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export { IntegrationsSection as TechnologySection };
