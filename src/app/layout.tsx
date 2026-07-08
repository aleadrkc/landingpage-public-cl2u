import type { Metadata } from 'next';
import './globals.css';

const baseUrl = 'https://demolandingpubliccl2u.z48.web.core.windows.net';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CL2U – All Your Rewards in one Platform!',
    template: '%s | CL2U',
  },
  description: 'CL2U connects gamers with play history, event notifications, pre-registration, leaderboards, rewards, and partner store community updates.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'CL2U – All Your Rewards in one Platform!',
    description: 'All your rewards in one platform. CL2U helps players stay connected with games, events, community updates, and leaderboards.',
    url: baseUrl,
    siteName: 'CL2U',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CL2U – All Your Rewards in one Platform!',
    description: 'All your rewards in one platform. CL2U helps players stay connected with games, events, community updates, and leaderboards.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
