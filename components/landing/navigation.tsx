"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home",        href: "#hero"         },
  { name: "About",       href: "#about"        },
  { name: "Work",        href: "#work"         },
  { name: "AI",          href: "#ai"           },
  { name: "Products",    href: "#products"     },
  { name: "Experience",  href: "#experience"   },
  { name: "Contact",     href: "#contact"      },
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

          {/* Desktop Navigation - Minimalist Inline Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono text-white/60 hover:text-white transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              Contact
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
        <div className="flex flex-col gap-6 py-6 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-wider font-mono text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Button
              asChild
              className="w-full bg-white text-black hover:bg-white/90 rounded-sm font-mono text-xs uppercase tracking-wider h-11"
            >
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>
                View Work
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
