"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "Pearson (UK) Assured Diploma in IT",
    issuer: "Pearson (UK)",
    year: "2024",
    logo: "/logo/Pearson.jpg",
    description:
      "A recognized IT qualification covering fundamental computing, software, web development, and information technology concepts.",
  },
  {
    title: "AWS Fundamentals of Machine Learning and Artificial Intelligence course",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    logo: "/logo/amazon.jpg",
    description:
      "A foundational course covering key concepts of artificial intelligence and machine learning, including common ML approaches, applications, and AWS machine learning services.",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    logo: "/logo/amazon.jpg",
    description:
      "Covered core Java concepts, object-oriented principles, problem solving, and structured application logic.",
  },
  {
    title: "DataBricks Fundementals Accrediation",
    issuer: "Databricks",
    year: "2025",
    logo: "/logo/data.png",
    description:
      "Explored user-centered design, interfaces, usability thinking, and interaction design principles.",
  },

{
    title: "Wayaxtreme 4.0",
    issuer: "IEEE Student Branch of Wayamba University of Sri Lanka",
    year: "2025",
    logo: "/logo/ieee.jpg",
    description:
      "Explored user-centered design, interfaces, usability thinking, and interaction design principles.",
  },


];

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/90">
            Certificates
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Learning milestones that shaped my journey.
          </h2>
        </div>

        {/* Certificate Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{ y: -6 }}
              className="group rounded-[1.75rem] border border-cyan-300/15 bg-slate-900/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-900/70"
            >

              {/* Top */}
              <div className="flex items-center justify-between gap-3">

                {/* Logo + Issuer */}
                <div className="flex items-center gap-3">

                  {/* Company Logo */}
<div className="flex h-14 min-w-14 max-w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-xl">
  <Image
    src={certificate.logo}
    alt={`${certificate.issuer} logo`}
    width={70}
    height={50}
    className="h-auto max-h-10 w-auto max-w-full object-contain"
  />
</div>

                  {/* Issuer */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
                      Issued by
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-200">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <span className="rounded-full border border-cyan-300/15 bg-slate-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-300">
                  {certificate.year}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="mt-6 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-100">
                {certificate.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {certificate.description}
              </p>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:text-cyan-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Verified learning
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10 group-hover:text-cyan-200">
                  <ArrowUpRight size={15} />
                </div>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}