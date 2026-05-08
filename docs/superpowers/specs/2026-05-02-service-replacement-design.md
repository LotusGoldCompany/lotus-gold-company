# Service Section Replacement - Free Gold Valuation

This specification outlines the replacement of the "Gold Exchange" service with a "Free Gold Valuation" lead magnet on the homepage.

## User Review Required

> [!NOTE]
> The icon will change from `RefreshCw` to `SearchCheck` to better represent valuation/analysis.

## Proposed Changes

### Component: `app/page.jsx`

#### 1. Translations Update
Update the `srv3` block in both `en` and `kn` dictionaries:

**English (`en`)**
- `srv3`: "Free Gold Valuation"
- `srv3Desc`: "Know the true market value of your gold before you sell. We use advanced computer testing for 100% accuracy."
- `btnLearn`: "Get Free Quote"

**Kannada (`kn`)**
- `srv3`: "ಉಚಿತ ಚಿನ್ನದ ಮೌಲ್ಯಮಾಪನ"
- `srv3Desc`: "ನೀವು ಮಾರಾಟ ಮಾಡುವ ಮೊದಲು ನಿಮ್ಮ ಚಿನ್ನದ ನಿಜವಾದ ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯವನ್ನು ತಿಳಿಯಿರಿ. 100% ನಿಖರತೆಗಾಗಿ ನಾವು ಸುಧಾರಿತ ಕಂಪ್ಯೂಟರ್ ಪರೀಕ್ಷೆಯನ್ನು ಬಳಸುತ್ತೇವೆ."
- `btnLearn`: "ಉಚಿತ ಬೆಲೆ ತಿಳಿಯಿರಿ"

#### 2. UI Component Update
- **Icon**: Replace `RefreshCw` with `SearchCheck` from `lucide-react`.
- **Functionality**: Ensure the "Get Free Quote" button triggers the same `setIsModalOpen(true)` call as other service cards.

## Verification Plan

### Manual Verification
1.  Verify the third service card now displays "Free Gold Valuation".
2.  Switch languages and verify the Kannada text is correct and fits within the card boundaries.
3.  Click the "Get Free Quote" button and ensure the contact modal opens.
4.  Verify the icon has changed to the search/magnifying glass style.
