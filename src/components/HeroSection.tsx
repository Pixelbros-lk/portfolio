"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
  Sparkles
} from "lucide-react";
import gsap from "gsap";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export default function HeroSection({ onOpenContact, onOpenEstimator }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          headlineRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".floating-tag",
          {
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white"
    >
      {/* Ambient Gradient Glows in Brand Color */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#FE4845]/15 via-[#FF7573]/10 to-[#D02927]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#FE4845]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF7573]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Tech Tags */}
      <div className="absolute top-1/3 left-6 md:left-12 lg:left-20 xl:left-32 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-zinc-200/60 shadow-md font-mono text-[11px] font-semibold text-zinc-700 pointer-events-none floating-tag">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FE4845]" />
        <span>Next.js 15</span>
      </div>
      <div className="absolute top-2/3 left-10 md:left-24 lg:left-36 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-zinc-200/60 shadow-md font-mono text-[11px] font-semibold text-zinc-700 pointer-events-none floating-tag">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span>TypeScript</span>
      </div>
      <div className="absolute top-1/4 right-6 md:right-16 lg:right-28 xl:right-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-zinc-200/60 shadow-md font-mono text-[11px] font-semibold text-zinc-700 pointer-events-none floating-tag">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span>React Native</span>
      </div>
      <div className="absolute top-1/2 right-12 md:right-20 lg:right-32 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white border border-zinc-200/60 shadow-md font-mono text-[11px] font-semibold text-zinc-700 pointer-events-none floating-tag">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        <span>PostgreSQL</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          {/* Hero Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 shadow-xs text-xs font-mono text-[#FE4845] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>PREMIER SOFTWARE DEVELOPMENT</span>
          </div>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08]"
          >
            We engineer{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
              digital products
            </span>{" "}
            that dominate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE4845] via-[#FF7573] to-[#D02927] inline-block font-extrabold">
              markets.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            <strong className="text-zinc-900 font-medium">PixelBros</strong> is a premier custom software development company. We design and build bespoke{" "}
            <span className="text-[#FE4845] font-medium">custom web applications</span>, high-performance{" "}
            <span className="text-[#FE4845] font-medium">iOS & Android mobile apps</span>, and scalable{" "}
            <span className="text-[#FE4845] font-medium">full-stack cloud systems</span>.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenContact()}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FE4845] via-[#FE4845] to-[#FF7573] text-white font-semibold text-sm shadow-xl shadow-[#FE4845]/20 hover:shadow-[#FE4845]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#showcase"
              className="px-6 py-3.5 rounded-full bg-zinc-50 border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-900 font-medium text-sm transition-all flex items-center justify-center gap-2 hover:bg-zinc-100/80"
            >
              <MessageCircle className="w-4 h-4 text-[#FE4845]" />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
