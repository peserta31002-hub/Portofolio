"use client";

import {
  ShieldAlert,
  EyeOff,
  LifeBuoy,
  BookHeart,
  Smartphone,
  Quote,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const COMMITMENTS = [
  {
    icon: ShieldAlert,
    title: "Berhati-hati menempatkan diri",
    body: "Menghindari situasi yang berpotensi disalahartikan, terutama yang berkaitan dengan relasi kuasa guru-murid.",
  },
  {
    icon: EyeOff,
    title: "Menghindari interaksi tanpa pengawasan",
    body: "Tidak melakukan interaksi privat tanpa pengawasan yang dapat menimbulkan penyalahgunaan relasi kuasa.",
  },
  {
    icon: LifeBuoy,
    title: "Mendukung mekanisme pengaduan aman",
    body: "Secara aktif mendukung terciptanya mekanisme pengaduan yang aman dan terpercaya di lingkungan sekolah.",
  },
  {
    icon: BookHeart,
    title: "Menghidupkan kode etik sebagai kesadaran moral",
    body: "Menjadikan kode etik bukan sekadar dokumen formal, melainkan bagian dari kesadaran moral yang dihidupi setiap hari.",
  },
  {
    icon: Smartphone,
    title: "Mendampingi siswa di era digital",
    body: "Mendampingi peserta didik menghadapi isu literasi digital dan jejak digital sebagai bagian dari tanggung jawab profesional.",
  },
];

export function Commitment() {
  return (
    <section id="komitmen" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Komitmen Saya
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Janji Profesional sebagai Calon Guru Informatika
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Lima komitmen konkret yang saya pegang sebagai bentuk
            pertanggungjawaban moral setelah mempelajari kode etik guru.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {COMMITMENTS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06}>
              <Card className="group h-full border-border/60 bg-card/80 backdrop-blur transition-all hover:border-primary/40 hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-5 sm:p-6">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/30">
            <CardContent className="relative p-8 sm:p-12">
              <Quote
                className="absolute right-6 top-6 h-12 w-12 text-primary/20"
                aria-hidden
              />
              <div className="relative">
                <p className="text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                  &ldquo;Guru bukan sekadar pengajar materi, melainkan{" "}
                  <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text font-semibold text-transparent">
                    penghidup nilai
                  </span>
                  &nbsp;yang menjaga integritas di setiap interaksi.&rdquo;
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  — Geovany Ahmad Pahrezi, refleksi LK2 Seminar
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
