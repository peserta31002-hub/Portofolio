"use client";

import {
  Eye,
  HeartPulse,
  Lightbulb,
  Rocket,
  Users,
  Baby,
  Home,
  Building2,
  Briefcase,
  Network,
  Landmark,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

interface FlowStep {
  letter: string;
  word: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

const FOUR_F: FlowStep[] = [
  {
    letter: "F1",
    word: "Facts",
    description: "Menelaah fakta peristiwa pelanggaran secara objektif tanpa interpretasi dini.",
    icon: Eye,
    accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  {
    letter: "F2",
    word: "Feeling",
    description: "Memaknai perasaan yang muncul dari kasus, baik sebagai guru maupun sebagai peserta didik.",
    icon: HeartPulse,
    accent: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  {
    letter: "F3",
    word: "Finding",
    description: "Menemukan sebab-akibat, pola, dan akar masalah dari pelanggaran yang terjadi.",
    icon: Lightbulb,
    accent: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  },
  {
    letter: "F4",
    word: "Future",
    description: "Merumuskan langkah pencegahan dan komitmen konkret untuk masa depan praktik mengajar.",
    icon: Rocket,
    accent: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
  },
];

interface Realm {
  name: string;
  description: string;
  icon: LucideIcon;
}

const SEVEN_REALMS: Realm[] = [
  { name: "Peserta Didik", description: "Kewajiban utama guru — melindungi, mendidik, dan menghormati.", icon: Baby },
  { name: "Orang Tua/Wali", description: "Membangun komunikasi terbuka dan kolaboratif dengan keluarga.", icon: Home },
  { name: "Masyarakat", description: "Berkontribusi positif dan menjaga citra profesi di publik.", icon: Users },
  { name: "Sekolah & Rekan Sejawat", description: "Bekerja sama profesional dan saling menjaga integritas.", icon: Building2 },
  { name: "Profesi", description: "Menjaga martabat dan kompetensi keguruan secara berkelanjutan.", icon: Briefcase },
  { name: "Organisasi Profesi", description: "Aktif berpartisipasi dalam PGRI dan organisasi profesi lainnya.", icon: Network },
  { name: "Pemerintah", description: "Mematuhi regulasi pendidikan dan berkontribusi pada kebijakan.", icon: Landmark },
];

export function Frameworks() {
  return (
    <section
      id="kerangka"
      className="scroll-mt-20 border-y border-border/40 bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Kerangka Refleksi
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Dua Kerangka Sistematis untuk Merefleksikan Praktik Guru
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Kerangka 4F untuk refleksi kasus pelanggaran, dan tujuh ranah
            kewajiban guru sebagai peta relasi profesional.
          </p>
        </Reveal>

        {/* 4F Framework */}
        <Reveal delay={0.05} className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
              4F
            </span>
            <h3 className="text-xl font-semibold">Kerangka Refleksi Kasus — 4F</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOUR_F.map((step, idx) => (
              <Card
                key={step.letter}
                className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {idx < FOUR_F.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-0 top-1/2 hidden h-px w-4 -translate-y-1/2 translate-x-full bg-border lg:block"
                  />
                )}
                <CardContent className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.accent}`}
                    >
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {step.letter}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-semibold">{step.word}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        {/* 7 Ranah */}
        <Reveal delay={0.1} className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
              7
            </span>
            <h3 className="text-xl font-semibold">
              Tujuh Ranah Kewajiban Profesional Guru
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SEVEN_REALMS.map((realm, idx) => (
              <Card
                key={realm.name}
                className={`group border-border/60 bg-card/80 backdrop-blur transition-all hover:border-primary/40 hover:shadow-sm ${
                  idx === SEVEN_REALMS.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="flex items-start gap-3 p-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/60 text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <realm.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {realm.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {realm.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
