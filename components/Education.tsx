import Reveal from "./Reveal";
import { Eyebrow, Headline } from "./SectionHeading";

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11.5V17c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5M22 9v6" />
    </svg>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative z-[1] pt-24 md:pt-28 pb-6">
      <Reveal className="max-w-wrap mx-auto px-6">
        <Eyebrow>Education</Eyebrow>
        <Headline>Where it started</Headline>

        <div className="border border-foreground/10 rounded-2xl p-7 sm:p-8 bg-foreground/[0.02] flex flex-col sm:flex-row gap-6 sm:gap-8 transition-colors duration-300 hover:border-foreground/20">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
              <GraduationCapIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1">
            <div className="font-mono text-xs text-accent mb-2">2022 — 2026</div>
            <h3 className="font-display text-[19px] sm:text-[21px] font-semibold mb-1">
              B.Tech in Information Technology
            </h3>
            <div className="text-foreground/70 text-sm mb-4">
              Government College of Engineering and Leather Technology
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-6">
              <li className="text-[13.5px] text-foreground/70 pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-accent before:font-bold">
                Core coursework: Data Structures, DBMS, OS, ML
              </li>
              <li className="text-[13.5px] text-foreground/70 pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-accent before:font-bold">
                Academic projects in applied AI &amp; web systems
              </li>
              <li className="text-[13.5px] text-foreground/70 pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-accent before:font-bold">
                Active member of the college technical society
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
