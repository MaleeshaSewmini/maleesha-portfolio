"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-cyan-300/15 bg-slate-950/60 px-4 py-3 shadow-[0_18px_50px_rgba(14,165,233,0.12)] backdrop-blur-xl md:px-5">
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-white md:text-lg"
        >
          Maleesha <span className="text-cyan-300">Sewmini</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/15 bg-slate-900/80 text-slate-100 shadow-lg shadow-cyan-500/10 transition hover:border-cyan-300/30 hover:text-cyan-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {open && (
          <div className="absolute left-4 right-4 top-16 rounded-[1.5rem] border border-cyan-300/15 bg-slate-950/90 p-4 shadow-[0_25px_60px_rgba(2,8,23,0.9)] backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}