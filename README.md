# Aruma Gorden Bali

Website statis multi-page untuk jasa gorden custom di Bali. Dibangun dengan Astro, Tailwind CSS, dan JavaScript ringan — tanpa database, admin panel, atau backend.

## Tech Stack

- Astro 6
- Tailwind CSS 4
- JavaScript ringan (mobile menu, form kontak → WhatsApp)
- Static hosting ready (`dist/`)

## Struktur Project

```text
src/
  components/     # Navbar, Footer, CTA, WhatsApp, dll.
  data/site.js    # Konfigurasi bisnis (WA, domain, konten)
  layouts/        # BaseLayout (SEO, OG, schema)
  pages/          # 6 halaman
  styles/         # global.css
public/
  images/         # Gambar website + optimized/
scripts/
  sync-config.mjs      # Generate robots.txt dari site.js
  optimize-images.mjs  # Kompres PNG + AVIF/WebP + OG share
```

## Install & Development

```bash
npm install
npm run dev
```

Buka `http://127.0.0.1:4321`

## Build Production

```bash
npm run build
npm run preview
```

Output ada di folder `dist/`. Deploy folder `dist/` ke Netlify, Vercel, Cloudflare Pages, atau hosting static lainnya.

Sebelum build, `prebuild` otomatis menjalankan `sync-config` untuk memperbarui `robots.txt` sesuai domain di `site.js`.

## Optimasi Gambar

Setelah menambah/mengganti foto di `public/images/`:

```bash
npm run optimize-images
```

Script ini akan:
- Kompres PNG sumber (max lebar 1536px)
- Generate variant AVIF/WebP di `public/images/optimized/`
- Generate `og-share.jpg` dan `og-share.webp` (1200×630) untuk social sharing

## Konfigurasi Penting

Semua konfigurasi bisnis ada di **`src/data/site.js`**:

| Setting | Field | Catatan |
|---------|-------|---------|
| Nomor WhatsApp | `whatsappNumber`, `phoneDisplay` | Format wa.me: `628xxxxxxxxxx` |
| Domain production | `domain` | Juga dipakai `astro.config.mjs` & sitemap |
| Instagram | `instagram`, `instagramUrl` | Ganti URL jika username berbeda |
| OG image | `ogImage` | Default: `/images/og-share.jpg` |

Setelah mengganti domain:

```bash
npm run sync-config
npm run build
```

## Halaman

| URL | Keterangan |
|-----|------------|
| `/` | Home + hero + galeri singkat |
| `/tentang` | Tentang kami |
| `/layanan` | Daftar layanan + CTA per layanan |
| `/galeri` | Galeri hasil pekerjaan |
| `/area-layanan` | Cakupan area Bali |
| `/kontak` | Form → WhatsApp |

## Mengganti Foto Proyek

1. Ganti file PNG di `public/images/` (pertahankan nama file yang sama, atau update path di `site.js`)
2. Jalankan `npm run optimize-images`
3. Jalankan `npm run build`

Prioritas foto: `hero-gorden.png`, galeri, dan gambar layanan.

## Verifikasi Setelah Deploy

1. **Sitemap:** `https://DOMAIN-ANDA.com/sitemap-index.xml`
2. **Robots:** `https://DOMAIN-ANDA.com/robots.txt`
3. **OG image:** `https://DOMAIN-ANDA.com/images/og-share.jpg`
4. Submit sitemap ke Google Search Console

## Testing WhatsApp dari HP

1. Buka website dari HP
2. Klik **Konsultasi** di navbar
3. Klik CTA di hero (home)
4. Buka `/layanan` → klik CTA per layanan
5. Buka `/kontak` → isi form → **Lanjut chat WhatsApp**
6. Cek floating button WhatsApp (mobile)
7. Pastikan semua membuka chat ke nomor yang benar dengan pesan rapi

## Edit Konten

- Layanan, galeri, FAQ, area: `src/data/site.js`
- Urutan section home: `src/pages/index.astro`
- Styling global: `src/styles/global.css`
