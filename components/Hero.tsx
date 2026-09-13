"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[7%] h-[22rem] w-[22rem] rounded-full bg-teal-400/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/5 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Open to learning & collaboration
          </motion.div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
            Computing & Information Systems
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl xl:text-[5.4rem]">
            Hi, I&apos;m <span className="gradient-text">Maleesha</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            I build thoughtful digital experiences with code, creativity, and curiosity.
          </motion.p>

          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            Computing and Information Systems undergraduate exploring software development, web technologies,
            data, and continuous learning while creating ideas with purpose.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(45,212,191,0.28)] transition"
            >
              View my work
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/25 hover:bg-slate-800/70"
            >
              Let&apos;s connect
            </motion.a>

            <motion.a
              href="/Maleesha%20cv1.pdf"
              download="Maleesha-Sewmini-CV.pdf"
              whileHover={{ y: -2 }}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/25 hover:bg-slate-800/70"
            >
              <Download size={17} />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-8 top-12 hidden h-24 w-24 rounded-full border border-cyan-300/25 bg-cyan-400/10 blur-sm md:block" />
          <div className="absolute -right-6 bottom-5 hidden h-20 w-20 rounded-full border border-teal-300/25 bg-teal-400/10 blur-sm md:block" />

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-900/60 p-3 shadow-[0_30px_80px_rgba(8,145,178,0.2)] backdrop-blur-xl"
          >
            <img
              src="/my.png"
              alt="Maleesha profile"
              className="h-[480px] w-full rounded-[1.5rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-5 right-3 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-900/80 px-3 py-2 text-xs font-medium text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-cyan-300" />
            Creative developer
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-[-90px] left-0 hidden items-center gap-2 text-sm text-slate-400 md:flex"
        >
          <ArrowDown size={16} className="text-cyan-300" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}