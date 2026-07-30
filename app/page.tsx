"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    number: "01",
    title: "Assess",
    text: "Understand the product, its applications, commercial position, target markets, and relevant constraints.",
  },
  {
    number: "02",
    title: "Identify",
    text: "Map the market ecosystem and identify relevant customer segments, channels, partners, and commercial entry points.",
  },
  {
    number: "03",
    title: "Qualify",
    text: "Prioritise target accounts by product fit, market relevance, decision-making role, and realistic commercial potential.",
  },
  {
    number: "04",
    title: "Develop",
    text: "Initiate professional outreach and build relationships with relevant customers, partners, and decision-makers.",
  },
  {
    number: "05",
    title: "Coordinate",
    text: "Support technical and commercial communication, meetings, documentation, samples, evaluations, and offers.",
  },
  {
    number: "06",
    title: "Advance",
    text: "Maintain structured follow-up, communicate market feedback, and move qualified opportunities toward practical next steps.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "International Market & Sales Development",
    text: "Market assessment, commercial intelligence, qualified target-account development, partner identification, professional outreach, relationship development, and structured follow-up.",
    note: "Intelligence → qualification → commercial progression",
  },
  {
    number: "02",
    title: "Technology Sourcing & Commercial Coordination",
    text: "Identify and evaluate suitable technologies, manufacturers, suppliers, and production partners—then coordinate specifications, samples, offers, and early commercial discussions across borders.",
    note: "Particularly across Europe and Asia",
  },
  {
    number: "03",
    title: "Payment Technology Advisory & Integration Support",
    text: "Support device selection, initial suitability assessment, requirements coordination, samples, evaluations, and communication between manufacturers, customers, and technical partners.",
    note: "Advisory and coordination focused",
  },
];

const markets = [
  {
    title: "Payment Technology",
    tag: "Specialist depth",
    text: "Nelva’s strongest specialist area: payment devices, Android terminals, Smart POS and mPOS, attended and unattended environments, and the ecosystems around their deployment.",
  },
  {
    title: "Retail & Self-Service Technology",
    tag: "Practical experience",
    text: "Related experience across POS environments, kiosks, vending, parking, transportation, and other unattended or self-service applications.",
  },
  {
    title: "Broader Technology Markets",
    tag: "Selected opportunities",
    text: "Market-development support for adjacent B2B technology areas—including security, access control, network devices, and telecommunications—where relevant product fit and commercial access can be developed.",
  },
];

