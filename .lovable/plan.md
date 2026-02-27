
# Add Document Visual Steps Section

## What We're Building
A new reusable component that recreates the 3-step document visual from the uploaded screenshot. Since we don't have the actual document images from the screenshot, we'll build stylized document mockups using CSS/HTML that look professional and match the site's design system.

## The 3 Steps
1. **Receive your Electronic Visa proof of purchase** -- Shows a styled e-visa document mockup with the Cuba Travel Services logo area, "ELECTRONIC VISA NUMBER", and key details
2. **Complete your D'Viajeros Form** -- Shows a styled D'Viajeros form mockup with the important notice about the e-visa number and seal requirement
3. **Receive your Completed D'Viajeros Form with Seal and Electronic Visa Number** -- Shows the final document with QR code area, visa number, and seal indicators

Each step connected by arrow indicators (matching the existing site pattern). Documents will be styled as card mockups with borders, subtle shadows, and the navy/gold color scheme.

## Placement
- **Homepage**: Below the existing "How It Works" 3-step section (acts as a visual reinforcement)
- **Apply page (e-visa page)**: Below the application form, before the footer

## Technical Details

### New file: `src/components/DocumentSteps.tsx`
- Reusable component with the 3-step document visual layout
- Uses Lucide icons (FileText, ArrowRight, QrCode, Shield, Stamp) instead of emojis
- Responsive: 3-column on desktop, stacked on mobile
- Uses `useScrollAnimation` hook for scroll-triggered animations
- Styled document mockups built with Tailwind (rounded cards, borders, subtle document-like styling)
- Includes the important notice: "YOUR E-VISA WILL NOT BE ACCEPTED UNLESS THE E-VISA NUMBER & 'DIRECCION DE IDENTIFICACION, INMIGRACION Y EXTRANJERIA' SEAL IS INCLUDED ON YOUR D'VIAJEROS FORM CONFIRMATION PAGE"

### Modified: `src/pages/Index.tsx`
- Import and add `DocumentSteps` after `HowItWorks`

### Modified: `src/pages/Apply.tsx`
- Import and add `DocumentSteps` below the `ApplicationCard`, before the footer
