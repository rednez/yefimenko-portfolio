import { Project } from '@/app/types';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack shopping experience with real-time inventory, Stripe payments, and a headless CMS.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-400',
    shadow: 'hover:shadow-emerald-100',
    tag: 'bg-emerald-100 text-emerald-700',
    arrow: 'text-emerald-500',
  },
  {
    title: 'Task Flow App',
    description:
      'Kanban-style project manager with drag-and-drop, team collaboration, and analytics dashboard.',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    link: 'https://github.com',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-400',
    shadow: 'hover:shadow-violet-100',
    tag: 'bg-violet-100 text-violet-700',
    arrow: 'text-violet-500',
  },
  {
    title: 'Dev Blog Engine',
    description:
      'Static site generator built from scratch with MDX support, syntax highlighting, and RSS feed.',
    tags: ['Astro', 'MDX', 'Tailwind'],
    link: 'https://github.com',
    bg: 'bg-sky-50',
    border: 'hover:border-sky-400',
    shadow: 'hover:shadow-sky-100',
    tag: 'bg-sky-100 text-sky-700',
    arrow: 'text-sky-500',
  },
  {
    title: 'Real-Time Chat',
    description:
      'WebSocket-powered chat with rooms, presence indicators, message history, and file sharing.',
    tags: ['React', 'Socket.io', 'Redis'],
    link: 'https://github.com',
    bg: 'bg-lime-50',
    border: 'hover:border-lime-400',
    shadow: 'hover:shadow-lime-100',
    tag: 'bg-lime-100 text-lime-700',
    arrow: 'text-lime-500',
  },
];
