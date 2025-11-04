"use client";

import { motion } from "framer-motion";

export function Section({ id, title, children, className = "" }: { id: string, title?: string, children: React.ReactNode, className?: string }) {
  return (
    <section id={id} className={`section py-16 md:py-24 ${className}`}>
      {title && (
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
}
