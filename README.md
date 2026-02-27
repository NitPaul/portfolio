# Aonyendo Paul Neteish — Portfolio

Personal portfolio website for Aonyendo Paul Neteish — AI Researcher, CS Student at AIUB, and NLP enthusiast.

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 3** — custom dark-academic design system
- **Framer Motion** — scroll animations and transitions
- **Lucide React** — icon set
- **Bun** — package manager and runtime

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment (Netlify)

This project includes a `netlify.toml` pre-configured for deployment:

1. Push this repo to GitHub
2. Connect the repo to [Netlify](https://app.netlify.com)
3. Netlify auto-detects the config — no manual setup needed

Build settings (already in `netlify.toml`):
- **Build command:** `bun run build`
- **Publish directory:** `dist`
- **Node version:** 20

## Project Structure

```
src/
  components/    — React components (Hero, About, Publications, etc.)
  data/          — Static data (publications, projects, skills, experience)
  hooks/         — Custom hooks (useScrollReveal, useTypewriter)
public/
  assets/        — Images, CV PDF, favicon
```

## Contributors

- **Aonyendo Paul Neteish** ([@NitPaul](https://github.com/NitPaul)) — Content, design direction, project owner
- **Ehsanul Haque Siam** ([@EhsanulHaqueSiam](https://github.com/EhsanulHaqueSiam)) — Development, design implementation
