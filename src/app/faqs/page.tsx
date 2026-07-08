"use client";

import { useMemo, useState } from 'react';

const navItems = [
  { label: 'About CL2U', href: '/' },
  { label: 'Privacy Policy', href: '/privacy-statement/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Contact', href: 'https://cl2u.net/contact-us' },
];

type FaqItem = { category: 'general' | 'business'; question: string; answerHtml: string };
const faqs: FaqItem[] = [
  {
    "category": "general",
    "question": "Can you tell me what CL2U is all about?",
    "answerHtml": "\u003cp>CL2U is a cloud-based multi-partner consumer reward programme connecting players with their games. Manage your gaming activity, keeping track of the rewards you’ve earned, and be notified of events near you. We are constantly improving to offer you more functions.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Who can use CL2U?",
    "answerHtml": "\u003cp style=\"text-align: left;\">CL2U is free for all to use.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Do I need to pay to use CL2U?",
    "answerHtml": "\u003cp style=\"text-align: left;\">CL2U is from a free-to-join membership system.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Where can I use CL2U membership?",
    "answerHtml": "\u003cp>You are welcome to use CL2U membership at all of our participating partners. Sign up and have a look at our “Find a Shop Nearby” page to locate any of our partner near you!\u003c/p>"
  },
  {
    "category": "general",
    "question": "How do I sign up to become a CL2U member?",
    "answerHtml": "\u003cp>Step 1: Please go to \u003ca href=\"https://cl2u.net\">www.cl2u.net\u003c/a>\u003c/p>\n\u003cp>Step 2: Fill in the details and click “Sign Up”\u003c/p>\n\u003cp>Once you’re registered, you’ll have the opportunity to take part in all of the exciting events!\u003c/p>"
  },
  {
    "category": "general",
    "question": "Do I need anything special to use it?",
    "answerHtml": "\u003cp>All you need is a Internet connection and a mobile phone/computer. Sign up and start searching for your favourite game shops!\u003c/p>"
  },
  {
    "category": "general",
    "question": "How do I contact support if I encounter any problem?",
    "answerHtml": "\u003cp>Our team is ready and waiting to answer your queries.  Just drop us an email at \u003ca href=\"https://cl2u.net\">\u003cspan class=\"__cf_email__\" data-cfemail=\"b8cbcdc8c8d7caccf8dbd48acd96d6ddcc\">[email&#160;protected]\u003c/span>\u003c/a> and we’ll be in touch. Make sure you provide as much information as possible in the message.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Why do I need to use CL2U?",
    "answerHtml": "\u003cp>As a gamer, we recommend you to use CL2U to maximize your gaming experience. Get notified, pre-register for an event, collect rewards, or even check out store near you just by using CL2U.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Do I need to print my member card?",
    "answerHtml": "\u003cp>You may print your member card if you want. CL2U is designed for both card and cardless operation. Type of cards available: QR Code, Virtual Card.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Can I use my friend’s CL2U ID instead?",
    "answerHtml": "\u003cp>You are not allowed to use your friend’s CL2U ID in any situation. This is to protect all parties from miss information. Think of your CL2U ID as your identification in the gaming world.\u003c/p>"
  },
  {
    "category": "general",
    "question": "How will my personal information be used?",
    "answerHtml": "\u003cp>We will never sell or misuse your personal information. Your personal information will be used compliance to our terms &amp; conditions as set forth in our privacy policy.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Why can’t I redeem my rewards?",
    "answerHtml": "\u003cp>There are some cases where you will not be able to redeem your rewards\u003c/p>\n\u003cp>a. The rewards are expired (Ex: Event only redemption)\u003c/p>\n\u003cp>b. You have already redeem the rewards\u003c/p>\n\u003cp>c. The rewards is out of stock\u003c/p>"
  },
  {
    "category": "general",
    "question": "How long are my reward valid for?",
    "answerHtml": "\u003cp>The validity of each rewards differs as it is offered by different provider (shop rewards/event rewards) for different events or usage.\u003c/p>"
  },
  {
    "category": "general",
    "question": "How can I redeem my rewards?",
    "answerHtml": "\u003cp>Log in to your CL2U account at \u003ca href=\"https://cl2u.net\">www.cl2u.net\u003c/a> and view your rewards at My Rewards. Rewards can be collected depending on its validity and collection point.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Can I return a reward I redeemed?",
    "answerHtml": "\u003cp>Rewards are non-returnable, non-refundable and hold no cash value.\u003c/p>"
  },
  {
    "category": "general",
    "question": "Can I redeem multiple rewards in 1 transaction/shop?",
    "answerHtml": "\u003cp>This will depends on the type of reward you would like to redeem. It is possible to redeem multiple &#8216;Shop&#8217; rewards simultaneously (marked as &#8216;Shop Rewards&#8217; in your rewards section) but not for CL2U or event rewards (both marked as &#8216;CL2U Rewards&#8217; or &#8216;Event Rewards&#8217;).\u003c/p>"
  },
  {
    "category": "general",
    "question": "Can I transfer my rewards to my friend?",
    "answerHtml": "\u003cp>Rewards are non-transferable and can’t be transferred between customer accounts.\u003c/p>"
  },
  {
    "category": "business",
    "question": "How does CL2U work?",
    "answerHtml": "\u003cp>CL2U is a cloud-based multi-partner consumer reward programme connecting players with their games. With CL2U, you can create and execute unique customer engagement programs, effectively manage membership and rewards, and track your game performance.\u003c/p>"
  },
  {
    "category": "business",
    "question": "What are some of the key feature?",
    "answerHtml": "\u003cp>CL2U offers necessary tools for a hobby store to kick start a successful reward programme. New customers will be able to find your shops/events within a  selected radius near them,  manage your events effortlessly, reward your loyal customer, all simplified into CL2U.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Do I have to pay to be a CL2U Partner?",
    "answerHtml": "\u003cp>You can register to be a CL2U partner for FREE! There will be charges if you would like to use additional CL2U features. Please contact us at \u003ca href=\"mailto:support@cl2u.net\">\u003cspan class=\"__cf_email__\" data-cfemail=\"cebdbbbebea1bcba8eada2fcbbe0a0abba\">[email&#160;protected]\u003c/span>\u003c/a> for more info.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can I define my loyalty program or CL2U has its own loyalty program that I must follow?",
    "answerHtml": "\u003cp>You can freely define your customer loyalty program for your member.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Will my data be shared to other merchants?",
    "answerHtml": "\u003cp>Your data will not be shared among merchants. CL2U ensures your data and privacy is protected.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can I determine products gift for my Reward Point Program?",
    "answerHtml": "\u003cp>Redemption point by products/vouchers is decided by your own company. It could be any products or discount/rebate to attract your customer to your shop.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can I get back my customer’s data if I delete my account?",
    "answerHtml": "\u003cp>Once you have deleted your account, you will no longer able to retrieve your customer data. However, please contact our support team at \u003ca href=\"mailto:support@cl2u.net\">\u003cspan class=\"__cf_email__\" data-cfemail=\"80f3f5f0f0eff2f4c0e3ecb2f5aeeee5f4\">[email&#160;protected]\u003c/span>\u003c/a> to assist you on exporting your account data before the deletion.\u003c/p>"
  },
  {
    "category": "business",
    "question": "What is the member registration process?",
    "answerHtml": "\u003cp>Step 1: Please go to \u003ca href=\"mailto:support@cl2u.net\">www.cl2u.net\u003c/a>\u003c/p>\n\u003cp>Step 2: Fill in the details and click “Sign Up”\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can I access to my customer’s data?",
    "answerHtml": "\u003cp>You can access to your customer&#8217;s data; however, you are only able to see the data related to your business. You are not able to access data beyond that point.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can CL2U operate without a smartphone?",
    "answerHtml": "\u003cp>Yes, you can use it with/without smartphone, with/without physical member card.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can I set restriction on what my staff can/cannot access?",
    "answerHtml": "\u003cp>Yes, access control is configurable for each staff account.\u003c/p>"
  },
  {
    "category": "business",
    "question": "Can I integrate my POS system with CL2U?",
    "answerHtml": "\u003cp>No, you cannot integrate your POS system with CL2U as they are two different systems/applications.\u003c/p>\n\u003cp>&nbsp;\u003c/p>"
  }
] as FaqItem[];

