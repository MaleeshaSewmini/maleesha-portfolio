"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";


export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-16"
        >
          {/* Subtle decoration */}
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Let&apos;s build something interesting.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-neutral-400">
              I&apos;m always interested in learning, collaborating,
              and exploring interesting ideas.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                <Mail size={16} />
                Email me
                <ArrowUpRight size={16} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/MaleeshaSewmini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:bg-white/10"
              >
                <span aria-hidden="true" className="text-xs font-semibold">
                  GH
                </span>
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/maleesha-sewmini-2a09b2268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition hover:bg-white/10"
              >
                <span aria-hidden="true" className="text-xs font-semibold">
                  in
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
