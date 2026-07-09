import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PHA+SWYgeW91IGVkaXQgZGVja2xpc3QgYnkgZm9sbG93IHRoZSBmb2xsb3dpbmcgc3RlcHMsIGNoYW5nZXMgd29u4oCZdCBiZSByZWZsZWN0ZWQgdG8gdGhlIGRlY2tsaXN0IHRoYXQgeW91IGhhdmUgc3VibWl0dGVkIHRvIHRoZSB0b3VybmFtZW50LjwvcD4KPHA+Jm5ic3A7PC9wPgo8cD5UbyB1cGRhdGUvZWRpdCB0aGUgZGVja2xpc3Qgd2hpY2ggaXMgYmVpbmcgc3VibWl0dGVkIHRvIHRoZSB0b3VybmFtZW50LCBtYXkgZ28gdG8gVG91cm5hbWVudCAtJmd0OyBNeSBUb3VybmFtZW50IC0mZ3Q7IGNsaWNrIG9uIGVkaXQgcmVnaXN0cmF0aW9uIGRlY2sgb24gdGhlIHRvdXJuYW1lbnQgdGhhdCB5b3Ugd2FudCB0byBlZGl0IHRoZSBkZWNrbGlzdC48L3A+CjxwPiZuYnNwOzwvcD4KPHA+U3RlcHMgdG8gZWRpdCBkZWNrbGlzdDo8L3A+CjxvbD4KPGxpPkNob29zZSB0aGUgZGVja2xpc3QgdGhhdCB5b3Ugd2FudCB0byBlZGl0IGFuZCBjbGljayBwZW5jaWwgaWNvbiB3aGljaCBpcyBsb2NhdGVkIG5leHQgdG8gaXQuPC9saT4KPC9vbD4KPHA+PGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvbWFuYWdlNy5wbmciIGFsdD0iIiB3aWR0aD0iMTIyNSIgaGVpZ2h0PSI1NzgiIC8+PC9wPgo8b2wgc3RhcnQ9IjIiPgo8bGk+WW91IHdpbGwgYmUgZGlyZWN0ZWQgdG8gdGhpcyBlZGl0IGRlY2sgcGFnZS4gWW91IGNhbiBlZGl0IHRoZSBpbmZvcm1hdGlvbiBvciBkZXRhaWxzIG9mIHRoZSBkZWNrbGlzdC48L2xpPgo8L29sPgo8cD48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9tYW5hZ2U4LnBuZyIgYWx0PSIiIHdpZHRoPSI5MzQiIGhlaWdodD0iNTA5IiAvPjwvcD4KPG9sIHN0YXJ0PSIzIj4KPGxpPkNsaWNrIOKAnFNhdmXigJ0gYnV0dG9uIHRvIHNhdmUgeW91ciBjaGFuZ2VzLjwvbGk+Cjwvb2w+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL21hbmFnZTkucG5nIiBhbHQ9IiIgd2lkdGg9IjExOTMiIGhlaWdodD0iNTYxIiAvPjwvcD4KPG9sIHN0YXJ0PSI0Ij4KPGxpPkEgcG9wdXAgZGlhbG9nIHdpbGwgYXBwZWFyIGlmIHRoZSBudW1iZXIgb2YgY2FyZHMgdGhhdCB5b3UgaGF2ZSBpbnB1dHRlZCBpcyBpbmNvbXBsZXRlIG9yIGludmFsaWQuIFlvdSBtYXkgY2xpY2sg4oCcQ29udGludWUgRWRpdGluZ+KAnSBpZiB5b3Ugd2FudCB0byBjb250aW51ZSBlZGl0LiBPciBjbGljayDigJxTYXZlIEFueXdheeKAnSBpZiB5b3Ugd2FudCB0byBzdG9wIGVkaXQuPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvbWFuYWdlMTAucG5nIiBhbHQ9IiIgd2lkdGg9Ijg2NSIgaGVpZ2h0PSI0NzciIC8+PC9saT4KPC9vbD4=';
export const metadata: Metadata = {
  title: 'Edit Deck List – CL2U',
  description: 'Edit Deck List — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/decks/edit-deck-list/' },
  openGraph: {
    title: 'Edit Deck List',
    description: 'Edit Deck List — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/decks/edit-deck-list/',
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
        <section className="doc-category-content" aria-label="Edit Deck List">
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
                <li><span>Edit Deck List</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Edit Deck List</h1>
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
