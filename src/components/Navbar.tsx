"use client";

import React, { useState, useEffect } from "react";
import { 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Menu, 
  X, 
  Code2, 
  Smartphone, 
  Server, 
  ChevronDown,
  Terminal,
  Zap
} from "lucide-react";

interface NavbarProps {
  onOpenContact: (prefillScope?: string) => void;
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenContact, onOpenSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 ${
          mobileMenuOpen ? "rounded-3xl" : "rounded-full"
        } border ${
          scrolled || mobileMenuOpen
            ? "py-3 bg-white/90 backdrop-blur-xl border-zinc-200 shadow-md"
            : "py-4 bg-transparent border-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 overflow-hidden rounded-xl border border-zinc-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img src="/icon.png" className="w-full h-full object-cover" alt="PixelBros Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-zinc-900 flex items-center gap-1.5 font-mono">
                PixelBros
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
            scrolled ? "bg-transparent border-transparent shadow-none" : "bg-zinc-50 border border-zinc-200/80 shadow-sm"
          }`}>
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              Home
            </a>

            <a
              href="#about"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              About
            </a>

            <a
              href="#services"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              Services
            </a>

            <a
              href="#showcase"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              Work
            </a>

            <a
              href="#"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Start Project CTA */}
            <button
              onClick={() => onOpenContact()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group cursor-pointer"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#FE4845] via-[#FF7573] to-[#D02927] rounded-full group-hover:opacity-100 transition-opacity duration-300 blur-sm opacity-70" />
              <span className="relative flex items-center gap-1.5 px-4 py-2 bg-[#FE4845] rounded-full text-white group-hover:bg-[#D02927] transition-colors duration-200">
                <span>Let's Build</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-zinc-500 hover:text-[#FE4845] bg-zinc-50 border border-zinc-200 rounded-full"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-500 hover:text-[#FE4845] bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xl flex flex-col gap-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-[#FE4845] hover:bg-zinc-50"
            >
              <span>Services</span>
              <span className="text-xs text-[#FE4845]">Web • Mobile • Cloud</span>
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-[#FE4845] hover:bg-zinc-50"
            >
              <span>Our Work</span>
              <span className="text-xs text-[#FE4845]">12 Projects</span>
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-[#FE4845] hover:bg-zinc-50"
            >
              <span>What We Do</span>
              <span className="text-xs text-[#FE4845]">Quality Driven</span>
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-[#FE4845] hover:bg-zinc-50"
            >
              <span>Project Estimator</span>
              <span className="text-xs text-amber-500">Live Scope</span>
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:text-[#FE4845] hover:bg-zinc-50"
            >
              <span>FAQ</span>
            </a>

            <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-xl bg-linear-to-r from-[#FE4845] to-[#FF7573] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FE4845]/20"
              >
                <Sparkles className="w-4 h-4" />
                Start Your Project
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
