import React from 'react';
import { Link } from 'react-router-dom';
import './Beyond.css';

const Beyond: React.FC = () => {
  return (
    <section className="beyond" id="beyond">
      <Link to="/projects" className="card">
        <h2 className="card-label">Projects</h2>
        <p>I sincerely enjoy working on personal programming projects in my free time. Check out some of the things I've made.</p>
      </Link>
      <Link to="/resume" className="card">
        <h2 className="card-label">Resume</h2>
        <p>I am currently a full-time Software Engineer working on backend distributed systems. Check out my complete resume.</p>
      </Link>
    </section>
  );
};

export default Beyond;
