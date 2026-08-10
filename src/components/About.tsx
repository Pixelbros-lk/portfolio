"use client";

import React, { useEffect, useRef } from "react";
import { 
  Code2, 
  Box, 
  Shield, 
  Sparkles,
  Zap,
  Activity,
  Layers,
  Database,
  ArrowUpRight
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  // Floating graphics refs
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const floatCard3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in left text column
      gsap.from(leftColRef.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Fade in right graphics column
      gsap.from(rightColRef.current, {
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Slow premium float loop for the visual cards on the right
      gsap.to(floatCard1Ref.current, {
        y: -10,
        rotation: 0.5,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(floatCard2Ref.current, {
        y: 12,
        rotation: -0.5,
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.5
      });

      gsap.to(floatCard3Ref.current, {
        y: -8,
        rotation: 1,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-zinc-50 border-t border-b border-zinc-200/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FE4845]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[250px] bg-red-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Copy & Core Pillars (7 Cols) */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-8">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-[#FE4845] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT PIXELBROS</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Engineered properly.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE4845] via-[#FF7573] to-[#D02927]">
                The first time.
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              We work across the full stack — from database design and backend architecture to responsive front-end interfaces — delivering software that's built to last, not just to launch.
            </p>

            {/* 3 Pillar Row Stack (Vertical timeline format for rich visual flow) */}
            <div className="space-y-4 pt-4">
              
              {/* Item 1 */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-[#FE4845]/30 transition-all duration-300 flex items-start gap-4 group shadow-sm">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-500 group-hover:bg-[#FE4845]/10 group-hover:text-[#FE4845] group-hover:border-[#FE4845]/20 transition-all shadow-inner shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    Clean Code
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-600 bg-emerald-100 border border-emerald-200 px-1.5 py-0.2 rounded font-bold">100% Typed</span>
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-normal leading-relaxed">
                    Maintainable, strict TypeScript codebases that prevent runtime bugs and support fast developer onboarding.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-[#FE4845]/30 transition-all duration-300 flex items-start gap-4 group shadow-sm">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-500 group-hover:bg-[#FE4845]/10 group-hover:text-[#FE4845] group-hover:border-[#FE4845]/20 transition-all shadow-inner shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    Solid Architecture
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#FE4845] bg-[#FE4845]/10 border border-[#FE4845]/20 px-1.5 py-0.2 rounded font-bold">Global Edge</span>
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-normal leading-relaxed">
                    High-availability design patterns optimized for speed, secure connection pooling, and multi-region CDN delivery.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 hover:border-[#FE4845]/30 transition-all duration-300 flex items-start gap-4 group shadow-sm">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-500 group-hover:bg-[#FE4845]/10 group-hover:text-[#FE4845] group-hover:border-[#FE4845]/20 transition-all shadow-inner shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                    Long-term Focus
                    <span className="text-[10px] uppercase font-mono tracking-wider text-amber-600 bg-amber-100 border border-amber-200 px-1.5 py-0.2 rounded font-bold">60-Day SLA Warranty</span>
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-normal leading-relaxed">
                    We deliver comprehensive documentation, automated test suites, and robust post-launch support windows.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Architectural Visual (5 Cols) */}
          <div ref={rightColRef} className="lg:col-span-5 relative min-h-[420px] flex items-center justify-center">
            
            {/* Background Grid Pattern Accent inside graphic area */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            {/* Overlapping Mockup Cards with Floating GSAP Effect */}
            
            {/* Card 1: Core Performance Metric (Top Left) */}
            <div
              ref={floatCard1Ref}
              className="absolute top-4 left-4 w-48 p-4 rounded-2xl bg-white border border-zinc-200 shadow-md z-20 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold">Core Health</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-zinc-900 font-mono">100/100</span>
                <span className="text-[10px] text-emerald-600 font-mono font-bold">Lighthouse ✓</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
              </div>
            </div>

            {/* Card 2: Interactive System Architecture Schema (Center Main Card) */}
            <div
              ref={floatCard2Ref}
              className="absolute w-72 p-5 rounded-3xl bg-zinc-900 text-zinc-300 border border-zinc-800 shadow-2xl z-10 space-y-4"
              style={{ top: "110px", left: "40px" }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] font-mono text-zinc-500">pipeline-config.json</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </div>

              {/* Simulated Flow chart */}
              <div className="space-y-3 font-mono text-[10px]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/40 border border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#FE4845]" />
                    <span>Next.js App Router</span>
                  </div>
                  <span className="text-emerald-400">SSR Active</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/40 border border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#FF7573]" />
                    <span>Global CDN Edge Cache</span>
                  </div>
                  <span className="text-zinc-500">Hit (99.4%)</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-800/40 border border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#FE4845]" />
                    <span>PostgreSQL Pool</span>
                  </div>
                  <span className="text-[#FE4845]">Optimal</span>
                </div>
              </div>
            </div>

            {/* Card 3: Ingestion Latency Stats (Bottom Right) */}
            <div
              ref={floatCard3Ref}
              className="absolute bottom-6 right-4 w-52 p-4 rounded-2xl bg-white border border-zinc-200 shadow-lg z-20 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold">Edge Telemetry</span>
                <span className="text-[9px] text-[#FE4845] font-mono font-bold">HTTP/3</span>
              </div>
              <div className="text-xs text-zinc-500 font-semibold">Response Ingestion</div>
              <div className="text-2xl font-bold font-mono text-[#FE4845] tracking-tight">
                12.4ms
              </div>
              <div className="text-[9px] text-zinc-400">
                Calculated US-East CDN edge request
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
