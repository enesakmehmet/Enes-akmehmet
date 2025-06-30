import { useEffect, useState } from 'react';
import axios from 'axios';
import { Project } from '../types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get('https://portfolio-backendd-production.up.railway.app/projects')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => console.error("Proje API hatası:", err));
  }, []);

  return (
    <section className="my-5">
      <h2 className="mb-4">Projelerim</h2>
      <div className="row g-4">
        {projects.map((project, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
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
