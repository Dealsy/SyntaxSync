"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navItems, Routes } from "@/constants";

export default function Nav() {
  const pathName = usePathname();

  if (
    pathName.startsWith(Routes.Dashboard) ||
    pathName.startsWith(Routes.Studio)
  ) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between p-8">
        <div className="flex items-center">
          <Link href={Routes.Home} className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Your Logo</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href={Routes.Login}>Login</Link>
          </Button>
          <Button asChild>
            <Link href={Routes.SignUp}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ item }: { item: { name: string; href: string } }) {
  return (
    <Link
      href={item.href}
      className="transition-colors hover:text-foreground/80 text-foreground/60"
    >
      {item.name}
    </Link>
  );
}
