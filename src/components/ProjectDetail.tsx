import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <div className="project-modal-overlay" onClick={() => navigate(-1)}>
        <div className="project-modal" onClick={e => e.stopPropagation()}>
          <h2>Proje Bulunamadı</h2>
          <button onClick={() => navigate(-1)}>Geri Dön</button>
        </div>
      </div>
    );
  }

  const gallery = project.gallery || [project.imageUrl];

  return (
    <div className="project-modal-overlay" onClick={() => navigate(-1)}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={() => navigate(-1)}>&times;</button>
        <h2>{project.title}</h2>
        <div className="gallery">
          <img src={gallery[activeImg]} className="main-img" alt={project.title} />
          {gallery.length > 1 && (
            <div className="thumbs">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`thumb ${i === activeImg ? 'active' : ''}`}
                  alt={`${project.title} ${i + 1}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          )}
        </div>
        <p style={{ marginTop: 16 }}>
          {project.detailedDescription || project.description}
        </p>
      </div>
    </div>
  );
}
