"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FileText, Github, Linkedin, Mail } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("niranjankarthick.eng@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative bg-black transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 py-6 lg:py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">
              {/* Left content */}
              <div className="flex-1 max-w-2xl">
                <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-white/[0.42] mb-6 uppercase tracking-wider">
                  11 // Direct Collaboration &amp; Contact
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight mb-6 leading-[1.04] text-[#F5F5F5]">
                  LET&apos;S BUILD SOMETHING WORTH SHIPPING.
                </h2>

                <p className="text-base sm:text-lg text-white/[0.72] mb-10 leading-relaxed max-w-xl font-sans font-light">
                  Open to conversations around software engineering, AI systems, product development, and interesting technical problems.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button
                    size="lg"
                    onClick={copyEmail}
                    className="bg-white hover:bg-white/90 text-black px-6 h-11 text-xs font-mono rounded-sm font-medium"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2 text-emerald-600" />
                        Email Copied to Clipboard
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Copy Email (niranjankarthick.eng@gmail.com)
                      </>
                    )}
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 px-6 text-xs font-mono rounded-sm border-white/10 hover:bg-white/5 text-white"
                  >
                    <a href="mailto:niranjankarthick.eng@gmail.com?subject=Engineering%20Opportunity">
                      Open Mail Client
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Direct Channels */}
                <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <a
                    href="mailto:niranjankarthick.eng@gmail.com"
                    className="p-3 rounded-sm border border-transparent hover:border-white/20 bg-black transition-all flex items-center gap-2 text-xs font-mono text-white/[0.70] hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#eca8d6]" />
                    <span>EMAIL</span>
                  </a>

                  <a
                    href="https://github.com/TODO_USER"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-sm border border-transparent hover:border-white/20 bg-black transition-all flex items-center gap-2 text-xs font-mono text-white/[0.70] hover:text-white"
                  >
                    <Github className="w-3.5 h-3.5 text-[#eca8d6]" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/TODO_USER"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-sm border border-transparent hover:border-white/20 bg-black transition-all flex items-center gap-2 text-xs font-mono text-white/[0.70] hover:text-white"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#eca8d6]" />
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Resume PDF link configured as TODO_USER. Please provide your uploaded resume link.");
                    }}
                    className="p-3 rounded-lg border border-transparent hover:border-white/20 bg-black transition-all flex items-center gap-2 text-xs font-mono text-foreground/80 hover:text-foreground"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#eca8d6]" />
                    <span>RESUME (PDF)</span>
                  </a>
                </div>

                <p className="text-xs text-muted-foreground mt-6 font-mono">
                  Location: Saveetha University · Chennai, India · Open to Remote &amp; On-Site
                </p>
              </div>

              {/* Right image - fitted naturally for desktop */}
              <div className="hidden lg:flex items-center justify-center w-[480px] xl:w-[540px] shrink-0">
                <img
                  src="/images/bridge.png"
                  alt="Connected bridge graphic"
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CtaSection as ContactSection };
