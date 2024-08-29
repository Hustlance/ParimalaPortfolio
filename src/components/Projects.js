import React from 'react';
import './Projects.css';

const ProjectItem = ({ title, description, liveLink, githubLink, image }) => {
  return (
    <div className="project-item">
      <div className="project-inner">
        <div className="front">
          <img src={image} alt={`${title} project`} />
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="link-container">
            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>}
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'EventMapper',
      description: 'Platform for exploring hackathons, workshops, and internships.',
      liveLink: 'https://eventmapper11.netlify.app',
      githubLink: 'https://github.com/Parimalasri13/EventMapper11',
      image: 'em.png', 
    },
    {
      title: 'Vaidya AI',
      description: 'Backend system design for a healthcare AI platform.',
      githubLink: 'https://github.com/rohit1246/Vaidya-AI-',
      image: 'vidya.png', 
    },
    {
      title: 'Block Chain',
      description: 'Implemented a private blockchain for secure drone data storage.',
      githubLink: 'https://github.com/IBC-Media/Grant-Akash',
      image: 'drone.png', 
    },
    {
      title: 'Spritual Path',
      description: 'Implemented a website where user can listen to Bagavath geetha music.',
      liveLink: 'https://spiritualpath.netlify.app/',
      githubLink: 'https://github.com/Parimalasri13/spiritual_Path',
      image: 'spiritual.png', 
    },
    {
      title: 'Snake Game',
      description: 'Implemented Snake Game using JavaScript.',
      liveLink: 'https://parimalasri13.github.io/Snake_Game/',
      githubLink: 'https://github.com/Parimalasri13/Snake_Game',
      image: 'snake.png', 
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
