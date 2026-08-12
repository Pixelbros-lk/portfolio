"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const letters = [
    { char: "p", hasShape: false },
    { 
      char: "i", 
      hasShape: true, 
      imageSrc: "/shapes/star.png", 
      sizeClass: "w-6 h-16 sm:w-8 sm:h-20",
      startRot: -75, 
      endRot: 15 
    },
    { 
      char: "x", 
      hasShape: true, 
      imageSrc: "/shapes/wheel.png", 
      sizeClass: "w-12 h-12 sm:w-16 sm:h-16",
      startRot: 45, 
      endRot: -12 
    },
    { char: "e", hasShape: false },
    { char: "l", hasShape: false },
    { 
      char: "b", 
      hasShape: true, 
      imageSrc: "/shapes/flower.png", 
      sizeClass: "w-12 h-12 sm:w-16 sm:h-16",
      startRot: -180, 
      endRot: 25 
    },
    { char: "r", hasShape: false },
    { 
      char: "o", 
      hasShape: true, 
      imageSrc: "/shapes/5.png", 
      sizeClass: "w-12 h-12 sm:w-16 sm:h-16",
      startRot: 90, 
      endRot: -20 
    },
    { char: "s", hasShape: false },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      tl.from(".splash-char", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.5)"
      });

      tl.to(".morph-text", {
        scale: 0,
        opacity: 0,
        rotation: 45,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.in(1.5)"
      }, "+=0.4");

      tl.to(".morph-shape", {
        scale: 1,
        opacity: 1,
        rotation: (index, target) => Number(target.dataset.endrot),
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(2)"
      }, "<0.2"); 

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.6 
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-9999 bg-white flex items-center justify-center overflow-hidden"
    >
      {/* THE GRAIN OVERLAY */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex items-center gap-1 sm:gap-2 text-zinc-900 font-bold text-5xl sm:text-7xl lowercase tracking-tighter">
        {letters.map((item, index) => (
          <div 
            key={index} 
            className="relative flex items-center justify-center w-8.75 h-15 sm:w-12.5 sm:h-20"
          >
            <span className={`splash-char absolute ${item.hasShape ? "morph-text" : ""}`}>
              {item.char}
            </span>

            {item.hasShape && item.imageSrc && (
              <div
                className={`splash-char morph-shape absolute opacity-0 scale-0 flex items-center justify-center ${item.sizeClass}`}
                style={{ transform: `rotate(${item.startRot}deg)` }} 
                data-endrot={item.endRot}
              >
                <Image
                  src={item.imageSrc}
                  alt={`Geometric shape replacing ${item.char}`}
                  fill
                  className="object-contain drop-shadow-xl" 
                  priority
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}