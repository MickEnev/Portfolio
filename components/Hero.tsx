import Image from "next/image";
import { ArrowDown, ArrowRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { contact, socials } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · {contact.location}</p>
          <h1>Mick Enev</h1>
          <h2>I build cool stuff.</h2>
          <p className="hero-intro">
            Software engineer building useful products, custom software, and
            digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View projects <ArrowRight size={18} />
            </a>
            <a
              className="button secondary"
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="hero-socials">
            <a
              href={socials[0].href}
              target="_blank"
              rel="noreferrer"
              aria-label="Mick Enev on GitHub"
            >
              <Code2 />
            </a>
            <a
              href={socials[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label="Mick Enev on LinkedIn"
            >
              <BriefcaseBusiness />
            </a>
            <span>Building software at QCI and growing Veriq Digital.</span>
          </div>
        </div>
        <div className="portrait-stage">
          <div className="portrait-offset" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src="/profilepic4.png"
              alt="Portrait of Mick Enev"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 38vw"
            />
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue">
        <span>Scroll to explore</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
