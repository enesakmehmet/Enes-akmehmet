import { useState, useMemo } from 'react';
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
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPassport,
  SiPrisma,
  SiNestjs,
} from 'react-icons/si';

// İkonlar
const skillIcons: { [key: string]: React.ReactNode } = {
  react: <FaReact style={{ color: '#61DAFB' }} />,
  'node.js': <FaNodeJs style={{ color: '#339933' }} />,
  html: <FaHtml5 style={{ color: '#E34F26' }} />,
  css: <FaCss3Alt style={{ color: '#1572B6' }} />,
  javascript: <FaJsSquare style={{ color: '#F7DF1E' }} />,
  typescript: <SiTypescript style={{ color: '#3178C6' }} />,
  git: <FaGitAlt style={{ color: '#F05032' }} />,
  docker: <FaDocker style={{ color: '#2496ED' }} />,
  'express.js': <SiExpress style={{ color: '#000000' }} />,
  mongodb: <SiMongodb style={{ color: '#47A248' }} />,
  postgresql: <SiPostgresql style={{ color: '#336791' }} />,
  'passport.js': <SiPassport style={{ color: '#34E27A' }} />,
  'prisma orm': <SiPrisma style={{ color: '#2D3748' }} />,
  nestjs: <SiNestjs style={{ color: '#E0234E' }} />,
};

// Tooltip açıklamaları
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

// Skill kategorileri
const skillCategories = {
  Tümü: [],
  Frontend: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  Backend: ['Node.js', 'Express.js', 'NestJS', 'Passport.js'],
  Database: ['MongoDB', 'PostgreSQL', 'Prisma ORM'],
  Tools: ['Git', 'Docker'],
};

const categoryIcons: { [key: string]: string } = {
  Tümü: '🎯',
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Tools: '🔧',
};

const getSkillIcon = (skill: string) => {
  return skillIcons[skill.toLowerCase()] || null;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
    visible: boolean;
  }>({ text: '', x: 0, y: 0, visible: false });

  const memoizedSkills = useMemo(
    () => [
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
    ],
    []
  );

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'Tümü') {
      return memoizedSkills;
    }
    return skillCategories[activeCategory as keyof typeof skillCategories] || [];
  }, [activeCategory, memoizedSkills]);

  const handleMouseMove = (e: React.MouseEvent, skill: string) => {
    const padding = 18;
    let x = e.clientX;
    let y = e.clientY;
    if (window.innerWidth - x < 270) x = window.innerWidth - 270 - padding;
    if (x < padding) x = padding;
    if (y < 60) y = 60;

    setTooltip({
      text: descs[skill.toLowerCase()] || 'Yetenek açıklaması.',
      x,
      y,
      visible: true,
    });
  };

  const handleMouseLeave = () =>
    setTooltip((t) => ({ ...t, visible: false }));

  const handleTouch = (e: React.TouchEvent, skill: string) => {
    const touch = e.touches[0];
    const padding = 18;
    let x = touch.clientX;
    let y = touch.clientY;

    const tooltipWidth = 270;
    const tooltipHeight = 60;

    if (window.innerWidth - x < tooltipWidth) {
      x = window.innerWidth - tooltipWidth - padding;
    }
    if (x < padding) x = padding;
    if (y < tooltipHeight) y = tooltipHeight;
    if (window.innerHeight - y < tooltipHeight) {
      y = window.innerHeight - tooltipHeight - padding;
    }

    setTooltip({
      text: descs[skill.toLowerCase()] || 'Yetenek açıklaması.',
      x,
      y,
      visible: true,
    });

    setTimeout(() => {
      setTooltip((t) => ({ ...t, visible: false }));
    }, 2500);
  };

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Yeteneklerim</h2>

        <div className="category-filters">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="category-icon">{categoryIcons[category]}</span>
              {category}
              <span className="category-count">
                {category === 'Tümü'
                  ? memoizedSkills.length
                  : skillCategories[category as keyof typeof skillCategories]
                      .length}
              </span>
            </button>
          ))}
        </div>

        <div className="skills-container">
          {filteredSkills.length > 0 ? (
            <div className="skills-grid">
              {filteredSkills.map((skill, i) => (
                <div
                  key={`${activeCategory}-${skill}-${i}`}
                  className="skill-badge tooltip-container"
                  onMouseMove={(e) => handleMouseMove(e, skill)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={(e) => handleTouch(e, skill)}
                  onTouchEnd={handleMouseLeave}
                  style={
                    {
                      animationDelay: `${i * 0.1}s`,
                      '--float-delay': `${i * 0.2}s`,
                      '--float-duration': `${2.8 + (i % 3) * 0.4}s`,
                      opacity: 1,
                      visibility: 'visible',
                      display: 'flex',
                      cursor: 'pointer',
                    } as React.CSSProperties & {
                      '--float-delay': string;
                      '--float-duration': string;
                    }
                  }
                >
                  {getSkillIcon(skill)}
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Bu kategoride henüz skill yok.</p>
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
