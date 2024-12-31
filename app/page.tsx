import Link from "next/link";
import { ArrowRight, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts } from "@/lib/blog";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting tech enthusiasts worldwide through insightful content and meaningful discussions."
  },
  {
    icon: TrendingUp,
    title: "Cutting-Edge Insights",
    description: "Stay ahead with analysis of emerging technologies and industry trends."
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Join a thriving community of developers, designers, and tech professionals."
  },
  {
    icon: Zap,
    title: "Expert Knowledge",
    description: "Learn from industry veterans and thought leaders in technology."
  }
];

export default function Home() {
  const featuredPosts = getAllBlogPosts().slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background pt-16 pb-32">
        <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Empowering Tech Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              TechInsider is your premier destination for in-depth technology insights, 
              expert analysis, and forward-thinking perspectives that drive innovation 
              and shape the future of technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="gap-2">
                  Explore Articles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="relative group bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our latest insights, tutorials, and analysis from the world of technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer h-full">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time>{post.date}</time>
                      <span>•</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}