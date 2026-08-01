"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const framework = [
  [
    "01",
    "Assess",
    "Understand the product, application, target market, commercial objective, and relevant market structure.",
  ],
  [
    "02",
    "Identify",
    "Find relevant customers, channels, partners, service providers, and other market participants.",
  ],
  [
    "03",
    "Qualify",
    "Evaluate product relevance, market role, commercial capability, and realistic potential.",
  ],
  [
    "04",
    "Develop",
    "Initiate communication and build relationships with relevant organisations.",
  ],
  [
    "05",
    "Coordinate",
    "Connect agreed technical and commercial information and discussions.",
  ],
  [
    "06",
    "Advance",
    "Maintain follow-up around agreed next steps and qualified opportunities.",
  ],
];

const paymentColumns = [
  [
    "Products",
    [
      "Android payment terminals",
      "Smart POS and mPOS",
      "Payment-device solutions",
    ],
  ],
  [
    "Environments",
    [
      "Attended payment environments",
      "Unattended payment environments",
      "Retail and self-service applications",
    ],
  ],
  [
    "Ecosystem",
    [
      "Manufacturers",
      "Distributors and system integrators",
      "Payment service providers",
    ],
  ],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Wordmark() {
  return <span className="wordmark-text">NELVA</span>;
}

export default function IndustriesPage() {
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
            <a href="/industries" aria-current="page">
              Industries
            </a>
            <a href="/contact">Contact</a>

            <a className="header-cta" href="/contact">
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
                onClick={() => setMenuOpen(false)}
                aria-current={label === "Industries" ? "page" : undefined}
              >
                <span className="mobile-nav-index">0{index + 1}</span>
                <span>{label}</span>
                <Arrow />
              </a>
            ))}

            <a
              className="mobile-primary-cta"
              href="/contact"
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
          className="industries-hero shell"
          aria-labelledby="industries-title"
        >
          <div className="industries-hero-meta">
            <span>
              <i className="signal-dot" /> Industries
            </span>

            <span>Specialist depth × selective application</span>
          </div>

          <div className="industries-hero-grid">
            <h1 id="industries-title">
              Payment Technology first. Related markets where the fit is
              credible.
            </h1>

            <div className="industries-hero-copy">
              <p>
                Nelva applies a disciplined market-development method across
                technology markets, with its strongest specialist experience
                in Payment Technology.
              </p>

              <p className="depth-note">
                Retail &amp; Self-Service Technology represents related
                practical experience. Broader Technology Markets are considered
                selectively and are not presented as equal specialisations.
              </p>
            </div>
          </div>

          <div className="industries-hero-axis" aria-hidden="true">
            <span>Specialist context</span>
            <i />
            <strong>Commercial relevance</strong>
          </div>
        </section>

        <section
          className="market-framework section-space"
          aria-labelledby="framework-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>Method</span>
              <span>Across technology markets</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="framework-title">
                  The sector changes. The commercial discipline remains.
                </h2>

                <p>
                  Nelva does not treat market development as a list-building
                  exercise. Each engagement connects market context,
                  identification, qualification, commercial relationship
                  development, coordination, and opportunity follow-up.
                </p>
              </div>

              <ol className="market-framework-list">
                {framework.map(([number, title, text]) => (
                  <li key={title}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>

              <div className="intelligence-source-note">
                <span>Research context</span>

                <p>
                  Professional databases, public business information,
                  industry directories, news monitoring, and appropriate
                  commercial platforms may support research. Their value lies
                  in how information is assessed, connected, and qualified—not
                  in supplying generic databases or contact lists.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="payment-sector section-space"
          aria-labelledby="payment-title"
        >
          <div className="shell payment-sector-grid">
            <div className="payment-sector-side">
              <span>01</span>
              <span>Strongest specialist area</span>

              <strong>
                PAY
                <br />
                MENT
              </strong>
            </div>

            <div className="payment-sector-content">
              <p className="eyebrow">Payment Technology</p>

              <h2 id="payment-title">
                Specialist experience across payment devices, channels, and
                commercial environments.
              </h2>

              <p className="payment-sector-lead">
                Nelva’s strongest professional background is in payment
                technology, with particular relevance to Android payment
                terminals, Smart POS and mPOS, and attended and unattended
                payment environments.
              </p>

              <div className="payment-sector-columns">
                {paymentColumns.map(([label, items]) => (
                  <div key={label as string}>
                    <span>{label as string}</span>

                    <ul>
                      {(items as string[]).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="payment-support">
                <span>Market-development support may include</span>

                <p>
                  Market &amp; Channel Readiness, target identification,
                  customer and partner qualification, Manufacturer
                  Representation, commercial relationship development,
                  Technical &amp; Commercial Coordination, and opportunity
                  follow-up.
                </p>
              </div>

              <p className="payment-boundary">
                Nelva is not presented as a payment software provider,
                acquiring institution, certification laboratory, engineering
                contractor, or complete payment-system integrator.
              </p>

              <a className="button button-light" href="/contact">
                Discuss a payment-technology objective <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className="retail-sector section-space"
          aria-labelledby="retail-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>02</span>
              <span>Related practical experience</span>
            </div>

            <div className="section-content">
              <div className="retail-sector-heading">
                <h2 id="retail-title">
                  Retail &amp;
                  <br />
                  Self-Service Technology
                </h2>

                <p>
                  Related experience across technology markets shaped by
                  physical devices, operating environments, and cooperation
                  between manufacturers, distributors, system integrators,
                  solution providers, operators, and commercial customers.
                </p>
              </div>

              <div
                className="environment-line"
                aria-label="Relevant retail and self-service environments"
              >
                {[
                  "Point of sale",
                  "Kiosks",
                  "Vending",
                  "Parking",
                  "Transportation",
                  "Other unattended applications",
                ].map((item, index) => (
                  <span key={item}>
                    <i>0{index + 1}</i>
                    {item}
                  </span>
                ))}
              </div>

              <p className="retail-support">
                Where there is a credible fit, Nelva may assess the market,
                identify and qualify relevant organisations, develop
                commercial relationships, support technical and commercial
                discussions, and maintain structured follow-up.
              </p>
            </div>
          </div>
        </section>

        <section
          className="adjacent-markets section-space"
          aria-labelledby="adjacent-title"
        >
          <div className="shell adjacent-grid">
            <div className="adjacent-index">
              <span>03</span>
              <strong>Selected adjacent opportunities</strong>
            </div>

            <div className="adjacent-content">
              <p className="eyebrow">Broader Technology Markets</p>

              <h2 id="adjacent-title">
                Considered selectively—not presented as equal specialisation.
              </h2>

              <div className="adjacent-copy">
                <p>
                  The underlying method may be applied in other B2B technology
                  sectors when the product, commercial objective, available
                  experience, and relevant market context provide a credible
                  basis for Nelva to contribute.
                </p>

                <p>
                  Any support is defined by the agreed scope and may include
                  assessment, target identification, customer and partner
                  qualification, commercial relationship development,
                  coordination, and opportunity follow-up.
                </p>
              </div>

              <p className="adjacent-boundary">
                Nelva does not claim to manufacture, install, engineer,
                integrate, certify, test, or maintain the underlying technical
                systems.
              </p>
            </div>
          </div>
        </section>

        <section
          className="ecosystems section-space"
          aria-labelledby="ecosystems-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>Context</span>
              <span>Commercial ecosystems</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="ecosystems-title">
                  Different organisations. Clearly defined roles.
                </h2>

                <p>
                  The same organisation may occupy a different role in
                  different engagements. Nelva defines who the client is, who
                  may be a customer, and who may be assessed or developed as a
                  channel or partner.
                </p>
              </div>

              <div className="ecosystem-rows">
                <article>
                  <span>01 / Primary client</span>
                  <h3>Payment and technology manufacturers</h3>

                  <p>
                    May engage Nelva for Market &amp; Channel Readiness,
                    customer and partner qualification, Manufacturer
                    Representation, commercial relationship development, and
                    opportunity follow-up.
                  </p>
                </article>

                <article>
                  <span>02 / Client</span>
                  <h3>Distributors &amp; system integrators</h3>

                  <p>
                    May engage Nelva for international market development,
                    manufacturer or supplier identification, commercial
                    relationship development, and Technical &amp; Commercial
                    Coordination.
                  </p>
                </article>

                <article>
                  <span>03 / Potential channel</span>
                  <h3>Distributors &amp; system integrators</h3>

                  <p>
                    When Nelva works for a manufacturer, relevant organisations
                    may be identified, assessed, qualified, and developed as
                    possible commercial channels.
                  </p>
                </article>

                <article>
                  <span>04 / Market participant</span>
                  <h3>
                    Payment service providers &amp; technology organisations
                  </h3>

                  <p>
                    May be relevant customers, partners, channels, or market
                    participants depending on the product and agreed
                    engagement.
                  </p>
                </article>
              </div>

              <p className="ecosystem-note">
                No organisation is presented as a Nelva customer, partner, or
                representative unless that relationship has been confirmed.
              </p>
            </div>
          </div>
        </section>

        <section
          className="contact-cta section-space"
          aria-labelledby="industries-contact-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>Next</span>
              <span>Commercial conversation</span>
            </div>

            <div className="section-content contact-content">
              <h2 id="industries-contact-title">
                Discuss your product, target market, and channel objective.
              </h2>

              <div className="contact-copy-row">
                <p>
                  Tell Nelva about the product, commercial environment,
                  current situation, and the type of customer, channel, or
                  partner being considered.
                </p>

                <a className="button button-blue" href="/contact">
                  Request an initial commercial briefing <Arrow />
                </a>
              </div>
            </div>
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
