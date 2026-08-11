"use client";

import React, { useEffect, useRef } from "react";
import { Layers, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface MobbinShowcaseProps {
  onOpenContact: (project: string) => void;
}

export default function MobbinShowcase({ onOpenContact }: MobbinShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Reduced to 2 projects!
  const portfolios = [
    {
      id: "sayu",
      title: "Sayu Yasanga Photography",
      badge: "Landing Page",
      link: "https://www.sayuyasangaweddings.com/",
      imageUrl: "/images/preview.webp"
    },
    {
      id: "osciloc",
      title: "Osciloc - AI Productivity",
      badge: "Landing Page",
      link: "https://pixelbros.dev/portfolio/osciloc",
      imageUrl: "/images/preview.webp"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      // If there's 1 or 0 cards, no need to pin or animate at all!
      if (cards.length <= 1) return;

      gsap.set(cards.slice(1), { y: '100%', opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // THE FIX: Scroll distance is now strictly based on the number of TRANSITIONS (cards.length - 1)
          // For 2 cards, this evaluates to 1 * 120vh, making the scroll feel normal and not overly long.
          end: `+=${(cards.length - 1) * 120}vh`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Initial read pause
      tl.to({}, { duration: 0.6 });

      cards.slice(1).forEach((card, i) => {
        tl.to(card, {
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'none'
        })
          .to(cards[i], {
            // THE FIX: Softened the shadow effect so it looks like a physical stack, not a fading ghost.
            scale: 0.95,
            opacity: 0.6,
            duration: 1,
            ease: 'none'
          }, "<");

        // Ending pause
        tl.to({}, { duration: 0.6 });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative bg-white border-t border-zinc-200 overflow-hidden h-screen w-full flex flex-col items-center justify-center"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[55%] bg-[#FE4845]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Fixed Section Header */}
      <div className="absolute top-8 md:top-16 left-0 w-full z-10 text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>SELECTED CLIENT WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight">
          Case Studies
        </h2>
      </div>

      {/* Pinned Card Stack Container */}
      <div className="relative w-full max-w-5xl h-[65vh] md:h-[60vh] mt-24">
        {portfolios.map((project, index) => (
          <a
            key={project.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-[2.5rem] p-6 md:p-8 shadow-2xl border bg-[#09090b] border-zinc-800/80 hover:border-zinc-700 w-full group will-change-transform"
          >

            <div className="relative w-full md:w-1/2 h-48 md:h-full rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-950 shrink-0 shadow-inner">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center text-white py-4 pr-4">
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
    </section>
  );
}