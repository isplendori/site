# Anna-UI

Anna-UI is the design direction distilled from the Splendori interface and the Taste Skill Pack reading. Use it as the default art direction whenever a project calls for refined, strategic, editorial, premium UI without generic startup patterns.

## Core Identity

Anna-UI sits between editorial premium, quiet luxury, minimalism, and swiss-system discipline.

It should feel:
- intentional, calm, and authored
- premium through proportion, spacing, typography, and restraint
- editorial rather than template-like
- structured without becoming cold
- strategic, direct, and emotionally confident

It should not feel:
- like generic SaaS
- like a card-heavy landing page
- like AI-purple gradient UI
- like luxury through gold, marble, glass, or fake status
- like empty minimalism with no visual idea

## Visual Principles

Use fewer, stronger layout decisions. Prefer one complete scene over many weak sections.

Whitespace is structural. It should separate chapters, create calm, and make content feel considered.

Cards are not the default. Use borders, rails, dividers, open grids, typography, and image plates before adding another container.

The page should still feel designed if the logo is removed.

Every section needs a job: orient, persuade, explain, prove, convert, or create rhythm.

## Style Mix

Use these styles as the main recipe:

- Editorial Premium: typography, reading rhythm, chapter pacing, image-led moments.
- Quiet Luxury: restraint, status through control, muted materiality, slow confidence.
- Minimalism: exact hierarchy, reduced noise, disciplined spacing.
- Swiss System: grid logic, metadata, rule lines, precise alignment.

Avoid mixing in loud cinematic, brutalist, or dashboard language unless the product clearly demands it.

## Layout Grammar

Preferred structures:
- centered max-width editorial container
- thin border rails
- ruled section dividers
- split editorial leads
- large typographic slabs
- quiet object or image plates
- process rails
- disciplined grids
- metadata rows
- restrained FAQ rows
- portfolio grids with meaningful image crops

Avoid:
- equal three-card feature rows as the main idea
- nested cards
- decorative wrappers around every section
- generic hero-left-text-right-image as the only concept
- oversized CTA banners that break the tone
- repeated pill badges without purpose

## Typography

Use a strong type hierarchy:

- Serif display for emotional and editorial headlines.
- Sans for body, navigation, CTAs, and practical copy.
- Mono or tightly tracked uppercase only for small labels, metadata, and section markers.

Headlines should be short, shaped, and deliberate. Let italic serif or one accent phrase carry emphasis.

Body copy should be concise and edited. Avoid startup filler like "transform your business", "unlock potential", or "all-in-one solution".

Keep long text around readable measures. Do not let paragraphs span the full viewport.

## Color System

Base palette:
- off-white or white background
- softened charcoal and dark graphite
- muted gray-blue text
- thin translucent borders
- one restrained accent, usually a burned red or terracotta

Splendori reference colors:
- accent: `#9E372A`
- dark text: `#202026`
- deep surface: `#12141B`
- title gray: `#434A57`
- muted text: `#8E90A1`
- soft border: `rgba(114, 123, 142, 0.1)`
- dashed border: `rgba(114, 123, 142, 0.28)`

Use the accent sparingly: italic words, hover states, chart marks, tiny UI signals, or one major strategic surface.

Avoid:
- purple-blue AI gradients
- neon glows
- pure black as a default page background
- beige emptiness without art direction
- too many accent colors

## Components

Buttons:
- Primary buttons can use dark graphite or burned red.
- Secondary buttons should often be dashed, thin-bordered pills.
- CTAs should say what happens next.

Labels:
- Use uppercase mono, small size, increased tracking.
- Labels should orient the section, not decorate it.

Cards:
- Use only when they create hierarchy or interaction.
- Keep borders light and radii controlled.
- Avoid nested shells.

Navigation:
- Slim, calm, and structurally aligned.
- Avoid chunky app chrome.
- Dropdowns and utility buttons should feel quiet and precise.

Dividers:
- Use as rhythm, not filler.
- Thin rules, pattern bands, or small signature icons are valid if they reinforce identity.

## Motion

Motion should feel near-silent and expensive.

