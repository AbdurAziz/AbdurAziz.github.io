"use client";

import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
      <aside className="sticky top-0 h-screen hidden md:flex items-start pt-12">
        <SidebarNav />
      </aside>
      <main className="pt-12">{children}</main>
    </div>
    <Footer />
    <ThemeToggle />
  );
}
