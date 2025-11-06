"use client";

import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <motion.a
        href="mailto:abduraziz.dev@gmail.com"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Mail size={20} />
        <span>Email</span>
      </motion.a>
      
      <motion.a
        href="https://www.linkedin.com/in/abduraziz/"
        target="_blank"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </motion.a>
    </div>
  );
}