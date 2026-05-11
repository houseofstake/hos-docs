# House of Stake Style Guide

This document captures the current visual system used by the app so it can be reused in another repo or referenced when improving UI documentation.

## Source Of Truth

The styling system is split across a few layers:

- `src/app/layout.tsx`: runtime CSS custom properties for tenant-aware theme colors and the default app font
- `tailwind.config.js`: Tailwind tokens for colors, spacing, type scale, shadows, radius, breakpoints, and animations
- `src/styles/variables.scss`: lightweight SCSS tokens for shared globals and module styles
- `src/styles/globals.scss`: global utilities, shadcn base tokens, backgrounds, scrollbars, and helper classes
- `src/styles/theme.js`: legacy Emotion theme object still used by older code
- `src/styles/fonts.ts`: Next font registrations
- `src/lib/typography.ts` and `src/lib/pageBannerTypography.ts`: shared text-style helpers

## Core Theme Tokens

These are the tenant-aware tokens injected at runtime in `src/app/layout.tsx`. They are the best starting point when porting the look and feel.

| Token | Default RGB | Hex | Typical Use |
| --- | --- | --- | --- |
| `primary` | `0 0 0` | `#000000` | Primary text, icons, dark emphasis |
| `secondary` | `39 39 39` | `#272727` | Secondary text |
| `tertiary` | `167 167 167` | `#A7A7A7` | Muted text, helper copy, placeholders |
| `neutral` | `238 238 235` | `#EEEEEB` | Soft neutral fills |
| `wash` | `245 245 247` | `#F5F5F7` | Light surface fills, inputs, muted containers |
| `line` | `212 211 208` | `#D4D3D0` | Borders and dividers |
| `positive` | `0 153 43` | `#00992B` | Success semantics |
| `negative` | `197 47 0` | `#C52F00` | Error semantics |
| `brandPrimary` | `102 2 60` | `#66023C` | Brand accent, primary CTA, active state |
| `brandSecondary` | `245 245 247` | `#F5F5F7` | Page background and panel surfaces |

In Tailwind these map to tokens like `text-primary`, `text-secondary`, `bg-brandPrimary`, `bg-brandSecondary`, `border-line`, and `text-negative`.

## Supporting Palette

The repo also uses a few recurring hard-coded colors in newer proposal and governance screens.

### Semantic Status Colors

| Use | Background | Foreground |
| --- | --- | --- |
| Success | `#DCFCE7` | `#16A34A` |
| Info / Active | `#DBEAFE` | `#2563EB` |
| Warning | `#FEF3C7` | `#92400E` |
| Danger | `#FEF2F2` or `#FEE2E2` | `#DC2626` |

### Voting Colors

| Use | Hex |
| --- | --- |
| Vote for | `#06AB34` |
| Vote against | `#D62600` |
| Vote abstain | `#A7A7A7` |

### Neutral Surfaces Seen In Components

| Use | Hex |
| --- | --- |
| Primary page background | `#F5F5F7` |
| Cream background pattern | `#FFFCF4` |
| White cards / dialogs | `#FFFFFF` |
| Soft borders in newer proposal UI | `#E0E0DD` |
| Dark text used in newer UI | `#1A1A1B` |
| Muted text used in newer UI | `#6B6B6B` |

`tailwind.config.js` also includes broader palettes (`gray`, `red`, `green`, `blue`, `pink`, `agora-stone`, etc.), but the app's signature look mostly comes from the tokens above.

## Typography

### Registered Fonts

| Font | Source | Notes |
| --- | --- | --- |
| Inter | `src/styles/fonts.ts` | Default app font and most body/UI text |
| Chivo Mono | `src/styles/fonts.ts` | Eyebrows, labels, compact metadata |
| Cousine | `src/styles/fonts.ts` | Uppercase technical labels in some governance surfaces |
| Rajdhani | `src/styles/fonts.ts` | Available for tenant use |
| Space Grotesk | `src/styles/fonts.ts` | Available for tenant use |
| TransSansPremium | `src/styles/globals.scss` | Custom font-face, tenant-specific |
| IBM Plex Mono | `tailwind.config.js` | `font-code` utility |

### Important Note

Newer proposal pages also use `font-outfit` and `font-dmMono` utility classes heavily. Those classes are used in the app code, but they are not declared in the main Tailwind config or `src/styles/fonts.ts`. If you port this system into another repo, define those utilities explicitly or replace them with supported font classes.

### Shared Text Patterns

These are the clearest reusable text styles already centralized in the repo:

| Pattern | Class Recipe | Source |
| --- | --- | --- |
| Muted caption | `text-xs leading-[18px] text-[#6b6b6b]` | `src/lib/typography.ts` |
| Muted small meta | `font-inter text-[12px] leading-[18px] text-[#6b6b6b]` | `src/lib/typography.ts` |
| Page eyebrow | `font-chivoMono text-[10px] font-bold uppercase leading-[15px] tracking-[0.8px] text-[#66023c]` | `src/lib/pageBannerTypography.ts` |
| Page banner title | `font-inter text-[26px] font-bold leading-[39px] tracking-[-0.52px] text-[#1a1a1b]` | `src/lib/pageBannerTypography.ts` |
| Page hero title | `font-inter font-bold text-[26px] ... lg:text-[52px]` | `src/lib/pageBannerTypography.ts` |
| Page banner description | `font-inter text-[13px] leading-[21px] text-[#6b6b6b]` | `src/lib/pageBannerTypography.ts` |
| Section title | `font-inter text-[22px] font-bold leading-[33px] tracking-[-0.44px] text-[#1a1a1b]` | `src/lib/pageBannerTypography.ts` |

