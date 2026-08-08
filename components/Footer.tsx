import { ArrowUp } from "lucide-react";
import { contact, socials } from "../data/portfolio";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <strong>Mick Enev</strong>
          <span>© {new Date().getFullYear()} · Built with Next.js</span>
        </div>
        <div>
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href="#home" aria-label="Back to top">
            Top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
