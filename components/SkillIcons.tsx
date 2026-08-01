import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "w-[18px] h-[18px]";

function Brackets(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M9 4 5 12l4 8M15 4l4 8-4 8" />
    </svg>
  );
}
function Terminal_(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M4 5h16v14H4z" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </svg>
  );
}
function Atom(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={base} {...p}>
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Triangle(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className={base} {...p}>
      <path d="M12 3l9 18H3z" />
    </svg>
  );
}
function Wind(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={base} {...p}>
      <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 12h15a2.5 2.5 0 1 1-2.5 2.5M3 16h9a2.5 2.5 0 1 0-2.5-2.5" />
    </svg>
  );
}
function Tag(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
    </svg>
  );
}
function Brush(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M4 20c0-3 1.5-5 4-5s3 2 5 2 3-2 3-4-1.5-3-3-3l6-6" />
      <circle cx="18" cy="6" r="2" />
    </svg>
  );
}
function Hexagon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className={base} {...p}>
      <path d="M12 2l8.7 5v10L12 22l-8.7-5V7z" />
    </svg>
  );
}
function Server(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}
function Waves(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={base} {...p}>
      <path d="M2 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
    </svg>
  );
}
function Database(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={base} {...p}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}
function Grid(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className={base} {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function TableIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className={base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 10h18M9 4v16" />
    </svg>
  );
}
function Circuit(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 6h8M18 8v8M6 8v3a3 3 0 0 0 3 3h7" />
    </svg>
  );
}
function Flame(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-1-2-1-2 2 1 4 3 4 6a6 6 0 0 1-12 0c0-5 3-7 6-12z" />
    </svg>
  );
}
function Chat(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M4 4h16v11H8l-4 4z" />
    </svg>
  );
}
function GitBranch(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="9" r="2.2" />
      <path d="M6 7v10M6 11a8 8 0 0 0 8-6" />
    </svg>
  );
}
function Box(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" className={base} {...p}>
      <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  );
}
function Send(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
    </svg>
  );
}
function Coffee(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={base} {...p}>
      <path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3c-.6.6-.6 1.4 0 2M12 3c-.6.6-.6 1.4 0 2" />
    </svg>
  );
}

const iconMap: Record<string, (p: IconProps) => JSX.Element> = {
  "C++": Terminal_,
  Python: Circuit,
  TypeScript: Brackets,
  JavaScript: Brackets,
  Java: Coffee,
  React: Atom,
  "Next.js": Triangle,
  "Tailwind CSS": Wind,
  HTML5: Tag,
  CSS3: Brush,
  "Node.js": Hexagon,
  Express: Server,
  "REST APIs": Server,
  WebSockets: Waves,
  MongoDB: Database,
  PostgreSQL: Database,
  MySQL: Database,
  NumPy: Grid,
  Pandas: TableIcon,
  "Scikit-learn": Circuit,
  PyTorch: Flame,
  NLP: Chat,
  Git: GitBranch,
  Docker: Box,
  Postman: Send,
  "VS Code": Terminal_,
};

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Terminal_;
  return <Cmp className={className ?? base} />;
}
