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
  const [showPalette, setShowPalette] = useState(false);

  const handleThemeSelect = (selectedTheme: string) => {
    setShowPalette(false);
    onThemeChange(selectedTheme);
  }
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
            <div className="theme-palette ms-3" style={{ position: 'relative', display: 'inline-block' }}>
              <button
                className="btn btn-sm theme-toggle-btn"
                aria-label="Tema Seçici"
                onClick={() => setShowPalette((v) => !v)}
                style={{ width: 38, height: 38, borderRadius: '50%', background: '#eee', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                🎨
              </button>
              {showPalette && (
                <div className="theme-dropdown">
                  <div className="theme-options">
                    <button className={`theme-option ${theme === 'light' ? 'active' : ''}`} onClick={() => handleThemeSelect('light')} aria-label="Açık Tema">
                      <span className="theme-color" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)' }}></span> Açık
                    </button>
                    <button className={`theme-option ${theme === 'dark' ? 'active' : ''}`} onClick={() => handleThemeSelect('dark')} aria-label="Koyu Tema">
                      <span className="theme-color" style={{ background: 'linear-gradient(135deg, #222831 0%, #393e46 100%)' }}></span> Koyu
                    </button>
                    <button className={`theme-option ${theme === 'blue' ? 'active' : ''}`} onClick={() => handleThemeSelect('blue')} aria-label="Mavi Tema">
                      <span className="theme-color" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' }}></span> Mavi
                    </button>
                    <button className={`theme-option ${theme === 'purple' ? 'active' : ''}`} onClick={() => handleThemeSelect('purple')} aria-label="Mor Tema">
                      <span className="theme-color" style={{ background: 'linear-gradient(135deg, #a21caf 0%, #c026d3 100%)' }}></span> Mor
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
