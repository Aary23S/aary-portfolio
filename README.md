# Aary Satardekar — Portfolio

A statically-generated personal portfolio site. React + TypeScript + Tailwind
CSS, no backend, deployed on Vercel.

> **Working with an AI agent on this project?** Read `docs/PROJECT_CONTEXT.md`
> first — it has the full architecture rationale, design system, and a
> progress checklist. `docs/HANDOFF_PROMPT.md` has a ready-to-paste prompt for
> starting a new agent session.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Editing content

All editable content lives in `src/data/*.ts` as plain TypeScript objects —
**no database, no CMS, no redeploy-blocking backend.** Edit a file, save,
commit, push. Vercel auto-deploys on push to `main`.

| To change... | Edit this file |
|---|---|
| Name, bio, contact info, social links | `src/data/profile.ts` |
| Work experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Education | `src/data/education.ts` |
| Achievements / awards | `src/data/achievements.ts` |
| Leadership / community roles | `src/data/leadership.ts` |
| Skills list | `src/data/skills.ts` |
| Nav menu items | `src/data/navigation.ts` |

Each file is typed (see `src/types/`) — TypeScript will flag mistakes before
you even run the build.

## Before going live — required setup

1. **Contact form**: sign up free at [web3forms.com](https://web3forms.com),
   get your access key, paste it into `contactFormAccessKey` in
   `src/data/profile.ts`. Without this, the form will show a config error
   instead of sending.
2. **Social links**: `src/data/profile.ts` has placeholder URLs for GitHub,
   LinkedIn, LeetCode, CodeForces, CodeChef — replace with your real profile
   URLs.
3. **Images**: drop a profile photo / project screenshots into
   `src/assets/images/` (and `src/assets/images/projects/` for project-specific
   shots), then reference them from the relevant `src/data/*.ts` file.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo in Vercel — it auto-detects Vite, no config needed.
3. Build command: `npm run build` · Output directory: `dist` (both are
   Vercel's Vite defaults, shouldn't need to set manually).
4. Every push to `main` redeploys automatically.

## Architecture notes

This project deliberately has **no Express server and no MongoDB**, despite
the original brief mentioning "MERN stack." See `docs/PROJECT_CONTEXT.md` §2
for the full reasoning — short version: there's no content that needs a
database (it's all static, edited via git), and the contact form uses a
third-party service instead of a custom backend. If you genuinely need a
backend later (e.g. an admin panel, a blog with a CMS), scope that as a
separate addition rather than retrofitting this repo.
