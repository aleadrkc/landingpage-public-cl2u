import type { Metadata } from 'next';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

const origin = 'https://public.cl2u.net';

export const metadata: Metadata = {
  title: 'Publisher Role – CL2U',
  description: 'Game publishers can perform similar functions to business owners, with additional features like viewing tournaments organized by distributors.',
  alternates: { canonical: '/docs/cl2u-additional-guide-for-publishers/about/publisher-role/' },
  openGraph: {
    title: 'Publisher Role – CL2U',
    description: 'Learn about the Publisher role and how game publishers can invite distributors and shops to their programme.',
    url: '/docs/cl2u-additional-guide-for-publishers/about/publisher-role/',
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

export default function PublisherRolePage() {
  return (
    <>
      <SiteHeader />
      <main className="doc-category-page">
        <section className="doc-category-content" aria-label="Publisher Role">
          <form className="docs-search doc-category-search" role="search" method="get" action="https://public.cl2u.net/">
            <label className="screen-reader-text" htmlFor="role-search-input">Search for:</label>
            <span className="docs-search-icon" aria-hidden="true">⌕</span>
            <input id="role-search-input" type="search" name="s" placeholder="Start typing to search the user guide" required />
            <input type="hidden" name="post_type[]" value="docs" />
            <input type="hidden" name="fs" value="1" />
            <button type="submit" aria-label="Search original documentation">⌕</button>
          </form>

          <div className="wedocs-single-wrap-clone">
            <aside className="wedocs-sidebar-clone" aria-label="CL2U Additional Guide for Publishers navigation">
              <h2>CL2U Additional Guide for Publishers</h2>
              <ul className="doc-nav-list-clone">
                <li>
                  <a href={'/docs/cl2u-additional-guide-for-publishers/about/'}>📁About<span aria-hidden="true">⌄</span></a>
                  <ul>
                    <li><a href={'/docs/cl2u-additional-guide-for-publishers/about/publisher-role/'}>Publisher Role</a></li>
                  </ul>
                </li>
              </ul>
            </aside>

            <article className="wedocs-single-content-clone" itemScope itemType="https://schema.org/Article">
              <ol className="wedocs-breadcrumb-clone">
                <li aria-hidden="true">⌂</li>
                <li><a href="/">Home</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/">Docs</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-additional-guide-for-publishers/">CL2U Additional Guide for Publishers</a></li>
                <li aria-hidden="true">›</li>
                <li><a href="/docs/cl2u-additional-guide-for-publishers/about/">About</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Publisher Role</span></li>
              </ol>

              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Publisher Role</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>

              <div className="doc-article-body" itemProp="articleBody">
                <p>Game publishers are able to perform similar functions to those of business owners, such as retail shops and game distributors. In essence, they have the same access as game distributors with additional features, such as the ability to view tournaments organized by their distributors and include them in their official shop programme.</p>
                <p>For example, the first picture depicts the official shop programme for a game distributor. From the image, we can see that the game distributor is only able to invite the shops and event organizers under their distribution to participate.</p>
                <p>The second picture depicts the official shop programme for a game publisher. From this image, we can see that game publishers can invite not only shops and event organizers but also their distributors to join the programme.</p>
                <figure className="doc-image-figure">
                  <img src="/images/publisher2.png" alt="Official Shop Programme for game distributor" width={1200} height={600} />
                </figure>
                <figure className="doc-image-figure">
                  <img src="/images/publisher1.png" alt="Official Shop Programme for game publisher showing distributors can be invited" width={1200} height={605} />
                </figure>
              </div>

              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><i className="wedocs-icon wedocs-icon-envelope"></i> Still stuck? <a href="#">How can we help?</a></span>
                <time dateTime="2023-03-07T15:45:24+08:00">Updated on March 7, 2023</time>
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