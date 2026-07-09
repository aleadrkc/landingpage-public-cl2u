import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const origin = 'https://public.cl2u.net';

const distributorArticles = [
  {
    label: 'Saved Business',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/saved-business/`,
    children: [],
  },
  {
    label: 'Official Shop Programme',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/official-shop-programme/`,
    children: [],
  },
  {
    label: 'Shops',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/shops/`,
    children: [],
  },
  {
    label: 'Staff',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/staff/`,
    children: [
      { label: 'Add Staff', href: `${origin}/docs/cl2u-additional-guide-for-distributors/staff/add-staff/` },
      { label: 'Edit Staff', href: `${origin}/docs/cl2u-additional-guide-for-distributors/staff/edit-staff/` },
      { label: 'Delete Staff', href: `${origin}/docs/cl2u-additional-guide-for-distributors/staff/delete-staff/` },
      { label: 'Manage the Data Access Limitation for the Staff', href: `${origin}/docs/cl2u-additional-guide-for-distributors/staff/manage-the-data-access-limitation-for-the-staff/` },
    ],
  },
  {
    label: 'Adventure Campaigns',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/`,
    children: [
      { label: 'Manage Adventure Campaign', href: `${origin}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/` },
      { label: 'Create Adventure Campaign', href: `${origin}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/` },
      { label: 'Edit Adventure Campaign', href: `${origin}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/edit-adventure-campaign/` },
      { label: 'Delete Adventure Campaign', href: `${origin}/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/delete-adventure-campaign/` },
    ],
  },
  {
    label: 'Campaigns',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/campaigns/`,
    children: [
      { label: 'Manage Campaigns', href: `${origin}/docs/cl2u-additional-guide-for-distributors/campaigns/manage-campaigns/` },
    ],
  },
  {
    label: 'Tournament Criteria',
    href: `${origin}/docs/cl2u-additional-guide-for-distributors/tournament-criteria/`,
    children: [
      { label: 'Manage Tournament Criteria', href: `${origin}/docs/cl2u-additional-guide-for-distributors/tournament-criteria/manage-tournament-criteria/` },
      { label: 'How to Apply Tournament Criteria', href: `${origin}/docs/cl2u-additional-guide-for-distributors/tournament-criteria/how-to-apply-tournament-criteria/` },
    ],
  },
];

export const metadata: Metadata = {
  title: 'CL2U Additional Guide for Distributors',
  description: 'CL2U Additional Guide for Distributors documentation category and article index.',
  alternates: {
    canonical: '/docs/cl2u-additional-guide-for-distributors/',
  },
  openGraph: {
    title: 'CL2U Additional Guide for Distributors',
    description: 'CL2U Additional Guide for Distributors documentation category and article index.',
    url: '/docs/cl2u-additional-guide-for-distributors/',
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

export default function DistributorsGuideCategoryPage() {
  return (
    <>
      <SiteHeader />

      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="CL2U Additional Guide for Distributors">
          <form className="docs-search doc-category-search" role="search" method="get" action="https://public.cl2u.net/">
            <label className="screen-reader-text" htmlFor="distributor-doc-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="distributor-doc-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>

          <div className="wedocs-single-wrap-clone">
            <aside className="wedocs-sidebar-clone" aria-label="CL2U Additional Guide for Distributors navigation">
              <h2>CL2U Additional Guide for Distributors</h2>
              <ul className="doc-nav-list-clone">
                {distributorArticles.map((article) => (
                  <li key={article.label}>
                    <a href={article.href}>📁{article.label}<span aria-hidden="true">⌄</span></a>
                    {article.children.length > 0 && (
                      <ul>
                        {article.children.map((child) => (
                          <li key={child.label}><a href={child.href}>{child.label}</a></li>
                        ))}
                      </ul>
                    )}
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
                <li><span>CL2U Additional Guide for Distributors</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">CL2U Additional Guide for Distributors</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="article-child-clone" itemProp="articleBody">
                <h2>Articles</h2>
                <ul>
                  {distributorArticles.map((article) => (
                    <li key={article.label}>
                      <a href={article.href}>{article.label}</a>
                      {article.children.length > 0 && (
                        <ul>
                          {article.children.map((child) => (
                            <li key={child.label}><a href={child.href}>{child.label}</a></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <footer className="wedocs-entry-footer-clone">
                <span>✉ Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 10, 2023</time>
              </footer>

              <nav className="wedocs-doc-nav-clone" aria-label="Doc navigation">
                <a href="https://public.cl2u.net/docs/cl2u-user-guide-for-business-owners/">← CL2U User Guide for Business Owners</a>
                <a href="https://public.cl2u.net/docs/cl2u-additional-guide-for-publishers/">CL2U Additional Guide for Publishers →</a>
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