"use client";

import exp from "@/content/experience.json";
import { motion } from "framer-motion";
import { CompanyLogo } from "./CompanyLogo";

type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  points: string[];
  link?: string;
};

export function ExperienceTimeline() {
  const roles = exp as Role[];
  return (
    <div className="space-y-8">
      {roles.map((r, i) => (
        <motion.article
          key={r.company + r.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i*0.05 }}
          className="rounded-2xl p-6 bg-slate-900/40 shadow-soft border border-slate-800"
        >
          <header className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <CompanyLogo company={r.company} />
              <h3 className="text-xl font-semibold">
                {r.title} · <a className="hover:underline" href={r.link ?? '#'} target="_blank">{r.company}</a>
              </h3>
            </div>
            <span className="text-sm text-slate-400">{r.start} — {r.end}</span>
          </header>
          <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-2">
            {r.points.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
