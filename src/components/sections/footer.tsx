"use client";

import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-mono text-sm font-bold text-primary-foreground">
                GA
              </span>
              <span className="font-semibold">Geovany Ahmad Pahrezi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Calon Guru Informatika yang sedang membentuk fondasi integritas
              profesionalnya melalui refleksi kode etik dan filosofi pendidikan.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Mata Kuliah
            </p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Filosofi Pendidikan dan Pendidikan Nilai
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Topik: Kode Etik Guru sebagai Fondasi Integritas Profesi Pendidik
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                Semester 1 — Tahun Ajaran 2025/2026
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Identitas
            </p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                NIM:{" "}
                <span className="font-mono font-medium text-foreground">
                  25427693
                </span>
              </li>
              <li>Program Studi: Pendidikan Informatika</li>
              <li>
                Jenjang: Sarjana Pendidikan (S1)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Geovany Ahmad Pahrezi. Refleksi
            pengalaman belajar LK2 Seminar.
          </p>
          <p>
            Dibuat dengan{" "}
            <span className="font-medium text-foreground">Next.js</span> &amp;{" "}
            <span className="font-medium text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
