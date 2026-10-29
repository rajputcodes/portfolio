"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-panel-elevated relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl bg-[#0D1220]/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#CBD5E1] hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider">
            {project.category}
          </span>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mt-1">
            {project.title}
          </h3>
          <p className="text-sm text-[#94A3B8] font-mono mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Project Overview */}
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
              Overview
            </h4>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#22D3EE]" />
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#34D399]" />
                Technical Approach
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#CBD5E1] bg-white/[0.02] p-2 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2.5">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-[#F8FAFC]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] hover:opacity-95 shadow-md shadow-[#8B5CF6]/20 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
