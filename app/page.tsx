import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { WorkSection } from "@/components/landing/work-section";
import { AiSection } from "@/components/landing/ai-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { PricingSection as ProductsSection } from "@/components/landing/pricing-section";
import { TestimonialsSection as ExperienceSection } from "@/components/landing/testimonials-section";
import { CtaSection as ContactSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { MotionBanner } from "@/components/landing/motion-banner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-[#eca8d6]/30 selection:text-white">
      <Navigation />
      
      <HeroSection />

      <MotionBanner
        badge="01 // PHILOSOPHY"
        items={[
          "AUTONOMOUS INTELLIGENCE",
          "APPLIED AI & DISTRIBUTED SYSTEMS",
          "NEURAL ARCHITECTURE",
          "CHENNAI ✦ GLOBAL IMPACT",
          "PRODUCTION-GRADE RUNTIMES",
          "ZERO FABRICATED CLAIMS",
        ]}
        accentText="AI"
        reverse={false}
        speed="fast"
      />

      <AboutSection />

      <MotionBanner
        badge="02 // CAPABILITIES"
        items={[
          "FULL-STACK ENGINEERING",
          "LOW-LATENCY WEBRTC ENGINE",
          "C++ NDK AUDIO PIPELINES",
          "MULTI-ROLE MOBILE ARCHITECTURES",
          "SUB-50MS SYSTEM RESPONSE",
          "SCALABLE MICROSERVICES",
        ]}
        accentText="WEBRTC"
        reverse={true}
        speed="fast"
      />

      <FeaturesSection />

      <MotionBanner
        badge="03 // FEATURED WORK"
        items={[
          "7 VERIFIED ENTERPRISE REPOSITORIES",
          "REAL SYSTEMS IN PRODUCTION",
          "HIGH-CONCURRENCY BACKENDS",
          "PROTOTYPE TO SCALE",
          "MISSION-CRITICAL RELIABILITY",
          "RIGOROUS CODE QUALITY",
        ]}
        accentText="PRODUCTION"
        reverse={false}
        speed="fast"
      />

      <WorkSection />

      <MotionBanner
        badge="04 // NEURAL TERMINAL"
        items={[
          "SYNTHETIC LOGIC ENGINE",
          "REAL-TIME VECTOR EMBEDDINGS",
          "QUERY NIRANJAN'S REPOSITORIES",
          "LOW-LATENCY LLM REASONING",
          "INTERACTIVE NEURAL TERMINAL",
          "STRICT TRUTHFUL CONTEXT",
        ]}
        accentText="NEURAL"
        reverse={true}
        speed="fast"
      />

      <AiSection />

      <MotionBanner
        badge="05 // ARCHITECTURE"
        items={[
          "FAULT-TOLERANT CLOUD MESH",
          "HIGH-AVAILABILITY CLUSTERS",
          "DISTRIBUTED EVENT BROKERS",
          "AUTO-HEALING POD RUNTIMES",
          "SECURE RPC & GRPC MESH",
          "99.99% RESILIENCE",
        ]}
        accentText="ARCHITECTURE"
        reverse={false}
        speed="fast"
      />

      <InfrastructureSection />

      <MotionBanner
        badge="06 // BENCHMARKS"
        items={[
          "EMPIRICAL BENCHMARKS",
          "2,400+ CONCURRENT AUDIO CHANNELS",
          "100K+ RECORDS INGESTED",
          "SUB-25MS EDGE LATENCY",
          "ZERO RE-RENDER PERFORMANCE",
          "MEASURED ACCURACY",
        ]}
        accentText="BENCHMARKS"
        reverse={true}
        speed="fast"
      />

      <MetricsSection />

      <MotionBanner
        badge="07 // PRODUCTION STACK"
        items={[
          "NEXT.JS 16 & REACT 19",
          "THREE.JS & R3F WEBGL SHADERS",
          "PYTORCH & FASTAPI",
          "WEBRTC & NATIVE C++",
          "POSTGRESQL & REDIS",
          "DOCKER & GCP CLOUD RUN",
        ]}
        accentText="STACK"
        reverse={false}
        speed="fast"
      />

      <IntegrationsSection />

      <MotionBanner
        badge="08 // SECURITY"
        items={[
          "DEFENSE-IN-DEPTH ARCHITECTURE",
          "ZERO-TRUST NETWORK ACCESS",
          "AES-256 GCM AT REST",
          "GRANULAR ROLE-BASED ACCESS",
          "MUTUAL TLS COMMUNICATIONS",
          "CRYPTOGRAPHIC ENCLAVES",
        ]}
        accentText="ZERO-TRUST"
        reverse={true}
        speed="fast"
      />

      <SecuritySection />

      <MotionBanner
        badge="09 // VENTURE SUITE"
        items={[
          "VENTURE PROTOCOLS",
          "FOUNDER-LED ENGINEERING",
          "SCALABLE COMMERCIAL APPS",
          "INTELLIGENT WORKFLOW ENGINES",
          "REAL-WORLD USER ADOPTION",
          "END-TO-END SYSTEM OWNERSHIP",
        ]}
        accentText="VENTURE"
        reverse={false}
        speed="fast"
      />

      <ProductsSection />

      <MotionBanner
        badge="10 // MILESTONES"
        items={[
          "SAVEETHA UNIVERSITY",
          "BUILDING IN PUBLIC",
          "RESEARCH & OPEN SOURCE",
          "CONSISTENT SHIP SPEED",
          "ENGINEERING EXCELLENCE",
          "2023 — 2026 ROADMAP",
        ]}
        accentText="MILESTONES"
        reverse={true}
        speed="fast"
      />

      <ExperienceSection />

      <MotionBanner
        badge="11 // COLLABORATION"
        items={[
          "DIRECT COLLABORATION",
          "OPEN FOR HIGH-IMPACT ROLES",
          "BUILDING AT THE FRONTIER",
          "CHENNAI ✦ GLOBAL REMOTELY",
          "LET'S BUILD SOMETHING EXTRAORDINARY",
          "GET IN TOUCH",
        ]}
        accentText="COLLABORATION"
        reverse={false}
        speed="fast"
      />

      <ContactSection />
      
      <FooterSection />
    </main>
  );
}
