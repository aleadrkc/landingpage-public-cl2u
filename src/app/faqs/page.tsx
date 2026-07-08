"use client";

import { useMemo, useState } from 'react';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

import faqData from './faqs.json';

type FaqItem = { category: 'general' | 'business'; question: string; answerHtml: string };
const faqs = faqData as FaqItem[];

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ');
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-row">
        <a className="logo-link" href="/" aria-label="CL2U homepage">
          <img src="/images/logo.png" alt="CL2U Logo" width={134} height={50} />
        </a>
        <nav className="desktop-nav" aria-label="Main Menu">
          {navItems.map((item, index) => (
            <a key={item.label} className={index === 2 ? 'active' : ''} href={item.href}>{item.label}</a>
          ))}
          <a className="login-button" href="https://cl2u.net/login">LOGIN</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Toggle mobile menu"><span></span><span></span><span></span></summary>
          <div className="mobile-panel">
            {navItems.map((item, index) => (
              <a key={item.label} className={index === 2 ? 'active' : ''} href={item.href}>{item.label}</a>
            ))}
            <a href="https://cl2u.net/login">LOGIN</a>
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <nav className="footer-nav" aria-label="Secondary navigation">
        {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
      </nav>
      <div className="copyright">
        <p>© Knight Connections All Rights Reserved.</p>
        <p>All trademarks referenced herein are the properties of their respective owners.</p>
      </div>
    </footer>
  );
}

export default function FaqsPage() {
  const [category, setCategory] = useState<'all' | 'business' | 'general'>('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<number | null>(null);
  const visibleFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return faqs.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      const searchable = `${item.question} ${item.category} ${stripHtml(item.answerHtml)}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [category, query]);

  return (
    <>
      <Header />
      <main className="faq-page">
        <section className="faq-content" aria-labelledby="faq-title">
          <h1 id="faq-title">Frequently Asked Questions</h1>
          <p className="faq-search-label"><strong>Type your Question:</strong></p>
          <form className="faq-search" role="search" aria-label="Search FAQs" onSubmit={(event) => event.preventDefault()}>
            <span className="faq-search-icon" aria-hidden="true">⌕</span>
            <label className="screen-reader-text" htmlFor="faq-search-input">Search for:</label>
            <input
              id="faq-search-input"
              type="search"
              placeholder="Start typing to search the FAQs"
              value={query}
              onChange={(event) => { setQuery(event.target.value); setOpen(null); }}
            />
            <button type="button" aria-label="Clear FAQ search" onClick={() => { setQuery(''); setOpen(null); }}>⌕</button>
          </form>

          <ul className="faq-filters" aria-label="FAQ categories">
            {(['all', 'business', 'general'] as const).map((item) => (
              <li key={item} className={category === item ? 'is-active' : ''}>
                <button type="button" onClick={() => { setCategory(item); setOpen(null); }}>{item === 'all' ? 'All' : item[0].toUpperCase() + item.slice(1)}</button>
              </li>
            ))}
          </ul>

          {visibleFaqs.length === 0 && (
            <p className="faq-no-results">No FAQs found. Try another keyword or category.</p>
          )}

          <div className="faq-accordion">
            {visibleFaqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <article className={`faq-panel ${item.category} ${isOpen ? 'is-open' : ''}`} key={item.question}>
                  <h4>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                      <span className="faq-toggle-box" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                      <span className="faq-question">{item.question}</span>
                    </button>
                  </h4>
                  {isOpen && <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answerHtml }} />}
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <a className="back-top" href="#" aria-label="Go to top">⌃</a>
    </>
  );
}
