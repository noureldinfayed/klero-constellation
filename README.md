# Handoff: Klero — Direction B · La Constellation

## Overview
Marketing landing page for **Klero Généalogie** (French genealogical succession firm, est. 1984). Audience: 40+ French-speaking prospects who may have a forgotten inheritance. Goal: trust + conversion on "Ouvrir un dossier".

Direction B is the **cinematic / investigative** aesthetic — deep navy night-sky with an animated constellation, gold accents, Playfair Display serif, and an **interactive 3-question eligibility diagnostic** as the conversion hook.

## About the Design Files
`direction-b-constellation.html` is a **design reference created in HTML** — a prototype showing final look, copy, and interactive behavior. It is **not production code to copy directly**.

**Your task:** recreate this design in **Next.js 14+ (App Router) + Tailwind CSS** using the codebase's patterns. The HTML is the visual + behavioral source of truth — open it in a browser, especially to observe:
- The animated SVG constellation (hero background)
- The twinkle animations on stars
- The 3-step eligibility widget state machine with animated percentage counter
- The reveal-on-scroll staggers

## Fidelity
**High-fidelity.** Match colors, typography, animations, and the eligibility-quiz behavior exactly.

## Tech stack
- Next.js 14+, **App Router**
- **Tailwind CSS** — configure tokens (see below)
- Fonts via `next/font/google`: **Playfair Display** (400/500/600, ital), **Instrument Serif** (400, ital), **Manrope** (300/400/500/600)
- `<html lang="fr">`
- Breakpoint at 900px (port as Tailwind `lg:` or custom `md:900`)
- Responsive desktop + mobile

## Design Tokens

```ts
// tailwind.config.ts → theme.extend
colors: {
  'navy-0':   '#07101d',  // body bg
  'navy-1':   '#0c1a2e',  // chrome bg base
  'navy-2':   '#132742',  // card gradient top
  'navy-3':   '#1d3558',  // hero radial accent
  gold:       '#c9a961',  // primary accent — CTAs, numerals, lines
  'gold-soft':'#e8d4a0',  // italic lede, result label
  bone:       '#efe7d3',  // primary text
  'ink-muted':'#8ea0bd',  // captions, counter labels
  rule:       'rgba(201,169,97,.2)',
  'rule-strong':'rgba(201,169,97,.4)',
},
fontFamily: {
  serif:    ['var(--font-playfair)', 'Georgia', 'serif'],
  display:  ['var(--font-instrument)', 'Georgia', 'serif'], // italic lede only
  sans:     ['var(--font-manrope)', 'system-ui', 'sans-serif'],
},
```

Body base: `bg-[var(--navy-0)] text-bone font-sans`. Apply the fixed background layer (noise + radials) via a `<div>` in the root layout with `position:fixed; inset:0; pointer-events:none; z-index:1` — exact CSS is in the HTML's `body::before`.

## Page structure

```
app/
  layout.tsx
  page.tsx
  globals.css                 # keyframes, background layer
  _components/
    Chrome.tsx
    Hero.tsx
    Constellation.tsx         # animated SVG (hero bg)
    HeroStats.tsx             # floating "7%" panel
    Method.tsx                # 3 steps with connecting rule
    Cases.tsx                 # row-style case studies
    EligibilityQuiz.tsx       # ⭐ stateful — see below
    FooterCta.tsx
    SiteFooter.tsx
    Reveal.tsx
```

### Sections (top → bottom)

1. **Chrome** — sticky, `rgba(7,16,29,.75)` + `backdrop-blur(16px) saturate(140%)`, 1px `rule` bottom border, 76px tall. Brand = 40px gold ring with inner ring + italic "K", wordmark "Kléro", subline "Généalogie successorale". Nav links hover → gold. CTA = gold bg, navy text.
2. **Hero** (`min-h: calc(100vh - 76px)`, align-center) — see Constellation + title + floating stat panel below.
3. **Method** (`#process`) — section kicker ("— Notre méthode · trois temps"), big italic title with gold "l'héritier retrouvé", lede in Instrument Serif italic. Then a 3-card grid with a horizontal connecting line at y=60px spanning 10%–90% width (dimmed at edges). Each card has a 64px gold ring numeral (I/II/III), title, body, meta row with bold-gold stats.
4. **Cases** (`#cases`) — `.cases-head` grid: title on left, 3 counters on right (Actifs restitués · 47,2 M€ / Familles · 2 184 / Depuis · 1984). Then 4 `.case-row` entries, grid `80px 1.3fr 1fr 160px`: gold italic case number, loc+quote+by, story blurb, right-aligned gold italic amount. Row hover = subtle navy gradient + left gold bar sliding down.
5. **Eligibility widget** (`#eligibility`) — the centerpiece (see below).
6. **Footer CTA** — 60px vertical gold line from top, then huge italic title "L'histoire de votre famille *n'est pas encore finie.*", sub, buttons.
7. **Footer** — mono rule with address + notary.

