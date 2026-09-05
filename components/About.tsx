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
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
                About
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Curious by nature.
                <br />
                Builder by choice.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-neutral-600">
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
    <div className="rounded-2xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl">
      <p className="text-2xl font-semibold">{number}</p>
      <p className="mt-1 text-xs text-neutral-500">{label}</p>
    </div>
  );
}