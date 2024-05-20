import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar, {NAVBAR_HEIGHT} from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Beyond from './components/Beyond';
import Conact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import NotFound from './components/NotFound';
import './App.css';

/*
  * This component is used to scroll to an element with the id specified in the URL hash.
  * This is useful for scrolling to a specific section of the page when a URL with a hash is visited.
  */
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - NAVBAR_HEIGHT;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/projects" Component={ProjectsPage} />
        <Route path="/resume" Component={ResumePage} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};

/**
 * Below are the combined components for each page.
 */

const HomePage: React.FC = () => {
  return (
    <>
      <Intro />
      <About />
      <Beyond />
      <Conact />
    </>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Projects />
    </>
  );
};

const ResumePage: React.FC = () => {
  // Prevent page scrolling on the resume page
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Resume />
    </>
  );
};

export default App;
