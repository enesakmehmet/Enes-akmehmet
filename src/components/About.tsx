import { useState } from 'react';
import './About.css';
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Mobilde toggle, desktopta hover/focus ile flip
  const handleFlip = () => {
    // Ekran genişliği 991px'den küçükse (mobil/tablet)
    if (window.innerWidth <= 991) {
      setIsFlipped(f => !f);
    }
  };

  return (
    <section id="about" className="about-container" style={{ opacity: 1, visibility: 'visible', zIndex: 1 }}>
      <h2 style={{ color: '#1e293b', fontSize: '2.5rem', marginBottom: '30px' }}>Hakkımda</h2>
      <div className="about-content" style={{ opacity: 1, visibility: 'visible', zIndex: 10 }}>
        <div
          className="profile-flip-card"
          onClick={handleFlip}
          tabIndex={0}
        >
          <div
            className={`profile-flip-inner${isFlipped ? ' flipped' : ''}`}
          >
            <div className="profile-flip-front">
              <img
                src="/profile.jpeg"
                alt="Profil"
                className="profile-img rounded-circle"
                width={180}
                height={180}
                style={{ objectFit: 'cover', display: 'block' }}
                onError={e => {
                  if (!e.currentTarget.src.includes('placeholder-profile.png')) {
                    e.currentTarget.src = '/placeholder-profile.png';
                  }
                }}
              />
            </div>
            <div className="profile-flip-back" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <a href="https://github.com/enesakmehmet" target="_blank" rel="noopener noreferrer" className="profile-icon github" style={{ margin: 8 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.678.921.678 1.857 0 1.34-.012 2.421-.012 2.751 0 .267.18.577.688.479C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              </a>
              <a href="https://instagram.com/enesakmehmet" target="_blank" rel="noopener noreferrer" className="profile-icon instagram" style={{ margin: 8 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5a5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5zm5.125 1.125a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            Merhaba! Ben Enes. Teknolojiye ve yeniliğe büyük bir tutkuyla bağlı bir yazılım geliştiricisiyim. Problem çözmeyi, yeni şeyler öğrenmeyi ve bildiklerimi paylaşmayı seviyorum. Modern ve kullanıcı dostu web uygulamaları geliştirmek en büyük ilgi alanım.
          </p>
          <p>
            Kariyerim boyunca çeşitli projelerde yer alarak hem ön yüz (front-end) hem de arka yüz (back-end) teknolojilerinde deneyim kazandım. Amacım, insanların hayatını kolaylaştıran ve onlara değer katan ürünler ortaya çıkarmak.
          </p>
        </div>
        <div style={{ marginTop: 32 }}>
          <a
            href="/CV.pdf"
            download
            className="btn btn-primary btn-lg"
            style={{ minWidth: 180 }}
          >
            CV İndir
          </a>
        </div>
      </div>
      {/* GitHub Contributions Alanı */}
      <div className="github-contributions-section">
        <div className="github-card">
          <h3 className="github-title">GitHub Katkı Grafiğim</h3>
          <div className="github-calendar-wrapper">
            <GitHubCalendar
              username="enesakmehmet"
              blockSize={12}
              blockMargin={3}
              fontSize={12}
              colorScheme="light"
              theme={{
                light: ['#f0f9ff', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9'],
                dark: ['#f0f9ff', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9']
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
