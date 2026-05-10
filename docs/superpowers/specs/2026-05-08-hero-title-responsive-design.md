# Hero Title Responsive Improvements

The objective is to ensure the "Lotus Gold Company" title in the hero section appears on a single line on mobile devices to maintain brand integrity and a premium look.

## Proposed Changes

### [MODIFY] [page.jsx](file:///c:/Users/JUDE/OneDrive/Desktop/Lotus%20Gold%20Company/lotus-gold-company/app/page.jsx)

- **Typography Adjustments**:
    - Update `text-5xl` to `text-4xl sm:text-5xl` on the `<h1>` tag.
    - Add `whitespace-nowrap` to the `<h1>` tag to prevent line breaks.
- **Container Sizing**:
    - Ensure the parent container has enough horizontal padding/margin to handle the wider text line.

## Verification Plan

### Manual Verification
- View the hero section on a mobile device (320px - 375px width).
- Confirm "Lotus Gold Company" is on one line.
- Verify that it doesn't overflow the screen horizontally.
