# Unit Test Execution — OURTECH Website

## Test Framework
- **Runner**: Vitest 1.x
- **Environment**: jsdom (browser simulation)
- **UI Library**: @testing-library/react
- **PBT Framework**: fast-check 3.x (PBT-09)

## Run Unit Tests

### 1. Execute All Unit Tests
```bash
npm test
```

This runs `vitest run` which executes all test files matching `**/*.test.{ts,tsx}`.

### 2. Run Tests in Watch Mode (Development)
```bash
npm run test:watch
```

### 3. Run with Coverage Report
```bash
npm run test:coverage
```

## Test Structure

### Property-Based Tests (PBT)
| Test File | PBT Rules | Description |
|---|---|---|
| `src/__tests__/properties/validation.property.test.ts` | PBT-02, PBT-03, PBT-04 | Round-trip, invariant, and idempotence tests for validation |

### Example-Based Tests
| Test File | Description |
|---|---|
| `src/__tests__/components/Navbar.test.tsx` | Navigation rendering, links, accessibility |
| `src/__tests__/components/Contact.test.tsx` | Form fields, labels, validation attributes |
| `src/__tests__/components/Services.test.tsx` | Service cards rendering, all 8 services displayed |
| `src/__tests__/utils/validation.test.ts` | Validation functions: name, email, message, sanitize |

## Expected Results

### Test Counts
- **Property-Based Tests**: ~8 property tests (each runs 100-300 iterations)
- **Component Tests**: ~16 example-based tests
- **Utility Tests**: ~20 example-based tests
- **Total**: ~44 test assertions

### Expected Output
```
✓ src/__tests__/properties/validation.property.test.ts (8 tests)
✓ src/__tests__/components/Navbar.test.tsx (5 tests)
✓ src/__tests__/components/Contact.test.tsx (6 tests)
✓ src/__tests__/components/Services.test.tsx (5 tests)
✓ src/__tests__/utils/validation.test.ts (20 tests)

Test Files  5 passed (5)
Tests  44 passed (44)
```

## PBT-Specific Instructions (PBT-08)

### Seed-Based Reproducibility
When a property-based test fails, fast-check outputs:
```
Property failed after X tests
Seed: 123456789
Counterexample: [minimal failing input]
```

To reproduce a failure:
```typescript
fc.assert(fc.property(...), { seed: 123456789 });
```

### Shrinking
fast-check automatically shrinks failing inputs to minimal counterexamples. The output will show:
- Original failing input
- Shrunk (minimal) counterexample

Do NOT disable shrinking unless documented.

### CI Integration
In CI pipelines, log the seed for every PBT run:
```bash
# Run tests with verbose output to capture seeds
npx vitest run --reporter=verbose
```

## Fix Failing Tests

If tests fail:
1. Review the test output — identify which test and assertion failed
2. For PBT failures: note the seed and counterexample
3. Fix the code issue in the source file
4. Rerun the specific test file:
   ```bash
   npx vitest run src/__tests__/[path-to-test]
   ```
5. Once fixed, rerun all tests to ensure no regressions
