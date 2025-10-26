import { useTranslation } from "react-i18next";
import { PrestashopLogo } from "../icons/partners/PrestashopLogo";
import { StripeLogo } from "../icons/partners/StripeLogo";
import { WiseLogo } from "../icons/partners/WiseLogo";
import { cn } from "@/lib/utils";

export const TrustedBy = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "EMIS", imgSrc: "/logo_emis.svg" },
    { name: "BNA", imgSrc: "/logotipo.png" },
    { name: "WordPress", imgSrc: "/what-is-wordpress.webp", invertInDark: true },
    { name: "Shopify", imgSrc: "/shopify_logo_black.png", invertInDark: true },
    { name: "Magento", imgSrc: "/magento-logo.webp" },
    { name: "PrestaShop", logo: <PrestashopLogo className="h-10 w-auto" /> },
    { name: "Stripe", logo: <StripeLogo className="h-10 w-auto" /> },
    { name: "Wise", logo: <WiseLogo className="h-10 w-auto" /> },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-lg font-semibold text-muted-foreground mb-8">
          {t("trusted_by.title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              {partner.imgSrc ? (
                <img 
                  src={partner.imgSrc} 
                  alt={partner.name} 
                  className={cn(
                    "h-10 w-auto object-contain",
                    partner.invertInDark && "dark:invert"
                  )}
                />
              ) : (
                partner.logo
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};