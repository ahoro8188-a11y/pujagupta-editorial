# Puja Gupta — Design Brainstorm

The client (Puja) is an editor, poet, and author consultant. Her existing site has a warm cream + sage palette and script headings, but the blog reads like a plain document. The redesign must keep her warm, personal brand identity while injecting life, texture, and editorial craft.

## Three Candidate Directions

### 1. "The Margin Notes" — Warm Literary Editorial
A literary magazine aesthetic (Kinfolk × The Paris Review): warm paper, expressive serif display type, drop caps, pull quotes, margin annotations, handwritten flourishes. Feels like a beautifully typeset book. Probability: 0.07

### 2. "Midnight Typewriter" — Dark Editorial Noir
Ink-black background, off-white text, typewriter mono accents, red pen markup details — moody, dramatic, writer-at-2am energy. Probability: 0.03

### 3. "Storybook Collage" — Playful Paper Craft
Cut-paper textures, stitched edges, pastel book-cover colors, sticker-like badges, playful overlapping cards. Feels like a children's book atelier. Probability: 0.02

## CHOSEN: "The Margin Notes" — Warm Literary Editorial

This is the natural home for a writing professional: the site itself becomes an example of editorial craft. It also preserves her existing cream + sage palette so the brand stays recognizable.

**Design Movement**: Literary editorial / book design — inspired by print magazines (The Paris Review, Aeon, Kinfolk) and fine book typography.

**Core Principles**:
1. The page is paper — warm cream, subtle grain, ink-toned text.
2. Typography does the heavy lifting — huge expressive serif display, generous line-height, drop caps, pull quotes.
3. Margins are alive — marginalia, annotations, handwritten flourishes, small numbered footnotes.
4. Quiet motion — words and elements reveal gently like pages turning; nothing flashy.

**Color Philosophy**: Warm paper first. Background: cream `#faf6ee`-ish (oklch ~0.97 0.015 85). Ink: deep warm brown-black `#2b2620`. Sage green (her existing brand green) as the primary accent — chapter dividers, links, buttons. A terracotta/rust `#c05a34` as the secondary accent for pull-quote marks, stars, and hover states (echoing bookcloth). Emotional intent: calm, intimate, trustworthy — like reading in a sunlit room.

**Layout Paradigm**: Asymmetric editorial spreads. Hero splits text (left) against a large image (right) with overlapping marginal notes. Blog index uses a "featured spread" (huge first post) followed by an asymmetric list of entries with large numerals (No. 01, No. 02…) running down the left margin. Wide reading measure (~68ch) with generous margins for drop-cap articles.

**Signature Elements**:
1. Hand-drawn ink flourishes / underline swashes (SVG) marking headings and CTAs.
2. Drop caps + pull quotes with oversized terracotta quote marks for every article.
3. Marginal annotations — small rotated footnotes ("No. 01", "Est. 6 min read") in mono type along the margin.

**Interaction Philosophy**: Subtle and tactile. Links underline with a hand-drawn swash on hover. Cards lift slightly with a soft paper shadow. The marquee strip scrolls slowly. Reading feels uninterrupted; motion never exceeds ~300ms ease-out.

**Animation**: Entrance: fade-up with slight translate (20px), 300ms staggered 60ms. Drop cap reveals with opacity. Marquee scrolls linear infinite. Buttons scale(0.97) on active. Respect prefers-reduced-motion.

**Typography System**:
- Display: "Cormorant Garamond" (600/700, italic) — for huge headings, article titles, pull quotes.
- Script accent: "Pinyon Script" or "Dancing Script" — ONLY for the name/logo and tiny accents, echoing her current script wordmark.
- Body: "Newsreader" or "Source Serif 4" — high readability serif for articles.
- Mono marginalia: "IBM Plex Mono" — small caps annotations, dates, read-time.

**Brand Essence**: A literary editor who shapes stories worth reading — for authors and small presses who want an editor that reads like a fellow writer. Adjectives: warm, literate, meticulous.

**Brand Voice**: Personal, warm, quietly confident; headlines read like a book jacket. Examples: "Shaping stories worth reading." / "One honest page at a time." CTAs: "Start a conversation", "Read the essay".

**Wordmark & Logo**: "Puja Gupta" in Pinyon Script with a hand-inked leaf/swash mark beneath; a square ink-brush leaf glyph as favicon.

**Signature Brand Color**: Sage green `oklch(0.55 0.08 145)` — the brand's ownable color, used for accents, rules, and CTAs.

## Style Decisions
- Margins are a required brand surface: every major page includes at least one meaningful marginal note, numbered annotation, mono footnote, or handwritten editorial mark (e.g. margin rail of footnotes/annotations on desktop).
- Imagery follows one art direction: warm sunlit literary still lifes are primary; hand-drawn illustration appears only as marginal ornament/chapter decoration, not as full panels.
- Empty or low-content journal states are written as quiet notes from the editor's desk — editorial and intentional, never placeholders.
