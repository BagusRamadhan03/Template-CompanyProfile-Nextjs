"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { SearchX } from "lucide-react";

const categories = [
  "Semua Proyek",
  "Web Platform",
  "Mobile Apps",
  "Cloud & DevOps",
  "Data & AI",
] as const;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Semua Proyek"
  );

  const filteredProjects =
    selectedCategory === "Semua Proyek"
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === selectedCategory
        );

  const industryCount = new Set(
    portfolioData.map((project) => project.industry)
  ).size;
  const yearsOfExperience = new Date().getFullYear() - 2018;

  const stats = [
    {
      label: "Proyek terpublikasi",
      value: String(portfolioData.length).padStart(2, "0"),
    },
    { label: "Industri berbeda", value: `${industryCount}+` },
    { label: "Tahun pengalaman", value: `${yearsOfExperience}+` },
  ];

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow text-muted">
                <span className="h-px w-8 bg-ember" />
                Portofolio — 01
              </p>
              <h1 className="animate-rise mt-7 text-balance text-[2.6rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-6xl">
                Karya nyata dengan{" "}
                <span className="font-serif font-normal italic text-ember-ink">
                  dampak terukur
                </span>
                .
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="animate-rise text-pretty text-sm leading-relaxed text-muted sm:text-base">
                Jelajahi berbagai proyek teknologi yang kami kembangkan bersama
                korporasi, institusi layanan publik, dan startup terkemuka di
                Indonesia.
              </p>
            </div>
          </div>

          <div className="animate-rise mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl italic leading-none text-ink">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FILTER & GRID */}
      <section className="border-t border-line py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={cn(
                    "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300",
                    selectedCategory === category
                      ? "border-ink bg-ink text-bone"
                      : "border-line bg-cream text-muted hover:border-ink/40 hover:text-ink"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div
                key={`${selectedCategory}-${project.id}`}
                className={cn("animate-rise", index === 0 && "md:col-span-2")}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <PortfolioCard project={project} featured={index === 0} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-cream/60 py-16 text-center">
              <SearchX className="h-6 w-6 text-muted" />
              <p className="mt-4 text-sm font-medium text-ink">
                Belum ada proyek untuk kategori ini.
              </p>
              <p className="mt-1 text-xs text-muted">
                Coba pilih kategori lain atau lihat semua proyek.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA */}
      <CtaBanner
        title="Punya rencana proyek serupa untuk bisnis Anda?"
        description="Konsultasikan kebutuhan Anda dengan tim arsitek kami dan temukan bagaimana solusi kami dapat melipatgandakan efisiensi operasional Anda."
      />
    </div>
  );
}