const proofPoints = [
  "Manufacturer representation",
  "Distributor & integrator development",
  "Technical-commercial coordination",
  "Attended & unattended payment environments",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="Nelva home">
            NELVA
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#company">Company</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
            <a className="nav-cta" href="#contact">
              Start a conversation <Arrow />
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="menu-mark" aria-hidden="true">
              {menuOpen ? "×" : "＋"}
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <nav className="shell mobile-nav" aria-label="Mobile navigation">
            <a href="#company" onClick={closeMenu}>Company <Arrow /></a>
            <a href="#capabilities" onClick={closeMenu}>Capabilities <Arrow /></a>
            <a href="#industries" onClick={closeMenu}>Industries <Arrow /></a>
            <a href="#contact" onClick={closeMenu}>Contact <Arrow /></a>
          </nav>
          <div className="shell mobile-menu-meta">
            <span>Espoo, Finland</span>
            <span>nelvaglobal.com</span>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero shell">
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            <span>Based in Espoo, Finland</span>
            <span className="kicker-separator">International in scope</span>
          </div>
          <div className="hero-content">
            <h1>
              International market development for technology manufacturers.
            </h1>
            <div className="hero-support">
              <p>
                Nelva helps technology manufacturers assess markets, identify
                and qualify relevant customers and partners, develop
                commercial relationships, and coordinate technical and
                commercial opportunities internationally.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#contact">
                  Discuss your market objectives <Arrow />
                </a>
                <a className="text-link" href="#capabilities">
                  Explore our capabilities <Arrow />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>N / 60.2055° N</span>
            <span>E / 24.6559° E</span>
          </div>
        </section>

        <section id="company" className="section section-dark problem">
          <div className="shell grid-12">
            <div className="section-aside">
              <span className="eyebrow light">01 / Market challenge</span>
            </div>
            <div className="section-main">
              <h2>
                Market activity creates greater value when it follows a clear
                commercial direction.
              </h2>
              <div className="problem-grid">
                <p className="problem-lead">
                  Exhibitions, market visits, distributor meetings, samples,
                  and commercial offers can all create valuable opportunities.
                </p>
                <p>
                  Their impact is stronger when guided by relevant market
                  intelligence, suitable targets, careful qualification, and
                  consistent follow-up. Nelva connects these activities to a
                  clear commercial objective.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="shell grid-12">
            <div className="section-aside">
              <span className="eyebrow">02 / Operating model</span>
              <p className="aside-note">A disciplined path, adapted to the engagement.</p>
            </div>
            <div className="section-main">
              <div className="section-heading">
                <h2>A structured process shaped around the market objective.</h2>
                <p>
                  Engagements may cover selected stages or a broader programme,
                  with scope and responsibilities agreed for each assignment.
                </p>
              </div>
              <ol className="stage-list">
                {stages.map((stage) => (
                  <li key={stage.number} className="stage-row">
                    <span className="stage-number">{stage.number}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </li>
                ))}
              </ol>
              <p className="scope-note">
                The process adapts to the product, market objective, and agreed scope.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section section-soft capabilities">
          <div className="shell">
            <div className="section-topline">
              <span className="eyebrow">03 / Capabilities</span>
              <a className="text-link" href="#contact">
                Discuss a scope <Arrow />
              </a>
            </div>
            <div className="capability-intro grid-12">
              <h2 className="section-main">
                Connected capabilities for international technology business.
              </h2>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-item" key={capability.number}>
                  <div className="capability-meta">
                    <span>{capability.number}</span>
                    <span>{capability.note}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-labelledby="proof-title">
          <div className="shell proof-grid">
            <div>
              <span className="eyebrow">Practical foundation</span>
              <h2 id="proof-title">Experience across the technology value chain.</h2>
            </div>
            <ul>
              {proofPoints.map((point, index) => (
                <li key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="industries" className="section markets">
          <div className="shell grid-12">
            <div className="section-aside">
              <span className="eyebrow">04 / Technology markets</span>
              <p className="aside-note">
                Different markets. Deliberately differentiated depth.
              </p>
            </div>
            <div className="section-main">
              <div className="section-heading">
                <h2>Focused experience across connected technology markets.</h2>
                <p>
                  Supporting manufacturers, distributors, system integrators,
                  and technology partners across selected markets.
                </p>
              </div>
              <div className="market-list">
                {markets.map((market, index) => (
                  <article className="market-row" key={market.title}>
                    <span className="market-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{market.title}</h3>
                      <p>{market.text}</p>
                    </div>
                    <span className="market-tag">{market.tag}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section credibility">
          <div className="shell credibility-grid">
            <div className="credibility-label">
              <span className="eyebrow light">05 / International foundation</span>
              <div className="coordinate-mark" aria-hidden="true">
                <span />
                <span />
              </div>
            </div>
            <div className="credibility-main">
              <h2>Based in Finland. Focused on international technology markets.</h2>
              <p className="experience">
                Nelva is built on more than ten years of experience in
                international technology markets.
              </p>
              <p className="international-copy">
                Based in Espoo, Finland, Nelva supports international
                technology business development, with experience and
                professional relationships across Europe, the Middle East,
                Africa, and China.
              </p>
              <div className="region-line" aria-label="Relevant international markets">
                <span>Europe</span>
                <span>Middle East</span>
                <span>Africa</span>
                <span>China</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="shell contact-grid">
            <span className="eyebrow">06 / Start a conversation</span>
            <div className="contact-main">
              <h2>Exploring a new market or reconsidering your current approach?</h2>
              <p>
                Share your product, target market, or commercial objective.
                Nelva can help clarify the relevant questions, potential entry
                points, and a practical scope for further discussion.
              </p>
              <a className="button button-blue" href="#contact">
                Explore your next market opportunity <Arrow />
              </a>
              <p className="contact-note">
                Contact details will be added when the official channel is confirmed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <a className="wordmark footer-wordmark" href="#top">NELVA</a>
            <p>Structured commercial execution for international technology markets.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Navigate</span>
            <a href="#company">Company</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Corporate</span>
            <span>Espoo, Finland</span>
            <span>Business ID 3574517-6</span>
            <span>nelvaglobal.com</span>
          </div>
          <div className="footer-end">
            <span>© 2026 Nelva</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
