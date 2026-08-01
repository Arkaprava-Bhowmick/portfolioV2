"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-background/75 backdrop-blur-md border-b border-foreground/10">
        <nav className="max-w-wrap mx-auto px-6 h-[60px] flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-mono font-semibold text-sm text-foreground"
          >
            <span className="w-[26px] h-[26px] rounded-md bg-accent flex items-center justify-center font-display font-bold text-xs text-accent-foreground">
              AB
            </span>
            Arkaprava.Techdev
          </a>

          <div className="hidden md:flex gap-1 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group font-mono text-[13px] text-foreground/70 px-3 py-2 rounded-md border border-transparent flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground hover:bg-foreground/[0.04] hover:border-foreground/10"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-foreground/40 group-hover:bg-accent transition-colors duration-200" />
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex font-mono text-[13px] px-3.5 py-2 rounded-md border border-foreground/20 text-foreground transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:-translate-y-px"
            >
              Say hello →
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="flex flex-col gap-[5px] z-[200] bg-transparent border-none p-1"
            >
              <span
                className={`w-[22px] h-0.5 bg-foreground rounded transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`w-[22px] h-0.5 bg-foreground rounded transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`w-[22px] h-0.5 bg-foreground rounded transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center gap-7 z-[150] transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-mono text-xl text-foreground"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
