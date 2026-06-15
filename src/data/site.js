/**
 * Konfigurasi bisnis — ubah nilai di sini sebelum production.
 * Setelah mengganti domain, jalankan: npm run sync-config && npm run build
 */
export const site = {
  name: "Aruma Gorden Bali",
  tagline: "Jasa gorden custom di Bali",
  // GANTI: nomor WhatsApp bisnis (format wa.me tanpa + atau spasi)
  phoneDisplay: "+62 822-3336-8670",
  whatsappNumber: "6282233368670",
  whatsappMessage: "Halo, saya ingin konsultasi gorden custom di Bali.",
  address: "Bali, Indonesia",
  hours: "Senin - Sabtu, 09.00 - 18.00 WITA",
  // GANTI: username dan URL Instagram resmi
  instagram: "@arumagordenbali",
  instagramUrl: "https://www.instagram.com/arumagordenbali/",
  // GANTI: domain production final (tanpa trailing slash)
  domain: "https://arumagordenbali.com",
  ogImage: "/images/og-share.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const contactNeedOptions = [
  "Gorden rumah",
  "Gorden villa",
  "Gorden kantor",
  "Gorden hotel",
  "Gorden apartemen",
  "Vitrase",
  "Roller blind",
  "Vertical blind",
  "Rel gorden",
  "Pengukuran dan pemasangan",
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Galeri", href: "/galeri" },
  { label: "Area Layanan", href: "/area-layanan" },
  { label: "Kontak", href: "/kontak" },
];

export const footerServices = [
  "Gorden rumah",
  "Gorden villa",
  "Gorden kantor",
  "Gorden hotel",
  "Roller blind",
  "Vitrase",
];

export const footerDescription =
  "Jasa gorden custom di Bali untuk rumah, villa, kantor, hotel, dan apartemen. Melayani konsultasi, pengukuran, pembuatan, hingga pemasangan.";

export const seo = {
  home: {
    title: "Jasa Gorden Custom Bali | Ukur & Pasang Gorden",
    description:
      "Jasa gorden custom di Bali untuk rumah, villa, kantor, hotel, dan apartemen. Konsultasi, pengukuran, pembuatan, dan pemasangan gorden rapi sesuai kebutuhan.",
  },
  tentang: {
    title: "Tentang Kami | Jasa Gorden Custom Bali",
    description:
      "Kenali layanan jasa gorden custom di Bali untuk kebutuhan rumah, villa, kantor, hotel, dan apartemen dengan proses konsultasi hingga pemasangan.",
  },
  layanan: {
    title: "Layanan Gorden Bali | Rumah, Villa, Kantor & Hotel",
    description:
      "Pilihan layanan gorden di Bali untuk rumah, villa, kantor, hotel, apartemen, vitrase, roller blind, vertical blind, dan pemasangan rel gorden.",
  },
  galeri: {
    title: "Galeri Gorden Bali | Contoh Hasil Pemasangan",
    description:
      "Lihat contoh hasil pemasangan gorden untuk rumah, villa, kantor, hotel, dan apartemen di Bali dengan tampilan rapi dan menyesuaikan ruangan.",
  },
  area: {
    title: "Area Layanan Gorden Bali | Denpasar, Badung, Gianyar",
    description:
      "Jasa gorden custom melayani berbagai area di Bali seperti Denpasar, Badung, Gianyar, Sanur, Canggu, Seminyak, Ubud, dan sekitarnya.",
  },
  kontak: {
    title: "Kontak Jasa Gorden Bali | Konsultasi via WhatsApp",
    description:
      "Hubungi jasa gorden custom di Bali untuk konsultasi model, bahan, harga, jadwal pengukuran, dan pemasangan langsung melalui WhatsApp.",
  },
};

export const benefits = [
  {
    title: "Konsultasi kebutuhan gorden",
    description:
      "Customer bisa cerita kebutuhan ruangan, gaya interior, dan budget lewat WhatsApp sebelum menentukan bahan.",
  },
  {
    title: "Survey dan ukur ke lokasi",
    description:
      "Tim dapat menjadwalkan pengukuran di rumah, villa, kantor, hotel, atau apartemen agar ukuran lebih presisi.",
  },
  {
    title: "Pilihan model dan bahan",
    description:
      "Tersedia pilihan blackout, vitrase, bahan dekoratif, roller blind, vertical blind, rel, dan aksesoris pendukung.",
  },
  {
    title: "Pemasangan rapi",
    description:
      "Pengerjaan dibuat sesuai ukuran ruangan dan dipasang dengan memperhatikan fungsi, tampilan, serta kenyamanan pakai.",
  },
];

