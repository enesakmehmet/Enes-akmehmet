import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

import React, { useRef, useState } from 'react';

export default function Projects() {
  // Drag-to-scroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.2; // scroll hız katsayısı
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  // Touch events for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchScrollLeft, setTouchScrollLeft] = useState(0);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setTouchStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setTouchScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - touchStartX) * 1.2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = touchScrollLeft - walk;
    }
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projelerim</h2>
        <div
          className="projects-scroll-container"
          style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
          tabIndex={0}
          onMouseDown={handleDragStart}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className="projects-row">
            {projects.map((project) => (
              <div key={project.id} className="project-card-horizontal">
                <div className="project-card">
                  <img src={project.imageUrl} className="project-image" alt={project.title} />
                  <div className="project-overlay">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-list">
                      {project.technologies?.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
                    </div>
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="btn btn-github mt-2" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 8}}>
                        <FaGithub style={{fontSize: '1.2rem'}} /> Kodu Görüntüle
                      </a>
                    )}
                    <Link to={`/project/${project.id}`} className="btn btn-light mt-3">Detaylar</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
