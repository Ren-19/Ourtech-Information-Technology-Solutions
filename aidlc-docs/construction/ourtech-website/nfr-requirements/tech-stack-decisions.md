# Tech Stack Decisions — OURTECH Website

## Core Framework

| Technology | Version | Rationale |
|---|---|---|
| **React** | 18.x | User selected SPA; React offers component-based architecture, large ecosystem, and excellent tooling |
| **Vite** | 5.x | Fast HMR, optimized production builds, native ES modules, better DX than CRA |
| **TypeScript** | 5.x | Type safety, better IDE support, catches errors at compile time |

## Styling & UI

| Technology | Version | Rationale |
|---|---|---|
| **Tailwind CSS** | 3.x | Utility-first, excellent dark theme support, responsive design utilities, small production bundle with purging |
| **Framer Motion** | 11.x | React-native animation library, scroll-triggered animations, gesture support, accessibility-aware |

## Testing

| Technology | Version | Rationale | PBT Rule |
|---|---|---|---|
| **Vitest** | 1.x | Vite-native test runner, fast, Jest-compatible API | — |
| **fast-check** | 3.x | Property-based testing for JS/TS, integrates with Vitest, supports custom generators and shrinking | PBT-09 |
| **@testing-library/react** | 14.x | Component testing, accessibility-focused queries | — |
| **jsdom** | 24.x | DOM environment for unit tests | — |

## Build & Development

| Technology | Version | Rationale |
|---|---|---|
| **ESLint** | 8.x | Code linting, enforces consistent style |
| **Prettier** | 3.x | Code formatting |
| **PostCSS** | 8.x | Required by Tailwind CSS |
| **Autoprefixer** | 10.x | Browser compatibility for CSS |

## Deployment

| Technology | Rationale |
|---|---|
| **Vercel** (recommended) | Free tier, automatic HTTPS/TLS, global CDN, Git-based deploys, zero-config for Vite/React |
| **Alternative: Netlify** | Similar features, free tier, good fallback option |

## Contact Form Service

| Technology | Rationale |
|---|---|
| **Formspree** (recommended) | Free tier (50 submissions/month), no backend needed, AJAX support, spam protection |
| **Alternative: EmailJS** | Client-side email sending, free tier available |

## Security Headers Configuration

Configured via `vercel.json` (or `netlify.toml`):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self' https://formspree.io" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

## Dependency Management

- **Lock file**: `package-lock.json` committed to version control (SECURITY-10)
- **Exact versions**: All dependencies use exact versions in package.json
- **No unused dependencies**: Only install what's actively used (SECURITY-10)
- **Trusted sources**: npm registry only (SECURITY-10)

## PBT Framework Configuration (PBT-09)

**Framework**: fast-check 3.x
- **Custom generators**: Supported via `fc.record()`, `fc.string()`, etc.
- **Automatic shrinking**: Built-in, enabled by default
- **Seed-based reproducibility**: Supported via `seed` parameter
- **Integration**: Works with Vitest via standard assertions

**Test structure**:
```
src/
  __tests__/
    properties/          # Property-based tests
    components/          # Component example-based tests
    utils/               # Utility function tests
  test-utils/
    generators.ts        # Reusable domain generators (PBT-07)
```
