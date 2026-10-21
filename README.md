# 🏢 Nusantara Tekno — Template Company Profile & Agensi Digital (Next.js 16)

Template website profil perusahaan (*Company Profile*), agensi kreatif, studio desain, atau konsultan teknologi modern berbasis **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS**. Didesain dengan estetika editorial berkelas, tipografi kurasi, interaksi mikro halus, dan halaman dinamis lengkap.

---

## ✨ Fitur & Halaman

### 📄 Struktur Halaman Lengkap
- **Beranda (`/`)**: Hero section dengan efek visual interaktif, ticker statistik bergerak (*marquee*), ringkasan layanan unggulan, galeri proyek pilihan (*featured portfolio*), dan banner ajakan bertindak (CTA).
- **Tentang Kami (`/about`)**: Kisah perjalanan perusahaan, nilai-nilai utama, lini masa pencapaian, struktur kepemimpinan, dan budaya kerja.
- **Layanan (`/services` & `/services/[slug]`)**: Indeks seluruh portofolio layanan dan halaman detail per-layanan dengan rincian metodologi, deliverables, serta FAQ layanan.
- **Portofolio / Studi Kasus (`/portfolio` & `/portfolio/[slug]`)**: Galeri proyek terfilter kategori, metrik dampak proyek (*results & ROI*), galeri visual, dan testimoni klien.
- **Hubungi Kami (`/contact`)**: Formulir penawaran proyek komprehensif dengan validasi Zod (nama, email, telepon, perusahaan, kategori layanan, estimasi anggaran, pesan) terhubung ke API handler (`/api/contact`).
- **Floating WhatsApp CTA**: Tombol hubungi langsung via WhatsApp dengan pesan otomatis terformat.

### 🎨 Komponen UI & Interaktivitas
- **Micro-Interactions**: Jam lokal real-time WIB (`LocalClock`), stempel berputar interaktif (`RotatingStamp`), indikator progress scroll halaman (`ScrollProgress`), dan kursor kustom opsional.
- **Typography & Theming**: Tipografi premium font serif & sans via Google Fonts teroptimasi otomatis via `next/font`.
- **SEO & Social Share Ready**: Konfigurasi `metadataBase` dinamis via env, Open Graph & Twitter Cards per-halaman, serta otomatisasi `sitemap.ts` dan `robots.ts`.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.8 (App Router, Server & Client Components)
- **UI Library**: React 19, Tailwind CSS, Lucide React Icons
- **Language**: TypeScript 5
- **Validation**: Zod 3.x
- **Deployment Target**: Vercel / Docker / Node.js Standalone

---

## 📁 Struktur Folder Utama

```
├── public/                     # Aset statis (gambar, logo, favicon)
├── src/
│   ├── app/
│   │   ├── about/              # Halaman Tentang Kami
│   │   ├── api/contact/        # Handler API pengiriman form kontak
│   │   ├── contact/            # Halaman Kontak & Form Penawaran
│   │   ├── portfolio/          # Indeks & halaman dinamis [slug] studi kasus
│   │   ├── services/           # Indeks & halaman dinamis [slug] layanan
│   │   ├── globals.css         # Styling Tailwind & token desain custom
│   │   ├── layout.tsx          # Master layout dengan font loader & navbar
│   │   ├── page.tsx            # Halaman Beranda utama
│   │   ├── robots.ts           # Konfigurasi SEO robots
│   │   └── sitemap.ts          # Auto-generator sitemap XML
│   ├── components/
│   │   ├── ContactForm.tsx     # Komponen formulir kontak terintegrasi
│   │   ├── Footer.tsx          # Navigasi bawah & informasi perusahaan
│   │   ├── Navbar.tsx          # Header sticky dengan navigasi responsif
│   │   ├── PortfolioCard.tsx   # Kartu studi kasus interaktif
│   │   ├── ServiceCard.tsx     # Kartu presentasi layanan
│   │   └── WhatsAppButton.tsx  # Floating action button kontak cepat
│   └── data/                   # Data statis perusahaan, portofolio, dan layanan
├── next.config.ts              # Konfigurasi Next.js & HTTP Security Headers
└── scaff.template.json         # Manifest integrasi Scaffdev
```

---

## 🚀 Panduan Instalasi Cepat

### Prasyarat
- Node.js >= 20.9.0
- npm / pnpm / yarn

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/scaffdev/Template-CompanyProfile-Nextjs.git
cd Template-CompanyProfile-Nextjs

# 2. Install dependensi
npm ci

# 3. Setup Environment Variables
cp .env.example .env.local

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

Untuk build versi produksi:
```bash
npm run build
npm run start
```

---

## ⚙️ Variabel Environment (`.env.local`)

| Variabel | Deskripsi | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domain utama website (digunakan untuk canonical URL & sitemap) | `https://example.com` |

---

## 🔌 Mengintegrasikan Email Provider pada Form Kontak

File `src/app/api/contact/route.ts` telah dilengkapi validasi data Zod yang ketat (termasuk batas panjang teks). Untuk menghubungkannya ke pengiriman email riil di lingkungan produksi:

1. Install SDK email pilihan (misalnya [Resend](https://resend.com)):
   ```bash
   npm i resend
   ```
2. Tambahkan `RESEND_API_KEY` ke `.env.local`.
3. Buka `src/app/api/contact/route.ts` dan panggil `resend.emails.send(...)` pada blok penampung yang telah disediakan.

---

## 🛡️ Keamanan & Optimasi

- **Security Headers**: `next.config.ts` telah dikonfigurasi dengan header keamanan standar industri:
  - `Content-Security-Policy` (CSP)
  - `Strict-Transport-Security` (HSTS)
  - `X-Frame-Options: SAMEORIGIN` (Proteksi clickjacking)
  - `X-Content-Type-Options: nosniff` (Proteksi MIME-sniffing)
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Strict Input Validation**: Endpoint kontak membatasi panjang nama, nomor telepon, dan pesan (maksimal 5.000 karakter) guna mencegah serangan *resource exhaustion* dan banjir memori.

---

## 🧪 Verifikasi & Pengujian

Untuk panduan instruksi otomatis bagi AI agent testing, lihat file [`VERIFY.md`](./VERIFY.md).

```bash
# Build aplikasi Next.js
npm run build

# Validasi linter TypeScript & ESLint
npm run lint

# Audit kerentanan dependensi
npm audit --omit=dev
```

---

## 📄 Lisensi

Didistribusikan di bawah lisensi MIT. Lihat [`LICENSE`](./LICENSE) untuk rincian lengkap. Hak Cipta © 2026 Scaffdev.
