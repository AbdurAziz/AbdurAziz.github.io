"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SidebarNav() {
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const handler = () => {
      let current = "#hero";
      const sections = items.map(i => document.querySelector(i.href) as HTMLElement | null);
      sections.forEach((section, idx) => {
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= 120) current = items[idx].href;
      });
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="flex flex-col gap-3 text-slate-300">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-2 rounded-lg transition hover:bg-slate-800/50 ${active===item.href?"text-[var(--accent)]":"text-slate-300"}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
