"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "2026",
    title: "Assistant Secretary",
    organization:
      "Association of Computing & Information Systems Students",
    description:
      "Supporting student activities, communications, event coordination, and technology-focused initiatives.",
  },

  {
    year: "2026",
    title: "University Projects",
    organization: "Wayamba University of Sri Lanka",
    description:
      "Worked on academic software and computing projects involving object-oriented programming, databases, web technologies, and data.",
  },

  {
    year: "2026",
    title: "Continuous Learning",
    organization: "Personal Development",
    description:
      "Exploring modern web development, software engineering, automation testing, cloud technologies, and data-related technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Learning through doing.
          </h2>
        </div>

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid gap-5 border-t border-neutral-300 py-8 md:grid-cols-[120px_1fr_auto]"
            >
              <span className="text-sm text-neutral-400">
                {experience.year}
              </span>

              <div>
                <h3 className="text-xl font-semibold">
                  {experience.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  {experience.organization}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                  {experience.description}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="hidden text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 md:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}