### Hero — Constellation (CRITICAL)

Absolute-positioned `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">` filling `.hero-bg` (inset:0, z:0).

Contents:
- **Lines** `<g stroke="#c9a961" stroke-width="0.6" fill="none" opacity="0.35">` — ~24 `<line>` segments forming a genealogical-tree-as-constellation shape. **Exact coordinates are in the HTML** — copy verbatim, they are hand-tuned.
- **Stars** — circles of varying radii (1–4) and colors (`#c9a961` gold, `#efe7d3` bone), many with SVG SMIL `<animate attributeName="opacity" values=".3;1;.3" dur="4s" repeatCount="indefinite"/>` twinkle (randomized dur 3.2–5.4s).
- **"You" node** at `(900, 620)` — two concentric `radialGradient` glowing circles using `#star-glow` def, r=20 and r=12.
- **Defs**: `<radialGradient id="star-glow">` gold → transparent.

Over the SVG, absolute positioned:
- 3 `.marker` labels in Instrument Serif italic gold 14px with 18×1px lead-in line: "Acte de décès, 1987" / "Archives départementales" / "Vous êtes ici".

**Note:** on small screens (<900px), hide the `.marker` labels. SVG scales with container.

### Hero — title block
Max-width 780px, z-2 over constellation:
- Kicker "Cabinet de généalogie successorale · Paris" — 11px Manrope, letter-spacing 0.28em, gold, 40×1px lead-in
- Title — Playfair 400, `clamp(56px, 9vw, 140px)`, line-height 0.95:
  > Ce que votre famille<br/>a <span class="accent"><em>oublié.</em></span><br/>Nous le <em>retrouvons.</em>
  
  `.accent` has a `::after` radial glow bar behind the underline area.
- Lede — Instrument Serif italic `clamp(20px, 2vw, 28px)`, gold-soft, max-width 540px
- Actions: **primary** (gold bg + navy text, uppercase 12px letter-spacing 0.18em, hover lifts with gold glow shadow) + **ghost** (1px `rgba(239,231,211,.3)` border, hover → gold border/text)

### Hero — floating stats panel
Absolute right:32, bottom:0, width:340px. Left border 1px `rule-strong`, 28px padding. Kicker → big Playfair 120px "7" with italic gold "%" at 48px → Instrument Serif italic 17px sub → mono 10px ticks row. On mobile, un-absolute: becomes a relative block below, with top border instead of left.

### Eligibility widget — interactive

Port the full state machine. Summary:

**State:**
```ts
const [step, setStep] = useState(0);       // 0 → 2
const [score, setScore] = useState(0);
const [result, setResult] = useState<null | { pct: number; label: string; body: string }>(null);
```

**Questions** (copy verbatim from HTML `questions` array):
```ts
const questions = [
  {
    q: "Un membre de votre famille élargie est-il décédé ces 30 dernières années ?",
    opts: [
      { t: "Oui, probablement", s: 2 },
      { t: "Je ne suis pas sûr", s: 1 },
      { t: "Plusieurs, oui",    s: 3 },
      { t: "Non, aucun",        s: 0 },
    ],
  },
  {
    q: "Y a-t-il eu des branches familiales perdues de vue — cousins, grands-oncles, émigrations ?",
    opts: [
      { t: "Oui, c'est le cas",        s: 3 },
      { t: "Possiblement",              s: 2 },
      { t: "Pas à ma connaissance",     s: 0 },
      { t: "Famille très dispersée",    s: 3 },
    ],
  },
  {
    q: "Avez-vous déjà eu le sentiment qu'une succession n'avait pas été entièrement réglée ?",
    opts: [
      { t: "Oui, un doute persiste",    s: 3 },
      { t: "Non, tout semblait clair",  s: 0 },
      { t: "Je l'ignore",               s: 1 },
      { t: "Une zone grise, oui",       s: 2 },
    ],
  },
];
```

