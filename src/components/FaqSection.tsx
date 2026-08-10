"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can PixelBros design and ship our MVP?",
      a: "Our typical MVP delivery timeframe is between 3 to 6 weeks depending on feature complexity and whether you select our Standard or High-Velocity Blitz Sprint. We work in rapid 1-week iterative sprints with continuous live staging builds so you test real software every 7 days."
    },
    {
      q: "Who owns the code, design assets, and intellectual property?",
      a: "You own 100% of all intellectual property, source code, designs, and database schemas from day one. All repositories, Figma files, and cloud access keys are transferred directly to your organization upon completion."
    },
    {
      q: "How does PixelBros communicate and manage project progress?",
      a: "We integrate directly into your workflow via a dedicated shared Slack or Discord channel. You will receive daily async Loom demo videos, transparent Linear task boards, and weekly live sync calls with your Lead Software Architect."
    },
    {
      q: "Can PixelBros assist with App Store & Google Play approval?",
      a: "Yes, absolutely. We manage the entire Apple App Store and Google Play publishing workflow, including TestFlight distribution, provisioning profiles, privacy manifest compliance, and App Store review resolution."
    },
    {
      q: "What happens after the product launches?",
      a: "Every project includes a 60-day post-launch warranty for bug fixes and performance monitoring. We also provide ongoing fractional engineering retainers for continuous feature roadmaps and scale optimization."
    },
    {
      q: "What tech stack do you recommend for our project?",
      a: "For web applications, our default is Next.js 16 with TypeScript and Tailwind CSS. For mobile, we recommend React Native with native Swift/Kotlin modules for unmatched velocity. For backends, we use Node.js, Python FastAPI, PostgreSQL with pgvector, and Cloudflare/AWS edge infrastructure."
    }
  ];

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 bg-white border-t border-zinc-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-[#FE4845] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Everything you need to know about partnering with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE4845] to-[#FF7573]">
              PixelBros.
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-50 border-[#FE4845]/30 shadow-sm"
                    : "bg-white border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-bold text-zinc-900 tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#FE4845]/20 border-[#FE4845]/40 text-[#FE4845]"
                        : "bg-zinc-50 border-zinc-200 text-zinc-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/80 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Card */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-zinc-900 flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#FE4845]" />
              <span>Have a unique custom architectural requirement?</span>
            </div>
            <div className="text-xs text-zinc-500 mt-0.5 font-normal">
              Talk directly with our Principal Architects on an introductory discovery session.
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#FE4845] text-white font-bold text-xs hover:bg-[#D02927] transition-colors whitespace-nowrap shadow-md shadow-[#FE4845]/15"
          >
            Ask Us Anything
          </a>
        </div>

      </div>
    </section>
  );
}
