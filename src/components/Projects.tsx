import { Link } from 'react-router-dom';
import './Projects.css';

// Proje tipini burada tanımlayabilirsin veya types dosyasından import edebilirsin
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
};

// Projeleri burada frontend'de sabit olarak tanımla
const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'A portfolio website built with React.',
    imageUrl: '/public/images/1.proje detay resim/ana.png', // public/images klasörüne koyabilirsin
    technologies: ['React', 'CSS', 'JavaScript']
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce App',
    description: 'Full-stack e-ticaret uygulaması.',
    imageUrl: '/images/ecommerce-app.png',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Kendi blog platformunuzu oluşturun.',
    imageUrl: '/images/blog-platform.png',
    technologies: ['Vue', 'Firebase']
  }
  // Yeni projeleri buraya ekleyebilirsin
];

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
