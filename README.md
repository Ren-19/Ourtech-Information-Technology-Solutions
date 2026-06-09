# OURTECH Information Technology Solutions — Website

A single-page corporate portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18 + Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Testing**: Vitest + fast-check (property-based testing)
- **Deployment**: Vercel (static hosting)

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing

### Run all tests

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

### Coverage

```bash
npm run test:coverage
```

### Test Structure

- `src/__tests__/properties/` — Property-based tests (fast-check)
- `src/__tests__/components/` — Component example-based tests
- `src/__tests__/utils/` — Utility function tests
- `src/test-utils/generators.ts` — Reusable PBT generators

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub/GitLab
2. Import the project in [Vercel](https://vercel.com)
3. Framework preset: Vite
4. Deploy

Security headers are configured in `vercel.json`.

### Manual Static Deploy

Build the project and deploy the `dist/` folder to any static hosting provider.

## Project Structure

```
src/
├── components/       # React components (one per section)
├── hooks/            # Custom React hooks
├── utils/            # Utility functions and constants
├── __tests__/        # Test files
│   ├── properties/   # Property-based tests
│   ├── components/   # Component tests
│   └── utils/        # Utility tests
├── test-utils/       # Test generators and setup
├── App.tsx           # Main application component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To enable:

1. Create a free Formspree account
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/components/Contact.tsx` with your form endpoint ID

## License

All content is the intellectual property of OURTECH Information Technology Solutions.
