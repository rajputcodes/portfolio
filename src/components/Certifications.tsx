import React from "react";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-14 sm:py-18 lg:py-22 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Credentials"
          title="Certifications & Professional Learning"
          subtitle="Structured learning and practical exposure across AI, data analytics, and emerging technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PORTFOLIO_DATA.certifications.map((cert) => {
            const isAws = cert.id === "aws-ml";

            return (
              <div
                key={cert.id}
                className={`glass-panel rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                  isAws
                    ? "border-[#F59E0B]/35 hover:border-[#F59E0B]/60 shadow-[0_0_24px_rgba(245,158,11,0.06)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Issuer & Platform Bar */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-inner"
                        style={{
                          backgroundColor: `${cert.accentColor}18`,
                          borderColor: `${cert.accentColor}40`,
                        }}
                      >
                        <Award
                          className="w-4 h-4"
                          style={{ color: cert.accentColor }}
                        />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-medium text-[#38BDF8] block leading-tight">
                          {cert.provider || cert.organization}
                        </span>
                        {cert.platform && (
                          <span className="text-[10px] font-mono text-[#94A3B8]">
                            Platform: {cert.platform}
                          </span>
                        )}
                      </div>
                    </div>

                    {cert.date && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-[#94A3B8] shrink-0">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  {/* Certification Title */}
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-[#F8FAFC] leading-snug mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer Authority details */}
                  {cert.organization && isAws && (
                    <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed">
                      {cert.organization}
                    </p>
                  )}

                  {/* Achievement / Score highlight */}
                  {cert.achievement && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#FBBF24] mb-3 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.achievement}</span>
                    </div>
                  )}

                  {cert.score && !cert.achievement && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#14B8A6]/15 border border-[#14B8A6]/30 text-[#2DD4BF] mb-3 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Score: {cert.score}</span>
                    </div>
                  )}

                  {/* Highlights if provided */}
                  {cert.highlights && (
                    <div className="mt-3 space-y-2">
                      {cert.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#CBD5E1]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer metadata chip */}
                {cert.credentialId && (
                  <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                    <span>Credential ID</span>
                    <span className="text-[#CBD5E1] bg-white/5 px-2 py-0.5 rounded border border-white/5 font-semibold">
                      {cert.credentialId}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
