"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "projects",
  "certifications",
  "education",
  "experience",
  "contact",
];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen bg-[#080B14] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-[#38BDF8] overflow-x-hidden w-full">
      {/* Floating Glass Navbar */}
      <Navbar activeSection={activeSection} />

      <main className="relative z-10 overflow-x-hidden w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
