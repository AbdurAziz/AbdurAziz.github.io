"use client";

import hardwareprojects from "@/content/hardwareprojects.json";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

type PdfLink = {
  title: string;
  url: string;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  // legacy single-pdf support
  pdf?: string;
  // preferred: multiple named pdfs
  pdfs?: PdfLink[];
};

export function HardwareProjectGrid() {
  const list = hardwareprojects as Project[];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {list.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-2xl p-6 bg-slate-900/40 dark:bg-slate-900/40 shadow-soft border border-slate-800 dark:border-slate-800 flex flex-col"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
          <p className="mt-2 text-black dark:text-slate-300 flex-1">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
            {p.tech.map((t) => (
              <span key={t} className="border border-slate-700 rounded-full px-2 py-1">{t}</span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 flex-wrap text-slate-900 dark:text-slate-100">
            {p.github && (
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Code
              </a>
            )}

            {p.demo && (
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live
              </a>
            )}

            {/* Prefer the new `pdfs` array; fall back to legacy `pdf` */}
            {p.pdfs &&
              p.pdfs.map((pdf) => (
                <a
                  key={pdf.title}
                  className="inline-flex items-center gap-1 hover:underline"
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={16} />
                  {pdf.title}
                </a>
              ))}

            {!p.pdfs && p.pdf && (
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={p.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                PDF
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}