import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '../../components/Services';
import { SERVICES } from '../../utils/constants';

describe('Services Component', () => {
  it('renders the section heading', () => {
    render(<Services />);
    expect(screen.getByText(/Core Business/i)).toBeInTheDocument();
    expect(screen.getByText(/Solutions/i)).toBeInTheDocument();
  });

  it('renders all 8 service cards', () => {
    render(<Services />);
    SERVICES.forEach((_service, index) => {
      expect(screen.getByTestId(`service-card-${index}`)).toBeInTheDocument();
    });
  });

  it('renders all service titles', () => {
    render(<Services />);
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    });
  });

  it('renders all service descriptions', () => {
    render(<Services />);
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });

  it('has proper section aria-label', () => {
    render(<Services />);
    const section = document.getElementById('services');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('aria-labelledby', 'services-title');
  });
});
