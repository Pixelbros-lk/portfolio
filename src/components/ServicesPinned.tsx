"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";

interface ServicesPinnedProps {
  onOpenContact: (service: string) => void;
}

export default function ServicesPinned({ onOpenContact }: ServicesPinnedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Horizontal slide timeline pinning the inner element
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.6,
          pin: pinRef.current, // Pin the inner ref to avoid React parent element removeChild conflicts
          anticipatePin: 1,
        }
      });

      // Animate the horizontal track
      pinTimeline.to(trackRef.current, {
        xPercent: -66.66,
        ease: "none",
      });

      // Staggered floating effect for the icons in each slide
      const slides = gsap.utils.toArray(".service-slide");
      slides.forEach((slide: any) => {
        const icons = slide.querySelectorAll(".floating-tech-icon");
        
        // Continuous float animation loop
        icons.forEach((icon: any, idx: number) => {
          gsap.to(icon, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            rotation: "random(-10, 10)",
            duration: `random(2.5, 4)`,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: idx * 0.2
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    {
      id: "web",
      title: "WEBSITES",
      desc: "Bespoke high-performance web applications built for speed, responsiveness, and conversions.",
      cta: "Request Web Project",
      icons: [
        { icon: "logos:nextjs-icon", pos: "top-4 left-6 sm:top-12 sm:left-24" },
        { icon: "logos:react", pos: "top-10 right-8 sm:top-20 sm:right-32" },
        { icon: "logos:tailwindcss-icon", pos: "bottom-12 left-10 sm:bottom-24 sm:left-36" },
        { icon: "logos:html-5", pos: "bottom-16 right-12 sm:bottom-28 sm:right-40" }
      ]
    },
    {
      id: "mobile",
      title: "MOBILE APPS",
      desc: "Native iOS & Android engineering with fluid haptic gestural micro-interactions.",
      cta: "Request Mobile App",
      icons: [
        { icon: "logos:swift", pos: "top-8 left-8 sm:top-16 sm:left-28" },
        { icon: "logos:android-icon", pos: "top-12 right-12 sm:top-24 sm:right-44" },
        { icon: "logos:expo-icon", pos: "bottom-10 left-12 sm:bottom-20 sm:left-40" },
        { icon: "logos:kotlin-icon", pos: "bottom-14 right-8 sm:bottom-24 sm:right-36" }
      ]
    },
    {
      id: "cloud",
      title: "FULL STACK",
      desc: "High-throughput APIs, resilient microservices, and secure server architecture.",
      cta: "Request Cloud Solution",
      icons: [
        { icon: "logos:aws", pos: "top-6 left-12 sm:top-14 sm:left-32" },
        { icon: "logos:postgresql", pos: "top-14 right-10 sm:top-20 sm:right-36" },
        { icon: "logos:docker-icon", pos: "bottom-14 left-8 sm:bottom-24 sm:left-28" },
        { icon: "logos:redis", pos: "bottom-10 right-14 sm:bottom-28 sm:right-44" }
      ]
    }
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-white bg-dot-pattern"
    >
      {/* Pinned Inner Container wrapper */}
      <div 
        ref={pinRef}
        className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      >
        {/* Horizontal Slides Track */}
        <div 
          ref={trackRef}
          className="flex w-[300vw] h-full"
        >
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="service-slide w-screen h-screen flex flex-col items-center justify-center relative px-4"
            >
              {/* Absolute Floating Technology Icons */}
              {item.icons.map((tech, idx) => (
                <div
                  key={idx}
                  className={`floating-tech-icon absolute p-3.5 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-md shadow-zinc-100/50 z-20 transition-all duration-300 ${tech.pos}`}
                >
                  <Icon icon={tech.icon} className="w-8 h-8 sm:w-11 sm:h-11 object-contain" />
                </div>
              ))}

              {/* Giant Centered Word */}
              <div className="text-center relative z-10 space-y-4 max-w-4xl">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] font-semibold mx-auto mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WHAT WE DO</span>
                </div>

                <h2 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-zinc-950 leading-none select-none font-sans">
                  {item.title}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-lg mx-auto font-normal leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => onOpenContact(item.title)}
                    className="px-6 py-3.5 rounded-full bg-linear-to-r from-[#FE4845] via-[#FE4845] to-[#FF7573] text-white font-bold text-xs shadow-lg shadow-[#FE4845]/15 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border border-transparent"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
