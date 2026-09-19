"use client";

import { useState } from "react";
import { servicesData } from "@/lib/data/services";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
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
        setErrorMessage("Terjadi kendala jaringan. Silakan hubungi kami via WhatsApp.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/50">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Kirimkan Rencana Proyek Anda
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Tim konsultan teknis kami akan merespons dalam waktu 1x24 jam kerja dengan estimasi awal.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-emerald-800">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Pesan Anda Berhasil Terkirim!</p>
            <p className="mt-0.5 text-emerald-700">
              Terima kasih telah menghubungi Nusantara Tekno Solusi. Tim kami akan segera meninjau kebutuhan proyek Anda.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-3 text-rose-800">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Gagal Mengirim Pesan</p>
            <p className="mt-0.5 text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Nama Lengkap <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Contoh: Budi Pratama"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Alamat Email Bisnis <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="budi@perusahaan.co.id"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone / WhatsApp */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Nomor Telepon / WhatsApp <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="081234567890"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Nama Perusahaan / Organisasi
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="PT Contoh Maju Bersama"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Service Category */}
          <div>
            <label
              htmlFor="serviceCategory"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Layanan yang Dibutuhkan
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all bg-white"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.title}
                </option>
              ))}
              <option value="custom">Konsultasi Khusus Lainnya</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label
              htmlFor="budgetRange"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Estimasi Anggaran
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all bg-white"
            >
              <option value="< 50 Juta">&lt; Rp 50 Juta</option>
              <option value="50 - 150 Juta">Rp 50 Juta – Rp 150 Juta</option>
              <option value="150 - 500 Juta">Rp 150 Juta – Rp 500 Juta</option>
              <option value="> 500 Juta">&gt; Rp 500 Juta</option>
              <option value="Belum Ditentukan">Belum Ditentukan / Fleksibel</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Deskripsi Kebutuhan & Target Proyek <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Jelaskan secara ringkas tantangan bisnis, sistem yang ingin dibangun, atau tenggat waktu target..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-xl text-white font-semibold bg-blue-600 hover:bg-blue-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Mengirimkan Pesan...</span>
              </>
            ) : (
              <>
                <span>Kirim Formulir Konsultasi</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-2">
            Kami menjaga kerahasiaan informasi proyek dan mematuhi NDA.
          </p>
        </div>
      </form>
    </div>
  );
}
