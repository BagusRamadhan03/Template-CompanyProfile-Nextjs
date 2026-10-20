import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/data/portfolio";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Layers,
  Quote,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.find((item) => item.slug === slug);

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
  const project = portfolioData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioData
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  const monogram = project.clientName
    .split(" ")
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div>
      {/* 1. HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
        >
          <Link href="/" className="transition-colors hover:text-ink">
            Beranda
          </Link>
          <ChevronRight className="h-3 w-3 text-line" />
          <Link href="/portfolio" className="transition-colors hover:text-ink">
            Portofolio
          </Link>
          <ChevronRight className="h-3 w-3 text-line" />
          <span className="max-w-xs truncate text-ink sm:max-w-sm">
            {project.title}
          </span>
        </nav>

        <div
          className={cn(
            "grain grain-light relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-bone shadow-[0_45px_90px_-55px_rgba(18,18,16,0.6)] sm:p-12 lg:p-16",
            project.coverGradient
          )}
        >
          <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-bone/15" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-14 right-4 select-none font-serif text-[13rem] italic leading-none text-bone/10"
          >
            {monogram}
          </span>

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-bone/25 bg-bone/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm">
                {project.category}
              </span>
              <span className="rounded-full border border-bone/25 bg-bone/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm">
                {project.year}
              </span>
            </div>

            <h1 className="mt-6 text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-bone/80 sm:text-base">
              {project.shortSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-bone/20 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-3.5 w-3.5" />
                {project.clientName}
              </span>
              <span className="inline-flex items-center gap-2">
                <Layers className="h-3.5 w-3.5" />
                {project.industry}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-14 lg:col-span-8">
            <Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-cream p-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember-ink">
                    01 — Tantangan
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-ink">
                    Kendala yang dihadapi klien
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.challenge}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-cream p-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ember-ink">
                    02 — Solusi
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-ink">
                    Pendekatan teknis yang dibangun
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.solution}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="mb-7 flex items-center gap-4">
                  <span className="font-mono text-[10px] text-ember-ink">
                    03
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    Dampak bisnis & hasil terukur
                  </h2>
                  <span className="h-px flex-1 bg-line" />
                </div>

                <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                  {project.results.map((result) => (
                    <div key={result.label} className="bg-cream p-7">
                      <p className="font-serif text-4xl italic leading-none text-ember-ink">
                        {result.value}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-ink">
                        {result.label}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {project.clientQuote && (
              <Reveal>
                <figure className="grain grain-light relative overflow-hidden rounded-2xl bg-ink p-8 text-bone sm:p-10">
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-bone/10" />
                  <Quote className="relative z-10 h-8 w-8 text-ember" />
                  <blockquote className="relative z-10 mt-6 font-serif text-2xl italic leading-snug">
                    “{project.clientQuote.quote}”
                  </blockquote>
                  <figcaption className="relative z-10 mt-6 border-t border-bone/10 pt-5">
                    <p className="text-sm font-semibold">
                      {project.clientQuote.author}
                    </p>
                    <p className="mt-0.5 text-xs text-bone/45">
                      {project.clientQuote.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 lg:space-y-5">
              <div className="rounded-2xl border border-line bg-cream p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Teknologi
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-bone/60 px-2.5 py-1.5 text-[11px] font-medium text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grain grain-light relative overflow-hidden rounded-2xl bg-ink p-7 text-bone">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-bone/10" />
                <p className="relative z-10 font-serif text-2xl italic leading-snug">
                  Tertarik dengan hasil ini?
                </p>
                <p className="relative z-10 mt-3 text-xs leading-relaxed text-bone/50">
                  Kami dapat mengimplementasikan solusi yang disesuaikan dengan
                  skala dan model bisnis Anda.
                </p>
                <Button
                  href="/contact"
                  variant="light"
                  arrow
                  className="relative z-10 mt-6 w-full"
                >
                  Jadwalkan konsultasi
                </Button>
              </div>

              <div className="rounded-2xl border border-line bg-cream p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Studi kasus lainnya
                </p>
                <div className="mt-4 space-y-4">
                  {otherProjects.map((other) => (
                    <Link
                      key={other.id}
                      href={`/portfolio/${other.slug}`}
                      className="group block"
                    >
                      <div
                        className={cn(
                          "grain grain-light relative overflow-hidden rounded-xl bg-gradient-to-br p-4",
                          other.coverGradient
                        )}
                      >
                        <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
                        <span className="relative z-10 font-mono text-[9px] uppercase tracking-[0.16em] text-bone/60">
                          {other.clientName}
                        </span>
                        <h3 className="relative z-10 mt-2 line-clamp-2 text-sm font-semibold text-bone">
                          {other.title}
                        </h3>
                        <span className="absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-bone/25 text-bone transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. CTA */}
      <CtaBanner
        title="Wujudkan transformasi digital serupa untuk perusahaan Anda"
        description="Diskusikan kebutuhan proyek Anda langsung bersama tim arsitek teknologi Nusantara Tekno Solusi."
      />
    </div>
  );
}
