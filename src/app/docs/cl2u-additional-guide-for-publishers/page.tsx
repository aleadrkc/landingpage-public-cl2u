import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const origin = 'https://public.cl2u.net';

const publisherArticles = [
  {
    label: 'About',
    href: `${origin}/docs/cl2u-additional-guide-for-publishers/about/`,
    children: [
      {
        label: 'Publisher Role',
        href: `${origin}/docs/cl2u-additional-guide-for-publishers/about/publisher-role/`,
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'CL2U Additional Guide for Publishers',
  description: 'CL2U Additional Guide for Publishers documentation category and article index.',
  alternates: {
    canonical: '/docs/cl2u-additional-guide-for-publishers/',
  },
  openGraph: {
    title: 'CL2U Additional Guide for Publishers',
    description: 'CL2U Additional Guide for Publishers documentation category and article index.',
    url: '/docs/cl2u-additional-guide-for-publishers/',
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
            <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="login-button" href="https://cl2u.net/login">LOGIN</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Toggle mobile menu"><span></span><span></span><span></span></summary>
          <div className="mobile-panel">
            {navItems.map((item, index) => (
              <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href}>
                {item.label}
              </a>
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

export default function PublishersGuideCategoryPage() {
  return (
    <>
      <SiteHeader />

      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="CL2U Additional Guide for Publishers">
          <form className="docs-search doc-category-search" role="search" method="get" action="https://public.cl2u.net/">
            <label className="screen-reader-text" htmlFor="publisher-doc-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="publisher-doc-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>

          <div className="wedocs-single-wrap-clone">
            <aside className="wedocs-sidebar-clone" aria-label="CL2U Additional Guide for Publishers navigation">
              <h2>CL2U Additional Guide for Publishers</h2>
              <ul className="doc-nav-list-clone">
                {publisherArticles.map((article) => (
                  <li key={article.label}>
                    <a href={article.href}>📁{article.label}<span aria-hidden="true">⌄</span></a>
                    <ul>
                      {article.children.map((child) => (
                        <li key={child.label}><a href={child.href}>{child.label}</a></li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </aside>

            <article className="wedocs-single-content-clone" itemScope itemType="https://schema.org/Article">
              <ol className="wedocs-breadcrumb-clone">
                <li aria-hidden="true">⌂</li>
                <li><a href="/">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/">Docs</a></li>
                <li aria-hidden="true">›</li>
                <li><span>CL2U Additional Guide for Publishers</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">CL2U Additional Guide for Publishers</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="article-child-clone" itemProp="articleBody">
                <h2>Articles</h2>
                <ul>
                  {publisherArticles.map((article) => (
                    <li key={article.label}>
                      <a href={article.href}>{article.label}</a>
                      <ul>
                        {article.children.map((child) => (
                          <li key={child.label}><a href={child.href}>{child.label}</a></li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              <footer className="wedocs-entry-footer-clone">
                <span>✉ Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 10, 2023</time>
              </footer>

              <nav className="wedocs-doc-nav-clone" aria-label="Doc navigation">
                <a href="https://public.cl2u.net/docs/cl2u-additional-guide-for-distributors/">← CL2U Additional Guide for Distributors</a>
              </nav>

              <div className="wedocs-feedback-clone">
                Was this article helpful to you? <a href="#">Yes</a> <a href="#">No</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
      <a className="back-top" href="#" aria-label="Go to top">⌃</a>
    </>
  );
}
