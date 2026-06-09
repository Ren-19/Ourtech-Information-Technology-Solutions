# NFR Requirements — OURTECH Website

## Performance Requirements

| Requirement | Target | Measurement |
|---|---|---|
| Initial page load (4G) | < 3 seconds | Lighthouse / WebPageTest |
| Lighthouse Performance Score | > 80 | Lighthouse audit |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Total Bundle Size (gzipped) | < 300KB | Build output |
| Image optimization | WebP/AVIF with fallback | Build pipeline |
| Code splitting | Route-based lazy loading | Vite config |

## Availability Requirements

| Requirement | Target | Notes |
|---|---|---|
| Uptime | 99.9% (Vercel/Netlify SLA) | Managed by hosting provider |
| CDN distribution | Global edge network | Included with Vercel/Netlify |
| Failover | Automatic (managed hosting) | No custom DR needed |

## Security Requirements

| Requirement | SECURITY Rule | Implementation |
|---|---|---|
| HTTPS enforcement | SECURITY-01 | Vercel/Netlify auto-TLS |
| HTTP Security Headers | SECURITY-04 | Configured in vercel.json/netlify.toml |
| Content Security Policy | SECURITY-04 | Restrictive CSP header |
| Strict Transport Security | SECURITY-04 | HSTS with 1-year max-age |
| X-Content-Type-Options | SECURITY-04 | nosniff |
| X-Frame-Options | SECURITY-04 | DENY |
| Referrer-Policy | SECURITY-04 | strict-origin-when-cross-origin |
| Input validation (contact form) | SECURITY-05 | Client-side validation with schema |
| No hardcoded secrets | SECURITY-12 | Environment variables for API keys |
| SRI for CDN resources | SECURITY-13 | Subresource Integrity on external scripts |
| Dependency pinning | SECURITY-10 | package-lock.json committed |
| Error handling | SECURITY-15 | Global error boundary, no stack traces |

## Accessibility Requirements

| Requirement | Standard | Target |
|---|---|---|
| WCAG Level | 2.1 AA | All sections |
| Color contrast (dark theme) | 4.5:1 minimum (text), 3:1 (large text) | All text elements |
| Keyboard navigation | Full | All interactive elements |
| Screen reader support | Semantic HTML + ARIA | All content |
| Focus indicators | Visible | All focusable elements |
| Alt text | Descriptive | All images including certificate |
| Reduced motion | Respect prefers-reduced-motion | All animations |

## Reliability Requirements

| Requirement | Implementation |
|---|---|
| Global error boundary | React ErrorBoundary component |
| Form error handling | Graceful failure with user feedback |
| Image fallbacks | Alt text + placeholder on load failure |
| Offline-friendly | Service worker for static assets (optional) |

## Maintainability Requirements

| Requirement | Implementation |
|---|---|
| Code organization | Feature-based folder structure |
| Component reusability | Shared UI components library |
| Type safety | TypeScript throughout |
| Linting | ESLint + Prettier |
| Testing | Vitest + fast-check (PBT) |
| Documentation | README with setup/deploy instructions |

## Usability Requirements

| Requirement | Target |
|---|---|
| Responsive breakpoints | Mobile (<768px), Tablet (768-1024px), Desktop (>1024px) |
| Touch targets | Minimum 44x44px on mobile |
| Navigation | Fixed navbar with smooth scroll |
| Loading states | Skeleton/spinner for async content |
| Animation duration | 200-500ms, respect prefers-reduced-motion |

## Scalability (N/A for Static SPA)

Not applicable — static site served from CDN. No backend scaling considerations.
