# Design direction & notes

Quick reference for the redesign: goals, structure, and optional enhancements.

## Goals (design)

- **Intelligent, calm, confident** — Teal accent, soft gradients, plenty of whitespace. No loud CTAs or hype.
- **Minimal but expressive** — Fraunces for headings (warm, slightly playful), DM Sans for body (clear, readable). JetBrains Mono for technical hints.
- **Deep-engineer feel** — Numbered service cards, short paragraphs, no buzzwords. Copy is direct and specific.
- **Authentic** — About and homepage copy avoid “cutting-edge,” “revolutionary,” “scalable solutions.” Focus on what you actually do and how you think.

## Homepage structure

1. **Hero** — One strong headline + one supporting line + two actions (About me, What I offer).
2. **What I offer (Services)** — 7 cards: Gen AI possibilities, AI agents, AI workflow automation, configuration-first design, idea experimentation & sounding board, adapting AI into legacy, smart AI tools in dev.
3. **Learn with me** — 3 topics: configuration-first software, SaaS platform architecture, deep programming (memory, concurrency, race conditions, I/O). Link to Courses.
4. **CTA** — Single “Let's talk” block with one primary button (e.g. LinkedIn).
5. **Footer** — Nav (Home, About, Courses, GitHub, LinkedIn) + one-line credit.

## Section titles (used)

- Hero: (no title; headline only)
- What I offer
- Learn with me
- Let's talk about your next move. (CTA)

## Design tokens (custom.css)

- **Fonts:** `--bm-font-heading` (Fraunces), `--bm-font-body` (DM Sans), `--bm-font-mono` (JetBrains Mono).
- **Colors:** `--bm-bg`, `--bm-text`, `--bm-text-muted`, `--bm-accent` (teal), `--bm-accent-soft` / `--bm-accent-softer` for gradients.
- **Surfaces:** `--bm-bg-elevated`, `--bm-border`, `--bm-radius`, `--bm-shadow-sm` / `--bm-shadow-md`.
- **Dark mode:** All tokens have `.dark` overrides for consistent look in dark theme.

## Optional animation / micro-interaction ideas

- **Implemented:** Hero content fades in on load; service cards stagger in with a short delay. Card hover: slight lift + shadow. CTA and buttons: slight lift on hover.
- **Possible additions:**
  - **Orb drift:** Slow, subtle movement (e.g. 2–3% translate) on the gradient orbs with `@keyframes` and long duration (15–20s) for a calm ambient effect.
  - **Scroll-triggered fade:** Use Intersection Observer to fade in “Learn with me” and CTA when they enter viewport (e.g. opacity 0 → 1, translateY 12px → 0).
  - **Focus states:** Visible focus ring (e.g. 2px teal) on all interactive elements for accessibility.
  - **Reduced motion:** Wrap animations in `@media (prefers-reduced-motion: reduce)` and disable or shorten them for users who prefer less motion.

## Copy principles

- Be specific (e.g. “configuration instead of code changes” instead of “flexible systems”).
- One idea per sentence where possible.
- No filler (e.g. “world-class,” “industry-leading,” “next-level”).
- CTA is low-pressure: “Let's talk about your next move” + “I'm happy to listen and help.”
