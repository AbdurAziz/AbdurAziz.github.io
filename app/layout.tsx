import type { Metadata } from "next";
import "./globals.css";
import { LayoutContent } from "@/components/LayoutContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A clean, Brittany-inspired portfolio in Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
