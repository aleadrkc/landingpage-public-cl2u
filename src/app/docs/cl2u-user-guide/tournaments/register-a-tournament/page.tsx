import type { Metadata } from 'next';
const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];
const _b = 'PHA+PHN0cm9uZz5BLiBUb3VybmFtZW50IFJlZ2lzdHJhdGlvbiAoUGxheWVyIERvZXNuJiM4MjE3O3QgTmVlZCB0byBTdWJtaXQgQ2FyZCBEZWNrIExpc3Qgb3IgRGVja2xvZyk8L3N0cm9uZz48L3A+CjxwIHN0eWxlPSJwYWRkaW5nLWxlZnQ6IDIzcHg7Ij5Gb2xsb3dpbmcgc2VjdGlvbiBkZXNjcmliZXMgb24gaG93IHRoZSBwbGF5ZXIgcmVnaXN0ZXIgdG8gYSB0b3VybmFtZW50IHRoYXQgZG9lc24mIzgyMTc7dCByZXF1aXJlIHBsYXllciB0byBzdWJtaXQgY2FyZCBkZWNrIGxpc3Qgb3IgZGVja2xvZy48L3A+CjxvbD4KPGxpPkNsaWNrICYjODIyMDtGaW5kIGEgVG91cm5hbWVudCYjODIyMTsgaW4gdGhlIE5hdmlnYXRpb24gQmFyLiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9yMS04LnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3IxLTgtMTAyNHg0OTYucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDk2IiAvPjwvYT48L2xpPgo8bGk+Q2hvb3NlIHRoZSB0b3VybmFtZW50IHRoYXQgeW91IHdhbnQgdG8gcmVnaXN0ZXIgYW5kIGNsaWNrICYjODIyMDtTaWduIFVwIE5vdyYjODIyMTsgdGV4dCBsaW5rLiAoSW4gdGhpcyBzY2VuYXJpbywgcGxheWVyIHJlZ2lzdGVyIHRvIFRvdXJuYW1lbnQgUHJlbWllcmUgMjAyMCkuIDxhIGhyZWY9Imh0dHBzOi8vcHVibGljLmNsMnUubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L3IyLTYucG5nIiA+PGltZyBjbGFzcz0iICBzaXplLSIgc3JjPSIvaW1hZ2VzL3BsYXllcnMvcjItNi0xMDI0eDQ5NS5wbmciIGFsdD0iIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI0OTUiIC8+PC9hPjwvbGk+CjxsaT5Gb2xsb3dpbmcgcGljdHVyZSBzaG93cyB0aGF0IHRoZSBwbGF5ZXIgaGFzIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIHRvIHRoZSB0b3VybmFtZW50LiA8YSBocmVmPSJodHRwczovL3B1YmxpYy5jbDJ1Lm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9yMy0yLnBuZyIgPjxpbWcgY2xhc3M9IiAgc2l6ZS0iIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL3IzLTItMTAyNHg0OTMucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMjQiIGhlaWdodD0iNDkzIiAvPjwvYT5UaGUgcGFydGljaXBhbnQgd2lsbCByZWNlaXZlIGFuIGVtYWlsIG9uY2UgYWxyZWFkeSBmaW5pc2ggcmVnaXN0ZXJlZCB0byB0aGUgdG91cm5hbWVudC4gPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvcjcucG5nIiA+PGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvcjcucG5nIiBhbHQ9IiIgd2lkdGg9IjEwMTgiIGhlaWdodD0iNTM3IiAvPjwvYT48L2xpPgo8L29sPgo8cD48c3Ryb25nPkIuIFRvdXJuYW1lbnQgUmVnaXN0cmF0aW9uIChQbGF5ZXIgTXVzdCBTdWJtaXQgQ2FyZCBEZWNrIExpc3QpPC9zdHJvbmc+PC9wPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiAyM3B4OyI+Rm9sbG93aW5nIHNlY3Rpb24gZGVzY3JpYmVzIG9uIGhvdyB0aGUgcGxheWVyIHJlZ2lzdGVyIHRvIGEgdG91cm5hbWVudCB0aGF0IHJlcXVpcmVzIHBsYXllciB0byBzdWJtaXQgY2FyZCBkZWNrIGxpc3QuPC9wPgo8b2w+CjxsaT5DbGljayAmIzgyMjA7RmluZCBhIFRvdXJuYW1lbnQmIzgyMjE7IGluIHRoZSBOYXZpZ2F0aW9uIEJhci48aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9kZWNrMS5wbmciIGFsdD0iIiB3aWR0aD0iMTE4NyIgaGVpZ2h0PSI2NTMiIC8+PC9saT4KPGxpPkNob29zZSBhIHRvdXJuYW1lbnQgdGhhdCB5b3Ugd2FudCB0byByZWdpc3RlciBhbmQgY2xpY2sgJiM4MjIwO1NpZ24gVXAgTm93JiM4MjIxOyB0ZXh0IGxpbmsuIChJbiB0aGlzIHNjZW5hcmlvLCBwbGF5ZXIgcmVnaXN0ZXIgdG8gJiM4MjIwO1ByZW1pZXJlIFRvdXJuYW1lbnQgU1Mg4oCTIDIwMjMmIzgyMjE7KS4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvZGVjazIucG5nIiBhbHQ9IiIgd2lkdGg9IjEyMDUiIGhlaWdodD0iNjYzIiAvPjwvbGk+CjxsaT5JdCB3aWxsIGRpcmVjdCB0byB0aGUgZm9sbG93aW5nIHBhZ2UuIFBsYXllciBjYW4gY2hvb3NlIHdoZXRoZXIgdG8gc3VibWl0IHRoZSBjYXJkIGRlY2sgbGlzdCB1c2luZyBvbmxpbmUgZm9ybSBpbiB0aGUgd2Vic2l0ZSBvciBicmluZyB0aGUgaGFyZGNvcHkgdmVyc2lvbiBkdXJpbmcgdGhlIHRvdXJuYW1lbnQuIEluIHRoaXMgc2NlbmFyaW8sIHBsYXllciBjaG9vc2UgdG8gc3VibWl0IHRoZSBjYXJkIGRlY2sgbGlzdCB0aHJvdWdoIHRoZSB3ZWJzaXRlLjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2tsaXN0MS5wbmciIGFsdD0iIiB3aWR0aD0iMTE5MCIgaGVpZ2h0PSI1NjciIC8+PC9saT4KPGxpPkNsaWNrICYjODIyMDtFZGl0IERlY2smIzgyMjE7IGlmIHRoZSBwbGF5ZXIgZG9lc24mIzgyMTc7dCBoYXZlIGFueSBjYXJkIGRlY2sgbGlzdC4gQ2xpY2sgJiM4MjIwO0Nob29zZSBEZWNrJiM4MjIxOyBpZiB0aGUgcGxheWVyIGhhcyBhdmFpbGFibGUgY2FyZCBkZWNrIGxpc3QgdG8gY2hvb3NlLiAoTm90ZTogUGxheWVyIHRoYXQgZWRpdCB0aGUgY2FyZCBkZWNrIGluICYjODIyMDtEZWNrcyYjODIyMTsgbWVudSwgZG9lc24mIzgyMTc7dCBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0byB0aGUgY2FyZCBkZWNrIGxpc3QgaW4gdG91cm5hbWVudCkuCjx1bD4KPGxpPkZvbGxvd2luZyBzaG93cyB0aGUgcGljdHVyZSBhZnRlciBwbGF5ZXIgY2xpY2tzICYjODIyMDtFZGl0IERlY2smIzgyMjE7LiBQbGF5ZXIgaXMgcmVxdWlyZWQgdG8gZmlsbCBpbiB0aGUgZGVjayByZWdpc3RyYXRpb24gc2hlZXQgaW5mb3JtYXRpb24uPGEgaHJlZj0iaHR0cHM6Ly9wdWJsaWMuY2wydS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvcjMtMy5wbmciID48YnIgLz4KPC9hPjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2tsaXN0Mi5wbmciIGFsdD0iIiB3aWR0aD0iODU4IiBoZWlnaHQ9IjQ3MCIgLz48L2xpPgo8L3VsPgo8L2xpPgo8bGk+QWZ0ZXIgdGhlIHBsYXllciBoYXMgY29tcGxldGUgYWxsIG9mIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiBpbiB0aGUgRGVjayBSZWdpc3RyYXRpb24gU2hlZXQgb3IgaGFzIGNob3NlbiB0aGUgY2FyZCBkZWNrIGxpc3QgKGlmIHRoZXJlIGlzKSwgcGxheWVyIG11c3QgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGJ5IGNsaWNrIHRoZSByYWRpbyBidXR0b24gYXMgc2hvd24gaW4gdGhlIGZvbGxvd2luZyBwaWN0dXJlLiBUaGVuLCBjbGljayAmIzgyMjA7U2lnbiBVcCYjODIyMTsuTm90ZTogSWYgeW91IHRpY2sgb24gdGhlIGNoZWNrYm94IOKAnFNhdmUgdGhpcyBkZWNrIHRvIG15IGRlY2tzIGxpc3TigJ0sIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBzYXZlZCB0byB5b3VyIGRlY2tsaXN0IGF0IHRoZSDigJxEZWNrc+KAnSBtZW51LiBUaGUgZGVja2xpc3QgbmFtZSB3aWxsIGJlIHNhdmVkIGJhc2VkIG9uIHRoZSB0b3VybmFtZW50IG5hbWUgYWxvbmcgd2l0aCBudW1iZXIgb2YgdGltZXMgdGhhdCB5b3UgaGF2ZSBzYXZlZC91cGRhdGVkIHRoZSBkZWNrcyBmb3IgdGhhdCBwYXJ0aWN1bGFyIGRlY2tsaXN0LjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2tsaXN0NC5wbmciIGFsdD0iIiB3aWR0aD0iMTIwNCIgaGVpZ2h0PSI2NjMiIC8+PC9saT4KPGxpPlRoZSBwbGF5ZXIgaGFzIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIHRvIHRoZSB0b3VybmFtZW50LCBhcyBzaG93biBpbiB0aGUgZm9sbG93aW5nIHBpY3R1cmUuIDxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2tsb2czLnBuZyIgYWx0PSIiIHdpZHRoPSI4OTciIGhlaWdodD0iNDkxIiAvPlRoZSBwYXJ0aWNpcGFudCB3aWxsIHJlY2VpdmUgYW4gZW1haWwgYWZ0ZXIgZmluaXNoIHJlZ2lzdGVyZWQgdG8gdGhlIHRvdXJuYW1lbnQuPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvZGVja2xvZzQucG5nIiBhbHQ9IiIgd2lkdGg9Ijg5MSIgaGVpZ2h0PSI1MzkiIC8+PHN0cm9uZz5DLsKgVG91cm5hbWVudCBSZWdpc3RyYXRpb24gKFBsYXllciBNdXN0IFN1Ym1pdCBEZWNrbG9nKTwvc3Ryb25nPgo8cCBzdHlsZT0icGFkZGluZy1sZWZ0OiAyM3B4OyI+Rm9sbG93aW5nIHNlY3Rpb24gZGVzY3JpYmVzIG9uIGhvdyB0aGUgcGxheWVyIHJlZ2lzdGVyIHRvIGEgdG91cm5hbWVudCB0aGF0IHJlcXVpcmVzIHBsYXllciB0byBzdWJtaXQgZGVja2xvZy48L3A+CjxvbD4KPGxpPkNsaWNrICYjODIyMDtGaW5kIGEgVG91cm5hbWVudCYjODIyMTsgaW4gdGhlIE5hdmlnYXRpb24gQmFyLjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2sxLnBuZyIgYWx0PSIiIHdpZHRoPSIxMTg3IiBoZWlnaHQ9IjY1MyIgLz48L2xpPgo8bGk+Q2hvb3NlIGEgdG91cm5hbWVudCB0aGF0IHlvdSB3YW50IHRvIHJlZ2lzdGVyIGFuZCBjbGljayAmIzgyMjA7U2lnbiBVcCBOb3cmIzgyMjE7IHRleHQgbGluay4gKEluIHRoaXMgc2NlbmFyaW8sIHBsYXllciByZWdpc3RlciB0byAmIzgyMjA7UHJlbWllcmUgVG91cm5hbWVudCBTUyDigJMgMjAyMyYjODIyMTspLiA8aW1nICBzcmM9Ii9pbWFnZXMvcGxheWVycy9kZWNrMi5wbmciIGFsdD0iIiB3aWR0aD0iMTIwNSIgaGVpZ2h0PSI2NjMiIC8+PC9saT4KPGxpPkl0IHdpbGwgZGlyZWN0IHRvIHRoZSBmb2xsb3dpbmcgcGFnZS4gQ2xpY2sg4oCcQ2hvb3NlIERlY2tsb2figJ0gYnV0dG9uIGlmIHlvdSBoYXZlIGF2YWlsYWJsZSBkZWNrbG9nIHRoYXQgY2FuIGJlIGNob3Nlbi4gQ2xpY2sg4oCcRWRpdCBEZWNrbG9n4oCdIGJ1dHRvbiB0byBjcmVhdGUgZGVja2xvZyBieSBmaWxsaW5nIHRoZSBpbmZvcm1hdGlvbiBhdCBkZWNrIHJlZ2lzdHJhdGlvbiBzaGVldC4gWW91IGNhbiBnZXQgdGhlIGRlY2tsb2cgY29kZSB0byBiZSBpbnB1dCB0byB0aGlzIHBhZ2UgaW4gZGVja2xvZyBjb2RlIHNlY3Rpb24gdGhyb3VnaCBjbGlja2luZyB0aGUgbGluayAoc2VlIHRoZSBibHVlIGFycm93IGluIHRoZSBmb2xsb3dpbmcgc2NyZWVuc2hvdCkuPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvZGVja2xvZzEucG5nIiBhbHQ9IiIgd2lkdGg9IjExNzEiIGhlaWdodD0iNjQ3IiAvPjwvbGk+CjxsaT5BZnRlciB0aGUgcGxheWVyIGhhcyBjb21wbGV0ZSBhbGwgb2YgdGhlIHJlcXVpcmVkIGluZm9ybWF0aW9uIGluIHRoZSBEZWNrIFJlZ2lzdHJhdGlvbiBTaGVldCBvciBoYXMgY2hvc2VuIHRoZSBkZWNrbG9nIChpZiB0aGVyZSBpcyksIHBsYXllciBtdXN0IGFncmVlIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBieSBjbGljayB0aGUgcmFkaW8gYnV0dG9uIGFzIHNob3duIGluIHRoZSBmb2xsb3dpbmcgcGljdHVyZS4gVGhlbiwgY2xpY2sgJiM4MjIwO1NpZ24gVXAmIzgyMjE7Lk5vdGU6IElmIHlvdSB0aWNrIG9uIHRoZSBjaGVja2JveCDigJxTYXZlIHRoaXMgZGVjayB0byBteSBkZWNrcyBsaXN04oCdLCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgc2F2ZWQgdG8geW91ciBkZWNrbG9nIGF0IHRoZSDigJxEZWNrc+KAnSBtZW51LiBUaGUgZGVja2xvZyBsaXN0IG5hbWUgd2lsbCBiZSBzYXZlZCBiYXNlZCBvbiB0aGUgdG91cm5hbWVudCBuYW1lIGFsb25nIHdpdGggbnVtYmVyIG9mIHRpbWVzIHRoYXQgeW91IGhhdmUgc2F2ZWQvdXBkYXRlZCB0aGUgZGVja3MgZm9yIHRoYXQgcGFydGljdWxhciBkZWNrbG9nLjxpbWcgIHNyYz0iL2ltYWdlcy9wbGF5ZXJzL2RlY2tsb2cyLnBuZyIgYWx0PSIiIHdpZHRoPSIxMjA4IiBoZWlnaHQ9IjU3MCIgLz48L2xpPgo8bGk+VGhlIHBsYXllciBoYXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgdG8gdGhlIHRvdXJuYW1lbnQsIGFzIHNob3duIGluIHRoZSBmb2xsb3dpbmcgcGljdHVyZS4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvZGVja2xvZzMucG5nIiBhbHQ9IiIgd2lkdGg9Ijg5NyIgaGVpZ2h0PSI0OTEiIC8+VGhlIHBhcnRpY2lwYW50IHdpbGwgcmVjZWl2ZSBhbiBlbWFpbCBhZnRlciBmaW5pc2ggcmVnaXN0ZXJlZCB0byB0aGUgdG91cm5hbWVudC4gPGltZyAgc3JjPSIvaW1hZ2VzL3BsYXllcnMvZGVja2xvZzQucG5nIiBhbHQ9IiIgd2lkdGg9Ijc5NCIgaGVpZ2h0PSI0ODAiIC8+PC9saT4KPC9vbD4KPC9saT4KPC9vbD4=';
export const metadata: Metadata = {
  title: 'Register a Tournament (Including Email Received) – CL2U',
  description: 'Register a Tournament (Including Email Received) — documentation section in the CL2U User Guide for Players.',
  alternates: { canonical: '/docs/cl2u-user-guide/tournaments/register-a-tournament/' },
  openGraph: {
    title: 'Register a Tournament (Including Email Received)',
    description: 'Register a Tournament (Including Email Received) — documentation section in the CL2U User Guide for Players.',
    url: '/docs/cl2u-user-guide/tournaments/register-a-tournament/',
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
        <section className="doc-category-content" aria-label="Register a Tournament (Including Email Received)">
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
                <li><span>Register a Tournament (Including Email Received)</span></li>
              </ol>
              <header className="doc-entry-header-clone">
                <h1 itemProp="headline">Register a Tournament (Including Email Received)</h1>
                <a className="doc-print-clone" href="#" aria-label="Print this article">▣</a>
              </header>
              <div className="doc-article-body" itemProp="articleBody" dangerouslySetInnerHTML={{"__html": _html}} />
              <footer className="wedocs-entry-footer-clone">
                <span className="wedocs-help-icon"><img src="/images/envelope-help.svg" alt="" width={16} height={16} aria-hidden="true" /> Still stuck? <a href="#">How can we help?</a></span>
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
