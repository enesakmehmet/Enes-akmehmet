import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div>
        <h2>Proje Bulunamadı</h2>
        <button onClick={() => navigate(-1)}>Geri Dön</button>
      </div>
    );
  }

  const gallery = project.gallery || [project.imageUrl];

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <div className="project-detail-container container py-5">
        <h2>{project.title}</h2>
        {project.githubUrl && (
          <a href={project.githubUrl} className="btn btn-github mt-2" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 10}}>
            <FaGithub style={{fontSize: '1.2rem'}} /> Kodu Görüntüle
          </a>
        )}
        <div className="gallery">
          <img src={gallery[activeImg]} className="main-img img-fluid mb-3" alt={project.title} onClick={openLightbox} style={{ cursor: 'pointer' }} />
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
        <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>&larr; Geri</button>
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[activeImg]} className="lightbox-img" alt={project.title} />
            <button className="close-btn" onClick={closeLightbox}>&times;</button>
          </div>
        </div>
      )}
    </>
  );
}
