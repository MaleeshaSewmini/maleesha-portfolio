"use client";

import { motion } from "framer-motion";
import { Code2, LayoutPanelTop, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, clean, and scalable interfaces with modern frameworks and thoughtful UX decisions.",
    points: ["Next.js applications", "Responsive UI design", "Performance-focused builds"],
  },
  {
    icon: LayoutPanelTop,
    title: "UI / UX Design",
    description:
      "Turning ideas into polished experiences with clarity, hierarchy, and a strong visual rhythm.",
    points: ["Modern layouts", "Component systems", "Accessible interfaces"],
  },
  {
    icon: Sparkles,
    title: "Problem Solving",
    description:
      "Approaching technical challenges with curiosity, iteration, and a continuous learning mindset.",
    points: ["Software thinking", "Learning through building", "Creative experimentation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
            What I do
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Thoughtful digital work with real-world purpose.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.05)] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-lg shadow-neutral-200">
                  <Icon size={20} />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
