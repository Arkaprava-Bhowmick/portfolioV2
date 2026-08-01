import { SocialRow } from "./Icons";

export default function Hero() {
  return (
    <section className="relative z-[1] pt-[150px] pb-20 min-h-[92vh] flex items-center">
      <div className="max-w-wrap mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-9 items-center">
        <div>
          <div className="font-mono text-[13px] text-accent inline-flex items-center gap-2 px-3 py-1.5 border border-accent/30 rounded-full bg-accent/10 w-fit mb-[22px]">
            <span className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse2" />
            open to new opportunities
          </div>
          <h1 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[58px] leading-[1.08] tracking-[-0.01em] mb-5">
            Hi, I&apos;m Arkaprava.
            <br />I build{" "}
            <span className="text-gradient">intelligent software</span> for the
            web.
          </h1>
          <p className="text-[17px] text-foreground/70 max-w-[560px] mb-8">
            A Computer Science &amp; Information Technology graduate who works
            across the full stack and enjoys turning machine learning ideas into
            products people can actually use.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center gap-2 bg-accent text-accent-foreground border border-accent transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(var(--color-accent)/0.35)]"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center gap-2 border border-foreground/20 text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
            >
              Download résumé ↓
            </a>
            <a
              href="#contact"
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center gap-2 border border-foreground/20 text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
            >
              Contact me
            </a>
          </div>
          <SocialRow />
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-accent/15 blur-3xl" />
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-accent/30 shadow-[0_25px_60px_-15px_rgb(var(--color-accent)/0.4)]">
            {/* Drop your photo at /public/profile.jpg to replace this */}
            <img
              src="/profile.jpeg"
              alt="Arkaprava Bhowmick"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
