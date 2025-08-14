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
    githubUrl: "https://github.com/enesakmehmet/game-web-v3",
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
    githubUrl: "https://github.com/enesakmehmet/weather-app-react",
  },
  {
    id: "Happy Pets-app",
    title: "Happy Pets",
    description: "Evcil Hayvan Ürünleri ve Hizmetleri Happy Pets.",
    imageUrl: "/images/3.proje detay resim/happyana.png",
    technologies: ["React", "TypeScript", "CSS"],
    detailedDescription:
      "Happy Pets - Evcil Hayvan Ürünleri ve Hizmetleri Happy Pets, evcil hayvanlarınız için en iyi ürünleri ve hizmetleri sunan bir online pet shop'tur. Kedi, köpek, kuş ve diğer evcil hayvanlar için kaliteli mama, oyuncak, aksesuar ve bakım hizmetleri sunuyoruz. Profesyonel ekibimiz ve geniş ürün yelpazemizle, evcil dostlarınızın tüm ihtiyaçlarını karşılıyoruz..",
    gallery: [
      "/images/3.proje detay resim/happyana.png",
      "/images/3.proje detay resim/happy1.png",
      "/images/3.proje detay resim/happy2.png",
      "/images/3.proje detay resim/happy3.png",
    ],
    githubUrl: "https://github.com/enesakmehmet/Pad-shop-Web",
  },
  {
    id: "Cyrpto-app",
    title: "Cyrpto Site",
    description:
      "Gelişmiş özelliklerle donatılmış modern Cyrpto satın alım uygulaması.",
    imageUrl: "/images/5.proje detay resim/Adsız.png",
    technologies: ["React", "TypeScript", "CSS"],
    detailedDescription:
      "Modern ve kullanıcı dostu Cyrpto satım alım uygulaması.",
    gallery: [
      "/images/5.proje detay resim/Adsız.png",
      "/images/5.proje detay resim/2.png",
      "/images/5.proje detay resim/3.png",
      "/images/5.proje detay resim/4.png",
    ],
    githubUrl: "https://github.com/enesakmehmet/Cyrpto",
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
