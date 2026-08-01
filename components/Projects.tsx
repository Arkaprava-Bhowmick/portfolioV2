import Reveal from "./Reveal";
import { Eyebrow, Headline } from "./SectionHeading";
import { ExternalLinkIcon, GitHubIcon, ImagePlaceholderIcon } from "./Icons";

type Project = {
  index: string;
  title: string;
  badge?: string;
  desc: string;
  features: string[];
  tech: string[];
  // TODO: fill these in once the project is deployed / pushed
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  flagship?: boolean;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Nifty Quant",
    desc: "A quant-style forecasting tool that pairs price history with news sentiment to give a more contextual read on short-term stock movement, instead of relying on price data alone.",
    features: [
      "LSTM model trained on historical price sequences",
      "NLP sentiment layer over financial news headlines",
      "Combined signal visualized on an interactive chart",
    ],
    tech: ["Python", "LSTM", "Deep Learning", "NLP"],
    image: "/projects/nifty-quant.png",
    liveUrl: "https://niftyquant.vercel.app/",
    githubUrl:
      "https://github.com/Arkaprava-Bhowmick/Nifty_Quant_vercel-render",
  },
  {
    index: "02",
    title: "Eco Track",
    desc: "A sustainability tracker that helps people log daily habits and estimate their carbon footprint, with a visual dashboard and personalized tips to help reduce it over time.",
    features: [
      "Daily activity logging across transport, energy & diet",
      "Automatic carbon footprint estimation",
      "Visual dashboard of trends over time",
      "Personalized suggestions to reduce impact",
    ],
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "/projects/eco-track.png",
    liveUrl: "https://eco-track-six-roan.vercel.app/",
    githubUrl: "https://github.com/Arkaprava-Bhowmick/Eco_Track",
  },
  {
    index: "03",
    title: "Gate CSIT Arena",
    desc: "A practice platform for GATE CS/IT aspirants — upload a photo of a previous-year question and get a worked, step-by-step solution, organized by topic instead of buried in a generic question bank.",
    features: [
      "OCR pipeline to read questions from images",
      "Step-by-step AI-generated solutions",
      "Automatic topic-wise categorization",
      "Analytics dashboard for practice history",
    ],
    tech: ["React", "Node.js", "Express", "OCR", "AI/ML"],
    image: "/projects/gate-csit-arena.png",
    liveUrl: "https://gate-cs-it-arena.vercel.app/",
    githubUrl: "https://github.com/Arkaprava-Bhowmick/GATE-CS-IT-Arena",
  },
  {
    index: "04 · flagship",
    title: "Personal AI Secretary",
    badge: "in progress",
    desc: "A unified assistant where specialized AI agents handle productivity, memory, scheduling, and communication together, instead of living in five different apps.",
    features: [
      "Multi-agent orchestration for distinct tasks",
      "Persistent memory layer across sessions",
      "Unified scheduling & communication hooks",
      "Extensible agent architecture",
    ],
    tech: ["TypeScript", "LLM Orchestration", "Vector DB", "Agents"],
    image: "/projects/personal-ai-secretary.jpg",
    githubUrl: "https://github.com/your-username/personal-ai-secretary",
    flagship: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] pt-24 md:pt-28 pb-6">
      <Reveal className="max-w-wrap mx-auto px-6">
        <Eyebrow>Featured Work</Eyebrow>
        <Headline>A few projects worth a closer look</Headline>

        {projects.map((p) => (
          <div
            key={p.title}
            className={`border rounded-2xl overflow-hidden mb-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_25px_55px_-20px_rgb(var(--color-accent)/0.4)] ${
              p.flagship
                ? "border-accent/40 bg-accent/[0.06]"
                : "border-foreground/10 bg-foreground/[0.02] hover:border-foreground/20"
            }`}
          >
            <div className="aspect-[1916/861] w-full bg-foreground/[0.04] border-b border-foreground/10 flex flex-col items-center justify-center gap-2 text-foreground/25">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <ImagePlaceholderIcon className="w-7 h-7" />
                  <span className="font-mono text-[11px] tracking-wide">
                    project image coming soon
                  </span>
                </>
              )}
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start gap-5 flex-wrap mb-3.5">
                <div>
                  <div className="font-mono text-foreground/40 text-[13px]">
                    {p.index}
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-1.5">
                    {p.title}{" "}
                    {p.badge && (
                      <span className="font-mono text-[11px] font-semibold text-accent-foreground bg-accent px-2.5 py-1 rounded-full align-middle">
                        {p.badge}
                      </span>
                    )}
                  </h3>
                </div>
              </div>
              <p className="text-foreground/70 text-[15px] max-w-[680px] mb-[18px]">
                {p.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-[18px] mb-5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-[13.5px] text-foreground/70 pl-4 relative"
                  >
                    <span className="absolute left-0 text-accent">›</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-accent px-[9px] py-1 rounded-md bg-accent/10 border border-accent/25"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3.5">
                <a
                  href={p.liveUrl ?? "#"}
                  className="font-mono text-[13px] text-foreground flex items-center gap-1.5 border-b border-foreground/20 pb-0.5 transition-colors duration-300 hover:text-accent hover:border-accent"
                >
                  <ExternalLinkIcon className="w-[14px] h-[14px]" />
                  Live demo
                </a>
                <a
                  href={p.githubUrl ?? "#"}
                  className="font-mono text-[13px] text-foreground flex items-center gap-1.5 border-b border-foreground/20 pb-0.5 transition-colors duration-300 hover:text-accent hover:border-accent"
                >
                  <GitHubIcon className="w-[14px] h-[14px]" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
