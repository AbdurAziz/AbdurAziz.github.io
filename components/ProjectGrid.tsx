"use client";

import softwareprojects from "@/content/softwareprojects.json";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  devpost?: string;
  pdf?: string;
};

export function SoftwareProjectGrid() {
  const list = softwareprojects as Project[];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {list.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i*0.05 }}
          className="rounded-2xl p-6 bg-slate-900/40 dark:bg-slate-900/40 shadow-soft border border-slate-800 dark:border-slate-800 flex flex-col"
        >
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-slate-300 flex-1">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
            {p.tech.map((t) => (
              <span key={t} className="border border-slate-700 rounded-full px-2 py-1">{t}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            {p.github && <a className="inline-flex items-center gap-1 hover:underline" href={p.github} target="_blank" rel="noopener noreferrer"><Github size={16}/>Code</a>}
            {p.demo && <a className="inline-flex items-center gap-1 hover:underline" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16}/>Live</a>}
            {p.devpost && <a className="inline-flex items-center gap-1 hover:underline" href={p.devpost} target="_blank" rel="noopener noreferrer"><ExternalLink size={16}/>DevPost</a>}
            {p.pdf && <a className="inline-flex items-center gap-1 hover:underline" href={p.pdf} target="_blank" rel="noopener noreferrer"><FileText size={16}/>Docs</a>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
