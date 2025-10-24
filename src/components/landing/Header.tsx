import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Produto", href: "#" },
    { name: "Serviços", href: "#" },
    { name: "Soluções", href: "#" },
    { name: "Como Funciona", href: "#" },
    { name: "Contato", href: "#" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/">
          <img src="/logo.png" alt="AvePay Logo" className="h-12" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button>Cadastrar Meu Negócio</Button>
            </Link>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link to="/" className="mb-4">
                    <img src="/logo.png" alt="AvePay Logo" className="h-12" />
                  </Link>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-2 pt-6">
                    <Link to="/login">
                      <Button variant="ghost" className="w-full">Entrar</Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full">Cadastrar Meu Negócio</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};