import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vasyl Yefimenko',
    short_name: 'Yefimenko',
    description:
      'Frontend web developer crafting thoughtful digital experiences, pixel-perfect interfaces, and modern web applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0a09',
    theme_color: '#059669',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
