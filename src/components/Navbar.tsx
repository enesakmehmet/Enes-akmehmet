import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [activeLink, setActiveLink] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'about';
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#about" onClick={handleLinkClick}>Enes Akmehmet</a>
          <button
            className="navbar-toggler"
            aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            aria-expanded={isMenuOpen}
            aria-controls="navbarNav"
            onClick={toggleMenu}
            tabIndex={0}
            type="button"
          >
            <div className="hamburger-icon">
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
          </button>
          <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about" onClick={handleLinkClick}>Hakkımda</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} href="#skills" onClick={handleLinkClick}>Yeteneklerim</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} href="#projects" onClick={handleLinkClick}>Projelerim</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="#contact" onClick={handleLinkClick}>İletişim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/EnesAkmehmet" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
