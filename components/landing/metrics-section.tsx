"use client";

import { useEffect, useState, useRef } from "react";

const metrics = [
  { 
    value: 82, 
    suffix: " Screens", 
    prefix: "",
    label: "DriverLink Pro Prototype",
    sublabel: "Rider, Driver & 8-Role Admin Portals",
  },
  { 
    value: 50, 
    suffix: "ms", 
    prefix: "<",
    label: "VoiceShift Latency Target",
    sublabel: "Real-time C++ NDK audio ring buffer",
  },
  { 
    value: 7, 
    suffix: " Systems", 
    prefix: "",
    label: "Functional Projects Built",
    sublabel: "Mobile, Web, Backend & Concurrency",
  },
];

function AnimatedNumber({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isScrambling, setIsScrambling] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2200;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            setIsScrambling(progress < 0.8);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const displayValue = count.toLocaleString();

  return (
    <div ref={ref} className="inline-flex items-baseline">
      <span className="text-muted-foreground mr-1">{prefix}</span>
      <span className="tabular-nums font-display">
        {displayValue.split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-150 ${
              isScrambling && char !== "," ? "blur-[0.5px]" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="text-muted-foreground text-2xl lg:text-3xl font-display ml-1">{suffix}</span>
    </div>
  );
}



function DotGraph({
  color = "white",
  height = 32,
  freq1 = 0.35,
  freq2 = 0.12,
  freqT = 0.7,
  speed = 0.025,
  baseline = 0.3,
  amplitude = 0.5,
}: {
  color?: string;
  height?: number;
  freq1?: number;
  freq2?: number;
  freqT?: number;
  speed?: number;
  baseline?: number;
  amplitude?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(Math.random() * 100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.offsetWidth || 300;
    const H = height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      const t = timeRef.current;
      const cols = Math.floor(W / 8);

      for (let i = 0; i < cols; i++) {
        const raw = baseline + amplitude * Math.sin(i * freq1 + t) * Math.cos(i * freq2 + t * freqT);
        const v = Math.max(0, Math.min(1, raw));
        const dotY = H - 4 - v * (H - 8);
        const x = i * 8 + 4;
        const alpha = 0.15 + v * 0.55;
        const r = 1.5 + v * 1.2;

        ctx.beginPath();
        ctx.arc(x, dotY, r, 0, Math.PI * 2);
        ctx.fillStyle = color === "pink"
          ? `rgba(236, 168, 214, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      timeRef.current += speed;
      frameRef.current = requestAnimationFrame(render);
    };

    let frameRef = { current: 0 };
    frameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRef.current);
  }, [color, height, freq1, freq2, freqT, speed, baseline, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: `${height}px`, display: "block" }}
    />
  );
}

export function MetricsSection() {
  const [time, setTime] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

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
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden bg-background">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[#eca8d6]/10 text-[#eca8d6] text-xs font-mono rounded">
                <span className="w-2 h-2 rounded-full bg-[#eca8d6] animate-pulse" />
                VERIFIED BENCHMARKS
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                {time ? `${time.toLocaleTimeString("en-GB")} IST · Saveetha University` : ""}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-display tracking-tight leading-[1.04] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              Engineering <span className="text-muted-foreground">in tangible numbers.</span>
            </h2>
          </div>
        </div>

        {/* Cinematic Organic Frequency Landscape — Full-Width Desktop Scene (Matching Hand Artwork) */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden my-6 lg:my-10 flex items-center justify-center">
          <div className={`relative w-full h-[32vh] sm:h-[40vh] md:h-[46vh] lg:h-[50vh] max-h-[480px] transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time-graph-INFmn3u0MlUwvNPynoIhwxtPaPjxM5.png"
              alt="Frequency telemetry organic landscape"
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            {/* Seamless atmospheric black edge fades */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-28 sm:w-44 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Metric */}
          <div className={`lg:col-span-1 bg-black border border-transparent hover:border-white/20 rounded-sm p-8 lg:p-12 transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-4 text-[#F5F5F5]">
              <AnimatedNumber end={metrics[0].value} suffix={metrics[0].suffix} prefix={metrics[0].prefix} />
            </div>
            <div className="mb-6">
              <DotGraph color="pink" height={36} freq1={0.28} freq2={0.09} freqT={0.5} speed={0.018} baseline={0.35} amplitude={0.55} />
            </div>
            <div className="text-base text-[#F5F5F5] font-medium mb-1">{metrics[0].label}</div>
            <div className="text-xs text-white/[0.42] font-mono">{metrics[0].sublabel}</div>
          </div>

          {/* Additional Metrics */}
          {metrics.slice(1).map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-black border border-transparent hover:border-white/20 rounded-sm p-8 flex flex-col items-start justify-between gap-6 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-full">
                <div className="text-xs text-white/[0.42] font-mono mb-1">{metric.sublabel}</div>
                <div className="text-sm text-[#F5F5F5] font-medium mb-4">{metric.label}</div>
                <DotGraph
                  color={index === 0 ? "pink" : "white"}
                  height={28}
                  freq1={index === 0 ? 0.45 : 0.22}
                  freq2={index === 0 ? 0.18 : 0.07}
                  freqT={index === 0 ? 1.1 : 0.4}
                  speed={index === 0 ? 0.03 : 0.015}
                  baseline={index === 0 ? 0.4 : 0.25}
                  amplitude={index === 0 ? 0.45 : 0.6}
                />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-[#F5F5F5]">
                <AnimatedNumber end={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ticker */}
        <div className={`mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-muted-foreground transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="text-foreground font-medium">Core Stack:</span>
          <span>Kotlin / Compose</span>
          <span>C++ 20 NDK</span>
          <span>React Native &amp; Expo</span>
          <span>FastAPI</span>
          <span>Ollama Vision SLM</span>
          <span>ASP.NET Core</span>
          <span>Spring Boot</span>
        </div>
      </div>
    </section>
  );
}
