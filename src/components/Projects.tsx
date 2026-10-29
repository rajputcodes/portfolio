"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { GithubIcon } from "@/components/SocialIcons";
import { Film, Sparkles, CheckCircle2, ArrowUpRight, Info, Layers, Cpu } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagshipProject = PORTFOLIO_DATA.projects.find((p) => p.id === "cinematch-ai") || PORTFOLIO_DATA.projects[0];
  const secondaryProjects = PORTFOLIO_DATA.projects.filter((p) => p.id !== "cinematch-ai");

  return (
    <section id="projects" className="py-14 sm:py-18 lg:py-22 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Projects"
          title="Projects That Turn Ideas Into Applications"
          subtitle="A selection of machine learning, AI-powered applications, and structured backend systems."
        />

        {/* FLAGSHIP SPOTLIGHT: CineMatch AI */}
        {flagshipProject && (
          <div className="mb-8">
            <div className="glass-panel-elevated rounded-3xl border border-white/15 overflow-hidden transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-[#8B5CF6]/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left Side: Story & Information */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Flagship Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD]">
                        <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                        Flagship Project
                      </span>
                      <span className="text-xs font-mono text-[#38BDF8]">
                        Machine Learning &amp; RecSys
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#94A3B8] mt-1 mb-4">
                      {flagshipProject.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                      {flagshipProject.description}
                    </p>

                    {/* Key Feature Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {flagshipProject.keyFeatures.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#CBD5E1] bg-white/[0.03] p-2 rounded-lg border border-white/5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {flagshipProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-[#F8FAFC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="text-xs font-mono text-[#38BDF8] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded p-1 min-h-[44px]"
                    >
                      <Info className="w-4 h-4" />
                      <span>View Technical Details &amp; Architecture</span>
                    </button>

                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] hover:opacity-95 shadow-md shadow-[#8B5CF6]/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Explore on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Architecture & Simulation Infographic */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#120D26]/80 via-[#0D1220]/90 to-[#080B14] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Film className="w-4 h-4 text-[#8B5CF6]" />
                        <span className="text-xs font-mono font-medium text-[#CBD5E1]">
                          Hybrid RecSys Architecture
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded border border-[#34D399]/20">
                        Weighted Pipeline
                      </span>
                    </div>

                    {/* Infographic Steps */}
                    <div className="space-y-3 font-mono text-xs">
                      {/* Step 1: Content Similarity */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="flex items-center justify-between text-[#CBD5E1] mb-1">
                          <span className="flex items-center gap-1.5 text-[#38BDF8]">
                            <Layers className="w-3.5 h-3.5" />
                            Content Similarity
                          </span>
                          <span className="text-[10px] text-[#94A3B8]">TF-IDF Vectors</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
                          <div className="bg-[#38BDF8] h-full w-[60%] rounded-full" />
                        </div>
                        <span className="text-[10px] text-[#94A3B8] mt-1 block">
                          Weight: 0.6 · Cosine Metric Match
                        </span>
                      </div>

                      {/* Step 2: Collaborative Filtering */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <div className="flex items-center justify-between text-[#CBD5E1] mb-1">
                          <span className="flex items-center gap-1.5 text-[#8B5CF6]">
                            <Cpu className="w-3.5 h-3.5" />
                            Collaborative Filtering
                          </span>
                          <span className="text-[10px] text-[#94A3B8]">Item Rating Matrix</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
                          <div className="bg-[#8B5CF6] h-full w-[40%] rounded-full" />
                        </div>
                        <span className="text-[10px] text-[#94A3B8] mt-1 block">
                          Weight: 0.4 · Item-Item Correlations
                        </span>
                      </div>

                      {/* Step 3: Recommendation Ranking Output */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10">
                        <div className="flex items-center justify-between text-[11px] mb-2">
                          <span className="text-[#F8FAFC] font-semibold">Ranked Suggestions</span>
                          <span className="text-[#34D399]">Calculated</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-[#94A3B8] bg-black/30 p-2 rounded-lg">
                          <span>Result: Weighted Top-N List</span>
                          <span className="text-[#C4B5FD] font-mono">Score: 0.94</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                    <span>REST API &amp; Automated Tests</span>
                    <span className="text-[#34D399]">pytest passed</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* COMPLEMENTARY PROJECTS GRID: SmartBank AI & LMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
