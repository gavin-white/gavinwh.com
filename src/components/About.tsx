import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="abt-title">About Me</h2>
      <div className="abt-sections">
        <div className="abt-section">
          <h3>Introduction</h3>
          <p>
            I study <strong>computer science</strong> with a concentration in <strong>software</strong> at Northeastern University.
            Some highlights of my coursework so far include Object Oriented Design, Web Development, Algorithms and Data, Computer Systems, and
            Programming Languages. I take particular interest in effective software design and enjoy finding ways to write more
            intuitive and efficient programs. I have six months of experience as a <strong>software engineer co-op</strong> at Wayfair and
            I'm currently a software engineer co-op at Delsys Inc. working on the Research and Development team.
          </p>
        </div>
        <div className="abt-section">
          <h3>My Experience</h3>
          <p>
            I recently completed a software engineer co-op position at Wayfair.
            There, as a member of a professional software team, I contributed to business-critical distributed systems, developing new features based on business need,
            as well as identifying, investigating, and solving a variety of problems. I had the opportunity
            to collaborate with other engineers on a regular basis, allowing me to gain insight into the architecture, technologies, and business processes
            integral to the systems developed by our team. At Wayfair, I gathered exposure to many technologies including
            GraphQL and REST APIs, SQL databases, Docker, Kubernetes, and much more.
          </p>
        </div>
        <div className="abt-section">
          <h3>My Interests</h3>
          <p>
            I am truly passionate about computer science. I enjoy jumping around from topic to topic, learning as much
            as I can and broadening my knowledge of the field. I also take interest in the area of Computer Science education where I get to share this knowledge with others.
            I have previously been a <strong>Teaching Assistant</strong> for courses including Fundamentals of
            Computer Science, Object-Oriented Design, and Computer Systems, as well as a trained <strong>Peer Tutor</strong>. In these roles, I individually
            supported students taking a variety of Computer Science courses, helping them master their coursework, set effective goals,
            and improve their study strategies. Outside of Computer Science, I love to explore the city of Boston and am currently on a journey to visit as much
            of it as I can by foot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
