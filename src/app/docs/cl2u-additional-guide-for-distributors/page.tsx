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
    href: `/docs/cl2u-additional-guide-for-distributors/saved-business/`,
    children: [
      { label: 'Create A New List for Your Favorite Business', href: `/docs/cl2u-additional-guide-for-distributors/saved-business/create-a-new-list-for-your-favorite-business/` },
      { label: 'Add a Business into Your Saved Business List', href: `/docs/cl2u-additional-guide-for-distributors/saved-business/add-a-business-into-your-saved-business-list/` },
      { label: 'Manage Your Saved Business List', href: `/docs/cl2u-additional-guide-for-distributors/saved-business/manage-your-saved-business-list/` },
      { label: 'Remove a Business from Your Saved Business List', href: `/docs/cl2u-additional-guide-for-distributors/saved-business/remove-a-business-from-your-saved-business-list/` },
    ],
  },
  {
    label: 'Official Shop Programme',
    href: `/docs/cl2u-additional-guide-for-distributors/official-shop-programme/`,
    children: [
      { label: 'Create an Official Shop Programme', href: `/docs/cl2u-additional-guide-for-distributors/official-shop-programme/create-an-official-shop-programme/` },
      { label: 'Add a Shop or an Event Organizer to the Official Shop Programme You Created', href: `/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-a-shop-or-an-event-organizer-to-the-official-shop-programme-you-created/` },
      { label: 'Add Tournament to Official Shop Programme', href: `/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-tournament-to-official-shop-programme/` },
    ],
  },
  {
    label: 'Shops',
    href: `/docs/cl2u-additional-guide-for-distributors/shops/`,
    children: [
      { label: 'Manage Shops Selling Your Products', href: `/docs/cl2u-additional-guide-for-distributors/shops/manage-shops-selling-your-products/` },
      { label: 'Give Official Badge to the Shops', href: `/docs/cl2u-additional-guide-for-distributors/shops/give-official-badge-to-the-shops/` },
    ],
  },
  {
    label: 'Staff',
    href: `/docs/cl2u-additional-guide-for-distributors/staff/`,
    children: [
      { label: 'Create Roles for Staff', href: `/docs/cl2u-additional-guide-for-distributors/staff/create-roles-for-staff/` },
      { label: 'Add Staff', href: `/docs/cl2u-additional-guide-for-distributors/staff/add-staff/` },
      { label: 'Edit Staff', href: `/docs/cl2u-additional-guide-for-distributors/staff/edit-staff/` },
      { label: 'Delete Staff', href: `/docs/cl2u-additional-guide-for-distributors/staff/delete-staff/` },
      { label: 'Manage the Data Access Limitation for the Staff', href: `/docs/cl2u-additional-guide-for-distributors/staff/manage-the-data-access-limitation-for-the-staff/` },
    ],
  },
  {
    label: 'Adventure Campaigns',
    href: `/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/`,
    children: [
      { label: 'Manage Adventure Campaign', href: `/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/` },
      { label: 'Create Adventure Campaign', href: `/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/` },
      { label: 'Edit Adventure Campaign', href: `/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/edit-adventure-campaign/` },
      { label: 'Delete Adventure Campaign', href: `/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/delete-adventure-campaign/` },
    ],
  },
  {
    label: 'Campaigns',
    href: `/docs/cl2u-additional-guide-for-distributors/campaigns/`,
    children: [
      { label: 'Manage Campaigns', href: `/docs/cl2u-additional-guide-for-distributors/campaigns/manage-campaigns/` },
    ],
  },
  {
    label: 'Tournament Criteria',
    href: `/docs/cl2u-additional-guide-for-distributors/tournament-criteria/`,
    children: [
      { label: 'Manage Tournament Criteria', href: `/docs/cl2u-additional-guide-for-distributors/tournament-criteria/manage-tournament-criteria/` },
      { label: 'How to Apply Tournament Criteria', href: `/docs/cl2u-additional-guide-for-distributors/tournament-criteria/how-to-apply-tournament-criteria/` },
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
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="https://cl2u.net/contact-us">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 10, 2023</time>
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