import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import type { Project } from '../types';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [gallery, setGallery] = useState<string[]>([]);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (id?.startsWith('new')) {
      setProject({
        id: id,
        title: `Yeni Proje ${id.slice(3)}`,
        description: 'Proje açıklaması buraya gelecek.',
        url: '#',
        imageUrl: 'https://via.placeholder.com/800x400',
        tags: []
      });
      setGallery([
        'https://via.placeholder.com/800x400',
        'https://via.placeholder.com/800x400/eee',
        'https://via.placeholder.com/800x400/ccc'
      ]);
    } else {
      axios
        .get(`https://portfolio-backendd-production.up.railway.app/projects/${id}`)
        .then(res => {
          setProject({ ...res.data, imageUrl: res.data.imageUrl || 'https://via.placeholder.com/800x400' });
          setGallery(
            (res.data.imageGallery && res.data.imageGallery.length > 0)
              ? res.data.imageGallery
              : [res.data.imageUrl || 'https://via.placeholder.com/800x400']
          );
        })
        .catch(err => console.error('Proje detayları API hatası:', err));
    }
  }, [id]);

  if (!project) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="project-modal-overlay" onClick={() => navigate(-1)}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={() => navigate(-1)}>&times;</button>
        <h2>{project.title}</h2>
        <div className="gallery">
          <img src={gallery[activeImg]} className="main-img" alt={project.title} />
          <div className="thumbs">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`thumb ${i === activeImg ? 'active' : ''}`}
                alt={project.title + ' ' + (i + 1)}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
        </div>
        <p style={{ marginTop: 16 }}>{project.description}</p>
      </div>
    </div>
  );
}
