const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

export default function Home() {
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

      <main>
        <section className="hero" aria-label="CL2U gaming platform">
          <h1>GAMING MADE EASY BY CONNECTING PLAYERS</h1>
        </section>

        <section className="content-row white first">
          <div className="row-inner two-third">
            <div className="copy copy-left">
              <p>CL2U is the ultimate gaming platform for players to stay connected with the game. At CL2U, we are committed to ensure players could bring their game to the next level by providing information on player’s game history, notification on upcoming events, pre-register ahead of the queue, and keep track of the gaming leader board. We remind you of your games so you can focus on the game!</p>
            </div>
            <figure className="image-col"><img src="/images/mobile.png" alt="Mobile notification for CL2U gaming platform" /></figure>
          </div>
        </section>

        <section className="content-row pink">
          <div className="row-inner one-third">
            <figure className="image-col"><img src="/images/social.png" alt="Community and social engagement illustration" /></figure>
            <div className="copy copy-right light">
              <p>CL2U is also committed to working with partner stores to enhance player’s gaming experience at all local game store. Plan your events with us, reward the players together with us, and ensure the community always stay informed on the latest updates.</p>
            </div>
          </div>
        </section>

        <section className="content-row white last">
          <div className="row-inner two-third">
            <div className="copy copy-left short">
              <p>Join us today and never disconnect from the game again!</p>
            </div>
            <figure className="image-col"><img src="/images/partner.png" alt="Become a CL2U partner illustration" /></figure>
          </div>
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
