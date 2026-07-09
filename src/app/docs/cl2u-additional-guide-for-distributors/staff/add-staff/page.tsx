import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PG9sPgo8bGk+R28gdG8gbXkgYnVzaW5lc3MgLSZndDsgbXkgc3RhZmYuPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvc3RhZmYzLnBuZyIgYWx0PSIiIHdpZHRoPSIxODg1IiBoZWlnaHQ9IjkxMiIgLz48L2xpPgo8bGk+Q2xpY2sgdGhlICYjODIyMDtBZGQgU3RhZmYmIzgyMjE7IGJ1dHRvbiwgYW5kIHRoZSBmb2xsb3dpbmcgcGFnZSB3aWxsIGFwcGVhci4gVHlwZSBpbiB0aGUgQ0wgSUQsIGFuZCB0aGUgdXNlciBkZXRhaWxzIHdpbGwgYmUgZGlzcGxheWVkLiBUaWNrIHRoZSBzdGFmZiByb2xlcyB5b3UgY3JlYXRlZCBlYXJsaWVyIGFuZCBjbGljayBvbiAmIzgyMjA7U2F2ZSYjODIyMTsgb25jZSB5b3UgaGF2ZSBmaW5pc2hlZC48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9zdGFmZjQucG5nIiBhbHQ9IiIgd2lkdGg9IjE1NzIiIGhlaWdodD0iODM1IiAvPjwvbGk+CjxsaT5XYWl0IHVudGlsIHRoZSBwbGF5ZXIgYWNjZXB0cyB0aGUgb2ZmZXIgdG8gYmVjb21lIHlvdXIgc3RhZmYuIFRoZSBzdGF0dXMgd2lsbCBjaGFuZ2UgZnJvbSAmIzgyMTY7UGVuZGluZyYjODIxNzsgdG8gJiM4MjE2O0FjdGl2ZSYjODIxNzsuIElmIHRoZSBwbGF5ZXImIzgyMTc7cyBpbnZpdGF0aW9uIGNvZGUgaGFzIGV4cGlyZWQsIHRyeSBjbGlja2luZyAmIzgyMjA7UmVpbnZpdGUmIzgyMjE7IHRvIHNlbmQgYSBuZXcgaW52aXRhdGlvbiBvciAmIzgyMjA7Q2FuY2VsIEludml0ZSYjODIyMTsgdG8gY2FuY2VsIHRoZSBpbnZpdGF0aW9uLjxiciAvPgo8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL3N0YWZmMy0xLnBuZyIgYWx0PSIiIHdpZHRoPSIxODg1IiBoZWlnaHQ9IjkxMiIgLz48L2xpPgo8L29sPg==';

export const metadata: Metadata = {
  title: 'Add Staff – CL2U',
  description: 'Add Staff — documentation section in the CL2U Additional Guide for Distributors.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-distributors/staff/add-staff/' },
  openGraph: {
    title: 'Add Staff',
    description: 'Add Staff — documentation section in the CL2U Additional Guide for Distributors.',
    url: '/docs/cl2u-additional-guide-for-distributors/staff/add-staff/',
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
        <section className="doc-category-content" aria-label="Add Staff">
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
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/create-a-new-list-for-your-favorite-business/">Create A New List for Your Favorite Business</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/add-a-business-into-your-saved-business-list/">Add a Business into Your Saved Business List</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/manage-your-saved-business-list/">Manage Your Saved Business List</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/remove-a-business-from-your-saved-business-list/">Remove a Business from Your Saved Business List</a></li>
                  
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/">📁Official Shop Programme<span aria-hidden="true">⌄</span></a>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/create-an-official-shop-programme/">Create an Official Shop Programme</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-a-shop-or-an-event-organizer-to-the-official-shop-programme-you-created/">Add a Shop or an Event Organizer to the Official Shop Programme You Created</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/official-shop-programme/add-tournament-to-official-shop-programme/">Add Tournament to Official Shop Programme</a></li>
                  
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/shops/">📁Shops<span aria-hidden="true">⌄</span></a>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/shops/manage-shops-distributing-your-products/">Manage Shops Selling Your Products</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/shops/give-official-badge-to-the-shops/">Give Official Badge to the Shops</a></li>
                  
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/staff/">📁Staff<span aria-hidden="true">⌄</span></a>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/create-roles-for-staff/">Create Roles for Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/add-staff/">Add Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/edit-staff/">Edit Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/delete-staff/">Delete Staff</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/manage-the-data-access-limitation-for-the-staff/">Manage the Data Access Limitation for the Staff</a></li>
                  
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/">📁Adventure Campaigns<span aria-hidden="true">⌄</span></a>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/">Manage Adventure Campaign</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/create-adventure-campaign/">Create Adventure Campaign</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/edit-adventure-campaign/">Edit Adventure Campaign</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/delete-adventure-campaign/">Delete Adventure Campaign</a></li>
                  
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/campaigns/">📁Campaigns<span aria-hidden="true">⌄</span></a>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/campaigns/manage-campaigns/">Manage Campaigns</a></li>
                  
                  </li>
                  <li>
                    <a href="/docs/cl2u-additional-guide-for-distributors/tournament-criteria/">📁Tournament Criteria<span aria-hidden="true">⌄</span></a>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/tournament-criteria/manage-tournament-criteria/">Manage Tournament Criteria</a></li>
                    <li><a href="/docs/cl2u-additional-guide-for-distributors/tournament-criteria/how-to-apply-tournament-criteria/">How to Apply Tournament Criteria</a></li>
                  
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
                <li><a href="/docs/cl2u-additional-guide-for-distributors/staff/">Staff</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Add Staff</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Add Staff</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />

              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 9, 2023</time>
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
