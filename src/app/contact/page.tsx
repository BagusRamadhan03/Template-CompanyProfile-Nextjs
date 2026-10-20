import type { Metadata } from "next";
import { companyData } from "@/lib/data/company";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami — Konsultasi Solusi Digital & Kemitraan",
  description:
    "Diskusikan kebutuhan proyek software enterprise, mobile apps, atau cloud infrastructure Anda dengan tim konsultan Nusantara Tekno Solusi di Jakarta.",
};

const commitments = [
  "Respon awal cepat dalam waktu 1x24 jam kerja.",
  "Perjanjian Kerahasiaan (NDA) sebelum pembagian data rahasia.",
  "RAB & roadmap estimasi transparan tanpa biaya tersembunyi.",
];

export default function ContactPage() {
  const waUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Halo ${companyData.name}, saya ingin berkonsultasi mengenai kebutuhan pengembangan sistem perusahaan kami.`
  )}`;

  const contactRows = [
    {
      icon: MapPin,
      label: "Alamat kantor",
      value: `${companyData.contact.address}, ${companyData.contact.city} ${companyData.contact.postalCode}`,
    },
    {
      icon: Mail,
      label: "Email bisnis",
      value: companyData.contact.email,
      href: `mailto:${companyData.contact.email}`,
    },
    {
      icon: Phone,
      label: "Telepon kantor",
      value: companyData.contact.phone,
      href: `tel:${companyData.contact.phone}`,
    },
    {
      icon: Clock,
      label: "Jam operasional",
      value: companyData.contact.workingHours,
    },
  ];

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-ember/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-muted">
                <span className="h-px w-8 bg-ember" />
                Kontak — 01
              </p>
              <h1 className="animate-rise mt-7 text-balance text-[2.6rem] font-semibold leading-[0.97] tracking-[-0.045em] sm:text-6xl">
                Mari{" "}
                <span className="font-serif font-normal italic text-ember-ink">
                  berbicara
                </span>{" "}
                tentang proyek Anda.
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="animate-rise text-pretty text-sm leading-relaxed text-muted sm:text-base">
                Apakah Anda ingin membangun sistem baru dari nol,
                memodernisasi arsitektur lama, atau membutuhkan audit
                keamanan? Kami siap berdiskusi.
              </p>
              <div className="animate-rise mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Respon &lt; 24 jam
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  NDA tersedia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFO & FORM */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-line bg-cream p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Kantor pusat — 02
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                  {companyData.legalName}
                </h2>
                <p className="mt-1.5 text-sm text-muted">
                  Kantor pusat operasional & engineering hub.
                </p>

                <div className="mt-7 divide-y divide-line">
                  {contactRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label} className="flex gap-4 py-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-bone text-ember-ink">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                            {row.label}
                          </p>
                          {row.href ? (
                            <a
                              href={row.href}
                              className="mt-1 block text-sm text-ink transition-colors hover:text-ember-ink"
                            >
                              {row.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm leading-relaxed text-ink">
                              {row.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-bone transition-all duration-300 hover:bg-ember hover:text-ink"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat langsung via WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grain grain-light relative overflow-hidden rounded-2xl bg-ink p-8 text-bone">
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-bone/10" />
                <p className="relative z-10 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/40">
                  Komitmen layanan
                </p>
                <ul className="relative z-10 mt-5 space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={commitment} className="flex gap-3.5">
                      <span className="pt-0.5 font-mono text-[10px] text-ember">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-bone/60">
                        {commitment}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. MAP */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-cream">
            <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Lokasi — 04
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                  Kunjungi kantor kami di Jakarta
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Menara Batavia, Karet Tengsin, Jakarta Pusat.
                </p>
              </div>
              <a
                href={companyData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bone sm:self-auto"
              >
                Buka di Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="relative h-80 w-full overflow-hidden bg-bone-deep sm:h-96">
              <div className="bg-dots absolute inset-0" aria-hidden="true" />
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Memuat peta interaktif
                </span>
              </div>
              <iframe
                src={companyData.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kantor Nusantara Tekno Solusi"
                className="relative z-10 h-full w-full grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
