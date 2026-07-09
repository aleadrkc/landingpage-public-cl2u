import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PGgzPkFydGljbGVzPC9oMz48dWw+PGxpID48YSBocmVmPSIvZG9jcy9jbDJ1LXVzZXItZ3VpZGUtZm9yLWJ1c2luZXNzLW93bmVycy90b3VybmFtZW50cy9jcmVhdGUtYS10b3VybmFtZW50LyI+Q3JlYXRlIGEgVG91cm5hbWVudCBhbmQgVGVhbSBUb3VybmFtZW50PC9hPjwvbGk+CjxsaSA+PGEgaHJlZj0iL2RvY3MvY2wydS11c2VyLWd1aWRlLWZvci1idXNpbmVzcy1vd25lcnMvdG91cm5hbWVudHMvbWFuYWdlLXRvdXJuYW1lbnQvIj5NYW5hZ2UgVG91cm5hbWVudDwvYT48L2xpPgo8bGkgPjxhIGhyZWY9Ii9kb2NzL2NsMnUtdXNlci1ndWlkZS1mb3ItYnVzaW5lc3Mtb3duZXJzL3RvdXJuYW1lbnRzL21hbnVhbGx5LWVucm9sbC1hLXBsYXllci10by1hLXRvdXJuYW1lbnQvIj5NYW51YWxseSBFbnJvbGwgYSBQbGF5ZXIgdG8gYSBUb3VybmFtZW50PC9hPjwvbGk+CjxsaSA+PGEgaHJlZj0iL2RvY3MvY2wydS11c2VyLWd1aWRlLWZvci1idXNpbmVzcy1vd25lcnMvdG91cm5hbWVudHMvYXBwcm92ZS1lZGl0LXJlbW92ZS1hLXBsYXllci1lbnJvbGxtZW50LWluLWEtdG91cm5hbWVudC8iPkFwcHJvdmUvRWRpdC9SZW1vdmUgYSBQbGF5ZXIgRW5yb2xsbWVudCBpbiBhIFRvdXJuYW1lbnQ8L2E+PC9saT4KPGxpID48YSBocmVmPSIvZG9jcy9jbDJ1LXVzZXItZ3VpZGUtZm9yLWJ1c2luZXNzLW93bmVycy90b3VybmFtZW50cy9tYXJrLWEtdG91cm5hbWVudC1hcy1sYXVuY2hlZC8iPk1hcmsgYSBUb3VybmFtZW50IEFzIExhdW5jaGVkPC9hPjwvbGk+CjxsaSA+PGEgaHJlZj0iL2RvY3MvY2wydS11c2VyLWd1aWRlLWZvci1idXNpbmVzcy1vd25lcnMvdG91cm5hbWVudHMvc2V0LXN0YW5kaW5nLXJhbmstZm9yLWVhY2gtcGxheWVyLWFmdGVyLWEtdG91cm5hbWVudC1pcy1maW5pc2hlZC8iPlNldCBTdGFuZGluZy9SYW5rIGZvciBFYWNoIFBsYXllciBhZnRlciBhIFRvdXJuYW1lbnQgaXMgRmluaXNoZWQ8L2E+PC9saT4KPGxpID48YSBocmVmPSIvZG9jcy9jbDJ1LXVzZXItZ3VpZGUtZm9yLWJ1c2luZXNzLW93bmVycy90b3VybmFtZW50cy9tYXJrLWEtdG91cm5hbWVudC1hcy1yZXBvcnRlZC8iPk1hcmsgYSBUb3VybmFtZW50IEFzIFJlcG9ydGVkPC9hPjwvbGk+CjxsaSA+PGEgaHJlZj0iL2RvY3MvY2wydS11c2VyLWd1aWRlLWZvci1idXNpbmVzcy1vd25lcnMvdG91cm5hbWVudHMvdGVtcG9yYXJpbHktaGlkZS11bmhpZGUtYS10b3VybmFtZW50LyI+VGVtcG9yYXJpbHkgSGlkZS9VbmhpZGUgYSBUb3VybmFtZW50PC9hPjwvbGk+CjxsaSA+PGEgaHJlZj0iL2RvY3MvY2wydS11c2VyLWd1aWRlLWZvci1idXNpbmVzcy1vd25lcnMvdG91cm5hbWVudHMvcHJpbnQtdGhlLXBsYXllcnMtZGVjay1saXN0LWZvci1hLXRvdXJuYW1lbnQvIj5QcmludCB0aGUgUGxheWVycyBEZWNrIExpc3QgZm9yIGEgVG91cm5hbWVudDwvYT48L2xpPgo8bGkgPjxhIGhyZWY9Ii9kb2NzL2NsMnUtdXNlci1ndWlkZS1mb3ItYnVzaW5lc3Mtb3duZXJzL3RvdXJuYW1lbnRzL2Rvd25sb2FkLWxpc3Qtb2YtcGxheWVycy1wYXJ0aWNpcGF0aW5nLWluLWEtdG91cm5hbWVudC8iPkRvd25sb2FkIExpc3Qgb2YgUGxheWVycyBQYXJ0aWNpcGF0aW5nIGluIGEgVG91cm5hbWVudDwvYT48L2xpPgo8bGkgPjxhIGhyZWY9Ii9kb2NzL2NsMnUtdXNlci1ndWlkZS1mb3ItYnVzaW5lc3Mtb3duZXJzL3RvdXJuYW1lbnRzL2Fzc2lnbi1hLXJld2FyZC1ydWxlLXlvdS1jcmVhdGVkLXRvLWEtdG91cm5hbWVudC8iPkFzc2lnbiBhIFJld2FyZCBSdWxlIFlvdSBDcmVhdGVkIHRvIGEgVG91cm5hbWVudDwvYT48L2xpPgo8bGkgPjxhIGhyZWY9Ii9kb2NzL2NsMnUtdXNlci1ndWlkZS1mb3ItYnVzaW5lc3Mtb3duZXJzL3RvdXJuYW1lbnRzL21hbnVhbGx5LWFzc2lnbi1hLXJld2FyZC10by1hLXBsYXllci1mb3ItYS10b3VybmFtZW50LyI+TWFudWFsbHkgQXNzaWduIGEgUmV3YXJkIHRvIGEgUGxheWVyIGZvciBhIFRvdXJuYW1lbnQ8L2E+PC9saT4KPC91bD4=';

export const metadata: Metadata = {
  title: 'Tournaments – CL2U',
  description: 'Tournaments section in the CL2U User Guide for Business Owners.',
  alternates: { canonical: '/docs/cl2u-user-guide-for-business-owners/tournaments/' },
  openGraph: {
    title: 'Tournaments',
    description: 'Tournaments section in the CL2U User Guide for Business Owners.',
    url: '/docs/cl2u-user-guide-for-business-owners/tournaments/',
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
        <section className="doc-category-content" aria-label="Tournaments">
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
                <li><span>Tournaments</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Tournaments</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="article-child-clone" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={{16}} height={{16}} aria-hidden="true" /> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on May 6, 2020</time>
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
