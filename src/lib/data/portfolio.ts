export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  category: "Web Platform" | "Mobile Apps" | "Cloud & DevOps" | "Data & AI";
  year: string;
  featured: boolean;
  shortSummary: string;
  coverGradient: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    description: string;
  }[];
  techStack: string[];
  clientQuote?: {
    author: string;
    role: string;
    quote: string;
  };
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "port-1",
    slug: "bank-digital-omnichannel",
    title: "Omnichannel Banking Core & Mobile App Integration",
    clientName: "Bank Artha Nusantara",
    industry: "Fintech & Banking",
    category: "Mobile Apps",
    year: "2024",
    featured: true,
    coverGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    shortSummary:
      "Modernisasi antarmuka mobile banking dengan sistem autentikasi biometrik mutakhir, transfer instan BI-FAST, dan performa transaksi waktu nyata.",
    challenge:
      "Aplikasi mobile banking sebelumnya mengalami latensi tinggi di jam sibuk (peak traffic) dengan waktu load rata-rata di atas 4.5 detik. Integrasi dengan sistem core banking warisan (legacy) kerap menyebabkan kegagalan sinkronisasi saldo.",
    solution:
      "Kami membangun arsitektur API Gateway modern berbasis Go dengan caching Redis berlapis dan mengembangkan aplikasi mobile hybrid Flutter berkinerja tinggi. Menerapkan enkripsi end-to-end dengan kepatuhan regulasi OJK & Bank Indonesia.",
    results: [
      { label: "Waktu Muat Aplikasi", value: "0.8 Detik", description: "Turun 82% dari versi lama" },
      { label: "Volume Transaksi", value: "+240%", description: "Peningkatan transaksi harian" },
      { label: "App Store Rating", value: "4.8 / 5.0", description: "Berdasarkan 50.000+ ulasan" },
      { label: "System Uptime", value: "99.99%", description: "Ketersediaan tanpa interupsi" },
    ],
    techStack: ["Flutter", "Go", "Redis", "PostgreSQL", "Kafka", "Docker", "Kubernetes"],
    clientQuote: {
      author: "Hendra Gunawan",
      role: "Chief Technology Officer, Bank Artha Nusantara",
      quote:
        "Kerja sama dengan Nusantara Tekno Solusi merupakan keputusan terbaik kami. Mereka tidak hanya menyelesaikan masalah teknis, tetapi memberikan standar baru bagi pengalaman perbankan digital nasabah kami.",
    },
  },
  {
    id: "port-2",
    slug: "logistik-nusantara-tracking",
    title: "IoT Fleet Management & Real-Time Logistics Tracking",
    clientName: "Nusantara Express Cargo",
    industry: "Logistics & Supply Chain",
    category: "Web Platform",
    year: "2024",
    featured: true,
    coverGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    shortSummary:
      "Platform pemantauan armada logistik real-time dengan telematika IoT, optimasi rute otomatis, dan estimasi waktu ketibaan presisi tinggi.",
    challenge:
      "Kurangnya visibilitas perjalanan lebih dari 1.500 armada truk di seluruh pulau Jawa dan Sumatera menyebabkan pemborosan bahan bakar hingga 22% dan keterlambatan pengiriman yang sulit diprediksi konsumen.",
    solution:
      "Membangun dashboard web control tower berbasis Next.js dengan koneksi websocket real-time ke perangkat GPS telematika. Mengintegrasikan algoritma rute dinamis untuk menghindari titik kemacetan secara otomatis.",
    results: [
      { label: "Penghematan Bahan Bakar", value: "18.5%", description: "Efisiensi biaya operasional" },
      { label: "Ketepatan Waktu Pengiriman", value: "96.4%", description: "Naik signifikan dari 78%" },
      { label: "Armada Terpantau", value: "1,500+ Truk", description: "Pelacakan posisi setiap 5 detik" },
      { label: "Laporan Insiden Otomatis", value: "100%", description: "Notifikasi real-time ke dispatch" },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MQTT / IoT", "TimescaleDB", "Google Maps API", "AWS"],
    clientQuote: {
      author: "Dewi Lestari",
      role: "VP Operations, Nusantara Express Cargo",
      quote:
        "Visibilitas armada kami kini 100% transparan. Tim dispatch dapat mengambil keputusan dalam hitungan detik ketika terjadi kendala rute. Efisiensinya luar biasa.",
    },
  },
  {
    id: "port-3",
    slug: "telemedika-health-platform",
    title: "National Telehealth & Smart Hospital Ecosystem",
    clientName: "Medika Sehat Bersama",
    industry: "Healthcare",
    category: "Web Platform",
    year: "2023",
    featured: true,
    coverGradient: "from-sky-600 via-blue-700 to-indigo-800",
    shortSummary:
      "Ekosistem konsultasi dokter online terenkripsi, resep obat digital terhubung apotek rekanan, dan integrasi rekam medis elektronik (RME).",
    challenge:
      "Pasien harus mengantre hingga 3 jam untuk konsultasi dokter spesialis, sementara rumah sakit kesulitan mengelola rekam medis fisik yang rawan hilang dan tidak terintegrasi antar cabang.",
    solution:
      "Mengembangkan platform web dan mobile telekonsultasi WebRTC terenkripsi dengan integrasi resep digital instan, pembayaran multi-channel, dan integrasi standar interoperabilitas SATUSEHAT Kemenkes RI.",
    results: [
      { label: "Pasien Terlayani", value: "350,000+", description: "Konsultasi aktif per tahun" },
      { label: "Waktu Tunggu", value: "12 Menit", description: "Rata-rata waktu tunggu online" },
      { label: "Jejaring Rumah Sakit", value: "14 Cabang", description: "Rekam medis tersentralisasi" },
      { label: "Keamanan Data", value: "HIPAA Compliant", description: "Enkripsi data medis 256-bit" },
    ],
    techStack: ["Next.js", "WebRTC", "React Native", "Python FastAPI", "PostgreSQL", "GCP"],
  },
  {
    id: "port-4",
    slug: "retail-pos-smart-inventory",
    title: "Omnichannel POS & Multi-Store Inventory Engine",
    clientName: "Gaya Nusantara Retail Group",
    industry: "Retail & E-commerce",
    category: "Cloud & DevOps",
    year: "2023",
    featured: false,
    coverGradient: "from-amber-500 via-orange-600 to-rose-600",
    shortSummary:
      "Sistem kasir cerdas point-of-sale berbasis cloud dengan sinkronisasi inventaris multi-outlet real-time dan analitik penjualan prediktif.",
    challenge:
      "Perbedaan stok barang antara toko fisik dan toko daring di marketplace sering menyebabkan pembatalan pesanan (overselling) dan kerugian omset.",
    solution:
      "Merancang sistem inventaris terpusat dengan latency sinkronisasi sub-detik melalui distributed message broker dan arsitektur serverless.",
    results: [
      { label: "Toko Aktif", value: "85 Outlet", description: "Tersebar di 15 kota besar" },
      { label: "Akurasi Stok", value: "99.8%", description: "Mencegah fenomena overselling" },
      { label: "Waktu Transaksi Kasir", value: "< 5 Detik", description: "Proses pembayaran instan" },
    ],
    techStack: ["React", "Go", "AWS Lambda", "DynamoDB", "Tailwind CSS"],
  },
  {
    id: "port-5",
    slug: "smart-city-governance-hub",
    title: "Smart Governance Portal & Citizen Public Complaints",
    clientName: "Dinas Komunikasi & Informatika",
    industry: "Public Sector",
    category: "Data & AI",
    year: "2023",
    featured: false,
    coverGradient: "from-violet-600 via-purple-700 to-indigo-900",
    shortSummary:
      "Portal pelayanan publik terpadu dan sistem agregasi laporan aspirasi warga dengan klasifikasi cerdas menggunakan NLP.",
    challenge:
      "Laporan warga masuk melalui berbagai kanal tak terkoordinasi (telepon, Twitter, SMS) sehingga tindak lanjut dinas terkait lambat dan sulit dievaluasi pimpinan daerah.",
    solution:
      "Membangun portal satu pintu terpadu dengan integrasi AI categorization otomatis untuk mengarahkan tiket laporan langsung ke dinas penanggung jawab.",
    results: [
      { label: "Waktu Respons Aduan", value: "24 Jam", description: "Dari sebelumnya 5-7 hari kerja" },
      { label: "Tingkat Penyelesaian", value: "92%", description: "Laporan terselesaikan tepat waktu" },
      { label: "Warga Terdaftar", value: "1.2 Juta+", description: "Pengguna portal aktif" },
    ],
    techStack: ["Next.js", "Python", "Transformers NLP", "PostgreSQL", "Elasticsearch"],
  },
  {
    id: "port-6",
    slug: "edutech-adaptive-learning",
    title: "AI-Powered Adaptive Learning & Interactive LMS",
    clientName: "Eduka Cendekia Mandiri",
    industry: "Education Technology",
    category: "Web Platform",
    year: "2024",
    featured: false,
    coverGradient: "from-rose-500 via-pink-600 to-purple-600",
    shortSummary:
      "Platform belajar interaktif dengan penyesuaian kurikulum adaptif berdasarkan kecepatan belajar dan pemahaman masing-masing siswa.",
    challenge:
      "Materi pembelajaran konvensional satu ukuran untuk semua (one-size-fits-all) menyebabkan 40% siswa tertinggal pada topik fundamental STEM.",
    solution:
      "Mengembangkan LMS interaktif dengan kuis adaptif dan analitik performa belajar siswa secara granular untuk membantu tutor memberikan intervensi tepat waktu.",
    results: [
      { label: "Peningkatan Nilai Siswa", value: "+34%", description: "Rata-rata ujian akhir" },
      { label: "Siswa Aktif Harian", value: "180,000+", description: "Keterlibatan tinggi di platform" },
      { label: "Materi Interaktif", value: "2,500+", description: "Modul video & simulasi latihan" },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
  },
];
