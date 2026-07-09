import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const origin = 'https://public.cl2u.net';

const bizOwnerArticles = [
  {
    label: 'Accounts',
    href: `/docs/cl2u-user-guide-for-business-owners/accounts/`,
    children: [
      {label: 'Create a Business Account', href: `/docs/cl2u-user-guide-for-business-owners/accounts/create-a-business-account/`},
      {label: 'Login & Verify Business Account', href: `/docs/cl2u-user-guide-for-business-owners/accounts/login-verify-business-account/`},
      {label: 'Forgot Password', href: `/docs/cl2u-user-guide-for-business-owners/accounts/forgot-password/`},
      {label: 'Forgot Username', href: `/docs/cl2u-user-guide-for-business-owners/accounts/forgot-username/`},
      {label: 'Change Profile', href: `/docs/cl2u-user-guide-for-business-owners/accounts/change-profile/`},
      {label: 'Change Password', href: `/docs/cl2u-user-guide-for-business-owners/accounts/change-password/`},
      {label: 'Switch from Business Dashboard to Player Dashboard (Vice Versa)', href: `/docs/cl2u-user-guide-for-business-owners/accounts/switch-from-business-dashboard-to-player-dashboard-vice-versa/`},
    ],
  },
  {
    label: 'Business Details',
    href: `/docs/cl2u-user-guide-for-business-owners/business-details/`,
    children: [
      {label: 'Manage/Update Business Details', href: `/docs/cl2u-user-guide-for-business-owners/business-details/manage-update-business-details/`},
      {label: 'Read Dashboard', href: `/docs/cl2u-user-guide-for-business-owners/business-details/read-dashboard/`},
    ],
  },
  {
    label: 'Events',
    href: `/docs/cl2u-user-guide-for-business-owners/events/`,
    children: [
      {label: 'Manage Events', href: `/docs/cl2u-user-guide-for-business-owners/events/manage-events/`},
      {label: 'Create an Event', href: `/docs/cl2u-user-guide-for-business-owners/events/create-an-event/`},
      {label: "Edit an Event\u2019s Data", href: `/docs/cl2u-user-guide-for-business-owners/events/edit-an-events-data/`},
      {label: 'View List of Created Events', href: `/docs/cl2u-user-guide-for-business-owners/events/view-list-of-created-events/`},
      {label: 'View an Event in Public Page', href: `/docs/cl2u-user-guide-for-business-owners/events/view-an-event-in-public-page/`},
    ],
  },
  {
    label: 'Tournaments',
    href: `/docs/cl2u-user-guide-for-business-owners/tournaments/`,
    children: [
      {label: 'Create a Tournament and Team Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/create-a-tournament-and-team-tournament/`},
      {label: 'Manage Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/manage-tournament/`},
      {label: 'Manually Enroll a Player to a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/manually-enroll-a-player-to-a-tournament/`},
      {label: 'Approve/Edit/Remove a Player Enrollment in a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/approve-edit-remove-a-player-enrollment-in-a-tournament/`},
      {label: 'Mark a Tournament As Launched', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/mark-a-tournament-as-launched/`},
      {label: 'Set Standing/Rank for Each Player after a Tournament is Finished', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/set-standing-rank-for-each-player-after-a-tournament-is-finished/`},
      {label: 'Mark a Tournament As Reported', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/mark-a-tournament-as-reported/`},
      {label: 'Temporarily Hide/Unhide a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/temporarily-hide-unhide-a-tournament/`},
      {label: 'Print the Players Deck List for a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/print-the-players-deck-list-for-a-tournament/`},
      {label: 'Download List of Players Participating in a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/download-list-of-players-participating-in-a-tournament/`},
      {label: 'Assign a Reward Rule You Created to a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/assign-a-reward-rule-you-created-to-a-tournament/`},
      {label: 'Manually Assign a Reward to a Player for a Tournament', href: `/docs/cl2u-user-guide-for-business-owners/tournaments/manually-assign-a-reward-to-a-player-for-a-tournament/`},
    ],
  },
  {
    label: 'Official Shop Programme',
    href: `/docs/cl2u-user-guide-for-business-owners/official-shop-programme/`,
    children: [
      {label: 'Manage Official Shop Programme', href: `/docs/cl2u-user-guide-for-business-owners/official-shop-programme/manage-official-shop-programme/`},
      {label: 'Join the Official Shop Programme', href: `/docs/cl2u-user-guide-for-business-owners/official-shop-programme/join-the-official-shop-programme/`},
    ],
  },
  {
    label: 'Players',
    href: `/docs/cl2u-user-guide-for-business-owners/players/`,
    children: [
      {label: 'Manage Players', href: `/docs/cl2u-user-guide-for-business-owners/players/manage-players/`},
      {label: "View Player\u2019s Profile", href: `/docs/cl2u-user-guide-for-business-owners/players/view-players-profile/`},
      {label: 'Give Rewards to Players', href: `/docs/cl2u-user-guide-for-business-owners/players/give-rewards-to-players/`},
    ],
  },
  {
    label: 'Saved Business',
    href: `/docs/cl2u-user-guide-for-business-owners/saved-business/`,
    children: [
      {label: 'Manage Saved Business List', href: `/docs/cl2u-user-guide-for-business-owners/saved-business/manage-saved-business-list/`},
      {label: 'View Available Shops and Shops Details in Saved Business List', href: `/docs/cl2u-user-guide-for-business-owners/saved-business/view-available-shops-and-shops-details-in-saved-business-list/`},
      {label: 'Add Shops to Saved Business List', href: `/docs/cl2u-user-guide-for-business-owners/saved-business/add-shops-to-saved-business-list/`},
      {label: 'Remove Shop from Business List', href: `/docs/cl2u-user-guide-for-business-owners/saved-business/remove-shop-from-business-list/`},
    ],
  },
  {
    label: 'Rewards',
    href: `/docs/cl2u-user-guide-for-business-owners/rewards/`,
    children: [
      {label: 'Assign a Reward to a Player', href: `/docs/cl2u-user-guide-for-business-owners/rewards/assign-a-reward-to-a-player/`},
      {label: 'Manage Given Rewards', href: `/docs/cl2u-user-guide-for-business-owners/rewards/manage-given-rewards/`},
      {label: 'Manage Player Reward Points', href: `/docs/cl2u-user-guide-for-business-owners/rewards/manage-player-reward-points/`},
      {label: 'Manage Reward Rules', href: `/docs/cl2u-user-guide-for-business-owners/rewards/manage-reward-rules/`},
      {label: 'Manage Redemption Form', href: `/docs/cl2u-user-guide-for-business-owners/rewards/manage-redemption-form/`},
      {label: 'Manage Redemption History', href: `/docs/cl2u-user-guide-for-business-owners/rewards/manage-redemption-history/`},
    ],
  },
  {
    label: 'Shops',
    href: `/docs/cl2u-user-guide-for-business-owners/shops/`,
    children: [
      {label: 'Create New Shop', href: `/docs/cl2u-user-guide-for-business-owners/shops/create-new-shop/`},
      {label: 'View Shop Details', href: `/docs/cl2u-user-guide-for-business-owners/shops/view-shop-details/`},
      {label: 'Edit Shop Details', href: `/docs/cl2u-user-guide-for-business-owners/shops/edit-shop-details/`},
      {label: 'Remove Shop', href: `/docs/cl2u-user-guide-for-business-owners/shops/remove-shop/`},
    ],
  },
  {
    label: 'Badges',
    href: `/docs/cl2u-user-guide-for-business-owners/badges/`,
    children: [
      {label: 'Manage Badges', href: `/docs/cl2u-user-guide-for-business-owners/badges/manage-badges/`},
      {label: 'Create Badge', href: `/docs/cl2u-user-guide-for-business-owners/badges/create-badge/`},
      {label: 'Edit Badge', href: `/docs/cl2u-user-guide-for-business-owners/badges/edit-badge/`},
      {label: 'Delete Badge', href: `/docs/cl2u-user-guide-for-business-owners/badges/delete-badge/`},
      {label: 'Manage Badge Assignment', href: `/docs/cl2u-user-guide-for-business-owners/badges/manage-badge-assignment/`},
    ],
  },
  {
    label: 'Biz Rewards',
    href: `/docs/cl2u-user-guide-for-business-owners/biz-rewards/`,
    children: [
      {label: 'Manage Biz Reward', href: `/docs/cl2u-user-guide-for-business-owners/biz-rewards/manage-biz-reward/`},
      {label: 'Create Biz Reward', href: `/docs/cl2u-user-guide-for-business-owners/biz-rewards/create-biz-reward/`},
      {label: 'Edit Biz Reward', href: `/docs/cl2u-user-guide-for-business-owners/biz-rewards/edit-biz-reward/`},
      {label: 'Delete Biz Reward', href: `/docs/cl2u-user-guide-for-business-owners/biz-rewards/delete-biz-reward/`},
    ],
  },
];

export const metadata: Metadata = {
  title: 'CL2U User Guide for Business Owners',
  description: 'CL2U User Guide for Business Owners documentation category and article index.',
  alternates: { canonical: '/docs/cl2u-user-guide-for-business-owners/' },
  openGraph: {
    title: 'CL2U User Guide for Business Owners',
    description: 'CL2U User Guide for Business Owners documentation category and article index.',
    url: '/docs/cl2u-user-guide-for-business-owners/',
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

export default function BizOwnerGuideCategoryPage() {
  return (
    <>
      <SiteHeader />
      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="CL2U User Guide for Business Owners">
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
                {bizOwnerArticles.map((article) => (
                  <li key={article.label}>
                    <a href={article.href}>📁{article.label}<span aria-hidden="true">⌄</span></a>
                    {article.children.length > 0 && (
                      <ul>{article.children.map((child) => (
                        <li key={child.label}><a href={child.href}>{child.label}</a></li>
                      ))}</ul>
                    )}
                  </li>
                ))}
              </ul>
            </aside>

            <article className="wedocs-single-content-clone" itemScope itemType="https://schema.org/Article">
              <ol className="wedocs-breadcrumb-clone">
                <li aria-hidden="true">⌂</li>
                <li><a href="/">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/">Docs</a></li>
                <li aria-hidden="true">›</li>
                <li><span>CL2U User Guide for Business Owners</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">CL2U User Guide for Business Owners</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="article-child-clone" itemProp="articleBody">
                <h2>Articles</h2>
                <ul>
                  {bizOwnerArticles.map((article) => (
                    <li key={article.label}>
                      <a href={article.href}>{article.label}</a>
                      {article.children.length > 0 && (
                        <ul>{article.children.map((child) => (
                          <li key={child.label}><a href={child.href}>{child.label}</a></li>
                        ))}</ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <footer className="wedocs-entry-footer-clone">
                <span>✉ Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 10, 2023</time>
              </footer>

              <nav className="wedocs-doc-nav-clone" aria-label="Doc navigation">
                <a href="https://public.cl2u.net/docs/cl2u-user-guide/">← CL2U User Guide for Players</a>
                <a href="https://public.cl2u.net/docs/cl2u-additional-guide-for-distributors/">CL2U Additional Guide for Distributors →</a>
              </nav>

              <div className="wedocs-feedback-clone">
                Was this article helpful to you? <a href="#">Yes</a> <a href="#">No</a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
      <a className="back-top" href="#" aria-label="Go to top">⌃</a>
    </>
  );
}