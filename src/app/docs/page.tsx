const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const guideGroups = [
  {
    title: 'CL2U User Guide for Players',
    href: '/docs/cl2u-user-guide/',
    sections: [
      ['Accounts', `/docs/cl2u-user-guide/accounts/`],
      ['Tournaments', `/docs/cl2u-user-guide/tournaments/`],
      ['Decks', `/docs/cl2u-user-guide/decks/`],
      ['Shops', `/docs/cl2u-user-guide/shops/`],
      ['Rewards', `/docs/cl2u-user-guide/rewards/`],
      ['Adventures', `/docs/cl2u-user-guide/adventures/`],
      ['Biz Rewards', `/docs/cl2u-user-guide/biz-rewards/`],
    ],
  },
  {
    title: 'CL2U User Guide for Business Owners',
    href: '/docs/cl2u-user-guide-for-business-owners/',
    sections: [
      ['Accounts', `/docs/cl2u-user-guide-for-business-owners/accounts/`],
      ['Business Details', `/docs/cl2u-user-guide-for-business-owners/business-details/`],
      ['Events', `/docs/cl2u-user-guide-for-business-owners/events/`],
      ['Tournaments', `/docs/cl2u-user-guide-for-business-owners/tournaments/`],
      ['Official Shop Programme', `/docs/cl2u-user-guide-for-business-owners/official-shop-programme/`],
      ['Players', `/docs/cl2u-user-guide-for-business-owners/players/`],
      ['Saved Business', `/docs/cl2u-user-guide-for-business-owners/saved-business/`],
      ['Rewards', `/docs/cl2u-user-guide-for-business-owners/rewards/`],
      ['Shops', `/docs/cl2u-user-guide-for-business-owners/shops/`],
      ['Badges', `/docs/cl2u-user-guide-for-business-owners/badges/`],
      ['Biz Rewards', `/docs/cl2u-user-guide-for-business-owners/biz-rewards/`],
    ],
  },
  {
    title: 'CL2U Additional Guide for Distributors',
    href: '/docs/cl2u-additional-guide-for-distributors/',
    sections: [
      ['Saved Business', `/docs/cl2u-additional-guide-for-distributors/saved-business/`],
      ['Official Shop Programme', `/docs/cl2u-additional-guide-for-distributors/official-shop-programme/`],
      ['Shops', `/docs/cl2u-additional-guide-for-distributors/shops/`],
      ['Staff', `/docs/cl2u-additional-guide-for-distributors/staff/`],
      ['Adventure Campaigns', `/docs/cl2u-additional-guide-for-distributors/adventure-campaigns/`],
      ['Campaigns', `/docs/cl2u-additional-guide-for-distributors/campaigns/`],
      ['Tournament Criteria', `/docs/cl2u-additional-guide-for-distributors/tournament-criteria/`],
    ],
  },
  {
    title: 'CL2U Additional Guide for Publishers',
    href: '/docs/cl2u-additional-guide-for-publishers/',
    sections: [
      ['About', `/docs/cl2u-additional-guide-for-publishers/about/`],
    ],
  },
];

export default function DocumentationHub() {
  return (
    <>
      <header className="site-header">
        <div className="header-row">
          <a className="logo-link" href="/" aria-label="CL2U homepage">
            <img src="/images/logo.png" alt="CL2U Logo" width={134} height={50} />
          </a>
          <nav className="desktop-nav" aria-label="Main Menu">
            {navItems.map((item, index) => (
              <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="login-button" href="https://cl2u.net/login">LOGIN</a>
          </nav>
          <details className="mobile-nav">
            <summary aria-label="Toggle mobile menu"><span></span><span></span><span></span></summary>
            <div className="mobile-panel">
              {navItems.map((item, index) => (
                <a key={item.label} className={index === 0 ? 'active' : ''} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="https://cl2u.net/login">LOGIN</a>
            </div>
          </details>
        </div>
      </header>

      <main className="docs-page">
        <section className="docs-content" aria-label="CL2U Help Center">
          <h1>Help Center</h1>

          <p className="docs-search-label"><strong>Type your Question:</strong></p>
          <form className="docs-search" role="search" method="get" action="https://public.cl2u.net/">
            <label className="screen-reader-text" htmlFor="docs-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="docs-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>

          <ul className="docs-grid" aria-label="Documentation collections">
            {guideGroups.map((group) => (
              <li className="docs-card" key={group.title}>
                <h2><a href={group.href}>{group.title}</a></h2>
                <div className="docs-card-body">
                  <ul>
                    {group.sections.map(([label, href]) => (
                      <li key={href}><a href={href}>{label}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="docs-card-link">
                  <a href={group.href}>View Details</a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <nav className="footer-nav" aria-label="Secondary navigation">
          {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="copyright">
          <p>© Knight Connections All Rights Reserved.</p>
          <p>All trademarks referenced herein are the properties of their respective owners.</p>
        </div>
      </footer>
      <a className="back-top" href="#" aria-label="Go to top">⌃</a>
    </>
  );
}
