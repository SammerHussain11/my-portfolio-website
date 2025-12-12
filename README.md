# Personal Portfolio — Next.js + TypeScript

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-000000?style=for-the-badge&logo=radix-ui&logoColor=white)

A professional, responsive personal portfolio built with Next.js and TypeScript. This repository showcases a modern component-driven UI, interactive sections for projects, skills, certifications, and AI-powered utilities for content generation and validation.

**Highlights:**

- Clean, component-based architecture using React + Next.js
- Fully typed with TypeScript and configured for modern bundlers
- Tailwind CSS for utility-first styling and Framer Motion animations
- Accessible UI primitives via Radix UI + custom components
- AI tooling integration for content generation and recommendations

**Project Status:** Production-ready UI and developer tooling configured.

**Table of contents**

- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License & contact](#license--contact)

**Tech Stack**

- **Framework:** Next.js (app router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + utility classes
- **UI primitives:** Radix UI components and custom components in `src/components`
- **Animations:** Framer Motion
- **Forms & Validation:** React Hook Form + Zod
- **Tooling:** ESLint, TypeScript, Patch-package

**Project structure**

- `src/app` — Next.js app routes, global layout, and styles
- `src/components` — Reusable UI components and themed primitives
- `src/sections` — Page sections (hero, experience, projects, skills, contact)
- `src/ai` — AI utilities, flows, and developer tools for content generation
- `src/lib` — Small utilities and data sources

**Local development**
Prerequisites: Node.js (recommended LTS) and a package manager (`npm`, `yarn`, or `pnpm`).

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open the site at `http://localhost:9002` (the dev server uses port `9002` by default).

**Scripts**

- `npm run dev` — Start Next.js in development mode (port 9002).
- `npm run build` — Build the app for production.
- `npm start` — Start built production server.
- `npm run lint` — Run ESLint checks.
- `npm run typecheck` — Run TypeScript type checks.
- `npm run genkit:dev` — Start local GenKit developer tooling used for AI workflows (see `src/ai`).

**Environment variables**
Create a `.env.local` at the project root for any runtime secrets or provider keys. Example:

```text
# .env.local
# EXAMPLE_API_KEY=your_api_key_here
```

Note: Keep secrets out of version control and use your provider's recommended secret storage when deploying.

**Deployment**
This Next.js app can be deployed to any platform that supports Node.js or static Next.js deployments (for example, Vercel, Netlify, or other providers). Build with `npm run build` and run with `npm start` or follow your host's recommended deployment flow.

**Contributing**

- Fork the repository, create a feature branch, add tests if applicable, and open a pull request.
- Keep changes focused and follow the existing code style (TypeScript + Tailwind CSS + Radix usage patterns).

**License & contact**

- For licensing, see `LICENSE` if present in the repository; otherwise contact the repository owner for details.
- For questions or collaboration, open an issue or contact the project owner.

---

This README focuses on development, usage, and deployment. It intentionally omits internal platform-specific scaffolding details so the repository reads as a clean, production-ready portfolio project.
