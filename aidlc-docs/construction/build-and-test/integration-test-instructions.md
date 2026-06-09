# Integration Test Instructions — OURTECH Website

## Purpose
Verify that components work together correctly as a complete single-page application.

## Integration Test Scope

Since this is a client-side SPA with no backend services, integration testing focuses on:
1. **Component composition** — All sections render within App without errors
2. **Navigation integration** — Navbar scrolls to correct sections
3. **Form submission flow** — Contact form validates, sanitizes, and submits
4. **Image loading** — Certificate image loads from public directory
5. **Animation triggers** — Scroll-triggered animations fire on viewport entry

## Manual Integration Test Scenarios

### Scenario 1: Full Page Load
- **Description**: Verify all 8 sections load without errors
- **Steps**:
  1. Run `npm run dev` and open `http://localhost:5173`
  2. Scroll through entire page
  3. Verify each section renders: Hero, About, Value Proposition, Services, Certifications, Clients, Why Partner, Contact
- **Expected**: All sections visible, no console errors, no broken layouts

### Scenario 2: Navigation Integration
- **Description**: Verify navbar smooth-scrolls to each section
- **Steps**:
  1. Click each navigation link in the navbar
  2. Verify page scrolls smoothly to the correct section
  3. Verify active section is highlighted in navbar
  4. Test mobile hamburger menu opens/closes
- **Expected**: Smooth scroll to correct sections, active highlighting updates, mobile menu functional

### Scenario 3: Certificate Lightbox
- **Description**: Verify certificate image click opens full-size modal
- **Steps**:
  1. Scroll to Certifications section
  2. Click the certificate image
  3. Verify modal opens with full-size image
  4. Click close button or backdrop to dismiss
- **Expected**: Modal opens/closes correctly, image is readable at full size

### Scenario 4: Contact Form Validation Flow
- **Description**: Verify end-to-end form validation and submission
- **Steps**:
  1. Scroll to Contact section
  2. Submit empty form — verify all 3 error messages appear
  3. Fill in valid name, invalid email — verify only email error
  4. Fill in all valid fields — verify no errors, submit button active
  5. Submit (will fail without Formspree setup — verify error state displays)
- **Expected**: Validation errors appear/clear correctly, form states transition properly

### Scenario 5: Responsive Layout
- **Description**: Verify responsive design across breakpoints
- **Steps**:
  1. Open browser DevTools and switch to mobile viewport (375px)
  2. Verify navbar shows hamburger menu
  3. Verify service cards stack vertically
  4. Verify text is readable, no horizontal overflow
  5. Switch to tablet (768px) and desktop (1280px) — verify layout adapts
- **Expected**: Layout adapts correctly at each breakpoint, no content overflow

### Scenario 6: Accessibility Check
- **Description**: Verify keyboard navigation and screen reader compatibility
- **Steps**:
  1. Tab through all interactive elements
  2. Verify focus indicators are visible
  3. Verify all images have alt text
  4. Use Lighthouse Accessibility audit
- **Expected**: All elements keyboard-accessible, focus visible, Lighthouse accessibility > 90

## Browser Testing Matrix

| Browser | Version | Priority |
|---|---|---|
| Chrome | Latest 2 | High |
| Firefox | Latest 2 | High |
| Safari | Latest 2 | High |
| Edge | Latest 2 | Medium |
| Mobile Chrome (Android) | Latest | High |
| Mobile Safari (iOS) | Latest | High |

## Automated Integration Testing (Future)

For automated E2E testing, consider adding:
- **Playwright** or **Cypress** for browser automation
- Test navigation flows, form submission, and responsive layouts programmatically
- Include in CI pipeline for regression testing

Currently not implemented — manual testing sufficient for initial deployment.
