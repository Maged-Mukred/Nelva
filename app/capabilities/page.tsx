"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stages = [
  [
    "01",
    "Assess",
    "Understand the product, application, market context, and commercial objective.",
  ],
  [
    "02",
    "Identify",
    "Find relevant customers, channels, partners, and market participants.",
  ],
  [
    "03",
    "Qualify",
    "Evaluate fit, commercial capability, relevance, and realistic potential.",
  ],
  [
    "04",
    "Develop",
    "Initiate and develop relationships with relevant organisations.",
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

const readinessCapabilities = [
  {
    number: "01",
    title: "Market & Channel Readiness Assessment",
    headline:
      "Clarify the commercial questions before making a larger commitment.",
    text: "Nelva examines the product, target-market objective, commercial assumptions, possible customer and channel types, qualification criteria, and the questions that require validation.",
    details: [
      "Product and application context",
      "Target-market objective",
      "Commercial assumptions",
      "Realistic next steps",
    ],
  },
  {
    number: "02",
    title: "Target Identification",
    headline:
      "Identify the organisations and channel types relevant to the objective.",
    text: "Research is directed by the agreed engagement and may cover customers, distributors, system integrators, payment service providers, solution providers, manufacturers, and other relevant market participants.",
    details: [
      "Relevant market participants",
      "Customer and channel roles",
      "Decision-making relevance",
      "Actionable target organisations",
    ],
  },
  {
    number: "03",
    id: "customer-partner-qualification",
    title: "Customer & Partner Qualification",
    headline:
      "Distinguish credible commercial fit from general market interest.",
    text: "Potential organisations may be assessed according to product relevance, market role, customer access, technical context, commercial capability, and realistic potential for further discussion.",
    details: [
      "Product relevance",
      "Market role",
      "Commercial capability",
      "Realistic opportunity",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Wordmark() {
  return <span className="wordmark-text">NELVA</span>;
}

export default function CapabilitiesPage() {
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
            <a href="/capabilities" aria-current="page">
              Capabilities
            </a>
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
                onClick={() => setMenuOpen(false)}
                aria-current={label === "Capabilities" ? "page" : undefined}
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
          className="cap-page-hero shell"
          aria-labelledby="capabilities-title"
        >
          <div className="cap-page-kicker">
            <span className="signal-dot" /> Capabilities
            <span>01—07</span>
          </div>

          <div className="cap-page-hero-grid">
            <h1 id="capabilities-title">
              Capabilities for better market and channel decisions.
            </h1>

            <div className="cap-page-intro">
              <p>
                Nelva helps payment and technology manufacturers assess a
                market, identify and qualify relevant commercial channels,
                develop relationships, coordinate discussions, and advance
                credible opportunities within an agreed scope.
              </p>

              <a className="text-link" href="#capability-sequence">
                Explore the capabilities{" "}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <ol className="cap-page-index" aria-label="Operating method">
            {stages.map(([number, title]) => (
              <li key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="capability-sequence"
          className="cap-research section-space"
          aria-labelledby="research-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>01—03</span>
              <span>Market &amp; Channel Readiness</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="research-title">
                  Begin with a more informed basis for market-entry decisions.
                </h2>

                <p>
                  The initial work connects market assessment, target
                  identification, and qualification so that a manufacturer can
                  evaluate realistic next steps before appointing a
                  distributor, hiring locally, or making a wider market-entry
                  investment.
                </p>
              </div>

              <div className="research-sequence">
                {readinessCapabilities.map((item) => (
                  <articleid={item.id}className="research-step"key={item.number}>
                    <div className="research-step-heading">
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                    </div>

                    <div className="research-step-body">
                      <h4>{item.headline}</h4>
                      <p>{item.text}</p>
                    </div>

                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <p className="cap-boundary">
                <span>Commercial boundary</span>
                Target identification is not the sale of generic contact lists,
                and qualification does not guarantee the suitability,
                performance, or future commitment of any organisation.
              </p>
            </div>
          </div>
        </section>

        <section
          className="representation section-space"
          aria-labelledby="representation-title"
        >
          <div className="shell representation-grid">
            <div className="representation-label">
              <span>04</span>
              <span>Current capability</span>
              <span className="representation-marker">MR</span>
            </div>

            <div className="representation-content">
              <p className="eyebrow">Manufacturer Representation</p>

              <h2 id="representation-title">
                Represent a manufacturer’s commercial interests within an
                agreed market and scope.
              </h2>

              <p className="representation-lead">
                Nelva may support a technology manufacturer by developing
                relevant relationships, coordinating agreed commercial
                activity, and maintaining continuity around qualified
                opportunities.
              </p>

              <div className="representation-actions">
                <ul>
                  <li>Identify relevant customers and commercial channels</li>
                  <li>Assess distributors and system integrators</li>
                  <li>Initiate and develop commercial relationships</li>
                  <li>
                    Coordinate agreed technical and commercial discussions
                  </li>
                  <li>Maintain structured opportunity follow-up</li>
                </ul>

                <div className="representation-scope">
                  <span>Defined separately for every engagement</span>

                  <p>
                    Manufacturer Representation does not automatically include
                    exclusivity, legal agency authority, authority to sign
                    contracts, or authority to make commitments on behalf of
                    the manufacturer.
                  </p>
                </div>
              </div>

              <a className="button button-light" href="/contact">
                Discuss a representation requirement <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className="cap-connection section-space"
          aria-labelledby="connection-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>05—06</span>
              <span>Develop &amp; coordinate</span>
            </div>

            <div className="section-content">
              <h2 id="connection-title">
                Develop qualified relationships and coordinate practical
                discussions.
              </h2>

              <div
                className="connection-map"
                aria-label="Nelva coordinates communication between manufacturers and relevant market participants"
              >
                <span>Manufacturer</span>
                <i aria-hidden="true" />
                <strong>Nelva</strong>
                <i aria-hidden="true" />
                <span>Relevant market participant</span>
              </div>

              <div className="connection-columns">
                <article>
                  <span>05</span>
                  <h3>Commercial Relationship Development</h3>

                  <p>
                    Initiate communication with qualified organisations,
                    explain the commercial context, support early discussions,
                    and develop relationships as relevance and realistic
                    potential become clearer.
                  </p>
                </article>

                <article>
                  <span>06</span>
                  <h3>Technical &amp; Commercial Coordination</h3>

                  <p>
                    Coordinate agreed product information, initial
                    requirements, technical questions, commercial discussions,
                    and next steps between the manufacturer and relevant market
                    participants.
                  </p>
                </article>
              </div>

              <p className="cap-boundary cap-boundary-dark">
                <span>Technical boundary</span>
                Nelva does not perform complete systems integration,
                engineering delivery, official certification, laboratory
                testing, or independent product validation.
              </p>
            </div>
          </div>
        </section>

        <section
          className="cap-follow section-space"
          aria-labelledby="follow-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>07</span>
              <span>Opportunity follow-up</span>
            </div>

            <div className="section-content follow-grid">
              <div>
                <h2 id="follow-title">
                  Maintain continuity around qualified opportunities.
                </h2>

                <p>
                  Follow-up may cover meetings, agreed product information,
                  commercial questions, samples, early evaluations, offers,
                  market feedback, and the practical next steps agreed between
                  the parties.
                </p>
              </div>

              <div className="follow-note">
                <span>Purpose</span>

                <strong>
                  Keep relevant opportunities organised and moving towards
                  informed commercial decisions.
                </strong>

                <p>
                  Opportunity follow-up does not guarantee sales, contracts,
                  partner suitability, or successful market entry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="client-context section-space"
          aria-labelledby="client-context-title"
        >
          <div className="shell client-context-grid">
            <div className="client-context-label">
              <span>Client context</span>

              <strong>
                Distributors &amp;
                <br />
                system integrators
              </strong>
            </div>

            <div className="client-context-content">
              <p className="eyebrow">When they engage Nelva as clients</p>

              <h2 id="client-context-title">
                International commercial support from the client side of the
                relationship.
              </h2>

              <p>
                Distributors and system integrators may engage Nelva directly
                for international market development, manufacturer or supplier
                identification, commercial relationship development, and
                Technical &amp; Commercial Coordination.
              </p>

              <p className="context-separation">
                This is separate from situations where Nelva identifies,
                assesses, or develops them as a possible commercial channel for
                a manufacturer.
              </p>
            </div>
          </div>
        </section>

        <section
           id="operating-method"
  className="cap-process section-space"
  aria-labelledby="cap-process-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>Method</span>
              <span>How Nelva works</span>
            </div>

            <div className="section-content">
              <div className="heading-pair">
                <h2 id="cap-process-title">
                  A disciplined path from assessment to qualified commercial
                  progress.
                </h2>

                <p>
                  Each engagement follows an agreed scope and uses the stages
                  required for the product, target market, commercial
                  objective, and current situation.
                </p>
              </div>

              <ol className="detailed-process">
                {stages.map(([number, title, text]) => (
                  <li key={title}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="contact-cta section-space"
          aria-labelledby="cap-contact-title"
        >
          <div className="shell grid-12">
            <div className="section-index">
              <span>Next</span>
              <span>Commercial conversation</span>
            </div>

            <div className="section-content contact-content">
              <h2 id="cap-contact-title">
                Discuss a Market &amp; Channel Readiness Assessment.
              </h2>

              <div className="contact-copy-row">
                <p>
                  Tell Nelva about your product, target market, current
                  commercial situation, and the type of support you are
                  considering.
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
