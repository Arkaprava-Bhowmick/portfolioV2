import Reveal from "./Reveal";
import { Eyebrow, Headline } from "./SectionHeading";
import { SkillIcon } from "./SkillIcons";

const skillGroups = [
  { title: "Languages", tags: ["C++", "Python", "TypeScript", "JavaScript", "Java"] },
  { title: "Frontend", tags: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Backend", tags: ["Node.js", "Express", "REST APIs", "WebSockets"] },
  { title: "Data", tags: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "AI / ML", tags: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "NLP"] },
  { title: "Tooling", tags: ["Git", "Docker", "Postman", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] py-24 md:py-28">
      <Reveal className="max-w-wrap mx-auto px-6">
        <Eyebrow>Tech Stack</Eyebrow>
        <Headline>Tools I reach for</Headline>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-foreground/[0.025] border border-foreground/10 rounded-2xl p-[22px] transition-all duration-300 ease-out hover:border-foreground/20 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgb(var(--color-accent)/0.35)]"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-foreground/40 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-accent inline-block" />
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {group.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 font-mono text-[12.5px] text-foreground/80 px-2.5 py-2 rounded-lg bg-foreground/[0.04] border border-foreground/10 transition-colors duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-md bg-accent/10 text-accent flex items-center justify-center">
                      <SkillIcon name={tag} className="w-[14px] h-[14px]" />
                    </span>
                    <span className="truncate">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
