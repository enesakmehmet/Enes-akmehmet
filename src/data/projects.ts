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
    id: "personal-website",
    title: "E-commerce Game Platform",
    description:
      "Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir. Admin paneli ile ürün yönetimi, sipariş takibi ve kullanıcı yönetimi yapılabilir..",
    imageUrl: "/images/1.proje detay resim/ana.png",
    technologies: ["React", "CSS", "JavaScript"],
    detailedDescription:
      "Modern bir e-ticaret platformu. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilir. Admin paneli ile ürün yönetimi, sipariş takibi ve kullanıcı yönetimi yapılabilir.",
    gallery: [
      "/images/1.proje detay resim/ana.png",
      "/images/1.proje detay resim/game.png",
      "/images/1.proje detay resim/game1.png",
      "/images/1.proje detay resim/game2.png",
    ],
    githubUrl: "https://github.com/EnesAkm/ecommerce-game-platform",
  },
  {
    id: "weather-app-main",
    title: "Hava Durumu App",
    description: "Hava durumunu kontrol edilmesine sağlayan app.",
    imageUrl: "/images/2.proje detay resim/anaopen.png",
    technologies: ["React", "TypeScript", "CSS"],
    detailedDescription:
      "Modern ve kullanıcı dostu hava durumu uygulaması. Güncel hava durumu bilgileri, detaylı tahminler ve şık bir arayüz sunar. React ve TypeScript kullanılarak geliştirilmiş, responsive tasarımı ile tüm cihazlarda mükemmel çalışır.",
    gallery: [
      "/images/2.proje detay resim/anaopen.png",
      "/images/2.proje detay resim/open2.png",
      "/images/2.proje detay resim/open3.png",
      "/images/2.proje detay resim/open4.png",
    ],
    githubUrl: "https://github.com/EnesAkm/weather-app",
  },
  {
    id: "mood-tracker-app",
    title: "Happy Mood Tracker",
    description: "Günlük ruh halinizi takip edin ve mutluluğunuzu artırın.",
    imageUrl: "/images/3.proje detay resim/happyana.png",
    technologies: ["React", "TypeScript", "CSS"],
    detailedDescription:
      "Modern ve kullanıcı dostu ruh hali takip uygulaması. Günlük mood durumunuzu kaydedin, istatistiklerinizi görüntüleyin ve mutluluğunuzu artıracak öneriler alın. React ve TypeScript kullanılarak geliştirilmiş, responsive tasarımı ile tüm cihazlarda mükemmel çalışır.",
    gallery: [
      "/images/3.proje detay resim/happyana.png",
      "/images/3.proje detay resim/happy1.png",
      "/images/3.proje detay resim/happy2.png",
      "/images/3.proje detay resim/happy3.png",
    ],
    githubUrl: "https://github.com/EnesAkm/mood-tracker-app",
  },
  {
    id: "calculator-app",
    title: "Smart Calculator",
    description:
      "Gelişmiş özelliklerle donatılmış modern hesap makinesi uygulaması.",
    imageUrl: "/images/5.proje detay resim/Adsız.png",
    technologies: ["React", "TypeScript", "CSS"],
    detailedDescription:
      "Modern ve kullanıcı dostu hesap makinesi uygulaması. Temel matematik işlemlerinden gelişmiş fonksiyonlara kadar geniş bir yelpazede hesaplama yapabilir. Geçmiş işlemleri kaydetme, bilimsel hesaplamalar ve şık arayüz özellikleri içerir. React ve TypeScript kullanılarak geliştirilmiş, responsive tasarımı ile tüm cihazlarda mükemmel çalışır.",
    gallery: [
      "/images/5.proje detay resim/Adsız.png",
      "/images/5.proje detay resim/2.png",
      "/images/5.proje detay resim/3.png",
      "/images/5.proje detay resim/4.png",
    ],
    githubUrl: "https://github.com/EnesAkm/smart-calculator-app",
  },
  {
    id: "movie-app",
    title: "Movie Discovery App",
    description: "Film keşfetmek ve izlemek için modern sinema uygulaması.",
    imageUrl: "/images/4.proje detay resim/movieana.png",
    technologies: ["React", "TypeScript", "CSS"],
    detailedDescription:
      "Modern ve kullanıcı dostu film keşif uygulaması. Popüler filmleri keşfedin, detaylı bilgileri görüntüleyin, fragmanları izleyin ve kişisel izleme listenizi oluşturun. React ve TypeScript kullanılarak geliştirilmiş, responsive tasarımı ile tüm cihazlarda mükemmel çalışır.",
    gallery: [
      "/images/4.proje detay resim/movieana.png",
      "/images/4.proje detay resim/movie1.png",
      "/images/4.proje detay resim/movie2.png",
    ],
    githubUrl: "https://github.com/EnesAkm/movie-discovery-app",
  },
];