function Header() {
  return (
    <header className="site-header">
      <div className="header-row">
        <a className="logo-link" href="/" aria-label="CL2U homepage">
          <img src="/images/logo.png" alt="CL2U Logo" width={134} height={50} />
        </a>
        <nav className="desktop-nav" aria-label="Main Menu">
          {navItems.map((item, index) => (
            <a key={item.label} className={index === 2 ? 'active' : ''} href={item.href}>{item.label}</a>
          ))}
          <a className="login-button" href="https://cl2u.net/login">LOGIN</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Toggle mobile menu"><span></span><span></span><span></span></summary>
          <div className="mobile-panel">
            {navItems.map((item, index) => (
              <a key={item.label} className={index === 2 ? 'active' : ''} href={item.href}>{item.label}</a>
            ))}
            <a href="https://cl2u.net/login">LOGIN</a>
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer() {
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

export default function FaqsPage() {
  const [category, setCategory] = useState<'all' | 'business' | 'general'>('all');
  const [open, setOpen] = useState<number | null>(null);
  const visibleFaqs = useMemo(() => category === 'all' ? faqs : faqs.filter((item) => item.category === category), [category]);

  return (
    <>
      <Header />
      <main className="faq-page">
        <section className="faq-content" aria-labelledby="faq-title">
          <h1 id="faq-title">Frequently Asked Questions</h1>
          <p className="faq-search-label"><strong>Type your Question:</strong></p>
          <form className="faq-search" role="search" aria-label="Disabled FAQ search" onSubmit={(event) => event.preventDefault()}>
            <span className="faq-search-icon" aria-hidden="true">⌕</span>
            <label className="screen-reader-text" htmlFor="faq-search-input">Search for:</label>
            <input id="faq-search-input" type="search" placeholder="Start typing to search the FAQs" disabled aria-disabled="true" />
            <button type="button" disabled aria-disabled="true">⌕</button>
          </form>

          <ul className="faq-filters" aria-label="FAQ categories">
            {(['all', 'business', 'general'] as const).map((item) => (
              <li key={item} className={category === item ? 'is-active' : ''}>
                <button type="button" onClick={() => { setCategory(item); setOpen(null); }}>{item === 'all' ? 'All' : item[0].toUpperCase() + item.slice(1)}</button>
              </li>
            ))}
          </ul>

          <div className="faq-accordion">
            {visibleFaqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <article className={`faq-panel ${item.category} ${isOpen ? 'is-open' : ''}`} key={item.question}>
                  <h4>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                      <span className="faq-toggle-box" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                      <span className="faq-question">{item.question}</span>
                    </button>
                  </h4>
                  {isOpen && <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answerHtml }} />}
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <a className="back-top" href="#" aria-label="Go to top">⌃</a>
    </>
  );
}
