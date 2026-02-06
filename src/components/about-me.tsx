"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 border-b border-zinc-800 pb-2 text-3xl font-bold"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mb-4 leading-relaxed text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
        I&apos;m a software developer who enjoys building practical and reliable tools. I work mostly with AI, automation, and backend systems.I&apos;m focused on integrating ML models into intuitive, user-friendly interfaces.
        <br/><br/>
        I enjoy turning ideas into working products quickly and keeping things simple, scalable, and useful. Always experimenting, always building.
        </motion.p>
        <motion.p
          className="mb-4 leading-relaxed text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
        </motion.p>
        <motion.p
          className="leading-relaxed text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
        </motion.p>
      </div>
    </motion.section>
  );
}
