# Portfolio — Geovany Ahmad Pahrezi

Website portfolio personal berdasarkan karya refleksi LK2 Seminar: **"Kode Etik Guru sebagai Fondasi Integritas Profesi Pendidik"** — mata kuliah Filosofi Pendidikan dan Pendidikan Nilai, Semester 1.

## Tentang

Calon Guru Informatika yang percaya bahwa tugas seorang guru tidak berhenti pada menyampaikan materi teknis. Portfolio ini berisi refleksi pembelajaran menggunakan kerangka 4C (Concept, Connection, Change, Challenge) dan 4F (Facts, Feeling, Finding, Future), serta artefak pembelajaran dari Aktivitas 4.1, 4.2, dan 4.4.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: Framer Motion
- **Theming**: next-themes (light/dark mode)
- **Icons**: Lucide React
- **Package Manager**: Bun

## Fitur

- Single-page portfolio dengan 7 section utama
- Light & Dark mode toggle
- Fully responsive (mobile-first)
- Smooth scroll navigation
- Animasi reveal saat scroll
- Accessibility: semantic HTML, ARIA labels, keyboard navigation

## Struktur Section

1. **Hero** — Perkenalan singkat dengan gradient text & badges
2. **Tentang Saya** — Biografi & statistik akademik
3. **Refleksi 4C** — Concept, Connection, Change, Challenge
4. **Artefak Pembelajaran** — Aktivitas 4.1, 4.2, 4.4
5. **Kerangka Refleksi** — 4F & 7 Ranah Kewajiban Guru
6. **Komitmen Saya** — 5 komitmen profesional
7. **Footer** — Identitas & info mata kuliah

## Pengembangan Lokal

```bash
# Install dependencies
bun install

# Jalankan dev server
bun run dev

# Build untuk production
bun run build

# Cek lint
bun run lint
```

Buka `http://localhost:3000` di browser.

## Deployment

Cara termudah: deploy ke [Vercel](https://vercel.com) (platform resmi Next.js).

### Opsi 1: Vercel via GitHub (Recommended)

1. Push repo ini ke GitHub
2. Login ke [vercel.com](https://vercel.com) dengan akun GitHub
3. Klik **Add New Project** → pilih repo ini
4. Vercel akan auto-detect Next.js, klik **Deploy**
5. Setiap `git push` akan auto-deploy

### Opsi 2: Vercel CLI

```bash
npm i -g vercel
vercel          # deploy preview
vercel --prod   # deploy production
```

### Opsi 3: Alternatif lain

- **Netlify**: pilih "Next.js" template saat import repo
- **Cloudflare Pages**: build command `bun run build`, output `.next`
- **GitHub Pages**: butuh `next.config` dengan `output: 'export'` (hanya static export)

## Identitas

- **Nama**: Geovany Ahmad Pahrezi
- **NIM**: 25427693
- **Program Studi**: Pendidikan Informatika
- **Semester**: 1

---

© Geovany Ahmad Pahrezi. Refleksi pengalaman belajar LK2 Seminar.
