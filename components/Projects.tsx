"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./Projectcard";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500">
            A collection of academic, personal, and technical
            projects exploring different areas of software and
            technology.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}