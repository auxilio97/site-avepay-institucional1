import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";

export const Solutions = () => {
  const { t } = useTranslation();
  const solutions = t("solutions.items", { returnObjects: true }) as string[];
  const platformFeatures = t("solutions.unified_platform.features", { returnObjects: true }) as string[];

  const stats = [
    { end: 60, suffix: "+", label: t("solutions.stats.local_receipts") },
    { end: 120, suffix: "+", label: t("solutions.stats.direct_transfers") },
    { end: 200, suffix: "Mi Kz", label: t("solutions.stats.processed_annually") },
    { end: 180, suffix: "+", label: t("solutions.stats.active_markets") },
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-background">
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
                  <CheckCircle className="h-6 w-6 text-green-500 me-3" />
                  <span className="font-medium text-lg">{solution}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="AvePay Dashboard" className="rounded-lg shadow-lg border" loading="lazy" />
            <div className="absolute bottom-4 start-4 p-3 rounded-lg bg-black/20 backdrop-blur-md border border-white/20 animate-fade-in-up">
              <p className="text-sm text-white font-semibold">{t("solutions.dashboard_uptime")}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-bold text-primary">
                      <CountUp 
                        end={stat.end} 
                        duration={3} 
                        suffix={stat.suffix} 
                        enableScrollSpy
                        scrollSpyDelay={300}
                      />
                    </p>
                    <p className="text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
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
                        <CheckCircle className="h-5 w-5 text-primary me-2" />
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