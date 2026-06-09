import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../../components/Contact';

describe('Contact Component', () => {
  it('renders the contact form heading', () => {
    render(<Contact />);
    expect(screen.getByText(/Get In/i)).toBeInTheDocument();
    expect(screen.getByText(/Touch/i)).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('contact-email-input')).toBeInTheDocument();
    expect(screen.getByTestId('contact-message-input')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-submit-button')).toBeInTheDocument();
    expect(screen.getByTestId('contact-submit-button')).toHaveTextContent('Send Message');
  });

  it('form fields have proper labels', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('form fields have required attribute', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-name-input')).toHaveAttribute('required');
    expect(screen.getByTestId('contact-email-input')).toHaveAttribute('required');
    expect(screen.getByTestId('contact-message-input')).toHaveAttribute('required');
  });

  it('form fields have maxLength attributes', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-name-input')).toHaveAttribute('maxLength', '100');
    expect(screen.getByTestId('contact-email-input')).toHaveAttribute('maxLength', '254');
    expect(screen.getByTestId('contact-message-input')).toHaveAttribute('maxLength', '2000');
  });
});
