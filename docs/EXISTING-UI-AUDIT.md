# EXISTING UI AUDIT & TRANSFORMATION BLUEPRINT
**Target**: Niranjan Karthick (NK) — Software Engineer & AI Product Builder Portfolio
**Date**: October 2026
**Workspace Root**: `/Users/niranjankarthick/Documents/mass ui `

---

## 1. Executive Summary & Objective

This audit evaluates the existing downloaded v0 web template (`my-v0-project`) to plan an in-place transformation into the official, high-impact personal software-engineering portfolio for **Niranjan Karthick**.

The core directive is **Preservation Over Replacement**:
- Retain the layout geometry, responsive architecture, Tailwind + CSS custom properties, and typography system.
- Preserve the bespoke micro-animations (e.g. `BlurWord`, ASCII canvas rendering in `ascii-scene.tsx`, particle interaction canvas in `features-section.tsx`, SVG dot connecting lines in `infrastructure-section.tsx`, live `DotGraph` in `metrics-section.tsx`).
- Transform all generic SaaS/distributed-agent placeholder content into authentic, rigorously truthful engineering narratives covering Niranjan's real venture prototypes, mobile applications, AI systems, real-time C++/NDK VoIP, and university projects.

---

## 2. Existing System Architecture

### 2.1 Framework & Core Tooling
- **Framework**: Next.js 16.2.0 (App Router, Turbopack enabled, React 19.3.0).
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, `@import 'tailwindcss'`, `@import 'tw-animate-css'`) with OKLCH-based color tokens in `app/globals.css`.
- **Typography**:
  - Display: `Instrument Serif` (Google Fonts, variable `--font-instrument-serif`)
  - Sans Body: `Instrument Sans` (Google Fonts, variable `--font-instrument`)
  - Monospace: `JetBrains Mono` (Google Fonts, variable `--font-jetbrains`) and `Geist Mono`
- **Component Primitives**: Radix UI suite (Accordion, Dialog, Drawer, Dropdown, Popover, Tabs, Tooltip, Sheet, Slider, Toast/Sonner), Lucide Icons (`lucide-react`).
- **3D / Canvas**:
  - Procedural 2D/3D Canvas in `ascii-scene.tsx` (Torus knot 3D rotation projected into ASCII characters with depth buffer and particle field).
  - Floating interactive particle mesh in `features-section.tsx`.
  - Dynamic sine wave / dot audio-visualizer in `metrics-section.tsx` (`DotGraph`).
  - Animated wave canvas in `footer-section.tsx`.
  - `@react-three/fiber` 9.5.0 and `three` 0.183.2 installed in `package.json`.

### 2.2 Visual Hierarchy & Design System Tokens
- **Background**: `oklch(0.06 0.008 260)` (deep cinematic charcoal-black)
- **Foreground / Text**: `oklch(0.94 0.005 90)` (warm editorial off-white)
- **Borders**: `oklch(0.18 0.008 260)` (delicate technical hairline borders)
- **Accents**: Subtle rose/blush (`#eca8d6`), restrained violet (`#a78bfa`), and cobalt
- **Card Styling**: High-precision square or slightly radiused technical cards (`rounded-[4px]`), monospace category badges, tabular numbers, live status tickers.

---

## 3. Inventory of Existing Sections & Components

