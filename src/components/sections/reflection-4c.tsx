"use client";

import {
  BookOpen,
  Link2,
  RefreshCw,
  Mountain,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

interface ReflectionItem {
  letter: string;
  word: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  body: string;
  highlights: string[];
}

const ITEMS: ReflectionItem[] = [
  {
    letter: "C1",
    word: "Concept",
    title: "Konsep Utama yang Dipelajari",
    icon: BookOpen,
    accent: "from-emerald-500/15 to-emerald-500/0 text-emerald-700 dark:text-emerald-400",
    body:
      "Kode etik guru mengatur hubungan profesional dalam tujuh ranah sekaligus, mulai dari peserta didik hingga pemerintah. Pemahaman ini membuat saya menyadari bahwa kode etik bukan dokumen mati, melainkan peta relasi profesional yang harus saya jalani setiap hari sebagai calon pendidik.",
    highlights: [
      "Tujuh ranah kewajiban guru",
      "Kerangka 4F untuk refleksi kasus",
      "Kerangka 4C untuk koneksi materi",
    ],
  },
  {
    letter: "C2",
    word: "Connection",
    title: "Koneksi Antar Materi",
    icon: Link2,
    accent: "from-amber-500/15 to-amber-500/0 text-amber-700 dark:text-amber-400",
    body:
      "Kode etik tidak berdiri sendiri. Ia berakar pada Landasan Filosofi Pendidikan Nasional, dihidupkan oleh Pola Pikir Bertumbuh, dan diwujudkan melalui Pendidikan Nilai. Ketiga materi ini saling mengisi, membentuk pemahaman utuh tentang peran guru sebagai pendidik berintegritas.",
    highlights: [
      "Filosofi Pancasila sebagai ruh kode etik",
      "Growth mindset untuk refleksi diri",
      "Pendidikan nilai dalam praktik harian",
    ],
  },
  {
    letter: "C3",
    word: "Change",
    title: "Perubahan Pola Pikir",
    icon: RefreshCw,
    accent: "from-orange-500/15 to-orange-500/0 text-orange-700 dark:text-orange-400",
    body:
      "Saya berubah dari memandang kode etik sebagai kumpulan larangan normatif menjadi pedoman moral kontekstual. Saya juga berubah dari melihat guru sekadar sebagai pengajar materi menjadi guru sebagai penghidup nilai yang menjaga integritas di setiap interaksi, baik di dalam maupun di luar kelas.",
    highlights: [
      "Dari menghafal pasal → memahami konteks",
      "Dari pengajar materi → penghidup nilai",
      "Dari formalitas → kesadaran moral hidup",
    ],
  },
  {
    letter: "C4",
    word: "Challenge",
    title: "Tantangan yang Dihadapi",
    icon: Mountain,
    accent: "from-rose-500/15 to-rose-500/0 text-rose-700 dark:text-rose-400",
    body:
      "Lemahnya pengawasan sekolah dan relasi kuasa yang timpang antara guru dan murid menjadi pemicu pelanggaran etik. Saya harus berhati-hati menempatkan diri pada situasi yang berpotensi disalahartikan, sekaligus aktif mendukung terciptanya mekanisme pengaduan yang aman di sekolah.",
    highlights: [
      "Relasi kuasa guru-murid yang timpang",
      "Lemahnya mekanisme pengaduan",
      "Interaksi tanpa pengawasan berisiko",
    ],
  },
];

export function Reflection4C() {
  return (
    <section
      id="refleksi"
      className="scroll-mt-20 border-y border-border/40 bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Refleksi Pengalaman Belajar
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Kerangka 4C — Concept, Connection, Change, Challenge
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Empat kuadran refleksi yang menghubungkan materi kode etik dengan
            materi lain dalam mata kuliah Filosofi Pendidikan dan Pendidikan
            Nilai.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ITEMS.map((item, idx) => (
            <Reveal key={item.letter} delay={idx * 0.08}>
              <Card className="group h-full overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent}`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {item.letter}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {item.word}
                      </p>
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-lg font-semibold leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <Card className="border-dashed border-primary/30 bg-primary/5">
            <CardContent className="flex flex-col items-start gap-2 p-5 sm:flex-row sm:items-center sm:gap-4">
              <Badge className="rounded-full bg-primary text-primary-foreground">
                Inti Refleksi
              </Badge>
              <p className="text-sm text-foreground/90 sm:text-base">
                Kode etik bukan sekadar aturan administratif, melainkan{" "}
                <span className="font-semibold">
                  pedoman moral yang menghidupkan seluruh relasi profesional
                  guru
                </span>{" "}
                — dari ruang kelas hingga masyarakat luas.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
