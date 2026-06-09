import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';
import { NAV_LINKS } from '../../utils/constants';

describe('Navbar Component', () => {
  it('renders the OURTECH logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('OURTECH')).toBeInTheDocument();
  });

  it('renders all navigation links on desktop', () => {
    render(<Navbar />);
    NAV_LINKS.forEach((link) => {
      expect(screen.getAllByText(link.label).length).toBeGreaterThan(0);
    });
  });

  it('has the mobile menu toggle button', () => {
    render(<Navbar />);
    const toggle = screen.getByTestId('navbar-mobile-toggle');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('has proper navigation role and aria-label', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('renders logo button with proper test id', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
  });
});
