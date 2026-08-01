"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Eyebrow } from "./SectionHeading";
import { SocialRow } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative z-[1] pt-24 md:pt-28 pb-6">
      <Reveal className="max-w-wrap mx-auto px-6">
        <div className="border border-foreground/10 rounded-2xl px-6 sm:px-10 py-14 text-center bg-[radial-gradient(ellipse_at_top,rgb(var(--color-accent)/0.08),transparent_60%)] bg-foreground/[0.015]">
          <Eyebrow center>Contact</Eyebrow>
          <h2 className="font-display font-semibold text-[26px] sm:text-3xl md:text-4xl mb-3.5">
            Have a project in mind?
          </h2>
          <p className="text-foreground/70 max-w-[480px] mx-auto mb-8">
            I&apos;m currently open to full-time roles, freelance work, and interesting
            collaborations. Send a message below, or email me directly.
          </p>

          <form onSubmit={handleSubmit} className="max-w-[480px] mx-auto text-left mb-8 space-y-4">
            <div>
              <label className="font-mono text-xs text-foreground/40 block mb-1.5" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-foreground/40 block mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-foreground/40 block mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-foreground/[0.04] border border-foreground/10 rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg bg-accent text-accent-foreground border border-accent transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(var(--color-accent)/0.35)] disabled:opacity-60 w-full"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="text-accent text-sm font-mono">Thanks — I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm font-mono text-foreground/70">
                Couldn&apos;t reach the server — try emailing me directly instead.
              </p>
            )}
          </form>

          <div className="flex justify-center gap-3 flex-wrap mb-8">
            <a
              href="mailto:arkapravabhowmick@gmail.com"
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center gap-2 bg-accent text-accent-foreground border border-accent transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(var(--color-accent)/0.35)]"
            >
              Email me →
            </a>
            <a
              href="tel:+918535882003"
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center gap-2 border border-foreground/20 text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
            >
              Call me
            </a>
            {/* TODO: replace "#" with your real LinkedIn profile URL */}
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="font-mono text-sm font-medium px-5 py-3 rounded-lg inline-flex items-center gap-2 border border-foreground/20 text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
            >
              Connect on LinkedIn
            </a>
          </div>

          <SocialRow className="justify-center" />
        </div>
      </Reveal>
    </section>
  );
}
