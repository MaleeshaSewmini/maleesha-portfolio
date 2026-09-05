"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to turn ideas into things."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-[1.7rem] p-7"
            >
              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/80 bg-white/50 px-4 py-2 text-sm text-neutral-600 backdrop-blur-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}