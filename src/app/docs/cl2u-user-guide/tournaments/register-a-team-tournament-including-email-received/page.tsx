import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PHA+SW4gYSB0ZWFtIHRvdXJuYW1lbnQsIGl0IGNvbnNpc3RzIG9mIHRlYW0gbGVhZGVyIGFuZCB0ZWFtIG1lbWJlcnMgZm9yIGVhY2ggdGVhbS4gVGVhbSBsZWFkZXIgaXMgdGhlIG9uZSB3aG8gaXMgaW4gY2hhcmdlIHRvIGFkZCB0ZWFtIG1lbWJlcnMgdG8gdGhlIHRlYW0sIHJlbW92ZSBvciBtYW5hZ2UgdGhlaXIgdGVhbSBtZW1iZXJzLiBUZWFtIG1lbWJlcnMgY2FuIG9ubHkgc2VlIHRoZSB0b3VybmFtZW50IHJlZ2lzdHJhdGlvbiBkYXRhIGFuZCB0aGV5IGRvbuKAmXQgaGF2ZSBhdXRob3JpdGllcyB0byBhZGQvcmVtb3ZlIG90aGVyIHRlYW0gbWVtYmVycy90ZWFtIGxlYWRlci4gSW4gYWRkaXRpb24sIHRlYW0gbGVhZGVyIGFuZCB0ZWFtIG1lbWJlcnMgY2FuIG9ubHkgZWRpdCB0aGVpciBvd24gZGVja2xpc3QvZGVja2xvZyAoZm9yIHRvdXJuYW1lbnRzIHRoYXQgcmVxdWlyZSBzdWJtaXQgZGVja2xpc3QvZGVja2xvZyk8L3A+CjxwPklmIHRoZXJlIGlzIGEgc2l0dWF0aW9uIHdoaWNoIG5lZWRzIHRvIGNhbmNlbCB0aGUgdGVhbSB0b3VybmFtZW50IHJlZ2lzdHJhdGlvbiwgdGVhbSBsZWFkZXIgaXMgdGhlIG9uZSB0aGF0IGhhcyBhdXRob3JpdHkgdG8gY2FuY2VsIHRoZSB0ZWFtIHRvdXJuYW1lbnQgcmVnaXN0cmF0aW9uLiBPbmNlIGNhbmNlbGxlZCwgYWxsIG9mIHRoZSByZWdpc3RyYXRpb24gZGF0YSBmb3IgaGlzL2hlciB0ZWFtIG1lbWJlcnM7IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoYXQgdG91cm5hbWVudCBhbmQgdGVhbSBtZW1iZXJzIHdvbuKAmXQgbG9uZ2VyIHJlZ2lzdGVyZWQgaW4gdGhlIHRvdXJuYW1lbnQuPC9wPgo8cD48c3Ryb25nPkEuIFRlYW0gVG91cm5hbWVudCBSZWdpc3RyYXRpb24gKFBsYXllciBEb2VzbiYjODIxNzt0IE5lZWQgdG8gU3VibWl0IENhcmQgRGVjayBMaXN0IG9yIERlY2tsb2cpPC9zdHJvbmc+PC9wPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiAyM3B4OyI+Rm9sbG93aW5nIHNlY3Rpb24gZGVzY3JpYmVzIG9uIGhvdyB0aGUgbGVhZGVyIHJlZ2lzdGVyIHRvIGEgdGVhbSB0b3VybmFtZW50IHRoYXQgZG9lc24mIzgyMTc7dCByZXF1aXJlIHBsYXllciB0byBzdWJtaXQgY2FyZCBkZWNrIGxpc3Qgb3IgZGVja2xvZy48L3A+CjxvbD4KPGxpPkNsaWNrIOKAnEZpbmQgYSBUb3VybmFtZW504oCdIG1lbnUgYXQgbGVmdCBzaWRlIG5hdmlnYXRpb24gYmFyLjwvbGk+Cjwvb2w+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW0xLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTgxIiBoZWlnaHQ9IjU1NyIgLz48L3A+CjxvbCBzdGFydD0iMiI+CjxsaT5DaG9vc2UgYSB0ZWFtIGZvcm1hdCB0b3VybmFtZW50IHRoYXQgeW91IHdhbnQgdG8gcmVnaXN0ZXIgYW5kIGNsaWNrICYjODIyMDtTaWduIFVwIE5vdyYjODIyMTsgdGV4dCBsaW5rLiAoSW4gdGhpcyBzY2VuYXJpbywgcGxheWVyIHJlZ2lzdGVyIHRvICYjODIyMDtQcmVtaWVyZSBUb3VybmFtZW50IOKAkyAyMDIzIFRlYW0gRlJFRSBOTyBERUNLTElTVCYjODIyMTspLjwvbGk+Cjwvb2w+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW0yLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTczIiBoZWlnaHQ9IjY0OCIgLz48L3A+CjxvbCBzdGFydD0iMyI+CjxsaT5TaW5jZSB0aGlzIHRvdXJuYW1lbnQgZG9lc27igJl0IHJlcXVpcmUgcGxheWVyIHRvIHN1Ym1pdCBhbnkgZGVja2xpc3Qgb3IgZGVja2xvZywgcGxheWVyIGNhbiBjbGljayDigJxFZGl0IFRlYW3igJ0gYnV0dG9uIHRvIG1hbmFnZS9hZGQgdGVhbSBtZW1iZXJzIGZvciBsZWFkZXIgYW5kIHRvIHZpZXcgdGVhbSBtZW1iZXIgZm9yIG1lbWJlcnMuPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvdGVhbTMucG5nIiBhbHQ9IiIgd2lkdGg9IjExNjkiIGhlaWdodD0iNjQ2IiAvPjwvbGk+CjxsaT5BZnRlciBhZGRpbmcgdGVhbSBtZW1iZXJzIHRvIHRoZSByZWdpc3RyYXRpb24gc2hlZXQsIGNsaWNrIOKAnFNpZ24gVXDigJ0gYnV0dG9uLjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW00LnBuZyIgYWx0PSIiIHdpZHRoPSIxMTg3IiBoZWlnaHQ9IjU2MyIgLz48L2xpPgo8bGk+T25jZSB5b3UgaGF2ZSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCB0byB0aGUgdG91cm5hbWVudCwgeW91IGFuZCB5b3VyIHRlYW0gbWVtYmVycyB3aWxsIHJlY2VpdmUgYW4gZW1haWwgbm90aWZpY2F0aW9uIHRoYXQgaGF2ZSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCB0byB0aGUgdG91cm5hbWVudC4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvdGVhbTUucG5nIiBhbHQ9IiIgd2lkdGg9Ijg2NyIgaGVpZ2h0PSI2MjIiIC8+PC9saT4KPC9vbD4KPHA+PHN0cm9uZz5CLiBUZWFtIFRvdXJuYW1lbnQgUmVnaXN0cmF0aW9uIChQbGF5ZXIgTXVzdCBTdWJtaXQgQ2FyZCBEZWNrIExpc3QpPC9zdHJvbmc+PC9wPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiAyM3B4OyI+Rm9sbG93aW5nIHNlY3Rpb24gZGVzY3JpYmVzIG9uIGhvdyB0aGUgbGVhZGVyIHJlZ2lzdGVyIHRvIGEgdGVhbSB0b3VybmFtZW50IHRoYXQgcmVxdWlyZXMgcGxheWVyIHRvIHN1Ym1pdCBjYXJkIGRlY2sgbGlzdC48L3A+CjxvbD4KPGxpPkNsaWNrIOKAnEZpbmQgYSBUb3VybmFtZW504oCdIG1lbnUgYXQgbGVmdCBzaWRlIG5hdmlnYXRpb24gYmFyLjwvbGk+Cjwvb2w+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2sxLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTg3IiBoZWlnaHQ9IjY1MyIgLz48L3A+CjxwPiZuYnNwOzwvcD4KPG9sIHN0YXJ0PSIyIj4KPGxpPkNob29zZSBhIHRlYW0gZm9ybWF0IHRvdXJuYW1lbnQgdGhhdCB5b3Ugd2FudCB0byByZWdpc3RlciBhbmQgY2xpY2sg4oCcU2lnbiBVcCBOb3figJ0uIE9yIHlvdSBjYW4gY2xpY2sgb24gdG91cm5hbWVudCBuYW1lLCB0byBzZWUgdGhlIHRvdXJuYW1lbnQgZGV0YWlsIHBhZ2UgYW5kIGNsaWNrIOKAnFNpZ24gVXAgTm934oCdIGJ1dHRvbi4gSW4gdGhpcyBleGFtcGxlLCBwbGF5ZXIgcmVnaXN0ZXIgdG8g4oCcdGVzdCB0ZWFtIHRvdXJuYW1lbnTigJ0uPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvdGVhbWRlY2sxLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTc2IiBoZWlnaHQ9IjU2MSIgLz48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy90ZWFtZGVjazIucG5nIiBhbHQ9IiIgd2lkdGg9IjExOTIiIGhlaWdodD0iNjU3IiAvPjMuIENsaWNrIOKAnENob29zZSBEZWNr4oCdIGJ1dHRvbiBpZiB5b3UgaGF2ZSBhdmFpbGFibGUgY2FyZCBkZWNrbGlzdCB0byBjaG9vc2UuIENsaWNrIOKAnEVkaXQgRGVja+KAnSBidXR0b24gaWYgeW91IGRvbuKAmXQgaGF2ZSBhbnkgY2FyZCBkZWNrbGlzdCBhdCBhbGwuIENsaWNrIOKAnEVkaXQgVGVhbeKAnSBidXR0b24gdG8gbWFuYWdlL2FkZCB5b3VyIHRlYW0gbWVtYmVycy48L2xpPgo8L29sPgo8cD48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy90ZWFtZGVja2xpc3QxLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTg1IiBoZWlnaHQ9IjY1MiIgLz48L3A+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW1kZWNrbGlzdDIucG5nIiBhbHQ9IiIgd2lkdGg9Ijk0NiIgaGVpZ2h0PSI1MjEiIC8+PC9wPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiA0MHB4OyI+NC4gT25jZSB5b3UgaGF2ZSBmaWxsZWQgaW4gYWxsIG9mIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiwgY2xpY2sgb24gcmFkaW8gYnV0dG9uIHRvIGFncmVlIG9uIHRlcm1zIGFuZCBjb25kaXRpb25zLiBUaGVuLCBjbGljayDigJxTaWduIFVw4oCdIGJ1dHRvbi48L3A+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW1kZWNrbGlzdDMucG5nIiBhbHQ9IiIgd2lkdGg9IjExNjAiIGhlaWdodD0iNjM4IiAvPjwvcD4KPHAgc3R5bGU9InBhZGRpbmctbGVmdDogNDBweDsiPjUuIFRoZSBsZWFkZXIgaGFzIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIHRvIHRoZSB0ZWFtIHRvdXJuYW1lbnQsIGFzIHNob3duIGluIHRoZSBmb2xsb3dpbmcgcGljdHVyZS48L3A+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW1kZWNrbG9nNC5wbmciIGFsdD0iIiB3aWR0aD0iODgxIiBoZWlnaHQ9IjYzMCIgLz48L3A+CjxwPjxzdHJvbmc+Qy4gVGVhbSBUb3VybmFtZW50IFJlZ2lzdHJhdGlvbiAoUGxheWVyIE11c3QgU3VibWl0IERlY2tsb2cpPC9zdHJvbmc+PC9wPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiAyM3B4OyI+Rm9sbG93aW5nIHNlY3Rpb24gZGVzY3JpYmVzIG9uIGhvdyB0aGUgbGVhZGVyIHJlZ2lzdGVyIHRvIGEgdGVhbSB0b3VybmFtZW50IHRoYXQgcmVxdWlyZXMgcGxheWVyIHRvIHN1Ym1pdCBkZWNrbG9nLjwvcD4KPG9sPgo8bGk+Q2xpY2sg4oCcRmluZCBhIFRvdXJuYW1lbnTigJ0gbWVudSBhdCBsZWZ0IHNpZGUgbmF2aWdhdGlvbiBiYXIuPC9saT4KPC9vbD4KPHA+PGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvZGVjazEucG5nIiBhbHQ9IiIgd2lkdGg9IjExODciIGhlaWdodD0iNjUzIiAvPjwvcD4KPHA+Jm5ic3A7PC9wPgo8b2wgc3RhcnQ9IjIiPgo8bGk+Q2hvb3NlIGEgdGVhbSBmb3JtYXQgdG91cm5hbWVudCB0aGF0IHlvdSB3YW50IHRvIHJlZ2lzdGVyIGFuZCBjbGljayDigJxTaWduIFVwIE5vd+KAnS4gT3IgeW91IGNhbiBjbGljayBvbiB0b3VybmFtZW50IG5hbWUsIHRvIHNlZSB0aGUgdG91cm5hbWVudCBkZXRhaWwgcGFnZSBhbmQgY2xpY2sg4oCcU2lnbiBVcCBOb3figJ0gYnV0dG9uLiBJbiB0aGlzIGV4YW1wbGUsIHBsYXllciByZWdpc3RlciB0byDigJx0ZXN0IHRlYW0gdG91cm5hbWVudOKAnS4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvdGVhbWRlY2sxLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTc2IiBoZWlnaHQ9IjU2MSIgLz48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy90ZWFtZGVjazIucG5nIiBhbHQ9IiIgd2lkdGg9IjExOTIiIGhlaWdodD0iNjU3IiAvPjMuIENsaWNrIOKAnENob29zZSBEZWNrbG9n4oCdIGJ1dHRvbiBpZiB5b3UgaGF2ZSBhdmFpbGFibGUgY2FyZCBkZWNrbG9nIHRvIGNob29zZS4gQ2xpY2sg4oCcRWRpdCBEZWNrbG9n4oCdIGJ1dHRvbiBpZiB5b3UgZG9u4oCZdCBoYXZlIGFueSBjYXJkIGRlY2tsb2cgYXQgYWxsLiBDbGljayDigJxFZGl0IFRlYW3igJ0gYnV0dG9uIHRvIG1hbmFnZS9hZGQgeW91ciB0ZWFtIG1lbWJlcnMuPC9saT4KPC9vbD4KPHA+PGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvdGVhbWRlY2tsb2cxLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTkwIiBoZWlnaHQ9IjY1NSIgLz48L3A+CjxwIHN0eWxlPSJwYWRkaW5nLWxlZnQ6IDQwcHg7Ij48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy90ZWFtZGVja2xvZzIucG5nIiBhbHQ9IiIgd2lkdGg9IjkwMiIgaGVpZ2h0PSI1MDUiIC8+NC4gT25jZSB5b3UgaGF2ZSBmaWxsZWQgaW4gYWxsIG9mIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiwgY2xpY2sgb24gcmFkaW8gYnV0dG9uIHRvIGFncmVlIG9uIHRlcm1zIGFuZCBjb25kaXRpb25zLiBUaGVuLCBjbGljayDigJxTaWduIFVw4oCdIGJ1dHRvbi48L3A+CjxwPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3RlYW1kZWNrbG9nMy5wbmciIGFsdD0iIiB3aWR0aD0iMTE2NiIgaGVpZ2h0PSI2NDIiIC8+PC9wPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiA0MHB4OyI+NS4gVGhlIGxlYWRlciBoYXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgdG8gdGhlIHRlYW0gdG91cm5hbWVudCwgYXMgc2hvd24gaW4gdGhlIGZvbGxvd2luZyBwaWN0dXJlLjwvcD4KPHA+PGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvdGVhbWRlY2tsb2c0LnBuZyIgYWx0PSIiIHdpZHRoPSI4ODEiIGhlaWdodD0iNjMwIiAvPjwvcD4=';
export const metadata: Metadata = {
  title: 'Register a Team Tournament (Including Email Received) – CL2U',
  description: 'Register a Team Tournament (Including Email Received) — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/tournaments/register-a-team-tournament-including-email-received/' },
  openGraph: {
    title: 'Register a Team Tournament (Including Email Received)',
    description: 'Register a Team Tournament (Including Email Received) — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/tournaments/register-a-team-tournament-including-email-received/',
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
        <section className="doc-category-content" aria-label="Register a Team Tournament (Including Email Received)">
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
                <li><a href="/docs/cl2u-user-guide/tournaments/">Tournaments</a></li>
                <li aria-hidden="true">›</li>
                <li><span>Register a Team Tournament (Including Email Received)</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Register a Team Tournament (Including Email Received)</h1>
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
