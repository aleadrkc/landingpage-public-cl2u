import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PHA+QS4gVmlldyBMaXN0IG9mIEFkdmVudHVyZSBDYW1wYWlnbnMgQ3JlYXRlZDwvcD4KPG9sPgo8bGk+Q2xpY2sg4oCcTVkgQlVTSU5FU1PigJ0gLSZndDsgQWR2ZW50dXJlIENhbXBhaWducyBtZW51IGF0IHRoZSBsZWZ0IHNpZGUgbmF2aWdhdGlvbiBiYXIuIFlvdSBjYW4gc2VlIGxpc3Qgb2YgYWR2ZW50dXJlIGNhbXBhaWducyB0aGF0IHlvdXIgYnVzaW5lc3MgaGFzIGNyZWF0ZWQgcHJldmlvdXNseS48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9hYzkucG5nIiBhbHQ9IiIgd2lkdGg9IjE4MzAiIGhlaWdodD0iOTE1IiAvPjwvbGk+Cjwvb2w+CjxvbCBzdGFydD0iMiI+CjxsaT5Zb3UgY2FuIHNlYXJjaCB0aGUgYWR2ZW50dXJlIGNhbXBhaWduIGJhc2VkIG9uIGFkdmVudHVyZSBjYW1wYWlnbiBuYW1lLCBpZCBhbmQgZmlsdGVyIHRoZWlyIHZpc2liaWxpdHkuPGJyIC8+CllvdSBjYW4gZWRpdCB0aGUgYWR2ZW50dXJlIGNhbXBhaWduIGJ5IGNsaWNraW5nIHRoZSBuYW1lLjxiciAvPgpDbGljayBleWUgaWNvbiwgaWYgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBhZHZlbnR1cmUgY2FtcGFpZ24gYmVjb21lIGhpZGRlbiBvciB2aXNpYmxlLjxiciAvPgpUbyBwZXJmb3JtIGJ1bGsgdXBkYXRlIHZpc2liaWxpdHksIGNhbiB0aWNrIG9uIHRoZSBjaGVja2JveGVzIG9mIHRoZSBhZHZlbnR1cmUgY2FtcGFpZ24gdGhhdCB5b3Ugd2FudCB0byB1cGRhdGUsIGFuZCBjbGljayBvbiDigJxDaGFuZ2UgVmlzaWJpbGl0eeKAnSBkcm9wZG93bi4gVGhlbiwgeW91IGNhbiBjbGljayBvbiB0aGUgc3RhdHVzL3Zpc2liaWxpdHkgb3B0aW9uIHRoYXQgeW91IHdhbnQgaXQgdG8gY2hhbmdlLiA8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL2FjMTAucG5nIiBhbHQ9IiIgd2lkdGg9IjE4MzAiIGhlaWdodD0iOTE1IiAvPjwvbGk+Cjwvb2w+CjxwPkIuIFZpZXcgQWR2ZW50dXJlIENhbXBhaWduIGluIFB1YmxpYyBQYWdlPC9wPgo8b2w+CjxsaT5DbGljayB0aGUgeWVsbG93IGJ1dHRvbiB3aXRoIGxpbmsgc3ltYm9sLjxiciAvPgo8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL2FjMTEucG5nIiBhbHQ9IiIgd2lkdGg9IjE4MzAiIGhlaWdodD0iOTE1IiAvPjwvbGk+CjxsaT5UaGVuIHRoaXMgcGFnZSB3aWxsIGFwcGVhci48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9hYzEyLnBuZyIgYWx0PSIiIHdpZHRoPSIxODE4IiBoZWlnaHQ9Ijg5NyIgLz48L2xpPgo8L29sPgo8cD5DLiBWaWV3IFJlZGVlbWVkIFBsYXllcnMgaW4gdGhlIEFkdmVudHVyZSBDYW1wYWlnbiAoVGhvc2Ugd2hvIGhhdmUgc2Nhbm5lZCB0aGUgUVIgY29kZSk8L3A+CjxvbD4KPGxpPkNsaWNrIHRoZSBncmVlbiBidXR0b24gd2l0aCBsaXN0IHN5bWJvbC48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9hYzEzLnBuZyIgYWx0PSIiIHdpZHRoPSIxODMwIiBoZWlnaHQ9IjkxNSIgLz48L2xpPgo8bGk+QW5kIHRoaXMgcGFnZSB3aWxsIGFwcGVhci4gQ2xpY2sgJiM4MjE2O0V4cG9ydCYjODIxNzsgdG8gZXhwb3J0IG1vcmUgZGV0YWlsZWQgZGF0YSwgc3VjaCBhcyBhZGRyZXNzZXMsIHRvIEV4Y2VsLjxiciAvPgo8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL2FjMTYucG5nIiBhbHQ9IiIgd2lkdGg9IjE1MTciIGhlaWdodD0iODM1IiAvPjwvbGk+Cjwvb2w+CjxwPkQuIFZpZXcgUGxheWVycyBMaXN0IGluIHRoZSBBZHZlbnR1cmUgQ2FtcGFpZ24gKFRob3NlIHdobyBoYXZlIGFjaGlldmVkIGEgcmFuayAxLTQpPC9wPgo8b2w+CjxsaT5DbGljayB0aGlzIGJ1dHRvbi48YnIgLz4KPGltZyAgc3JjPSIvaW1hZ2VzL2Rpc3RyaWJ1dG9ycy9hYzE0LnBuZyIgYWx0PSIiIHdpZHRoPSIxODMwIiBoZWlnaHQ9IjkxNSIgLz48L2xpPgo8bGk+QW5kIHRoaXMgcGFnZSB3aWxsIGFwcGVhci4gQ2xpY2sgJiM4MjE2O0V4cG9ydCYjODIxNzsgdG8gZXhwb3J0IG1vcmUgZGV0YWlsZWQgZGF0YSwgc3VjaCBhcyBhZGRyZXNzZXMsIHRvIEV4Y2VsLgo8cD5UbyBjaGFuZ2UgdGhlIFJld2FyZCBTZW50IFN0YXR1cyBmcm9tICYjODIxNjtVbnNlbnQmIzgyMTc7IHRvICYjODIxNjtTZW50JiM4MjE3OywgWW91IGNhbiBjaG9vc2UgdGhlIHBsYXllciBieSBjbGljayB0aGUgY2hlY2sgaWNvbiAoaW5kaXZpZHVhbGx5KSBvciBjYW4gZG8gYnVsayBzZW50IGJ5IHRpY2tpbmcgdGhlIGNoZWNrYm94ZXMgb2YgdGhlIHBsYXllciBhbmQgY2xpY2sg4oCcU2VudOKAnSBidXR0b24uPC9wPgo8cD5UbyBjaGFuZ2UgdGhlIFJld2FyZCBTZW50IFN0YXR1cyBmcm9tICYjODIxNjtTZW50JiM4MjE3OyB0byAmIzgyMTY7VW5zZW50JiM4MjE3OywgWW91IGNhbiBjaG9vc2UgdGhlIHBsYXllciBieSBjbGljayB0aGUgY3Jvc3MgaWNvbiAoaW5kaXZpZHVhbGx5KSBvciBjYW4gZG8gYnVsayB1bnNlbnQgYnkgdGlja2luZyB0aGUgY2hlY2tib3hlcyBvZiB0aGUgcGxheWVyIGFuZCBjbGljayDigJxVbnNlbnTigJ0gYnV0dG9uLjwvcD4KPHA+Tm90ZTogVGhlIHJld2FyZHMgY2FuIGJlIHNlbnQgdmlhIGVtYWlsLCBzaGlwcGVkLCBvciBkaXN0cmlidXRlZCBpbiBwZXJzb24gYXQgdGhlIGJvb3RoLjxiciAvPgpUaGUgJiM4MjE2O1NlbnQmIzgyMTc7IHN0YXR1cyBpbmRpY2F0ZXMgdGhhdCB0aGUgcmV3YXJkcyBoYXZlIGVpdGhlciBiZWVuIHJlY2VpdmVkIGJ5IHRoZSBwZXJzb24gb3IgaGF2ZSBhbHJlYWR5IGJlZW4gc2VudCB2aWEgc2hpcHBpbmcuPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvYWMxNy5wbmciIGFsdD0iIiB3aWR0aD0iMTQ5MSIgaGVpZ2h0PSI5MjAiIC8+PC9saT4KPC9vbD4KPHA+RS4gR2VuZXJhdGUgbW9yZSBRUiBDb2RlczwvcD4KPG9sPgo8bGk+Q2xpY2sgdGhlIGJsdWUgYnV0dG9uLjxiciAvPgo8aW1nICBzcmM9Ii9pbWFnZXMvZGlzdHJpYnV0b3JzL2FjMTUtMS5wbmciIGFsdD0iIiB3aWR0aD0iMTgzMCIgaGVpZ2h0PSI5MTUiIC8+PC9saT4KPGxpPkNsaWNrIHRoZSBHZW5lcmF0ZSBRUiBDb2RlcywgdHlwZSB0aGUgcXVhbnRpdHkgeW91IHdhbnQsIGNsaWNrIGJsdWUgYnV0dG9uIEdlbmVyYXRlIFFSIENvZGVzLiBUaGVuIGp1c3QgZG93bmxvYWQgaXQgYnkgY2xpY2sgbGluayBpbiB0aGUgYm90dG9tIGRvd25sb2FkIFFSIGNvZGUuPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9kaXN0cmlidXRvcnMvYWMxOC5wbmciIGFsdD0iIiB3aWR0aD0iMTUyMCIgaGVpZ2h0PSI3MzMiIC8+PC9saT4KPC9vbD4=';

export const metadata: Metadata = {
  title: 'Manage Adventure Campaign – CL2U',
  description: 'Manage Adventure Campaign — documentation section in the CL2U Additional Guide for Distributors.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/' },
  openGraph: {
    title: 'Manage Adventure Campaign',
    description: 'Manage Adventure Campaign — documentation section in the CL2U Additional Guide for Distributors.',
    url: '/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/manage-adventure-campaign/',
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
  const _html = new TextDecoder().decode(Uint8Array.from(atob(_b), (char) => char.charCodeAt(0)));
  return (
    <>
      <SiteHeader />
      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="Manage Adventure Campaign">
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
                <li><span>Manage Adventure Campaign</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Manage Adventure Campaign</h1>
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
