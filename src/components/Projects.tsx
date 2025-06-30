import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../types';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
  axios.get('https://portfolio-backendd-production.up.railway.app/about')
    .then(res => {
      if (res.data && res.data.skills) {
        setSkills(res.data.skills);
      }
    });
}, []);

  
  return (
    <section id="projects" className="my-5 py-5 bg-light">
      <h2 className="mb-4 text-center">Projelerim</h2>
      <div className="row g-4">
        {projects.map((project, i) => (
          <div key={i} className="col-md-4">
            <div className="card project-card h-100 shadow-sm border-0">
              <img src={project.imageUrl || 'https://via.placeholder.com/400x300'} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted flex-grow-1">{project.description}</p>
                <div className="mb-3">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="badge bg-light text-dark me-2">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Siteyi Görüntüle
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
