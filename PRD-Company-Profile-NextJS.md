# PRD: Website Company Profile Sederhana dengan Next.js

## 1. Ringkasan
Dokumen ini mendefinisikan kebutuhan untuk membangun website company profile menggunakan Next.js (App Router) dengan pendekatan best practice modern. Website ini berfungsi sebagai representasi digital resmi perusahaan, mencakup informasi perusahaan, layanan/produk, portofolio, tim, dan kontak.

## 2. Latar Belakang & Tujuan
- **Masalah**: Perusahaan belum memiliki kehadiran digital resmi yang informatif dan kredibel untuk diakses calon klien, mitra, atau kandidat karyawan.
- **Tujuan Bisnis**:
  - Membangun kredibilitas dan citra profesional perusahaan.
  - Memberikan informasi lengkap tentang perusahaan, layanan, dan portofolio.
  - Memudahkan calon klien/mitra untuk menghubungi perusahaan.
- **Tujuan Teknis**:
  - Website cepat, SEO-friendly, dan mudah dikembangkan/dikelola ke depannya.
  - Struktur kode rapi dan scalable untuk penambahan halaman/konten di masa depan.

## 3. Target Pengguna
- Calon klien/customer yang mencari informasi perusahaan.
- Calon mitra bisnis/investor.
- Calon kandidat karyawan (jika ada halaman karir).
- Media/pers yang mencari informasi resmi perusahaan.

## 4. Scope

### 4.1 In Scope — Struktur Halaman

| Halaman | Route | Deskripsi |
|---|---|---|
| Home | `/` | Ringkasan perusahaan, highlight layanan, CTA ke halaman lain |
| Tentang Kami | `/about` | Sejarah, visi-misi, nilai perusahaan, struktur/tim |
| Layanan/Produk | `/services` | Daftar layanan/produk dengan deskripsi |
| Detail Layanan (opsional) | `/services/[slug]` | Detail per layanan jika perlu halaman terpisah |
| Portofolio/Proyek | `/portfolio` | Studi kasus atau proyek yang pernah dikerjakan |
| Tim (opsional) | `/team` | Profil singkat anggota tim/manajemen |
| Karir (opsional) | `/careers` | Lowongan pekerjaan jika dibutuhkan |
| Blog/News (opsional) | `/blog` | Artikel atau berita perusahaan |
| Kontak | `/contact` | Form kontak, alamat, peta lokasi, kontak sosial media |
| 404 | — | Halaman not-found custom |

> Catatan: Halaman opsional (Tim, Karir, Blog) dapat disesuaikan tergantung kebutuhan; untuk versi "sederhana", minimal wajib: Home, Tentang Kami, Layanan, Portofolio, Kontak.

### 4.2 Komponen Umum
- **Navbar** — logo, menu navigasi multi-halaman, CTA (misal "Hubungi Kami"), responsive hamburger menu di mobile.
- **Footer** — info perusahaan, link cepat, sosial media, copyright.
- **Breadcrumb** (opsional) — untuk halaman detail (services/blog).
- **Form Kontak** — nama, email, pesan, dengan validasi.
- **Peta Lokasi** — embed Google Maps.

### 4.3 Out of Scope
- Sistem autentikasi/login user.
- Dashboard admin custom dari nol (jika butuh update konten mudah, gunakan CMS headless — lihat bagian 5).
- E-commerce/transaksi online.
- Multi-language (kecuali diminta di kemudian hari).

## 5. Tech Stack (Best Practice)

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG/ISR, performa, SEO friendly, routing multi-halaman native |
| Bahasa | TypeScript | Type-safety, mengurangi bug |
| Styling | Tailwind CSS | Cepat, konsisten, mudah maintain |
| Komponen UI | shadcn/ui (opsional) | Komponen accessible & reusable |
| Font | next/font | Optimasi loading font otomatis |
| Gambar | next/image | Optimasi gambar otomatis (lazy load, resize) |
| Konten | Local data (JSON/MDX) atau Headless CMS (Sanity/Contentful) | Local data cukup untuk skala sederhana; CMS jika tim non-teknis perlu update konten sendiri |
| Form Handling | React Hook Form + Zod | Validasi form yang robust |
| Email Service | Resend / Nodemailer via API Route | Mengirim notifikasi form kontak |
| Deployment | Vercel | Native support Next.js, edge network |
| Analytics | Vercel Analytics / GA4 | Tracking perilaku pengunjung |
| Linting/Formatting | ESLint + Prettier | Konsistensi kode |

## 6. Functional Requirements

| ID | Requirement | Prioritas |
|---|---|---|
| FR-1 | Website memiliki navigasi multi-halaman yang konsisten (navbar & footer di semua halaman) | Must |
| FR-2 | Setiap halaman dapat diakses langsung via URL (routing App Router) | Must |
| FR-3 | Form kontak melakukan validasi input & mengirim data (email/API) | Must |
| FR-4 | Halaman Layanan/Portofolio dapat menampilkan daftar item dari data terstruktur (JSON/CMS) | Should |
| FR-5 | Detail konten (misal detail layanan/proyek) dapat diakses via dynamic route (`[slug]`) | Should |
| FR-6 | Tersedia halaman 404 custom | Could |
| FR-7 | Blog/News (jika ada) mendukung rendering konten dari MDX/CMS | Could |

## 7. Non-Functional Requirements

