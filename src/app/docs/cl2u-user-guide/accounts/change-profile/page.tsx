import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PG9sPgo8bGkgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTogbm9uZSI+CjxvbD4KPGxpPlRoZXJlIGFyZSB0d28gKDIpIG1ldGhvZHMgdG8gY2hhbmdlIHByb2ZpbGUuIENsaWNrICYjODIyMDtDaGFuZ2UgUHJvZmlsZSYjODIyMTsgaW4gTmF2aWdhdGlvbiBCYXIgb3IgY2xpY2sgJiM4MjIwO0VkaXQgUHJvZmlsZSYjODIyMTsgaW4gdGhlIFByb2ZpbGUgRGFzaGJvYXJkIFNlY3Rpb24uPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvQ2hhbmdlUHJvZmlsZTEucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL3BsYXllcnMvQ2hhbmdlUHJvZmlsZTEtMTAyNHg0OTUucG5nIiBhbHQ9ImNoYW5nZSBwcm9maWxlIHN0ZXAgMSIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDk1IiAvPjwvYT48L2xpPgo8bGk+Rm9sbG93aW5nIHBpY3R1cmUgc2hvd3MgdGhlIHByb2ZpbGUgaW5mb3JtYXRpb24gd2hpY2ggY2FuIGJlIHZpZXdlZCBhbmQgZWRpdGVkLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9DaGFuZ2VQcm9maWxlMi5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvcGxheWVycy9DaGFuZ2VQcm9maWxlMi0xMDI0eDQ3MC5wbmciIGFsdD0iQ2hhbmdlIFByb2ZpbGUgc3RlcCAyIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0NzAiIC8+PC9hPjxiciAvPgo8c3Ryb25nPkJhc2ljIEluZm88L3N0cm9uZz48YnIgLz4KRmlyc3QgTmFtZTogVG8gY2hhbmdlIHRoZSBjdXJyZW50IGZpcnN0IG5hbWUgd2l0aCB0aGUgbmV3IGZpcnN0IG5hbWUuPGJyIC8+Ckxhc3QgTmFtZTogVG8gY2hhbmdlIHRoZSBjdXJyZW50IGxhc3QgbmFtZSB3aXRoIHRoZSBuZXcgbGFzdCBuYW1lLjxiciAvPgpBbHRlcm5hdGUgRW1haWwgQWRkcmVzczogVG8gcHJvdmlkZSBhZGRpdGlvbmFsIGVtYWlsIGFkZHJlc3MgaW5mb3JtYXRpb24sIHR5cGUgdGhlIGFsdGVybmF0aXZlIGVtYWlsIGFkZHJlc3MgYXQgdGhpcyBzZWN0aW9uLjxiciAvPgpVc2VybmFtZTogVG8gY2hhbmdlIHRoZSBjdXJyZW50IHVzZXJuYW1lIHdpdGggdGhlIG5ldyB1c2VybmFtZS48YnIgLz4KTW9iaWxlIE5vOiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgbW9iaWxlIG51bWJlciB3aXRoIHRoZSBuZXcgbW9iaWxlIG51bWJlci4gVG8gY2hhbmdlIHRoZSBjb2RlIHJlZ2lvbiwgc2VsZWN0IHRoZSBkcm9wIGRvd24gY291bnRyeSByZWdpb24gbWVudSBhbmQgY2hvb3NlIHRoZSBwcmVmZXJyZWQgY29kZSByZWdpb24uPGJyIC8+ClNleDogVG8gY2hhbmdlIHRoZSBjdXJyZW50IHR5cGUgb2YgZ2VuZGVyLCBzZWxlY3QgdGhlIGRyb3AgZG93biBnZW5kZXIgbWVudSBhbmQgY2hvb3NlIHRoZSBwcmVmZXJyZWQgdHlwZSBvZiBnZW5kZXIuPGJyIC8+ClRpbWV6b25lOiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgdGltZXpvbmUsIHNlbGVjdCB0aGUgZHJvcCBkb3duIHRpbWV6b25lIG1lbnUgYW5kIGNob29zZSB0aGUgcHJlZmVycmVkIHRpbWV6b25lLsKgIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L0NoYW5nZVByb2ZpbGUzLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL0NoYW5nZVByb2ZpbGUzLTEwMjR4NTAzLnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjUwMyIgLz48L2E+PGJyIC8+CkRhdGUgb2YgQmlydGg6IFRvIGNoYW5nZSB0aGUgY3VycmVudCBkYXRlIG9mIGJpcnRoIGluZm9ybWF0aW9uLjxiciAvPgpQcm9maWxlOiBUbyBwcm92aWRlIGFkZGl0aW9uYWwgcHJvZmlsZSBpbmZvcm1hdGlvbi48YnIgLz4KTG9jYXRpb246IFRvIHByb3ZpZGUgYWRkcmVzcyBpbmZvcm1hdGlvbiBpbmNsdWRpbmcgZGlzdHJpY3QsIGNpdHksIHBvc3RhbC96aXAgY29kZSwgY291bnRyeSwgYW5kIHByb3ZpbmNlIGluZm9ybWF0aW9uLjxiciAvPgo8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9DaGFuZ2VQcm9maWxlNC0xLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL0NoYW5nZVByb2ZpbGU0LTEtMTAyNHg0OTUucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDk1IiAvPjwvYT48YnIgLz4KPHN0cm9uZz5Qcm9maWxlIFBpY3R1cmU8L3N0cm9uZz48YnIgLz4KVG8gY2hhbmdlIHRoZSBjdXJyZW50IHByb2ZpbGUgcGljdHVyZSwgdXNlciBtYXkgdXBsb2FkIGZpbGUgZnJvbSB0aGVpciBkaXJlY3RvcmllcyBieSBjbGljayAmIzgyMjA7QnJvd3NlJiM4MjIxOyB0byBzZWxlY3QgdGhlIGNob3NlbiBmaWxlLiBVc2VyIG1heSBjaG9vc2UgdGhlIHByb3ZpZGVkIGF2YXRhcnMgZnJvbSBDTDJVIGFzIHRoZWlyIHByb2ZpbGUgcGljdHVyZS4gPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvQ2hhbmdlUHJvZmlsZTUucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL3BsYXllcnMvQ2hhbmdlUHJvZmlsZTUtMTAyNHg0OTYucG5nIiBhbHQ9IkNoYW5nZSBQcm9mIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTYiIC8+PC9hPjwvbGk+CjxsaT5DbGljayAmIzgyMjA7VXBkYXRlJiM4MjIxOyB0byBzYXZlIGFsbCBvZiB0aGUgY2hhbmdlcyBtYWRlIGludG8gdGhlIHByb2ZpbGUgaW5mb3JtYXRpb24uIENsaWNrICYjODIyMDtSZXNldCYjODIyMTsgdG8gcmVzZXQgYWxsIG9mIHRoZSBjdXJyZW50IHByb2ZpbGUgaW5mb3JtYXRpb24uIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L0NoYW5nZVByb2ZpbGU2LTEucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL3BsYXllcnMvQ2hhbmdlUHJvZmlsZTYtMS0xMDI0eDQ5Ny5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTciIC8+PC9hPjwvbGk+Cjwvb2w+CjwvbGk+Cjwvb2w+CjxvbD4KPGxpIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6IG5vbmUiPjwvbGk+Cjwvb2w+';
export const metadata: Metadata = {
  title: 'Change Profile – CL2U',
  description: 'Change Profile — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/accounts/change-profile/' },
  openGraph: {
    title: 'Change Profile',
    description: 'Change Profile — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/accounts/change-profile/',
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
        <section className="doc-category-content" aria-label="Change Profile">
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
                <li><span>Change Profile</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Change Profile</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="https://cl2u.net/contact-us">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on February 27, 2023</time>
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
