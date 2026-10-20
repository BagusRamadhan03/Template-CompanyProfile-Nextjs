import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { companyData } from "@/lib/data/company";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  ChevronRight,
  Clock,
  FileCheck,
  MessageCircle,
  Package,
  Plus,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

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

function ContentTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-7 flex items-center gap-4">
      <span className="font-mono text-[10px] text-ember-ink">{index}</span>
      <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  const waConsultationUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Halo Nusantara Tekno Solusi, saya ingin berkonsultasi mengenai layanan ${service.title}.`
  )}`;

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-ink">
              Beranda
            </Link>
            <ChevronRight className="h-3 w-3 text-line" />
            <Link
              href="/services"
              className="transition-colors hover:text-ink"
            >
              Layanan
            </Link>
            <ChevronRight className="h-3 w-3 text-line" />
            <span className="text-ink">{service.title}</span>
          </nav>

          <div className="mt-10 grid gap-10 border-b border-line pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-line bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {service.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <Clock className="h-3 w-3 text-ember-ink" />
                  {service.estimatedDuration}
                </span>
                {service.popular && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ember px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                    <Sparkles className="h-3 w-3" />
                    Paling diminati
                  </span>
                )}
              </div>

              <h1 className="animate-rise mt-6 text-balance text-4xl font-semibold leading-[1.0] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="animate-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted">
                {service.fullDesc}
              </p>
            </div>

            <div className="animate-rise flex flex-col gap-3 lg:col-span-4">
              <Button href="/contact" size="lg" arrow className="w-full">
                Mulai diskusi layanan ini
              </Button>
              <a
                href={waConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bone"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-16 lg:col-span-8">
            {/* Benefits */}
            <Reveal>
              <div>
                <ContentTitle index="01" title="Keunggulan & manfaat solusi" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.highlightPoints.map((point, index) => (
                    <div
                      key={point}
                      className="group flex gap-4 rounded-2xl border border-line bg-cream p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember font-mono text-[10px] font-bold text-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-ink/75">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Deliverables */}
            <Reveal>
              <div>
                <ContentTitle
                  index="02"
                  title="Apa saja yang akan Anda terima"
                />
                <div className="divide-y divide-line rounded-2xl border border-line bg-cream">
                  {service.deliverables.map((deliverable) => (
                    <div
                      key={deliverable}
                      className="flex items-start gap-4 p-5"
                    >
                      <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-ember-ink" />
                      <span className="text-sm leading-relaxed text-ink/75">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
                  <Package className="h-3.5 w-3.5 text-ember-ink" />
                  Semua deliverable diserahkan beserta dokumentasi resmi.
                </p>
              </div>
            </Reveal>

            {/* Process */}
            <Reveal>
              <div>
                <ContentTitle index="03" title="Tahapan pelaksanaan proyek" />
                <div className="relative border-l border-line pl-8">
                  {service.processSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="group relative pb-10 last:pb-0"
                    >
                      <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-bone bg-ember transition-transform duration-300 group-hover:scale-125" />
                      <span className="font-mono text-[10px] text-ember-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-base font-semibold text-ink sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <div>
                <ContentTitle index="04" title="Pertanyaan yang sering diajukan" />
                <div className="divide-y divide-line border-y border-line">
                  {service.faq.map((item, index) => (
                    <details key={item.question} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-[10px] text-ember-ink">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-semibold text-ink sm:text-base">
                            {item.question}
                          </span>
                        </span>
                        <Plus className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                      </summary>
                      <p className="max-w-2xl pb-6 pl-8 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:col-span-4">
            <div className="lg:sticky lg:top-32 lg:space-y-5">
              <div className="rounded-2xl border border-line bg-cream p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Teknologi
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
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
                  Butuh penawaran resmi?
                </p>
                <p className="relative z-10 mt-3 text-xs leading-relaxed text-bone/50">
                  Kirimkan spesifikasi kebutuhan sistem Anda untuk mendapatkan
                  proposal teknis dan kalkulasi RAB resmi.
                </p>
                <div className="relative z-10 mt-6 flex flex-col gap-2.5">
                  <Button
                    href="/contact"
                    variant="light"
                    arrow
                    className="w-full"
                  >
                    Minta penawaran
                  </Button>
                  <a
                    href={waConsultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-bone/20 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:bg-bone hover:text-ink"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-cream p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Layanan terkait
                </p>
                <ul className="mt-4 divide-y divide-line">
                  {relatedServices.map((related) => (
                    <li key={related.id}>
                      <Link
                        href={`/services/${related.slug}`}
                        className="group flex items-center justify-between gap-3 py-3.5"
                      >
                        <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-ember-ink">
                          {related.title}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-ink" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. CTA */}
      <CtaBanner
        title={`Siap memulai proyek ${service.title}?`}
        description="Konsultasikan tantangan teknis Anda sekarang. Tim arsitek kami siap memberikan rekomendasi solusi paling efisien."
      />
    </div>
  );
}
