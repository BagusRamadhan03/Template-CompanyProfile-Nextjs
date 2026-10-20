import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { servicesData } from "@/lib/data/services";
import { portfolioData } from "@/lib/data/portfolio";
import { testimonialsData } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CtaBanner } from "@/components/CtaBanner";
import { StatsStrip } from "@/components/StatsStrip";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  Award,
  Gauge,
  Quote,
  ShieldCheck,
  Star,
  Users2,
  Zap,
} from "lucide-react";

const clients = [
  "Bank Artha Nusantara",
  "Nusantara Express Cargo",
  "Medika Sehat Bersama",
  "Gaya Retail Group",
  "Eduka Cendekia",
  "Dinas Komunikasi & Informatika",
];

const principles = [
  {
    title: "Kualitas & keamanan standar enterprise",
    description:
      "Mematuhi OWASP, enkripsi data end-to-end, dan pengujian berkala di setiap rilis.",
    icon: ShieldCheck,
  },
  {
    title: "Kecepatan eksekusi dengan metodologi agile",
    description:
      "Sprint dua mingguan dengan laporan kemajuan transparan dan demo langsung.",
    icon: Zap,
  },
  {
    title: "Dukungan pasca-rilis & SLA terjamin",
    description:
      "Garansi perbaikan bug dan pemantauan sistem 24/7 demi kelancaran operasional.",
    icon: Users2,
  },
];

