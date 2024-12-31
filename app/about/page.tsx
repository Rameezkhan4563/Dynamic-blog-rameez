import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Expert Content",
    description: "In-depth technical articles written by industry professionals",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Engaging discussions and knowledge sharing",
  },
  {
    icon: Target,
    title: "Focused Topics",
    description: "Carefully curated content on relevant tech topics",
  },
  {
    icon: Zap,
    title: "Latest Updates",
    description: "Stay current with the fastest-moving industry",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About TechInsider</h1>
        <p className="text-xl text-muted-foreground">
          Your trusted source for technology news, tutorials, and insights. We bring you the latest
          developments in the tech world, explained simply and clearly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="p-6">
              <CardContent className="flex items-start space-x-4 p-0">
                <Icon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="prose dark:prose-invert max-w-3xl mx-auto">
        <h2>Our Mission</h2>
        <p>
          At TechInsider, we believe in making technology accessible to everyone. Our mission is to
          provide clear, accurate, and engaging content that helps our readers stay informed and grow
          their technical skills.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team consists of experienced developers, designers, and tech enthusiasts who are
          passionate about sharing their knowledge and insights with the community.
        </p>
      </div>
    </div>
  );
}