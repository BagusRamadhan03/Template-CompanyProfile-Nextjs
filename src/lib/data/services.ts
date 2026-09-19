export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  popular?: boolean;
  highlightPoints: string[];
  deliverables: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  estimatedDuration: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "srv-1",
    slug: "enterprise-web-development",
    title: "Enterprise Web & Platform Engineering",
    category: "Software Engineering",
    shortDesc:
      "Pengembangan aplikasi web berskala enterprise yang tangguh, modular, berkecepatan tinggi, dan aman dari kerentanan.",
    fullDesc:
      "Kami merancang dan membangun platform web skala besar dengan arsitektur microservices atau modular monolith. Mengutamakan waktu respon milidetik, skalabilitas elastis, dan kemudahan perawatan dalam jangka panjang.",
    icon: "Globe",
    popular: true,
    highlightPoints: [
      "Arsitektur modern berbasis Next.js, React, Node.js, & Go",
      "Kepatuhan standar keamanan ISO 27001 dan OWASP Top 10",
      "Optimalisasi Core Web Vitals dan SEO teknis terstruktur",
      "Integrasi API multi-sistem (ERP, CRM, Core Banking, Payment Gateway)",
    ],
    deliverables: [
      "Source code lengkap dengan dokumentasi arsitektur terinci",
      "Automated CI/CD pipeline & unit/integration test coverage > 80%",
      "Dashboard admin operasional berfitur RBAC (Role-Based Access Control)",
      "SLA garansi maintenance & pemantauan performa 99.9% uptime",
    ],
    processSteps: [
      { title: "Kebutuhan & Arsitektur", description: "Analisis use-case, skema basis data, dan rancangan diagram sistem modular." },
      { title: "Iterasi Sprint Agile", description: "Pengembangan dua mingguan dengan demo langsung kepada stakeholder." },
      { title: "QA & Penetration Testing", description: "Pengujian beban tinggi (load test) dan audit celah keamanan." },
      { title: "Deployment & Serah Terima", description: "Migrasi zero-downtime, pelatihan tim internal, dan dokumentasi API." },
    ],
    techStack: ["Next.js", "TypeScript", "React", "Node.js", "Go", "PostgreSQL", "Redis", "Docker"],
    faq: [
      {
        question: "Berapa lama estimasi pengerjaan platform enterprise?",
        answer: "Rata-rata proyek berkisar antara 8 hingga 16 minggu tergantung pada kompleksitas modul dan integrasi API pihak ketiga.",
      },
      {
        question: "Apakah source code menjadi hak milik klien sepenuhnya?",
        answer: "Ya, 100% intellectual property (IP) dan repositori kode diserahkan penuh kepada klien setelah penyelesaian proyek.",
      },
      {
        question: "Apakah sistem dapat diintegrasikan dengan database lama perusahaan kami?",
        answer: "Tentu. Tim insinyur kami memiliki pengalaman mendalam melakukan migrasi data dan membuat adapter API untuk database legacy seperti Oracle, SQL Server, atau AS400.",
      },
    ],
    estimatedDuration: "8 - 16 Minggu",
  },
  {
    id: "srv-2",
    slug: "mobile-app-development",
    title: "Native & Cross-Platform Mobile Apps",
    category: "Mobile Solutions",
    shortDesc:
      "Aplikasi mobile iOS & Android yang responsif, intuitif, dan dioptimalkan untuk performa native serta retensi pengguna.",
    fullDesc:
      "Menciptakan pengalaman mobile terbaik untuk pelanggan maupun armada operasional bisnis Anda. Kami memanfaatkan teknologi Flutter dan React Native untuk efisiensi biaya dan kecepatan waktu ke pasar tanpa mengorbankan fluiditas UI.",
    icon: "Smartphone",
    popular: true,
    highlightPoints: [
      "Performa 60fps dengan animasi halus dan antarmuka ramah pengguna",
      "Dukungan offline-first mode dengan sinkronisasi data cerdas",
      "Integrasi biometric authentication, push notifications, & geofencing",
      "Penerbitan resmi ke Apple App Store & Google Play Store",
    ],
    deliverables: [
      "Aplikasi siap rilis untuk platform Android (AAB) dan iOS (IPA)",
      "Backend RESTful / GraphQL API terintegrasi",
      "Panel analitik pengguna dan crash reporting real-time",
      "Dukungan pembaruan berkala OS dan rilis fitur",
    ],
    processSteps: [
      { title: "Wireframing & Prototyping", description: "Rancangan interaksi antarmuka yang telah diuji kepada pengguna sasaran." },
      { title: "Mobile Architecture Setup", description: "Pemilihan state management yang bersih dan struktur modular scalable." },
      { title: "Backend API Sync", description: "Penyambungan keamanan token, enkripsi lokal, dan websocket real-time." },
      { title: "Store Compliance & Launch", description: "Proses verifikasi privasi dan publikasi di App Store & Google Play." },
    ],
    techStack: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "GraphQL", "Supabase"],
    faq: [
      {
        question: "Apakah lebih baik membangun secara Native atau Flutter/React Native?",
        answer: "Untuk 90% aplikasi bisnis saat ini, framework hybrid modern seperti Flutter dan React Native menawarkan kecepatan pengembangan 2x lebih cepat dengan performa yang hampir setara native. Kami akan merekomendasikan pilihan terbaik berdasarkan kebutuhan spesifik Anda.",
      },
      {
        question: "Apakah Nusantara Tekno Solusi mengurus proses review App Store?",
        answer: "Ya, kami mendampingi dan mengawal proses persetujuan (review) Apple dan Google hingga aplikasi lolos verifikasi dan tayang di publik.",
      },
    ],
    estimatedDuration: "6 - 12 Minggu",
  },
  {
    id: "srv-3",
    slug: "cloud-devops-solutions",
    title: "Cloud Infrastructure & DevOps Automation",
    category: "Infrastructure",
    shortDesc:
      "Modernisasi infrastruktur cloud, otomatisasi CI/CD, kontainerisasi Kubernetes, dan efisiensi biaya komputasi.",
    fullDesc:
      "Kami membantu perusahaan beralih ke cloud atau mengoptimalkan arsitektur yang sudah ada di AWS, Google Cloud, atau Azure. Mencegah downtime yang merugikan bisnis melalui arsitektur High Availability dan disaster recovery teruji.",
    icon: "Cloud",
    popular: false,
    highlightPoints: [
      "Infrastruktur berbasis kode (Infrastructure as Code - Terraform / Pulumi)",
      "Orkestrasi kontainer dengan Kubernetes (EKS / GKE / AKS)",
      "Otomatisasi pengujian dan rilis kode melalui GitHub Actions & GitLab CI",
      "Penghematan biaya komputasi hingga 40% melalui audit FinOps",
    ],
    deliverables: [
      "Repositori Terraform lengkap untuk provisioning otomatis",
      "Pipeline CI/CD otomatis dari staging hingga production",
      "Sistem monitoring terpusat (Prometheus, Grafana, OpenTelemetry)",
      "Dokumen Standard Operating Procedure (SOP) Disaster Recovery",
    ],
    processSteps: [
      { title: "Cloud Assessment", description: "Audit keamanan, beban kerja saat ini, dan analisis biaya infrastruktur." },
      { title: "Architecture Blueprints", description: "Penyusunan arsitektur multi-AZ atau multi-region yang toleran terhadap kegagalan." },
      { title: "Automated Pipeline", description: "Implementasi continuous integration dan deployment teruji." },
      { title: "Handover & Alerting", description: "Penyetelan alarm notifikasi Telegram/Slack dan pelatihan tim DevOps." },
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Grafana"],
    faq: [
      {
        question: "Apakah migrasi cloud akan mengganggu operasional sistem kami saat ini?",
        answer: "Kami menerapkan strategi migrasi bertahap (canary / blue-green deployment) untuk memastikan operasional bisnis berjalan tanpa downtime (zero interruption).",
      },
      {
        question: "Bisakah membantu efisiensi tagihan cloud bulanan yang membengkak?",
        answer: "Sangat bisa. Melalui layanan FinOps kami, kami mengidentifikasi idle resources, rightsizing instans, dan optimasi reserved instances untuk memangkas biaya secara signifikan.",
      },
    ],
    estimatedDuration: "4 - 8 Minggu",
  },
  {
    id: "srv-4",
    slug: "data-analytics-bi",
    title: "Data Engineering & Enterprise BI",
    category: "Data & AI",
    shortDesc:
      "Sentralisasi data gudang (data warehouse), otomatisasi pipeline ETL, dan dashboard analitik interaktif untuk keputusan berbasis data.",
    fullDesc:
      "Mengubah data mentah yang tersebar di berbagai divisi menjadi wawasan strategis berharga secara real-time. Kami membangun data warehouse modern yang siap mendukung pelaporan eksekutif hingga machine learning.",
    icon: "BarChart3",
    popular: false,
    highlightPoints: [
      "Data pipeline ETL/ELT terotomatisasi dengan Apache Airflow & dbt",
      "Modern Data Warehouse berbasis BigQuery, Snowflake, atau ClickHouse",
      "Dashboard interaktif eksekutif via PowerBI, Tableau, atau Metabase",
      "Data governance dan kontrol akses keamanan data sensitif",
    ],
    deliverables: [
      "Arsitektur data warehouse terstruktur dan teruji",
      "Koleksi dashboard visual KPI bisnis real-time",
      "Kamus data (data dictionary) dan katalog metadata",
      "Jadwal refresh data otomatis dengan pemantauan anomali",
    ],
    processSteps: [
      { title: "Data Discovery", description: "Inventarisasi sumber data CRM, ERP, analitik web, dan log transaksi." },
      { title: "Pipeline Ingestion", description: "Pembangunan alur ekstraksi data otomatis dengan validasi kualitas data." },
      { title: "Modeling & Warehousing", description: "Perancangan skema dimensional (star/snowflake) yang optimal untuk query cepat." },
      { title: "Dashboard & Storytelling", description: "Penyusunan visualisasi metrik kunci untuk pimpinan dan tim operasional." },
    ],
    techStack: ["BigQuery", "Snowflake", "dbt", "Apache Airflow", "Python", "PowerBI", "Metabase"],
    faq: [
      {
        question: "Apakah sistem BI dapat mengonsumsi data dari Google Sheets dan Excel?",
        answer: "Ya, kami dapat menghubungkan data dari spreadsheet, database relasional, hingga API pihak ketiga ke dalam satu data hub terpadu.",
      },
    ],
    estimatedDuration: "6 - 10 Minggu",
  },
  {
    id: "srv-5",
    slug: "ui-ux-design-system",
    title: "UI/UX Research & Design Systems",
    category: "Design",
    shortDesc:
      "Riset pengalaman pengguna mendalam, antarmuka elegan, dan sistem desain terstandar untuk konsistensi seluruh produk digital.",
    fullDesc:
      "Desain bukan hanya tentang keindahan visual, tetapi tentang bagaimana produk memecahkan masalah pengguna secara efisien. Kami menciptakan antarmuka yang meningkatkan tingkat konversi dan memangkas waktu orientasi pengguna baru.",
    icon: "Palette",
    popular: false,
    highlightPoints: [
      "User research, in-depth interviews, & usability testing terstruktur",
      "Komponen design system komprehensif di Figma dengan token desain",
      "Prototipe interaktif high-fidelity untuk validasi stakeholder",
      "Hand-off rapi yang siap diimplementasikan oleh tim developer",
    ],
    deliverables: [
      "File master Figma lengkap dengan design tokens & auto-layout",
      "Dokumentasi panduan gaya (typography, colors, spacing, iconography)",
      "Laporan temuan usability testing beserta rekomendasi UX",
      "Aset grafis siap export (SVG, PNG, font)",
    ],
    processSteps: [
      { title: "Empathize & Define", description: "Pahami persona pengguna, journey map, dan pain point utama." },
      { title: "Information Architecture", description: "Perancangan user flow dan wireframe struktur dasar navigasi." },
      { title: "UI Design & Component Library", description: "Pembangunan visual polished dan komponen terstandarisasi." },
      { title: "Testing & Validation", description: "Uji coba prototipe kepada target pengguna sebelum tahap coding." },
    ],
    techStack: ["Figma", "FigJam", "Miro", "Maze", "Zeroheight", "Storybook"],
    faq: [
      {
        question: "Apakah kami mendapatkan file sumber Figma secara penuh?",
        answer: "Ya, Anda akan menerima akses penuh ke file Figma beserta seluruh komponen, varian, dan dokumentasi design system.",
      },
    ],
    estimatedDuration: "4 - 8 Minggu",
  },
  {
    id: "srv-6",
    slug: "cybersecurity-code-audit",
    title: "Cyber Security & Source Code Audit",
    category: "Security",
    shortDesc:
      "Pemeriksaan kerentanan sistem, uji penetrasi (pentest), dan audit kode mendalam untuk melindungi aset digital perusahaan Anda.",
    fullDesc:
      "Lindungi reputasi bisnis dan data rahasia pelanggan dari potensi kebocoran serta serangan siber. Tim ethical hacker kami menguji ketahanan aplikasi dan infrastruktur Anda menggunakan metodologi standar industri.",
    icon: "Shield",
    popular: false,
    highlightPoints: [
      "Black-box, Gray-box, dan White-box Penetration Testing",
      "Static & Dynamic Application Security Testing (SAST / DAST)",
      "Evaluasi konfigurasi cloud dan manajemen sertifikat SSL/TLS",
      "Laporan rekomendasi remediasi teknis yang aplikatif",
    ],
    deliverables: [
      "Executive summary report untuk jajaran direksi",
      "Detailed technical vulnerability assessment dengan skor CVSS",
      "Panduan perbaikan kode (patch recommendations)",
      "Sesi re-testing gratis untuk memverifikasi perbaikan celah",
    ],
    processSteps: [
      { title: "Scoping & Authorization", description: "Penentuan batas cakupan target pengujian dan perjanjian kerahasiaan (NDA)." },
      { title: "Reconnaissance & Scan", description: "Pemetaan permukaan serangan dan identifikasi titik masuk potensial." },
      { title: "Exploitation Attempt", description: "Pengujian simulasi penetrasi oleh security engineer bersertifikasi." },
      { title: "Reporting & Debrief", description: "Penyampaian laporan temuan dan pendampingan teknis remediasi." },
    ],
    techStack: ["Burp Suite", "OWASP ZAP", "SonarQube", "Nessus", "Kali Linux", "Wireshark"],
    faq: [
      {
        question: "Apakah penetration test akan mengganggu server produksi kami?",
        answer: "Kami menjadwalkan pengujian di luar jam sibuk atau pada environment staging/mirror untuk memastikan operasional bisnis tidak terganggu.",
      },
    ],
    estimatedDuration: "2 - 4 Minggu",
  },
];
