import { Globe, CreditCard, Zap, Percent } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t("features.items.global.title"),
      description: t("features.items.global.description"),
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: t("features.items.methods.title"),
      description: t("features.items.methods.description"),
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t("features.items.conversion.title"),
      description: t("features.items.conversion.description"),
    },
    {
      icon: <Percent className="h-8 w-8 text-primary" />,
      title: t("features.items.rates.title"),
      description: t("features.items.rates.description"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("features.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="text-center bg-background/50 backdrop-blur-sm border border-transparent hover:border-primary/20 shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};