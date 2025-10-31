import { useTranslation } from "react-i18next";

const partners = [
  { name: "Stripe", logo: "/partners/Stripe.png" },
  { name: "Wise", logo: "/partners/Wise.png" },
  { name: "Shopify", logo: "/partners/Shopify.png" },
  { name: "Wordpress", logo: "/partners/Wordpress.png" },
  { name: "Woocommerce", logo: "/partners/Woocommerce.png" },
  { name: "Prestashop", logo: "/partners/Prestashop.png" },
  { name: "Atlantico", logo: "/partners/Atlantico.png" },
  { name: "BNA", logo: "/partners/Bna.png" },
  { name: "EMIS", logo: "/partners/Emis.png" },
];

export const Partners = () => {
  const { t } = useTranslation();

  // Duplicar os parceiros para um loop contínuo e suave
  const extendedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {t("partners.title")}
        </h2>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-infinite-scroll">
            {extendedPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-4" title={partner.name}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 w-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};