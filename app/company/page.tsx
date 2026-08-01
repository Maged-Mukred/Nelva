"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const principles = [
  [
    "01",
    "Relevance before volume",
    "Focus on organisations, channels, and opportunities that are relevant to the product and agreed commercial objective.",
  ],
  [
    "02",
    "Qualification before commitment",
    "Assess customers, distributors, system integrators, and other potential partners before significant time or resources are committed.",
  ],
  [
    "03",
    "Clear technical and commercial communication",
    "Help the parties involved understand the product, application, market context, and agreed next steps.",
  ],
  [
    "04",
    "Direct involvement",
    "Provide clients with direct access to the person responsible for the agreed engagement.",
  ],
  [
    "05",
    "Disciplined follow-up",
    "Maintain continuity around agreed actions and qualified opportunities rather than relying on one-off introductions.",
  ],
  [
    "06",
    "Accurate representation",
    "Present Nelva’s role, experience, capabilities, and authority without overstatement.",
  ],
];

const operatingStages = [
  "Assess",
  "Identify",
  "Qualify",
  "Develop",
  "Coordinate",
  "Advance",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Wordmark() {
  return <span className="wordmark-text">NELVA</span>;
}

export default function CompanyPage() {
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
            <a href="/company" aria-current="page">
              Company
            </a>
            <a href="/capabilities">Capabilities</a>
            <a href="/industries">Industries</a>
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
                aria-current={label === "Company" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
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
          className="company-hero shell"
          aria-labelledby="company-title"
        >
          <div className="company-hero-meta">
            <span>
              <i className="signal-dot" /> Company
            </span>

            <span>Espoo, Finland / International perspective</span>
          </div>

          <div className="company-hero-grid">
            <h1 id="company-title">
              A specialist company for better market and channel decisions.
            </h1>

            <div>
              <p>
                Nelva helps payment and technology manufacturers assess a
                market, identify and qualify relevant commercial channels, and
                develop credible opportunities before making a larger
                market-entry commitment.
              </p>

              <span>
                A new Finnish business built on established professional
                experience.
              </span>
            </div>
          </div>

          <div className="company-definition">
            <span>Nelva / Defined</span>
            <strong>International market development</strong>
            <span>Payment and technology manufacturers</span>
          </div>
        </section>

        <section
          className="company-purpose section-space"
          aria-labelledby="purpose-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>01</span>
              <span>Why Nelva</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="purpose-title">
                  Better-informed decisions before larger commercial
                  commitments.
                </h2>

                <p>
                  Entering a market, appointing a distributor, or hiring local
                  commercial capacity can require significant time, resources,
                  and difficult-to-reverse decisions.
                </p>
              </div>

              <div className="purpose-statement">
                <span>Nelva’s role</span>

                <p>
                  Bring market assessment, channel identification,
                  qualification, commercial relationship development, technical
                  and commercial coordination, and opportunity follow-up into
                  one structured process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="finland-foundation section-space"
          aria-labelledby="finland-title"
        >
          <div className="shell finland-grid">
            <div className="finland-aside">
              <span>60.2055° N</span>

              <strong>
                ESPOO
                <br />
                FINLAND
              </strong>

              <span>24.6559° E</span>
            </div>

            <div className="finland-copy">
              <p className="eyebrow">Finland-based foundation</p>

              <h2 id="finland-title">
                Based in Finland. Defined by the agreed market objective.
              </h2>

              <p>
                Nelva operates from Espoo, Finland. Its work is shaped around
                the client’s product, target market, commercial objective, and
                the relevant technology ecosystem.
              </p>

              <p>
                Nelva does not claim permanent coverage, representation, or
                authority in every market. Each engagement defines the scope,
                responsibilities, relevant parties, and practical limits of
                Nelva’s involvement.
              </p>
            </div>
          </div>
        </section>

        <section
          className="professional-foundation section-space"
          aria-labelledby="experience-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>02</span>
              <span>Professional foundation</span>
            </div>

            <div className="section-content experience-grid">
              <div>
                <h2 id="experience-title">
                  A new business built on more than ten years of relevant
                  professional experience.
                </h2>

                <p>
                  Nelva is newly established. The business itself has not
                  operated for more than ten years.
                </p>
              </div>

              <div className="experience-fields">
                <span>International technology markets</span>
                <span>Payment technology</span>
                <span>Android payment terminals</span>
                <span>Manufacturer representation</span>
                <span>Distributor and system-integrator development</span>
                <span>Technical &amp; commercial coordination</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="founder-section section-space"
          aria-labelledby="founder-name"
        >
          <div className="shell founder-grid">
            <div className="founder-monogram" aria-hidden="true">
              <span>MM</span>
              <i />
            </div>

            <div className="founder-copy">
              <p className="eyebrow">Founder</p>

              <h2 id="founder-name">Maged Mukred</h2>

              <strong>
                Founder &amp; International Market Development Lead
              </strong>

              <p>
                Maged Mukred is the founder of Nelva. He brings more than ten
                years of relevant professional experience across international
                technology markets, with particular experience in payment
                technology, Android payment terminals, manufacturer
                representation, and technical and commercial coordination.
              </p>

              <p>
                His experience includes working with manufacturers,
                distributors, payment service providers, system integrators,
                and other commercial partners across different markets.
              </p>
            </div>
          </div>
        </section>

        <section
          className="operating-principles section-space"
          aria-labelledby="principles-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>03</span>
              <span>Operating model</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="principles-title">
                  A disciplined method from assessment to commercial progress.
                </h2>

                <p>
                  Each engagement follows an agreed scope and uses the stages
                  required to understand the market, qualify relevant parties,
                  and advance credible next steps.
                </p>
              </div>

              <ol className="process-track">
                {operatingStages.map((stage, index) => (
                  <li key={stage}>
                    <span className="process-number">0{index + 1}</span>
                    <span className="process-node" aria-hidden="true" />
                    <strong>{stage}</strong>
                  </li>
                ))}
              </ol>

              <ol className="principle-grid">
                {principles.map(([number, title, description]) => (
                  <li key={title}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="engagement-boundary section-space"
          aria-labelledby="boundary-title"
        >
          <div className="shell boundary-grid">
            <div>
              <span>Scope / authority</span>
              <strong>Defined by the agreed engagement</strong>
            </div>

            <div>
              <h2 id="boundary-title">
                A focused commercial role, represented accurately.
              </h2>

              <p>
                Nelva supports international market development, customer and
                partner qualification, commercial relationship development,
                Manufacturer Representation, Technical &amp; Commercial
                Coordination, and opportunity follow-up.
              </p>

              <p>
                Nelva does not present itself as a manufacturer, payment
                software provider, certification laboratory, engineering
                contractor, or complete systems integrator.
              </p>

              <p>
                Manufacturer Representation does not automatically include
                exclusivity, legal agency authority, authority to sign
                contracts, or authority to make commitments on behalf of a
                manufacturer.
              </p>
            </div>
          </div>
        </section>

        <section
          className="contact-cta section-space"
          aria-labelledby="company-contact-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>Next</span>
              <span>Commercial conversation</span>
            </div>

            <div className="section-content contact-content">
              <h2 id="company-contact-title">
                Discuss whether Nelva fits your market and channel objective.
              </h2>

              <div className="contact-copy-row">
                <p>
                  Tell Nelva about your product, target market, current
                  commercial situation, and the support you are considering.
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
