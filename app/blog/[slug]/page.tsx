import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { ArticleHeader } from "@/components/blog/article-header";
import { CommentsSection } from "@/components/blog/comments-section";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | TechInsider`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert">
        <ArticleHeader post={post} />
        
        <div className="aspect-video mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        
        <div 
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <CommentsSection />
    </div>
  );
}