export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies?: string[];
  detailedDescription?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'E-commerce Game Platform',
    description: 'A game sales platform built with modern web technologies, showcasing various games with detailed descriptions and trailers.',
    imageUrl: '/images/1.proje detay resim/ana.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    detailedDescription: 'This project is a comprehensive e-commerce platform for video games. It features a dynamic and responsive user interface for browsing games, viewing details, and watching trailers. The platform is built with performance and user experience in mind, utilizing modern frontend technologies.',
    gallery: [
      '/images/1.proje detay resim/ana.png',
      '/images/1.proje detay resim/game.png',
      '/images/1.proje detay resim/game1.png',
      '/images/1.proje detay resim/game2.png'
    ]
  },
  {
    id: 'ecommerce-app',
    title: 'E-Commerce App',
    description: 'Full-stack e-ticaret uygulaması.',
    imageUrl: '',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'Kendi blog platformunuzu oluşturun.',
    imageUrl: '',
    technologies: ['Vue', 'Firebase']
  }
];
