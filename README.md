# Arkaprava Bhowmick — Portfolio (Vercel-ready)

This is the deployable Next.js app — no separate backend needed. The contact
form is handled by a built-in API route (`app/api/contact/route.ts`), so this
folder is a complete, self-contained project that deploys to Vercel with
zero configuration.

## Deploy in 3 steps

1. Push this folder to a new GitHub repo (as the repo root):
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
   Vercel auto-detects Next.js — no root directory or env vars to set.
3. Click **Deploy**. You'll get a live URL in about a minute.

Every push to `main` after that auto-deploys.

## Local development

```bash
npm install
npm run dev
```

Runs at http://localhost:3000.

## Notes

- Contact form submissions currently just log to the server console
  (visible in Vercel under the deployment's **Functions** logs). Wire in a
  real mailer (Resend, nodemailer + SMTP, SendGrid, etc.) inside
  `app/api/contact/route.ts` when you're ready to receive real emails.
- Update the résumé link (`/resume.pdf` in `components/Hero.tsx`) by dropping
  an actual `resume.pdf` file into `public/`.
- Social links (GitHub, LinkedIn, email) are placeholders in
  `components/Icons.tsx` and `components/Hero.tsx` — swap in your real URLs.
