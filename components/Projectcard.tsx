"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
    >
      {/* Project image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />

        <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-gray/60 px-3 py-1 text-xs font-medium backdrop-blur-xl">
          {project.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-neutral-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => {
            const badgeColors: Record<string, string> = {
              Java: "border border-black bg-black text-white",
              OOP: "border border-black bg-black text-white",
              Swing: "border border-black bg-black text-white",
              MySQL: "border border-black bg-black text-white",
              JDBC: "border border-black bg-black text-white",
              "Next.js": "border border-black bg-black text-white",
              TypeScript: "border border-black bg-black text-white",
              Tailwind: "border border-black bg-black text-white",
              Supabase: "border border-black bg-black text-white",
              Python: "border border-black bg-black text-white",
              Pandas: "border border-black bg-black text-white",
              NumPy: "border border-black bg-black text-white",
              "Machine Learning": "border border-black bg-black text-white",
              MediaPipe: "border border-black bg-black text-white",
              OpenCV: "border border-black bg-black text-white",
            };

            return (
              <span
                key={technology}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  badgeColors[technology] || "border border-neutral-200 bg-neutral-100 text-neutral-700"
                }`}
              >
                {technology}
              </span>
            );
          })}
        </div>

        <div className="mt-7 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <ArrowUpRight size={16} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}