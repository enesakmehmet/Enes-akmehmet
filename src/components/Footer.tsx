
import React, { useState } from 'react';
import './Footer.css';
import SnakeGame from './SnakeGame';
import Toast from './Toast';
import { useKonamiCode } from '../hooks/useKonamiCode';

const LAST_UPDATED = '2025-07-24'; // Otomatik güncellemek için build script eklenebilir

export default function Footer() {
  const [showSnake, setShowSnake] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { isActivated, resetActivation } = useKonamiCode();

  React.useEffect(() => {
    if (isActivated) {
      setShowToast(true);
      setTimeout(() => {
        setShowSnake(true);
      }, 1000);
      resetActivation();
    }
  }, [isActivated, resetActivation]);

  const handleCloseSnake = () => {
    setShowSnake(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <span>© 2025-2026 Enes Akmehmet | Tüm hakları saklıdır.</span>
        <div className="footer-social">
          <a href="https://github.com/enesakmehmet" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/enesakmehmet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
        <div style={{marginTop: 12, fontSize: '0.95rem', color: '#bbb'}}>
          <span>En son güncelleme: {LAST_UPDATED}</span>
          <span style={{margin: '0 10px'}}>|</span>
          <span>Ziyaretçi: <VisitorCounter /></span>
          <span style={{margin: '0 10px'}}>|</span>
          <span 
            style={{cursor: 'pointer', opacity: 0.7}} 
            onClick={() => setShowSnake(true)}
            title="🎮 Gizli oyun için Konami kodunu dene: ↑↑↓↓←→←→BA"
          >
            🎮
          </span>
        </div>
      </div>
    </footer>
    
    {showSnake && <SnakeGame onClose={handleCloseSnake} />}
    {showToast && (
      <Toast 
        message="🎉 Konami kodu aktif! Snake oyunu açılıyor..." 
        type="success"
        onClose={() => setShowToast(false)}
      />
    )}
    </>
  );
}

function VisitorCounter() {
  const [count, setCount] = React.useState<number>(0);
  React.useEffect(() => {
    let visitCount = Number(localStorage.getItem('visitCount') || '0');
    if (!sessionStorage.getItem('visited')) {
      visitCount += 1;
      localStorage.setItem('visitCount', String(visitCount));
      sessionStorage.setItem('visited', '1');
    }
    setCount(visitCount);
  }, []);
  return <b>{count}</b>;
}