import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PG9sPgo8bGk+VGhlcmUgYXJlIHR3byAoMikgbWV0aG9kcyB0byBjaGFuZ2UgcHJvZmlsZS4gQ2xpY2sgJiM4MjIwO0NoYW5nZSBQcm9maWxlJiM4MjIxOyBpbiB0aGUgTmF2aWdhdGlvbiBCYXIgb3IgY2xpY2sgJiM4MjIwO0VkaXQgUHJvZmlsZSYjODIyMTsgaW4gdGhlIFByb2ZpbGUgRGFzaGJvYXJkIFNlY3Rpb24uIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L2MxLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9iaXotb3duZXJzL2MxLTEwMjR4NDk1LnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ5NSIgLz48L2E+PC9saT4KPGxpPkZvbGxvd2luZyBwaWN0dXJlIHNob3dzIHRoZSBwcm9maWxlIGluZm9ybWF0aW9uIHdoaWNoIGNhbiBiZSB2aWV3ZWQgYW5kIGVkaXRlZC4gPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYzIucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Jpei1vd25lcnMvYzItMTAyNHg0NzAucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDcwIiAvPjwvYT48c3Ryb25nPkJhc2ljIEluZm88L3N0cm9uZz48YnIgLz4KRmlyc3QgTmFtZTogVG8gY2hhbmdlIHRoZSBjdXJyZW50IGZpcnN0IG5hbWUgd2l0aCB0aGUgbmV3IGZpcnN0IG5hbWUuPGJyIC8+Ckxhc3QgTmFtZTogVG8gY2hhbmdlIHRoZSBjdXJyZW50IGxhc3QgbmFtZSB3aXRoIHRoZSBuZXcgbGFzdCBuYW1lLjxiciAvPgpBbHRlcm5hdGUgRW1haWwgQWRkcmVzczogVG8gcHJvdmlkZSBhZGRpdGlvbmFsIGVtYWlsIGFkZHJlc3MgaW5mb3JtYXRpb24sIHR5cGUgdGhlIGFsdGVybmF0aXZlIGVtYWlsIGFkZHJlc3MgYXQgdGhpcyBzZWN0aW9uLjxiciAvPgpVc2VybmFtZTogVG8gY2hhbmdlIHRoZSBjdXJyZW50IHVzZXJuYW1lIHdpdGggdGhlIG5ldyB1c2VybmFtZS48YnIgLz4KTW9iaWxlIE5vOiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgbW9iaWxlIG51bWJlciB3aXRoIHRoZSBuZXcgbW9iaWxlIG51bWJlci4gVG8gY2hhbmdlIHRoZSBjb2RlIHJlZ2lvbiwgc2VsZWN0IHRoZSBkcm9wIGRvd24gY291bnRyeSByZWdpb24gbWVudSBhbmQgY2hvb3NlIHRoZSBwcmVmZXJyZWQgY29kZSByZWdpb24uPGJyIC8+ClNleDogVG8gY2hhbmdlIHRoZSBjdXJyZW50IHR5cGUgb2YgZ2VuZGVyLCBzZWxlY3QgdGhlIGRyb3AgZG93biBnZW5kZXIgbWVudSBhbmQgY2hvb3NlIHRoZSBwcmVmZXJyZWQgdHlwZSBvZiBnZW5kZXIuPGJyIC8+ClRpbWV6b25lOiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgdGltZXpvbmUsIHNlbGVjdCB0aGUgZHJvcCBkb3duIHRpbWV6b25lIG1lbnUgYW5kIGNob29zZSB0aGUgcHJlZmVycmVkIHRpbWV6b25lLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9jMy5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvYml6LW93bmVycy9jMy0xMDI0eDQ1NS5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0NTUiIC8+PC9hPkRhdGUgb2YgQmlydGg6IFRvIGNoYW5nZSB0aGUgY3VycmVudCBkYXRlIG9mIGJpcnRoIGluZm9ybWF0aW9uLjxiciAvPgpQcm9maWxlOiBUbyBwcm92aWRlIGFkZGl0aW9uYWwgcHJvZmlsZSBpbmZvcm1hdGlvbi48YnIgLz4KTG9jYXRpb246IFRvIHByb3ZpZGUgYWRkcmVzcyBpbmZvcm1hdGlvbiBpbmNsdWRpbmcgZGlzdHJpY3QsIGNpdHksIHBvc3RhbC96aXAgY29kZSwgY291bnRyeSwgYW5kIHByb3ZpbmNlIGluZm9ybWF0aW9uLjxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L2M0LTEucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Jpei1vd25lcnMvYzQtMS0xMDI0eDQ5OS5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTkiIC8+PC9hPjxzdHJvbmc+UHJvZmlsZSBQaWN0dXJlPC9zdHJvbmc+PGJyIC8+ClRvIGNoYW5nZSB0aGUgY3VycmVudCBwcm9maWxlIHBpY3R1cmUsIHVzZXIgbWF5IHVwbG9hZCBmaWxlIGZyb20gdGhlaXIgZGlyZWN0b3JpZXMgYnkgY2xpY2sgJiM4MjIwO0Jyb3dzZSYjODIyMTsgdG8gc2VsZWN0IHRoZSBjaG9zZW4gZmlsZS4gVXNlciBtYXkgY2hvb3NlIHRoZSBwcm92aWRlZCBhdmF0YXJzIGZyb20gQ0wyVSBhcyB0aGVpciBwcm9maWxlIHBpY3R1cmUuPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYzUucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Jpei1vd25lcnMvYzUtMTAyNHg0OTcucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDk3IiAvPjwvYT48L2xpPgo8bGk+Q2xpY2sgJiM4MjIwO1VwZGF0ZSYjODIyMTsgdG8gc2F2ZSBhbGwgb2YgdGhlIGNoYW5nZXMgbWFkZSBpbnRvIHRoZSBwcm9maWxlIGluZm9ybWF0aW9uLiBDbGljayAmIzgyMjA7UmVzZXQmIzgyMjE7IHRvIHJlc2V0IGFsbCBvZiB0aGUgY3VycmVudCBwcm9maWxlIGluZm9ybWF0aW9uLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9jNi0xLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9iaXotb3duZXJzL2M2LTEtMTAyNHg1MDEucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNTAxIiAvPjwvYT48L2xpPgo8bGkgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTogbm9uZSI+PC9saT4KPC9vbD4=';

