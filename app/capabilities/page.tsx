"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stages = [
  ["01", "Assess", "Understand the product, applications, objective, and commercial context."],
  ["02", "Identify", "Find relevant customers, channels, partners, and market entry points."],
  ["03", "Qualify", "Assess relevance, capability, market role, and realistic potential."],
  ["04", "Develop", "Initiate communication and build relevant commercial relationships."],
  ["05", "Coordinate", "Support technical and commercial discussions between the parties."],
  ["06", "Advance", "Maintain follow-up and support agreed next steps."],
];

const researchCapabilities = [
  {
    number: "01",
    title: "Market Assessment",
    headline: "Understand the commercial context before committing resources.",
    text: "Nelva examines the product, its applications, relevant customer segments, potential commercial channels, and the market participants surrounding the opportunity.",
    details: ["Relevant applications", "Potential customer segments", "Commercial channels", "Questions requiring validation"],
  },
  {
    number: "02",
    title: "Target Identification",
    headline: "Identify the organisations that matter to the objective.",
    text: "Research is directed by the agreed engagement and may cover customers, distributors, system integrators, payment service providers, solution providers, manufacturers, and suppliers.",
    details: ["Market participants", "Decision-making relevance", "Customer and channel roles", "Actionable target accounts"],
  },
  {
    number: "03",
    title: "Customer & Partner Qualification",
    headline: "Distinguish potential fit from general market interest.",
    text: "Potential organisations may be considered according to product relevance, market position, customer access, technical context, commercial capability, and realistic potential for further discussion.",
    details: ["Product relevance", "Market position", "Commercial capability", "Realistic opportunity"],
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
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
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
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="shell header-inner">
          <Link className="wordmark" href="/" aria-label="Nelva home"><Wordmark /></Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="/company">Company</a>
            <a href="/capabilities" aria-current="page">Capabilities</a>
            <a href="/industries">Industries</a>
            <a href="/contact">Contact</a>
            <a className="header-cta" href="/contact">Discuss your market objectives <Arrow /></a>
          </nav>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((value) => !value)}>
            <span>{menuOpen ? "Close" : "Menu"}</span><span className="menu-symbol" aria-hidden="true">{menuOpen ? "×" : "+"}</span>
          </button>
        </div>
        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
          <nav className="shell mobile-nav" aria-label="Mobile navigation">
            {[["Company", "/company"], ["Capabilities", "/capabilities"], ["Industries", "/industries"], ["Contact", "/contact"]].map(([label, href], index) => (
              <a href={href} key={label} onClick={() => setMenuOpen(false)} aria-current={label === "Capabilities" ? "page" : undefined}>
                <span className="mobile-nav-index">0{index + 1}</span><span>{label}</span><Arrow />
              </a>
            ))}
            <a className="mobile-primary-cta" href="/contact" onClick={() => setMenuOpen(false)}>Discuss your market objectives <Arrow /></a>
          </nav>
          <div className="shell mobile-menu-meta"><span>Espoo, Finland</span><span>Business ID 3574517-6</span></div>
        </div>
      </header>

      <main id="main">
        <section className="cap-page-hero shell" aria-labelledby="capabilities-title">
          <div className="cap-page-kicker"><span className="signal-dot" /> Capabilities <span>01—07</span></div>
          <div className="cap-page-hero-grid">
            <h1 id="capabilities-title">Connected capabilities for international technology market development.</h1>
            <div className="cap-page-intro">
              <p>Nelva can support selected parts of the market-development process or a broader agreed engagement—from assessment and target identification to representation, coordination, and opportunity follow-up.</p>
              <a className="text-link" href="#capability-sequence">Explore the capabilities <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <ol className="cap-page-index" aria-label="Capability coverage">
            {stages.map(([number, title]) => <li key={title}><span>{number}</span><strong>{title}</strong></li>)}
          </ol>
        </section>

        <section id="capability-sequence" className="cap-research section-space" aria-labelledby="research-title">
          <div className="shell grid-12">
            <div className="section-index"><span>01—03</span><span>Research & qualification</span></div>
            <div className="section-content">
              <div className="heading-pair">
                <h2 id="research-title">Build a more informed basis for market development.</h2>
                <p>Commercial market intelligence is integrated into the engagement. It connects assessment and target identification with qualification, outreach, and the practical decisions that follow.</p>
              </div>
              <div className="research-sequence">
                {researchCapabilities.map((item) => (
                  <article className="research-step" key={item.number}>
                    <div className="research-step-heading"><span>{item.number}</span><h3>{item.title}</h3></div>
                    <div className="research-step-body"><h4>{item.headline}</h4><p>{item.text}</p></div>
                    <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </article>
                ))}
              </div>
              <p className="cap-boundary"><span>Context</span> Target identification is not the sale of generic contact lists, and qualification does not guarantee the future suitability or performance of any organisation.</p>
            </div>
          </div>
        </section>

        <section className="representation section-space" aria-labelledby="representation-title">
          <div className="shell representation-grid">
            <div className="representation-label"><span>04</span><span>Current capability</span><span className="representation-marker">MR</span></div>
            <div className="representation-content">
              <p className="eyebrow">Manufacturer Representation</p>
              <h2 id="representation-title">Represent the manufacturer’s commercial interests within an agreed scope.</h2>
              <p className="representation-lead">Nelva may act as a focused commercial extension for a technology manufacturer in an agreed market—developing relevant relationships and maintaining continuity around qualified opportunities.</p>
              <div className="representation-actions">
                <ul>
                  <li>Identify customers and commercial channels</li>
                  <li>Assess distributors and system integrators</li>
                  <li>Initiate and develop commercial relationships</li>
                  <li>Coordinate relevant technical and commercial discussions</li>
                  <li>Maintain structured follow-up</li>
                </ul>
                <div className="representation-scope">
                  <span>Defined for every engagement</span>
                  <p>Representation does not automatically imply exclusivity, legal agency authority, or authority to conclude agreements or bind the manufacturer.</p>
                </div>
              </div>
              <a className="button button-light" href="/contact">Discuss a representation requirement <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="cap-connection section-space" aria-labelledby="connection-title">
          <div className="shell grid-12">
            <div className="section-index"><span>05—06</span><span>Develop & coordinate</span></div>
            <div className="section-content">
              <h2 id="connection-title">Turn relevant introductions into coordinated commercial discussions.</h2>
              <div className="connection-map" aria-label="Nelva coordinates communication between manufacturers and relevant market participants">
                <span>Manufacturer</span><i aria-hidden="true" /><strong>Nelva</strong><i aria-hidden="true" /><span>Relevant market participant</span>
              </div>
              <div className="connection-columns">
                <article><span>05</span><h3>Commercial Relationship Development</h3><p>Initiate contact with qualified organisations, introduce the commercial context, support early discussions, and maintain communication as relevance and suitability become clearer.</p></article>
                <article><span>06</span><h3>Technical & Commercial Coordination</h3><p>Clarify initial requirements, coordinate product information, connect technical questions with commercial discussions, and keep relevant parties informed of agreed next steps.</p></article>
              </div>
              <p className="cap-boundary cap-boundary-dark"><span>Boundary</span> Nelva does not perform complete technical integrations, official certification, engineering delivery, or independent product testing.</p>
            </div>
          </div>
        </section>

        <section className="cap-follow section-space" aria-labelledby="follow-title">
          <div className="shell grid-12">
            <div className="section-index"><span>07</span><span>Opportunity follow-up</span></div>
            <div className="section-content follow-grid">
              <div><h2 id="follow-title">Maintain continuity after the initial discussion.</h2><p>Follow-up may cover meetings, product information, commercial questions, samples, initial evaluations, offers, market feedback, and agreed next steps.</p></div>
              <div className="follow-note"><span>Purpose</span><strong>Keep qualified opportunities organised and moving towards practical decisions.</strong><p>Follow-up does not guarantee sales, contracts, or successful market entry.</p></div>
            </div>
          </div>
        </section>

        <section className="client-context section-space" aria-labelledby="client-context-title">
          <div className="shell client-context-grid">
            <div className="client-context-label"><span>Client context</span><strong>Distributors &<br />system integrators</strong></div>
            <div className="client-context-content">
              <p className="eyebrow">When they engage Nelva as clients</p>
              <h2 id="client-context-title">International commercial support from the client side of the relationship.</h2>
              <p>Distributors and system integrators may engage Nelva directly for international market development, technology sourcing, supplier or manufacturer identification, commercial relationship development, and technical and commercial coordination.</p>
              <p className="context-separation">This is separate from situations where Nelva identifies or develops them as a potential commercial channel for a manufacturer.</p>
            </div>
          </div>
        </section>

        <section className="cap-process section-space" aria-labelledby="cap-process-title">
          <div className="shell grid-12">
            <div className="section-index"><span>Method</span><span>How Nelva works</span></div>
            <div className="section-content">
              <div className="heading-pair"><h2 id="cap-process-title">From commercial context to practical next steps.</h2><p>An engagement may include selected stages or a broader agreed scope. Exact activities and responsibilities are defined for each assignment.</p></div>
              <ol className="detailed-process">
                {stages.map(([number, title, text]) => <li key={title}><span>{number}</span><strong>{title}</strong><p>{text}</p></li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className="contact-cta section-space" aria-labelledby="cap-contact-title">
          <div className="shell grid-12">
            <div className="section-index"><span>Next</span><span>Start a conversation</span></div>
            <div className="section-content contact-content">
              <h2 id="cap-contact-title">Discuss your market-development or representation requirements.</h2>
              <div className="contact-copy-row"><p>Tell Nelva about your product, current commercial situation, and the market objective you would like to explore.</p><a className="button button-blue" href="/contact">Start a conversation <Arrow /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><Link className="wordmark footer-wordmark" href="/" aria-label="Nelva home"><Wordmark /></Link><p>International market development for technology manufacturers.</p></div>
          <nav className="footer-column" aria-label="Footer navigation"><span className="footer-label">Navigate</span><a href="/company">Company</a><a href="/capabilities">Capabilities</a><a href="/industries">Industries</a><a href="/contact">Contact</a></nav>
          <div className="footer-column"><span className="footer-label">Corporate</span><span>Nelva</span><span>Espoo, Finland</span><span>Business ID: 3574517-6</span><span>nelvaglobal.com</span></div>
          <div className="footer-end"><span>© 2026 Nelva</span><a href="#main">Back to top ↑</a></div>
        </div>
      </footer>
    </>
  );
}
