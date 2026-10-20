import type { Metadata } from "next";
import { companyData } from "@/lib/data/company";
import { teamData } from "@/lib/data/team";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { StatsStrip } from "@/components/StatsStrip";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import { cn } from "@/lib/utils";
import {
  Compass,
  Cpu,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Visi, Nilai, dan Tim Kepemimpinan",
  description:
    "Pelajari lebih jauh tentang sejarah, nilai-nilai inti, visi-misi, dan para insinyur di balik kesuksesan PT Nusantara Tekno Solusi Indonesia.",
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

export default function AboutPage() {
  const renderCoreValueIcon = (iconName: string) => {
    const props = { className: "h-5 w-5" };
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

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-muted">
                <span className="h-px w-8 bg-ember" />
                Tentang kami — 01
              </p>
              <h1 className="animate-rise mt-7 text-balance text-[2.6rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-6xl">
                Teknologi yang{" "}
                <span className="font-serif font-normal italic text-ember-ink">
                  manusiawi
                </span>
                , dibangun untuk bertahan.
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="animate-rise text-pretty text-sm leading-relaxed text-muted sm:text-base">
                {companyData.fullBio}
              </p>
              <div className="animate-rise mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span>Est. {companyData.establishedYear}</span>
                <span>Jakarta, ID</span>
                <span>120+ proyek</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-line bg-cream/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StatsStrip stats={companyData.stats} />
          </div>
        </div>
      </section>

      {/* 2. VISI & MISI */}
      <section className="grain grain-light relative overflow-hidden bg-ink py-20 text-bone sm:py-28">
        <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              dark
              centered={false}
              index="02"
              badge="Arah perusahaan"
              title={
                <>
                  Visi & misi yang jadi{" "}
                  <span className="font-serif font-normal italic text-ember">
                    kompas
                  </span>{" "}
                  kami.
                </>
              }
              subtitle="Panduan fundamental yang melandasi setiap keputusan arsitektural dan hubungan kemitraan kami."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-bone/10 bg-bone/[0.03] p-8 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-bone/15 text-ember">
                      <Compass className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone/35">
                      Visi
                    </span>
                  </div>
                  <p className="mt-8 font-serif text-2xl italic leading-snug text-bone sm:text-3xl">
                    “{companyData.vision}”
                  </p>
                </div>
                <p className="mt-8 border-t border-bone/10 pt-5 text-xs text-bone/40">
                  Berfokus pada dampak terukur dan transformasi berkelanjutan.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-bone/10 bg-bone/[0.03] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-bone/15 text-ember">
                    <Target className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone/35">
                    Misi
                  </span>
                </div>
                <ul className="mt-8 space-y-5">
                  {companyData.mission.map((item, index) => (
                    <li key={item} className="flex gap-4">
                      <span className="pt-0.5 font-mono text-[10px] text-ember">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-bone/55">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              index="03"
              badge="Budaya & nilai"
              title={
                <>
                  Prinsip inti yang jadi{" "}
                  <span className="font-serif font-normal italic text-ember-ink">
                    kompas
                  </span>{" "}
                  kami.
                </>
              }
              subtitle="Standar perilaku dan integritas yang kami junjung tinggi dalam setiap baris kode dan interaksi tim."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyData.coreValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <div
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border p-6 transition-all duration-500 sm:p-7",
                    index === 0
                      ? "border-ember bg-ember"
                      : "border-line bg-cream hover:-translate-y-1 hover:border-ink/25"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300",
                        index === 0
                          ? "border-ink/15 bg-ink/10 text-ink"
                          : "border-line bg-bone text-ink group-hover:border-ember group-hover:bg-ember"
                      )}
                    >
                      {renderCoreValueIcon(value.icon)}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[10px]",
                        index === 0 ? "text-ink/50" : "text-muted"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-sm leading-relaxed",
                      index === 0 ? "text-ink/70" : "text-muted"
                    )}
                  >
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MILESTONES */}
      <section className="border-y border-line bg-bone-deep/35 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <SectionHeading
                    centered={false}
                    index="04"
                    badge="Jejak rekam"
                    title={
                      <>
                        Perjalanan{" "}
                        <span className="font-serif font-normal italic text-ember-ink">
                          pertumbuhan
                        </span>{" "}
                        kami.
                      </>
                    }
                    subtitle="Langkah demi langkah evolusi kami sebagai mitra teknologi terpercaya di Indonesia."
                  />
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative border-l border-line pl-8 sm:pl-10">
                {milestones.map((milestone, index) => (
                  <Reveal key={milestone.year} delay={index * 70}>
                    <div className="relative pb-12 last:pb-0">
                      <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full border-2 border-bone bg-ember sm:-left-[46px]" />
                      <span className="font-serif text-3xl italic leading-none text-ember-ink sm:text-4xl">
                        {milestone.year}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-ink">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                        {milestone.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              index="05"
              badge="Kepemimpinan"
              title={
                <>
                  Insinyur & strategist di balik{" "}
                  <span className="font-serif font-normal italic text-ember-ink">
                    solusi
                  </span>{" "}
                  kami.
                </>
              }
              subtitle="Dipimpin oleh para profesional berdedikasi dengan pengalaman gabungan puluhan tahun."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member, index) => (
              <Reveal key={member.id} delay={index * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-all duration-500 hover:-translate-y-1 hover:border-ink/25">
                  <div
                    className={cn(
                      "grain grain-light relative flex h-52 items-end bg-gradient-to-br p-6",
                      member.avatarGradient
                    )}
                  >
                    <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
                    <span className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="relative font-serif text-5xl italic leading-none text-bone">
                      {member.initials}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-ember-ink">
                      {member.role}
                    </p>
                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted">
                      {member.bio}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.expertise.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-line bg-bone/60 px-2 py-1 text-[10px] text-ink/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 border-t border-line pt-4">
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn profil ${member.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-ember hover:bg-ember hover:text-ink"
                        >
                          <LinkedInIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {member.githubUrl && (
                        <a
                          href={member.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub profil ${member.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-ember hover:bg-ember hover:text-ink"
                        >
                          <GitHubIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CtaBanner
        title="Ingin mengetahui bagaimana kami dapat membantu tim Anda?"
        description="Hubungi tim manajemen kami untuk diskusi kolaborasi strategis atau penjadwalan demo teknologi."
      />
    </div>
  );
}
