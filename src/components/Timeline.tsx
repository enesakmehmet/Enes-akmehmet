
import './Timeline.css';

const timelineData = [
  {
    year: '2024-2025',
    title: 'Fullstack Developer',
    subtitle: 'Onlyjs Akedemi',
    desc: 'Modern web uygulamaları geliştirdim, React ve TypeScript ile projeler yönettim.',
    icon: '💻',
  },
  {
    year: '2020-2024',
    title: 'Mhrs Randevu Sistemi',
    subtitle: 'Sağlık Bakanlığı',
    desc: '182 Sağlık Bakanlığı.',
    icon: '📝',
  },
  {
    year: '2019',
    title: 'Akbank Çağrı Merkezi',
    subtitle: 'Akbank',
    desc: 'Çağrı Merkezi .',
    icon: '🎓',
  },
  {
    year: '2018',
    title: 'Üniversite Mezunu',
    subtitle: 'Eskişehir Anadolu Üniversitesi',
    desc: 'İşletme Yönetimi (lisans)..',
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
