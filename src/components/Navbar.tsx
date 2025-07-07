import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  onToggleTheme: () => void;
  theme: string;
}

export default function Navbar({ onToggleTheme, theme }: NavbarProps) {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'about'; // Default to 'about'
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#about">Enes Akmehmet</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about">Hakkımda</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} href="#skills">Yeteneklerim</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} href="#projects">Projelerim</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="#contact">İletişim</a>
            </li>
          </ul>
          <button className="btn btn-sm theme-toggle-btn ms-3" onClick={onToggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}
