import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          asChild
          className="hover:text-primary"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}