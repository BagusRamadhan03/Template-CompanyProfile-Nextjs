import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { servicesData } from "@/lib/data/services";
import { portfolioData } from "@/lib/data/portfolio";
import { testimonialsData } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CtaBanner } from "@/components/CtaBanner";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Users2,
  CheckCircle,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = portfolioData.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Arsitek Transformasi Digital & Rekayasa Software</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Membangun Solusi Teknologi{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Berkelas Dunia
              </span>{" "}
              untuk Bisnis Anda
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {companyData.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 active:scale-95 transition-all"
              >
                <span>Mulai Konsultasi Proyek</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
              >
                <span>Jelajahi Portofolio Kami</span>
              </Link>
            </div>
          </div>

          {/* Key Metrics / Highlights Grid */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {companyData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600">
                  {stat.value}
                </div>
                <div className="mt-1 font-semibold text-sm sm:text-base text-slate-800">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-slate-500 hidden sm:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY / PARTNER BAR */}
      <section className="border-y border-slate-200/60 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Dipercaya oleh Perusahaan Terkemuka & Institusi Berstandar Tinggi
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {["Bank Artha Nusantara", "Nusantara Cargo", "Medika Sehat", "Gaya Retail Group", "Eduka Cendekia"].map(
              (client, i) => (
                <div
                  key={i}
                  className="font-bold text-sm sm:text-base tracking-wider text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {client}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              badge="Tentang Nusantara Tekno"
              title="Dedikasi Mengubah Kompleksitas Menjadi Solusi Digital Efisien"
              subtitle={companyData.fullBio}
              centered={false}
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Kualitas & Keamanan Standar Enterprise
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Mematuhi standar OWASP, enkripsi data end-to-end, dan pengujian berkala.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Kecepatan Eksekusi dengan Metodologi Agile
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Sprint terjadwal dua mingguan dengan laporan kemajuan transparan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Dukungan Pasca-Rilis & SLA Terjamin
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Garansi perbaikan bug dan pemantauan sistem 24/7 demi kelancaran operasional.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
              >
                <span>Pelajari Lebih Dalam Tentang Visi & Tim Kami</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative">
            <div className="bg-gradient-to-tr from-blue-600 via-indigo-700 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                    Nilai Keberhasilan
                  </p>
                  <p className="text-2xl font-bold mt-1">99.2% Tingkat Kepuasan</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-300" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-blue-100 font-medium">
                    <span>Target Penyelesaian Tepat Waktu</span>
                    <span className="font-bold text-white">98.5%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-cyan-400 h-2 rounded-full w-[98.5%]" />
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-blue-100 font-medium">
                    <span>Efisiensi Biaya Operasional Klien</span>
                    <span className="font-bold text-white">Rata-rata 32%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-emerald-400 h-2 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cyan-300 shrink-0" />
                <p className="text-xs text-blue-100 leading-relaxed">
                  Kami mengombinasikan keunggulan teknis dan pemahaman mendalam tentang lanskap bisnis Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAYANAN UNGGULAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Layanan Komprehensif"
          title="Solusi Rekayasa Digital yang Disesuaikan untuk Bisnis Anda"
          subtitle="Dari arsitektur aplikasi berbasis web modern hingga integrasi data cerdas, kami menghadirkan kapabilitas teknologi terpadu."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <span>Lihat Seluruh 6 Katalog Layanan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. PORTOFOLIO PILIHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kisah Sukses Klien"
          title="Hasil Nyata yang Mendorong Kemajuan Bisnis Klien Kami"
          subtitle="Pelajari bagaimana kami memecahkan masalah arsitektur yang kompleks dan meluncurkan produk digital bernilai jutaan transaksi."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span>Lihat Semua Proyek & Studi Kasus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. METODOLOGI KERJA */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Alur Kolaborasi"
            title="Bagaimana Kami Mengeksekusi Proyek Anda"
            subtitle="Pendekatan terstruktur dan transparan demi memastikan hasil akhir sesuai ekspektasi tepat waktu."
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Blueprint",
                desc: "Riset mendalam kebutuhan proses bisnis, audit arsitektur eksisting, dan perancangan roadmap teknis terperinci.",
              },
              {
                step: "02",
                title: "UI/UX & Prototyping",
                desc: "Pembuatan antarmuka intuitif dan prototipe interaktif untuk memvalidasi alur sebelum tahap coding dimulai.",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Penulisan kode berkualitas dengan standardisasi clean code, pengujian otomatis, dan demo berkala.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                desc: "Migrasi zero-downtime, pemantauan performa real-time, serta pelatihan tim internal perusahaan Anda.",
              },
            ].map((flow, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 relative group hover:border-blue-500 transition-colors"
              >
                <span className="text-3xl font-black text-blue-500/40 group-hover:text-blue-400 transition-colors">
                  {flow.step}
                </span>
                <h4 className="mt-4 font-bold text-lg text-white">
                  {flow.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimoni"
          title="Diakui & Dipercaya oleh Pemimpin Industri"
          subtitle="Apa kata klien kami tentang pengalaman bekerja sama dengan tim Nusantara Tekno Solusi."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {test.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {test.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {test.role} — <span className="text-slate-700 font-medium">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. GLOBAL CTA BANNER */}
      <CtaBanner />
    </div>
  );
}
