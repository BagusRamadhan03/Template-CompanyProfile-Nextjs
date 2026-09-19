"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { Sparkles, Filter } from "lucide-react";

const categories = [
  "Semua Proyek",
  "Web Platform",
  "Mobile Apps",
  "Cloud & DevOps",
  "Data & AI",
] as const;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Proyek");

  const filteredProjects =
    selectedCategory === "Semua Proyek"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* 1. HERO PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            Studi Kasus & Rekam Jejak
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Karya & Implementasi Nyata yang Memberi Dampak Terukur
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Jelajahi berbagai proyek teknologi yang kami kembangkan bersama korporasi, institusi layanan publik, dan startup terkemuka di Indonesia.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS & PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">
              Belum ada proyek yang ditampilkan untuk kategori ini.
            </p>
          </div>
        )}
      </section>

      {/* 3. CTA */}
      <CtaBanner
        title="Punya Rencana Proyek Serupa untuk Bisnis Anda?"
        description="Konsultasikan kebutuhan Anda dengan tim arsitek kami dan temukan bagaimana solusi kami dapat melipatgandakan efisiensi operasional Anda."
      />
    </div>
  );
}
