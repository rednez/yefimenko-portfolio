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
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : 'bg-white border-stone-200 text-slate-600'
                    }
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                  `}
      style={{ transitionDelay: `${appearIndex * 45}ms` }}
    >
      {skill.label}
    </span>
  );
}
