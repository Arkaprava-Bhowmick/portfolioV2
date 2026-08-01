"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`w-9 h-9 shrink-0 rounded-lg border border-foreground/10 flex items-center justify-center text-foreground/70 transition-colors hover:text-accent hover:border-accent ${className}`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[17px] h-[17px]">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
          <path d="M20.7 15.3a8.7 8.7 0 0 1-11-11 9 9 0 1 0 11 11z" />
        </svg>
      )}
    </button>
  );
}
