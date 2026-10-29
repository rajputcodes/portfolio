"use client";

import React, { useState } from "react";
import { Copy, Check, MapPin, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      subject || "Connecting with Ganesh Singh"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-22 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          centered
          badge="Get In Touch"
          title="Let's Build Something Intelligent."
          subtitle={
            "I'm interested in AI, machine learning, Generative AI, and software engineering. Explore my work or connect with me to discuss ideas and opportunities."
          }
        />

        {/* Main Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info & Quick Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Info Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1">
                  Location
                </span>
                <div className="flex items-center gap-2 text-base text-[#F8FAFC]">
                  <MapPin className="w-4 h-4 text-[#8B5CF6]" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>

              {/* Email with Copy Action */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1.5">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs sm:text-sm font-mono text-[#38BDF8] hover:underline truncate"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#CBD5E1] hover:text-white transition-colors cursor-pointer shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#34D399]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono text-[#34D399] mt-1.5 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Status Note */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs text-[#94A3B8] block leading-relaxed">
                  Open for technical discussions, AI/ML collaborations, and research initiatives.
                </span>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-interactive rounded-2xl p-4 border border-white/10 flex flex-col items-center justify-center text-center group min-h-[80px]"
              >
                <LinkedinIcon className="w-5 h-5 text-[#38BDF8] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-[#F8FAFC]">LinkedIn</span>
                <span className="text-[10px] font-mono text-[#94A3B8]">Connect</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-interactive rounded-2xl p-4 border border-white/10 flex flex-col items-center justify-center text-center group min-h-[80px]"
              >
                <GithubIcon className="w-5 h-5 text-[#C4B5FD] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-[#F8FAFC]">GitHub</span>
                <span className="text-[10px] font-mono text-[#94A3B8]">Repositories</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Direct Email Composer */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-white/15 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F8FAFC]">
                      Compose a Direct Message
                    </h3>
                    <p className="text-xs text-[#94A3B8] font-mono mt-0.5">
                      Pre-fills your message in your default email client
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-4">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. AI Project Collaboration / Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#CBD5E1] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Ganesh, I saw your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] hover:opacity-95 shadow-md shadow-[#8B5CF6]/20 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </button>

                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 text-center transition-colors min-h-[44px] flex items-center justify-center"
                    >
                      Direct &quot;Email Me&quot; Link
                    </a>
                  </div>
                </form>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Privacy-focused</span>
                <span>Direct client mailto</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
