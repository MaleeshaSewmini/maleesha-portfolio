"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/70 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-neutral-300/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm text-neutral-600 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to learning & collaboration
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Computing & Information Systems
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-6xl md:text-8xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">
              Maleesha.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
            I build thoughtful digital experiences with
            code, creativity, and curiosity.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-neutral-500">
            Computing and Information Systems undergraduate
            exploring software development, web technologies,
            data, and continuous learning.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              View my work
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-white/70"
            >
              Let&apos;s connect
            </a>

            <a  href="/Maleesha%20cv1.pdf"
              download="Maleesha-Sewmini-CV.pdf"
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-white/70"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[-90px] left-0 hidden items-center gap-2 text-sm text-neutral-400 md:flex"
        >
          <ArrowDown size={16} />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}