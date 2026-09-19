import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { companyData } from "@/lib/data/company";
import { CtaBanner } from "@/components/CtaBanner";
import {
  ChevronRight,
  CheckCircle2,
  Package,
  Layers,
  HelpCircle,
  Clock,
  ArrowRight,
  MessageCircle,
  FileCheck,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: `${service.title} — Solusi & Implementasi`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Nusantara Tekno Solusi`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const waConsultationUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Halo Nusantara Tekno Solusi, saya ingin berkonsultasi mengenai layanan ${service.title}.`
  )}`;

  return (
    <div className="space-y-12 sm:space-y-16 py-8">
      {/* 1. BREADCRUMBS & HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-slate-900 transition-colors">
            Layanan
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-sm">
            {service.title}
          </span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-4">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all"
              >
                <span>Mulai Diskusi Layanan Ini</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={waConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>Estimasi Rata-Rata Pengerjaan Proyek: <strong>{service.estimatedDuration}</strong></span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Highlight Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span>Keunggulan & Manfaat Solusi</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlightPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-700 leading-snug font-medium">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Package className="w-6 h-6 text-blue-600" />
                <span>Apa Saja yang Akan Anda Terima (Deliverables)</span>
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm divide-y divide-slate-100">
                {service.deliverables.map((deliv, i) => (
                  <div key={i} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-blue-600" />
                <span>Tahapan Pelaksanaan Proyek</span>
              </h2>
              <div className="space-y-4">
                {service.processSteps.map((step, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4"
                  >
                    <span className="text-xl font-black text-blue-600/40">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Specific FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                <span>Pertanyaan Umum (FAQ)</span>
              </h2>
              <div className="space-y-4">
                {service.faq.map((q, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
                  >
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {q.question}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {q.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Tech Stack Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold">Butuh Penawaran Resmi?</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Kirimkan spesifikasi kebutuhan sistem Anda untuk mendapatkan proposal teknis dan kalkulasi RAB resmi.
              </p>
              <div className="mt-6 space-y-2.5">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
                >
                  Formulir Permintaan Penawaran
                </Link>
                <a
                  href={waConsultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat WhatsApp Tim Kami</span>
                </a>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                Layanan Terkait Lainnya
              </h3>
              <ul className="space-y-2 text-sm">
                {relatedServices.map((rel) => (
                  <li key={rel.id}>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-between py-1 group"
                    >
                      <span className="truncate pr-2">{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CtaBanner
        title={`Siap Memulai Proyek ${service.title}?`}
        description="Konsultasikan tantangan teknis Anda sekarang. Tim arsitek kami siap memberikan rekomendasi solusi paling efisien."
      />
    </div>
  );
}
