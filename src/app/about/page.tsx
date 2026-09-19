import type { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { teamData } from "@/lib/data/team";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import {
  ShieldCheck,
  Sparkles,
  Users,
  Cpu,
  Target,
  Compass,
  Award,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Visi, Nilai, dan Tim Kepemimpinan",
  description:
    "Pelajari lebih jauh tentang sejarah, nilai-nilai inti, visi-misi, dan para insinyur di balik kesuksesan PT Nusantara Tekno Solusi Indonesia.",
};

export default function AboutPage() {
  const renderCoreValueIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-blue-600" };
    switch (iconName) {
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Users":
        return <Users {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      case "ShieldCheck":
      default:
        return <ShieldCheck {...props} />;
    }
  };

  const milestones = [
    {
      year: "2018",
      title: "Pendirian Perusahaan di Jakarta",
      desc: "Berdiri sebagai boutique software engineering house beranggotakan 5 software architect berpengalaman.",
    },
    {
      year: "2020",
      title: "Ekspansi Solusi Cloud & DevOps",
      desc: "Menjadi mitra resmi implementasi infrastruktur cloud modern untuk perbankan dan fintech nasional.",
    },
    {
      year: "2022",
      title: "Mencapai Milestone 50+ Proyek Enterprise",
      desc: "Memperluas layanan ke sektor logistik, telehealth, dan smart city governance dengan standar ISO 27001.",
    },
    {
      year: "2024+",
      title: "Inovasi AI & Akselerasi Regional",
      desc: "Mengintegrasikan kapabilitas Data Analytics & Enterprise AI serta memperluas penetrasi klien di Asia Tenggara.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* 1. HERO ABOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            Mengenal Lebih Dekat
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Mendedikasikan Keahlian Teknologi untuk Masa Depan Digital Indonesia
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            {companyData.fullBio}
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {companyData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-extrabold text-blue-600">
                {stat.value}
              </div>
              <div className="mt-1 font-semibold text-slate-900 text-sm">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-slate-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. VISI & MISI */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tujuan Strategis"
            title="Komitmen Visi & Misi Kami"
            subtitle="Panduan fundamental yang melandasi setiap keputusan arsitektural dan hubungan kemitraan kami."
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Visi Jangka Panjang
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                  &ldquo;{companyData.vision}&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700/80 flex items-center gap-2 text-xs text-slate-400">
                <Target className="w-4 h-4 text-blue-400" />
                <span>Berfokus pada dampak terukur dan transformasi berkelanjutan.</span>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Misi Operasional Kami
              </h3>
              <ul className="mt-6 space-y-4">
                {companyData.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NILAI INTI (CORE VALUES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Budaya & Nilai"
          title="Prinsip Inti yang Menjadi Kompas Kami"
          subtitle="Standar perilaku dan integritas yang kami junjung tinggi dalam setiap baris kode dan interaksi tim."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                {renderCoreValueIcon(val.icon)}
              </div>
              <h4 className="text-lg font-bold text-slate-900">{val.title}</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERJALANAN & MILESTONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Jejak Rekam"
          title="Perjalanan Pertumbuhan Kami"
          subtitle="Langkah demi langkah evolusi Nusantara Tekno Solusi sebagai mitra teknologi terpercaya."
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-32 space-y-10 py-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Year tag for larger screens */}
                <div className="hidden sm:block absolute -left-32 top-0 text-right w-24">
                  <span className="text-lg font-black text-blue-600">
                    {m.year}
                  </span>
                </div>

                {/* Dot marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />

                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <span className="sm:hidden inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {m.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TIM KEPEMIMPINAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Kepemimpinan"
          title="Insinyur & Strategist di Balik Solusi Kami"
          subtitle="Dipimpin oleh para profesional yang berdedikasi tinggi dengan pengalaman gabungan puluhan tahun."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Avatar Banner */}
                <div
                  className={`h-40 bg-gradient-to-tr ${member.avatarGradient} flex items-center justify-center text-white relative`}
                >
                  <span className="text-3xl font-black tracking-wider drop-shadow-md">
                    {member.initials}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <h4 className="font-bold text-base sm:text-lg text-slate-900">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {member.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-5 pt-0 flex items-center gap-2">
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    aria-label={`LinkedIn profil ${member.name}`}
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                )}
                {member.githubUrl && (
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                    aria-label={`GitHub profil ${member.name}`}
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <CtaBanner
        title="Ingin Mengetahui Bagaimana Kami Dapat Membantu Tim Anda?"
        description="Hubungi tim manajemen kami untuk diskusi kolaborasi strategis atau penjadwalan demo teknologi."
      />
    </div>
  );
}
