# Hero Title Desktop Visibility & Container Fix

The objective is to resolve the clipping issue of the hero title on desktop views by expanding the content container's width and optimizing typography scaling for the Kannada language.

## Proposed Changes

### [MODIFY] [page.jsx](file:///c:/Users/JUDE/OneDrive/Desktop/Lotus%20Gold%20Company/lotus-gold-company/app/page.jsx)

- **Container Expansion**:
    - Increase the `max-w-2xl` on the hero content `div` (around line 254) to `max-w-3xl` or `max-w-4xl` on `lg` screens.
- **Dynamic Desktop Scaling**:
    - Adjust the `md:text-7xl` size. For Kannada, `7xl` might be too large for the horizontal space.
    - I'll use a slightly more conservative scale for large screens: `lg:text-6xl xl:text-7xl` to ensure compatibility across more desktop resolutions.
- **Gap Optimization**:
    - Ensure the `gap-16` on the parent flex container provides enough separation between the title and the model image.

## Verification Plan

### Manual Verification
- View the hero section in Kannada on a desktop browser (1280px - 1920px).
- Confirm "ಲೋಟಸ್ ಗೋಲ್ಡ್ ಕಂಪನಿ" is fully visible and not clipped.
- Verify that the title does not overlap with the model image on the right.
