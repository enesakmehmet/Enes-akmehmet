import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { Project } from '../types';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id?.startsWith('new')) {
        // Handle placeholder projects
        setProject({
            id: id,
            title: `Yeni Proje ${id.slice(3)}`,
            description: 'Proje açıklaması buraya gelecek.',
            url: '#',
            imageUrl: 'https://via.placeholder.com/800x400',
            tags: []
        });
    } else {
        axios
        .get(`https://portfolio-backendd-production.up.railway.app/projects/${id}`)
        .then(res => {
            setProject(res.data);
        })
        .catch(err => console.error('Proje detayları API hatası:', err));
    }
  }, [id]);

  if (!project) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <section className="my-5">
      <h2>{project.title}</h2>
      <img src={project.imageUrl} className="img-fluid my-4" alt={project.title} />
      <p>{project.description}</p>
    </section>
  );
}