| Existing Component | Current Role | Transformation Target | Preserved Mechanics |
| :--- | :--- | :--- | :--- |
| `Navigation.tsx` | Fixed floating nav with scroll collapse & mobile overlay | **NK Portfolio Navigation** | Floating blur capsule, scroll-linked shrink, full-screen mobile menu with staggered typography |
| `HeroSection.tsx` | Hero banner with looping background video, `BlurWord` headline animation, 3 stat counters | **Niranjan Karthick Hero** | Video backdrop, ambient grid lines, letter-by-letter blur and gradient animation (`BlurWord`), real stats |
| `ascii-scene.tsx` | Interactive 3D ASCII Torus Knot | **Creative Technology & Systems Visualizer** | Full 3D math projection, mouse interactivity, depth shading, ASCII particle system |
| `features-section.tsx` | "Intelligent workers" bento card with interactive particle canvas | **09. Capabilities & Technical Breadth** (Mobile, Web, Backend, AI, Real-time, Product) | Particle canvas with cursor attraction, large editorial typography, metric badges |
| `how-it-works-section.tsx` | 3-step agent definition with code terminal & timer progress | **14. AI Systems & Architecture** (Ollama, Vision models, pipelines, SugarScan AI flow) | Automated step timer, progress bars, interactive code/architecture inspection |
| `infrastructure-section.tsx` | "Global by default" region map with pulsing SVG grid lines | **10. Work & Venture Prototypes** (DriverLink Pro, SugarScan AI, VoiceShift) | Interactive SVG connecting lines, dot pulses, high-contrast metric callouts |
| `metrics-section.tsx` | Real-time agent metrics with number scramble & `DotGraph` | **Engineering Metrics & Verification** (82 screens, DSP latency, federated queries) | Live clock, number scramble interpolation, canvas dot frequency waves |
| `integrations-section.tsx` | 12-item brand logo grid with cursor halo effect | **16. Technology Ecosystem** (React Native, FastAPI, WebRTC, NDK, C++, etc.) | Cursor-following radial light halo, category badges, hover expansion |
| `security-section.tsx` | 4 security pillars with image crossfade & badges | **Engineering Principles & Reliability** (Zero-leakage, sandboxing, RBAC, DSP latency) | Vertical accordion tab selector, crossfading illustration container |
| `developers-section.tsx` | Developer SDK highlights with floating graphic | **08. About Niranjan Karthick & AI-Assisted Workflow** | Split layout, technical monospace metadata, structured bullet points |
| `testimonials-section.tsx` | Carousel with quotes and client metrics | **17. Experience & Academic Foundation** (Saveetha University, independent projects) | Progress bar ticker, left/right navigation controls, large quote display |
| `pricing-section.tsx` | 3 SaaS tiers with whale visual | **15. Products & Ventures Showcase** (Problem / Solution / Tech / Status cards) | 3-column card layout, highlighted center card, feature checklist, CTA buttons |
| `cta-section.tsx` | "Ready to delegate" banner with spotlight cursor | **18. Contact & Collaboration Call-to-Action** | Cursor spotlight tracking, technical corner reticles, dual action buttons |
| `footer-section.tsx` | Panoramic image, link columns, operational status | **NK Footer** | Panoramic header visual, column grid, social links with hover flyout arrows |

---

## 4. Preservation & Transformation Matrix

### What is PRESERVED:
1. **Visual Geometry**: Hairline grid lines, technical borders, monospace micro-eyebrows, large editorial display headers (`text-6xl md:text-7xl lg:text-[128px] font-display`).
2. **Animation Engine**:
   - `BlurWord` letter-by-letter blur and gradient transition.
   - Canvas-based particle interactive field with cursor repulsion/attraction.
   - Interactive canvas Torus Knot ASCII renderer.
   - Animated SVG node connections and live canvas dot graphs.
   - Full-screen mobile navigation with staggered translateY reveals.
3. **Typography & Styling**: `Instrument Serif` + `Instrument Sans` + `JetBrains Mono` triad.
4. **Performance**: No bloat, smooth 60fps rendering, clamped DPR, unoptimized Next image flag intact.

### What is TRANSFORMED:
1. **Brand Identity**:
   - Replace "COMPUTE TM" with **NIRANJAN KARTHICK** and **NK** monogram.
   - Establish `/public/assets/adobe-express/` and `/assets-inbox/adobe-express/` asset pipelines.
2. **Navigation Items**:
   - `HOME`, `ABOUT`, `WORK`, `AI`, `PRODUCTS`, `EXPERIENCE`, `CONTACT`.
3. **Hero Content**:
   - Positioning: **Software Engineer · AI / Product / Creative Technology**.
   - Primary statement: *"Building AI-powered products and real-world software systems for the Indian market."*
   - Metadata: **Final-Year Student · Saveetha University**.
4. **Work / Projects**:
   - Replaced fictional SaaS with the 7 verified projects:
     1. DriverLink Pro (Prototype, 82 screens, 8-role RBAC, Vite+GSAP+R3F landing)
     2. SugarScan AI (In Development, React Native, FastAPI, Supabase, Ollama)
     3. VoiceShift (In Development, Kotlin, Compose, C++, NDK, WebRTC, FastAPI; neural voice marked in-progress)
     4. MedGrid Nexus (Prototype, Compose, Spring Boot, Apache Jena TDB2, SPARQL)
     5. Fashion Marketplace (In Development, Flutter, ASP.NET Core, EF Core, Postgres, Razorpay mock)
     6. RFID MatTrack (Coursework/Interview, React Native iOS, FastAPI)
     7. Concurrent Bank Lab (Coursework, Java threading, lost-update & deadlock simulation)
5. **Interactive Deep Case Studies**:
   - 4 deep case studies for DriverLink Pro, SugarScan AI, VoiceShift, and MedGrid Nexus adhering to the strict 8-point architectural specification.
6. **AI Section**:
   - Real-world technical architecture diagrams showing Ollama, FastAPI, Supabase, and React Native pipelines without exaggerated glowing graphics.
7. **Contact**:
   - Genuine contact channels (Email, GitHub, LinkedIn, Resume) with `TODO_USER` placeholders where external URLs are pending.

### What is REMOVED:
- Fictional enterprise clients (Meridian Labs, Flux Systems, Beacon AI, Prism Analytics).
- Invented SaaS pricing tiers ($79/mo, $0/mo).
- Fictional customer satisfaction metrics.
