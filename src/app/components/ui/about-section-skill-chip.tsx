import { Skill } from '@/app/types';

export function AboutSectionSkillChip({
  skill,
  isVisible,
  appearIndex,
}: {
  skill: Skill;
  isVisible: boolean;
  appearIndex: number;
}) {
  return (
    <span
      className={`inline-flex items-center h-9 px-4 rounded-full border text-sm font-medium tracking-[-0.01em]
        transition-[opacity,transform] duration-300
        ${
          skill.accent
            ? 'bg-accent-soft border-accent/30 text-accent'
            : 'bg-surface border-line text-muted'
        }
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{ transitionDelay: isVisible ? `${appearIndex * 40}ms` : '0ms' }}
    >
      {skill.label}
    </span>
  );
}
