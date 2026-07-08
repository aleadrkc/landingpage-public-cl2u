import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about CL2U membership, rewards, partner stores, business features, and account support.',
  alternates: { canonical: '/faqs/' },
  openGraph: {
    title: 'FAQs | CL2U',
    description: 'Frequently asked questions about CL2U membership, rewards, partner stores, business features, and account support.',
    url: '/faqs/',
    type: 'website',
    images: [{ url: '/images/logo.png', width: 331, height: 124 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | CL2U',
    description: 'Frequently asked questions about CL2U membership, rewards, partner stores, business features, and account support.',
    images: ['/images/logo.png'],
  },
};

export default function FaqsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
