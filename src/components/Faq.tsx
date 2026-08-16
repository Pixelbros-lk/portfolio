"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does Pixelbros do?",
      a: "Pixelbros is a web and software development studio focused on turning ideas into reliable digital products. We build modern websites, custom web applications, business management systems, integrations, and automation solutions tailored to each client's requirements."
    },
    {
      q: "How much does a website or software project cost?",
      a: "There is no one-size-fits-all price. The cost depends on the project's scope, number of pages or modules, design requirements, integrations, functionality, and technical complexity. Once we understand your requirements, we'll provide a clear quotation before development begins."
    },
    {
      q: "How long does it take to build a website?",
      a: "Project timelines depend on the scope and complexity. A straightforward business website can typically be completed faster than an e-commerce platform or custom web application. We'll provide an estimated timeline during the planning stage and keep you updated throughout development."
    },
    {
      q: "Do you build custom websites or use templates?",
      a: "We can work with different approaches depending on the project, but our focus is on building solutions around your business requirements. We don't believe your business should have to adapt to a website template. The technology, design, and functionality should work for you."
    },
    {
      q: "Will my website work on mobile devices?",
      a: "Yes. Our websites are built with responsive design principles so they provide a consistent experience across desktops, tablets, and mobile devices. We also consider performance and usability across different screen sizes during development and testing."
    },
    {
      q: "Do you provide domain, hosting, SSL, and deployment?",
      a: "Yes. We can assist with the technical side of getting your website online, including domain configuration, hosting, DNS, SSL, deployment, and production setup. Our goal is to make the transition from development to production as smooth as possible."
    },
    {
      q: "Do you provide SEO?",
      a: "We implement essential technical and on-page SEO practices as part of relevant projects, including proper page structure, metadata, responsive design, performance considerations, and search-engine-friendly implementation. Ongoing SEO campaigns and digital marketing can be discussed separately based on your goals."
    },
    {
      q: "Can Pixelbros build custom business software?",
      a: "Absolutely. Websites are only one part of what we do. We can develop custom web-based systems such as HR platforms, dashboards, CRM solutions, booking systems, employee portals, internal management systems, reporting tools, and other applications designed around your workflow."
    },
    {
      q: "Can you  integrate existing systems and APIs?",
      a: "Yes. We can connect your application with third-party services and existing systems through APIs and other integration methods. This can include payment gateways, communication platforms, databases, authentication services, internal systems, and business automation workflows."
    },
    {
      q: "Can Pixelbros automate repetitive business processes?",
      a: "Yes. If a process is repetitive, rule-based, and currently requires significant manual work, it may be a good candidate for automation. We can analyse the workflow and develop scripts, scheduled tasks, integrations, or custom software to reduce manual effort and improve efficiency."
    },
    {
      q: "What happens after my website or system goes live?",
      a: "Going live is not necessarily the end of the project. We can provide ongoing maintenance and technical support, including bug fixes, updates, performance improvements, security-related maintenance, content or functionality changes, and future feature development depending on your support requirements."
    },
    {
      q: "How do I start a project with Pixelbros?",
      a: "Simply get in touch and tell us what you're trying to build, what problem you're trying to solve, and what you already have. We'll discuss your requirements, recommend an appropriate approach, define the scope, and provide a quotation before development begins."
    },
    {
      q: "What does Pixels to production mean?",
      a: "Pixels to production represents how we approach every project. We don't stop at creating something that looks good. We take an idea from concept and design through development, testing, deployment, and into a working production environment."
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FE4845] to-[#FF7573]">
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
