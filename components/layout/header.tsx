"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">TechInsider</span>
          </Link>
          
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}