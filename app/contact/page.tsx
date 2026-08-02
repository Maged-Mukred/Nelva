"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const enquiryTypes = [
  "Market & Channel Readiness Assessment",
  "Customer and partner qualification",
  "Manufacturer Representation",
  "Technical & Commercial Coordination",
  "Opportunity follow-up",
  "Distributor or system-integrator assessment",
  "Payment Technology market development",
  "Retail & Self-Service Technology opportunities",
];

const briefing = [
  "Your company",
  "The product or hardware category",
  "The target market or region",
  "The customer, channel, or partner type being considered",
  "The current commercial situation",
  "The type of support being considered",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Wordmark() {
  return <span className="wordmark-text">NELVA</span>;
}

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="shell header-inner">
          <Link className="wordmark" href="/" aria-label="Nelva home">
            <Wordmark />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="/company">Company</a>
            <a href="/capabilities">Capabilities</a>
            <a href="/industries">Industries</a>
            <a href="/contact" aria-current="page">
              Contact
            </a>

            <a className="header-cta" href="#prepare">
              Request an initial commercial briefing <Arrow />
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>

            <span className="menu-symbol" aria-hidden="true">
              {menuOpen ? "×" : "+"}
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <nav className="shell mobile-nav" aria-label="Mobile navigation">
            {[
              ["Company", "/company"],
              ["Capabilities", "/capabilities"],
              ["Industries", "/industries"],
              ["Contact", "/contact"],
            ].map(([label, href], index) => (
              <a
                href={href}
                key={label}
                aria-current={label === "Contact" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-nav-index">0{index + 1}</span>
                <span>{label}</span>
                <Arrow />
              </a>
            ))}

            <a
              className="mobile-primary-cta"
              href="#prepare"
              onClick={() => setMenuOpen(false)}
            >
              Request an initial commercial briefing <Arrow />
            </a>
          </nav>

          <div className="shell mobile-menu-meta">
            <span>Espoo, Finland</span>
            <span>Business ID 3574517-6</span>
          </div>
        </div>
      </header>

      <main id="main">
        <section
          className="contact-page-hero shell"
          aria-labelledby="contact-title"
        >
          <div className="contact-page-meta">
            <span>
              <i className="signal-dot" /> Contact
            </span>
            <span>Begin with a structured commercial briefing</span>
          </div>

          <div className="contact-page-grid">
            <h1 id="contact-title">
              Discuss a Market &amp; Channel Readiness Assessment.
            </h1>

            <p>
              Tell Nelva about your company, product, target market, current
              commercial situation, and the type of support you are
              considering. A short, non-confidential introduction is enough to
              begin.
            </p>
          </div>

          <a className="contact-down" href="#prepare">
            <span>Prepare your briefing</span>
            <i aria-hidden="true">↓</i>
          </a>
        </section>

        <section
          id="prepare"
          className="contact-prepare section-space"
          aria-labelledby="prepare-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>01</span>
              <span>Initial briefing</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="prepare-title">
                  Useful context for an initial commercial conversation.
                </h2>

                <p>
                  Confidential information is not required at this stage. Share
                  only enough context for Nelva to understand the product,
                  market objective, and commercial questions involved.
                </p>
              </div>

              <ol className="briefing-list">
                {briefing.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="enquiry-types section-space"
          aria-labelledby="enquiries-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>02</span>
              <span>Relevant enquiries</span>
            </div>

            <div className="section-content">
              <h2 id="enquiries-title">
                Commercial questions the conversation may address.
              </h2>

              <div className="enquiry-grid">
                {enquiryTypes.map((item, index) => (
                  <span key={item}>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-details"
          className="official-contact section-space"
          aria-labelledby="official-title"
        >
          <div className="shell official-grid">
            <div className="official-label">
              <span>03</span>
              <span>Official contact</span>

              <strong>
                ESPOO
                <br />
                FINLAND
              </strong>
            </div>

            <div className="official-content">
              <p className="eyebrow">Business enquiries</p>

             <h2 id="official-title">
  Request an initial commercial briefing.
</h2>

<p>
  Send a short, non-confidential introduction outlining your company,
  product, target market, and the commercial support being considered.
</p>

<a
  className="contact-email-cta"
  href="mailto:partnerships@nelvaglobal.com?subject=Initial%20commercial%20briefing"
>
  partnerships@nelvaglobal.com <Arrow />
</a>

              <div className="corporate-card">
                <span>Corporate information</span>
                <strong>Nelva</strong>

                <p>
                  Espoo, Finland
                  <br />
                  Business ID: 3574517-6
                  <br />
                  nelvaglobal.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-boundary section-space">
          <div className="shell">
            <span>Commercial boundary</span>

            <p>
              Beginning a discussion does not create a representation, agency,
              exclusivity, distribution, or other commercial agreement. Any
              engagement, scope, authority, or commitment must be agreed
              separately in writing.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Link
              className="wordmark footer-wordmark"
              href="/"
              aria-label="Nelva home"
            >
              <Wordmark />
            </Link>

            <p>
              International market development for technology manufacturers.
            </p>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <span className="footer-label">Navigate</span>
            <a href="/company">Company</a>
            <a href="/capabilities">Capabilities</a>
            <a href="/industries">Industries</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="footer-column">
            <span className="footer-label">Corporate</span>
            <span>Nelva</span>
            <span>Espoo, Finland</span>
            <span>Business ID: 3574517-6</span>
            <span>nelvaglobal.com</span>
          </div>

          <div className="footer-end">
            <span>© 2026 Nelva</span>
            <a href="#main">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
