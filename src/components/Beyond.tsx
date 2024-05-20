import React from 'react';
import './Beyond.css';

const Beyond: React.FC = () => {
  return (
    <section className="beyond" id="beyond">
      <div className="card">
        <a href="/projects" className="click-box"><h2 className="card-label">Projects</h2></a>
        <p>I sincerely enjoy working on personal programming projects in my free time. Check out some of the things I've made.</p>
      </div>
      <div className="card">
        <a href="/resume" className="click-box"><h2 className="card-label">Resume</h2></a>
        <p>I'm pursuing a full-time software engineer position beginning in the Summer of 2024. Check out my complete resume.</p>
      </div>
    </section>
  );
};

export default Beyond;
