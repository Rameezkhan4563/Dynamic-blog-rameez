import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Code, Palette, Lock } from "lucide-react";

const categories = [
  {
    title: "Web Development",
    description: "Modern web technologies and frameworks",
    icon: Code,
    count: 12,
  },
  {
    title: "Hardware",
    description: "Latest in computer hardware and gadgets",
    icon: Laptop,
    count: 8,
  },
  {
    title: "Design",
    description: "UI/UX design principles and tools",
    icon: Palette,
    count: 10,
  },
  {
    title: "Security",
    description: "Cybersecurity best practices and news",
    icon: Lock,
    count: 6,
  },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{category.description}</p>
                <p className="text-sm font-medium">{category.count} articles</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}