import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about bg-fade-vertical" id="about">
      <h2 className="section-title">About</h2>
      <div className="abt-sections">
        <div className="abt-section">
          <h3>My Experience</h3>
          <p>
            I’m a software engineer with experience building backend systems, distributed services, and applied computer vision infrastructure. Previously, I worked at Wayfair, where I contributed to large-scale e-commerce systems powering order placement and order data access. My work included designing and maintaining high-throughput APIs, implementing event-driven workflows and asynchronous processing, and building resilient backend infrastructure with strong data access patterns, system validation, and operational reliability—problems where correctness, performance, and maintainability all had to hold up at production scale.
          </p>
          <p>
            Before that, I worked as a research software engineer co-op at Delsys, contributing to computer vision infrastructure, algorithm development, and software for multi-sensor data capture. My work included incorporating deep learning models into computer vision workflows and applying them at scale in performance-sensitive research systems.
          </p>
        </div>
        <div className="abt-section">
          <h3>My Interests</h3>
          <p>
            I’m especially interested in scalable backend systems, distributed infrastructure, applied AI, and building software that is reliable, practical, and useful in real-world environments.
          </p>
          <p>
            I’m drawn to projects that sit at the intersection of strong engineering fundamentals and real-world complexity, whether that means improving the reliability of distributed services, designing cleaner abstractions for backend systems, or using AI and computer vision to solve practical problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
