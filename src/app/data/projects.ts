import { Project } from '@/app/types';

export const projects: Project[] = [
  {
    title: 'Finwaze',
    description:
      'A full-featured financial management tool that supports multiple accounts and currencies, and offers budget tracking and analytics.',
    status: 'Active Development',
    statusNote: 'Not production-ready yet',
    tags: ['Angular', 'Tailwind', 'PrimeNG', 'Postgres'],
    link: 'https://finwaze.app',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'hover:border-emerald-400',
    shadow: 'hover:shadow-emerald-100 dark:hover:shadow-emerald-950/30',
    tag: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    arrow: 'text-emerald-500',
  },
  {
    title: 'Sprytno',
    status: 'MVP Stage',
    statusNote: 'More features planned in upcoming iterations',
    description:
      'A web app where users post requests or offers, then match with others to complete tasks and earn through quick side gigs.',
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    link: 'https://web.sprytno.app',
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    border: 'hover:border-violet-400',
    shadow: 'hover:shadow-violet-100 dark:hover:shadow-violet-950/30',
    tag: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    arrow: 'text-violet-500',
  },
  {
    title: 'iSpent',
    description:
      'The first simplified iteration of personal finance management, focused on tracking daily expenses against a monthly budget.',
    tags: ['Angular', 'Tailwind', 'Postgres', 'NestJS', 'Prisma'],
    link: 'https://ispent.pp.ua/',
    bg: 'bg-sky-50 dark:bg-sky-950/40',
    border: 'hover:border-sky-400',
    shadow: 'hover:shadow-sky-100 dark:hover:shadow-sky-950/30',
    tag: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
    arrow: 'text-sky-500',
  },
  {
    title: 'angular-user-idle',
    description:
      'An Angular 15+ library that tracks user inactivity and lets applications respond to idle state.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    link: 'https://github.com/rednez/angular-user-idle',
    bg: 'bg-lime-50 dark:bg-lime-950/40',
    border: 'hover:border-lime-400',
    shadow: 'hover:shadow-lime-100 dark:hover:shadow-lime-950/30',
    tag: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
    arrow: 'text-lime-500',
  },
];
