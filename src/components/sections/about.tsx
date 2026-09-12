"use client";

import {
  GraduationCap,
  Heart,
  Compass,
  ShieldCheck,
  BookOpenCheck,
  Code2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

const STATS = [
  { label: "NIM", value: "25427693", icon: GraduationCap },
  { label: "Semester", value: "1 (Ganjil)", icon: BookOpenCheck },
  { label: "Mata Kuliah", value: "Filosofi Pendidikan & Pendidikan Nilai", icon: Compass },
  { label: "Topik Refleksi", value: "Kode Etik Guru", icon: ShieldCheck },
];

const INTERESTS = [
  { label: "Pendidikan Informatika", icon: Code2 },
  { label: "Literasi Digital", icon: BookOpenCheck },
  { label: "Growth Mindset", icon: Compass },
  { label: "Etika Profesi Guru", icon: ShieldCheck },
  { label: "Jejak Digital", icon: Heart },
  { label: "Filosofi Pancasila", icon: Heart },
];

export function About() {
  return (
    <section id="tentang" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Tentang Saya
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Dari pengajar materi, menuju penghidup nilai
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Seorang mahasiswa Pendidikan Informatika yang sedang menempuh Semester
            1, sekaligus calon pendidik yang sedang membentuk fondasi integritas
            profesionalnya.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Bio */}
          <Reveal delay={0.05} className="lg:col-span-3">
            <Card className="h-full border-border/60 bg-card/60 backdrop-blur">
              <CardContent className="space-y-4 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Heart className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold">Biografi Singkat</h3>
                </div>
                <p className="leading-relaxed text-foreground/90">
                  Saya adalah Geovany Ahmad Pahrezi, mahasiswa Pendidikan
                  Informatika yang percaya bahwa tugas seorang guru tidak
                  berhenti pada menyampaikan materi teknis. Sebagai calon pendidik
                  di era digital, saya melihat kode etik bukan sekadar kumpulan
                  larangan administratif, melainkan pedoman moral yang lahir
                  dari kasus-kasus nyata di masyarakat.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Topik refleksi utama saya adalah{" "}
                  <span className="font-semibold text-foreground">
                    Kode Etik Guru sebagai Fondasi Integritas Profesi Pendidik
                  </span>
                  . Saya mengeksplorasi bagaimana kode etik berakar dari
                  filosofi Pancasila, terhubung dengan growth mindset, dan
                  dihidupkan dalam praktik mengajar sehari-hari, termasuk saat
                  mendampingi peserta didik menghadapi isu literasi digital dan
                  jejak digital.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {INTERESTS.map((item) => (
                    <Badge
                      key={item.label}
                      variant="secondary"
                      className="gap-1.5 rounded-full"
                    >
                      <item.icon className="h-3 w-3 text-primary" />
                      {item.label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <Card className="h-full border-border/60 bg-gradient-to-br from-primary/10 via-card to-accent/30 backdrop-blur">
              <CardContent className="grid h-full grid-cols-2 gap-4 p-6 sm:p-8">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 rounded-xl border border-border/40 bg-background/60 p-4 backdrop-blur"
                  >
                    <stat.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-sm font-semibold leading-tight">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
