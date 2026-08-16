"use client";

import React, { useEffect, useRef } from "react";
import { Compass, Palette, Sliders, Code2, Eye, Rocket, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.from(".process-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Cards (staggered)
      gsap.from(".process-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Tagline
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Discover",
      icon: Compass,
      desc: "We meet, understand your business, discuss your goals, and gather the requirements for your project.",
    },
    {
      num: "02",
      title: "Design",
      icon: Palette,
      desc: "Our team transforms the requirements into a UI/UX design using Figma, giving you a clear visual representation of the final product.",
    },
    {
      num: "03",
      title: "Refine",
      icon: Sliders,
      desc: "You review the design, provide feedback, and request changes. We refine the design until the visual direction is agreed upon.",
    },
    {
      num: "04",
      title: "Develop",
      icon: Code2,
      desc: "Once the design is approved, our developers bring it to life using the technologies best suited to your project.",
    },
    {
      num: "05",
      title: "Preview",
      icon: Eye,
      desc: "You receive a live deployment link while development is underway. You can explore the actual website, provide feedback, and see your project evolve in real time.",
    },
    {
      num: "06",
      title: "Launch",
      icon: Rocket,
      desc: "Once development is complete and everything has been reviewed and approved, we deploy the final product to production.",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-zinc-50 border-t border-b border-zinc-200/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-120 h-60 bg-[#FE4845]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-120 h-60 bg-red-200/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="process-header text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-mono text-[#FE4845] font-semibold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Our step-by-step workflow for shipping{" "}
            <span className="text-transparent bg-clip-text bg-[#FE4845] bg-gradient-to-r from-[#FE4845] to-[#FF7573]">
              top-tier software.
            </span>
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="process-card group relative p-8 rounded-3xl bg-white border border-zinc-200/80 hover:border-[#FE4845]/30 hover:shadow-xl hover:shadow-zinc-150/45 transition-colors transition-shadow duration-500 flex flex-col gap-5 overflow-hidden"
              >
                {/* Large Background Step Number */}
                <span className="absolute -top-4 -right-2 text-8xl font-black font-mono text-zinc-100/70 select-none group-hover:text-[#FE4845]/5 transition-colors duration-500 leading-none">
                  {step.num}
                </span>

                {/* Top Row: Icon and Number badge */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-zinc-700 group-hover:bg-[#FE4845]/10 group-hover:text-[#FE4845] group-hover:border-[#FE4845]/20 transition-all duration-500 shadow-xs">
                    <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-[#FE4845] transition-colors duration-500 bg-zinc-50 group-hover:bg-[#FE4845]/5 px-2.5 py-1 rounded-full border border-zinc-200/60 group-hover:border-[#FE4845]/20">
                    STEP {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10 flex-grow">
                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-normal group-hover:text-zinc-650 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom decorative line/hover highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FE4845] to-[#FF7573] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>

        {/* Tagline Section */}
        <div
          ref={taglineRef}
          className="mt-20 sm:mt-24 text-center relative"
        >
          {/* Subtle glow behind tagline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div className="w-80 h-16 bg-[#FE4845]/5 rounded-full blur-2xl" />
          </div>
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-3">Our Core Philosophy</p>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 leading-none select-none">
            From{" "}
            <span className="text-[#FE4845] relative inline-block">
              pixels
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[4px] sm:h-[6px] bg-[#FE4845]/20 rounded-full" />
            </span>{" "}
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE4845] via-[#FF7573] to-[#D02927]">
              production.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
