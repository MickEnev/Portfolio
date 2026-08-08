"use client";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
} from "lucide-react";
import { useState } from "react";
import { contact, socials, veriqUrl } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">04 / Contact</p>
          <h2>
            Have a project,
            <br />
            opportunity, or idea?
          </h2>
        </div>
        <div className="contact-copy">
          <p>
            I’m always open to thoughtful conversations about software, product
            work, and useful things worth building.
          </p>
          <a className="email-cta" href={`mailto:${contact.email}`}>
            {contact.email}
            <ArrowRight />
          </a>
          <p className="business-contact">
            Veriq inquiries:{" "}
            <a href={`mailto:${contact.veriqEmail}`}>{contact.veriqEmail}</a>
          </p>
          <div className="contact-links">
            <button onClick={copy} aria-label="Copy email address">
              {copied ? <Check /> : <Copy />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a href={socials[0].href} target="_blank" rel="noreferrer">
              <Code2 /> GitHub
            </a>
            <a href={socials[1].href} target="_blank" rel="noreferrer">
              <BriefcaseBusiness /> LinkedIn
            </a>
            <a href={veriqUrl} target="_blank" rel="noreferrer">
              Veriq <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
