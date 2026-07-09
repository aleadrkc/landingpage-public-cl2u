import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PG9sPgo8bGk+Q2xpY2sgdGhlIOKAnENyZWF0ZeKAnSBidXR0b24uPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvYWMxLnBuZyIgYWx0PSIiIHdpZHRoPSIxODMwIiBoZWlnaHQ9IjkxNiIgLz48L2xpPgo8bGk+RmlsbCBpbiB0aGUgcmVxdWlyZWQgaW5mb3JtYXRpb24gc3VjaCBhcyB0aGUgQWR2ZW50dXJlIENhbXBhaWduIG5hbWUsIHN0YXJ0IGRhdGUsIGVuZCBkYXRlLCBpbWFnZSwgYW5kIGRlc2NyaXB0aW9uLjxiciAvPgpGaWxsIGluIGFsc28gdGhlIFFSIENvZGUgcnVsZSBmb3JtIGFuZCByZWZlciB0byB0aGUgZXhhbXBsZSBpbiB0aGUgaW1hZ2UgaWYgeW91IG5lZWQgZ3VpZGFuY2UuwqA8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL2FjMi5wbmciIGFsdD0iIiB3aWR0aD0iMTUyMiIgaGVpZ2h0PSI5MjIiIC8+PGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9hYzMucG5nIiBhbHQ9IiIgd2lkdGg9IjE1MTAiIGhlaWdodD0iOTEyIiAvPjwvbGk+CjxsaT5PbmNlIHlvdSBoYXZlIGZpbGxlZCBpbiB0aGUgcmVxdWlyZWQgZGV0YWlscywgY2xpY2sgdGhlICYjODIyMDtTYXZlJiM4MjIxOyBidXR0b24sIGFuZCB0aGlzIHBhZ2Ugd2lsbCBhcHBlYXIuPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvYWM0LnBuZyIgYWx0PSIiIHdpZHRoPSIxODMyIiBoZWlnaHQ9IjkxNiIgLz48L2xpPgo8bGk+Q2xpY2sgJiM4MjIwO0dlbmVyYXRlIFFSIENvZGVzLCYjODIyMTsgYW5kIHRoaXMgcGFnZSB3aWxsIGFwcGVhci4gRW50ZXIgdGhlIHF1YW50aXR5IG9mIFFSIGNvZGVzIHlvdSB3YW50IHRvIGdlbmVyYXRlLCBhbmQgdGhlbiBjbGljayAmIzgyMjA7R2VuZXJhdGUgUVIgQ29kZXMuJiM4MjIxOzxiciAvPgo8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL2FjNS5wbmciIGFsdD0iIiB3aWR0aD0iMTUzMiIgaGVpZ2h0PSI4MTIiIC8+PC9saT4KPGxpPlRvIGRvd25sb2FkIHRoZSBRUiBjb2RlcyB5b3UgY3JlYXRlZCwgY2xpY2sgb24gdGhlIGJhdGNoIG51bWJlciAoaW4gdGhpcyBzY2VuYXJpbywgaXQgd291bGQgYmUgYmF0Y2ggMSwgd2hpY2ggaW5jbHVkZXMgUVIgY29kZXMgMS01KS48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9iaXo3LnBuZyIgYWx0PSIiIHdpZHRoPSIxNTA3IiBoZWlnaHQ9IjMxMyIgLz48L2xpPgo8bGk+VGhlbiwgeW91ciBRUiBjb2RlcyB3aWxsIGFwcGVhci4gUHJpbnQgdGhlbSBhcyBzdGlja2VycyBhbmQgcGxhY2UgdGhlbSBvbiB5b3VyIHByb2R1Y3Qgb3Igc29tZXdoZXJlIHRoYXQgdGhlIHBsYXllcnMgY2FuIHNjYW4gdGhlbSB0byByZWRlZW0gdGhlaXIgZ2lmdC48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9hYzYucG5nIiBhbHQ9IiIgd2lkdGg9IjI3NiIgaGVpZ2h0PSI4NzIiIC8+PC9saT4KPC9vbD4=';

export const metadata: Metadata = {
  title: 'Create Adventure Campaign – CL2U',
  description: 'Create Adventure Campaign — documentation section in the CL2U Additional Guide for Distributors.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/' },
  openGraph: {
    title: 'Create Adventure Campaign',
    description: 'Create Adventure Campaign — documentation section in the CL2U Additional Guide for Distributors.',
    url: '/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/',
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

export default function Page() {
  const _html = atob(_b);
  return (
    <>
      <SiteHeader />
      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="Create Adventure Campaign">
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
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/saved-business/">📁Saved Business<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/create-a-new-list-for-your-favorite-business/">Create A New List for Your Favorite Business</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/add-a-business-into-your-saved-business-list/">Add a Business into Your Saved Business List</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/manage-your-saved-business-list/">Manage Your Saved Business List</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/remove-a-business-from-your-saved-business-list/">Remove a Business from Your Saved Business List</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/">📁Official Shop Programme<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/create-an-official-shop-programme/">Create an Official Shop Programme</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-a-shop-or-an-event-organizer-to-the-official-shop-programme-you-created/">Add a Shop or an Event Organizer to the Official Shop Programme You Created</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-tournament-to-official-shop-programme/">Add Tournament to Official Shop Programme</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/shops/">📁Shops<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/shops/manage-shops-distributing-your-products/">Manage Shops Selling Your Products</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/shops/give-official-badge-to-the-shops/">Give Official Badge to the Shops</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/staff/">📁Staff<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/create-roles-for-staff/">Create Roles for Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/add-staff/">Add Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/edit-staff/">Edit Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/delete-staff/">Delete Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/manage-the-data-access-limitation-for-the-staff/">Manage the Data Access Limitation for the Staff</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/">📁Adventure Campaigns<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/">Manage Adventure Campaign</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/">Create Adventure Campaign</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/edit-adventure-campaign/">Edit Adventure Campaign</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/delete-adventure-campaign/">Delete Adventure Campaign</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/campaigns/">📁Campaigns<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/campaigns/manage-campaigns/">Manage Campaigns</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/tournament-criteria/">📁Tournament Criteria<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/tournament-criteria/manage-tournament-criteria/">Manage Tournament Criteria</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/tournament-criteria/how-to-apply-tournament-criteria/">How to Apply Tournament Criteria</a></li>
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
                <li><a href="/docs/cl2u-additional-guide-for-distributors/">CL2U Additional Guide for Distributors</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/">Adventure Campaigns</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Create Adventure Campaign</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Create Adventure Campaign</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />

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
