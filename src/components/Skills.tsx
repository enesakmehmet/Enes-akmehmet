import React, { useEffect, useState } from 'react';

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
  // ✅ setSkills burada tanımlı
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    // GEÇİCİ: Beceriler, arka uç güncellenene kadar hemen görüntülenmeleri için kod içinde sabit olarak ayarlanmıştır.
    // Normalde bu listenin backend'den gelmesi gerekir.
    const allSkills = [
      'React',
      'Node.js',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Git',
      'Docker',
      'MongoDB',
      'Express.js',
      'Passport.js',
      'PostgreSQL',
      'Prisma ORM',
      'NestJS'
    ];
    const uniqueSkills = [...new Set(allSkills)];
    setSkills(uniqueSkills);

    /* // Orijinal backend çağırma kodu
    axios
      .get('https://portfolio-backendd-production.up.railway.app/about')
      .then(res => {
        console.log('API response:', res.data);
        if (res.data && res.data.skills) {
          const uniqueSkills = [...new Set(res.data.skills)];
          setSkills(uniqueSkills);
        }
      })
      .catch(err => console.error('API error:', err));
    */
  }, []);

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Yeteneklerim</h2>
        <div className="skills-container">
          {skills.length > 0 ? (
            <div className="skills-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="skill-badge">
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
    </section>
  );
}
