import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container reveal">
      <h2>Hakkımda</h2>
      <div className="about-content">
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
    </section>
  );
};

export default About;
