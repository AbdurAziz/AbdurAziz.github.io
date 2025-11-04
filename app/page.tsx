"use client";

import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { motion } from "framer-motion";

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
          I build hardware and software for the world.
        </motion.p>
      </Section>

      <Section id="about" title="About">
        <p className="prose-muted max-w-2xl">
          I'm a hardware engineer and software engineer that likes to build products that helps others for any industry.
          Currently, I'm a software engineer intern at Frigate working on all-round development. 
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectGrid />
      </Section>

      <Section id="contact" title="Contact">
        <p className="prose-muted">
          My inbox is always open. I'm open to new ideas and collaborations. I'm pretty responsive.
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-block mt-6 border border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-lg hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
        >
          Let's Connect
        </a>
      </Section>
    </>
  );
}
