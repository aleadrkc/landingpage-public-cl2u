import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const baseUrl = 'https://public.cl2u.net';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CL2U – All Your Rewards in one Platform!',
    template: '%s | CL2U',
  },
  description: 'CL2U connects gamers with play history, event notifications, pre-registration, leaderboards, rewards, and partner store community updates.',
  icons: {
    icon: '/images/favicon-32px.png',
    shortcut: '/images/favicon-32px.png',
    apple: '/images/favicon-32px.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'CL2U – All Your Rewards in one Platform!',
    description: 'All your rewards in one platform. CL2U helps players stay connected with games, events, community updates, and leaderboards.',
    url: baseUrl,
    siteName: 'CL2U',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CL2U – All Your Rewards in one Platform!',
    description: 'All your rewards in one platform. CL2U helps players stay connected with games, events, community updates, and leaderboards.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="visitor-access-log" strategy="afterInteractive">
          {`
            (function () {
              function postVisitorLog(status) {
                var endpoint = window.location.hostname === 'demolandingpubliccl2u.z48.web.core.windows.net'
                  ? 'https://cl2u-demo-log-win.azurewebsites.net/api/visitor-log'
                  : 'https://cl2u-live-log-win.azurewebsites.net/api/visitor-log';
                var payload = JSON.stringify({
                  method: 'GET',
                  path: window.location.pathname + window.location.search,
                  status: status,
                  size: document.documentElement ? document.documentElement.outerHTML.length : 0,
                  referrer: document.referrer || '-',
                  ua: navigator.userAgent || '-'
                });
                try {
                  if (navigator.sendBeacon) {
                    navigator.sendBeacon(endpoint, new Blob([payload], { type: 'text/plain;charset=UTF-8' }));
                    return;
                  }
                } catch (e) {}
                try {
                  fetch(endpoint, { method: 'POST', mode: 'no-cors', keepalive: true, body: payload });
                } catch (e) {}
              }
              function sendVisitorLog() {
                var h1 = document.querySelector('h1');
                var fallbackStatus = (h1 && /^404\b/.test(h1.textContent || '')) || /^404\b/.test(document.title || '') ? 404 : 200;
                try {
                  fetch(window.location.href, { method: 'HEAD', cache: 'no-store' })
                    .then(function (res) { postVisitorLog(res.status || fallbackStatus); })
                    .catch(function () { postVisitorLog(fallbackStatus); });
                  return;
                } catch (e) {
                  postVisitorLog(fallbackStatus);
                }
              }
              if (document.readyState === 'complete') {
                window.setTimeout(sendVisitorLog, 0);
              } else {
                window.addEventListener('load', sendVisitorLog, { once: true });
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
