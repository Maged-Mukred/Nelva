"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const capabilityGateways = [
  {
    number: "01",
    title: "Market Assessment and Target Identification",
    text: "Assess the commercial context and identify relevant customers, distributors, system integrators, payment service providers, and other market participants.",
  },
  {
    number: "02",
    title: "Customer and Partner Qualification",
    text: "Evaluate potential organisations according to product relevance, market role, commercial capability, and realistic opportunity.",
  },
  {
    number: "03",
    title: "Commercial Relationship Development & Manufacturer Representation",
    text: "Develop relevant relationships and represent a manufacturer’s commercial interests within an agreed market and scope.",
    featured: true,
  },
  {
    number: "04",
    title: "Technical & Commercial Coordination",
    text: "Connect manufacturers with market participants, support discussions, coordinate agreed information, and maintain follow-up around qualified opportunities.",
  },
];

const stages = ["Assess", "Identify", "Qualify", "Develop", "Coordinate", "Advance"];

const focusAreas = [
  "Android payment terminals",
  "Attended environments",
  "Unattended environments",
  "Manufacturer representation",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Wordmark() {
  return <span className="wordmark-text">NELVA</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
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
            <a href="/contact">Contact</a>
            <a className="header-cta" href="/contact">
              Discuss Market & Channel Readiness <Arrow />
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
              <a href={href} key={label} onClick={() => setMenuOpen(false)}>
                <span className="mobile-nav-index">0{index + 1}</span>
                <span>{label}</span>
                <Arrow />
              </a>
            ))}
            <a className="mobile-primary-cta" href="/contact" onClick={() => setMenuOpen(false)}>
              Discuss your market objectives <Arrow />
            </a>
          </nav>
          <div className="shell mobile-menu-meta">
            <span>Espoo, Finland</span>
            <span>Business ID 3574517-6</span>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-label">
            <span className="signal-dot" />
            <span>International market development</span>
            <span className="hero-location">Based in Espoo, Finland</span>
          </div>

          <div className="hero-title-wrap">
            <h1 id="hero-title">Make better market and channel decisions before committing to market entry.</h1>
          </div>

          <div className="hero-copy">
            <p>
               Nelva helps payment and technology manufacturers assess a market,
  identify and qualify the right commercial channels, and develop
  credible opportunities before committing to a distributor, local
  hire, or wider market-entry investment.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="/contact">
                Discuss your market objectives <Arrow />
              </a>
              <a className="text-link" href="/capabilities">
                Explore our capabilities <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-proof" aria-label="Relevant experience">
            <span className="hero-proof-label">Relevant foundation</span>
            <span>Payment technology</span>
            <span>Manufacturer representation</span>
            <span>Technical &amp; commercial coordination</span>
          </div>
        </section>

        <section className="challenge section-dark" aria-labelledby="challenge-title">
          <div className="shell grid-12">
            <div className="section-index light">
              <span>01</span>
              <span>Market challenge</span>
            </div>
            <div className="section-content">
              <h2 id="challenge-title">Early interest is not enough to justify a market-entry commitment.</h2>
              <div className="challenge-copy">
                <p className="lead">
                  A list of companies, early interest, or potential channels does not
  by itself establish a credible market opportunity.
                </p>
                <div>
                  <p>
                    The challenge is determining which customers, distributors, and
  commercial partners are genuinely relevant before committing time,
  resources, or market-entry investment.
                  </p>
                  <p className="challenge-close">
                     Nelva brings assessment, qualification, relationship development, and
  follow-up together around credible commercial next steps.
                  </p>
                </div>
              </div>
              <a className="text-link text-link-light" href="/capabilities">
                Explore how Nelva works <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="capabilities section-space" aria-labelledby="capabilities-title">
          <div className="shell">
            <div className="section-header grid-12">
              <div className="section-index">
                <span>02</span>
                <span>Capabilities</span>
              </div>
              <div className="section-content heading-pair">
                <h2 id="capabilities-title">Practical support across the market-development process.</h2>
                <p>
                  Four connected capability areas, shaped around the agreed market objective.
                </p>
              </div>
            </div>

            <div className="capability-list">
              {capabilityGateways.map((capability) => (
                <a
                  className={`capability-row ${capability.featured ? "is-featured" : ""}`}
                  href="/capabilities"
                  key={capability.number}
                >
                  <span className="capability-number">{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                  <span className="capability-arrow"><Arrow /></span>
                </a>
              ))}
            </div>

            <div className="section-end-link">
              <a className="text-link" href="/capabilities">
                View all capabilities <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="process section-soft" aria-labelledby="process-title">
          <div className="shell section-space">
            <div className="section-header grid-12">
              <div className="section-index">
                <span>03</span>
                <span>Working process</span>
              </div>
              <div className="section-content heading-pair">
                <h2 id="process-title">A clear path from market understanding to practical next steps.</h2>
                <p>
                  An engagement may involve selected stages or a broader agreed scope.
                </p>
              </div>
            </div>

            <ol className="process-track">
              {stages.map((stage, index) => (
                <li key={stage}>
                  <span className="process-number">0{index + 1}</span>
                  <span className="process-node" aria-hidden="true" />
                  <strong>{stage}</strong>
                </li>
              ))}
            </ol>

            <div className="process-note">
              <span>Scope principle</span>
              <p>
                The process supports informed commercial activity. It does not
                guarantee sales, contracts, partner suitability, or successful market entry.
              </p>
              <a className="text-link" href="/capabilities">
                Explore the working process <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="industries section-space" aria-labelledby="industries-title">
          <div className="shell">
            <div className="section-header grid-12">
              <div className="section-index">
                <span>04</span>
                <span>Industry experience</span>
              </div>
              <div className="section-content heading-pair">
                <h2 id="industries-title">Focused experience in connected technology markets.</h2>
                <p>Payment Technology represents Nelva’s strongest specialist area.</p>
              </div>
            </div>

            <div className="industry-layout">
              <article className="industry-primary">
                <div className="industry-topline">
                  <span>01 / Strongest specialist area</span>
                  <span className="industry-mark" aria-hidden="true">P</span>
                </div>
                <div className="industry-primary-copy">
                  <h3>Payment Technology</h3>
                  <p>
                    Nelva’s deepest relevant professional experience is in
                    payment technology, including Android payment terminals and
                    attended and unattended payment environments.
                  </p>
                  <ul>
                    {focusAreas.map((area) => <li key={area}>{area}</li>)}
                  </ul>
                </div>
                <a href="/industries">Explore payment technology <Arrow /></a>
              </article>

              <div className="industry-secondary-group">
                <article className="industry-secondary">
                  <span className="industry-label">02 / Related practical experience</span>
                  <h3>Retail &amp; Self-Service Technology</h3>
                  <p>
                    Relevant experience across retail, point-of-sale, and
                    self-service environments where manufacturers depend on
                    suitable channels and effective technical and commercial communication.
                  </p>
                  <a href="/industries">Explore this area <Arrow /></a>
                </article>
                <article className="industry-adjacent">
                  <span className="industry-label">03 / Selected adjacent opportunities</span>
                  <h3>Broader Technology Markets</h3>
                  <p>
                    Considered where the product, objective, and available
                    experience provide a credible basis to contribute.
                  </p>
                  <a href="/industries">View industry scope <Arrow /></a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="foundation" aria-labelledby="foundation-title">
          <div className="shell foundation-grid">
            <div className="foundation-aside">
              <div className="section-index light">
                <span>05</span>
                <span>Company</span>
              </div>
              <div className="foundation-coordinate" aria-hidden="true">
                <span>60.2055° N</span>
                <span>24.6559° E</span>
              </div>
            </div>
            <div className="foundation-content">
              <h2 id="foundation-title">A new Finnish company built on established professional experience.</h2>
              <p className="foundation-lead">
                Nelva is a newly established company based in Espoo, Finland.
                It is built on the founder’s more than ten years of relevant
                professional experience in international technology markets.
              </p>
              <p>
                This experience includes payment and self-service technology,
                Android payment terminals, manufacturer representation,
                distributor and system-integrator development, and technical
                and commercial support.
              </p>
              <a className="text-link text-link-light" href="/company">
                Learn about Nelva <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-cta section-space" aria-labelledby="contact-title">
          <div className="shell grid-12">
            <div className="section-index">
              <span>06</span>
              <span>Start a conversation</span>
            </div>
            <div className="section-content contact-content">
              <h2 id="contact-title">Discuss your next market opportunity.</h2>
              <div className="contact-copy-row">
                <p>
                  Whether you are a manufacturer considering market development
                  or representation, or a distributor or system integrator
                  seeking international commercial support, begin by telling
                  Nelva about your objective.
                </p>
                <a className="button button-blue" href="/contact">
                  Start a conversation <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Link className="wordmark footer-wordmark" href="/" aria-label="Nelva home">
              <Wordmark />
            </Link>
            <p>International market development for technology manufacturers.</p>
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
