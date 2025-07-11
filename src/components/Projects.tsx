import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Project } from '../types';
import { Link } from 'react-router-dom';
import './Projects.css'; // Stil dosyasını import ediyoruz

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

  // Örnek projeleri de state'e ekleyebilir veya ayrı bir listede tutabiliriz.
  const exampleProjects = [
    {
      id: 'new1',
      title: 'Yeni Proje 1',
      description: 'Proje açıklaması buraya gelecek.',
      imageUrl: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js']
    },
    {
      id: 'new2',
      title: 'Yeni Proje 2',
      description: 'Proje açıklaması buraya gelecek.',
      imageUrl: 'https://via.placeholder.com/400x300',
      technologies: ['Vue', 'Firebase']
    }
  ];

  const allProjects = [...projects, ...exampleProjects].map(project => ({
    ...project,
    imageUrl: project.imageUrl || 'https://via.placeholder.com/400x300',
  }));

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projelerim</h2>
        <div className="row g-4">
          {allProjects.map((project) => (
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
