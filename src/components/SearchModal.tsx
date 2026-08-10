"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Layers, Smartphone, Globe, Server, ArrowRight, Zap } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (targetAnchor: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectProject }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const searchItems = [
    { title: "HyperFlow — Real-Time Cloud Telemetry", category: "Web SaaS", anchor: "#showcase", icon: Globe },
    { title: "ApexPay — Next-Gen Neobank Mobile App", category: "iOS / Android", anchor: "#showcase", icon: Smartphone },
    { title: "SynthAI — Autonomous Coding Agent Platform", category: "AI & Cloud", anchor: "#showcase", icon: Server },
    { title: "Solis Luxe — 3D E-Commerce Visualizer", category: "Headless Ecom", anchor: "#showcase", icon: Globe },
    { title: "PulseHealth — Continuous Biomarker Tracker", category: "Mobile / HealthKit", anchor: "#showcase", icon: Smartphone },
    { title: "VaultZero — Institutional Asset Custody", category: "Full-Stack Security", anchor: "#showcase", icon: Server },
    { title: "Custom Web Application Engineering", category: "Core Service", anchor: "#services", icon: Zap },
    { title: "Native Mobile Engineering (iOS & Android)", category: "Core Service", anchor: "#services", icon: Zap },
    { title: "Enterprise Full-Stack Cloud Systems", category: "Core Service", anchor: "#services", icon: Zap },
    { title: "Project Scope & Cost Calculator", category: "Interactive Tool", anchor: "#estimator", icon: Layers },
    { title: "Global Latency & Edge Ping Simulator", category: "Architecture System", anchor: "#architecture", icon: Server },
    { title: "Client Frequently Asked Questions", category: "FAQ", anchor: "#faq", icon: Layers },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Toggle or open handled by parent
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 bg-zinc-900/60 backdrop-blur-xl animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-zinc-200 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Header */}
        <div className="p-4 border-b border-zinc-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FE4845] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, screen flows, services, or tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.anchor}
                onClick={() => {
                  onSelectProject(item.anchor);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-100 text-zinc-500 group-hover:bg-[#FE4845] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-800">{item.title}</div>
                    <div className="text-[10px] text-zinc-400 font-mono">{item.category}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-800 group-hover:translate-x-0.5 transition-all" />
              </a>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-8 text-center text-xs text-zinc-500">
              No matching results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>Search PixelBros Work</span>
          <span>Press ESC to dismiss</span>
        </div>

      </div>
    </div>
  );
}
