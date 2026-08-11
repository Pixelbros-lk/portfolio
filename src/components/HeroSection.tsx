"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import gsap from "gsap";

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">        
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08]"
          >
            We engineer{" "}
            <span className="bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-700 bg-clip-text text-transparent">
              digital products
            </span>{" "}
            that dominate{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FE4845] via-[#FF7573] to-[#D02927] inline-block font-extrabold">
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
              className="px-7 py-3.5 rounded-full bg-linear-to-r from-[#FE4845] via-[#FE4845] to-[#FF7573] text-white font-semibold text-sm shadow-xl shadow-[#FE4845]/20 hover:shadow-[#FE4845]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
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
