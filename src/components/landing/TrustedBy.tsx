import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const TrustedBy = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "EMIS", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=EMIS" },
    { name: "BNA", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=BNA" },
    { name: "Atlantico", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=Atlantico" },
    { name: "Stripe", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=Stripe" },
    { name: "Wise", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=Wise" },
    { name: "WordPress", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=WordPress" },
    { name: "Shopify", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=Shopify" },
    { name: "Magento", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=Magento" },
    { name: "PrestaShop", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=PrestaShop" },
    { name: "WooCommerce", imgSrc: "https://via.placeholder.com/150x50/E5E7EB/4B5563?text=WooCommerce" },
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