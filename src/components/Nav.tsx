"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav${isScrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="logo">Lumbe<span>.Tech</span></a>
        <nav className="nav-menu" aria-label="Main">
          <ul className="nav-links">
            <li><a href="#aws-cloud" onClick={() => setIsOpen(false)}>AWS Cloud</a></li>
            <li><a href="#ai-automation" onClick={() => setIsOpen(false)}>AI Automation</a></li>
            <li><a href="#why" onClick={() => setIsOpen(false)}>Why Lumbe Tech</a></li>
            <li><a href="#how" onClick={() => setIsOpen(false)}>How We Work</a></li>
          </ul>
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary btn-sm">Book a call</a>
          <button type="button" className="nav-toggle" aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen((o) => !o)}>
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>
    </header>
  );
}
