"use client";

import React, { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "@iconify/react";

export default function TestimonialsMarquee() {
  const [isExpanded, setIsExpanded] = useState(false);

  const row1 = [
    { name: "Next.js", logo: "nextjs" },
    { name: "TypeScript", logo: "typescript" },
    { name: "React Native", logo: "reactnative" },
    { name: "Swift / SwiftUI", logo: "swift" },
    { name: "Tailwind CSS", logo: "tailwindcss" }
  ];

  const row2 = [
    { name: "FastAPI", logo: "fastapi" },
    { name: "PostgreSQL", logo: "postgresql" },
    { name: "Docker", logo: "docker" },
    { name: "AWS Cloud", logo: "aws" },
    { name: "Kubernetes", logo: "kubernetes" }
  ];

  const row3 = [
    { name: "GraphQL", logo: "graphql" },
    { name: "OpenAI", logo: "openai" },
    { name: "Claude AI", logo: "claude" },
    { name: "Redis Cache", logo: "redis" },
    { name: "GitHub vCS", logo: "github" }
  ];

  const clientReviews = [
    {
      name: "Sebastian Speier",
      company: "Shop",
      initials: "SS",
      avatarBg: "bg-indigo-500",
      content:
        "PixelBros is a great engineering partner. They worked across our mobile app stack to deliver clean haptics and robust state management. Truly built to last.",
    },
    {
      name: "Haerin Song",
      company: "Visa",
      initials: "HS",
      avatarBg: "bg-purple-500",
      content:
        "By partnering with PixelBros, we saved months of research and development time. Their Next.js implementation is incredibly fast and highly maintainable.",
    },
    {
      name: "Marco Cornacchia",
      company: "Figma",
      initials: "MC",
      avatarBg: "bg-teal-500",
      content:
        "PixelBros is one of my favorite development companies. They have an eye for motion design and pixel-perfection that is rare among agencies. They translate designs into clean React code instantly.",
    },
    {
      name: "Daryl Ginn",
      company: "Endless",
      initials: "DG",
      avatarBg: "bg-rose-500",
      content:
        "PixelBros quickly became our go-to team for complex web apps. Their speed and clean architecture are unmatched in the custom development space.",
    },
    {
      name: "Oykun Yilmaz",
      company: "Oykun Studio",
      initials: "OY",
      avatarBg: "bg-zinc-800",
      content:
        "Designing complex interfaces requires developers who understand UX. The PixelBros team bridges that gap perfectly, implementing clean code and gesture micro-interactions.",
    },
    {
      name: "Meng To",
      company: "DesignCode",
      initials: "MT",
      avatarBg: "bg-amber-600",
      content:
        "The React Native app PixelBros built for us runs at a flawless 120 FPS. They delivered absolute top-tier quality ahead of schedule.",
    }
  ];

  const renderOfficialLogo = (logoKey: string) => {
    switch (logoKey) {
      case "nextjs":
        return <Icon icon="logos:nextjs-icon" className="w-10 h-10 shrink-0" />;
      case "typescript":
        return <Icon icon="logos:typescript-icon" className="w-10 h-10 shrink-0" />;
      case "reactnative":
        return <Icon icon="logos:react" className="w-10 h-10 shrink-0" />;
      case "swift":
        return <Icon icon="logos:swift" className="w-10 h-10 shrink-0" />;
      case "tailwindcss":
        return <Icon icon="logos:tailwindcss-icon" className="w-10 h-10 shrink-0" />;
      case "fastapi":
        return <Icon icon="logos:fastapi-icon" className="w-10 h-10 shrink-0" />;
      case "postgresql":
        return <Icon icon="logos:postgresql" className="w-10 h-10 shrink-0" />;
      case "docker":
        return <Icon icon="logos:docker-icon" className="w-10 h-10 shrink-0" />;
      case "aws":
        return <Icon icon="logos:aws" className="w-10 h-10 shrink-0" />;
      case "kubernetes":
        return <Icon icon="logos:kubernetes" className="w-10 h-10 shrink-0" />;
      case "graphql":
        return <Icon icon="logos:graphql" className="w-10 h-10 shrink-0" />;
      case "openai":
        return <Icon icon="logos:openai-icon" className="w-10 h-10 shrink-0" />;
      case "claude":
        return <Icon icon="logos:claude-icon" className="w-10 h-10 shrink-0" />;
      case "redis":
        return <Icon icon="logos:redis" className="w-10 h-10 shrink-0" />;
      case "github":
        return <Icon icon="logos:github-icon" className="w-10 h-10 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 md:py-20 bg-white border-t border-zinc-200 overflow-hidden">
      
      {/* Ticker Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
          OUR PRODUCTION STACK
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 leading-tight">
          Engineered with modern, industry-leading technologies.
        </h3>
      </div>

      {/* 3-ROW PARTNER LOGO TICKER */}
      <div className="mb-24 space-y-6">
        
        {/* Row 1: Scrolled Left */}
        <div className="relative overflow-hidden py-1">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-16 md:gap-24">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 shrink-0 select-none"
              >
                {renderOfficialLogo(item.logo)}
                <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolled Right */}
        <div className="relative overflow-hidden py-1">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-reverse gap-16 md:gap-24">
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 shrink-0 select-none"
              >
                {renderOfficialLogo(item.logo)}
                <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scrolled Left */}
        <div className="relative overflow-hidden py-1">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-16 md:gap-24">
            {[...row3, ...row3, ...row3].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 shrink-0 select-none"
              >
                {renderOfficialLogo(item.logo)}
                <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CLIENT TESTIMONIALS (MASONRY FEEDBACK GRID) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            What our clients are saying.
          </h2>
        </div>

        {/* Masonry Columns Wrapper with bottom gradient blur */}
        <div className={`relative transition-all duration-700 ease-in-out ${
          isExpanded ? "max-h-[2200px]" : "max-h-[460px] overflow-hidden"
        }`}>
          {/* Masonry Columns Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {clientReviews.map((item, idx) => (
              <div
                key={idx}
                className="break-inside-avoid bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm flex flex-col gap-4 mb-6 hover:border-[#FE4845]/30 transition-all duration-300 group"
              >
                {/* Reviewer Header info */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 leading-none">
                      {item.name}
                    </h4>
                    <span className="text-xs text-zinc-500 mt-1 block">
                      {item.company}
                    </span>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  "{item.content}"
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Blur Mask with Show All Button */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-20 flex items-end justify-center pb-4 backdrop-blur-[1px]">
              <button
                onClick={() => setIsExpanded(true)}
                className="pointer-events-auto px-6 py-3 rounded-full bg-zinc-900 hover:bg-[#FE4845] text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer border border-transparent transition-all hover:scale-105 active:scale-95"
              >
                <span>Read All Reviews</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Show Less Button when expanded */}
        {isExpanded && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsExpanded(false)}
              className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs transition-all border border-zinc-200 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Show Less</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>

    </section>
  );
}
