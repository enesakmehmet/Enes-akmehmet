import './About.css';

import { useState } from 'react';
import './About.css';

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
    <section id="about" className="about-container reveal">
      <h2>Hakkımda</h2>
      <div className="about-content">
        <div
          className="profile-flip-card"
          onClick={handleFlip}
          onTouchEnd={handleFlip}
          tabIndex={0}
        >
          <div
            className="profile-flip-inner"
            style={isFlipped ? { transform: 'rotateY(180deg)' } : {}}
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
            <div className="profile-flip-back">
              <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer" className="profile-icon github">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.678.921.678 1.857 0 1.34-.012 2.421-.012 2.751 0 .267.18.577.688.479C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              </a>
              <a href="https://instagram.com/YOUR_INSTAGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="profile-icon instagram">
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
        {/* Hobiler Alanı */}
        <div className="hobbies-section" style={{ marginTop: 40, textAlign: 'center' }}>
          <h3 style={{ marginBottom: 16 }}>Hobilerim</h3>
          <div className="hobbies-icons" style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Kitap */}
            <div title="Kitap Okumak" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#6c63ff" strokeWidth="2"/><path d="M20 19.5A2.5 2.5 0 0 0 17.5 17H4" stroke="#6c63ff" strokeWidth="2"/><path d="M6.5 17V5.5A2.5 2.5 0 0 1 9 3h8a2.5 2.5 0 0 1 2.5 2.5V17" stroke="#6c63ff" strokeWidth="2"/></svg>
              <span style={{ fontSize: 12, marginTop: 4 }}>Kitap</span>
            </div>
            {/* Müzik */}
            <div title="Müzik Dinlemek" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="17" r="2.5" fill="#ff6584"/><circle cx="17" cy="17" r="2.5" fill="#ff6584"/><path d="M7 17V5l10-2v14" stroke="#ff6584" strokeWidth="2"/></svg>
              <span style={{ fontSize: 12, marginTop: 4 }}>Müzik</span>
            </div>
            {/* Futbol */}
            <div title="Futbol" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#43b581" strokeWidth="2"/><path d="M12 7l2 3h-4l2-3zm0 10l2-3h-4l2 3zm5-5l-3 2v-4l3 2zm-10 0l3 2v-4l-3 2z" stroke="#43b581" strokeWidth="2"/></svg>
              <span style={{ fontSize: 12, marginTop: 4 }}>Futbol</span>
            </div>
            {/* Kodlama */}
            <div title="Kodlama" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#fbbf24" strokeWidth="2"/><path d="M8 9l-2 3 2 3M16 9l2 3-2 3" stroke="#fbbf24" strokeWidth="2"/></svg>
              <span style={{ fontSize: 12, marginTop: 4 }}>Kodlama</span>
            </div>
            {/* Seyahat */}
            <div title="Seyahat" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="#00bcd4" strokeWidth="2"/><circle cx="12" cy="12" r="10" stroke="#00bcd4" strokeWidth="2"/></svg>
              <span style={{ fontSize: 12, marginTop: 4 }}>Seyahat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
