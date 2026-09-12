"use client";

import { FileText, GitCompare, Network, CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

interface Artifact {
  code: string;
  title: string;
  icon: typeof FileText;
  accent: string;
  description: string;
  why: string;
  supports: string;
  supportLabel: string;
}

const ARTIFACTS: Artifact[] = [
  {
    code: "4.1",
    title: "Refleksi Kasus Pelanggaran Etika Profesi Guru",
    icon: FileText,
    accent: "text-rose-600 bg-rose-500/10",
    description:
      "Kajian kasus nyata pelanggaran kode etik guru yang dianalisis menggunakan kerangka 4F (Facts, Feeling, Finding, Future). Melatih kemampuan menelaah fakta, memaknai perasaan, menemukan sebab-akibat, dan merumuskan langkah pencegahan di masa depan.",
    why: "Melatih pengenalan pola pelanggaran etik dari peristiwa nyata di masyarakat.",
    supports: "Mendukung poin Challenge — mengungkap bahwa lemahnya pengawasan dan relasi kuasa timpang menjadi pemicu utama pelanggaran.",
    supportLabel: "Mendukung Challenge",
  },
  {
    code: "4.2",
    title: "Prinsip Etika Profesi Guru — Perbandingan 2013 vs 2024",
    icon: GitCompare,
    accent: "text-amber-600 bg-amber-500/10",
    description:
      "Perbandingan dua rujukan Kode Etik Guru Indonesia (versi 2013 dan 2024) beserta ringkasan dalam bentuk infografis. Menunjukkan kemampuan merangkum ketentuan kompleks menjadi materi edukasi publik yang ringkas dan mudah dipahami.",
    why: "Melatih pemahaman dan perbandingan ketentuan normatif kode etik secara formal.",
    supports: "Mendukung poin Concept — rangkuman tujuh ranah kewajiban guru membentuk pemahaman dasar cakupan kode etik secara utuh.",
    supportLabel: "Mendukung Concept",
  },
  {
    code: "4.4",
    title: "Koneksi Antar Materi (4C)",
    icon: Network,
    accent: "text-emerald-600 bg-emerald-500/10",
    description:
      "Analisis yang menghubungkan konsep Landasan Filosofi Pendidikan Nasional, Pola Pikir Bertumbuh, Pendidikan Nilai, dan Kode Etik Guru dalam satu kerangka utuh. Menunjukkan kemampuan melihat keterkaitan antar topik mata kuliah.",
    why: "Melatih kemampuan sintesis — membangun pemahaman utuh tentang peran guru berintegritas.",
    supports: "Mendukung poin Connection & Change — menghubungkan Pancasila sebagai ruh kode etik dengan growth mindset dan pendidikan nilai.",
    supportLabel: "Mendukung Connection & Change",
  },
];

export function Artifacts() {
  return (
    <section id="artefak" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Artefak Pembelajaran
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Bukti Dukung Hasil Refleksi
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Tiga aktivitas pembelajaran yang membentuk alur belajar bergerak
            dari kasus konkret, ke prinsip normatif, lalu ke sintesis utuh.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ARTIFACTS.map((artifact, idx) => (
            <Reveal key={artifact.code} delay={idx * 0.08}>
              <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardHeader className="gap-4 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${artifact.accent}`}
                    >
                      <artifact.icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-3xl font-bold leading-none text-muted-foreground/40">
                      {artifact.code}
                    </span>
                  </div>
                  <CardTitle className="text-base font-semibold leading-snug">
                    {artifact.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {artifact.description}
                  </p>

                  <div className="mt-auto space-y-3 border-t border-border/60 pt-4">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Mengapa Dipilih
                      </p>
                      <p className="text-xs leading-relaxed text-foreground/80">
                        {artifact.why}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg bg-accent/40 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <div>
                        <Badge
                          variant="secondary"
                          className="mb-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
                        >
                          {artifact.supportLabel}
                        </Badge>
                        <p className="text-xs leading-relaxed text-foreground/80">
                          {artifact.supports}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-border/60 bg-secondary/40 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
              <span className="font-semibold">Alur belajar: </span>
              <span className="text-muted-foreground">
                dari mengenali kasus nyata pelanggaran (Aktivitas 4.1) →
                memahami aturan formal secara komparatif (Aktivitas 4.2) →
                mengintegrasikan pemahaman dengan filosofi pendidikan, growth
                mindset, dan pendidikan nilai (Aktivitas 4.4). Alur ini
                merepresentasikan perkembangan kompetensi dari memahami kasus
                konkret, hingga membangun pemahaman utuh tentang peran guru
                sebagai pendidik berintegritas.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
