---
name: Lumina Utility
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3d4947'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#555f70'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f4'
  on-secondary-container: '#596374'
  tertiary: '#924628'
  on-tertiary: '#ffffff'
  tertiary-container: '#b05e3d'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d9e3f7'
  secondary-fixed-dim: '#bdc7db'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4757'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#773215'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max-width: 1200px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built for high-utility mood tracking, prioritizing "dense but calm" interactions. The aesthetic is rooted in **Modern Minimalism** with a focus on functional clarity and deterministic feedback. It avoids unnecessary decoration, instead using precise alignment and subtle tonal shifts to guide the user's attention. 

The target audience consists of individuals seeking a reliable, low-friction tool for daily reflection. The UI should evoke a sense of professional calm—feeling more like a high-end productivity tool than a lifestyle app. This is achieved through a controlled color palette, generous whitespace within high-density layouts, and a "quiet" interface that recedes to let user content take center stage.

## Colors

The color strategy uses a "Teal on Grayscale" approach. The primary teal (#0D9488) is used sparingly for interactive states and key indicators, ensuring it remains impactful without causing visual fatigue. 

The background is a soft off-white (#F9FAFB), providing a focused canvas that is easier on the eyes than pure white. Text uses a deep charcoal (#111827) to maintain high contrast for legibility, while secondary text and UI borders utilize lighter slates to create a clear visual hierarchy. Semantic colors for success and error are strictly reserved for state-based feedback.

## Typography

This design system utilizes **Geist** for its technical precision and exceptional legibility at small sizes. The typography is tuned for density; line heights are tight but sufficient to prevent "bleeding" between rows.

For mobile devices, `headline-lg` should scale down to 20px to ensure long mood entries do not wrap aggressively. Use `label-sm` for metadata like timestamps or category tags to maintain a clean, organized data grid. All weights should stay between 400 (Regular) and 600 (Semi-Bold) to keep the "calm" aesthetic without the aggression of heavy black weights.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strict 4px baseline rhythm. This ensures that even when information density is high, the alignment feels intentional and rhythmic.

- **Desktop:** 12-column grid with 16px gutters. Main content area should be centered with a max-width of 1200px to prevent horizontal eye strain during reading.
- **Mobile:** Single column with 16px side margins. 
- **Density:** Components use tight internal padding (e.g., 8px or 12px) to allow more data points to be visible on screen at once. Negative space should be used between functional groups, rather than between individual elements, to create "clusters" of information.

## Elevation & Depth

To maintain a "flat but layered" feel, this design system uses **Tonal Layers** supplemented by **Low-Contrast Outlines**. 

Depth is primarily signaled through background color shifts:
- **Level 0 (Base):** #F9FAFB (Main background).
- **Level 1 (Cards/Containers):** #FFFFFF with a 1px solid border (#E5E7EB).
- **Interactive Elevation:** On hover, cards or buttons do not rise; instead, they receive a very soft, ambient shadow (4px blur, 0.05 opacity) or a subtle border color darkening. 

Avoid heavy shadows or dramatic blurs. The goal is a "deterministic" look where layers feel like physical sheets of paper stacked precisely.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. This provides a modern, approachable feel while maintaining the structural integrity of a utility tool. 

- **Small elements (Inputs, Buttons):** 4px (0.25rem) radius.
- **Medium elements (Cards, Modals):** 8px (0.5rem) radius.
- **System-wide consistency:** Avoid pill shapes or circles except for user avatars or specific status dots, as they break the rigid grid-like efficiency of the layout.

## Components

### Buttons
- **Primary:** Solid Teal (#0D9488) with white text. 4px border radius.
- **Secondary:** White background with a 1px border (#D1D5DB).
- **Sizing:** Compact heights (32px or 36px) to support the high-density layout.

### Input Fields
- **Style:** Subtle 1px border (#D1D5DB) that shifts to Primary Teal on focus. 
- **Background:** White (#FFFFFF).
- **Labels:** Use `label-md` positioned directly above the input with a 4px gap.

### Cards
- **Structure:** Used for daily mood summaries. Card headers should use `headline-sm` with a light bottom border to separate metadata from the mood note body.
- **Padding:** 16px internal padding for standard cards; 12px for compact "list-view" cards.

### Chips & Tags
- **Appearance:** Low-contrast backgrounds (e.g., #F3F4F6) with `label-sm` text. Used for mood descriptors (e.g., "Productive", "Tired").

### Mood Indicators
- **Visuals:** Use a 5-point scale represented by subtle monochromatic icons or colored dots (ranging from Error Red to Success Green) to provide instant visual scanning of the week's sentiment.