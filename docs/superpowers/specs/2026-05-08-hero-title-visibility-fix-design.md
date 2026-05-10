# Hero Title Visibility & Scaling Fix

The objective is to resolve the horizontal overflow issue where the company name (specifically in Kannada) is being cut off on mobile devices, ensuring the full brand name is visible on a single line where possible.

## Proposed Changes

### [MODIFY] [page.jsx](file:///c:/Users/JUDE/OneDrive/Desktop/Lotus%20Gold%20Company/lotus-gold-company/app/page.jsx)

- **Dynamic Font Size**:
    - Use a slightly smaller font size for mobile (`text-3xl` vs `text-4xl`) to accommodate wide Kannada characters.
    - Implement conditional sizing or a safer responsive scale: `text-3xl sm:text-4xl md:text-7xl`.
- **Overflow Handling**:
    - Keep `whitespace-nowrap` but ensure the parent container doesn't clip the text.
    - Or, switch to `whitespace-normal md:whitespace-nowrap` if the screen is extremely narrow (below 360px) to prevent total invisibility of the last word.
- **Visual Check**:
    - Ensure the gold gradient and drop shadow are applied correctly to the full text string.

## Verification Plan

### Manual Verification
- View the hero section in Kannada on a mobile device (320px - 375px).
- Confirm "ಲೋಟಸ್ ಗೋಲ್ಡ್ ಕಂಪನಿ" is fully visible.
- Switch to English and verify "Lotus Gold Company" is also fully visible and looks premium.
