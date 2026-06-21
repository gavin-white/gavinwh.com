import React, { useEffect } from 'react';
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
      'A puzzle with 95+ billion possible arrangements, solved from a picture. A computer vision pipeline powers piece detection and matching edge patterns across segmented pieces; a constraint satisfaction algorithm finds the optimal solution.',
    tech: ['Python', 'TypeScript'],
    githubUrl: 'https://github.com/gavin-white/puzzle-solver',
    demoUrl: 'https://puzzle.gavinwh.com',
  },
  {
    name: 'Connect Four Companion',
    description:
      'A physical Connect Four opponent that reads the board with a camera and plays moves automatically. An Arduino drives motors and servos for movement and piece drops, while a computer vision pipeline extracts board state from live images and a minimax AI selects the optimal next move.',
    tech: ['Python', 'C++'],
    githubUrl: 'https://github.com/davidhabboosh1/Connect-4',
  },
  {
    name: 'Wordle Heuristics Engine',
    description:
      'A command-line utility that helps players solve Wordle more efficiently using statistical heuristics. After each guess and feedback round, it ranks candidate words by how much they narrow the remaining possibility space.',
    tech: ['C++'],
    githubUrl: 'https://github.com/gavin-white/Wordle-Utility',
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById('projects');
    if (!section || !('IntersectionObserver' in window)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.project-card'));
    if (cards.length === 0) {
      return;
    }

    section.classList.add('projects-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      section.classList.remove('projects-animate');
    };
  }, []);

  return (
    <section className="projects bg-grid" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`project-card${index === 0 ? ' project-card-featured' : ''}`}
            style={{ '--project-delay': `${index * 90}ms` } as React.CSSProperties}
          >
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
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
