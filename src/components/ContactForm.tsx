"use client";

import { useState } from "react";
import { servicesData } from "@/lib/data/services";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceCategory: string;
  budgetRange: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceCategory: "enterprise-web-development",
  budgetRange: "< 50 Juta",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-line bg-bone/30 px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-muted/60 focus:border-ember focus:bg-cream focus:ring-2 focus:ring-ember/20 focus-visible:outline-none";

const labelClasses =
  "mb-2 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted";

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    // Basic client validation
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Mohon lengkapi Nama, Email, dan Pesan Anda.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirim pesan. Silakan coba lagi.");
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage(
          "Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-line bg-cream p-6 sm:p-10">
      <div className="mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
          Formulir — 03
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
          Kirimkan rencana proyek Anda
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Tim konsultan teknis kami akan merespons dalam waktu 1x24 jam kerja
          dengan estimasi awal.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-7 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          <div className="text-sm">
            <p className="font-semibold">Pesan Anda berhasil terkirim!</p>
            <p className="mt-0.5 text-emerald-700">
              Terima kasih telah menghubungi Nusantara Tekno Solusi. Tim kami
              akan segera meninjau kebutuhan proyek Anda.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-7 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
          <div className="text-sm">
            <p className="font-semibold">Gagal mengirim pesan</p>
            <p className="mt-0.5 text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Nama lengkap <span className="text-ember-ink">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Contoh: Budi Pratama"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email bisnis <span className="text-ember-ink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="budi@perusahaan.co.id"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Telepon / WhatsApp <span className="text-ember-ink">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="081234567890"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="companyName" className={labelClasses}>
              Nama perusahaan / organisasi
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="PT Contoh Maju Bersama"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="serviceCategory" className={labelClasses}>
              Layanan yang dibutuhkan
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleChange}
              className={inputClasses}
            >
              {servicesData.map((service) => (
                <option key={service.id} value={service.slug}>
                  {service.title}
                </option>
              ))}
              <option value="custom">Konsultasi khusus lainnya</option>
            </select>
          </div>

          <div>
            <label htmlFor="budgetRange" className={labelClasses}>
              Estimasi anggaran
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="< 50 Juta">&lt; Rp 50 Juta</option>
              <option value="50 - 150 Juta">
                Rp 50 Juta – Rp 150 Juta
              </option>
              <option value="150 - 500 Juta">
                Rp 150 Juta – Rp 500 Juta
              </option>
              <option value="> 500 Juta">&gt; Rp 500 Juta</option>
              <option value="Belum Ditentukan">
                Belum ditentukan / fleksibel
              </option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Deskripsi kebutuhan & target proyek{" "}
            <span className="text-ember-ink">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Jelaskan secara ringkas tantangan bisnis, sistem yang ingin dibangun, atau tenggat waktu target..."
            className={inputClasses}
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-bone transition-all duration-300 hover:bg-ember hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Mengirimkan pesan...</span>
              </>
            ) : (
              <>
                <span>Kirim formulir konsultasi</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
          <p className="mt-3 text-center text-[11px] text-muted">
            Kami menjaga kerahasiaan informasi proyek dan mematuhi NDA.
          </p>
        </div>
      </form>
    </div>
  );
}
