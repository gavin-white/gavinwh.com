import React from 'react';
import './Intro.css';

const Intro: React.FC = () => {
  return (
    <section className="intro" id="home">
      <h1 className="intro-title">
        Hello, I'm <strong>Gavin White</strong>
      </h1>
      <div className="intro-subtitle">
        Computer Science Student, <br /> Teaching Assistant, <br /> Software Engineer
      </div>
      <img src={`${process.env.PUBLIC_URL}/img/gavinpic.jpg`} alt="Gavin" className="intro-img" />
    </section>
  );
};

export default Intro;
