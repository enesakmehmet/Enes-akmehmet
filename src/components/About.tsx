import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container reveal">
      <h2>Hakkımda</h2>
      <div className="about-content">
        <img
          src="/profile.jpg"
          alt="Profil"
          className="profile-img rounded-circle"
          width={180}
          height={180}
          style={{ objectFit: 'cover', margin: '0 auto 24px', display: 'block' }}
          onError={e => {
            if (!e.currentTarget.src.includes('placeholder-profile.png')) {
              e.currentTarget.src = '/placeholder-profile.png';
            }
          }}
        />
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
