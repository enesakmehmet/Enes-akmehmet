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
                <div className="theme-dropdown" style={{ position: 'absolute', right: 0, top: 44, background: '#fff', border: '1px solid #ccc', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.07)', padding: 12, zIndex: 1000, minWidth: 160 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <button className="theme-option" style={{ background: theme === 'light' ? '#e0e7ff' : '#fff', color: '#333', border: 'none', padding: 8, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => handleThemeSelect('light')} aria-label="Açık Tema">
                      <span style={{ background: '#fff', border: '1px solid #eee', width: 20, height: 20, borderRadius: '50%', display: 'inline-block' }}></span> Açık
                    </button>
                    <button className="theme-option" style={{ background: theme === 'dark' ? '#393e46' : '#222831', color: '#fff', border: 'none', padding: 8, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => handleThemeSelect('dark')} aria-label="Koyu Tema">
                      <span style={{ background: '#222831', width: 20, height: 20, borderRadius: '50%', display: 'inline-block' }}></span> Koyu
                    </button>
                    <button className="theme-option" style={{ background: theme === 'blue' ? '#3b82f6' : '#2563eb', color: '#fff', border: 'none', padding: 8, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => handleThemeSelect('blue')} aria-label="Mavi Tema">
                      <span style={{ background: '#2563eb', width: 20, height: 20, borderRadius: '50%', display: 'inline-block' }}></span> Mavi
                    </button>
                    <button className="theme-option" style={{ background: theme === 'purple' ? '#c026d3' : '#a21caf', color: '#fff', border: 'none', padding: 8, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => handleThemeSelect('purple')} aria-label="Mor Tema">
                      <span style={{ background: '#a21caf', width: 20, height: 20, borderRadius: '50%', display: 'inline-block' }}></span> Mor
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
