import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PHA+QS4gQ3JlYXRlIGEgQnVzaW5lc3MgTGlzdDwvcD4KPHA+VGhlIHVzZXIgZ3VpZGUgb24gaG93IHRvIGNyZWF0ZSBhIGJ1c2luZXNzIGxpc3QsIGNhbiBiZSBhY2Nlc3NlZCBpbiA8YSBocmVmPSIvZG9jcy9jbDJ1LWFkZGl0aW9uYWwtZ3VpZGUtZm9yLWRpc3RyaWJ1dG9ycy9zYXZlZC1idXNpbmVzcy9jcmVhdGUtYS1uZXctbGlzdC1mb3IteW91ci1mYXZvcml0ZS1idXNpbmVzcy8iPkNyZWF0ZSBBIE5ldyBMaXN0IGZvciBZb3VyIEZhdm9yaXRlIEJ1c2luZXNzPC9hPi48L3A+CjxwPkIuIEVkaXQgU2F2ZWQgQnVzaW5lc3MgTGlzdDwvcD4KPG9sPgo8bGk+Q2xpY2sgJiM4MjIwO1NhdmVkIEJ1c2luZXNzJiM4MjIxOyBpbiB0aGUgTmF2aWdhdGlvbiBCYXIuIDxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvbTEtNy5wbmciIGFsdD0iIiB3aWR0aD0iMTM2NiIgaGVpZ2h0PSI2NTEiIC8+PC9saT4KPGxpPkNsaWNrIGVkaXQgYnV0dG9uIChncmV5IGNvbG9yKSB3aXRoIHBlbmNpbCBpY29uIG9uIHRoZSBsaXN0IHRoYXQgeW91IHdhbnQgdG8gZWRpdCB0aGUgbmFtZS4gPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9tMi00LnBuZyIgYWx0PSIiIHdpZHRoPSIxMzY2IiBoZWlnaHQ9IjY1MSIgLz48L2xpPgo8bGk+RWRpdCB0aGUgYnVzaW5lc3MgbGlzdCBuYW1lIGF0IHRoZSAmIzgyMjA7TGlzdCBOYW1lJiM4MjIxOyBmaWVsZCBhbmQgeW91IG1heSBjaGFuZ2UgdGhlIGxpc3QgaXRlbSB0eXBlLiBUaGVuLCBjbGljayAmIzgyMjA7U3VibWl0JiM4MjIxOyB0byBzYXZlIHRoZSBjaGFuZ2VzIG1hZGUgaW50byB0aGUgYnVzaW5lc3MgbGlzdCBuYW1lLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9tMy02LnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvbTMtNi0xMDI0eDQ4OC5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0ODgiIC8+PC9hPjwvbGk+Cjwvb2w+CjxwPkMuIFZpZXcgU2F2ZWQgQnVzaW5lc3MgTGlzdDwvcD4KPG9sPgo8bGk+Q2xpY2sgJiM4MjIwO1NhdmVkIEJ1c2luZXNzJiM4MjIxOyBpbiB0aGUgTmF2aWdhdGlvbiBCYXIuIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L20xLTgucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9tMS04LTEwMjR4NDg4LnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ4OCIgLz48L2E+PC9saT4KPGxpPllvdSBjYW4gZmlsdGVyIGFuZCBzZWFyY2ggdGhlIGxpc3QgYnkgaW5wdXQgdGhlIGxpc3QgbmFtZSBhdCB0aGUgJiM4MjIwO0xpc3QgTmFtZSYjODIyMTsgZmllbGQgYW5kIHNlbGVjdCB0aGUgbGlzdCBpdGVtcyB0eXBlIGZyb20gdGhlIGRyb3Bkb3duIG1lbnUuIENsaWNrICYjODIyMDtTZWFyY2gmIzgyMjE7IHRvIHNlYXJjaCB0aGUgZGF0YS4gQ2xpY2sgJiM4MjIwO1JlZnJlc2gmIzgyMjE7IHRvIHJlZnJlc2ggdGhlIGRhdGEuIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L200LTIucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9tNC0yLTEwMjR4NDg4LnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ4OCIgLz48L2E+PC9saT4KPC9vbD4KPHA+RC4gUmVtb3ZlIFNhdmVkIEJ1c2luZXNzIExpc3Q8L3A+CjxwPlRoZSB1c2VyIGd1aWRlIG9uIGhvdyB0byByZW1vdmUgc2F2ZWQgYnVzaW5lc3MgbGlzdCBjYW4gYmUgYWNjZXNzZWQgaW4gPGEgaHJlZj0iL2RvY3MvY2wydS1hZGRpdGlvbmFsLWd1aWRlLWZvci1kaXN0cmlidXRvcnMvc2F2ZWQtYnVzaW5lc3MvcmVtb3ZlLWEtYnVzaW5lc3MtZnJvbS15b3VyLXNhdmVkLWJ1c2luZXNzLWxpc3QvIj5SZW1vdmUgYSBCdXNpbmVzcyBmcm9tIFlvdXIgU2F2ZWQgQnVzaW5lc3MgTGlzdDwvYT4uPC9wPg==';

export const metadata: Metadata = {
  title: 'Manage Your Saved Business List – CL2U',
  description: 'Manage Your Saved Business List — documentation section in the CL2U Additional Guide for Distributors.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-distributors/saved-business/manage-your-saved-business-list/' },
  openGraph: {
    title: 'Manage Your Saved Business List',
    description: 'Manage Your Saved Business List — documentation section in the CL2U Additional Guide for Distributors.',
    url: '/docs/cl2u-additional-guide-for-distributors/saved-business/manage-your-saved-business-list/',
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
        <section className="doc-category-content" aria-label="Manage Your Saved Business List">
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
                <li><a href="/docs/cl2u-additional-guide-for-distributors/saved-business/">Saved Business</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Manage Your Saved Business List</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Manage Your Saved Business List</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />

              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on May 8, 2020</time>
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
