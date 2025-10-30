import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const TrustedBy = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "EMIS", imgSrc: "/logo-emis.png" },
    { name: "BNA", imgSrc: "/logo-bna.png" },
    { name: "Atlantico", imgSrc: "/logo-atlantico.png" },
    { name: "Stripe", imgSrc: "/logo-stripe.png" },
    { name: "Wise", imgSrc: "/logo-wise.png" },
    { name: "WordPress", imgSrc: "/logo-wordpress.png", invertInDark: true },
    { name: "Shopify", imgSrc: "/logo-shopify.png", invertInDark: true },
    { name: "PrestaShop", imgSrc: "/logo-prestashop.png" },
    { name: "WooCommerce", imgSrc: "/logo-woocommerce.png", invertInDark: true },
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
              <div key={`${partner.name}-${index}`} className="flex-shrink-0 h-20 w-44 flex justify-center items-center px-6">
                <img
                  src={partner.imgSrc}
                  alt={partner.name}
                  className={cn(
                    "max-h-12 max-w-full object-contain",
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