export const services = [
  {
    title: "Gorden rumah",
    description:
      "Gorden custom untuk ruang tamu, kamar tidur, ruang keluarga, dan area rumah lainnya dengan pilihan bahan yang nyaman.",
    image: "/images/gallery-living-room.png",
    ctaLabel: "Tanya Gorden Rumah",
    ctaMessage: "Halo, saya ingin konsultasi gorden rumah di Bali.",
  },
  {
    title: "Gorden villa",
    description:
      "Solusi gorden untuk villa pribadi maupun rental, termasuk kebutuhan blackout, vitrase, dan tampilan interior yang hangat.",
    image: "/images/gallery-villa.png",
    ctaLabel: "Konsultasi Gorden Villa",
    ctaMessage: "Halo, saya ingin konsultasi gorden villa di Bali.",
  },
  {
    title: "Gorden kantor",
    description:
      "Pilihan gorden dan blind untuk ruang kerja, ruang meeting, resepsionis, serta area operasional yang butuh tampilan rapi.",
    image: "/images/gallery-office-blind.png",
    ctaLabel: "Tanya Gorden Kantor",
    ctaMessage: "Halo, saya ingin konsultasi gorden kantor di Bali.",
  },
  {
    title: "Gorden hotel",
    description:
      "Pengerjaan gorden untuk kamar, lobby, dan area hospitality dengan jadwal pemasangan yang bisa disesuaikan.",
    image: "/images/gallery-hotel.png",
    ctaLabel: "Konsultasi Gorden Hotel",
    ctaMessage: "Halo, saya ingin konsultasi gorden hotel di Bali.",
  },
  {
    title: "Gorden apartemen",
    description:
      "Gorden custom dan blind praktis untuk unit apartemen, jendela besar, balkon, dan ruang compact.",
    image: "/images/gallery-apartment.png",
    ctaLabel: "Tanya Gorden Apartemen",
    ctaMessage: "Halo, saya ingin konsultasi gorden apartemen di Bali.",
  },
  {
    title: "Vitrase",
    description:
      "Lapisan gorden tipis untuk melembutkan cahaya, menjaga privasi ringan, dan membuat ruangan tetap terang.",
    image: "/images/gallery-vitrage.png",
    ctaLabel: "Konsultasi Vitrase",
    ctaMessage: "Halo, saya ingin konsultasi vitrase untuk ruangan saya di Bali.",
  },
  {
    title: "Roller blind",
    description:
      "Blind modern yang praktis untuk kantor, apartemen, ruang minimalis, dan jendela yang membutuhkan kontrol cahaya.",
    image: "/images/gallery-roller-blind.png",
    ctaLabel: "Tanya Roller Blind",
    ctaMessage: "Halo, saya ingin konsultasi roller blind di Bali.",
  },
  {
    title: "Vertical blind",
    description:
      "Cocok untuk jendela lebar, pintu kaca, ruang meeting, dan area kantor yang membutuhkan kesan profesional.",
    image: "/images/gallery-vertical-blind.png",
    ctaLabel: "Tanya Vertical Blind",
    ctaMessage: "Halo, saya ingin konsultasi vertical blind di Bali.",
  },
  {
    title: "Rel gorden",
    description:
      "Pemasangan rel gorden, bracket, dan aksesoris pendukung agar gorden mudah dibuka-tutup dan tampak rapi.",
    image: "/images/gallery-curtain-rail.png",
    ctaLabel: "Konsultasi Rel Gorden",
    ctaMessage: "Halo, saya ingin konsultasi pemasangan rel gorden di Bali.",
  },
  {
    title: "Pengukuran dan pemasangan",
    description:
      "Layanan survey, ukur, rekomendasi bahan, produksi, hingga pemasangan langsung ke lokasi customer di Bali.",
    image: "/images/hero-gorden.png",
    ctaLabel: "Jadwalkan Pengukuran",
    ctaMessage: "Halo, saya ingin jadwalkan pengukuran dan pemasangan gorden di Bali.",
  },
];

