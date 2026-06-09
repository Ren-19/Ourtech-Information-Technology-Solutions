# Build Instructions — OURTECH Website

## Prerequisites
- **Runtime**: Node.js 18+ (LTS recommended)
- **Package Manager**: npm 9+
- **System Requirements**: Any OS (Windows, macOS, Linux), 4GB RAM minimum
- **Environment Variables**: None required for local build (Formspree ID needed for contact form in production)

## Build Steps

### 1. Install Dependencies
```bash
npm install
```

This installs all dependencies from `package.json` with exact versions. A `package-lock.json` will be generated and should be committed to version control (SECURITY-10).

### 2. Verify TypeScript Compilation
```bash
npx tsc --noEmit
```

Expected: No errors. This checks TypeScript types without generating output.

### 3. Run Linting
```bash
npm run lint
```

Expected: No warnings or errors. ESLint validates code quality and consistency.

### 4. Build for Production
```bash
npm run build
```

This runs TypeScript compilation (`tsc`) followed by Vite production build.

### 5. Verify Build Success

**Expected Output**:
```
vite v5.x.x building for production...
✓ X modules transformed.
dist/index.html          [size]
dist/assets/index-[hash].css  [size]
dist/assets/index-[hash].js   [size]
✓ built in Xs
```

**Build Artifacts** (in `dist/` directory):
- `index.html` — Entry point with injected script/style tags
- `assets/*.css` — Compiled and minified CSS (Tailwind purged)
- `assets/*.js` — Bundled and minified JavaScript
- `DTAP Certifcate.jpg` — Certificate image (from public/)
- `favicon.svg` — Site favicon

**Expected Bundle Size** (gzipped):
- JavaScript: < 200KB
- CSS: < 30KB
- Total initial load: < 300KB (excluding images)

### 6. Preview Production Build
```bash
npm run preview
```

Opens preview server at `http://localhost:4173`. Verify:
- All sections render correctly
- Dark theme displays properly
- Animations work (scroll-triggered)
- Certificate image loads
- Contact form validates input
- Mobile responsive layout works
- Navigation smooth-scrolls to sections

## Troubleshooting

### Build Fails with TypeScript Errors
- **Cause**: Type mismatch or missing type definitions
- **Solution**: Run `npx tsc --noEmit` to identify specific errors; fix type issues in source files

### Build Fails with Module Resolution
- **Cause**: Missing dependency or incorrect import path
- **Solution**: Verify `npm install` completed; check import paths use correct relative paths

### Tailwind Styles Not Applied
- **Cause**: Content paths not matching in `tailwind.config.js`
- **Solution**: Verify `content` array includes `'./index.html'` and `'./src/**/*.{js,ts,jsx,tsx}'`

### Images Not Loading in Production
- **Cause**: Files not in `public/` directory or incorrect path reference
- **Solution**: Verify `DTAP Certifcate.jpg` exists in `public/` and is referenced as `/DTAP Certifcate.jpg` (leading slash for public assets)
