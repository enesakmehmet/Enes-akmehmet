import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getAssetPath } from '../utils/paths';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5">Projelerim</h2>
        </div>
        <div className="projects-scroll-container">
          <div className="projects-row">
            {projects.map((project) => (
              <div key={project.id} className="project-card-horizontal">
                <div className="project-card">
                  <img
                    src={getAssetPath(project.imageUrl)}
                    className="project-image"
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="project-overlay">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-list">
                      {project.technologies?.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-buttons">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="btn btn-github"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> Kodu Görüntüle
                        </a>
                      )}
                      <Link to={`/project/${project.id}`} className="btn btn-light">Detaylar</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
