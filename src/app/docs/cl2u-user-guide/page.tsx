import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const origin = 'https://public.cl2u.net';

const playerArticles = [
  {
    label: 'Accounts',
    href: `/docs/cl2u-user-guide/accounts/`,
    children: [
      {label: 'Sign Up as Player (For those above 18 years old)', href: `/docs/cl2u-user-guide/accounts/sign-up-as-player-for-those-above-18-years-old/`},
      {label: 'Sign Up as Player (For those under 18 years old)', href: `/docs/cl2u-user-guide/accounts/sign-up-as-player-for-those-under-18-years-old/`},
      {label: 'Login', href: `/docs/cl2u-user-guide/accounts/login/`},
      {label: 'Forgot Username', href: `/docs/cl2u-user-guide/accounts/forgot-username/`},
      {label: 'Forgot Password', href: `/docs/cl2u-user-guide/accounts/forgot-password/`},
      {label: 'Manage Dashboard', href: `/docs/cl2u-user-guide/accounts/manage-dashboard/`},
      {label: 'Change Profile', href: `/docs/cl2u-user-guide/accounts/change-profile/`},
      {label: 'Change Password', href: `/docs/cl2u-user-guide/accounts/change-password/`},
      {label: 'Delete Account', href: `/docs/cl2u-user-guide/accounts/delete-account/`},
    ],
  },
  {
    label: 'Tournaments',
    href: `/docs/cl2u-user-guide/tournaments/`,
    children: [
      {label: 'Find a Tournament', href: `/docs/cl2u-user-guide/tournaments/find-a-tournament/`},
      {label: 'Register a Tournament (Including Email Received)', href: `/docs/cl2u-user-guide/tournaments/register-a-tournament-including-email-received/`},
      {label: 'Register a Team Tournament (Including Email Received)', href: `/docs/cl2u-user-guide/tournaments/register-a-team-tournament-including-email-received/`},
      {label: 'Manage Registered Tournaments', href: `/docs/cl2u-user-guide/tournaments/manage-registered-tournaments/`},
      {label: 'Cancel Tournament Registration', href: `/docs/cl2u-user-guide/tournaments/cancel-tournament-registration/`},
      {label: 'Edit Card Deck (Submitted to Tournaments)', href: `/docs/cl2u-user-guide/tournaments/edit-card-deck-submitted-to-tournaments/`},
      {label: 'View Tournaments History', href: `/docs/cl2u-user-guide/tournaments/view-tournaments-history/`},
      {label: 'View Leaderboard', href: `/docs/cl2u-user-guide/tournaments/view-leaderboard/`},
    ],
  },
  {
    label: 'Decks',
    href: `/docs/cl2u-user-guide/decks/`,
    children: [
      {label: 'Manage Deck List', href: `/docs/cl2u-user-guide/decks/manage-deck-list/`},
      {label: 'Create Deck List', href: `/docs/cl2u-user-guide/decks/create-deck-list/`},
      {label: 'Edit Deck List', href: `/docs/cl2u-user-guide/decks/edit-deck-list/`},
      {label: 'Delete Deck List', href: `/docs/cl2u-user-guide/decks/delete-deck-list/`},
      {label: 'View All Cards in All Deck Lists', href: `/docs/cl2u-user-guide/decks/view-all-cards-in-all-deck-lists/`},
      {label: 'Manage Decklog', href: `/docs/cl2u-user-guide/decks/manage-decklog/`},
      {label: 'Create Decklog', href: `/docs/cl2u-user-guide/decks/create-decklog/`},
      {label: 'Edit Decklog', href: `/docs/cl2u-user-guide/decks/edit-decklog/`},
      {label: 'Delete Decklog', href: `/docs/cl2u-user-guide/decks/delete-decklog/`},
      {label: 'View Cards in Decklog', href: `/docs/cl2u-user-guide/decks/view-cards-in-decklog/`},
    ],
  },
  {
    label: 'Shops',
    href: `/docs/cl2u-user-guide/shops/`,
    children: [
      {label: 'Find Nearby Retail Shop', href: `/docs/cl2u-user-guide/shops/find-nearby-retail-shop/`},
      {label: 'View Tournaments (Held by Shop)', href: `/docs/cl2u-user-guide/shops/view-tournaments-held-by-shop/`},
      {label: 'Bookmark Shop to Favorite Shop List', href: `/docs/cl2u-user-guide/shops/bookmark-shop-to-favorite-shop-list/`},
      {label: 'Manage Favorite Shop List', href: `/docs/cl2u-user-guide/shops/manage-favorite-shop-list/`},
    ],
  },
  {
    label: 'Rewards',
    href: `/docs/cl2u-user-guide/rewards/`,
    children: [
      {label: 'View Rewards', href: `/docs/cl2u-user-guide/rewards/view-rewards/`},
      {label: 'Redeem Rewards', href: `/docs/cl2u-user-guide/rewards/redeem-rewards/`},
      {label: 'View Redemption History', href: `/docs/cl2u-user-guide/rewards/view-redemption-history/`},
      {label: 'View Rewards Points Information', href: `/docs/cl2u-user-guide/rewards/view-rewards-points-information/`},
    ],
  },
  {
    label: 'Adventures',
    href: `/docs/cl2u-user-guide/adventures/`,
    children: [
      {label: 'How to Redeem the Vanguard Adventures', href: `/docs/cl2u-user-guide/adventures/how-to-redeem-the-vanguard-adventures/`},
    ],
  },
  {
    label: 'Biz Rewards',
    href: `/docs/cl2u-user-guide/biz-rewards/`,
    children: [
      {label: 'Redeem Biz Rewards', href: `/docs/cl2u-user-guide/biz-rewards/redeem-biz-rewards/`},
    ],
  },
];

export const metadata: Metadata = {
  title: 'CL2U User Guide for Players',
  description: 'CL2U User Guide for Players documentation category and article index.',
  alternates: { canonical: '/docs/cl2u-user-guide/' },
  openGraph: {
    title: 'CL2U User Guide for Players',
    description: 'CL2U User Guide for Players documentation category and article index.',
    url: '/docs/cl2u-user-guide/',
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

export default function PlayersGuideCategoryPage() {
  return (
    <>
      <SiteHeader />
      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="CL2U User Guide for Players">
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
                {playerArticles.map((article) => (
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
                <li><span>CL2U User Guide for Players</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">CL2U User Guide for Players</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="article-child-clone" itemProp="articleBody">
                <h2>Articles</h2>
                <ul>
                  {playerArticles.map((article) => (
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
                <span className="wedocs-help-icon"><i className="wedocs-icon wedocs-icon-envelope"></i> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-10T16:36:58+08:00">Updated on March 10, 2023</time>
              </footer>

              <nav className="wedocs-doc-nav-clone" aria-label="Doc navigation">
                <a href="https://public.cl2u.net/docs/cl2u-user-guide-for-business-owners/">CL2U User Guide for Business Owners →</a>
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