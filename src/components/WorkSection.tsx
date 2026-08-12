"use client";

import React, { useRef } from "react";
import { Layers, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface MobbinShowcaseProps {
  onOpenContact: (project: string) => void;
}

export default function MobbinShowcase({ onOpenContact }: MobbinShowcaseProps) {
  // We only need one ref now to target the scrollable container
  const trackRef = useRef<HTMLDivElement>(null);

  const portfolios = [
    {
      id: "tarbid",
      title: "Sayu Yasanga - Photography",
      badge: "Custom Website",
      link: "https://www.sayuyasangaweddings.com/",
      imageUrl: "/images/sayu.webp"
    },
    {
      id: "osciloc",
      title: "Osciloc - AI Productivity",
      badge: "Landing Page",
      link: "https://pixelbros.dev/portfolio/osciloc",
      imageUrl: "/images/preview.webp"
    }
  ];

  // The scroll function attached to buttons
  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      // Calculate how far to scroll (width of one card + the 32px gap)
      const firstCard = trackRef.current.children[0] as HTMLElement;
      const scrollAmount = firstCard.clientWidth + 32; 
      
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="work"
      className="relative bg-white border-t border-zinc-200 py-24 md:py-32 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[55%] bg-[#FE4845]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header & Navigation Buttons Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>SELECTED CLIENT WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Case Studies
          </h2>
        </div>

        {/* The Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-900 flex items-center justify-center hover:bg-[#FE4845] hover:text-white hover:border-[#FE4845] transition-all shadow-sm"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-900 flex items-center justify-center hover:bg-[#FE4845] hover:text-white hover:border-[#FE4845] transition-all shadow-sm"
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* The Sliding Horizontal Track */}
      <div className="w-full">
        <div 
          ref={trackRef} 
          className="flex flex-row flex-nowrap gap-8 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {portfolios.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              // snap-center ensures the card lands perfectly in the middle of the screen
              className="snap-center relative shrink-0 flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-[2.5rem] p-6 md:p-8 shadow-xl hover:shadow-2xl border bg-[#09090b] border-zinc-800/80 hover:border-zinc-700 w-[90vw] md:w-[85vw] max-w-5xl h-auto md:h-[60vh] group transition-all duration-300"
            >
              
              {/* Left Side: Massive Image Preview */}
              <div className="relative w-full md:w-1/2 h-56 md:h-full rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-950 shrink-0 shadow-inner">
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Right Side: Project Meta Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-white py-2 md:py-4 pr-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold tracking-wide w-max mb-6 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FE4845] animate-pulse" />
                  {project.badge}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#FE4845] transition-colors duration-300 leading-tight mb-4">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                  A comprehensive digital solution engineered for performance, high conversion rates, and a seamless user experience.
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenContact(project.title);
                    }}
                    className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#FE4845] hover:text-white text-sm font-extrabold transition-all duration-300 cursor-pointer z-30 shadow-lg"
                  >
                    Explore Project
                  </button>
                  
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-[#FE4845] group-hover:border-transparent transition-all duration-300 shadow-lg">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
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