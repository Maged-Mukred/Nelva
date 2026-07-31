"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const principles = [
  ["01", "Relevance before volume", "Focus on organisations and opportunities relevant to the product and objective—not the volume of contacts."],
  ["02", "Careful qualification", "Assess potential customers and partners before significant time and resources are committed."],
  ["03", "Clear communication", "Make technical and commercial information understandable to the different parties involved."],
  ["04", "Direct involvement", "Provide clients with direct access to the person responsible for the agreed engagement."],
  ["05", "Consistent follow-up", "Maintain continuity beyond an initial introduction and support agreed next steps."],
  ["06", "Accurate representation", "Present Nelva’s capabilities, role, experience, and authority without overstatement."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Wordmark() { return <span className="wordmark-text">NELVA</span>; }

export default function CompanyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="shell header-inner">
      <Link className="wordmark" href="/" aria-label="Nelva home"><Wordmark /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="/company" aria-current="page">Company</a><a href="/capabilities">Capabilities</a><a href="/industries">Industries</a><a href="/contact">Contact</a><a className="header-cta" href="/contact">Discuss your market objectives <Arrow /></a></nav>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(v => !v)}><span>{menuOpen ? "Close" : "Menu"}</span><span className="menu-symbol" aria-hidden="true">{menuOpen ? "×" : "+"}</span></button>
    </div><div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}><nav className="shell mobile-nav" aria-label="Mobile navigation">{[["Company","/company"],["Capabilities","/capabilities"],["Industries","/industries"],["Contact","/contact"]].map(([label,href],i)=><a href={href} key={label} aria-current={label === "Company" ? "page" : undefined} onClick={()=>setMenuOpen(false)}><span className="mobile-nav-index">0{i+1}</span><span>{label}</span><Arrow /></a>)}<a className="mobile-primary-cta" href="/contact">Discuss your market objectives <Arrow /></a></nav><div className="shell mobile-menu-meta"><span>Espoo, Finland</span><span>Business ID 3574517-6</span></div></div></header>

    <main id="main">
      <section className="company-hero shell" aria-labelledby="company-title">
        <div className="company-hero-meta"><span><i className="signal-dot" /> Company</span><span>Espoo, Finland / International perspective</span></div>
        <div className="company-hero-grid"><h1 id="company-title">A focused company for structured international market development.</h1><div><p>Nelva helps technology manufacturers understand, enter, and develop international markets through industry insight, disciplined research, qualification, relationship development, and commercial coordination.</p><span>A new Finnish business built on established professional experience.</span></div></div>
        <div className="company-definition"><span>Nelva / Defined</span><strong>Specialized international market development company</strong><span>Technology manufacturers</span></div>
      </section>

      <section className="company-purpose section-space" aria-labelledby="purpose-title"><div className="shell grid-12"><div className="section-index"><span>01</span><span>Why Nelva</span></div><div className="section-content">
        <div className="heading-pair"><h2 id="purpose-title">Better-informed market decisions. More credible execution.</h2><p>Entering a market requires more than activity. Exhibitions, travel, outreach, and channel discussions create value when they are connected by informed targets, careful qualification, and consistent follow-up.</p></div>
        <div className="purpose-statement"><span>Nelva’s role</span><p>Bring market understanding, structured intelligence, professional tools, technical product knowledge, and commercial discipline into one coherent development process.</p></div>
      </div></div></section>

      <section className="finland-foundation section-space" aria-labelledby="finland-title"><div className="shell finland-grid"><div className="finland-aside"><span>60.2055° N</span><strong>ESPOO<br />FINLAND</strong><span>24.6559° E</span></div><div className="finland-copy"><p className="eyebrow">Finland-based foundation</p><h2 id="finland-title">Based in Finland. International in perspective.</h2><p>Nelva operates from Espoo, Finland. Its work is shaped around the client’s product, commercial objective, and the relevant technology market—not around claims of permanent coverage in every region.</p><p>Each engagement defines the work required, responsibilities, relevant market participants, and the practical scope of Nelva’s involvement.</p></div></div></section>

      <section className="professional-foundation section-space" aria-labelledby="experience-title"><div className="shell grid-12"><div className="section-index"><span>02</span><span>Experience behind Nelva</span></div><div className="section-content experience-grid"><div><h2 id="experience-title">A new business built on more than ten years of professional experience.</h2><p>Nelva is newly established. The business itself has not operated for more than ten years.</p></div><div className="experience-fields"><span>International technology markets</span><span>Payment technology</span><span>Android payment terminals</span><span>Manufacturer representation</span><span>Technical &amp; commercial support</span><span>International market development</span></div></div></div></section>

      <section className="founder-section section-space" aria-labelledby="founder-name"><div className="shell founder-grid"><div className="founder-monogram" aria-hidden="true"><span>MM</span><i /></div><div className="founder-copy"><p className="eyebrow">Founder</p><h2 id="founder-name">Maged Mukred</h2><strong>Founder &amp; International Market Development Lead</strong><p>Maged Mukred is the founder of Nelva. He brings more than ten years of professional experience across international technology markets, with a strong background in payment technology, Android payment terminals, technical and commercial support, manufacturer representation, and international market development.</p><p>His experience includes working across different markets and coordinating relationships between manufacturers, distributors, payment service providers, system integrators, and other commercial partners.</p></div></div></section>

      <section className="operating-principles section-space" aria-labelledby="principles-title"><div className="shell grid-12"><div className="section-index"><span>03</span><span>Operating principles</span></div><div className="section-content"><div className="heading-pair"><h2 id="principles-title">Practical work guided by relevance, clarity, and continuity.</h2><p>Direct involvement and clearly defined responsibilities keep the work accountable to the client’s product, market objective, and agreed engagement.</p></div><ol className="principle-grid">{principles.map(([n,t,d])=><li key={t}><span>{n}</span><strong>{t}</strong><p>{d}</p></li>)}</ol></div></div></section>

      <section className="engagement-boundary section-space" aria-labelledby="boundary-title"><div className="shell boundary-grid"><div><span>Scope / authority</span><strong>Defined by the agreed engagement</strong></div><div><h2 id="boundary-title">A focused commercial role, represented accurately.</h2><p>Nelva supports international market development and related technical and commercial coordination. It does not present itself as a manufacturer, payment software provider, certification laboratory, engineering contractor, or complete systems integrator.</p><p>Manufacturer representation does not automatically include exclusivity, legal agency authority, or authority to conclude agreements on behalf of a manufacturer.</p></div></div></section>

      <section className="contact-cta section-space" aria-labelledby="company-contact-title"><div className="shell grid-12"><div className="section-index"><span>Next</span><span>Start a conversation</span></div><div className="section-content contact-content"><h2 id="company-contact-title">Discuss whether Nelva fits your commercial objective.</h2><div className="contact-copy-row"><p>Tell Nelva about your technology, market objective, or representation requirement.</p><a className="button button-blue" href="/contact">Start a conversation <Arrow /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><Link className="wordmark footer-wordmark" href="/"><Wordmark /></Link><p>International market development for technology manufacturers.</p></div><nav className="footer-column" aria-label="Footer navigation"><span className="footer-label">Navigate</span><a href="/company">Company</a><a href="/capabilities">Capabilities</a><a href="/industries">Industries</a><a href="/contact">Contact</a></nav><div className="footer-column"><span className="footer-label">Corporate</span><span>Nelva</span><span>Espoo, Finland</span><span>Business ID: 3574517-6</span><span>nelvaglobal.com</span></div><div className="footer-end"><span>© 2026 Nelva</span><a href="#main">Back to top ↑</a></div></div></footer>
  </>;
}
