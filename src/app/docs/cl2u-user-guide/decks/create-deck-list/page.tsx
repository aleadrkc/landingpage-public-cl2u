import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PHA+PHNwYW4gY2xhc3M9ImpDQWh6IENoTWswYiI+PHNwYW4gY2xhc3M9InJ5TnF2YiI+VGhlIGRlY2sgbGlzdCBpcyBtYWRlIHRvIG1ha2UgaXQgZWFzaWVyIHRvIHN1Ym1pdCBkZWNrcyB0byB0b3VybmFtZW50cy48L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz0iakNBaHogQ2hNazBiIj48c3BhbiBjbGFzcz0icnlOcXZiIj5BbGwgZGVja3MgY3JlYXRlZCB3aWxsIGFwcGVhciBhcyBvcHRpb25zIHdoZW4gdGhlIHBsYXllciBjbGlja3MgJiM4MjIwO0Nob29zZSBEZWNrJiM4MjIxOyBpbiB0aGUgdG91cm5hbWVudCByZWdpc3Rlci48L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz0iakNBaHogQ2hNazBiIj48c3BhbiBjbGFzcz0icnlOcXZiIj5PcHRpb25zIHdpbGwgYXBwZWFyIGlmIHRoZSBkZWNrIGxpc3QgbWFkZSBtYXRjaGVzIHRoZSBnYW1lIHR5cGUgYW5kIGdhbWUgZm9ybWF0IGluIHRoZSB0b3VybmFtZW50IGJlaW5nIGZvbGxvd2VkLjwvc3Bhbj48L3NwYW4+PC9wPgo8b2w+CjxsaT5DbGljayDigJxOZXcgRGVja+KAnSBidXR0b24uPC9saT4KPC9vbD4KPHA+PGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvbWFuYWdlMi5wbmciIGFsdD0iIiB3aWR0aD0iMTE3OCIgaGVpZ2h0PSI2NDgiIC8+PC9wPgo8b2wgc3RhcnQ9IjIiPgo8bGk+RmlsbCBpbiB0aGUgZGVja2xpc3QgbmFtZSBhbmQgY2hvb3NlIHRoZSBnYW1lIHR5cGUuIFRoZW4sIGNsaWNrIOKAnE5leHTigJ0gYnV0dG9uIHRvIGNvbnRpbnVlLjwvbGk+Cjwvb2w+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL21hbmFnZTMucG5nIiBhbHQ9IiIgd2lkdGg9IjExODciIGhlaWdodD0iNjUzIiAvPjwvcD4KPG9sIHN0YXJ0PSIzIj4KPGxpPk9uY2UgeW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdGhlIGRlY2tsaXN0LCBjYW4gc3RhcnQgdG8gZmlsbCBpbiB0aGUgaW5mb3JtYXRpb24gaW4gZGVjayByZWdpc3RyYXRpb24gc2hlZXQgc3VjaCBhcyBuYXRpb24gYW5kIGFkZGluZyBjYXJkcyB0byB0aGUgc2hlZXQuIEluIHRoaXMgZXhhbXBsZSwgdGhpcyBkZWNrIHJlZ2lzdHJhdGlvbiBzaGVldCB3aWxsIGFwcGVhciB3aGVuIHBsYXllciBjaG9vc2UgdGhlIGdhbWUgdHlwZSBpcyBDYXJkZmlnaHQhISBWYW5ndWFyZCBCYWhhc2EgYW5kIHRoZSBnYW1lIGZvcm1hdCBpcyBzdGFuZGFyZC48L2xpPgo8L29sPgo8cD48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9tYW5hZ2U0LnBuZyIgYWx0PSIiIHdpZHRoPSI5NDIiIGhlaWdodD0iNTE3IiAvPjwvcD4KPG9sIHN0YXJ0PSI0Ij4KPGxpPkNsaWNrIOKAnFNhdmXigJ0gYnV0dG9uIHRvIHNhdmUgeW91ciBjaGFuZ2VzLiA8aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9tYW5hZ2U1LnBuZyIgYWx0PSIiIHdpZHRoPSIxMTcwIiBoZWlnaHQ9IjY0NCIgLz48L2xpPgo8bGk+QSBwb3B1cCBkaWFsb2cgd2lsbCBhcHBlYXIgaWYgdGhlIG51bWJlciBvZiBjYXJkcyB0aGF0IHlvdSBoYXZlIGlucHV0dGVkIGlzIGluY29tcGxldGUgb3IgaW52YWxpZC4gWW91IG1heSBjbGljayDigJxDb250aW51ZSBFZGl0aW5n4oCdIGlmIHlvdSB3YW50IHRvIGNvbnRpbnVlIGVkaXQuIE9yIGNsaWNrIOKAnFNhdmUgQW55d2F54oCdIGlmIHlvdSB3YW50IHRvIHN0b3AgZWRpdC48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9tYW5hZ2U2LnBuZyIgYWx0PSIiIHdpZHRoPSI4NjEiIGhlaWdodD0iNDc1IiAvPjwvbGk+Cjwvb2w+';
export const metadata: Metadata = {
  title: 'Create Deck List – CL2U',
  description: 'Create Deck List — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/decks/create-deck-list/' },
  openGraph: {
    title: 'Create Deck List',
    description: 'Create Deck List — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/decks/create-deck-list/',
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
        <section className="doc-category-content" aria-label="Create Deck List">
          <form className="docs-search doc-category-search" role="search" method="get" action="https://public.cl2u.net/">
            <label className="screen-reader-text" htmlFor="players-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="players-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>
          <div className="wedocs-single-wrap-clone">
            <aside className="wedocs-sidebar-clone" aria-label="CL2U User Guide for Players navigation">
              <h2>CL2U User Guide for Players</h2>
              <ul className="doc-nav-list-clone">
                  <li>
                    <a href="/docs/cl2u-user-guide/accounts/">📁Accounts<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/accounts/sign-up-as-player-for-those-above-18-years-old/">Sign Up as Player (For those above 18 years old)</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/sign-up-as-player-for-those-under-18-years-old/">Sign Up as Player (For those under 18 years old)</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/login/">Login</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/forgot-username/">Forgot Username</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/forgot-password/">Forgot Password</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/manage-dashboard/">Manage Dashboard</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/change-profile/">Change Profile</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/change-password/">Change Password</a></li>
                    <li><a href="/docs/cl2u-user-guide/accounts/delete-account/">Delete Account</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide/tournaments/">📁Tournaments<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/tournaments/find-a-tournament/">Find a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/register-a-tournament/">Register a Tournament (Including Email Received)</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/register-a-team-tournament-including-email-received/">Register a Team Tournament (Including Email Received)</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/manage-registered-tournaments/">Manage Registered Tournaments</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/cancel-tournament-registration/">Cancel Tournament Registration</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/edit-card-deck-submitted-to-tournaments/">Edit Card Deck (Submitted to Tournaments)</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/view-tournaments-history/">View Tournaments History</a></li>
                    <li><a href="/docs/cl2u-user-guide/tournaments/view-leaderboard/">View Leaderboard</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide/decks/">📁Decks<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/decks/manage-deck-list/">Manage Deck List</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/create-deck-list/">Create Deck List</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/edit-deck-list/">Edit Deck List</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/delete-deck-list/">Delete Deck List</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/view-all-cards-in-all-deck-lists/">View All Cards in All Deck Lists</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/manage-decklog/">Manage Decklog</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/create-decklog/">Create Decklog</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/edit-decklog/">Edit Decklog</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/delete-decklog/">Delete Decklog</a></li>
                    <li><a href="/docs/cl2u-user-guide/decks/view-cards-in-decklog/">View Cards in Decklog</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide/shops/">📁Shops<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/shops/find-nearby-retail-shop/">Find Nearby Retail Shop</a></li>
                    <li><a href="/docs/cl2u-user-guide/shops/view-tournaments-held-by-shop/">View Tournaments (Held by Shop)</a></li>
                    <li><a href="/docs/cl2u-user-guide/shops/bookmark-shop-to-favorite-list/">Bookmark Shop to Favorite Shop List</a></li>
                    <li><a href="/docs/cl2u-user-guide/shops/manage-favorite-shop-list/">Manage Favorite Shop List</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide/rewards/">📁Rewards<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/rewards/view-rewards/">View Rewards</a></li>
                    <li><a href="/docs/cl2u-user-guide/rewards/redeem-rewards/">Redeem Rewards</a></li>
                    <li><a href="/docs/cl2u-user-guide/rewards/view-redemption-history/">View Redemption History</a></li>
                    <li><a href="/docs/cl2u-user-guide/rewards/view-rewards-points-information/">View Rewards Points Information</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide/adventures/">📁Adventures<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/adventures/how-to-redeem-the-vanguard-adventures/">How to Redeem the Vanguard Adventures</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide/biz-rewards/">📁Biz Rewards<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide/biz-rewards/redeem-biz-rewards/">Redeem Biz Rewards</a></li>
                  </ul>
                  </li>
              </ul>
            </aside>
            <article className="wedocs-single-content-clone" itemScope itemType="https://schema.org/Article">
              <ol className="wedocs-breadcrumb-clone">
                <li aria-hidden="true">⌂</li>
                <li aria-hidden="true">⌂</li>
                <li><a href="/">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/">Docs</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-user-guide/">CL2U User Guide for Players</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-user-guide/decks/">Decks</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Create Deck List</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Create Deck List</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on February 28, 2023</time>
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
