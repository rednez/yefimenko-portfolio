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
      className={`
                    text-sm font-medium px-4 py-1.5 rounded-full border
                    transition-all duration-300
                    ${
                      skill.accent
                        ? 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                        : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-600 text-slate-600 dark:text-slate-300'
                    }
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                  `}
      style={{ transitionDelay: `${appearIndex * 45}ms` }}
    >
      {skill.label}
    </span>
  );
}
