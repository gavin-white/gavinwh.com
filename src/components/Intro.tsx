import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Intro.css';

const Intro: React.FC = () => {
  return (
    <section className="intro" id="home">
      <h1 className="intro-title">
        Hello, I'm <strong>Gavin White</strong>
      </h1>
      <div className="intro-subtitle">
        Software Engineer, <br /> Computer Scientist, <br /> Technology Enthusiast
      </div>
      <Tilt className="tilt" tiltMaxAngleX={12.5} tiltMaxAngleY={12.5} scale={1} transitionSpeed={100}>
        <img src={`${process.env.PUBLIC_URL}/img/gavinpic.jpg`} alt="Gavin" className="intro-img" />
      </Tilt>
    </section>
  );
};

export default Intro;
