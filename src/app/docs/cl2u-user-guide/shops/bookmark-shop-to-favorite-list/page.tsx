import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PG9sPgo8bGk+SW4gJiM4MjIwO0ZpbmQgYSBTaG9wIE5lYXJieSYjODIyMTsgZGFzaGJvYXJkIHNlY3Rpb24sIGNob29zZSB0aGUgc2hvcCB0aGF0IHdhbnRzIHRvIGJlIHNhdmVkIHRvIHRoZSBmYXZvcml0ZSBsaXN0IGFuZCBjbGljayAmIzgyMjA7QWRkIFRvIEZhdm9yaXRlJiM4MjIxOy7CoDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L0Jvb2ttYXJrMS5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvcGxheWVycy9Cb29rbWFyazEtMTAyNHg0OTAucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDkwIiAvPjwvYT48L2xpPgo8bGk+WW91IGNhbiBjaG9vc2UgdG8gc2F2ZSB0aGUgc2hvcCBpbnRvIHRoZSBmYXZvcml0ZSBsaXN0IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkIGJlZm9yZSBvciB5b3UgY2FuIGNyZWF0ZSBhIG5ldyBmYXZvcml0ZSBsaXN0IChpZiB5b3UgcHJldmlvdXNseSBoYXZlbiYjODIxNzt0IGNyZWF0ZSBhbnkgZmF2b3JpdGUgbGlzdCkuIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L0Jvb2ttYXJrMi0xLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL0Jvb2ttYXJrMi0xLTEwMjR4NDY0LnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ2NCIgLz48L2E+PC9saT4KPC9vbD4=';
export const metadata: Metadata = {
  title: 'Bookmark Shop to Favorite Shop List – CL2U',
  description: 'Bookmark Shop to Favorite Shop List — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/shops/bookmark-shop-to-favorite-list/' },
  openGraph: {
    title: 'Bookmark Shop to Favorite Shop List',
    description: 'Bookmark Shop to Favorite Shop List — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/shops/bookmark-shop-to-favorite-list/',
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
        <section className="doc-category-content" aria-label="Bookmark Shop to Favorite Shop List">
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
                <li><a href="/docs/cl2u-user-guide/shops/">Shops</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Bookmark Shop to Favorite Shop List</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Bookmark Shop to Favorite Shop List</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="https://cl2u.net/contact-us">How can we help?</a></span>
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
