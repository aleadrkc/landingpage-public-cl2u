import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PG9sPgo8bGk+SW4geW91ciBicm93c2VyLCB0eXBlIHRoZSBVUkwgYWRkcmVzcyA8YSBocmVmPSJodHRwczovL2NsMnUubmV0Ij5odHRwczovL2NsMnUubmV0PC9hPiBhbmQgaXQgd2lsbCBkaXJlY3QgdG8gdGhlIGxhbmRpbmcgcGFnZSBvZiBDTDJVLiBDbGljayDigJxMT0dJTuKAnSBidXR0b24gd2hpY2ggaXMgbG9jYXRlZCBhdCB0aGUgdG9wIHJpZ2h0IGNvcm5lci48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9zaWduLXVwMS5wbmciIGFsdD0iIiB3aWR0aD0iMTIzNyIgaGVpZ2h0PSI2NzQiIC8+PC9saT4KPGxpPllvdSB3aWxsIGJlIGRpcmVjdGVkIHRvIHRoaXMgZm9sbG93aW5nIHBhZ2UuIElmIHlvdSBoYXZlIGFjY291bnQgcmVnaXN0ZXJlZCBwcmV2aW91c2x5LCBtYXkgZmlsbCBpbiB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLCB0aGVuIGNsaWNrIOKAnExPR0lO4oCdIGJ1dHRvbi4gSWYgeW91IGRvbuKAmXQgaGF2ZSBhbnkgYWNjb3VudCByZWdpc3RlcmVkIHByZXZpb3VzbHksIG1heSBjbGljayDigJxTaWduIFVw4oCdIGJ1dHRvbi48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9zaWduLXVwMi5wbmciIGFsdD0iIiB3aWR0aD0iMTIyOCIgaGVpZ2h0PSI2NzkiIC8+PC9saT4KPGxpPkZpbGwgaW4gYWxsIG9mIHRoZSBkZXRhaWxzIHN1Y2ggYXMgZmlyc3QgbmFtZSwgbGFzdCBuYW1lLCBlbWFpbCwgY29uZmlybSBlbWFpbCwgcGFzc3dvcmQsIGNvdW50cnksIG1vYmlsZSBudW1iZXIsIGRhdGUgb2YgYmlydGgsIGdlbmRlciwgYW5kIG90aGVycy4gQWZ0ZXIgZmlsbGVkIGluIHRoZSBkZXRhaWxzLCBtYXkgY2xpY2sg4oCcU0lHTiBVUOKAnSBidXR0b24uPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvc2lnbi11cDMucG5nIiBhbHQ9IiIgd2lkdGg9IjExNzMiIGhlaWdodD0iNjUyIiAvPjwvbGk+CjxsaT5PbmNlIHlvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkLCBmb2xsb3dpbmcgbWVzc2FnZSB3aWxsIGJlIGFwcGVhcmVkLiBGb2xsb3cgdGhlIGluc3RydWN0aW9uIGluIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCB0byBhY3RpdmF0ZSB5b3VyIENMMlUgYWNjb3VudC4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvc3RlcHM0cGxheWVycmVnc2l0LnBuZyIgYWx0PSIiIHdpZHRoPSIyMjE4IiBoZWlnaHQ9IjEyMTgiIC8+PC9saT4KPGxpPllvdSBtYXkgY2xpY2sg4oCcQ2xpY2sgaGVyZeKAnSBvciBwYXN0ZSB0aGUgbGluayB0byB5b3VyIGJyb3dzZXIgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50LjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3NpZ24tdXA1LnBuZyIgYWx0PSIiIHdpZHRoPSI4MjkiIGhlaWdodD0iMzc5IiAvPjwvbGk+CjxsaT5PbmNlIHlvdSBoYXZlIGNsaWNrZWQgdGhlIGxpbmsgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50LCBmb2xsb3dpbmcgbWVzc2FnZSB3aWxsIGJlIGFwcGVhcmVkIHdoaWNoIGluZGljYXRlcyB0aGF0IHlvdXIgYWNjb3VudCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgYWN0aXZhdGVkLiBZb3UgbWF5IGxvZ2luIHVzaW5nIHlvdXIgbmV3IHJlZ2lzdGVyZWQgYWNjb3VudC48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9zaWduLXVwNi5wbmciIGFsdD0iIiB3aWR0aD0iODMzIiBoZWlnaHQ9IjQ2NCIgLz48L2xpPgo8L29sPgo8cD4mbmJzcDs8L3A+';
export const metadata: Metadata = {
  title: 'Sign Up as Player (For those above 18 years old) – CL2U',
  description: 'Sign Up as Player (For those above 18 years old) — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/accounts/sign-up-as-player-for-those-above-18-years-old/' },
  openGraph: {
    title: 'Sign Up as Player (For those above 18 years old)',
    description: 'Sign Up as Player (For those above 18 years old) — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/accounts/sign-up-as-player-for-those-above-18-years-old/',
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
        <section className="doc-category-content" aria-label="Sign Up as Player (For those above 18 years old)">
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
                <li><a href="/docs/cl2u-user-guide/accounts/">Accounts</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Sign Up as Player (For those above 18 years old)</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Sign Up as Player (For those above 18 years old)</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="https://cl2u.net/contact-us">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 6, 2023</time>
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
