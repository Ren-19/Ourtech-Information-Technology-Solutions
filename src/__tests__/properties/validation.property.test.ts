import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import {
  validateContactForm,
  validateName,
  validateEmail,
  validateMessage,
  sanitizeInput,
  sanitizeFormData,
} from '../../utils/validation';
import {
  validNameArb,
  validEmailArb,
  validMessageArb,
  validContactFormArb,
  htmlInjectionArb,
  oversizedStringArb,
} from '../../test-utils/generators';

describe('Property-Based Tests: Contact Form Validation', () => {
  // PBT-03: Invariant — valid inputs always produce valid result
  describe('Invariant: Valid inputs produce valid results', () => {
    it('validateName returns null for all valid names', () => {
      fc.assert(
        fc.property(validNameArb, (name) => {
          const result = validateName(name);
          expect(result).toBeNull();
        }),
        { numRuns: 200 }
      );
    });

    it('validateEmail returns null for all valid emails', () => {
      fc.assert(
        fc.property(validEmailArb, (email) => {
          const result = validateEmail(email);
          expect(result).toBeNull();
        }),
        { numRuns: 200 }
      );
    });

    it('validateMessage returns null for all valid messages', () => {
      fc.assert(
        fc.property(validMessageArb, (message) => {
          const result = validateMessage(message);
          expect(result).toBeNull();
        }),
        { numRuns: 200 }
      );
    });

    it('validateContactForm returns valid for all valid form data', () => {
      fc.assert(
        fc.property(validContactFormArb, (data) => {
          const result = validateContactForm(data);
          expect(result.valid).toBe(true);
          expect(Object.keys(result.errors)).toHaveLength(0);
        }),
        { numRuns: 200 }
      );
    });
  });

  // PBT-03: Invariant — validation result structure
  describe('Invariant: Validation result structure is always consistent', () => {
    it('validateContactForm always returns { valid: boolean, errors: object }', () => {
      fc.assert(
        fc.property(
          fc.record({
            name: fc.string(),
            email: fc.string(),
            message: fc.string(),
          }),
          (data) => {
            const result = validateContactForm(data);
            expect(typeof result.valid).toBe('boolean');
            expect(typeof result.errors).toBe('object');
            expect(result.errors).not.toBeNull();

            // Invariant: valid === true implies no errors
            if (result.valid) {
              expect(Object.keys(result.errors)).toHaveLength(0);
            }
            // Invariant: valid === false implies at least one error
            if (!result.valid) {
              expect(Object.keys(result.errors).length).toBeGreaterThan(0);
            }
          }
        ),
        { numRuns: 300 }
      );
    });
  });

  // PBT-03: Invariant — oversized strings always rejected
  describe('Invariant: Oversized inputs always rejected', () => {
    it('names longer than 100 characters are always invalid', () => {
      fc.assert(
        fc.property(oversizedStringArb(100), (name) => {
          const result = validateName(name);
          expect(result).not.toBeNull();
        }),
        { numRuns: 100 }
      );
    });

    it('messages longer than 2000 characters are always invalid', () => {
      fc.assert(
        fc.property(oversizedStringArb(2000), (message) => {
          const result = validateMessage(message);
          expect(result).not.toBeNull();
        }),
        { numRuns: 50 }
      );
    });
  });

  // PBT-02: Round-trip — sanitize then validate preserves validity
  describe('Round-trip: Sanitization preserves form validity status', () => {
    it('sanitizeFormData followed by validateContactForm preserves validity for valid data', () => {
      fc.assert(
        fc.property(validContactFormArb, (data) => {
          const sanitized = sanitizeFormData(data);
          const originalResult = validateContactForm(data);
          const sanitizedResult = validateContactForm(sanitized);

          // If original is valid, sanitized should also be valid
          // (sanitization should not break valid data)
          if (originalResult.valid) {
            expect(sanitizedResult.valid).toBe(true);
          }
        }),
        { numRuns: 200 }
      );
    });
  });

  // PBT-03: Invariant — sanitizeInput always removes dangerous characters
  describe('Invariant: Sanitization always neutralizes HTML characters', () => {
    it('sanitizeInput output never contains raw < or > characters', () => {
      fc.assert(
        fc.property(htmlInjectionArb, (input) => {
          const result = sanitizeInput(input);
          expect(result).not.toContain('<');
          expect(result).not.toContain('>');
        }),
        { numRuns: 100 }
      );
    });

    it('sanitizeInput is idempotent for already-safe strings', () => {
      const safeStringArb = fc.stringOf(
        fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz 0123456789'.split(''))
      );
      fc.assert(
        fc.property(safeStringArb, (input) => {
          // PBT-04: Idempotence for safe strings
          const once = sanitizeInput(input);
          const twice = sanitizeInput(once);
          // Note: Not strictly idempotent for strings with & due to double-encoding,
          // but for safe strings (no special chars), it should be.
          expect(once).toBe(input); // Safe strings pass through unchanged
          expect(twice).toBe(once); // And applying again is same
        }),
        { numRuns: 200 }
      );
    });
  });

  // PBT-03: Invariant — email validation
  describe('Invariant: Email validation format rules', () => {
    it('emails without @ are always invalid', () => {
      fc.assert(
        fc.property(
          fc.string({ minLength: 1 }).filter((s) => !s.includes('@') && s.trim().length > 0),
          (email) => {
            const result = validateEmail(email);
            expect(result).not.toBeNull();
          }
        ),
        { numRuns: 200 }
      );
    });
  });
});
