import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="abt-title">Who am I?</h2>
      <div className="abt-sections">
        <div className="abt-section">
          <h3>My Experience</h3>
          <p>
            I’m a software engineer with experience building backend systems, distributed services, and applied computer vision infrastructure. Previously, I worked at Wayfair, where I contributed to large-scale e-commerce systems powering order placement and order data access. My work included designing and maintaining high-throughput APIs, improving event-driven workflows, and building resilient backend infrastructure that could handle production-scale traffic reliably.
          </p>
          <p>
            I’ve worked across areas like API design, data access patterns, asynchronous processing, event publishing, system validation, and operational reliability. I enjoy solving problems where correctness, performance, and maintainability all matter, especially in systems that need to operate reliably at scale.
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
