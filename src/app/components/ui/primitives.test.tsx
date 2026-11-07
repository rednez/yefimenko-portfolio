import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutSectionSkillChip } from './about-section-skill-chip';
import { ArrowIcon } from './arrow-icon';
import { SectionLabel } from './section-label';

describe('SectionLabel', () => {
  it('renders its text and merges extra classes', () => {
    render(<SectionLabel className="mb-6">About Me</SectionLabel>);
    const label = screen.getByText('About Me');
    expect(label).toHaveClass('font-mono', 'mb-6');
  });
});

describe('ArrowIcon', () => {
  it('is hidden from assistive tech and draws the requested direction', () => {
    const { container, rerender } = render(<ArrowIcon />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    const rightPath = svg.querySelector('path')!.getAttribute('d');

    rerender(<ArrowIcon direction="up-right" className="extra" />);
    expect(container.querySelector('svg')).toHaveClass('w-4', 'h-4', 'extra');
    expect(container.querySelector('path')!.getAttribute('d')).not.toBe(
      rightPath,
    );
  });
});

describe('AboutSectionSkillChip', () => {
  it('highlights accent skills', () => {
    render(
      <>
        <AboutSectionSkillChip
          skill={{ label: 'TypeScript', accent: true }}
          isVisible
          appearIndex={0}
        />
        <AboutSectionSkillChip
          skill={{ label: 'Vue', accent: false }}
          isVisible
          appearIndex={1}
        />
      </>,
    );

    expect(screen.getByText('TypeScript')).toHaveClass('text-accent');
    expect(screen.getByText('Vue')).not.toHaveClass('text-accent');
  });

  it('staggers the appearance by index only once visible', () => {
    const { rerender } = render(
      <AboutSectionSkillChip
        skill={{ label: 'Git', accent: false }}
        isVisible={false}
        appearIndex={3}
      />,
    );
    const chip = screen.getByText('Git');
    expect(chip).toHaveClass('opacity-0');
    expect(chip.style.transitionDelay).toBe('0ms');

    rerender(
      <AboutSectionSkillChip
        skill={{ label: 'Git', accent: false }}
        isVisible
        appearIndex={3}
      />,
    );
    expect(chip).toHaveClass('opacity-100');
    expect(chip.style.transitionDelay).toBe('120ms');
  });
});
