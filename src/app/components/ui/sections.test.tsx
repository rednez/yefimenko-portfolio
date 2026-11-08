import { projects, skills } from '@/app/data';
import { act, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AboutSection } from './about-section';
import { ContactsSection } from './contacts-section';
import { HeroSection } from './hero-section';
import { ProjectsSection } from './projects-section';

// Render next/image as a plain <img> so tests don't depend on the image loader
vi.mock('next/image', () => ({
  default: (props: React.ComponentProps<'img'> & { priority?: boolean }) => {
    const imgProps = { ...props };
    delete imgProps.priority;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imgProps} alt={imgProps.alt} />;
  },
}));

afterEach(() => {
  vi.useRealTimers();
});

describe('HeroSection', () => {
  it('renders the heading, intro, avatar and calls to action', () => {
    render(<HeroSection />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "Hello, I'mVasyl Yefimenko",
    );
    expect(
      screen.getByText(/Frontend web developer crafting/),
    ).toBeInTheDocument();
    expect(screen.getByAltText('Vasyl Yefimenko')).toHaveAttribute(
      'src',
      '/avatar.jpg',
    );
    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByRole('link', { name: 'Get in Touch' })).toHaveAttribute(
      'href',
      'mailto:hello@yefimenko.dev',
    );
  });

  it('reveals the content shortly after mount', () => {
    vi.useFakeTimers();
    render(<HeroSection />);
    const intro = screen.getByText(/Frontend web developer crafting/);

    expect(intro).toHaveClass('opacity-0');
    act(() => vi.advanceTimersByTime(100));
    expect(intro).toHaveClass('opacity-100');
  });
});

describe('AboutSection', () => {
  it('computes years of experience from the start date', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-11-07'));
    render(<AboutSection />);

    expect(screen.getByText('11 years')).toBeInTheDocument();
  });

  it('renders the heading, every skill and external social links', () => {
    render(<AboutSection />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'I build thingsfor the web',
    );
    for (const { label } of skills) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
    for (const name of ['GitHub', 'LinkedIn']) {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });
});

describe('ProjectsSection', () => {
  it('renders a card for every project with its details', () => {
    render(<ProjectsSection />);

    for (const p of projects) {
      const card = screen.getByRole('link', { name: new RegExp(p.title) });
      expect(card).toHaveAttribute('href', p.link);
      expect(card).toHaveAttribute('target', '_blank');

      const scope = within(card);
      expect(scope.getByRole('heading', { level: 3 })).toHaveTextContent(
        p.title,
      );
      expect(scope.getByText(p.description)).toBeInTheDocument();
      p.tags.forEach((t) => expect(scope.getByText(t)).toBeInTheDocument());
      if (p.status) expect(scope.getByText(p.status)).toBeInTheDocument();
      if (p.statusNote)
        expect(scope.getByText(p.statusNote)).toBeInTheDocument();
    }
  });

  it('links to all projects on GitHub', () => {
    render(<ProjectsSection />);
    expect(
      screen.getByRole('link', { name: /See all public projects on GitHub/ }),
    ).toHaveAttribute('href', 'https://github.com/rednez');
  });
});

describe('ContactsSection', () => {
  it('renders the call to action, footer and theme switcher', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-11-07'));
    render(<ContactsSection />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      "Let's build somethingtogether.",
    );
    expect(screen.getByRole('link', { name: 'Say Hello' })).toHaveAttribute(
      'href',
      'mailto:hello@yefimenko.dev',
    );
    expect(screen.getByText('© 2026 Vasyl Yefimenko')).toBeInTheDocument();
    expect(screen.getByText('Built in Ukraine')).toBeInTheDocument();
    expect(
      screen.getAllByRole('button', { name: /Switch to .* theme/ }),
    ).toHaveLength(3);
  });
});
