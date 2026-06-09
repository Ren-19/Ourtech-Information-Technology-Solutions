import * as fc from 'fast-check';

/**
 * Domain-specific generators for property-based testing (PBT-07).
 * Reusable across test files to ensure consistent, realistic test data.
 */

/** Generates a valid person name (1-100 chars, letters and spaces) */
export const validNameArb = fc.stringOf(
  fc.constantFrom(
    ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('')
  ),
  { minLength: 1, maxLength: 100 }
).filter((s) => s.trim().length > 0);

/** Generates an invalid name (empty or whitespace-only) */
export const invalidNameArb = fc.constantFrom('', '   ', '\t', '\n');

/** Generates a valid email address */
export const validEmailArb = fc.tuple(
  fc.stringOf(fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz0123456789'.split('')), { minLength: 1, maxLength: 20 }),
  fc.stringOf(fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz0123456789'.split('')), { minLength: 1, maxLength: 15 }),
  fc.constantFrom('com', 'org', 'net', 'io', 'ph', 'co.uk', 'gov.ph')
).map(([local, domain, tld]) => `${local}@${domain}.${tld}`);

/** Generates an invalid email (missing @, missing domain, etc.) */
export const invalidEmailArb = fc.oneof(
  fc.constant(''),
  fc.constant('nodomain'),
  fc.constant('@missing-local.com'),
  fc.constant('missing-tld@domain'),
  fc.constant('spaces in@email.com'),
  fc.constant('double@@at.com')
);

/** Generates a valid message (10-2000 chars) */
export const validMessageArb = fc.stringOf(
  fc.constantFrom(
    ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.,!?-'.split('')
  ),
  { minLength: 10, maxLength: 200 }
).filter((s) => s.trim().length >= 10);

/** Generates an invalid message (too short or empty) */
export const invalidMessageArb = fc.oneof(
  fc.constant(''),
  fc.constant('short'),
  fc.constant('   '),
  fc.stringOf(fc.constantFrom(...'abc'.split('')), { minLength: 1, maxLength: 9 })
);

/** Generates a valid ContactFormData object */
export const validContactFormArb = fc.record({
  name: validNameArb,
  email: validEmailArb,
  message: validMessageArb,
});

/** Generates a string containing HTML special characters for sanitization testing */
export const htmlInjectionArb = fc.oneof(
  fc.constant('<script>alert("xss")</script>'),
  fc.constant('<img onerror="alert(1)" src=x>'),
  fc.constant('"><svg onload=alert(1)>'),
  fc.constant("'><script>document.cookie</script>"),
  fc.constant('Hello <b>World</b>'),
  fc.constant('Test & "quotes" and <tags>'),
);

/** Generates a string that exceeds max length for boundary testing */
export const oversizedStringArb = (maxLength: number) =>
  fc.string({ minLength: maxLength + 1, maxLength: maxLength + 100 });
