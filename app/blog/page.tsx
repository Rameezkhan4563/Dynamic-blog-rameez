import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="rounded-t-lg object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t">
                <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                  <time>{post.date}</time>
                  <span>{post.readingTime} min read</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}