# Hero Section Refinements: Title & Action Button

The objective is twofold:
1. Ensure the "Lotus Gold Company" title appears on a single line on mobile devices.
2. Update the primary CTA from "Contact Us Now" to "Call Now" and make it functional for phone calls.

## Proposed Changes

### [MODIFY] [page.jsx](file:///c:/Users/JUDE/OneDrive/Desktop/Lotus%20Gold%20Company/lotus-gold-company/app/page.jsx)

- **Hero Title**:
    - Update `text-5xl` to `text-4xl sm:text-5xl` on the `<h1>`.
    - Add `whitespace-nowrap` to prevent line breaks.
- **CTA Button**:
    - Update `translations.en.btnContact` to `"Call Now"`.
    - Update `translations.kn.btnContact` to `"ಈಗಲೇ ಕರೆ ಮಾಡಿ"`.
    - Change the button behavior from `onClick={() => setIsModalOpen(true)}` to a `window.location.href = 'tel:+919945077757'` or wrapping it in an `<a>` tag with `href="tel:+919945077757"`.

## Verification Plan

### Manual Verification
- View on mobile: Confirm title is on one line.
- Click "Call Now": Verify it triggers the device's dialer with the correct number.
