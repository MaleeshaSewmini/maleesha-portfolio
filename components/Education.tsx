"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-8 md:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-slate-900/70 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                <GraduationCap size={22} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/90">
                  Education
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Undergraduate in Bsc.(Hons) in Computer Science
                </h2>

                <p className="mt-2 text-slate-300">
                  Wayamba University of Sri Lanka
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Faculty of Applied Sciences
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  2024 present
                </p>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-base leading-7 text-slate-300">
                Exploring software development, databases,
                statistics, computer networks, object-oriented
                programming, data analysis, and modern computing
                technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}