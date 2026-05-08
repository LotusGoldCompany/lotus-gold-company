# FAQ Section Model Placement - Bottom for Mobile

The objective is to revert the "floating background" experiment and instead place the FAQ model image at the bottom of the section on mobile devices, while maintaining its side-by-side position on desktop.

## Proposed Changes

### [MODIFY] [page.jsx](file:///c:/Users/JUDE/OneDrive/Desktop/Lotus%20Gold%20Company/lotus-gold-company/app/page.jsx)

- **Layout Structure**: 
    - The FAQ container will remain `flex flex-col lg:flex-row`.
    - On mobile, the FAQ accordion will appear first, followed by the model image.
- **Model Image Container**:
    - Change classes to `flex w-full lg:w-[35%] relative items-end justify-center self-stretch mt-12 lg:mt-0`.
    - This ensures it stacks below the FAQs on mobile with some breathing room (`mt-12`).
- **Model Image Styling**:
    - Restore full `opacity-100` for all screen sizes.
    - Keep `absolute` positioning for desktop (`lg`) but ensure it's contained properly on mobile.
    - Use `h-[400px] md:h-[500px] lg:h-full` to give it a strong presence on mobile.

## Verification Plan

### Manual Verification
- View the FAQ section on mobile. Scroll to the bottom to see the model image.
- View on desktop. Verify the model is back on the right side.
- Check that the transition between mobile (stacked) and desktop (side-by-side) is smooth.
