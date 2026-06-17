import React from 'react';
import './Projects.css';

type Project = {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    name: 'Scramble Squares Solver',
    description:
      'A puzzle with 95+ billion possible arrangements, solved from a picture with the power of AI. Computer vision detects the pieces, matches edge patterns across triangular segments, and a constraint satisfaction algorithm finds the optimal solution.',
    tech: ['Python', 'TypeScript', 'OpenCV', 'FastAPI'],
    githubUrl: 'https://github.com/gavin-white/puzzle-solver',
    demoUrl: 'https://puzzle.gavinwh.com',
  },
  {
    name: 'Connect Four Robot',
    description:
      'A physical Connect Four opponent that reads the board with a camera and plays moves automatically. An Arduino drives motors and servos for movement and piece drops, while a computer vision pipeline extracts board state from live images and a minimax AI selects the optimal next move.',
    tech: ['Python', 'C++', 'Arduino'],
    githubUrl: 'https://github.com/davidhabboosh1/Connect-4',
  },
  {
    name: 'Wordle Heuristics Engine',
    description:
      'A command-line utility that helps players solve Wordle more efficiently using statistical heuristics. After each guess and feedback round, it ranks candidate words by how much they narrow the remaining possibility space.',
    tech: ['C++', 'Algorithms'],
    githubUrl: 'https://github.com/gavin-white/Wordle-Utility',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects bg-grid" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-hidden="true" /> GitHub
              </a>
              {project.demoUrl && (
                <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt" aria-hidden="true" /> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
