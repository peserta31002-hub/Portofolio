import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geovany Ahmad Pahrezi — Portfolio Calon Guru Informatika",
  description:
    "Portfolio refleksi pembelajaran Geovany Ahmad Pahrezi (NIM 25427693) — Calon Guru Informatika. Karya refleksi Kode Etik Guru sebagai Fondasi Integritas Profesi Pendidik, mata kuliah Filosofi Pendidikan dan Pendidikan Nilai.",
  keywords: [
    "Geovany Ahmad Pahrezi",
    "Portfolio Calon Guru",
    "Pendidikan Informatika",
    "Kode Etik Guru",
    "Refleksi Pembelajaran",
    "Filosofi Pendidikan",
    "4C Reflection",
    "4F Framework",
  ],
  authors: [{ name: "Geovany Ahmad Pahrezi" }],
  openGraph: {
    title: "Geovany Ahmad Pahrezi — Portfolio Calon Guru Informatika",
    description:
      "Refleksi pengalaman belajar tentang Kode Etik Guru sebagai Fondasi Integritas Profesi Pendidik.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
