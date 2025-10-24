import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Header = () => {
  const navLinks = [
    { name: "Produto", href: "#" },
    { name: "Serviços", href: "#" },
    { name: "Soluções", href: "#" },
    { name: "Como Funciona", href: "#" },
    { name: "Contato", href: "#" },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold text-primary">
          AvePay
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Entrar</Button>
          <Button>Cadastrar Meu Negócio</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <a href="#" className="text-2xl font-bold text-primary mb-4">
                  AvePay
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-6">
                  <Button variant="ghost">Entrar</Button>
                  <Button>Cadastrar Meu Negócio</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};