export const metadata: Metadata = {
  title: 'Change Profile – CL2U',
  description: 'Change Profile — documentation section in the CL2U User Guide for Business Owners.',
  alternates: { canonical: '/docs/cl2u-user-guide-for-business-owners/accounts/change-profile/' },
  openGraph: {
    title: 'Change Profile',
    description: 'Change Profile — documentation section in the CL2U User Guide for Business Owners.',
    url: '/docs/cl2u-user-guide-for-business-owners/accounts/change-profile/',
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
            <label className="screen-reader-text" htmlFor="biz-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="biz-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>
          <div className="wedocs-single-wrap-clone">
            <aside className="wedocs-sidebar-clone" aria-label="CL2U User Guide for Business Owners navigation">
              <h2>CL2U User Guide for Business Owners</h2>
              <ul className="doc-nav-list-clone">
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/accounts/">📁Accounts<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/create-a-business-account/">Create a Business Account</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/login/">Login & Verify Business Account</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/forgot-password/">Forgot Password</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/forgot-username/">Forgot Username</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/change-profile/">Change Profile</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/change-password/">Change Password</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/switch-from-business-dashboard-to-player-dashboard-vice-versa/">Switch from Business Dashboard to Player Dashboard (Vice Versa)</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/business-details/">📁Business Details<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/business-details/manage-update-business-details/">Manage/Update Business Details</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/business-details/read-dashboard/">Read Dashboard</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/events/">📁Events<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/events/manage-created-events/">Manage Events</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/events/create-an-event/">Create an Event</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/events/edit-an-events-data/">Edit an Event’s Data</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/events/view-events-created/">View List of Created Events</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/events/view-an-event-in-public-page/">View an Event in Public Page</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/tournaments/">📁Tournaments<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/create-a-tournament/">Create a Tournament and Team Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/manage-tournament/">Manage Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/manually-enroll-a-player-to-a-tournament/">Manually Enroll a Player to a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/approve-edit-remove-a-player-enrollment-in-a-tournament/">Approve/Edit/Remove a Player Enrollment in a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/mark-a-tournament-as-launched/">Mark a Tournament As Launched</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/set-standing-rank-for-each-player-after-a-tournament-is-finished/">Set Standing/Rank for Each Player after a Tournament is Finished</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/mark-a-tournament-as-reported/">Mark a Tournament As Reported</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/temporarily-hide-unhide-a-tournament/">Temporarily Hide/Unhide a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/print-the-players-deck-list-for-a-tournament/">Print the Players Deck List for a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/download-list-of-players-participating-in-a-tournament/">Download List of Players Participating in a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/assign-a-reward-rule-you-created-to-a-tournament/">Assign a Reward Rule You Created to a Tournament</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/manually-assign-a-reward-to-a-player-for-a-tournament/">Manually Assign a Reward to a Player for a Tournament</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/official-shop-programme/">📁Official Shop Programme<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/official-shop-programme/manage-official-shop-programme/">Manage Official Shop Programme</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/official-shop-programme/join-the-official-shop-programme/">Join the Official Shop Programme</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/players/">📁Players<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/players/manage-players/">Manage Players</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/players/view-players-profile/">View Player’s Profile</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/players/give-rewards-to-players/">Give Rewards to Players</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/saved-business/">📁Saved Business<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/saved-business/manage-saved-business/">Manage Saved Business List</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/saved-business/view-available-shops-in-saved-business-list/">View Available Shops and Shops Details in Saved Business List</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/saved-business/add-shops-to-saved-business-list/">Add Shops to Saved Business List</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/saved-business/remove-shop-from-business-list/">Remove Shop from Business List</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/rewards/">📁Rewards<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/rewards/assign-a-reward-to-a-player/">Assign a Reward to a Player</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/rewards/manage-given-rewards/">Manage Given Rewards</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/rewards/manage-player-reward-points/">Manage Player Reward Points</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/rewards/manage-reward-rules/">Manage Reward Rules</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/rewards/manage-redemption-form/">Manage Redemption Form</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/rewards/manage-redemption-history/">Manage Redemption History</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/shops/">📁Shops<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/shops/create-new-shop/">Create New Shop</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/shops/view-shop-details/">View Shop Details</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/shops/edit-shop-details/">Edit Shop Details</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/shops/remove-shop/">Remove Shop</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/badges/">📁Badges<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/badges/manage-badges/">Manage Badges</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/badges/create-badge/">Create Badge</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/badges/edit-badge/">Edit Badge</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/badges/delete-badge/">Delete Badge</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/badges/manage-badge-assignment/">Manage Badge Assignment</a></li>
                  </ul>
                  </li>
                  <li>
                    <a href="/docs/cl2u-user-guide-for-business-owners/biz-rewards/">📁Biz Rewards<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/biz-rewards/manage-biz-reward/">Manage Biz Reward</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/biz-rewards/create-biz-reward/">Create Biz Reward</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/biz-rewards/edit-biz-reward/">Edit Biz Reward</a></li>
                    <li><a href="/docs/cl2u-user-guide-for-business-owners/biz-rewards/delete-biz-reward/">Delete Biz Reward</a></li>
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
                <li><a href="/docs/cl2u-user-guide-for-business-owners/">CL2U User Guide for Business Owners</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-user-guide-for-business-owners/accounts/">Accounts</a></li>
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
