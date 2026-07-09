import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PG9sPgo8bGk+Q2xpY2sg4oCcU2hvcHPigJ0gaW4gdGhlIG5hdmlnYXRpb24gYmFyLjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvbzEtMS0xMDI0eDQ5Ni5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTYiIC8+PC9saT4KPGxpPkNsaWNrIHRoZSBjaGVja2JveCBvbiB0aGUgc2hvcCB0aGF0IHlvdSB3YW50IHRvIHNldCBhbmQgZ2l2ZSB0aGUgb2ZmaWNpYWwgYmFkZ2UuIChJbiB0aGlzIHNjZW5hcmlvLCBnaXZlIG9mZmljaWFsIGJhZGdlIHRvIOKAnDI1QyBBcnRzICZhbXA7IEhvYmJpZXPigJ0pLjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvbzItMS0xMDI0eDQ5My5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTMiIC8+PC9saT4KPGxpPkNsaWNrIOKAnFNldCBPZmZpY2lhbCBTdGF0dXPigJ0gb24gdGhlIE1hbmFnZSBSZXRhaWwgU2hvcHMgZGFzaGJvYXJkIHNlY3Rpb24uPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9vMy0xMDI0eDQ5NS5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTUiIC8+PC9saT4KPGxpPkEgcG9wLXVwIG9wdGlvbiB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuIGFzIHNob3duIGluIHRoZSBmb2xsb3dpbmcgcGljdHVyZS4gVG8gZ2l2ZSBhbiBvZmZpY2lhbCBiYWRnZSB0byB0aGUgc2hvcCwgY2hvb3NlIHRoZSB0eXBlIG9mIGdhbWUgYnkgdGljayB0aGUgY2hlY2tib3guIFlvdSBtYXkgY2xpY2sg4oCcU2VsZWN0IEFsbOKAnSB0byB0aWNrIGFsbCBvZiB0aGUgY2hlY2stYm94ZXMgYXZhaWxhYmxlLiBUaGVuLCBjbGljayDigJxTdWJtaXTigJ0gdG8gc2V0IHRoZSBvZmZpY2lhbCBzdGF0dXMuPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9vNC0xMDI0eDQ4OS5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0ODkiIC8+PC9saT4KPGxpPkEgcG9wLXVwIGFsZXJ0IG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlbiBhcyBzaG93biBpbiB0aGUgZm9sbG93aW5nIHBpY3R1cmUuIENsaWNrIOKAnE9r4oCdIHRvIGNvbmZpcm0gZ2l2aW5nIGFuZCBzZXR0aW5nIHRoZSBvZmZpY2lhbCBzdGF0dXMuPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9vNS0xMDI0eDQ5MC5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTAiIC8+PC9saT4KPGxpPkZvbGxvd2luZyBwaWN0dXJlIHNob3dzIHRoYXQg4oCcMjVDIEFydHMgJmFtcDsgSG9iYmllc+KAnSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgb2J0YWluZWQgdGhlIG9mZmljaWFsIGJhZGdlIHN0YXR1cy48aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL282LTEwMjR4NDk2LnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ5NiIgLz48L2xpPgo8L29sPgo8cD5Ob3RlOjwvcD4KPHA+VG8gdW5zZXQgdGhlIG9mZmljaWFsIHN0YXR1cyBnaXZlbiBvbiB0aGUgc2hvcCwgZGVzZWxlY3QgYW55IGdhbWUgYW5kIGNsaWNrIOKAnFN1Ym1pdOKAnS4gSW4gdGhpcyBleGFtcGxlLCB1bnNldCB0aGUgb2ZmaWNpYWwgc3RhdHVzIG9mIGEgc2hvcCB3aXRoIHRoZSBuYW1lIG9mIOKAnDI1QyBBcnRzICZhbXA7IEhvYmJpZXPigJ0uPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9vNy0xMDI0eDQ5Mi5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTIiIC8+PC9wPgo8cD5Gb2xsb3dpbmcgcGljdHVyZSBzaG93cyB0aGF0IOKAnDI1QyBBcnRzICZhbXA7IEhvYmJpZXPigJ0gc2hvcCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdW5zZXQgdGhlIHByZXZpb3VzIG9mZmljaWFsIHN0YXR1cy48aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL284LTEwMjR4NDk0LnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ5NCIgLz48L3A+';

export const metadata: Metadata = {
  title: 'Give Official Badge to the Shops – CL2U',
  description: 'Give Official Badge to the Shops — documentation section in the CL2U Additional Guide for Distributors.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-distributors/shops/give-official-badge-to-the-shops/' },
  openGraph: {
    title: 'Give Official Badge to the Shops',
    description: 'Give Official Badge to the Shops — documentation section in the CL2U Additional Guide for Distributors.',
    url: '/docs/cl2u-additional-guide-for-distributors/shops/give-official-badge-to-the-shops/',
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
        <section className="doc-category-content" aria-label="Give Official Badge to the Shops">
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
                <li><a href="/docs/cl2u-additional-guide-for-distributors/shops/">Shops</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Give Official Badge to the Shops</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Give Official Badge to the Shops</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />

              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="https://cl2u.net/contact-us">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on May 11, 2020</time>
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
