import { Project } from '@/app/types';

export const projects: Project[] = [
  {
    title: 'Finwaze',
    description:
      'A full-featured financial management tool that supports multiple accounts and currencies, and offers budget tracking and analytics.',
    tags: ['Angular', 'Signals', 'RxJS', 'Tailwind', 'PrimeNG', 'Postgres'],
    link: 'https://finwaze.app',
  },
  {
    title: 'Sprytno',
    status: 'MVP Stage',
    statusNote: 'More features planned in upcoming iterations',
    description:
      'A web app where users post requests or offers, then match with others to complete tasks and earn through quick side gigs.',
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    link: 'https://web.sprytno.app',
  },
  {
    title: 'iSpent',
    status: 'closed',
    description:
      'The first simplified iteration of personal finance management, focused on tracking daily expenses against a monthly budget.',
    tags: ['Angular', 'Tailwind', 'Postgres', 'NestJS', 'Prisma'],
    link: 'https://github.com/rednez/ispent',
  },
  {
    title: 'angular-user-idle',
    description:
      'An Angular 15+ library that tracks user inactivity and lets applications respond to idle state.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    link: 'https://github.com/rednez/angular-user-idle',
  },
];
