"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const footerLinks = {
  Navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Work & Case Studies", href: "#work" },
  ],
  "Venture Systems": [
    { name: "DriverLink Pro", href: "#work", badge: "Prototype" },
    { name: "SugarScan AI", href: "#work", badge: "In Dev" },
    { name: "VoiceShift (VoIP)", href: "#work", badge: "C++/NDK" },
    { name: "MedGrid Nexus", href: "#work", badge: "Federated" },
  ],
  Architecture: [
    { name: "AI Orchestration", href: "#ai" },
    { name: "Technology Stack", href: "#technology" },
    { name: "Products & Ventures", href: "#products" },
    { name: "Academic Track", href: "#experience" },
  ],
  Connect: [
    { name: "Email", href: "mailto:niranjankarthick.eng@gmail.com" },
    { name: "GitHub", href: "https://github.com/TODO_USER" },
    { name: "LinkedIn", href: "https://linkedin.com/in/TODO_USER" },
    { name: "Contact Portal", href: "#contact" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/TODO_USER" },
  { name: "LinkedIn", href: "https://linkedin.com/in/TODO_USER" },
  { name: "Email", href: "mailto:niranjankarthick.eng@gmail.com" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-black text-white">
      {/* Panoramic banner image preserved */}
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Bioluminescent landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#hero" className="inline-flex items-center gap-4 mb-4 group">
                <span className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img src="/images/logo.svg" alt="Niranjan Karthick" className="w-full h-full object-contain" />
                </span>
                <span className="text-2xl font-display text-white tracking-tight">
                  NIRANJAN KARTHICK
                </span>
              </a>

              <p className="text-xs font-mono text-[#eca8d6] uppercase tracking-wider mb-4">
                Software Engineer · AI Product Builder
              </p>

              <p className="text-white/60 leading-relaxed mb-8 max-w-xs text-sm font-sans">
                Final-year student at Saveetha University building AI-powered products, real-time audio systems, and multi-role mobile architectures.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#eca8d6]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">{title}</h3>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2.5"
                      >
                        <span>{link.name}</span>
                        {"badge" in link && link.badge && (
                          <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>
            &copy; 2026 Niranjan Karthick. All rights reserved. Saveetha University.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for engineering roles &amp; technical collaborations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
