"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Ganti tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-border/60 bg-background/60 backdrop-blur hover:bg-accent"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-5 w-5 text-amber-500" />
        ) : (
          <Moon className="h-5 w-5 text-emerald-700" />
        )
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
