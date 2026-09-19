import type { Metadata } from "next";
import { companyData } from "@/lib/data/company";
import { ContactForm } from "@/components/ContactForm";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami — Konsultasi Solusi Digital & Kemitraan",
  description:
    "Diskusikan kebutuhan proyek software enterprise, mobile apps, atau cloud infrastructure Anda dengan tim konsultan Nusantara Tekno Solusi di Jakarta.",
};

export default function ContactPage() {
  const waUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Halo ${companyData.name}, saya ingin berkonsultasi mengenai kebutuhan pengembangan sistem perusahaan kami.`
  )}`;

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 mb-4">
            Terbuka untuk Kolaborasi
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Mari Wujudkan Visi Teknologi Anda Bersama Tim Kami
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Apakah Anda ingin membangun sistem baru dari nol, memodernisasi arsitektur lama, atau membutuhkan audit keamanan? Kami siap berdiskusi.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" />

              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Informasi Kantor
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                PT Nusantara Tekno Solusi Indonesia
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Kantor Pusat Operasional & Engineering Hub
              </p>

              <div className="mt-8 space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Alamat Kantor</p>
                    <p className="text-slate-200 mt-0.5 leading-relaxed">
                      {companyData.contact.address}
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {companyData.contact.city}, {companyData.contact.province} {companyData.contact.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email Bisnis</p>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-slate-200 hover:text-white transition-colors mt-0.5 block font-medium"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Telepon Kantor</p>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-slate-200 hover:text-white transition-colors mt-0.5 block font-medium"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Jam Operasional</p>
                    <p className="text-slate-200 mt-0.5">
                      {companyData.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Fast Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Langsung via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Commitments Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-base">
                Komitmen Pelayanan Kami
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Respon awal cepat dalam waktu 1x24 jam kerja.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Perjanjian Kerahasiaan (Non-Disclosure Agreement) sebelum pembagian data rahasia.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>RAB & Roadmap estimasi transparan tanpa biaya tersembunyi.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Lokasi Kantor Kami di Jakarta
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Kunjungi kami untuk diskusi tatap muka di Menara Batavia, Jakarta Pusat.
              </p>
            </div>
            <a
              href={companyData.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-3.5 py-2 rounded-xl transition-colors"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Responsive Map Container */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              src={companyData.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Kantor Nusantara Tekno Solusi"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
