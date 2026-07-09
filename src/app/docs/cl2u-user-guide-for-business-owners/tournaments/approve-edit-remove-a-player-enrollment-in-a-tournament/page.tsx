import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const _b = 'PG9sPgo8bGk+Q2xpY2sgJiM4MjIwO1RvdXJuYW1lbnRzJiM4MjIxOyBpbiB0aGUgTmF2aWdhdGlvbiBCYXIuIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L2ExLTYucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Jpei1vd25lcnMvYTEtNi0xMDI0eDQ5Mi5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTIiIC8+PC9hPjwvbGk+CjxsaT5DaG9vc2UgdGhlIHRvdXJuYW1lbnQgdGhhdCB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHBsYXllciBlbnJvbGxtZW50IGluZm9ybWF0aW9uLCB0aGVuIGNsaWNrICYjODIyMDtQbGF5ZXJzJiM4MjIxOy4gKEluIHRoaXMgc2NlbmFyaW8sIHRoZSBjaG9zZW4gdG91cm5hbWVudCBpcyAmIzgyMjA7VG91cm5hbWVudCBQcmVtaWVyZSAyMDIwJiM4MjIxOykuPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYTItNi5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvYml6LW93bmVycy9hMi02LTEwMjR4NDkwLnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ5MCIgLz48L2E+PC9saT4KPGxpPkl0IHdpbGwgZGlyZWN0IHRvIHRoZSBmb2xsb3dpbmcgcGFnZSBhcyBzaG93biBpbiB0aGUgcGljdHVyZS4gQ2hvb3NlIHRoZSBwbGF5ZXIgdGhhdCB5b3Ugd2FudCB0byBlZGl0IHRoZSBlbnJvbGxtZW50LjxiciAvPgphLiBBcHByb3ZlIHBsYXllciBlbnJvbGxtZW50IGluIHRvdXJuYW1lbnQuIFlvdSBtYXkgdGljayBvbiB0aGUgY2hlY2tib3ggb2YgdGhlIGNob3NlbiBwbGF5ZXIsIHRoZW4gY2xpY2sgJiM4MjIwO0FwcHJvdmUmIzgyMjE7LiBPciB5b3UgbWF5IGNsaWNrIHRoZSBidXR0b24gKGdyZWVuIGNvbG9yKSB3aXRoIHRpY2sgaWNvbiBvbiB0aGUgcGxheWVyIGxpc3QgdG8gYXBwcm92ZSB0aGUgZW5yb2xsbWVudC48YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9hMy01LnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9iaXotb3duZXJzL2EzLTUtMTAyNHg0OTIucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDkyIiAvPjwvYT5BIHBvcC11cCBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uIENsaWNrICYjODIyMDtPayYjODIyMTsgdG8gY29uZmlybSBhcHByb3ZpbmcgdGhlIHBsYXllciYjODIxNztzIGVucm9sbG1lbnQuPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYTQtNC5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvYml6LW93bmVycy9hNC00LTEwMjR4NDkzLnBuZyIgYWx0PSIiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjQ5MyIgLz48L2E+Rm9sbG93aW5nIHBpY3R1cmUgc2hvd3MgdGhhdCB0aGUgcGxheWVyIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBhcHByb3ZlZCBmb3IgdGhlIGVucm9sbG1lbnQgYW5kIHRoZSBzdGF0dXMgaGFzIGNoYW5nZWQgdG8gY29uZmlybWVkLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9hNS0zLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9iaXotb3duZXJzL2E1LTMtMTAyNHg0ODkucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDg5IiAvPjwvYT48L3A+CjxwPk5vdGU6IFRoZSB0ZWFtIHRvdXJuYW1lbnQgYWxzbyBsaWtlIHRoaXMuIEFsdGhvdWdoIGluIFRlYW0sIGlmIDEgdGVhbSBhcHByb3ZlLCBhbGwgcGxheWVyIGluIDEgdGVhbSB3aWxsIGNoYW5nZSBzdGF0dXMgdG8gY29uZmlybWVkLjwvcD4KPHA+Yi4gRWRpdCBwbGF5ZXIgZW5yb2xsbWVudCBpbiB0b3VybmFtZW50PC9wPgo8cD5JbiB0aGlzIHNjZW5hcmlvLCB0aGUgcGxheWVyIHdpdGggdGhlIHN0YXR1cyBjb25maXJtZWQgd2lsbCBiZSBjaGFuZ2VkIHRvIHVuYXBwcm92ZSB0aGUgZW5yb2xsbWVudCB3aGVyZSBwcmV2aW91c2x5IGlzIGFwcHJvdmVkLiBUaWNrIG9uIHRoZSBjaGVja2JveCBvZiB0aGUgcGxheWVyIHRoYXQgeW91IHdhbnQgdG8gZWRpdCB0aGUgZW5yb2xsbWVudCwgdGhlbiBjbGljayAmIzgyMjA7VW5hcHByb3ZlJiM4MjIxOy4gWW91IG1heSBjbGljayB0aGUgYnV0dG9uIChncmV5IGNvbG9yKSB3aXRoIGNyb3NzIGljb24gb24gdGhlIHBsYXllciBsaXN0LjwvcD4KPHA+PGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYTYucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Jpei1vd25lcnMvYTYtMTAyNHg0OTUucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDk1IiAvPjwvYT5BIHBvcC11cCBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uIENsaWNrICYjODIyMDtPayYjODIyMTsgdG8gY29uZmlybS4gPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYTcucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL2Jpei1vd25lcnMvYTctMTAyNHg0OTMucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDkzIiAvPjwvYT5Gb2xsb3dpbmcgcGljdHVyZSBzaG93cyB0aGF0IHRoZSBwbGF5ZXImIzgyMTc7cyBlbnJvbGxtZW50IHN0YXR1cyBoYXMgYmVlbiBjaGFuZ2VkIHRvIHVuY29uZmlybWVkLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9hOC5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvYml6LW93bmVycy9hOC0xMDI0eDQ5Ni5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTYiIC8+PC9hPjwvcD4KPHA+Tm90ZTogVGhlIHRlYW0gdG91cm5hbWVudCBhbHNvIGxpa2UgdGhpcy4gQWx0aG91Z2ggaW4gVGVhbSwgaWYgMSB0ZWFtIHVuYXBwcm92ZSwgYWxsIHBsYXllciBpbiAxIHRlYW0gd2lsbCBjaGFuZ2Ugc3RhdHVzIHRvIHVuY29uZmlybWVkLjxiciAvPgpjLiBSZW1vdmUgcGxheWVyIGVucm9sbG1lbnQgaW4gdG91cm5hbWVudDwvcD4KPHA+WW91IG1heSB0aWNrIHRoZSBjaGVja2JveCBvbiB0aGUgY2hvc2VuIHBsYXllciB0aGF0IHlvdSB3YW50IHRvIHJlbW92ZSwgdGhlbiBjbGljayAmIzgyMjA7UmVtb3ZlJiM4MjIxOy4gT3IgeW91IG1heSBjbGljayB0aGUgYnV0dG9uIChyZWQgY29sb3IpIHdpdGggZHVzdGJpbiBpY29uIG9uIHRoZSBwbGF5ZXIgbGlzdC48YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9hOS5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvYml6LW93bmVycy9hOS0xMDI0eDQ5NC5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTQiIC8+PC9hPjwvcD4KPHA+QSBwb3AtdXAgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLiBDbGljayAmIzgyMjA7T2smIzgyMjE7IHRvIGNvbmZpcm0gcmVtb3ZpbmcgdGhlIHBsYXllciBlbnJvbGxtZW50LjxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L2ExMC5wbmciID48aW1nIGNsYXNzPSIgIHNpemUtIiBzcmM9Ii9pbWFnZXMvYml6LW93bmVycy9hMTAtMTAyNHg0ODYucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDg2IiAvPjwvYT5Gb2xsb3dpbmcgcGljdHVyZSBzaG93cyB0aGF0IHRoZSBwbGF5ZXIgZW5yb2xsbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHRvdXJuYW1lbnQuPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvYTExLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9iaXotb3duZXJzL2ExMS0xMDI0eDQ5My5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTMiIC8+PC9hPjwvcD4KPHA+Tm90ZTogVGhlIHRlYW0gdG91cm5hbWVudCBhbHNvIGxpa2UgdGhpcy4gQWx0aG91Z2ggaW4gVGVhbSwgaWYgMSB0ZWFtIHJlbW92ZSwgYWxsIHBsYXllciBpbiAxIHRlYW0gd2lsbCBiZSByZW1vdmVkLjwvbGk+Cjwvb2w+';