### Typography Conventions

- Inter is the default body and interface font.
- Mono fonts are used for labels, counters, vote stats, and compact metadata.
- Uppercase micro-labels usually use `10px` to `11px` type with wide tracking.
- Headings frequently use tight negative tracking and bold weights.
- Newer governance views prefer `#1A1A1B` for primary text and `#6B6B6B` for secondary copy.

## Layout And Spacing

### Breakpoints

| Token | Width |
| --- | --- |
| `sm` | `640px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1536px` |

### Container

- Tailwind container is centered.
- Default container padding is `2rem`.
- `desktop` max width is `1280px`.

### Spacing Scale

The Tailwind scale follows the normal quarter-rem system:

| Token | Value |
| --- | --- |
| `1` | `0.25rem` |
| `2` | `0.5rem` |
| `3` | `0.75rem` |
| `4` | `1rem` |
| `5` | `1.25rem` |
| `6` | `1.5rem` |
| `8` | `2rem` |
| `10` | `2.5rem` |
| `12` | `3rem` |
| `16` | `4rem` |

The app also extends `gap` with half-steps such as `1.5`, `2.5`, and `3.5`.

## Radius, Borders, And Shadows

### Radius

| Token | Value |
| --- | --- |
| default | `4px` |
| `lg` | `var(--radius)` and defaults to `8px` |
| `xl` | `12px` |
| `2xl` | `16px` |
| full | pill / circle |

Common real-world shapes in the UI:

- Cards: `12px` to `16px`
- Inputs and segmented controls: `8px` to `10px`
- Primary buttons: often full pill or `10px`
- Status chips: rounded-full

### Borders

- Primary border token is `border-line`.
- Newer proposal surfaces often use `#E0E0DD` for softer separators.
- White surfaces with a subtle border are the default card pattern.

### Shadows

| Token | Value |
| --- | --- |
| `shadow-newDefault` | `0px 4px 12px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(0, 0, 0, 0.03)` |
| `shadow-newHover` | `0px 6px 16px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.03)` |
| `shadow-switcher` | soft floating toggle shadow |

The default reusable card helper is `.gl_box`, which applies border, padding, `shadow-newDefault`, and `rounded-xl`.

## Backgrounds And Global Treatments

Global helpers in `src/styles/globals.scss` provide the app backdrop:

- `.gl_bg-dotted-pattern`: fixed cream background with an 8px dotted pattern
- `.gl_bg-radial-gradient`: fixed radial wash layered above the dot pattern
- `.gl_page_divider`: shared horizontal divider
- `.gl_votes_for`, `.gl_votes_against`, `.gl_votes_abstain`: voting text colors

The app also customizes scrollbars to match the off-white surface palette.

## Component Styling Patterns

### Cards

- Most cards are white on top of a `brandSecondary` page background.
- Borders are light and shadows are subtle.
- New governance cards often combine `bg-white`, `border-[#E0E0DD]`, and `rounded-[12px]`.

### Buttons

- Primary CTA: `bg-brandPrimary text-white`, usually pill or `10px` radius
- Secondary CTA: white background, light border, dark text
- Hover states are usually opacity changes or a slightly darker background, not dramatic motion

### Inputs And Filters

- Inputs frequently use `bg-[#F5F5F7]` or white backgrounds with light borders
- Placeholder and helper text commonly use `#6B6B6B`
- Focus rings often use a low-opacity brand primary tint

### Chips, Tags, And Pills

- Rounded-full or softly rounded
- Often uppercase
- Frequently paired with mono fonts at `10px` to `11px`
- Semantic fills use the success/info/warning/danger palette above

## Shadcn Layer

The repo includes shadcn-style HSL tokens in `src/styles/globals.scss`:

- `--background`
- `--foreground`
- `--muted`
- `--popover`
- `--border`
- `--input`
- `--card`
- `--destructive`
- `--ring`

These are tuned to the same off-white / charcoal palette and power shared primitives like inputs, popovers, and cards.

## Porting Checklist For Another Repo

If you want the quickest faithful transfer, copy or recreate these pieces in this order:

1. `src/app/layout.tsx` theme token defaults and CSS variable wiring
2. `tailwind.config.js` theme extension for colors, radius, spacing, shadows, and fonts
3. `src/styles/globals.scss` background helpers, shadcn tokens, and global utility classes
4. `src/styles/variables.scss` if you still need SCSS module support
5. `src/styles/fonts.ts` and any required font assets
6. `src/lib/typography.ts` and `src/lib/pageBannerTypography.ts` shared text recipes

Minimum viable subset to reproduce the look:

- `brandPrimary`, `brandSecondary`, `wash`, `line`, `primary`, `secondary`, `tertiary`
- Inter plus one mono font
- `shadow-newDefault`
- `12px` card radius and pill CTAs
- the dotted + radial page background helpers

## Documentation Notes

The current repo still contains a mix of styling approaches:

- Tailwind is the primary path for new work.
- SCSS is still used for globals and module styles.
- Emotion theme helpers remain for legacy components.
- Some newer screens use hard-coded colors and font utilities that are not fully centralized yet.

If you keep improving the design system, the highest-value cleanup would be:

1. Centralize `font-outfit` and `font-dmMono`
2. Replace repeated hard-coded proposal colors with named tokens
3. Reduce overlap between `theme.js`, `variables.scss`, runtime CSS vars, and Tailwind tokens
