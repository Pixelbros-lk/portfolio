"use client";

import React, { useEffect, useRef } from "react";
import { Layers, ArrowRight, Smartphone, Globe, Check, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MobbinShowcaseProps {
  onOpenContact: (project: string) => void;
}

export default function MobbinShowcase({ onOpenContact }: MobbinShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const portfolios = [
    {
      id: "tarbid",
      title: "Tarbid - BNPL",
      badge: "Mobile App",
      link: "https://pixelbros.dev/portfolio/tarbid",
      bg: "bg-[#09090b] border-zinc-800/80 hover:border-zinc-700",
      content: (
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-zinc-900 flex items-center justify-center gap-6 p-4">
          {/* Screen 1: Mobile Wallet */}
          <div className="w-[110px] sm:w-[125px] h-[220px] rounded-2xl border-[3.5px] border-zinc-900 bg-black text-white p-2.5 flex flex-col justify-between font-sans shadow-md">
            <div className="flex justify-between items-center text-[5px] text-zinc-500 font-mono">
              <span>9:41</span>
              <span className="w-5 h-1.5 rounded-full bg-zinc-900" />
              <span>LTE</span>
            </div>
            
            <div className="space-y-1.5 my-auto">
              <div className="text-[5px] text-zinc-500 font-mono">Your Balance</div>
              <div className="text-[10px] font-extrabold font-mono">$5,350.12</div>
              <div className="p-1.5 rounded-lg bg-[#DAFF3D] text-black space-y-0.5">
                <div className="text-[6px] font-extrabold">Black Friday Sale!</div>
                <div className="text-[4px]">Discount Up to 60%</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[5px] text-zinc-400 pt-1 border-t border-zinc-800">
              <span>Home</span>
              <span>Cards</span>
              <span>Menu</span>
            </div>
          </div>

          {/* Screen 2: Checkout Product */}
          <div className="w-[110px] sm:w-[125px] h-[220px] rounded-2xl border-[3.5px] border-zinc-900 bg-black text-white p-2.5 flex flex-col justify-between font-sans shadow-md">
            <div className="flex justify-between items-center text-[5px] text-zinc-500 font-mono">
              <span>9:41</span>
              <span className="w-5 h-1.5 rounded-full bg-zinc-900" />
              <span>LTE</span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="text-[6px] font-bold text-zinc-300">Checkout Product</div>
              <div className="p-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-[#DAFF3D] shrink-0" />
                <div className="space-y-0.5 w-full">
                  <div className="text-[4px] font-bold text-white">iPhone 13</div>
                  <div className="text-[4px] text-zinc-500">$620.00</div>
                </div>
              </div>
            </div>

            <button className="w-full py-1 rounded bg-[#DAFF3D] text-black text-[6px] font-extrabold">
              Place Order
            </button>
          </div>
        </div>
      )
    },
    {
      id: "osciloc",
      title: "Osciloc - AI Productivity",
      badge: "Landing Page",
      link: "https://pixelbros.dev/portfolio/osciloc",
      bg: "bg-[#09090b] border-zinc-800/80 hover:border-zinc-700",
      content: (
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-zinc-900 p-4 flex flex-col justify-between text-white font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-900 text-[8px] font-mono text-zinc-500">
            <span>⬤ Osciloc</span>
            <div className="flex gap-2">
              <span>HOME</span>
              <span>FEATURES</span>
              <span>PRICING</span>
            </div>
          </div>

          <div className="my-auto text-center space-y-1.5">
            <h4 className="text-sm sm:text-base font-extrabold tracking-tight leading-tight text-white">
              Boost Your Productivity<br />with Osciloc Today!
            </h4>
            <p className="text-[7px] text-zinc-500 max-w-[200px] mx-auto leading-normal">
              Osciloc is your space to organize, coordinate, and build with real-time sync.
            </p>
            <div className="flex justify-center gap-1.5 pt-0.5">
              <span className="px-2.5 py-0.8 rounded-lg bg-indigo-600 text-white text-[6px] font-bold">Start Free</span>
              <span className="px-2.5 py-0.8 rounded-lg bg-zinc-800 text-zinc-400 text-[6px]">Demo</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-900 text-[6px] text-zinc-500 font-mono text-center">
            <div>
              <div className="text-[8px] font-bold text-white">7h 30m</div>
              <div>Work hours</div>
            </div>
            <div>
              <div className="text-[8px] font-bold text-indigo-400">90%</div>
              <div>Focus metric</div>
            </div>
            <div>
              <div className="text-[8px] font-bold text-white">80%</div>
              <div>Task summary</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "anarisk",
      title: "Anarisk - SaaS Document Risk Management",
      badge: "Landing Page",
      link: "https://pixelbros.dev/portfolio/anarisk",
      bg: "bg-[#09090b] border-zinc-800/80 hover:border-zinc-700",
      content: (
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-zinc-900 p-4 flex flex-col justify-between text-white font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-900 text-[8px] font-mono text-zinc-500">
            <span>⬤ Anarisk</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-[6px] text-zinc-400">SECURITY APPROVED</span>
          </div>

          <div className="my-auto space-y-2">
            <h4 className="text-sm font-bold tracking-tight text-white leading-tight">
              Intelligent Risk Management<br />for Your Business Documents.
            </h4>
            <p className="text-[7.5px] text-zinc-500 leading-relaxed max-w-[200px]">
              Automatically select, classify, and mitigate risks in documents with AI-powered analytics.
            </p>
          </div>

          <div className="h-[80px] rounded-xl bg-zinc-950 border border-zinc-900 p-2 flex items-center justify-between gap-4">
            <div className="space-y-1.5 w-full">
              <div className="text-[6px] text-zinc-400 font-mono">RISK ANALYSIS ENGINE</div>
              <div className="h-1 rounded bg-zinc-900 w-full" />
              <div className="h-1 rounded bg-zinc-900 w-4/5" />
            </div>
            <div className="w-[60px] h-[45px] rounded bg-gradient-to-br from-indigo-900 to-transparent border border-indigo-500/20 p-1 flex flex-col justify-between shrink-0">
              <span className="text-[5px] text-indigo-400">THREAT RATE</span>
              <span className="text-[10px] font-bold text-white font-mono leading-none">0.089%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "flowpay",
      title: "Flowpay - Online Payment",
      badge: "Landing Page",
      link: "https://pixelbros.dev/portfolio/flowpay",
      bg: "bg-[#09090b] border-zinc-800/80 hover:border-zinc-700",
      content: (
        <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-zinc-900 flex items-center justify-center p-4">
          {/* Laptop frame */}
          <div className="w-[200px] sm:w-[240px] h-[130px] sm:h-[155px] bg-[#1a1a1c] rounded-xl border border-zinc-800 p-2 relative shadow-xl flex flex-col justify-between text-white font-sans">
            <div className="flex justify-between items-center text-[6px] font-mono text-zinc-500 border-b border-zinc-900 pb-1">
              <span>⬤ Flowpay</span>
              <div className="flex gap-1.5">
                <span>LOGIN</span>
                <span className="text-blue-400">SIGN UP</span>
              </div>
            </div>

            <div className="my-auto space-y-1">
              <h4 className="text-[8px] font-bold tracking-tight text-white leading-tight">
                Make Every Payment<br />Easier and Safer.
              </h4>
              <p className="text-[5px] text-zinc-500 leading-normal max-w-[120px]">
                Simplify how you spend, send, and optimize your financial assets worldwide.
              </p>
            </div>

            <div className="h-[35px] rounded-lg bg-zinc-950 border border-zinc-900 p-1 flex items-center justify-between gap-2">
              <div className="w-10 h-[22px] rounded bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-500/20 p-0.5 flex flex-col justify-between">
                <span className="text-[3px] text-blue-300">Flowpay Account</span>
                <span className="text-[5px] font-mono font-bold leading-none">**** 0034</span>
              </div>
              <div className="text-[5px] font-mono text-zinc-500 text-right">
                <div className="text-[7px] font-bold text-white">700+</div>
                <div>Integrations</div>
              </div>
            </div>

            {/* Laptop Base Lip */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[220px] sm:w-[260px] h-[3px] bg-zinc-700 rounded-full" />
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Short timeout to guarantee page height and pinned spacer heights are fully calculated
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const ctx = gsap.context(() => {
      // Staggered card slide animation on scroll
      gsap.from(".showcase-grid-card", {
        y: 40,
        opacity: 0,
        scale: 0.98,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 92%", // triggers sooner as you scroll down
          toggleActions: "play none none none" // keeps cards visible once triggered
        }
      });
    }, gridRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-zinc-200"
    >
      {/* Background radial highlight glow matching brand color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[55%] bg-[#FE4845]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>SELECTED CLIENT WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Case Studies & Screen Flows
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 max-w-xl mx-auto font-normal leading-relaxed">
            Take a look at custom websites, mobile applications, and full-stack solutions built for speed, conversion, and scalability.
          </p>
        </div>

        {/* 2x2 Grid of Premium Dark Cards */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolios.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-grid-card group rounded-[32px] p-5 flex flex-col justify-between shadow-sm cursor-pointer transition-all duration-300 border bg-[#09090b] border-zinc-800/80 hover:border-zinc-700 hover:shadow-xl hover:-translate-y-1.5"
            >
              {/* Dynamic HTML Mockup Preview Area */}
              <div className="relative">
                {project.content}
                
                {/* Top-Left Translucent Pill Badge */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full bg-white/10 border border-white/5 backdrop-blur-md text-white text-[10px] font-bold tracking-wide">
                  {project.badge}
                </div>
              </div>

              {/* Bottom Meta Content */}
              <div className="pt-5 mt-2 flex items-center justify-between text-white select-none">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#FE4845] transition-colors leading-none">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenContact(project.title);
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-[#FE4845] hover:border-transparent text-[11px] font-extrabold text-white transition-all cursor-pointer z-30"
                  >
                    Build This
                  </button>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-[#FE4845] group-hover:border-transparent transition-all">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