**Flow:**
1. 3 progress dots `.pdot` (32×2px, `rule` default → `gold` active → `gold-soft` done).
2. On option click: `score += opt.s`, advance step (or finish), fade body 200ms between questions.
3. On completion: compute `pct = Math.min(82, 7 + score * 8)` and **animate count up** from 0 via `requestAnimationFrame` (+2 per frame).
4. Three result tiers based on `pct`:
   - `< 25`  → "Votre profil présente un risque modéré." / "Un doute subsiste cependant. Une vérification gratuite de vos ascendances prend 10 minutes et peut révéler l'inattendu."
   - `< 55`  → "Probabilité significative qu'un héritage vous concerne." / "Votre configuration familiale correspond à plus de 60% de nos dossiers résolus. Nous vous recommandons un diagnostic approfondi."
   - `else`  → "Forte probabilité — un dossier vous concerne." / "Votre profil présente plusieurs signaux typiques de nos dossiers aboutis. Nous vous conseillons vivement d'ouvrir un dossier gratuitement."
5. "Refaire le test" resets state.

**Styling:**
- Card: max-width 760px, gradient `rgba(19,39,66,.85) → rgba(7,16,29,.95)`, 1px `rule-strong`, 56px padding.
- Corner brackets via `::before`/`::after` — 20×20 1px gold, top-left + bottom-right (L-shapes).
- Title "Êtes-vous *concerné* ?" — Playfair 40px with italic gold "concerné"
- Options: 2-col grid (1-col mobile), each button 1px `rule-strong`, 20×24 padding, flex between text + arrow. Hover → gold border, gold text, gold arrow translate-x 4px.
- Result pct: Playfair italic 120px gold, -0.04em tracking.

### Animations
- **SVG SMIL** twinkle on stars (native, no JS).
- **Reveal-on-scroll** — IntersectionObserver threshold 0.08, adds `.in` to elements starting `opacity:0; translate-y-5`, transition 1s `cubic-bezier(.2,.7,.3,1)`. Stagger delays `.d1..d5` at 120ms increments. Build as `<Reveal delay={1}>` wrapper.
- **Step cards** hover: `translate-y(-6px) border-gold 30px 80px black/40 shadow`, transition 0.4s.
- **Case rows** hover: before-pseudo left bar `scaleY(0) → scaleY(1)` from top, 0.4s.
- **Primary button** hover: `translate-y(-1px)` + gold glow box-shadow.
- `prefers-reduced-motion`: disable reveal, constellation SMIL, hover lifts.

## Content / copy
All French copy is finalized in the HTML — case studies (Lefèvre/Caron/Moretti/Weber), amounts, dossier numbers, quotes, questions. Do not translate or rewrite.

## Responsive behavior
Breakpoint at 900px — see `@media (max-width: 900px)` in the HTML. Notable:
- Nav hides, hamburger shows
- Hero min-height auto, stat panel un-floats (relative, below)
- Stat big number 120 → 88
- Markers hidden
- Method cards stack; connecting line hidden
- Case rows: `grid-template-columns: 50px 1fr`, amount wraps to its own full-width row with dashed top
- Eligibility options: 1 column
- Result pct 120 → 88

## Files
- `direction-b-constellation.html` — design reference / source of truth. Open in a browser.
- `README.md` — this document.

## Assets
None external. Constellation is inline SVG. Brand "K" is typographic. No imagery.

## Accessibility
- Landmarks: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Eligibility widget: wrap questions in a `<fieldset>`/`<legend>`, announce step changes via `aria-live="polite"`, buttons need `aria-label` when arrow is the only visual affordance
- Decorative SVG constellation: `aria-hidden="true"`
- Hamburger: `aria-label="Menu"`, `aria-expanded`
- Color contrast: verify `#8ea0bd` muted copy on navy — fine for 11px+ uppercase, avoid on body copy
- Respect `prefers-reduced-motion`
