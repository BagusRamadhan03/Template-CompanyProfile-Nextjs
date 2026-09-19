import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Siap Mentransformasi Bisnis Anda dengan Teknologi Andal?",
  description = "Diskusikan tantangan digital perusahaan Anda bersama tim arsitek teknologi kami. Kami memberikan sesi konsultasi awal gratis tanpa komitmen.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          Konsultasi & Penawaran Terbuka
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
          >
            <span>Hubungi Kami Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
              "Halo Nusantara Tekno Solusi, saya ingin mendiskusikan kebutuhan proyek IT kami."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat WhatsApp Cepat</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Respon Cepat &lt; 24 Jam Kerja</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Perjanjian Kerahasiaan (NDA) Tersedia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span>Tanpa Biaya Konsultasi Awal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
