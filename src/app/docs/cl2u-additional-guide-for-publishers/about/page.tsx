import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const origin = 'https://public.cl2u.net';

export const metadata: Metadata = {
  title: 'About – CL2U Additional Guide for Publishers',
  description: 'About section of the CL2U Additional Guide for Publishers.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-publishers/about/' },
  openGraph: {
    title: 'About – CL2U Additional Guide for Publishers',
    description: 'About section of the CL2U Additional Guide for Publishers.',
    url: '/docs/cl2u-additional-guide-for-publishers/about/',
    siteName: 'CL2U',
    images: [{ url: '/images/logo.png', alt: 'CL2U Logo' }],
  },
};

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-row">
        <a className="logo-link" href="/" aria-label="CL2U homepage">
          <img src="/images/logo.png" alt="CL2U Logo" width={134} height={50} />
        </a>
        <nav className="desktop-nav" aria-label="Main Menu">
          {navItems.map((item, index) => (
            <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href}>{item.label}</a>
          ))}
          <a className="login-button" href="https://cl2u.net/login">LOGIN</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Toggle mobile menu"><span></span><span></span><span></span></summary>
          <div className="mobile-panel">
            {navItems.map((item, index) => (
              <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href}>{item.label}</a>
            ))}
            <a href="https://cl2u.net/login">LOGIN</a>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
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

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="About">
          <form className="docs-search doc-category-search" role="search" method="get" action="https://public.cl2u.net/">
            <label className="screen-reader-text" htmlFor="about-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="about-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>

          <div className="wedocs-single-wrap-clone">
            <aside className="wedocs-sidebar-clone" aria-label="CL2U Additional Guide for Publishers navigation">
              <h2>CL2U Additional Guide for Publishers</h2>
              <ul className="doc-nav-list-clone">
                <li>
                  <a href={'/docs/cl2u-additional-guide-for-publishers/about/'}>📁About<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href={'/docs/cl2u-additional-guide-for-publishers/about/publisher-role/'}>Publisher Role</a></li>
                  </ul>
                </li>
              </ul>
            </aside>

            <article className="wedocs-single-content-clone" itemScope itemType="https://schema.org/Article">
              <ol className="wedocs-breadcrumb-clone">
                <li aria-hidden="true">⌂</li>
                <li><a href="/">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/">Docs</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-additional-guide-for-publishers/">CL2U Additional Guide for Publishers</a></li>
                <li aria-hidden="true">›</li>
                <li><span>About</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">About</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="article-child-clone" itemProp="articleBody">
                <h2>Articles</h2>
                <ul>
                  <li>
                    <a href={'/docs/cl2u-additional-guide-for-publishers/about/publisher-role/'}>Publisher Role</a>
                  </li>
                </ul>
              </div>

              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><i className="wedocs-icon wedocs-icon-envelope"></i> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-07T15:45:24+08:00">Updated on March 7, 2023</time>
              </footer>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
      <a className="back-top" href="#" aria-label="Go to top">⌃</a>
    </>
  );
}