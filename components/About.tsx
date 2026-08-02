import Reveal from "./Reveal";
import { Eyebrow } from "./SectionHeading";

const facts: [string, string, boolean?][] = [
  ["role", "Full-Stack & AI Engineer"],
  ["based in", "India"],
  ["education", "B.Tech, CS & IT"],
  ["focus", "Web Dev, AI/ML, Data Analysis, Gen AI"],
  ["status", "Open to work", true],
];

export default function About() {
  return (
    <section id="about" className="relative z-[1] pt-24 md:pt-28 pb-6">
      <Reveal className="max-w-wrap mx-auto px-6">
        <Eyebrow>About</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <div className="space-y-4">
            <p className="text-foreground/70 text-base max-w-[560px]">
              Hi, I&apos;m{" "}
              <strong className="text-foreground font-semibold">
                Arkaprava Bhowmick
              </strong>
              , a passionate developer and computer science student who enjoys
              turning ideas into meaningful digital experiences.
            </p>
            <p className="text-foreground/70 text-base max-w-[560px]">
              I&apos;m interested in{" "}
              <strong className="text-foreground font-semibold">
                Web Development
              </strong>
              , <strong className="text-foreground font-semibold">AI/ML</strong>
              ,{" "}
              <strong className="text-foreground font-semibold">
                Data Analysis
              </strong>
              ,{" "}
              <strong className="text-foreground font-semibold">Gen AI</strong>,
              and building creative projects that solve real-world problems.
            </p>
            <p className="text-foreground/70 text-base max-w-[560px]">
              I&apos;m constantly learning new technologies, improving my
              skills, and exploring better ways to build, design, and innovate.
            </p>
          </div>

          <div className="flex flex-col border border-foreground/10 rounded-2xl overflow-hidden">
            {facts.map(([label, value, isAccent], i) => (
              <div
                key={label}
                className={`flex justify-between px-[18px] py-3.5 font-mono text-[13px] ${
                  i !== facts.length - 1 ? "border-b border-foreground/10" : ""
                }`}
              >
                <span className="text-foreground/40">{label}</span>
                <span className={isAccent ? "text-accent" : "text-foreground"}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
