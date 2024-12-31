import Link from "next/link";
import { Code2 } from "lucide-react";
import { navigation } from "../navigation-items";
import { Newsletter } from "./newsletter";
import { SocialLinks } from "./social-links";

const footerSections = [
  {
    title: "Company",
    links: navigation,
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and Newsletter Section */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold text-white">TechInsider</span>
            </Link>
            <Newsletter />
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>F-7 Markaz, Jinnah Super Market</p>
              <p>Islamabad, Pakistan</p>
              <p>contact@techinsider.com</p>
              <p>+92 (321) 1234567</p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} TechInsider. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}