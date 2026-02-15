"use client";

import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SoftwareProjectGrid } from "@/components/ProjectGrid";
import { HardwareProjectGrid } from "@/components/HardwareProjectGrid";
import { SocialLinks } from "@/components/SocialLinks";
import { motion } from "framer-motion";
import { TechStack } from "@/components/TechStack";

export default function Page() {
  return (
    <>
      <Section id="hero" className="section">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m <span className="text-[var(--accent)]">Abdur Aziz</span>.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl prose-muted max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Computer Engineer who works across hardware and software systems to design backend and AI-assisted applications grounded in real-world applications
        </motion.p>
      </Section>

      <Section id="about" title="About">
        <p className="prose-muted max-w-2xl">
          I'm a <strong className="text-sky-300 font-semibold">Computer Engineer</strong> with experience across enterprise and startup environments, including two software engineering internships at <strong className="text-sky-300 font-semibold">Chevron</strong> and a full-stack role at <strong className="text-sky-300 font-semibold">Frigate</strong>. I've contributed to <strong className="text-sky-300 font-semibold">production systems</strong>, <strong className="text-sky-300 font-semibold">backend services</strong>, and data-driven tools used in real operational workflows.
        </p>
        <p className="prose-muted max-w-2xl mt-4">
          Across these roles, I've worked closely with <strong className="text-sky-300 font-semibold">engineers, product stakeholders, and cross-functional teams</strong> — translating requirements into technical solutions, clarifying tradeoffs early, and iterating based on feedback. I value <strong className="text-sky-300 font-semibold">clear communication</strong> and <strong className="text-sky-300 font-semibold">shared ownership</strong>, especially in environments where systems affect real users and operations.
        </p>
        <p className="prose-muted max-w-2xl mt-4">
          My background spans <strong className="text-sky-300 font-semibold">hardware and software systems</strong>, including <strong className="text-sky-300 font-semibold">FPGA-based digital design</strong>, <strong className="text-sky-300 font-semibold">embedded systems</strong>, <strong className="text-sky-300 font-semibold">backend architecture</strong>, and networking fundamentals. I'm particularly interested in how components interact across layers — from circuitry and state machines to APIs and distributed services.
        </p>
        <p className="prose-muted max-w-2xl mt-4">
          I'm drawn to engineering work where <strong className="text-sky-300 font-semibold">reliability</strong>, <strong className="text-sky-300 font-semibold">system design</strong>, and thoughtful collaboration matter as much as implementation.
        </p>
      </Section>

      <Section id="techstack" title="Tech Stack">
        <TechStack />
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section id="education" title="Education">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl p-6 bg-slate-900/40 shadow-soft border border-slate-800 max-w-2xl"
        >
          <header className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl font-semibold">University of Houston</h3>
              <p className="text-sm text-slate-400 mt-1">Bachelor's of Science in Computer Engineering</p>
            </div>
            <span className="text-sm text-slate-400">August 2021 — May 2025</span>
          </header>
          <p className="mt-3 text-slate-300">Cum Laude Graduate</p>
        </motion.article>
      </Section>

      <Section id="softwareprojects" title="Software Projects">
        <SoftwareProjectGrid />
      </Section>

      <Section id="hardwareprojects" title="Hardware Projects">
        <HardwareProjectGrid />
      </Section>


      <Section id="contact" title="Contact">
        <p className="prose-muted">
         Do you like programming, engineering, or anything outside of STEM? I do too and am open to talking about it.
        </p>
        <SocialLinks />
      </Section>
    </>
  );
}
