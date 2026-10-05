"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface BlueprintBlock {
  tag: string;
  items: string[];
  footer?: string;
}

export interface ProjectBlueprint {
  badge: string;
  subtitle: string;
  blocks: BlueprintBlock[];
}

export interface ProjectData {
  id: string;
  number: string;
  name: string;
  categoryStatus: string;
  statusBadge: "PROTOTYPE" | "IN DEVELOPMENT" | "COURSEWORK" | "INTERVIEW" | "COURSEWORK / INTERVIEW";
  description: string;
  stack: string[];
  keyFeatures: string[];
  blueprint: ProjectBlueprint;
  hasDeepCaseStudy: boolean;
  ctaText: string;
  caseStudy?: {
    overview: string;
    problem: string;
    approach: string;
    architecture: string[];
    technology: string[];
    interaction: string;
    engineeringDecisions: string[];
    currentStatus: string;
    metrics: { label: string; value: string }[];
  };
}

function ProjectArchitectureBlueprint({ blueprint, number }: { blueprint: ProjectBlueprint; number: string }) {
  const isFourCol = blueprint.blocks.length === 4;
  return (
    <div className="relative w-full bg-black p-2.5 sm:p-3 select-text">
      {/* Blueprint Header */}
      <div className="flex flex-wrap items-center justify-between gap-1 mb-1 pb-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[8px] font-mono tracking-wider uppercase text-white/50">
            {blueprint.badge}
          </span>
          <span className="hidden sm:inline font-mono text-[9px] text-[#eca8d6] tracking-wider">
            {blueprint.subtitle}
          </span>
        </div>
        <span className="font-display text-sm sm:text-base text-white/30 group-hover:text-white/60 transition-colors">
          {number}
        </span>
      </div>

      {/* Blueprint Blocks Grid */}
      <div className={`grid gap-1.5 ${
        isFourCol
          ? "grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-3"
      }`}>
        {blueprint.blocks.map((block) => (
          <div
            key={block.tag}
            className="p-1 sm:p-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="font-display text-[11px] sm:text-xs text-white mb-0.5 tracking-tight truncate">
                {block.tag}
              </div>
              <ul className="space-y-0.5 mb-1">
                {block.items.map((item, i) => (
                  <li key={i} className="text-[9px] sm:text-[10px] font-mono text-white/60 flex items-start gap-1 leading-tight">
                    <span className="text-[#eca8d6] shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {block.footer && (
              <div className="pt-0.5 mt-0.5 text-[8px] font-mono text-white/30 uppercase tracking-wider">
                {block.footer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const projects: ProjectData[] = [
  {
    id: "driverlink-pro",
    number: "01",
    name: "DriverLink Pro",
    categoryStatus: "Prototype · Mobility Platform",
    statusBadge: "PROTOTYPE",
    description: "Three-sided chauffeur platform across 82 routed screens with 8-role RBAC security.",
    stack: ["React Native", "Expo", "TypeScript", "R3F"],
    keyFeatures: [
      "82 routed screens across 3 distinct apps",
      "Granular 8-role client permission model",
    ],
    blueprint: {
      badge: "ARCHITECTURE // PROTOTYPE",
      subtitle: "82 SCREENS · 8-ROLE RBAC · EXPO",
      blocks: [
        {
          tag: "01 / RIDER",
          items: ["Scheduled Bookings", "Live Trip Tracking"],
          footer: "24 SCREENS",
        },
        {
          tag: "02 / CHAUFFEUR",
          items: ["Trip Acceptance Queue", "Shift Earnings Ledger"],
          footer: "28 SCREENS",
        },
        {
          tag: "03 / ADMIN",
          items: ["8-Role Granular RBAC", "Fleet Compliance Flow"],
          footer: "30 SCREENS",
        },
      ],
    },
    hasDeepCaseStudy: true,
    ctaText: "Read Case Study",
    caseStudy: {
      overview: "DriverLink Pro is a venture prototype designed for the private chauffeur market in Indian metropolitan cities. It connects car owners, vetted chauffeurs, and fleet managers within a single unified platform.",
      problem: "Traditional on-demand ride services focus on standard taxi dispatch. In contrast, personal chauffeur hiring for client-owned vehicles requires hourly scheduling, multi-tier driver vetting, and rigorous administrative audit trails that generic ride apps do not support.",
      approach: "I built an expansive multi-role client architecture containing 82 fully routed mobile screens across Rider, Chauffeur, and Operations applications. To validate workflows early, all state transitions and permission gates were modeled using decoupled mock state engines.",
      architecture: [
        "Rider Portal (24 screens): Hourly booking calendar, chauffeur tier preferences, and live trip tracking.",
        "Chauffeur Portal (28 screens): Duty availability toggle, verified credential vault, and shift earnings reconciliation.",
        "Admin Portal (30 screens): 8-role granular RBAC governing fleet leads, verification auditors, and dispute supervisors.",
        "Web Showcase: Built with Vite, GSAP scroll timelines, and a procedural 3D hero canvas using React Three Fiber."
      ],
      technology: [
        "React Native & Expo Router for cross-platform navigation",
        "TypeScript with strict schema contracts for state machines",
        "Vite, GSAP & React Three Fiber for the web presentation landing",
        "Modular context stores with mock data injectors"
      ],
      interaction: "Fluid mobile gestures, contextual bottom sheets for vehicle tier selection, and live breadcrumb steps that reflect actual dispatch operations.",
      engineeringDecisions: [
        "Separated state stores from UI components so the mock engine can be swapped for live REST endpoints with zero UI code churn.",
        "Modeled the entire 8-role RBAC hierarchy on client state to discover permission edge cases before writing backend endpoints.",
        "Kept the web landing page decoupled from mobile dependencies for lightweight loading."
      ],
      currentStatus: "Prototype with 82 routed screens and full 8-role RBAC modeled. The application currently runs on mock data engines; live backend integration is planned.",
      metrics: [
        { label: "Routed Screens", value: "82" },
        { label: "RBAC Roles Modeled", value: "8" },
        { label: "Backend State", value: "Mock Engine (No live backend)" },
        { label: "Verification", value: "Prototype Verified" },
      ]
    }
  },
  {
    id: "sugarscan-ai",
    number: "02",
    name: "SugarScan AI",
    categoryStatus: "In Development · AI Health Product",
    statusBadge: "IN DEVELOPMENT",
    description: "Local-first AI nutrition tracker running quantized vision SLMs via Ollama with zero cloud fees.",
    stack: ["React Native", "FastAPI", "Ollama", "Supabase"],
    keyFeatures: [
      "On-device vision with zero cloud API bills",
      "Encrypted glucose logs via Supabase RLS",
    ],
    blueprint: {
      badge: "AI PIPELINE // IN DEV",
      subtitle: "EXPO · FASTAPI · OLLAMA",
      blocks: [
        {
          tag: "01. CAPTURE",
          items: ["Meal Photo Scan", "Client Ingest"],
          footer: "EXPO CLIENT",
        },
        {
          tag: "02. ROUTER",
          items: ["Async Dispatch", "Payload Validation"],
          footer: "FASTAPI GATEWAY",
        },
        {
          tag: "03. INFERENCE",
          items: ["Vision SLM", "Glycemic Estimate"],
          footer: "OLLAMA ENGINE",
        },
        {
          tag: "04. STORE",
          items: ["Encrypted Log", "RLS Security"],
          footer: "SUPABASE",
        },
      ],
    },
    hasDeepCaseStudy: true,
    ctaText: "Read Case Study",
    caseStudy: {
      overview: "SugarScan AI is a mobile health companion designed to make preventative nutritional tracking straightforward, private, and conversational.",
      problem: "Traditional calorie counters require tedious manual text logging, while newer AI food scanners upload raw meal photos to expensive commercial cloud APIs with recurring token costs and serious user privacy concerns.",
      approach: "I engineered a local-first analysis pipeline. The React Native mobile client sends meal captures to an asynchronous FastAPI backend, which runs local Ollama vision models to segment ingredients and estimate glycemic response without cloud token overhead.",
      architecture: [
        "Mobile Client (React Native & Expo): Custom camera capture, meal photo ingestion, voice query input, and glucose history cards.",
        "API Gateway (FastAPI): Asynchronous payload routing, prompt templating, and nutrition parameter extraction.",
        "Local Inference Engine (Ollama): On-premise vision models running locally for meal segmentation and carb estimation.",
        "Data Storage (Supabase): Row-Level Security (RLS) encrypted glucose logs, meal timelines, and companion dialogue states."
      ],
      technology: [
        "React Native & Expo for the cross-platform mobile client",
        "FastAPI (Python) for asynchronous non-blocking routing",
        "Ollama local runtime for multimodal vision models",
        "Supabase (PostgreSQL with Row Level Security)",
        "GitHub Actions CI/CD for automated build verification"
      ],
      interaction: "Users capture a meal photo and immediately receive an ingredient breakdown, estimated glycemic impact, and conversational guidance from the assistant.",
      engineeringDecisions: [
        "Chose local Ollama execution over commercial APIs to eliminate per-scan token fees and protect user meal privacy.",
        "Used Supabase Row Level Security to ensure health records are strictly accessible by their authenticated owner.",
        "Configured GitHub Actions CI/CD to validate TypeScript types and Python linting on every commit."
      ],
      currentStatus: "In active development. Vision scan pipeline, nutrition chat, emotional companion states, scan history, glucose/meal logging, and GitHub Actions CI/CD are functioning.",
      metrics: [
        { label: "Vision Engine", value: "Ollama Local SLM" },
        { label: "CI/CD Pipeline", value: "GitHub Actions" },
        { label: "Storage Architecture", value: "Supabase + RLS" },
        { label: "Clinical Outcome", value: "NOT MEASURED (Non-clinical)" },
      ]
    }
  },
  {
    id: "voiceshift",
    number: "03",
    name: "VoiceShift",
    categoryStatus: "In Development · Real-Time Audio / VoIP",
    statusBadge: "IN DEVELOPMENT",
    description: "Real-time in-call voice converter with <50ms C++ audio DSP engine over WebRTC.",
    stack: ["Kotlin", "Compose", "C++ NDK", "WebRTC"],
    keyFeatures: [
      "Sub-50ms target audio ring buffer latency",
      "Encrypted peer-to-peer WebRTC streaming",
    ],
    blueprint: {
      badge: "REAL-TIME VOIP // IN DEV",
      subtitle: "KOTLIN · C++ NDK · WEBRTC",
      blocks: [
        {
          tag: "01 / AUDIO",
          items: ["Oboe Ring Buffer", "Low-Latency JNI"],
          footer: "NDK CORE",
        },
        {
          tag: "02 / DSP",
          items: ["Pitch & Formant Shift", "DSP Presets"],
          footer: "C++ 20 ENGINE",
        },
        {
          tag: "03 / STREAM",
          items: ["WebRTC AudioTrack", "Encrypted SRTP"],
          footer: "<50MS BUFFER",
        },
      ],
    },
    hasDeepCaseStudy: true,
    ctaText: "Read Case Study",
    caseStudy: {
      overview: "VoiceShift is an experimental native Android communication system that performs digital signal processing directly on live microphone audio inside active peer-to-peer calls.",
      problem: "Most mobile voice modifiers record a sample, process it offline, and play it back. Modulating voice in real time inside a live bidirectional VoIP call requires maintaining strict sub-50ms latency without garbage-collection pauses.",
      approach: "I wrote a low-latency C++ audio processing core integrated into Android via the NDK and AAudio/Oboe buffers. The processed PCM frames are fed directly into a custom WebRTC audio track for Opus streaming.",
      architecture: [
        "Android Client: Kotlin with Jetpack Compose for reactive call control and live audio level monitoring.",
        "DSP Engine (C++ NDK): Lock-free ring buffer executing pitch transposition, formant scaling, and DSP presets.",
        "Transport Layer: Google WebRTC peer connection handling peer discovery and encrypted SRTP streaming.",
        "Signaling Server: FastAPI with WebSockets for SDP offer/answer handshakes and ICE negotiation."
      ],
      technology: [
        "Kotlin & Jetpack Compose for Android UI",
        "C++ 20 & Android NDK for real-time audio manipulation",
        "Google WebRTC for peer-to-peer audio transmission",
        "FastAPI & WebSockets for signaling coordination"
      ],
      interaction: "Users start an encrypted call and can toggle DSP preset profiles from an in-call HUD with immediate auditory feedback.",
      engineeringDecisions: [
        "Implemented the DSP core in native C++ to bypass JVM runtime pauses that would cause audio stutter.",
        "HONEST STATUS NOTE: Algorithmic DSP presets (pitch, formant, robotic, resonant) are operational. Custom neural voice model training and on-device TFLite/ONNX runtime integration are actively in development.",
        "Selected WebRTC for peer-to-peer streaming to minimize server transit delay."
      ],
      currentStatus: "In active development. Real-time in-call WebRTC audio and DSP preset voice transformations are operational. Custom neural voice integration is NOT YET COMPLETE and remains actively in progress.",
      metrics: [
        { label: "Target Latency", value: "<50ms" },
        { label: "DSP Presets", value: "Functional" },
        { label: "Neural Voice", value: "IN PROGRESS (Not complete)" },
        { label: "Audio Engine", value: "C++ 20 / NDK" },
      ]
    }
  },
  {
    id: "medgrid-nexus",
    number: "04",
    name: "MedGrid Nexus",
    categoryStatus: "Prototype · Federated Health Tech",
    statusBadge: "PROTOTYPE",
    description: "Federated health research network querying hospital nodes with zero raw patient data pooling.",
    stack: ["Compose", "Spring Boot", "Jena TDB2", "SPARQL"],
    keyFeatures: [
      "Zero centralized patient records",
      "Federated SPARQL 1.1 semantic queries",
    ],
    blueprint: {
      badge: "FEDERATED HEALTH // PROTOTYPE",
      subtitle: "SPRING BOOT · JENA · SPARQL",
      blocks: [
        {
          tag: "CLINIC NODE",
          items: ["Apache Jena TDB2", "Local Triplestore"],
          footer: "ZERO DATA LEAK",
        },
        {
          tag: "FEDERATED HUB",
          items: ["SPARQL Planner", "JWT Zero-Trust"],
          footer: "COORDINATOR",
        },
        {
          tag: "RESEARCH NODE",
          items: ["Diagnostic Query", "Aggregated Graph"],
          footer: "SECURE RESULT",
        },
      ],
    },
    hasDeepCaseStudy: true,
    ctaText: "Read Case Study",
    caseStudy: {
      overview: "MedGrid Nexus is a distributed clinical diagnostics platform designed to let healthcare institutions collaborate on semantic research queries while keeping raw patient records strictly local.",
      problem: "Healthcare privacy regulations prohibit pooling clinical patient data in central cloud databases. This prevents collaborative multi-center research and diagnostic verification across hospital networks.",
      approach: "I developed a federated semantic web architecture. Each hospital node maintains an independent Apache Jena TDB2 ontological knowledge store. A central Spring Boot orchestrator plans and executes federated SPARQL queries over secure Java RMI.",
      architecture: [
        "Client App (Android Compose): Research interface with structured SPARQL query builder and graph viewer.",
        "Federation Hub (Spring Boot): Semantic query decomposition and sub-query routing to connected hospital nodes.",
        "Hospital Knowledge Nodes: Local Apache Jena TDB2 instances holding ontological models; private records never leave.",
        "Inter-Node Transport: Secure Java Remote Method Invocation (RMI) with mutual JWT verification."
      ],
      technology: [
        "Kotlin & Jetpack Compose for clinical research frontends",
        "Spring Boot 3 for enterprise federated orchestration",
        "Apache Jena TDB2 for semantic RDF/OWL triplestore persistence",
        "SPARQL 1.1 query engine for federated graph traversal",
        "Java RMI with JWT authentication for node trust"
      ],
      interaction: "Researchers input diagnostic parameters; the coordinator queries participating hospital nodes and returns an aggregated knowledge graph highlighting clinical correlations.",
      engineeringDecisions: [
        "Selected semantic web standards (RDF/OWL/SPARQL) to unify disparate medical vocabularies without forcing rigid schema migrations.",
        "Kept query execution strictly local so patient records never cross institutional perimeter boundaries.",
        "Used JWT tokens across all RMI calls to enforce zero-trust authentication between nodes."
      ],
      currentStatus: "Functional multi-node prototype simulating federated query resolution across independent semantic stores. Evaluated on simulated clinical cohorts.",
      metrics: [
        { label: "Data Architecture", value: "Zero Centralized Patient Data" },
        { label: "Knowledge Store", value: "Apache Jena TDB2" },
        { label: "Query Engine", value: "Federated SPARQL 1.1" },
        { label: "Clinical Trials", value: "NOT MEASURED (Simulation)" },
      ]
    }
  },
  {
    id: "fashion-marketplace",
    number: "05",
    name: "Fashion Marketplace",
    categoryStatus: "In Development · E-Commerce Platform",
    statusBadge: "IN DEVELOPMENT",
    description: "Triple-role multi-vendor commerce app with instant role switching and clean CQRS.",
    stack: ["Flutter", "ASP.NET Core", "EF Core", "PostgreSQL"],
    keyFeatures: [
      "Customer, seller & admin in one Flutter client",
      "Clean architecture with MediatR CQRS",
    ],
    blueprint: {
      badge: "COMMERCE // IN DEV",
      subtitle: "FLUTTER · ASP.NET CORE · CQRS",
      blocks: [
        {
          tag: "01 / BOUTIQUE",
          items: ["SKU Management", "Vendor Ledger"],
          footer: "MOBILE CLIENT",
        },
        {
          tag: "02 / STOREFRONT",
          items: ["Role Switching", "Apparel Catalog"],
          footer: "CROSS-PLATFORM",
        },
        {
          tag: "03 / BACKEND",
          items: ["MediatR CQRS", "PostgreSQL + EF"],
          footer: "CLEAN ARCH",
        },
      ],
    },
    hasDeepCaseStudy: false,
    ctaText: "View Technical Overview",
    caseStudy: {
      overview: "Fashion Marketplace is an end-to-end multi-vendor commerce system designed for independent boutique creators and apparel brands in India.",
      problem: "Independent clothing creators often struggle with disjointed software for store browsing, vendor inventory management, and moderation.",
      approach: "Engineered a clean-architecture ASP.NET Core backend serving role-specific endpoints to a single unified Flutter client app with instantaneous role switching.",
      architecture: [
        "Flutter Client: Customer shopping cart, seller product inventory manager, and platform administrator moderation dashboard.",
        "ASP.NET Core Web API: MediatR CQRS pattern, FluentValidation, and ASP.NET Identity with refresh tokens.",
        "Data Layer: Entity Framework Core with code-first migrations backed by PostgreSQL.",
        "Payment Abstraction: IPaymentGateway interface mocked for rapid testing, designed for seamless Razorpay drop-in integration."
      ],
      technology: [
        "Flutter (Dart) for responsive iOS and Android UI",
        "ASP.NET Core (.NET 8) Web API",
        "Entity Framework Core & PostgreSQL",
        "JWT + secure HTTP-only refresh tokens"
      ],
      interaction: "Dynamic role switching allows authorized sellers to toggle between browsing the storefront and updating live inventory counts.",
      engineeringDecisions: [
        "Payment integration is deliberately abstracted behind a clean interface with a mock provider to avoid sandbox charges during active development, while preparing for Razorpay.",
        "Employed CQRS pattern to keep read and write paths cleanly separated."
      ],
      currentStatus: "In active development. Role authorization, catalog management, inventory CRUD, and mock checkout flows are implemented.",
      metrics: [
        { label: "Roles Supported", value: "Customer, Seller, Admin" },
        { label: "Backend Engine", value: "ASP.NET Core + EF Core" },
        { label: "Payment Gateway", value: "Mocked Interface (Razorpay ready)" },
        { label: "Production Revenue", value: "NOT MEASURED (Pre-launch)" },
      ]
    }
  },
  {
    id: "rfid-mattrack",
    number: "06",
    name: "RFID MatTrack",
    categoryStatus: "Coursework / Interview · Systems Simulation",
    statusBadge: "COURSEWORK / INTERVIEW",
    description: "Virtual UHF RFID reader simulation modeling tag discovery, RSSI signals, and duplicate filtering.",
    stack: ["React Native", "iOS", "FastAPI", "Python AsyncIO"],
    keyFeatures: [
      "Hardware-free EPC Gen2 tag simulation",
      "Client-side duplicate filter at 500+ tags/sec",
    ],
    blueprint: {
      badge: "SIMULATION // COURSEWORK",
      subtitle: "REACT NATIVE · FASTAPI · ASYNCIO",
      blocks: [
        {
          tag: "01 / SIMULATOR",
          items: ["Hardware-Free Sim", "EPC Gen2 Stream"],
          footer: "PYTHON ASYNCIO",
        },
        {
          tag: "02 / PIPELINE",
          items: ["500+ Tags/Sec", "Duplicate Filter"],
          footer: "SUB-MS FILTER",
        },
        {
          tag: "03 / UI",
          items: ["Live RSSI Meter", "Tag Aggregation"],
          footer: "IOS CLIENT",
        },
      ],
    },
    hasDeepCaseStudy: false,
    ctaText: "View Technical Overview",
    caseStudy: {
      overview: "RFID MatTrack simulates real-world industrial asset tracking scenarios where mobile workers bind to virtual UHF RFID antennas to monitor tagged warehouse assets.",
      problem: "Developing and testing RFID warehouse software usually requires costly physical reader hardware, test tags, and specialized antenna staging environments.",
      approach: "Built a software-simulated hardware environment where a FastAPI server generates virtual RF tag streams with RSSI variance, antenna attenuation, and duplicate reads.",
      architecture: [
        "React Native iOS Client: Bluetooth/Wi-Fi reader discovery UI, live RSSI signal meter, duplicate aggregation table.",
        "FastAPI RF Simulator: Python AsyncIO engine simulating EPC Gen2 tag collisions, read power levels, and socket drops.",
        "Trusted Binding Protocol: Cryptographic reader-to-terminal pairing to prevent rogue antenna snooping."
      ],
      technology: [
        "React Native for iOS mobile client",
        "FastAPI & WebSockets for bidirectional RF telemetry",
        "AsyncIO for concurrent tag pulse generation"
      ],
      interaction: "Users simulate moving through warehouse portals; the UI dynamically groups identical tag EPCs, shows read count frequencies, and detects socket reconnects.",
      engineeringDecisions: [
        "Implemented duplicate tag de-bouncing on the mobile client to prevent frame rate drops when simulating 500+ tags/second.",
        "Built simulated reconnection backoff to test edge conditions."
      ],
      currentStatus: "Coursework / Interview technical showcase project. Fully functional simulated environment.",
      metrics: [
        { label: "Tag Standard", value: "EPC Gen2 Simulation" },
        { label: "Duplicate Aggregation", value: "Client-side De-bouncing" },
        { label: "Status", value: "Verified Simulation" },
        { label: "Hardware Dependency", value: "Zero (Pure Software Sim)" },
      ]
    }
  },
  {
    id: "concurrent-bank-lab",
    number: "07",
    name: "Concurrent Bank Lab",
    categoryStatus: "Coursework · Systems & Concurrency",
    statusBadge: "COURSEWORK",
    description: "High-volume multithreaded banking lab verifying atomic transfers and deadlock-free lock ordering.",
    stack: ["Java 17", "ReentrantLock", "JDBC", "JUnit 5"],
    keyFeatures: [
      "Deadlock-free lock ordering across threads",
      "10,000+ atomic transfers with zero race conditions",
    ],
    blueprint: {
      badge: "CONCURRENCY // COURSEWORK",
      subtitle: "JAVA 17 · MULTITHREADING · JDBC",
      blocks: [
        {
          tag: "01 / WORKERS",
          items: ["10,000+ Transfers", "Stress Engine"],
          footer: "EXECUTORS",
        },
        {
          tag: "02 / LOCKING",
          items: ["Natural Order", "ReentrantLock"],
          footer: "DEADLOCK-FREE",
        },
        {
          tag: "03 / AUDIT",
          items: ["Balance Invariant", "JUnit 5 Tested"],
          footer: "VERIFIED",
        },
      ],
    },
    hasDeepCaseStudy: false,
    ctaText: "View Technical Overview",
    caseStudy: {
      overview: "A core systems programming experiment exploring high-concurrency race conditions in transactional banking environments.",
      problem: "In high-throughput monetary transfer systems, naive multi-threading results in lost updates, inconsistent account balances, and thread deadlocks when accounts transfer funds reciprocally.",
      approach: "Constructed a multi-threaded Java simulation testing concurrent thread pools attempting simultaneous bidirectional transfers, contrasting naive synchronized blocks against ReentrantLock with timeout and ordered resource acquisition.",
      architecture: [
        "Concurrent Transaction Manager: Worker thread pool dispatching thousands of interleaved transfer jobs.",
        "Deadlock Prevention Module: Strict natural ordering of account resource locks to eliminate cyclic lock dependencies.",
        "Integrity Auditor: Thread-safe verification comparing total bank liquidity before and after stress tests.",
        "Persistence Mock: JDBC transaction isolation experiments simulating READ COMMITTED vs SERIALIZABLE."
      ],
      technology: [
        "Java 17 Concurrency Utilities (Executors, CountDownLatch, AtomicLong)",
        "ReentrantLock & Condition variables",
        "JDBC transaction demarcation",
        "JUnit 5 multithreaded test harness"
      ],
      interaction: "Demonstrates intentional deadlock generation followed by algorithmic recovery using ordered lock acquisitions.",
      engineeringDecisions: [
        "Utilized global account IDs to enforce a strict acquisition sequence, preventing circular wait conditions entirely.",
        "Implemented custom unchecked exceptions for business rule violations (InsufficientFundsException, AccountLockedException)."
      ],
      currentStatus: "Coursework complete. Serves as reference implementation for thread safety and race condition elimination.",
      metrics: [
        { label: "Lost Updates", value: "0 (Guaranteed Atomicity)" },
        { label: "Deadlock Handling", value: "Ordered Resource Locking" },
        { label: "Language", value: "Java 17 Threading" },
        { label: "Coursework Grade", value: "Exemplary" },
      ]
    }
  }
];

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
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

  const filterOptions = ["ALL", "PROTOTYPE", "IN DEVELOPMENT", "COURSEWORK"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "COURSEWORK") return p.statusBadge.includes("COURSEWORK");
    return p.statusBadge === activeFilter;
  });

  return (
    <section id="work" ref={sectionRef} className="relative py-28 lg:py-36 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs md:text-sm font-mono text-white/50 mb-6 uppercase tracking-wider">
              03 // Featured Engineering Work
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Real systems. <span className="text-white/40">Zero fabricated claims.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-white text-black font-semibold shadow-lg"
                    : "bg-white/5 text-white/60 border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid - 7 Projects across Exactly 2 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map((project, index) => {
            const isHero = index === 0 && activeFilter === "ALL";
            return (
              <div
                key={project.id}
                className={`group relative rounded-sm border border-transparent bg-black overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${
                  isHero ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Real Architecture Blueprint (Ultra-compact Typography) */}
                <ProjectArchitectureBlueprint blueprint={project.blueprint} number={project.number} />

                {/* Content Area - Compact, Sleek & Focused */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-display text-[#F5F5F5] mb-1 group-hover:text-white transition-colors duration-200">
                      {project.name}
                    </h3>

                    {/* Concise natural description */}
                    <p className="text-[11px] text-white/[0.65] leading-snug font-sans font-light mb-2">
                      {project.description}
                    </p>

                    {/* Key Contributions / Features */}
                    <div className="mb-2 space-y-0.5">
                      {project.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[10px] text-white/[0.55] font-sans">
                          <Check className="w-2.5 h-2.5 text-[#eca8d6] mt-0.5 shrink-0 opacity-70" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.stack.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 text-[8px] font-mono rounded-sm bg-white/[0.02] border border-white/[0.07] text-white/[0.45]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-2 border-t border-transparent group-hover:border-white/[0.07] transition-colors duration-300 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-white/[0.35] uppercase tracking-wider">
                      {project.hasDeepCaseStudy ? "FULL SPEC" : "SUMMARY"}
                    </span>
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-sm font-mono text-[10px] px-2.5 py-0.5 bg-white text-black hover:bg-white/90 transition-all flex items-center gap-1 h-6"
                    >
                      <span>{project.ctaText}</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && selectedProject.caseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fadeSlideIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-white/10 rounded-sm overflow-y-auto shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-5 bg-black/95 backdrop-blur-md border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-sm text-xs font-mono uppercase tracking-wider border border-white/10 bg-white/[0.03] text-white/80">
                  {selectedProject.categoryStatus}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-sm border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content - 8 Required Sections */}
            <div className="p-8 md:p-12 space-y-12 text-white">
              
              {/* Title & Graphic */}
              <div>
                <span className="text-xs font-mono text-[#eca8d6] uppercase tracking-widest">
                  CASE STUDY // {selectedProject.number}
                </span>
                <h2 className="text-4xl md:text-5xl font-display mt-2 mb-4">
                  {selectedProject.name}
                </h2>
                <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-8 rounded-sm border border-white/10 overflow-hidden bg-black">
                  <ProjectArchitectureBlueprint blueprint={selectedProject.blueprint} number={selectedProject.number} />
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/10">
                {selectedProject.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-white/50">{m.label}</span>
                    <span className="text-xl md:text-2xl font-display text-white">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* 01 / OVERVIEW */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">01 / OVERVIEW</h4>
                <p className="text-base text-white/80 leading-relaxed font-sans">
                  {selectedProject.caseStudy.overview}
                </p>
              </div>

              {/* 02 / PROBLEM */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">02 / PROBLEM</h4>
                <p className="text-base text-white/80 leading-relaxed font-sans">
                  {selectedProject.caseStudy.problem}
                </p>
              </div>

              {/* 03 / APPROACH */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">03 / APPROACH</h4>
                <p className="text-base text-white/80 leading-relaxed font-sans">
                  {selectedProject.caseStudy.approach}
                </p>
              </div>

              {/* 04 / ARCHITECTURE */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">04 / ARCHITECTURE</h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#eca8d6] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 05 / TECHNOLOGY */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">05 / TECHNOLOGY</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedProject.caseStudy.technology.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded bg-white/5 border border-white/10 text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 06 / INTERACTION */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">06 / INTERACTION</h4>
                <p className="text-base text-white/80 leading-relaxed font-sans">
                  {selectedProject.caseStudy.interaction}
                </p>
              </div>

              {/* 07 / ENGINEERING DECISIONS */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">07 / ENGINEERING DECISIONS</h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.engineeringDecisions.map((dec, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/80 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 08 / CURRENT STATUS */}
              <div className="p-6 rounded-xl border border-white/15 bg-white/[0.03] space-y-2">
                <h4 className="text-xs font-mono tracking-widest text-[#eca8d6] uppercase">08 / CURRENT STATUS</h4>
                <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans">
                  {selectedProject.caseStudy.currentStatus}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 z-20 px-8 py-5 bg-black/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">Niranjan Karthick Engineering Archive</span>
              <Button
                onClick={() => setSelectedProject(null)}
                className="bg-white text-black hover:bg-white/90 rounded-full font-mono text-xs px-6"
              >
                Close Case Study
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
