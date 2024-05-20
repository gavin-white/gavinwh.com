import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-sections">
        <div className="contact-section">
          <p>If you have any questions or comments about me, my work, my experience, or anything else at all,
            please feel free to get in touch. You can also check out my other profiles below for more information
            about me.
          </p>
        </div>
      </div>
      <ul className="socials">
        <li className="social_item"><a href="mailto:white.g@northeastern.edu" className="social_item-link"><i className="fas fa-envelope"> Email</i></a></li>
        <li className="social_item"><a href="https://linkedin.com/in/gavinwh" className="social_item-link"><i className="fab fa-linkedin"> <strong>LinkedIn</strong></i></a></li>
        <li className="social_item"><a href="https://github.com/gavin-white" className="social_item-link"><i className="fab fa-github"> <strong>GitHub</strong></i></a></li>
      </ul>
    </section>
  );
};

export default Contact;
