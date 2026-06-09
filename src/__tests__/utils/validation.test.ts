import { describe, it, expect } from 'vitest';
import {
  validateName,
  validateEmail,
  validateMessage,
  validateContactForm,
  sanitizeInput,
  sanitizeFormData,
} from '../../utils/validation';

describe('Example-Based Tests: Validation Utilities', () => {
  describe('validateName', () => {
    it('returns null for a valid name', () => {
      expect(validateName('John Doe')).toBeNull();
    });

    it('returns error for empty string', () => {
      expect(validateName('')).toBe('Name is required');
    });

    it('returns error for whitespace-only string', () => {
      expect(validateName('   ')).toBe('Name is required');
    });

    it('returns error for name exceeding 100 characters', () => {
      const longName = 'a'.repeat(101);
      expect(validateName(longName)).toBe('Name must be 100 characters or less');
    });

    it('accepts name at exactly 100 characters', () => {
      const maxName = 'a'.repeat(100);
      expect(validateName(maxName)).toBeNull();
    });
  });

  describe('validateEmail', () => {
    it('returns null for a valid email', () => {
      expect(validateEmail('user@example.com')).toBeNull();
    });

    it('returns error for empty string', () => {
      expect(validateEmail('')).toBe('Email is required');
    });

    it('returns error for missing @', () => {
      expect(validateEmail('userexample.com')).toBe('Please enter a valid email address');
    });

    it('returns error for missing domain', () => {
      expect(validateEmail('user@')).toBe('Please enter a valid email address');
    });

    it('returns error for missing TLD', () => {
      expect(validateEmail('user@domain')).toBe('Please enter a valid email address');
    });

    it('accepts emails with subdomains', () => {
      expect(validateEmail('user@sub.domain.com')).toBeNull();
    });

    it('accepts emails with dots in local part', () => {
      expect(validateEmail('first.last@example.com')).toBeNull();
    });

    it('accepts emails with plus signs', () => {
      expect(validateEmail('user+tag@example.com')).toBeNull();
    });
  });

  describe('validateMessage', () => {
    it('returns null for a valid message', () => {
      expect(validateMessage('This is a valid message with enough characters.')).toBeNull();
    });

    it('returns error for empty string', () => {
      expect(validateMessage('')).toBe('Message is required');
    });

    it('returns error for message shorter than 10 characters', () => {
      expect(validateMessage('Short')).toBe('Message must be at least 10 characters');
    });

    it('accepts message at exactly 10 characters', () => {
      expect(validateMessage('Ten chars!')).toBeNull();
    });

    it('returns error for message exceeding 2000 characters', () => {
      const longMsg = 'a'.repeat(2001);
      expect(validateMessage(longMsg)).toBe('Message must be 2000 characters or less');
    });
  });

  describe('validateContactForm', () => {
    it('returns valid for complete valid form data', () => {
      const result = validateContactForm({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hello, I need ICT consulting services.',
      });
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it('returns invalid with all errors for empty form', () => {
      const result = validateContactForm({ name: '', email: '', message: '' });
      expect(result.valid).toBe(false);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeDefined();
    });

    it('returns partial errors when some fields are valid', () => {
      const result = validateContactForm({
        name: 'Valid Name',
        email: 'invalid-email',
        message: 'This message is long enough to be valid.',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.name).toBeUndefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeUndefined();
    });
  });

  describe('sanitizeInput', () => {
    it('escapes < and > characters', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).not.toContain('<');
      expect(sanitizeInput('<script>alert("xss")</script>')).not.toContain('>');
    });

    it('escapes double quotes', () => {
      expect(sanitizeInput('"hello"')).toBe('&quot;hello&quot;');
    });

    it('escapes single quotes', () => {
      expect(sanitizeInput("it's")).toBe("it&#x27;s");
    });

    it('leaves safe strings unchanged', () => {
      expect(sanitizeInput('Hello World 123')).toBe('Hello World 123');
    });
  });

  describe('sanitizeFormData', () => {
    it('trims whitespace from all fields', () => {
      const result = sanitizeFormData({
        name: '  John  ',
        email: '  USER@Example.COM  ',
        message: '  Hello world message  ',
      });
      expect(result.name).not.toMatch(/^\s/);
      expect(result.email).not.toMatch(/^\s/);
      expect(result.message).not.toMatch(/^\s/);
    });

    it('lowercases email', () => {
      const result = sanitizeFormData({
        name: 'Test',
        email: 'USER@EXAMPLE.COM',
        message: 'A valid test message here.',
      });
      expect(result.email).toBe('user@example.com');
    });

    it('sanitizes HTML in name and message but not email', () => {
      const result = sanitizeFormData({
        name: '<script>alert(1)</script>',
        email: 'user@example.com',
        message: '<img src=x onerror=alert(1)> Test message.',
      });
      expect(result.name).not.toContain('<');
      expect(result.message).not.toContain('<');
    });
  });
});
