"use client";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "../data/portfolio";
const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="monogram" aria-label="Mick Enev, home">
          ME<span>.</span>
        </a>
        <nav
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-resume"
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
        <a
          className="resume-link"
          href={contact.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
