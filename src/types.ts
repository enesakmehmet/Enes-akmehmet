export interface AboutData {
  name: string;
  bio: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  tags: string[];
  technologies?: string[]; // Kullanılan teknolojiler (opsiyonel)
}
