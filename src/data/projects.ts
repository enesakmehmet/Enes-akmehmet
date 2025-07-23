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
    id: 'ecommerce-app',
    title: 'E-Commerce App',
    description: 'Full-stack e-ticaret uygulaması.',
    imageUrl: '',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/EnesAkm/ecommerce-app'
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Kendi blog platformunuzu oluşturun.',
    imageUrl: '',
    technologies: ['Vue', 'Firebase'],
    githubUrl: 'https://github.com/EnesAkm/blog-platform'
  }
];