export const gallery = [
  {
    title: "Gorden ruang tamu",
    location: "Sanur, Denpasar",
    image: "/images/gallery-living-room.png",
    alt: "Ruang tamu dengan gorden custom warna netral",
  },
  {
    title: "Blackout kamar tidur",
    location: "Jimbaran, Badung",
    image: "/images/gallery-bedroom-blackout.png",
    alt: "Kamar tidur dengan gorden blackout",
  },
  {
    title: "Gorden villa",
    location: "Seminyak, Badung",
    image: "/images/gallery-villa.png",
    alt: "Interior villa dengan gorden custom warna hangat",
  },
  {
    title: "Roller blind modern",
    location: "Canggu, Badung",
    image: "/images/gallery-roller-blind.png",
    alt: "Ruang modern dengan roller blind",
  },
  {
    title: "Vitrase minimalis",
    location: "Ubud, Gianyar",
    image: "/images/gallery-vitrage.png",
    alt: "Vitrase minimalis pada ruang terang",
  },
  {
    title: "Vertical blind kantor",
    location: "Denpasar, Bali",
    image: "/images/gallery-vertical-blind.png",
    alt: "Ruang meeting dengan vertical blind putih",
  },
  {
    title: "Gorden kamar villa",
    location: "Nusa Dua, Badung",
    image: "/images/gallery-villa-bedroom.png",
    alt: "Kamar villa dengan gorden blackout dan vitrase",
  },
  {
    title: "Gorden apartemen",
    location: "Kuta, Badung",
    image: "/images/gallery-apartment.png",
    alt: "Apartemen dengan roller blind modern",
  },
  {
    title: "Gorden hotel",
    location: "Gianyar, Bali",
    image: "/images/gallery-hotel.png",
    alt: "Kamar hotel dengan gorden blackout elegan",
  },
];

export const serviceAreas = [
  "Denpasar",
  "Badung",
  "Gianyar",
  "Tabanan",
  "Sanur",
  "Canggu",
  "Seminyak",
  "Ubud",
  "Nusa Dua",
  "Jimbaran",
  "Kuta",
  "Kerobokan",
  "Uluwatu",
  "Mengwi",
  "Sukawati",
];

export const processSteps = [
  {
    title: "Konsultasi via WhatsApp",
    description:
      "Kirim foto ruangan, ukuran perkiraan, lokasi, dan kebutuhan seperti blackout, vitrase, atau blind.",
  },
  {
    title: "Survey dan pengukuran",
    description:
      "Tim menjadwalkan kunjungan untuk mengukur jendela dan mengecek titik pemasangan di lokasi.",
  },
  {
    title: "Pilih bahan dan model",
    description:
      "Customer bisa memilih warna, bahan, model lipatan, tipe rel, atau jenis blind yang paling sesuai.",
  },
  {
    title: "Produksi dan pemasangan",
    description:
      "Gorden dibuat sesuai ukuran, lalu dipasang rapi sesuai jadwal yang sudah disepakati.",
  },
];

export const faqs = [
  {
    question: "Apakah bisa ukur langsung ke lokasi?",
    answer:
      "Bisa. Setelah konsultasi awal, tim dapat menjadwalkan survey dan pengukuran agar ukuran gorden lebih presisi.",
  },
  {
    question: "Area Bali mana saja yang dilayani?",
    answer:
      "Kami melayani Denpasar, Badung, Gianyar, Tabanan, Sanur, Canggu, Seminyak, Ubud, Nusa Dua, Jimbaran, dan area Bali lainnya menyesuaikan jadwal.",
  },
  {
    question: "Apakah bisa memilih bahan dan model sendiri?",
    answer:
      "Bisa. Customer bisa konsultasi pilihan bahan, warna, model gorden, rel, vitrase, roller blind, atau vertical blind sesuai kebutuhan ruangan.",
  },
  {
    question: "Berapa lama proses pembuatan gorden custom?",
    answer:
      "Estimasi umum 7 sampai 14 hari kerja setelah ukuran, bahan, dan model disetujui. Durasi bisa menyesuaikan jumlah titik dan jenis bahan.",
  },
  {
    question: "Apakah melayani villa, hotel, kantor, dan apartemen?",
    answer:
      "Ya. Layanan bisa digunakan untuk rumah, villa, kantor, hotel, apartemen, dan ruang komersial lain di Bali.",
  },
];

export const whyChooseUs = [
  "Komunikasi mudah dari konsultasi awal sampai jadwal pemasangan.",
  "Rekomendasi bahan disesuaikan dengan cahaya, privasi, dan gaya ruangan.",
  "Pengukuran dilakukan lebih teliti agar hasil akhir terlihat proporsional.",
  "Pengerjaan cocok untuk kebutuhan pribadi maupun properti sewa dan komersial.",
];
