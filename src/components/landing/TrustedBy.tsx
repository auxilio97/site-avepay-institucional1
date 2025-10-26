import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const TrustedBy = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "EMIS", imgSrc: "/placeholder.svg" },
    { name: "BNA", imgSrc: "/placeholder.svg" },
    { name: "Atlantico", imgSrc: "/placeholder.svg" },
    { name: "Stripe", imgSrc: "/placeholder.svg" },
    { name: "Wise", imgSrc: "/placeholder.svg" },
    { name: "WordPress", imgSrc: "/placeholder.svg", invertInDark: true },
    { name: "Shopify", imgSrc: "/placeholder.svg", invertInDark: true },
    { name: "Magento", imgSrc: "/placeholder.svg" },
    { name: "PrestaShop", imgSrc: "/placeholder.svg" },
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