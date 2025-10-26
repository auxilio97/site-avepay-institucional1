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
        {/* Layout estático simplificado para depuração */}
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="h-16 flex justify-center items-center">
              <img
                src={partner.imgSrc}
                alt={partner.name}
                className={cn(
                  "max-h-10 w-auto object-contain",
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