export const metadata: Metadata = {
  title: 'Approve/Edit/Remove a Player Enrollment in a Tournament – CL2U',
  description: 'Approve/Edit/Remove a Player Enrollment in a Tournament — documentation section in the CL2U User Guide for Business Owners.',
  alternates: { canonical: '/docs/cl2u-user-guide-for-business-owners/tournaments/approve-edit-remove-a-player-enrollment-in-a-tournament/' },
  openGraph: {
    title: 'Approve/Edit/Remove a Player Enrollment in a Tournament',
    description: 'Approve/Edit/Remove a Player Enrollment in a Tournament — documentation section in the CL2U User Guide for Business Owners.',
    url: '/docs/cl2u-user-guide-for-business-owners/tournaments/approve-edit-remove-a-player-enrollment-in-a-tournament/',
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
        <section className="doc-category-content" aria-label="Approve/Edit/Remove a Player Enrollment in a Tournament">
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
                <li><a href="/docs/cl2u-user-guide-for-business-owners/tournaments/">Tournaments</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Approve/Edit/Remove a Player Enrollment in a Tournament</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Approve/Edit/Remove a Player Enrollment in a Tournament</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={{16}} height={{16}} aria-hidden="true" /> Still stuck? <a href="#">How can we help?</a></span>
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
