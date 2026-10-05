"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { num: "01", name: "About", href: "#about" },
  { num: "02", name: "Capabilities", href: "#capabilities", hideOnMd: true },
  { num: "03", name: "Work", href: "#work" },
  { num: "04", name: "AI", href: "#ai" },
  { num: "05", name: "Architecture", href: "#infra" },
  { num: "07", name: "Stack", href: "#technology", hideOnMd: true },
  { num: "09", name: "Products", href: "#products" },
  { num: "10", name: "Experience", href: "#experience" },
];

const mobileSections = [
  { num: "01", name: "About & Philosophy", href: "#about" },
  { num: "02", name: "Core Capabilities", href: "#capabilities" },
  { num: "03", name: "Featured Work", href: "#work" },
  { num: "04", name: "Applied AI", href: "#ai" },
  { num: "05", name: "Architecture", href: "#infra" },
  { num: "06", name: "Verified Benchmarks", href: "#metrics" },
  { num: "07", name: "Production Stack", href: "#technology" },
  { num: "08", name: "Reliability & Security", href: "#security" },
  { num: "09", name: "Products & Ventures", href: "#products" },
  { num: "10", name: "Experience & Milestones", href: "#experience" },
  { num: "11", name: "Contact & Collaboration", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/[0.08]" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div 
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16 lg:h-18"
          }`}
        >
          {/* Logo / Brand Lockup - Clean, Box-free */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <span className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img src="/images/logo.svg" alt="Niranjan Karthick" className="w-full h-full object-contain" />
            </span>
            <div className="flex flex-col">
              <span className="font-display tracking-tight text-base sm:text-lg text-white leading-tight">
                NIRANJAN KARTHICK
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-white/50">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Minimalist Inline Links with Page Numbers */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group items-baseline gap-1 text-[11px] xl:text-xs uppercase tracking-wider font-mono text-white/60 hover:text-white transition-colors duration-200 py-1 ${
                  link.hideOnMd ? "hidden lg:flex" : "flex"
                }`}
              >
                <span className="text-[#eca8d6]/50 group-hover:text-[#eca8d6] transition-colors font-mono text-[9px]">
                  {link.num}
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="group flex items-baseline gap-1 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              <span className="text-[#eca8d6]/50 group-hover:text-[#eca8d6] transition-colors font-mono text-[9px]">
                11
              </span>
              <span>Contact</span>
            </a>
            <Button
              asChild
              size="sm"
              className="rounded-sm font-mono text-xs bg-white hover:bg-white/90 text-black px-4 h-8 font-medium transition-all"
            >
              <a href="#work">
                View Work
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 pt-20 px-8 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 py-4 border-t border-white/10 max-h-[calc(100vh-100px)] overflow-y-auto">
          {mobileSections.map((section) => (
            <a
              key={section.num}
              href={section.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2 text-sm uppercase tracking-wider font-mono text-white/80 hover:text-white transition-colors border-b border-white/[0.04]"
            >
              <span className="text-[#eca8d6] font-mono text-xs font-semibold">
                {section.num} //
              </span>
              <span>{section.name}</span>
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-white text-black hover:bg-white/90 rounded-sm font-mono text-xs uppercase tracking-wider h-10"
            >
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>
                View Work (03)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
