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
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight"
        >
          Maleesha Sewmini<span className="text-neutral-400">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-600 transition hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute left-4 right-4 top-16 rounded-3xl border border-white/60 bg-white/80 p-5 shadow-xl backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-white"
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