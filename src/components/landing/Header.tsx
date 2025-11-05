import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { LanguageSelector } from "../LanguageSelector";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("header.product"), href: "/#product" },
    { name: t("header.services"), href: "/#services" },
    { name: t("header.solutions"), href: "/#solutions" },
    { name: t("header.howItWorks"), href: "/#how-it-works" },
    { name: t("header.contact"), href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background/80 backdrop-blur-sm border-b"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/">
          <img src="/logo.png" alt="AvePay Logo" className="h-16 dark:brightness-0 dark:invert" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hover:bg-orange-500 hover:text-white">{t("header.login")}</Button>
            </a>
            <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer">
              <Button>{t("header.register")}</Button>
            </a>
          </div>
          <ThemeToggle />
          <LanguageSelector />
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
                    <img src="/logo.png" alt="AvePay Logo" className="h-16 dark:brightness-0 dark:invert" />
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-base font-medium text-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-2 pt-6">
                    <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="ghost" className="w-full hover:bg-orange-500 hover:text-white">{t("header.login")}</Button>
                    </a>
                    <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full">{t("header.register")}</Button>
                    </a>
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