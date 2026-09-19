import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Workflow,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Rekayasa Perangkat Lunak & Solusi Cloud",
  description:
    "Katalog lengkap layanan rekayasa software enterprise, aplikasi mobile iOS & Android, arsitektur cloud, data warehouse, dan audit keamanan sistem.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* 1. HERO SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            Kapabilitas Teknis
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Layanan Rekayasa Digital Komprehensif Berstandar Enterprise
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami menghadirkan spektrum keahlian teknologi menyeluruh, dari tahap konseptualisasi sistem hingga deployment berskala jutaan pengguna.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3. WORKFLOW PROCESS */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Metodologi Agile"
            title="Siklus Pengembangan Perangkat Lunak Kami"
            subtitle="Menjamin kepastian tenggat waktu, transparansi anggaran, dan kualitas kode yang teruji di setiap iterasi."
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                step: "Tahap 1",
                title: "Analisis Arsitektur",
                desc: "Identifikasi kebutuhan fungsional & non-fungsional, pemodelan data, dan pemilihan stack teknologi yang tepat.",
              },
              {
                icon: Code2,
                step: "Tahap 2",
                title: "Sprint Pengembangan",
                desc: "Iterasi dua mingguan menggunakan clean architecture, code review berlapis, dan branch protection.",
              },
              {
                icon: ShieldCheck,
                step: "Tahap 3",
                title: "QA & Security Audit",
                desc: "Penetrasi testing, automated regression test, load testing 10.000+ virtual users, dan audit celah keamanan.",
              },
              {
                icon: Workflow,
                step: "Tahap 4",
                title: "Rilis & Operasional",
                desc: "Penerapan CI/CD zero-downtime, setup dashboard pemantauan, dan SLA dukungan 24/7 purna-jual.",
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 relative group hover:border-cyan-500/80 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {st.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-cyan-300 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="mt-4 font-bold text-lg text-white">
                    {st.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN KAMI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Jaminan Standar Kualitas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Apa yang Membedakan Layanan Nusantara Tekno Solusi?
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>100% Hak Milik Kode:</strong> Repositori dan hak cipta diserahkan penuh kepada klien.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Skalabilitas Teruji:</strong> Arsitektur dirancang siap menangani lonjakan jutaan request.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Dokumentasi Terstruktur:</strong> OpenAPI/Swagger spec, arsitektur wiki, dan SOP operasional.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Garansi Pasca-Peluncuran:</strong> Perbaikan bug tanpa biaya tambahan selama masa garansi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CtaBanner
        title="Butuh Solusi Khusus Sesuai Kebutuhan Spesifik Perusahaan Anda?"
        description="Jadwalkan sesi konsultasi teknologi gratis bersama tim arsitek solusi kami hari ini."
      />
    </div>
  );
}
