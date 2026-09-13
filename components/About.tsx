"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-7 md:p-12"
        >
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/90">
                About
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Curious by nature.
                <br />
                <span className="text-cyan-200">Builder by choice.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-300 md:text-lg">
              <p>
                I&apos;m a Computing and Information Systems
                undergraduate at Wayamba University of Sri Lanka,
                passionate about turning ideas into useful digital
                products.
              </p>

              <p>
                I enjoy exploring software development, web
                technologies, data, and problem solving. My approach
                is simple: learn continuously, build consistently,
                and improve with every project.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-5 md:grid-cols-4">
                <Stat number="01" label="Curiosity" />
                <Stat number="∞" label="Learning" />
                <Stat number="24/7" label="Ideas" />
                <Stat number="100%" label="Growth" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-300/15 bg-slate-900/60 p-4 shadow-[0_15px_35px_rgba(8,145,178,0.08)] backdrop-blur-xl">
      <p className="text-2xl font-semibold text-cyan-300">{number}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{label}</p>
    </div>
  );
}