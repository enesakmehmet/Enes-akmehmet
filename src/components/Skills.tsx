import React, { useState } from 'react';

import './Skills.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiPassport, SiPrisma, SiNestjs } from 'react-icons/si';

// İkonlar
const skillIcons: { [key: string]: React.ReactNode } = {
  react: <FaReact />,
  'node.js': <FaNodeJs />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <FaJsSquare />,
  typescript: <SiTypescript />,
  git: <FaGitAlt />,
  docker: <FaDocker />,
  'express.js': <SiExpress />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  'passport.js': <SiPassport />,
  'prisma orm': <SiPrisma />,
  nestjs: <SiNestjs />,
};

// İkon alma fonksiyonu
const getSkillIcon = (skill: string) => {
  return skillIcons[skill.toLowerCase()] || null;
};

export default function Skills() {
  const [skills] = useState<string[]>([
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Git',
    'Docker',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Passport.js',
    'Prisma ORM',
    'NestJS',
  ]);
  const [tooltip, setTooltip] = useState<{text: string, x: number, y: number, visible: boolean}>({text: '', x: 0, y: 0, visible: false});

  const descs: { [key: string]: string } = {
    react: 'Modern web uygulamaları için popüler bir kütüphane.',
    'node.js': 'Sunucu tarafı JavaScript çalıştırma ortamı.',
    html: 'Web sayfalarının iskeletini oluşturan işaretleme dili.',
    css: 'Web sayfalarının stil ve düzenlemesi.',
    javascript: 'Webin programlama dili.',
    typescript: 'JavaScript’in tipli ve güvenli hali.',
    git: 'Versiyon kontrol sistemi.',
    docker: 'Kapsayıcı teknolojisi.',
    'express.js': 'Node.js için hızlı backend frameworkü.',
    mongodb: 'NoSQL veritabanı.',
    postgresql: 'Güçlü ilişkisel veritabanı.',
    'passport.js': 'Node.js için kimlik doğrulama.',
    'prisma orm': 'Modern TypeScript ORM.',
    nestjs: 'Node.js için gelişmiş backend frameworkü.',
  };

  const handleMouseMove = (e: React.MouseEvent, skill: string) => {
    const padding = 18;
    let x = e.clientX;
    let y = e.clientY;
    // Sağdan taşmayı engelle
    if (window.innerWidth - x < 270) x = window.innerWidth - 270 - padding;
    // Soldan taşmayı engelle
    if (x < padding) x = padding;
    // Yukarıdan taşmayı engelle
    if (y < 60) y = 60;
    setTooltip({ text: descs[skill.toLowerCase()] || 'Yetenek açıklaması.', x, y, visible: true });
  };
  const handleMouseLeave = () => setTooltip(t => ({ ...t, visible: false }));

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Yeteneklerim</h2>
        <div className="skills-container">
          {skills.length > 0 ? (
            <div className="skills-marquee">
               {[...skills, ...skills, ...skills].map((skill, i) => (
                <div
                  key={i}
                  className="skill-badge tooltip-container"
                  onMouseMove={e => handleMouseMove(e, skill)}
                  onMouseLeave={handleMouseLeave}
                >
                  {getSkillIcon(skill)}
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Yükleniyor...</p>
          )}
        </div>
      </div>
      {tooltip.visible && (
        <div
          className="tooltip-text"
          style={{
            position: 'fixed',
            top: tooltip.y + 14,
            left: tooltip.x,
            zIndex: 9999,
            pointerEvents: 'none',
            minWidth: 180,
            maxWidth: 270,
            background: '#393e46',
            color: '#fff',
            borderRadius: 7,
            padding: '9px 12px',
            fontSize: '0.98rem',
            boxShadow: '0 4px 18px rgba(0,0,0,0.10)',
            whiteSpace: 'pre-line',
            wordBreak: 'break-word',
            textAlign: 'center',
            transition: 'opacity 0.25s',
            opacity: tooltip.visible ? 1 : 0,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
