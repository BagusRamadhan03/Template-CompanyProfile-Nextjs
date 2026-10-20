import type { Metadata } from "next";
import { servicesData } from "@/lib/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  Code2,
  Layers,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Rekayasa Perangkat Lunak & Solusi Cloud",
  description:
    "Katalog lengkap layanan rekayasa software enterprise, aplikasi mobile iOS & Android, arsitektur cloud, data warehouse, dan audit keamanan sistem.",
};

const processSteps = [
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
];

const differentiators = [
  {
    title: "100% hak milik kode",
    desc: "Repositori dan hak cipta diserahkan penuh kepada klien setelah proyek selesai.",
  },
  {
    title: "Skalabilitas teruji",
    desc: "Arsitektur dirancang siap menangani lonjakan jutaan request tanpa degradasi performa.",
  },
  {
    title: "Dokumentasi terstruktur",
    desc: "OpenAPI/Swagger spec, arsitektur wiki, dan SOP operasional yang rapi.",
  },
  {
    title: "Garansi pasca-peluncuran",
    desc: "Perbaikan bug tanpa biaya tambahan selama masa garansi berlangsung.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-muted">
                <span className="h-px w-8 bg-ember" />
                Layanan — 01
              </p>
              <h1 className="animate-rise mt-7 text-balance text-[2.6rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-6xl">
                Layanan rekayasa digital{" "}
                <span className="font-serif font-normal italic text-ember-ink">
                  komprehensif
                </span>{" "}
                berstandar enterprise.
              </h1>
              <p className="animate-rise mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Kami menghadirkan spektrum keahlian teknologi menyeluruh, dari
                konseptualisasi sistem hingga deployment berskala jutaan
                pengguna.
              </p>
              <div className="animate-rise mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" arrow>
                  Konsultasi kebutuhan Anda
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  Lihat hasil kerja
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-y border-line">
                {servicesData.map((service, index) => (
                  <a
                    key={service.id}
                    href={`#${service.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-line py-4 last:border-b-0"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-ember-ink">
                        {service.title}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-ink" />
                  </a>
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Klik untuk lompat ke detail layanan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <Reveal key={service.id} delay={(index % 3) * 80}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="grain grain-light relative overflow-hidden bg-ink py-20 text-bone sm:py-28">
        <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              dark
              index="02"
              badge="Metodologi agile"
              title={
                <>
                  Siklus pengembangan yang{" "}
                  <span className="font-serif font-normal italic text-ember">
                    terukur
                  </span>
                  .
                </>
              }
              subtitle="Menjamin kepastian tenggat waktu, transparansi anggaran, dan kualitas kode yang teruji di setiap iterasi."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal
                  key={step.title}
                  delay={index * 70}
                  className="h-full bg-ink"
                >
                  <div className="group h-full p-7 transition-colors duration-300 hover:bg-bone/[0.04]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-bone/15 text-ember">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/35">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-7 text-lg font-semibold transition-colors duration-300 group-hover:text-ember">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-bone/45">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DIFFERENTIATORS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  centered={false}
                  index="03"
                  badge="Standar kami"
                  title={
                    <>
                      Kualitas tanpa{" "}
                      <span className="font-serif font-normal italic text-ember-ink">
                        kompromi
                      </span>
                      .
                    </>
                  }
                  subtitle="Empat jaminan yang membedakan layanan kami dari vendor biasa."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {differentiators.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 60}
                    className="h-full bg-cream"
                  >
                    <div className="group h-full p-7 transition-colors duration-300 hover:bg-bone">
                      <span className="font-mono text-[10px] text-ember-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CtaBanner
        title="Butuh solusi khusus sesuai kebutuhan spesifik perusahaan Anda?"
        description="Jadwalkan sesi konsultasi teknologi gratis bersama tim arsitek solusi kami hari ini."
      />
    </div>
  );
}
