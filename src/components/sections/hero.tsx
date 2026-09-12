"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, GraduationCap, Sparkles, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden
        className="bg-grid mask-fade-b absolute inset-0 -z-10 opacity-50"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 rounded-full border-border/60 px-3 py-1 text-xs font-medium"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Portfolio Refleksi Pembelajaran
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Geovany Ahmad{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Pahrezi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-lg text-muted-foreground sm:text-xl"
          >
            Calon Guru Informatika yang percaya bahwa pendidikan adalah{" "}
            <span className="font-semibold text-foreground">
              penghidupan nilai
            </span>
            , bukan sekadar transfer materi. Membangun integritas profesi
            melalui kode etik dan refleksi diri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="#refleksi">
                <BookOpen className="h-4 w-4" />
                Lihat Refleksi
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/60 bg-background/60 backdrop-blur"
            >
              <Link href="#tentang">
                <GraduationCap className="h-4 w-4" />
                Tentang Saya
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground"
          >
            <Badge variant="outline" className="rounded-full font-mono">
              NIM 25427693
            </Badge>
            <Badge variant="outline" className="rounded-full">
              Semester 1
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-primary/30 text-primary"
            >
              Filosofi Pendidikan & Pendidikan Nilai
            </Badge>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#tentang"
            className="flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll ke bawah"
          >
            <span>Scroll untuk menjelajah</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/60 backdrop-blur">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
