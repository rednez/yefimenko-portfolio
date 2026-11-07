import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Navbar } from './navbar';

describe('Navbar', () => {
  it('renders the logo and section anchors', () => {
    render(<Navbar />);

    expect(screen.getByText('V. Yefimenko')).toBeInTheDocument();
    for (const [name, href] of [
      ['About', '#about'],
      ['Projects', '#projects'],
      ['Contact', '#contact'],
    ]) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
    }
  });

  it('shows the bar background only after scrolling past the threshold', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');

    expect(nav).toHaveClass('bg-transparent');

    act(() => {
      window.scrollY = 100;
      fireEvent.scroll(window);
    });
    expect(nav).not.toHaveClass('bg-transparent');

    act(() => {
      window.scrollY = 0;
      fireEvent.scroll(window);
    });
    expect(nav).toHaveClass('bg-transparent');
  });
});
