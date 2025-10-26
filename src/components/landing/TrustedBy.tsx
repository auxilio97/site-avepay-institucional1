import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const TrustedBy = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "EMIS", imgSrc: "/logo_emis.svg" },
    { name: "BNA", imgSrc: "/logotipo.png" },
    { name: "Atlantico", imgSrc: "/logo_atlantico_green.png" },
    { name: "Stripe", imgSrc: "/Stripe_Logo,_revised_2016.svg.png" },
    { name: "Wise", imgSrc: "/470456-Frame-c061f4-large-1677657684.png" },
    { name: "WordPress", imgSrc: "/what-is-wordpress.webp", invertInDark: true },
    { name: "Shopify", imgSrc: "/shopify_logo_black.png", invertInDark: true },
    { name: "Magento", imgSrc: "/magento-logo.webp" },
    { name: "PrestaShop", imgSrc: "/png-clipart-prestashop-logo-e-commerce-clearsale-magento-online-shop-logo-purple-violet.png" },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-lg font-semibold text-muted-foreground mb-8">
          {t("trusted_by.title")}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img 
                src={partner.imgSrc} 
                alt={partner.name} 
                className={cn(
                  "h-12 w-auto object-contain",
                  partner.invertInDark && "dark:invert"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};