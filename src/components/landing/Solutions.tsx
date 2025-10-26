import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Solutions = () => {
  const { t } = useTranslation();
  const solutions = t("solutions.items", { returnObjects: true }) as string[];
  const platformFeatures = t("solutions.unified_platform.features", { returnObjects: true }) as string[];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("solutions.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("solutions.subtitle")}
            </p>
            <div className="space-y-4">
              {solutions.map((solution) => (
                <div key={solution} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="font-medium text-lg">{solution}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="AvePay Dashboard" className="rounded-lg shadow-lg border" />
            <p className="text-center text-sm text-muted-foreground mt-2">{t("solutions.dashboard_uptime")}</p>
          </div>
        </div>
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                    <p className="text-4xl font-bold text-primary">60+</p>
                    <p className="text-muted-foreground">{t("solutions.stats.local_receipts")}</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">120+</p>
                    <p className="text-muted-foreground">{t("solutions.stats.direct_transfers")}</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">200Mi Kz</p>
                    <p className="text-muted-foreground">{t("solutions.stats.processed_annually")}</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">180+</p>
                    <p className="text-muted-foreground">{t("solutions.stats.active_markets")}</p>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("solutions.unified_platform.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("solutions.unified_platform.description")}
            </p>
            <ul className="space-y-2">
                {platformFeatures.map(feature => (
                    <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};