# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandsn

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Stack

- **Next.js 15** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** (configured via `@tailwindcss/postcss` in `postcss.config.mjs`)

## Architecture

Single-page landing page for **Gestoker**, a stock management product. All content lives in one route (`src/app/page.tsx`) composed of section components in order: `Header → Hero → Features → Pricing → Footer`.

**`src/lib/constants.ts`** — Central place for contact info (WhatsApp number, URL). Update here to change CTA links across all components.

**`src/components/`** — One file per section. No shared UI primitives; each component is self-contained with inline Tailwind classes.
