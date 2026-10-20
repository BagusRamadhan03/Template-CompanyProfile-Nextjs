import { MessageCircle } from "lucide-react";
import { companyData } from "@/lib/data/company";
import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Siap mentransformasi bisnis Anda dengan teknologi yang andal?",
  description = "Diskusikan tantangan digital perusahaan Anda bersama tim arsitek teknologi kami. Sesi konsultasi awal gratis, tanpa komitmen.",
}: CtaBannerProps) {
  const waUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    "Halo Nusantara Tekno Solusi, saya ingin mendiskusikan kebutuhan proyek IT kami."
  )}`;

  return (
    <section className="relative overflow-hidden bg-ember text-ink">
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-ink/10" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-ink/10" />
      <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-ink/5 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="eyebrow text-ink/60">
              <span className="h-px w-8 bg-ink/40" />
              Kolaborasi
            </p>
            <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl italic leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-ink/70 sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              arrow
              className="w-full hover:bg-bone hover:text-ink sm:w-auto"
            >
              Hubungi kami sekarang
            </Button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 hover:bg-ink hover:text-bone sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink/60">
              <span>● Respon &lt; 24 jam</span>
              <span>● NDA tersedia</span>
              <span>● Konsultasi gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
