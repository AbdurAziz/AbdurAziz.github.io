"use client";

import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SoftwareProjectGrid } from "@/components/ProjectGrid";
import { HardwareProjectGrid } from "@/components/HardwareProjectGrid";
import { SocialLinks } from "@/components/SocialLinks";
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
          Oil & Gas, Fintech, Automotive, Robotics, you name it.
        </p>
      </Section>
      <Section id="about" title="Currently....">
        <p className="prose-muted max-w-2xl">
          I’m a Computer Engineering graduate with experience across three software engineering internships and a year-long Python senior design project focused on real-world systems.
          I’ve built backend and full-stack software used in operational workflows, and I enjoy working on problems where reliability and system design matter.

          I’ve also participated in multiple software hackathons, including RowdyHacks (2020), Squarespace Hackathon (2020), and Citrus Hacks (2021), and Cal-Hacks(2023 and 2024), 
          where I not only got to team up with other passionate developers to sharpen my skills in rapid prototyping and innovative thinking, but also met a lot of amazing people along the way and made great connections in the tech community.
          
        </p>
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