### 7.1 Performance
- Skor Lighthouse minimal **90+** untuk Performance, Accessibility, Best Practices, dan SEO di setiap halaman utama.
- Gunakan Static Generation (SSG) untuk halaman yang jarang berubah; ISR (Incremental Static Regeneration) untuk konten seperti blog/portofolio yang update berkala.
- Optimasi gambar wajib via `next/image`.

### 7.2 SEO
- Meta title & description unik per halaman via `generateMetadata`.
- Open Graph & Twitter Card tags untuk preview media sosial.
- `sitemap.xml` dan `robots.txt` otomatis (fitur bawaan Next.js).
- Structured data (JSON-LD) untuk `Organization` schema agar muncul rich result di Google.
- Struktur heading semantik dan URL yang deskriptif (misal `/services/web-development`).

### 7.3 Accessibility (a11y)
- Kontras warna sesuai WCAG AA.
- Semua gambar punya `alt` text deskriptif.
- Navigasi & form dapat diakses via keyboard.
- HTML semantik (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).

### 7.4 Responsiveness
- Breakpoint minimal: mobile (< 640px), tablet (640–1024px), desktop (> 1024px).
- Desain mobile-first menggunakan utility Tailwind (`sm:`, `md:`, `lg:`).
- Navbar mobile menggunakan hamburger menu.

### 7.5 Maintainability
- Struktur folder mengikuti konvensi Next.js App Router:
  ```
  /app
    /page.tsx                  (Home)
    /layout.tsx
    /about/page.tsx
    /services/page.tsx
    /services/[slug]/page.tsx
    /portfolio/page.tsx
    /contact/page.tsx
    /not-found.tsx
    /api/contact/route.ts      (handle form submission)
  /components
    /Navbar.tsx
    /Footer.tsx
    /Hero.tsx
    /ServiceCard.tsx
    /ContactForm.tsx
  /lib
    /data (services.ts, portfolio.ts, dll)
  /public
  ```
- Komponen kecil, reusable, single responsibility.
- Data konten dipisah dari komponen (data-driven) agar mudah diupdate tanpa mengubah logic.

### 7.6 Security
- Validasi input form di client & server (API Route).
- Rate limiting sederhana pada endpoint form kontak untuk mencegah spam.
- Environment variable (`.env.local`) untuk API key/credentials, tidak hardcode.

## 8. Design Guidelines
- Identitas visual konsisten dengan brand perusahaan (logo, warna primary/secondary, tone komunikasi).
- Tipografi jelas: maksimal 2 jenis font (heading & body).
- Layout konsisten antar halaman (header, footer, spacing sama).
- Gunakan foto/ilustrasi profesional (bukan stock generik jika memungkinkan) untuk kredibilitas.
- CTA "Hubungi Kami" konsisten muncul di beberapa halaman kunci (Home, Services, Portfolio).

## 9. Success Metrics
- **Lighthouse score** 90+ di semua kategori, di semua halaman utama.
- **Page load time** < 2.5 detik (LCP) per halaman.
- **Jumlah submission form kontak** sebagai indikator lead masuk.
- **Waktu tinggal (avg. session duration)** menunjukkan engagement pengunjung terhadap konten perusahaan.

## 10. Timeline (Estimasi)

| Fase | Deliverable | Estimasi Waktu |
|---|---|---|
| Setup Project | Inisialisasi Next.js, Tailwind, struktur folder & routing | 0.5 hari |
| Desain/Wireframe | Layout tiap halaman (low/high-fidelity) | 1–2 hari |
| Development Halaman Utama | Home, About, Services, Contact | 2–3 hari |
| Development Halaman Tambahan | Portfolio, Team, Blog (jika ada) | 1–2 hari |
| Integrasi Form & Email | API route + validasi + notifikasi email | 0.5–1 hari |
| Optimasi | SEO, performance, accessibility check | 0.5–1 hari |
| Testing & QA | Cross-browser, responsive testing | 0.5 hari |
| Deployment | Deploy ke Vercel + custom domain | 0.5 hari |

**Total estimasi**: ± 7–10 hari kerja (tergantung jumlah halaman & kompleksitas konten).

## 11. Risiko & Asumsi
- **Asumsi**: Konten (profil perusahaan, foto tim, portofolio, copy) disediakan oleh perusahaan atau disusun bersama saat development.
- **Risiko**: Jika perusahaan butuh update konten mandiri secara rutin tanpa bantuan developer, perlu pertimbangkan integrasi Headless CMS sejak awal (menambah scope & waktu).
- **Risiko**: Penambahan halaman di luar scope awal (misal Karir, multi-bahasa) akan mempengaruhi estimasi timeline.

## 12. Pertanyaan Terbuka (untuk klarifikasi lebih lanjut)
- Halaman apa saja yang wajib ada di versi awal (minimal viable): Home, About, Services, Portfolio, Contact — atau ada tambahan seperti Karir/Blog?
- Apakah tim perusahaan akan mengelola/update konten sendiri secara berkala? (menentukan perlu-tidaknya CMS)
- Apakah sudah tersedia aset brand (logo, warna, foto perusahaan/tim, deskripsi layanan)?
- Apakah perlu integrasi tertentu (Google Maps, WhatsApp Business, newsletter, dll)?
- Apakah website perlu mendukung lebih dari satu bahasa (misal Indonesia & Inggris)?
