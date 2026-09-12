"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Refleksi 4C", href: "#refleksi" },
  { label: "Artefak", href: "#artefak" },
  { label: "Kerangka", href: "#kerangka" },
  { label: "Komitmen", href: "#komitmen" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="group flex items-center gap-2"
          aria-label="Geovany Ahmad Pahrezi"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-mono text-sm font-bold tracking-tight text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            GA
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Geovany Ahmad Pahrezi
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu navigasi"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