Good motion:
- fade and slight vertical reveal
- soft blur resolving into clarity
- restrained underline or border movement
- image crop or mask reveal
- subtle hover color shift
- measured chart drawing when data is relevant
- premium cascade reveals, where each element appears in a clear authored order
- calm carousel motion that gives media time to breathe instead of rushing content

Avoid:
- transition-all everywhere
- hover scale on every element
- endless floating loops
- flashy scroll spectacle
- motion that becomes louder than the content
- long empty delays where important content is missing from the first screen
- observer-driven hero effects that create a visible flash on reload

Always preserve readability and layout stability.

### Hero Cascade

The Anna-UI hero entrance should use a fast, premium waterfall effect: soft blur, slight upward movement, and opacity resolving into clarity. It should feel polished, not slow.

Preferred order:
1. Background SVG, architecture, media, or spatial anchor.
2. Tagline or small badge, usually uppercase mono.
3. Main title, often word by word when the phrase is important.
4. Supporting paragraph.
5. First CTA.
6. Second CTA.

Timing should be compact. Avoid leaving the hero without its title on page load.

Reference timing:
- Background anchor starts immediately.
- Tagline appears around `180ms`.
- First title words start around `420ms`.
- Second title line starts around `780ms`.
- Supporting text starts around `1120ms`.
- First CTA starts around `1350ms`.
- Second CTA starts around `1500ms`.

Recommended feel:
- Background: `1s` blur/fade/scale settle.
- Title words: about `0.95s` each, staggered by `80ms`.
- Tagline, text, and buttons: about `0.9s`.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` or a similarly soft premium ease.

For hero animations, prefer component-local CSS/keyframes over scroll observer triggers. The first viewport should animate reliably on F5 and first page open, with no appear-hide-appear flash.

### Carousel Motion

Carousels in Anna-UI should feel editorial and deliberate.

Use carousels for:
- portfolio covers
- case study imagery
- image-led proof
- curated visual sequences
- product or object plates

Carousel behavior:
- Keep transitions smooth and calm.
- Use opacity, transform, mask, or crop movement rather than loud slide effects.
- Let each image hold long enough to be seen.
- Avoid autoplay that feels nervous or promotional.
- Navigation controls should be quiet, precise, and visually integrated.
- Hover states may pause, reveal controls, or slightly refine contrast.

Carousel visuals:
- Large media should carry the page mood.
- Crops should be intentional.
- Gradients may be used only to preserve text readability or create a soft editorial edge.
- Do not turn carousel items into generic card spam.

## Imagery

Use real visual anchors when the page benefits from them:
- curated product shots
- architecture or interiors
- object still lifes
- portfolio imagery
- diagrams, charts, or process visuals
- large image plates with intentional crops

Images should feel chosen, not inserted.

Avoid:
- generic stock-team photos
- decorative blobs
- abstract gradients pretending to be imagery
- tiny thumbnails that do not carry weight

## Copy Tone

The voice is direct, composed, and strategic.

Use:
- short confident sentences
- concrete promises
- plain language with premium restraint
- occasional sharp contrast between problem and result

Avoid:
- hype
- vague inspiration
- corporate filler
- fake metrics
- fake testimonials
- overly cute language

## Implementation Notes

For React or Next.js:
- Prefer Server Components by default.
- Keep interactivity in small client components.
- Use Tailwind when the project already uses it.
- Reuse the existing design system before inventing new primitives.
- Check package.json before adding visual libraries.
- Keep responsiveness content-driven, not just breakpoint-driven.

When adapting Anna-UI to another project:
1. Identify the existing brand temperature and typography.
2. Preserve the project's useful system conventions.
3. Apply Anna-UI through layout rhythm, type, color restraint, and section pacing.
4. Do not copy Splendori visuals literally unless the project calls for the same brand world.
5. Keep one strong visual thesis per page.

## Preflight

Before considering a page finished, ask:

- Does the first screen feel like a complete scene?
- Is the typography doing real design work?
- Are cards used only where they earn their place?
- Is the accent rare enough to matter?
- Does the layout have rhythm between sections?
- Is there a real visual anchor when one is needed?
- Does the page avoid generic AI/SaaS patterns?
- Would this still feel specific without the logo?
- Does the motion support the design rather than decorate it?
- Does it feel premium without trying too hard?
