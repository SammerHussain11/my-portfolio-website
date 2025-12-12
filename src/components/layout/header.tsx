"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, portfolioData, socialLinks } from "@/app/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderNavLinks = (className = "") =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={closeMobileMenu}
        className={cn(
          "text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
          className
        )}
      >
        {link.label}
      </Link>
    ));

  // const logoBg = isScrolled ? "bg-background/80" : "bg-background";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-sm"
          : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            // className={`h-12 w-12 rounded-full object-cover ${logoBg}`}
          />
          <span className="hidden font-bold sm:inline-block font-headline">
            {portfolioData.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {renderNavLinks()}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <div className="hidden sm:flex items-center gap-1">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          <ThemeToggle />

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        // className={`h-12 w-12 rounded-full object-cover ${logoBg}`}
                      />
                      <span className="font-bold font-headline">
                        {portfolioData.name}
                      </span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-1 p-4 flex-1">
                    {renderNavLinks("px-4 py-2 rounded-md hover:bg-muted")}
                  </nav>
                  <div className="flex items-center justify-center gap-2 p-4 border-t">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="ghost"
                        size="icon"
                        asChild
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
