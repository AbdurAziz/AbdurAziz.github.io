"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme preference
    const saved = localStorage.getItem("theme");
    if (saved) {
      const isDarkMode = saved === "dark";
      setIsDark(isDarkMode);
      applyTheme(isDarkMode);
    } else {
      // Default to dark mode
      applyTheme(true);
    }
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty("--bg", "#0a192f");
      root.style.setProperty("--text", "#e6f1ff");
      root.style.setProperty("--muted", "#8892b0");
      root.style.setProperty("--accent", "#64ffda");
    } else {
      root.style.setProperty("--bg", "#ffffff");
      root.style.setProperty("--text", "#0a192f");
      root.style.setProperty("--muted", "#4a5568");
      root.style.setProperty("--accent", "#0ea5e9");
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    applyTheme(newIsDark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition z-50"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}