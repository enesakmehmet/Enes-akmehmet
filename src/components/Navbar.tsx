import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  theme: string;
  onThemeChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [activeLink, setActiveLink] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const lastScrollY = { value: window.scrollY };

    const updateOnScroll = () => {
      ticking = false;
      setScrolled(lastScrollY.value > 50);

      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'about';
      const viewportMid = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop;
        const sectionBottom = sectionTop + el.offsetHeight;
        if (viewportMid >= sectionTop && viewportMid < sectionBottom) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      setActiveLink(currentSection);
    };

    const onScroll = () => {
      lastScrollY.value = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateOnScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateOnScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <nav
        className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''} ${
          isMenuOpen ? 'menu-open' : ''
        }`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#about" onClick={handleLinkClick}>
            Enes Akmehmet
          </a>
          <button
            className="navbar-toggler"
            aria-label={isMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            aria-expanded={isMenuOpen}
            aria-controls="navbarNav"
            onClick={toggleMenu}
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
                <a
                  className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  href="#about"
                  onClick={handleLinkClick}
                >
                  Hakkımda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
                  href="#skills"
                  onClick={handleLinkClick}
                >
                  Yeteneklerim
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                  href="#projects"
                  onClick={handleLinkClick}
                >
                  Projelerim
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                  href="#contact"
                  onClick={handleLinkClick}
                >
                  İletişim
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/EnesAkmehmet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-sm ms-3"
                  onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
                >
                  Tema: {theme === 'light' ? '🌞' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
