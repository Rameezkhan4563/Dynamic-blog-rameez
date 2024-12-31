import { BlogPost } from "./types";

const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    content: `
      <p>Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. In this post, we'll explore the key features that make Next.js stand out.</p>
      <h2>Why Next.js?</h2>
      <p>Next.js provides an excellent developer experience with features like:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>File-system based routing</li>
      </ul>
    `,
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    date: "2024-03-20",
    readingTime: 5,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks",
    content: `
      <p>React Hooks have revolutionized how we write React components. This comprehensive guide will help you understand and master the most important hooks.</p>
      <h2>Essential Hooks</h2>
      <p>We'll cover:</p>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
      </ul>
    `,
    excerpt: "Deep dive into React Hooks and learn how to write more efficient and maintainable React components.",
    date: "2024-03-18",
    readingTime: 8,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    content: `
      <p>Tailwind CSS has changed the way we style web applications. Learn the best practices and techniques to make the most of this utility-first CSS framework.</p>
      <h2>Key Concepts</h2>
      <p>We'll explore:</p>
      <ul>
        <li>Utility-first workflow</li>
        <li>Component patterns</li>
        <li>Responsive design</li>
        <li>Dark mode</li>
      </ul>
    `,
    excerpt: "Discover the best practices for building beautiful, responsive interfaces with Tailwind CSS.",
    date: "2024-03-15",
    readingTime: 6,
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=1000",
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}