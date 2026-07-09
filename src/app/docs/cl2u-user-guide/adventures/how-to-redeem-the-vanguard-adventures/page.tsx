import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PG9sPgo8bGk+U2NhbiB0aGUgUVIuIFRoZSBRUiBjYW4gYmUgZ2V0IHdoZW4geW91IGJ1eSBhIHNwZWNpZmljIGRlY2suPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2FkdmVudHVyZXM0LnBuZyIgYWx0PSIiIHdpZHRoPSI0NjYiIGhlaWdodD0iNjg1IiAvPjwvbGk+CjxsaT5BZnRlciBwbGF5ZXIgc2NhbiB0aGUgUVIsIHBsYXllciB3aWxsIHNlZSBwYWdlIHRoYXQgYmUgbWFkZSBieSBidXNpbmVzcyBvd25lciBleGFtcGxlIGxpa2UgdGhpcyBwYWdlLjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2FkdmVudHVyZXMzLnBuZyIgYWx0PSIiIHdpZHRoPSI4OTIiIGhlaWdodD0iNDUwIiAvPjwvbGk+CjxsaT5DbGljayAmIzgyMjA7bG9naW4mIzgyMjE7IGFuZCBpdCB3aWxsIGdvIHRvIGNsMnUubmV0L2xvZ2luLiBJbnB1dCB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLCBhZnRlciB0aGF0IGNsaWNrIGxvZ2luLjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2FkdmVudHVyZXM5LnBuZyIgYWx0PSIiIHdpZHRoPSIxODIxIiBoZWlnaHQ9IjkyMiIgLz48L2xpPgo8bGk+VGhlbiB0aGlzIHBhZ2Ugd2lsbCBhcHBlYXIuIENsaWNrIEFjdGl2YXRlIHRoZSBDb2RlLk5vdGU6IFRoZSBhZHZlbnR1cmUgQ29kZSB3aWxsIGF1dG8gYmUgaW5zZXJ0LCBwbGF5ZXIgZG9uJiM4MjE3O3QgbmVlZCB0byBpbnNlcnQgaXQuPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvYWR2ZW50dXJlczUucG5nIiBhbHQ9IiIgd2lkdGg9IjEzNDciIGhlaWdodD0iMjk1IiAvPjwvbGk+CjxsaT5Ob3cgcGxheWVyMSB3aWxsIGJlY29tZSB0aGUgaG9zdCB0aGF0IGNhbiBzZXQgdGhlIHRvdXJuYW1lbnQgYW5kIGlucHV0IHRoZSByZXN1bHRzIGluIHRoaXMgcGFnZS4gVGhlIHBsYXllcjEgYWxzbyBjYW4gam9pbiB0aGUgdG91cm5hbWVudC4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvYWR2ZW50dXJlczYucG5nIiBhbHQ9IiIgd2lkdGg9IjEzNDIiIGhlaWdodD0iNjU3IiAvPjwvbGk+CjxsaT5QbGF5ZXIxIGlucHV0IHRoZSByZXN1bHQgbGlrZSB0aGlzLiBJbiBoZXJlLCBwbGF5ZXIxIGJlY29tZSAzcmQgUGxhY2UuIENsaWNrICYjODIyMDtTdWJtaXQgQWR2ZW50dXJlIHJlc3VsdHMmIzgyMjE7LjxiciAvPgo8aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9hZHZlbnR1cmVzNy5wbmciIGFsdD0iIiB3aWR0aD0iMTM3MSIgaGVpZ2h0PSI2OTEiIC8+PC9saT4KPGxpPlRoZW4gdGhpcyBwYWdlIHdpbGwgYXBwZWFyLiA8aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9hZHZlbnR1cmVzOC5wbmciIGFsdD0iIiB3aWR0aD0iMTgzNyIgaGVpZ2h0PSI5MDciIC8+PC9saT4KPGxpPlRvIHNlZSB0aGUgb3duZWQgYWR2ZW50dXJlcyB3aGVyZSBwbGF5ZXIgYmVjb21lIGhvc3QgZ28gdG8gVG91cm5hbWVudCAtJmd0OyBBZHZlbnR1cmVzIC0mZ3Q7IE93bmVkIEFkdmVudHVyZXMuIEluIHRoaXMgSW1hZ2UsIHBsYXllcjEgYWxyZWFkeSBiZWNvbWUgaG9zdCAyIHRpbWVzIHVzaW5nIGNvZGUgU1RBQUhKR1BDOFlNIGFuZCBWQ1REVlhPOUpCQ0ouPGJyIC8+CjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2FkdmVudHVyZXMxMC5wbmciIGFsdD0iIiB3aWR0aD0iMTgyNiIgaGVpZ2h0PSI5MjEiIC8+PC9saT4KPGxpPlRvIHNlZSB0aGUgcmVzdWx0IHRoYXQgcGxheWVyMSBnZXQgZHVyaW5nIHRoZSBhZHZlbnR1cmVzIGdvIHRvIFRvdXJuYW1lbnQgLSZndDsgQWR2ZW50dXJlcyAtJmd0OyBKb2luZWQgQWR2ZW50dXJlcy4gSW4gdGhpcyBJbWFnZSwgUGxheWVyIDEgYWxyZWFkeSBqb2luZWQgdGhlIGFkdmVudHVyZXMgdG91cm5hbWVudCAyIHRpbWVzLCBhbmQgYm90aCBnb3QgcmFuayAzLiBUaGUgcmV3YXJkIHNlbnQgc3RhdHVzIHN0aWxsIHVuc2VudC48YnIgLz4KTm90ZTogVGhlIHJld2FyZCB3aWxsIGJlIHNlbnQgdmlhIGVtYWlsLCBzaGlwIGl0LCBvciBjYW4gYmUgY2xhaW0gaW4gdGhlIGJvb3RoLjwvbGk+CjxsaT48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9hZHZlbnR1cmVzMTEucG5nIiBhbHQ9IiIgd2lkdGg9IjE4MTYiIGhlaWdodD0iOTEyIiAvPjwvbGk+Cjwvb2w+';
export const metadata: Metadata = {
  title: 'How to Redeem the Vanguard Adventures – CL2U',
  description: 'How to Redeem the Vanguard Adventures — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/adventures/how-to-redeem-the-vanguard-adventures/' },
  openGraph: {
    title: 'How to Redeem the Vanguard Adventures',
    description: 'How to Redeem the Vanguard Adventures — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/adventures/how-to-redeem-the-vanguard-adventures/',
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
        <section className="doc-category-content" aria-label="How to Redeem the Vanguard Adventures">
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
                <li><a href="/docs/cl2u-user-guide/adventures/">Adventures</a></li>
                <li aria-hidden="true">›</li>
                <li><span>How to Redeem the Vanguard Adventures</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">How to Redeem the Vanguard Adventures</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="https://cl2u.net/contact-us">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 3, 2023</time>
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