const workSteps = [
  {
    title: "Discovery & Blueprint",
    desc: "Riset mendalam kebutuhan proses bisnis, audit arsitektur eksisting, dan perancangan roadmap teknis terperinci.",
  },
  {
    title: "UI/UX & Prototyping",
    desc: "Pembuatan antarmuka intuitif dan prototipe interaktif untuk memvalidasi alur sebelum tahap coding dimulai.",
  },
  {
    title: "Agile Development",
    desc: "Penulisan kode berkualitas dengan standardisasi clean code, pengujian otomatis, dan demo berkala.",
  },
  {
    title: "Deployment & Support",
    desc: "Migrasi zero-downtime, pemantauan performa real-time, serta pelatihan tim internal perusahaan Anda.",
  },
];

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = portfolioData
    .filter((project) => project.featured)
    .slice(0, 3);
  const [featuredTestimonial, ...otherTestimonials] = testimonialsData;

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-ember/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <span className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-cream/80 py-1.5 pl-2 pr-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted backdrop-blur">
                <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-ember/15">
                  <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-ember opacity-70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                </span>
                Menerima proyek baru — 2026
              </span>

              <h1
                className="animate-rise mt-7 text-balance text-[2.6rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-6xl lg:text-[4.3rem]"
                style={{ animationDelay: "80ms" }}
              >
                Membangun solusi teknologi{" "}
                <span className="font-serif font-normal italic text-ember-ink">
                  berkelas dunia
                </span>{" "}
                untuk bisnis Anda.
              </h1>

              <p
                className="animate-rise mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {companyData.shortBio}
              </p>

              <div
                className="animate-rise mt-9 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "240ms" }}
              >
                <Button href="/contact" size="lg" arrow>
                  Mulai konsultasi proyek
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  Jelajahi portofolio
                </Button>
              </div>

              <div
                className="animate-rise mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6 text-xs text-muted"
                style={{ animationDelay: "320ms" }}
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-ember-ink" />
                  Standar keamanan enterprise
                </span>
                <span className="inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-ember-ink" />
                  Pengiriman tepat waktu 98.5%
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-ember-ink" />
                  Tim bersertifikasi internasional
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="animate-rise relative mx-auto max-w-md lg:max-w-none"
                style={{ animationDelay: "220ms" }}
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-line bg-cream p-2.5 shadow-[0_45px_90px_-55px_rgba(18,18,16,0.55)]">
                  <div className="grain grain-light relative overflow-hidden rounded-[1.6rem] bg-ink bg-blueprint-dark p-6 text-bone sm:p-8">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-bone/40">
                        <span>NTS / Engineering</span>
                        <span>Est. 2018</span>
                      </div>

                      <div className="mt-12">
                        <p className="font-serif text-6xl italic leading-none text-ember sm:text-7xl">
                          99.2%
                        </p>
                        <p className="mt-2 text-sm text-bone/60">
                          Tingkat kepuasan klien
                        </p>
                      </div>

                      <div className="mt-10 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-bone/10 bg-bone/[0.04] p-4">
                          <p className="font-serif text-2xl italic leading-none">
                            120+
                          </p>
                          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-bone/40">
                            Proyek selesai
                          </p>
                        </div>
                        <div className="rounded-xl border border-bone/10 bg-bone/[0.04] p-4">
                          <p className="font-serif text-2xl italic leading-none">
                            45+
                          </p>
                          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-bone/40">
                            Klien aktif
                          </p>
                        </div>
                        <div className="col-span-2 rounded-xl border border-bone/10 bg-bone/[0.04] p-4">
                          <div className="flex items-center justify-between text-[11px] text-bone/50">
                            <span>Uptime infrastruktur</span>
                            <span className="font-mono text-bone">99.99%</span>
                          </div>
                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bone/10">
                            <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-ember to-amber-300" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-bone/10 pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/35">
                        <span>Jakarta, Indonesia</span>
                        <span>6°12′S · 106°49′E</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="animate-float absolute -left-5 bottom-10 hidden items-center gap-3 rounded-2xl border border-line bg-cream px-4 py-3 shadow-[0_25px_50px_-30px_rgba(18,18,16,0.5)] sm:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ember text-ink">
                    <Award className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink">
                      Top Software House
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted">
                      Jakarta · 2024
                    </p>
                  </div>
                </div>

                <div className="absolute -right-3 top-8 hidden rotate-3 rounded-full border border-line bg-bone px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted shadow-sm sm:block">
                  ISO-aligned process
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="border-y border-line bg-cream/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsStrip stats={companyData.stats} />
        </div>
      </section>

      {/* 3. CLIENT MARQUEE */}
      <section className="border-b border-line py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-8">
          <p className="shrink-0 font-mono text-[10px] uppercase leading-relaxed tracking-[0.24em] text-muted lg:max-w-[11rem]">
            Dipercaya oleh perusahaan & institusi
          </p>
          <Marquee items={clients} className="flex-1" />
        </div>
      </section>

      {/* 4. ABOUT TEASER */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-cream bg-blueprint">
              <div className="flex min-h-[26rem] flex-col justify-between p-8 sm:p-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  <span>Blueprint / 002</span>
                  <span>Since {companyData.establishedYear}</span>
                </div>

                <div className="relative flex h-48 items-center justify-center">
                  <div className="absolute h-40 w-40 rounded-full border border-ink/10" />
                  <div className="absolute h-28 w-28 rounded-full border border-ink/15" />
                  <div className="absolute h-24 w-24 rounded-full bg-ember/15 blur-xl" />
                  <span className="relative font-serif text-6xl italic leading-none text-ink">
                    n
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-line pt-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                      Fokus
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-ink">
                      Enterprise software
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                      Basis
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-ink">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                centered={false}
                index="01"
                badge="Tentang kami"
                title={
                  <>
                    Bukan sekadar vendor.{" "}
                    <span className="font-serif font-normal italic text-ember-ink">
                      Mitra
                    </span>{" "}
                    pertumbuhan Anda.
                  </>
                }
                subtitle={companyData.fullBio}
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 divide-y divide-line border-y border-line">
                {principles.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="group flex gap-5 py-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-cream text-ink transition-colors duration-300 group-hover:border-ember group-hover:bg-ember">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-ink">
                          <span className="mr-2 font-mono text-[10px] text-ember-ink">
                            0{index + 1}
                          </span>
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-ink" />
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <Button
                href="/about"
                variant="ghost"
                arrow
                className="mt-8 text-sm"
              >
                Kenali kami lebih dekat
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="border-y border-line bg-bone-deep/35 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                centered={false}
                index="02"
                badge="Layanan"
                title={
                  <>
                    Kapabilitas yang{" "}
                    <span className="font-serif font-normal italic text-ember-ink">
                      lengkap
                    </span>
                    , eksekusi presisi.
                  </>
                }
                subtitle="Dari arsitektur aplikasi web modern hingga integrasi data cerdas, kami menghadirkan kapabilitas teknologi terpadu."
              />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/services" variant="outline" arrow>
                Lihat semua layanan
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-line">
            {featuredServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 70}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group -mx-4 flex items-center gap-5 border-b border-line px-4 py-6 transition-colors duration-300 hover:bg-ink sm:-mx-6 sm:gap-8 sm:px-6 sm:py-8"
                >
                  <span className="font-mono text-[10px] text-muted transition-colors duration-300 group-hover:text-ember">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted transition-colors duration-300 group-hover:text-bone/40">
                      {service.category}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-bone sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-bone/50">
                      {service.shortDesc}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED WORK */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              index="03"
              badge="Karya terpilih"
              title={
                <>
                  Hasil nyata yang{" "}
                  <span className="font-serif font-normal italic text-ember-ink">
                    menggerakkan
                  </span>{" "}
                  bisnis klien.
                </>
              }
              subtitle="Pelajari bagaimana kami memecahkan masalah arsitektur kompleks dan meluncurkan produk digital bernilai tinggi."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  featured={index === 0}
                />
              ))}
            </div>
          </Reveal>

          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="outline" arrow>
              Lihat semua proyek & studi kasus
            </Button>
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="grain grain-light relative overflow-hidden bg-ink py-20 text-bone sm:py-28">
        <div className="absolute inset-0 bg-blueprint-dark opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionHeading
                  dark
                  centered={false}
                  index="04"
                  badge="Cara kami bekerja"
                  title={
                    <>
                      Proses transparan,{" "}
                      <span className="font-serif font-normal italic text-ember">
                        hasil nyata
                      </span>
                      .
                    </>
                  }
                  subtitle="Pendekatan terstruktur demi memastikan hasil akhir sesuai ekspektasi, tepat waktu."
                />
                <p className="mt-8 border-l-2 border-ember pl-5 font-serif text-xl italic leading-relaxed text-bone/45">
                  “Riset dulu, baru bangun. Tidak ada kejutan di tengah jalan.”
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-bone/10 border-y border-bone/10">
              {workSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                  <div className="group flex gap-5 py-7 sm:gap-7">
                    <span className="pt-1.5 font-mono text-[10px] text-ember">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-ember sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone/45">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              index="05"
              badge="Testimoni"
              title={
                <>
                  Dipercaya oleh{" "}
                  <span className="font-serif font-normal italic text-ember-ink">
                    para pemimpin
                  </span>{" "}
                  industri.
                </>
              }
              subtitle="Apa kata klien tentang pengalaman bekerja sama dengan tim kami."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {featuredTestimonial && (
              <Reveal className="lg:col-span-7">
                <figure className="grain grain-light relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 text-bone sm:p-10">
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-bone/10" />
                  <Quote className="relative z-10 h-8 w-8 text-ember" />
                  <blockquote className="relative z-10 mt-8 font-serif text-2xl italic leading-snug sm:text-3xl">
                    “{featuredTestimonial.quote}”
                  </blockquote>
                  <figcaption className="relative z-10 mt-8 flex items-center gap-4 border-t border-bone/10 pt-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember font-mono text-xs font-bold text-ink">
                      {featuredTestimonial.avatarInitials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        {featuredTestimonial.author}
                      </p>
                      <p className="mt-0.5 text-xs text-bone/45">
                        {featuredTestimonial.role} —{" "}
                        {featuredTestimonial.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            )}

            <div className="space-y-5 lg:col-span-5">
              {otherTestimonials.slice(0, 2).map((testimonial, index) => (
                <Reveal key={testimonial.id} delay={index * 90}>
                  <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-cream p-6 sm:p-7">
                    <div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-3.5 w-3.5 fill-ember text-ember"
                            />
                          )
                        )}
                      </div>
                      <blockquote className="mt-4 text-sm leading-relaxed text-ink/75">
                        “{testimonial.quote}”
                      </blockquote>
                    </div>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-mono text-[10px] font-bold text-ink">
                        {testimonial.avatarInitials}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-ink">
                          {testimonial.author}
                        </p>
                        <p className="mt-0.5 text-[10px] text-muted">
                          {testimonial.role} — {testimonial.company}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CtaBanner
        title="Siap mentransformasi bisnis Anda dengan teknologi andal?"
        description="Diskusikan tantangan digital perusahaan Anda bersama tim arsitek teknologi kami. Konsultasi awal gratis, tanpa komitmen."
      />
    </div>
  );
}
