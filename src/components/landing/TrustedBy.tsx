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
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)"
          }}
        >
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 h-24 flex justify-center items-center px-8">
                <img
                  src={partner.imgSrc}
                  alt={partner.name}
                  className={cn(
                    "max-h-12 w-auto object-contain",
                    partner.invertInDark && "dark:invert"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};