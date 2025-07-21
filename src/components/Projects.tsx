import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projelerim</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="project-card">
                <img src={project.imageUrl} className="project-image" alt={project.title} />
                <div className="project-overlay">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-list">
                    {project.technologies?.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
                  </div>
                  <Link to={`/project/${project.id}`} className="btn btn-light mt-3">Detaylar</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
