# Contact Form Update - Gold Details Integration

This specification outlines the changes to the `ContactForm` component to collect more detailed information about gold sales and simplify the service selection.

## User Review Required

> [!IMPORTANT]
> The "Gold Exchange" option will be permanently removed from the service dropdown.
> New fields (Grams and Purity) will be added as required fields for better lead qualification.

## Proposed Changes

### Component: `ContactForm.jsx`

#### 1. Data Structure (`formData`)
Update the initial state to include:
- `grams`: `string` (empty initial)
- `purity`: `string` (default: "22K")

#### 2. Service Options
Modify the `service` select field:
- **Remove**: `Gold Exchange`
- **Retain**: `Sell Gold for Cash`, `Release Pledged Gold`, `General Enquiry`

#### 3. New UI Fields (Option B - Stacked)
Add the following fields between "Phone Number" and "Service Type":

**A. Total Grams**
- Label: `Total Grams (Approx)`
- Input Type: `number` (step="0.01")
- Required: `true`
- Placeholder: `e.g. 15.5`

**B. Gold Purity**
- Label: `Gold Purity`
- Input Type: `select`
- Required: `true`
- Options: `18K`, `20K`, `22K`, `24K`, `Other / Not Sure`

#### 4. Submission Logic
Ensure `grams` and `purity` are included in the `submissionData` sent to Web3Forms.

## Verification Plan

### Manual Verification
1.  Open the Contact Modal.
2.  Verify "Gold Exchange" is missing from the dropdown.
3.  Verify "Total Grams" and "Gold Purity" fields are present and styled correctly.
4.  Submit a test form and verify that the success state triggers.
5.  Check Web3Forms dashboard (if accessible) to ensure new fields are recorded.
