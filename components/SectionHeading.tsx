export function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`font-mono text-[13px] text-accent flex items-center gap-2.5 mb-[18px] tracking-wide ${
        center ? "justify-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

export function Headline({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-semibold text-[28px] sm:text-[32px] md:text-[40px] mb-11 text-foreground">
      {children}
    </h2>
  );
}
