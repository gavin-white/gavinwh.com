import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
            <ul className="footer-items">
            <li className="footer_item">
                <a href="mailto:white.g@northeastern.edu" className="social_item-link">
                <i className="fas fa-envelope"></i>
                </a>
            </li>
            <li className="footer_item">
                <a href="https://linkedin.com/in/gavinwh" className="social_item-link">
                <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="footer_item">
                <a href="https://github.com/gavin-white" className="social_item-link">
                <i className="fab fa-github"></i>
                </a>
            </li>
            </ul>
        </footer>
    );
}

export default Footer;