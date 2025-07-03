import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../types';
import { Link } from 'react-router-dom';

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
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <Link to={`/project/${project.id}`} className="btn btn-primary">Projeyi Görüntüle</Link>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Yeni Proje 1" />
              <div className="card-body">
                <h5 className="card-title">Yeni Proje 1</h5>
                <p className="card-text">Proje açıklaması buraya gelecek.</p>
                <Link to={`/project/new1`} className="btn btn-primary">Projeyi Görüntüle</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Yeni Proje 2" />
              <div className="card-body">
                <h5 className="card-title">Yeni Proje 2</h5>
                <p className="card-text">Proje açıklaması buraya gelecek.</p>
                <Link to={`/project/new2`} className="btn btn-primary">Projeyi Görüntüle</Link>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
