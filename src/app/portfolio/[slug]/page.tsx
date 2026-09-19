import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/data/portfolio";
import { companyData } from "@/lib/data/company";
import { CtaBanner } from "@/components/CtaBanner";
import {
  ChevronRight,
  ArrowRight,
  TrendingUp,
  Building2,
  Calendar,
  Layers,
  CheckCircle2,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Studi Kasus Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} — Studi Kasus Klien`,
    description: project.shortSummary,
    openGraph: {
      title: `${project.title} | Portofolio Nusantara Tekno Solusi`,
      description: project.shortSummary,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="space-y-12 sm:space-y-16 py-8">
      {/* 1. BREADCRUMB & HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/portfolio" className="hover:text-slate-900 transition-colors">
            Portofolio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-sm">
            {project.title}
          </span>
        </nav>

        {/* Hero Banner */}
        <div
          className={`rounded-3xl bg-gradient-to-tr ${project.coverGradient} p-8 sm:p-14 text-white shadow-xl relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-xs font-semibold">
                Tahun {project.year}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              {project.shortSummary}
            </p>

            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-white/80" />
                <span>Klien: <strong>{project.clientName}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-white/80" />
                <span>Industri: <strong>{project.industry}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGE, SOLUTION & IMPACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Content (2 cols) */}
          <div className="lg:col-span-2 space-y-12">
            {/* The Challenge */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                Tantangan Klien
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                Kendala & Permasalahan yang Dihadapi
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                Solusi dari Kami
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3">
                Pendekatan Teknis & Arsitektur yang Dibangun
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Measurable Results */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <span>Dampak Bisnis & Hasil Terukur</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                        {res.value}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm mt-1">
                        {res.label}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial if available */}
            {project.clientQuote && (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                  &ldquo;{project.clientQuote.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-blue-200/60">
                  <p className="font-bold text-sm text-slate-900">
                    {project.clientQuote.author}
                  </p>
                  <p className="text-xs text-slate-500">
                    {project.clientQuote.role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold">Tertarik dengan Hasil Ini?</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Kami dapat mengimplementasikan solusi yang disesuaikan dengan skala dan model bisnis Anda.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
                >
                  Jadwalkan Konsultasi Teknis
                </Link>
              </div>
            </div>

            {/* Other Projects */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                Studi Kasus Lainnya
              </h3>
              <ul className="space-y-3">
                {otherProjects.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/portfolio/${p.slug}`}
                      className="group block"
                    >
                      <p className="text-xs font-semibold text-slate-500 uppercase">
                        {p.clientName}
                      </p>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CtaBanner
        title="Wujudkan Transformasi Digital Serupa untuk Perusahaan Anda"
        description="Diskusikan kebutuhan proyek Anda langsung bersama tim arsitek teknologi Nusantara Tekno Solusi."
      />
    </div>
  );
}
