# Performance Test Instructions — OURTECH Website

## Performance Requirements (from NFR-01)

| Metric | Target |
|---|---|
| Initial page load (4G) | < 3 seconds |
| Lighthouse Performance Score | > 80 |
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Total Bundle Size (gzipped) | < 300KB |

## Performance Testing Approach

Since this is a static SPA deployed on a CDN (Vercel), performance testing focuses on:
1. **Bundle size analysis** — Verify production build is within budget
2. **Lighthouse audits** — Automated performance scoring
3. **Image optimization** — Certificate image loading performance

## Step 1: Bundle Size Analysis

### After building:
```bash
npm run build
```

### Check output sizes:
```bash
# On Windows (PowerShell):
Get-ChildItem -Recurse dist/assets | Select-Object Name, Length
```

### Expected sizes (uncompressed):
- `index-[hash].js` — < 500KB
- `index-[hash].css` — < 100KB
- Total assets (excluding images) — < 600KB uncompressed, < 200KB gzipped

### If bundle is too large:
1. Check for unintended large dependencies: `npx vite-bundle-visualizer`
2. Verify tree-shaking is working (Framer Motion should be partially imported)
3. Ensure unused code is eliminated

## Step 2: Lighthouse Performance Audit

### Run Lighthouse:
1. Build and preview: `npm run build && npm run preview`
2. Open Chrome DevTools → Lighthouse tab
3. Select "Performance" category
4. Run audit on `http://localhost:4173`

### Or use CLI:
```bash
npx lighthouse http://localhost:4173 --only-categories=performance --output=json --output-path=./lighthouse-report.json
```

### Expected Scores:
| Category | Target | Acceptable |
|---|---|---|
| Performance | > 80 | > 70 |
| Accessibility | > 90 | > 85 |
| Best Practices | > 90 | > 85 |
| SEO | > 90 | > 85 |

### Common Performance Issues:
- **Large certificate image**: Convert to WebP, add `loading="lazy"` (already implemented)
- **Render-blocking fonts**: Google Fonts loaded with `display=swap` (already configured)
- **Large JavaScript bundle**: Code splitting via Vite (configured by default)

## Step 3: Image Optimization

### Certificate Image:
The D-TAP certificate image should be optimized before deployment:

```bash
# Optional: Convert to WebP for smaller size
# Use an image optimization tool or online converter
# Keep original JPG as fallback
```

### Recommended approach:
1. Compress the JPG (quality 80-85%)
2. Optionally provide WebP version
3. Verify `loading="lazy"` is on certificate image (already implemented)

## Step 4: Production Deployment Performance

After deploying to Vercel:
1. Run Lighthouse on the live URL
2. Check Vercel Analytics for Core Web Vitals
3. Test from multiple geographic locations using WebPageTest.org

### Vercel Performance Features (automatic):
- Global CDN edge caching
- Automatic Brotli/gzip compression
- Image optimization (if using next/image, N/A for our Vite build)
- HTTP/2 and HTTP/3 support

## Performance Optimization Checklist

- [x] Code splitting enabled (Vite default)
- [x] CSS purging enabled (Tailwind production build)
- [x] Images lazy-loaded (certificate image)
- [x] Fonts preconnected (Google Fonts)
- [x] Font display swap (no FOIT)
- [x] Minimal bundle dependencies (React, Framer Motion, Tailwind only)
- [x] Production minification (Vite default)
- [x] Security headers don't block resources (CSP configured correctly)
