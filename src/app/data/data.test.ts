import { describe, expect, it } from 'vitest';
import { projects, skills } from '.';

describe('projects data', () => {
  it('has unique titles', () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(projects)('$title has a description, tags and an https link', (p) => {
    expect(p.description.trim()).not.toBe('');
    expect(p.tags.length).toBeGreaterThan(0);
    expect(new URL(p.link).protocol).toBe('https:');
  });
});

describe('skills data', () => {
  it('has unique labels', () => {
    const labels = skills.map((s) => s.label);
    expect(new Set(labels).size).toBe(labels.length);
  });

  it('marks at least one skill as accent', () => {
    expect(skills.some((s) => s.accent)).toBe(true);
  });
});
