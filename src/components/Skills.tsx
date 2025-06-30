import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import { SiTypescript, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

const skillIcons: { [key: string]: React.ReactNode } = {
  react: <FaReact />,
  'node.js': <FaNodeJs />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <FaJsSquare />,
  typescript: <SiTypescript />,
  git: <FaGitAlt />,
  docker: <FaDocker />,
  express: <SiExpress />,
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
};

const getSkillIcon = (skill: string) => {
  return skillIcons[skill.toLowerCase()] || null;
};

export default function Skills() {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/about').then(res => {
      if (res.data && res.data.skills) {
        setSkills(res.data.skills);
      }
    });
  }, []);

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Yeteneklerim</h2>
        <div className="skills-container">
          <div className="skills-marquee">
            {[...skills, ...skills].map((skill, i) => (
              <div key={i} className="skill-badge">
                {getSkillIcon(skill)}
                <span className="skill-name">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

