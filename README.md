# Arkaprava Bhowmick — Portfolio

My personal portfolio site, built with **Next.js (App Router)**, **React**, and
**Tailwind CSS**, with a serverless **contact form API** that emails
submissions straight to my inbox via [Resend](https://resend.com).

**Live site:** [your-domain.vercel.app](#) 

<img width="1670" height="843" alt="image" src="https://github.com/user-attachments/assets/cdc3e0cf-9cef-4ae1-9bef-0000a7cd79c2" />


## Features

- 🌗 **Light / dark mode** with a Slate & Indigo palette for light mode and a
  Zinc & Emerald palette for dark mode, toggled instantly with no flash on
  load (persisted in `localStorage`)
- ⚡ Built entirely on **Next.js API routes** — no separate backend to host or
  manage
- 📬 Working **contact form**, emailed to me directly via Resend
- 🖼️ Sections for About, Tech Stack, Featured Projects, Education, and Contact
- 🎯 Responsive, mobile-first layout with a slide-out nav menu
- 🎬 Scroll-reveal animations on section entry

## Tech stack

| Layer      | Tech                              |
|------------|------------------------------------|
| Framework  | Next.js 14 (App Router)            |
| UI         | React 18 + Tailwind CSS            |
| Language   | TypeScript                         |
| Email      | Resend                             |
| Hosting    | Vercel                             |

## Project structure

```
├── app/
│   ├── api/contact/route.ts   # contact form endpoint (Resend)
│   ├── globals.css            # theme tokens (light/dark CSS variables)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx              # nav + theme toggle
│   ├── Hero.tsx                # intro + profile photo
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Icons.tsx                # inline SVG icons + social links
│   └── ThemeProvider.tsx        # light/dark state + persistence
├── public/
│   ├── profile.jpg              # hero photo
│   ├── resume.pdf               # downloadable résumé
│   └── projects/                # project screenshots
└── ...
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your own values:

```bash
cp .env.local.example .env.local
```

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=your-email@example.com
```

Get a free API key at [resend.com/api-keys](https://resend.com/api-keys).
Without this set, the contact form still works but only logs submissions to
the server console instead of emailing them.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on **Vercel**:

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is
   auto-detected, no config needed
3. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` under
   **Project → Settings → Environment Variables**
4. Deploy — every push to `main` redeploys automatically

## Customizing

- **Profile photo:** replace `public/profile.jpg`
- **Résumé:** replace `public/resume.pdf`
- **Project screenshots:** drop images into `public/projects/` matching the
  filenames referenced in `components/Projects.tsx`
- **Project links:** update `liveUrl` / `githubUrl` per project in
  `components/Projects.tsx`
- **Social links:** update the GitHub/LinkedIn URLs in the `SocialRow`
  component in `components/Icons.tsx`

## License

Personal project — feel free to use the structure/approach as a reference,
but please don't republish the content or branding as your own.
