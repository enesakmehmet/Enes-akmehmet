export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
  detailedDescription?: string;
  gallery?: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'E-commerce Game Platform',
    description: 'Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir. Admin paneli ile ürün yönetimi, sipariş takibi ve kullanıcı yönetimi yapılabilir..',
    imageUrl: '/images/1.proje detay resim/ana.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    detailedDescription: 'Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir. Admin paneli ile ürün yönetimi, sipariş takibi ve kullanıcı yönetimi yapılabilir.',
    gallery: [
      '/images/1.proje detay resim/ana.png',
      '/images/1.proje detay resim/game.png',
      '/images/1.proje detay resim/game1.png',
      '/images/1.proje detay resim/game2.png'
    ],
    githubUrl: 'https://github.com/EnesAkm/ecommerce-game-platform'
  },
  {
    id: 'weather-app-main',
    title: 'Hava Durumu App',
    description: 'Hava durumunu kontrol edilmesine sağlayan app.',
    imageUrl: '/images/2.proje detay resim/anaopen.png',
    technologies: ['React', 'TypeScript', 'CSS'],
    detailedDescription: 'Modern ve kullanıcı dostu hava durumu uygulaması. Güncel hava durumu bilgileri, detaylı tahminler ve şık bir arayüz sunar. React ve TypeScript kullanılarak geliştirilmiş, responsive tasarımı ile tüm cihazlarda mükemmel çalışır.',
    gallery: [
      '/images/2.proje detay resim/anaopen.png',
      '/images/2.proje detay resim/open2.png',
      '/images/2.proje detay resim/open3.png',
      '/images/2.proje detay resim/open4.png'
    ],
    githubUrl: 'https://github.com/EnesAkm/weather-app'
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Kendi blog platformunuzu oluşturun.',
    imageUrl: '',
    technologies: ['Vue', 'Firebase'],
    githubUrl: 'https://github.com/EnesAkm/blog-platform'
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    description: 'Proje ve görev yönetimi için kapsamlı bir sistem. Takım çalışması, zaman takibi ve raporlama özellikleri.',
    imageUrl: '/images/task-management.png',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    detailedDescription: 'Modern bir görev yönetim sistemi. Kullanıcılar projeler oluşturabilir, görevler atayabilir, ilerleme takibi yapabilir ve takım üyeleriyle işbirliği yapabilir. Kanban board, Gantt chart ve detaylı raporlama özellikleri içerir.',
    gallery: [
      '/images/task-management/dashboard.png',
      '/images/task-management/kanban.png',
      '/images/task-management/reports.png'
    ],
    githubUrl: 'https://github.com/EnesAkm/task-management-system'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Gerçek zamanlı hava durumu ve 7 günlük tahmin uygulaması. Konum bazlı hava durumu ve interaktif haritalar.',
    imageUrl: '/images/weather-app.png',
    technologies: ['React Native', 'Redux', 'OpenWeather API'],
    detailedDescription: 'Kapsamlı hava durumu uygulaması. Mevcut konum ve arama yapılan şehirler için detaylı hava durumu bilgileri, saatlik ve günlük tahminler, hava durumu haritaları ve push bildirimleri içerir.',
    gallery: [
      '/images/weather-app/main.png',
      '/images/weather-app/forecast.png',
      '/images/weather-app/map.png',
      '/images/weather-app/settings.png'
    ],
    githubUrl: 'https://github.com/EnesAkm/weather-forecast-app'
  }
];
