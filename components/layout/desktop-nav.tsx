"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "./navigation-items";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors",
            pathname === item.href
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}