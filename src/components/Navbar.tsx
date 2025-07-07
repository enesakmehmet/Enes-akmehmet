import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  onToggleTheme: () => void;
  theme: string;
}

export default function Navbar({ onToggleTheme, theme }: NavbarProps) {
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
            className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
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
            </ul>
            <button className="btn btn-sm theme-toggle-btn ms-3" onClick={onToggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
