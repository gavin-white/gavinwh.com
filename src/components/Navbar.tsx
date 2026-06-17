import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAVBAR_HEIGHT = 54;

const SECTION_IDS = ['home', 'about', 'projects', 'contact'];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  const active = isHome ? activeSection : 'resume';
  const visible = !isHome || activeSection !== 'home';

  const linkClass = (id: string) => `nav_link${active === id ? ' active' : ''}`;

  const scrollToIntro = () => {
    const element = document.getElementById('home');
    if (!element) {
      return;
    }

    const offsetPosition = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, '', '/#home');
    scrollToIntro();
    setActiveSection('home');
  };

  return (
    <header className={`mobile-header${visible ? '' : ' navbar-hidden'}`}>
      <hr className="gradient" />
      <div className="logo">
        <Link to="/#home" onClick={handleLogoClick}>
          <img src={`${process.env.PUBLIC_URL}/img/gwlogo.png`} alt="Logo" className="header-part" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list" id="nav-list">
          <li className="nav_item"><Link to="/#about" className={linkClass('about')}>About</Link></li>
          <li className="nav_item"><Link to="/#projects" className={linkClass('projects')}>Projects</Link></li>
          <li className="nav_item"><Link to="/#contact" className={linkClass('contact')}>Contact</Link></li>
          <li className="nav_item"><Link to="/resume" className={linkClass('resume')}>Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export { NAVBAR_HEIGHT };
export default Navbar;
