import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider, useTheme } from './theme-provider';
import { ThemeSwitcher } from './theme-switcher';

function mockSystemDark(matches: boolean) {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }) as unknown as MediaQueryList,
  );
}

function CurrentTheme() {
  return <output>{useTheme().theme}</output>;
}

function renderSwitcher() {
  return render(
    <ThemeProvider>
      <ThemeSwitcher />
      <CurrentTheme />
    </ThemeProvider>,
  );
}

const html = () => document.documentElement;

describe('ThemeProvider + ThemeSwitcher', () => {
  it('defaults to the system theme', () => {
    renderSwitcher();
    expect(screen.getByRole('status')).toHaveTextContent('system');
  });

  it('restores the theme saved in localStorage', async () => {
    localStorage.setItem('theme', 'dark');
    renderSwitcher();
    expect(
      await screen.findByText('dark', { selector: 'output' }),
    ).toBeInTheDocument();
  });

  it('ignores an invalid stored theme', () => {
    localStorage.setItem('theme', 'neon');
    renderSwitcher();
    expect(screen.getByRole('status')).toHaveTextContent('system');
  });

  it('switches to dark and persists the choice', async () => {
    const user = userEvent.setup();
    renderSwitcher();

    await user.click(
      screen.getByRole('button', { name: 'Switch to Dark theme' }),
    );

    expect(html()).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(screen.getByRole('status')).toHaveTextContent('dark');
  });

  it('switches to light and removes the dark class', async () => {
    const user = userEvent.setup();
    html().classList.add('dark');
    renderSwitcher();

    await user.click(
      screen.getByRole('button', { name: 'Switch to Light theme' }),
    );

    expect(html()).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it.each([
    [true, true],
    [false, false],
  ])(
    'system theme follows prefers-color-scheme (dark=%s)',
    async (systemDark, expectDark) => {
      mockSystemDark(systemDark);
      const user = userEvent.setup();
      renderSwitcher();

      await user.click(
        screen.getByRole('button', { name: 'Switch to System theme' }),
      );

      expect(html().classList.contains('dark')).toBe(expectDark);
      expect(localStorage.getItem('theme')).toBe('system');
    },
  );

  it('renders one button per theme option', () => {
    renderSwitcher();
    expect(screen.getAllByRole('button').map((b) => b.textContent)).toEqual([
      'Dark',
      'System',
      'Light',
    ]);
  });
});
