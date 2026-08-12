"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer id="footer" className="relative bg-zinc-50 border-t border-zinc-200 pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-62.5 bg-[#FE4845]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Massive Pre-Footer CTA Banner */}
        <div className="mb-20 p-8 sm:p-14 rounded-3xl bg-linear-to-r from-[#FE4845] via-[#FF7573] to-[#D02927] border border-transparent shadow-xl shadow-[#FE4845]/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-mono text-white mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START YOUR NEXT CHAPTER</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to engineer your next market-defining product?
            </h3>
            <p className="mt-2 text-sm text-red-100 font-normal">
              Speak directly with our senior software architects. Fixed timelines, guaranteed delivery, zero fluff.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenContact()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#FE4845] font-bold text-sm shadow-xl hover:bg-zinc-50 hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer border border-transparent"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FE4845]" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 border-b border-zinc-200">

          {/* Brand Column (2 cols on md) */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-[#FE4845] flex items-center justify-center shadow-md">
                <div className="w-3.5 h-3.5 grid grid-cols-2 gap-0.5">
                  <div className="bg-white rounded-[1px]" />
                  <div className="bg-white/80 rounded-[1px]" />
                  <div className="bg-white/60 rounded-[1px]" />
                  <div className="bg-red-200 rounded-[1px]" />
                </div>
              </div>
              <span className="text-lg font-bold text-zinc-900 font-mono">PixelBros</span>
            </a>

            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed font-normal">
              Bespoke custom website and mobile application development company specialized in custom web applications, high-performance mobile apps, and enterprise full-stack solutions.
            </p>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-zinc-200 hover:bg-[#FE4845] hover:text-white text-zinc-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-lg bg-zinc-200 hover:bg-[#FE4845] hover:text-white text-zinc-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-zinc-200 hover:bg-[#FE4845] hover:text-white text-zinc-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Engineering */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-800 uppercase font-bold">Services</div>
            <ul className="space-y-2 text-xs text-zinc-500 font-semibold">
              <li><a href="#services" className="hover:text-[#FE4845] transition-colors">Custom Web Apps</a></li>
              <li><a href="#services" className="hover:text-[#FE4845] transition-colors">iOS & Android Apps</a></li>
              <li><a href="#services" className="hover:text-[#FE4845] transition-colors">Full-Stack Solutions</a></li>
              <li><a href="#services" className="hover:text-[#FE4845] transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Column 3: Our Work */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-800 uppercase font-bold">Our Work</div>
            <ul className="space-y-2 text-xs text-zinc-500 font-semibold">
              <li><a href="#showcase" className="hover:text-[#FE4845] transition-colors">HyperFlow SaaS (Web)</a></li>
              <li><a href="#showcase" className="hover:text-[#FE4845] transition-colors">ApexPay Neobank (iOS)</a></li>
              <li><a href="#showcase" className="hover:text-[#FE4845] transition-colors">SynthAI Workspace</a></li>
              <li><a href="#showcase" className="hover:text-[#FE4845] transition-colors">Solis Luxe 3D Ecom</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-800 uppercase font-bold">Company</div>
            <ul className="space-y-2 text-xs text-zinc-500 font-semibold">
              <li><a href="#architecture" className="hover:text-[#FE4845] transition-colors">Home</a></li>
              <li><a href="#estimator" className="hover:text-[#FE4845] transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-[#FE4845] transition-colors">Services</a></li>
              <li><a href="#showcase" className="hover:text-[#FE4845] transition-colors">Work</a></li>
              <li><button onClick={() => onOpenContact()} className="hover:text-[#FE4845] text-[#FE4845] transition-colors">Contact Us</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-600 font-bold">All Production Systems Operational</span>
            <span>•</span>
            <span>Edge Uptime 99.99%</span>
          </div>

          <div>
            © {new Date().getFullYear()} PixelBros Software Development Company. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
