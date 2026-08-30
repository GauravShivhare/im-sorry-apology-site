# I'm Sorry — Design Direction

## Three possible directions

### Theme Name: Soft-Girl Kawaii Stationery
Very tender, pastel, hand-drawn, and intimate; the site feels like a love note turned into a tiny interactive keepsake.
**Probability:** 0.07

### Theme Name: Midnight Message Garden
A darker, dreamy DM-inspired direction with deep plum, floating hearts, and glowing paper fragments.
**Probability:** 0.03

### Theme Name: Minimal Paper Confession
A quiet editorial letter on warm ivory paper, using restrained blush accents and typographic intimacy.
**Probability:** 0.05

## Selected approach: Soft-Girl Kawaii Stationery

### Design Movement
Contemporary kawaii stationery meets soft-girl scrapbook design, translated into a mobile-first interactive apology card.

### Core Principles
1. Every screen should feel held in a soft paper/card surface with tactile depth.
2. Emotion is communicated through small character gestures, gentle color shifts, and short lines of copy.
3. Interactions should reward patience: reveal, tap, and continue actions unfold the apology rather than rush it.
4. The composition stays narrow and portrait-led, while desktop receives a quiet lavender surround instead of stretching the phone experience.

### Color Philosophy
Warm ivory is the emotional base: safe, honest, and paper-like. Blush coral carries the apology, lavender carries reflection, peach carries warmth, and deep plum is reserved for the opening DM so the transition into softness feels intentional. The ownable signature color is **Bandage Coral `#E87578`**.

### Layout Paradigm
A portrait storybook: each route is a full-height scene, centered inside a phone-like canvas with slightly offset scrapbook elements. Content enters in stacked chapters, and decorative motifs drift outside the reading path rather than creating a conventional marketing grid.

### Signature Elements
- Floating hand-drawn hearts and four-point sparkles.
- Soft paper cards with imperfect corner ornaments and ink-like borders.
- Chubby white bunny/cat illustrations framed as little keepsakes.

### Interaction Philosophy
Buttons feel like tactile stationery tabs: a small press scale, a soft shadow shift, and a color reveal. The three apology points begin as mysteries and turn into readable notes when tapped. The primary action always uses a heart or arrow to make the next emotional beat obvious.

### Animation
Use slow, low-amplitude floating hearts, subtle illustration sway, and 180–260ms card fades/slides. Avoid noisy motion. Respect reduced motion by freezing decorative movement and keeping route changes opacity-only.

### Typography System
Headings use `Caveat` for the handwritten intimacy of a note. Body copy uses `Nunito` for rounded clarity. The final apology title uses `Fraunces` with a gentle serif contrast. Headings are large but never shout; body copy stays at 16–18px with generous line height.

### Brand Essence
A tiny interactive apology letter for someone who deserves more than a text message. **Tender, self-aware, earnest.**

### Brand Voice
Headlines are direct and affectionate. CTAs are short, warm, and specific; microcopy sounds like a person, not a product.

Example lines:
- “I brought the words I should have said sooner.”
- “Tap each little promise when you’re ready.”

### Wordmark & Logo
A hand-drawn coral heart with a lavender bandage across one corner. The mark is used as a visible 32px header emblem and favicon, never as a tiny decorative afterthought.

### Signature Brand Color
Bandage Coral `#E87578` — the visual shorthand for a hurt that is being cared for, not hidden.

## Accessibility & UX Guardrails

- Keep all primary interactions keyboard reachable and visibly focusable.
- Preserve readable contrast for body text and actionable controls.
- Provide meaningful accessible labels for decorative or interactive illustrations.
- Respect `prefers-reduced-motion` so the emotional flow remains comfortable without animation.
- Keep tap targets comfortably sized on mobile and avoid interactions that depend only on hover.
- Ensure the apology narrative remains understandable when decorative effects or images fail to load.
