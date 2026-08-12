"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import ServicesPinned from "@/components/ServicesPinned";
import MobbinShowcase from "@/components/WorkSection";
import TestimonialsMarquee from "@/components/Reviews";
import FaqSection from "@/components/Faq";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SplashScreen from "@/components/SplashScreen";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [contactInitialScope, setContactInitialScope] = useState("");
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Keyboard shortcut for Cmd+K / Ctrl+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenContact = (scopePrefill?: string) => {
    setContactInitialScope(scopePrefill || "");
    setContactModalOpen(true);
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSearchResult = (anchor: string) => {
    const targetId = anchor.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#FE4845]/20 selection:text-[#FE4845]">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
        {/* 1. Hero Section with Live Dual-Device Mockup */}
        <HeroSection
          onOpenContact={() => handleOpenContact()}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* 2. About Narrative Section */}
        <About />

        {/* 3. Core Engineering Services (Web, Mobile, Full-Stack) */}
        <ServicesPinned
          onOpenContact={(service) => handleOpenContact(`Inquiring about ${service}`)}
        />

        {/* 4. Curated Mobbin-Inspired Showcase & Screen Flow Inspector */}
        <MobbinShowcase
          onOpenContact={(project: any) => handleOpenContact(`Inquiring about architecture similar to ${project}`)}
        />

        {/* 7. Tech Stack Infinite Marquee & Client Reviews */}
        <TestimonialsMarquee />

        {/* 8. Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Contact / Project Booking Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialScope={contactInitialScope}
      />
    </div>
  );
}
