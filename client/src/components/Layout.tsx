import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-heading text-primary flex items-center gap-2">
            BrightSpark<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className={buttonVariants({ size: "sm" })}>
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "block text-sm font-medium py-2 hover:text-primary",
                  location === item.href ? "text-primary font-bold" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className={cn(buttonVariants({ className: "w-full" }))} onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-4">BrightSpark<span className="text-accent">.</span></h3>
            <p className="text-gray-400 text-sm">
              Helping small businesses grow online with smart digital solutions since 2021.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                info@brightspark.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Mumbai, India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BrightSpark Digital Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
