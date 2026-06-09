# Requirements Document — OURTECH Website

## Intent Analysis

| Field | Value |
|---|---|
| **User Request** | Create a website for Ourtech, include the DICT D-TAP certificate |
| **Request Type** | New Project (greenfield) |
| **Scope Estimate** | Single Component (one SPA application) |
| **Complexity Estimate** | Moderate — SPA with multiple sections, animations, dark theme, contact form |

---

## Project Overview

Build a single-page application (SPA) corporate website for **OURTECH Information Technology Solutions**, a Filipino-owned ICT services and integration company. The website will serve as a corporate portfolio showcasing the company's services, certifications, and credibility. It will feature a tech-forward dark theme with animations and prominently display the DICT D-TAP Certificate of Accreditation.

---

## Functional Requirements

### FR-01: Single Page Application Structure
- The website MUST be a single scrolling page with distinct sections
- Navigation MUST allow smooth scrolling to each section
- A fixed/sticky navigation bar MUST be present for section access

### FR-02: Website Sections
The page MUST include the following sections (in order):

1. **Hero / Landing Section**
   - Company name: OURTECH Information Technology Solutions
   - Tagline: "Smart. Secure. Future-Ready Technology for Modern Organizations"
   - Call-to-action button (scroll to services or contact)
   - Tech-forward animated background or visual elements

2. **About / Company Overview**
   - Company overview (Filipino-owned ICT services company, est. 2022)
   - Headquartered in Baguio City, operations in Pangasinan
   - DTI-registered MSME, BIR compliant
   - Team composition highlights (ICT professionals, engineers, cybersecurity practitioners, military communication specialists, educators)

3. **Value Proposition**
   - "Technology Built for Performance. Solutions Built for Longevity."
   - Key pillars: Reliability, Security Focus, Future-Readiness

4. **Core Services**
   - Display all 8 core business solutions with icons/visuals:
     - Network & Infrastructure Engineering
     - Cybersecurity & Information Assurance
     - Emergency Communication & Public Warning Systems
     - IoT & Smart Monitoring Technologies
     - Aerial Data & Drone Technology
     - Governance, Risk & Compliance (GRC)
     - Data Privacy & NPC Compliance
     - Consulting, Training & Turnkey ICT Implementation

5. **Certifications / Accreditations**
   - Prominently display the DICT D-TAP Certificate image
   - Include text: "DICT - Trusted Assessment Provider (D-TAP) for Information Security Management System (ISMS)"
   - Accredited Since: May 2026
   - Signed by: Engr. George P. Tardio, Officer-in-Charge, Cybersecurity Bureau

6. **Clients**
   - Display client sectors served (Industrial Firms, Government Units, Security Agencies, Educational Institutions, Healthcare Entities, Financial Services, Hospitality Properties, Residential Developments, Infrastructure Projects)

7. **Why Partner With OURTECH**
   - Enterprise-Caliber Delivery
   - Strategic, Standards-Aligned Approach
   - Client-Centric Customization
   - Agility with Discipline
   - Commitment to Excellence

8. **Contact Section**
   - Simple contact form (name, email, message)
   - Company location information (Baguio City, Philippines)

### FR-03: Navigation
- Fixed top navigation bar with links to each section
- Mobile-responsive hamburger menu for smaller screens
- Active section highlighting in navigation
- Smooth scroll behavior on navigation clicks

### FR-04: Contact Form
- Fields: Name (required), Email (required, validated), Message (required)
- Client-side form validation
- Submit button with visual feedback
- Success/error state display after submission attempt

### FR-05: Certificate Display
- The DICT D-TAP Certificate image (DTAP Certifcate.jpg) MUST be displayed in the Certifications section
- Image MUST be viewable at a readable size
- Optional: Click/tap to view full-size image (lightbox or modal)

### FR-06: Responsive Design
- The website MUST be fully responsive across desktop, tablet, and mobile
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Touch-friendly interactions on mobile

---

## Non-Functional Requirements

### NFR-01: Performance
- Initial page load: < 3 seconds on 4G connection
- Lighthouse performance score: > 80
- Optimized images (compressed, lazy-loaded where appropriate)
- Code splitting for SPA bundle optimization

### NFR-02: Visual Design & Theme
- **Dark theme** as primary color scheme
- Tech-forward aesthetics with bold elements
- Smooth CSS/JS animations (scroll-triggered, hover effects)
- Consistent typography and spacing system
- Color palette: Dark backgrounds with accent colors (suggest brand-aligned orange/gold from OURTECH logo)

### NFR-03: Accessibility
- WCAG 2.1 Level AA compliance target
- Semantic HTML structure
- Sufficient color contrast ratios on dark theme
- Keyboard navigable
- Alt text on all images
- ARIA labels where needed

### NFR-04: Browser Compatibility
- Modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Graceful degradation for older browsers

### NFR-05: SEO
- Proper meta tags (title, description, Open Graph)
- Semantic HTML (h1-h6 hierarchy, landmarks)
- Structured data (Organization schema)

### NFR-06: Deployment
- Recommended: Static hosting via **Vercel** or **Netlify** (free tier, simple deployment, HTTPS included)
- Build output must be deployable as static files (SPA with client-side routing)

---

## Technical Decisions

| Decision | Choice | Rationale |
|---|---|---|
| **Framework** | React (with Vite) | User chose SPA; React + Vite offers fast build, modern DX, wide ecosystem |
| **Styling** | Tailwind CSS | Utility-first, excellent for custom dark themes, responsive design |
| **Animations** | Framer Motion | React-native animation library, smooth scroll-triggered animations |
| **Contact Form** | Client-side with email service (e.g., EmailJS or Formspree) | No backend needed, simple integration |
| **Deployment** | Vercel (recommended) | Free, automatic HTTPS, Git-based deploys, excellent for React SPAs |
| **Testing (PBT)** | fast-check with Vitest | PBT framework for JS/TS, integrates with Vitest test runner |

---

## Assets

| Asset | Location | Usage |
|---|---|---|
| DICT D-TAP Certificate | `DTAP Certifcate.jpg` (workspace root) | Certifications section |
| Company Profile PDF | `.KIRO/Ourtech Company Profile.pdf` | Content reference (not displayed on site) |

---

## Extension Configuration

| Extension | Enabled | Decided At |
|---|---|---|
| Security Baseline | Yes | Requirements Analysis |
| Property-Based Testing | Yes (Full) | Requirements Analysis |

---

## Constraints & Assumptions

- No backend server — the site is a client-side SPA deployed as static files
- Contact form will use a third-party service (EmailJS/Formspree) for email delivery
- Content is derived from the Ourtech Company Profile PDF provided
- The certificate image will be included as a static asset in the project
- No authentication or user accounts needed
- No CMS — content changes require code updates
