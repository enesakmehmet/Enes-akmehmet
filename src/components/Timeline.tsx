import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: '2025',
    title: 'Frontend Developer',
    subtitle: 'XYZ Teknoloji',
    desc: 'Modern web uygulamaları geliştirdim, React ve TypeScript ile projeler yönettim.',
    icon: '💻',
  },
  {
    year: '2023',
    title: 'Stajyer Yazılımcı',
    subtitle: 'ABC Yazılım',
    desc: 'Yazılım geliştirme süreçlerine katıldım, takım çalışması deneyimi kazandım.',
    icon: '📝',
  },
  {
    year: '2022',
    title: 'Fullstack Bootcamp',
    subtitle: 'Kodluyoruz',
    desc: 'Fullstack eğitimini başarıyla tamamladım.',
    icon: '🎓',
  },
  {
    year: '2020',
    title: 'Üniversite Mezunu',
    subtitle: 'Örnek Üniversitesi',
    desc: 'Bilgisayar Mühendisliği bölümünden mezun oldum.',
    icon: '🏫',
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Kariyer Zaman Tüneli</h2>
      <div className="timeline-container">
        {timelineData.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-item-title">{item.title}</h3>
              <span className="timeline-subtitle">{item.subtitle}</span>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
