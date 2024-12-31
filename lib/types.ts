export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  readingTime: number;
  coverImage: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}