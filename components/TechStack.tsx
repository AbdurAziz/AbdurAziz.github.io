"use client";

import techData from "@/content/techstack.json";

export function TechStack() {
  return (
    <div className="mt-6">
      <div className="grid gap-6 md:grid-cols-3">
        {techData.map((cat: any) => (
          <article key={cat.title} className="rounded-2xl p-6 bg-slate-900/40 shadow-soft border border-slate-800">
            <header className="flex items-center gap-3">
              <div className="text-3xl">{cat.icon ?? "🧰"}</div>
              <div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                {cat.subtitle ? <p className="text-sm text-slate-400">{cat.subtitle}</p> : null}
              </div>
            </header>
            <div className="mt-4 prose-muted">
              <p className="text-slate-300">Tech stack:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.techs.map((t: string) => (
                  <span key={t} className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3 py-1 text-sm text-slate-100 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
