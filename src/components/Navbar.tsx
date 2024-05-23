import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAVBAR_HEIGHT = 54;

const Navbar: React.FC = () => {
  return (
    <header className="mobile-header">
      <hr className="gradient" />
      <div className="logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/gwlogo.png`} alt="Logo" className="header-part" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list" id="nav-list">
          <li className="nav_item"><Link to="/projects" className="nav_link">Projects</Link></li>
          <li className="nav_item"><Link to="/resume" className="nav_link">Resume</Link></li>
          <li className="nav_item">
              <Link to="/#about" className="nav_link">About</Link>
          </li>
          <li className="nav_item">
              <Link to="/#contact" className="nav_link">Contact</Link>
          </li>
          <li className="social_item">
            <a href="https://linkedin.com/in/gavinwh" className="social_item-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social_item">
            <a href="https://github.com/gavin-white" className="social_item-link">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { NAVBAR_HEIGHT };
export default Navbar;
