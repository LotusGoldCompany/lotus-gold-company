# Hero Section Enhancement: Value Proposition Badge

The objective is to re-introduce the "Get the Best Price for Your Gold" message into the hero section as a high-end, visual badge that complements the new premium aesthetic.

## Proposed Changes

### [MODIFY] [page.jsx](file:///c:/Users/JUDE/OneDrive/Desktop/Lotus%20Gold%20Company/lotus-gold-company/app/page.jsx)

- **Badge Implementation**:
    - Add a new `div` above the `<h1>` title.
    - Styling: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6`.
    - Content: A pulsing gold dot and the text `t.heroHead` in a small, airy sans-serif font.
- **Spacing Adjustment**:
    - Ensure the badge has enough margin-bottom (`mb-6`) to breathe before the main heading.

## Verification Plan

### Manual Verification
- View the hero section on desktop and mobile.
- Confirm the "Get the Best Price for Your Gold" badge is visible above the title.
- Verify it looks premium and matches the new icons and typography.
