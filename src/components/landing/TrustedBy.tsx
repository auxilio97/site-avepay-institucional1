import { useTranslation } from "react-i18next";
import { EmisLogo } from "../icons/partners/EmisLogo";
import { BnaLogo } from "../icons/partners/BnaLogo";
import { WordpressLogo } from "../icons/partners/WordpressLogo";
import { ShopifyLogo } from "../icons/partners/ShopifyLogo";
import { MagentoLogo } from "../icons/partners/MagentoLogo";
import { PrestashopLogo } from "../icons/partners/PrestashopLogo";
import { StripeLogo } from "../icons/partners/StripeLogo";
import { WiseLogo } from "../icons/partners/WiseLogo";

export const TrustedBy = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "EMIS", logo: <EmisLogo className="h-8 w-auto" /> },
    { name: "BNA", logo: <BnaLogo className="h-8 w-auto" /> },
    { name: "WordPress", logo: <WordpressLogo className="h-8 w-auto" /> },
    { name: "Shopify", logo: <ShopifyLogo className="h-8 w-auto" /> },
    { name: "Magento", logo: <MagentoLogo className="h-8 w-auto" /> },
    { name: "PrestaShop", logo: <PrestashopLogo className="h-8 w-auto" /> },
    { name: "Stripe", logo: <StripeLogo className="h-8 w-auto" /> },
    { name: "Wise", logo: <WiseLogo className="h-8 w-auto" /> },
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
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};