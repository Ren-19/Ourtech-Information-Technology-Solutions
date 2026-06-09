# Code Generation Plan — ourtech-website

## Unit Context
- **Unit Name**: ourtech-website
- **Type**: Greenfield React SPA
- **Framework**: React 18 + Vite 5 + TypeScript 5
- **Styling**: Tailwind CSS 3 + Framer Motion 11
- **Testing**: Vitest + fast-check + Testing Library
- **Deployment**: Vercel (static hosting)
- **Code Location**: Workspace root (`c:\Users\RINA\Documents\KIRO AI DLC-Template - Our Tech Website\`)

## Code Structure
```
/                              # Workspace root
├── public/
│   └── DTAP Certifcate.jpg   # Certificate image (copied from root)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── Services.tsx
│   │   ├── Certifications.tsx
│   │   ├── Clients.tsx
│   │   ├── WhyPartner.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── utils/
│   │   ├── validation.ts
│   │   └── constants.ts
│   ├── __tests__/
│   │   ├── properties/
│   │   │   └── validation.property.test.ts
│   │   ├── components/
│   │   │   ├── Navbar.test.tsx
│   │   │   ├── Contact.test.tsx
│   │   │   └── Services.test.tsx
│   │   └── utils/
│   │       └── validation.test.ts
│   ├── test-utils/
│   │   └── generators.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .eslintrc.cjs
└── README.md
```

---

## Generation Steps

### Step 1: Project Scaffolding & Configuration
- [x] Create `package.json` with all dependencies (exact versions, pinned)
- [x] Create `tsconfig.json` (strict TypeScript config)
- [x] Create `vite.config.ts` (React plugin, test config)
- [x] Create `tailwind.config.js` (dark theme, custom colors)
- [x] Create `postcss.config.js`
- [x] Create `.eslintrc.cjs`
- [x] Create `index.html` (entry point with meta tags, SEO)

### Step 2: Core Application Files
- [x] Create `src/main.tsx` (React root mount)
- [x] Create `src/App.tsx` (main app component with all sections)
- [x] Create `src/index.css` (Tailwind directives, global styles, dark theme)

### Step 3: Utility & Hook Files
- [x] Create `src/utils/constants.ts` (company data, service descriptions, client sectors)
- [x] Create `src/utils/validation.ts` (contact form validation with schema)
- [x] Create `src/hooks/useScrollAnimation.ts` (Framer Motion scroll-triggered animation hook)

### Step 4: Navigation Component
- [x] Create `src/components/Navbar.tsx` (fixed navbar, mobile hamburger menu, smooth scroll links, active section highlight)

### Step 5: Hero Section
- [x] Create `src/components/Hero.tsx` (company name, tagline, CTA button, animated background)

### Step 6: About & Value Proposition Sections
- [x] Create `src/components/About.tsx` (company overview, team, location, registration)
- [x] Create `src/components/ValueProposition.tsx` (pillars: Reliability, Security, Future-Readiness)

### Step 7: Services Section
- [x] Create `src/components/Services.tsx` (8 core services with icons, descriptions, hover effects)

### Step 8: Certifications Section
- [x] Create `src/components/Certifications.tsx` (D-TAP certificate image, accreditation details, modal/lightbox)

### Step 9: Clients & Why Partner Sections
- [x] Create `src/components/Clients.tsx` (client sectors grid)
- [x] Create `src/components/WhyPartner.tsx` (5 partnership pillars)

### Step 10: Contact Section & Footer
- [x] Create `src/components/Contact.tsx` (form with validation, submit handler, success/error states)
- [x] Create `src/components/Footer.tsx` (company info, copyright)

### Step 11: Deployment Configuration
- [x] Create `vercel.json` (security headers: CSP, HSTS, X-Frame-Options, etc.)
- [x] Copy certificate image to `public/` folder

### Step 12: Test Utilities & Generators (PBT-07)
- [x] Create `src/test-utils/generators.ts` (domain generators for contact form data, email, names)

### Step 13: Property-Based Tests (PBT-02, PBT-03)
- [x] Create `src/__tests__/properties/validation.property.test.ts` (round-trip and invariant tests for validation functions)

### Step 14: Example-Based Component Tests (PBT-10)
- [x] Create `src/__tests__/components/Navbar.test.tsx`
- [x] Create `src/__tests__/components/Contact.test.tsx`
- [x] Create `src/__tests__/components/Services.test.tsx`
- [x] Create `src/__tests__/utils/validation.test.ts`

### Step 15: Documentation & README
- [x] Create `README.md` (setup, development, deployment instructions)

---

## Summary
- **Total Steps**: 15
- **Files to Create**: ~30 files
- **Estimated Scope**: Complete single-page React SPA with dark theme, animations, certificate display, contact form, security headers, PBT + example tests
