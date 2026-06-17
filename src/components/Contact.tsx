import React from 'react';
import './Contact.css';

const CONTACT_LINKS = [
  {
    href: 'mailto:gavinwh5@gmail.com',
    label: 'Email',
    detail: 'gavinwh5@gmail.com',
    iconClass: 'fas fa-envelope',
  },
  {
    href: 'https://linkedin.com/in/gavinwh',
    label: 'LinkedIn',
    detail: 'linkedin.com/in/gavinwh',
    iconClass: 'fab fa-linkedin',
  },
  {
    href: 'https://github.com/gavin-white',
    label: 'GitHub',
    detail: 'github.com/gavin-white',
    iconClass: 'fab fa-github',
  },
];

const Contact: React.FC = () => {
  return (
    <section className="contact bg-fade-vertical" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-sections">
        <p>
          Have a question about me, my work, or my experience? I&apos;m always open to connecting.
          Feel free to reach out through any of the channels below.
        </p>
      </div>
      <div className="contact-card">
        <ul className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="contact-link" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <i className={link.iconClass} aria-hidden="true" />
                <span className="contact-link-text">
                  <strong>{link.label}</strong>
                  <span className="contact-link-detail">{link.detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
