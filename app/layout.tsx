import type { Metadata } from "next";
import "./globals.css";
import { SidebarNav } from "@/components/SidebarNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A clean, Brittany-inspired portfolio in Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
          <aside className="sticky top-0 h-screen hidden md:flex items-start pt-12">
            <SidebarNav />
          </aside>
          <main className="pt-12">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
