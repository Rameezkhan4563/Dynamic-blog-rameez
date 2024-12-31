"use client";

import { BlogPost } from "@/lib/types";

interface ArticleHeaderProps {
  post: BlogPost;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-2 text-muted-foreground">
        <time>{post.date}</time>
        <span>•</span>
        <span>{post.readingTime} min read</span>
      </div>
    </header>
  );
}