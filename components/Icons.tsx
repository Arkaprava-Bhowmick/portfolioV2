export function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.42 3.44 10.02 8.2 11.65.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.33-1.83-1.33-1.83-1.09-.77.08-.75.08-.75 1.2.09 1.84 1.28 1.84 1.28 1.07 1.87 2.8 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.66-.31-5.47-1.38-5.47-6.13 0-1.35.46-2.46 1.22-3.32-.12-.31-.53-1.57.12-3.27 0 0 1-.33 3.3 1.27a11.2 11.2 0 0 1 6 0c2.3-1.6 3.29-1.27 3.29-1.27.65 1.7.24 2.96.12 3.27.76.86 1.22 1.97 1.22 3.32 0 4.76-2.81 5.81-5.49 6.12.43.38.81 1.13.81 2.29 0 1.65-.02 2.98-.02 3.39 0 .33.22.72.83.6C20.57 22.31 24 17.71 24 12.3 24 5.5 18.63 0 12 0z" />
    </svg>
  );
}

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path d="M3 6h18v12H3z" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function LeetCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path d="M13 3l-8 9h6l-2 9 9-11h-6l1-7z" />
    </svg>
  );
}

export function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

export function ImagePlaceholderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16l-5.5-5.5L3 21" />
    </svg>
  );
}

export function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2z" />
    </svg>
  );
}

export function SocialRow({ className = "" }: { className?: string }) {
  const iconClass =
    "w-[38px] h-[38px] rounded-lg border border-foreground/10 flex items-center justify-center text-foreground/70 transition-all duration-300 ease-out hover:text-accent hover:border-accent hover:-translate-y-0.5";
  return (
    <div className={`flex gap-3.5 ${className}`}>
      <a
        href="https://github.com/Arkaprava-Bhowmick"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        className={iconClass}
      >
        <GitHubIcon className="w-[18px] h-[18px]" />
      </a>
      <a
        href="https://www.linkedin.com/in/arkaprava-bhowmick-66b297206/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        className={iconClass}
      >
        <LinkedInIcon className="w-[18px] h-[18px]" />
      </a>
      <a
        href="mailto:arkapravabhowmick@gmail.com"
        aria-label="Email"
        className={iconClass}
      >
        <EmailIcon className="w-[18px] h-[18px]" />
      </a>
      <a href="tel:+918535882003" aria-label="Phone" className={iconClass}>
        <PhoneIcon className="w-[18px] h-[18px]" />
      </a>
    </div>
  );
}
