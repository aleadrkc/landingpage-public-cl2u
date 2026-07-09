import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'CL2U Help Center documentation hub for players, business owners, distributors, and publishers.',
  alternates: {
    canonical: '/docs/',
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return children;
}
