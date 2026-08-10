"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Server
} from "lucide-react";
import confetti from "canvas-confetti";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

export default function ContactModal({ isOpen, onClose, initialScope = "" }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("web");
  const [budget, setBudget] = useState("$25k - $50k");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialScope) {
      setMessage(initialScope);
    }
  }, [initialScope]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FE4845", "#FF7573", "#D02927", "#ffffff"],
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-900/60 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] rounded-3xl bg-white border border-zinc-200 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-5 my-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Inquiry Received!
            </h3>

            <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
              Thank you, <span className="text-zinc-900 font-bold">{name || "Founder"}</span>. One of our Principal Architects will review your technical specifications and respond within 4 hours.
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] font-bold">
              Estimated Next Step: 30-Min Technical Architecture Deep Dive
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#FE4845] text-white font-bold text-xs hover:bg-[#D02927] transition-all shadow-md shadow-[#FE4845]/15"
            >
              Done & Return to Showcase
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FE4845]/10 border border-[#FE4845]/20 text-[#FE4845] text-xs font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT TO ARCHITECT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                Let's architect your vision.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Tell us about your project requirements, scope, or timeline.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase mb-1.5 font-bold">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#FE4845] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase mb-1.5 font-bold">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#FE4845] transition-colors"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-mono text-zinc-500 uppercase mb-1.5 font-bold">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="e.g. HyperFlow Inc"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#FE4845] transition-colors"
              />
            </div>

            {/* Platform Selector */}
            <div>
              <label className="block text-xs font-mono text-zinc-500 uppercase mb-2 font-bold">
                Primary Platform Focus
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "web", label: "Custom Web", icon: Globe },
                  { id: "mobile", label: "Mobile App", icon: Smartphone },
                  { id: "fullstack", label: "Full-Stack", icon: Server },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = platform === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        active
                          ? "bg-[#FE4845] border-transparent text-white shadow-md shadow-[#FE4845]/15"
                          : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-xs font-mono text-zinc-500 uppercase mb-2 font-bold">
                Estimated Project Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold transition-all ${
                      budget === b
                        ? "bg-[#FE4845] border-transparent text-white shadow-sm"
                        : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-xs font-mono text-zinc-500 uppercase mb-1.5 font-bold">
                Project Scope & Details
              </label>
              <textarea
                rows={3}
                placeholder="Describe what you want to build, target launch dates, or key features..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#FE4845] transition-colors"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NDA Protected • 4-hr Response SLA</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FE4845] hover:bg-[#D02927] text-white text-xs font-bold shadow-lg shadow-[#FE4845]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-transparent"
              >
                {isSubmitting ? (
                  <span>Transmitting Scope...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Scope</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
