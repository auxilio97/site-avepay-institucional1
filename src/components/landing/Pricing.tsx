import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Smartphone, Wallet, Gem, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  const { t } = useTranslation();
  const plans = [
    {
      icon: <Smartphone className="h-10 w-10 text-orange-500" />,
      frameColor: "bg-orange-500",
      name: t("pricing.plans.ofetikilo.name"),
      adhesion: "4.999 Kz",
      methods: t("pricing.plans.ofetikilo.methods"),
      taxa: "0,95% + IVA",
      mensalidade: t("pricing.exempt"),
      features: t("pricing.plans.ofetikilo.features", { returnObjects: true }) as string[],
      popular: false,
      borderColor: "border-orange-500",
      buttonClasses: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      icon: <Wallet className="h-10 w-10 text-blue-500" />,
      frameColor: "bg-blue-500",
      name: t("pricing.plans.jikulomesso.name"),
      adhesion: "9.999 Kz",
      methods: t("pricing.plans.jikulomesso.methods"),
      taxa: "0,95% + IVA",
      mensalidade: t("pricing.exempt"),
      features: t("pricing.plans.jikulomesso.features", { returnObjects: true }) as string[],
      popular: false,
      borderColor: "border-blue-500",
      buttonClasses: "bg-blue-500 hover:bg-orange-500 text-white",
    },
    {
      icon: <Gem className="h-10 w-10 text-purple-600" />,
      frameColor: "bg-purple-600",
      name: t("pricing.plans.kintungu.name"),
      adhesion: "12.999 Kz",
      methods: t("pricing.plans.kintungu.methods"),
      taxa: "0,95% + IVA",
      mensalidade: t("pricing.exempt"),
      features: t("pricing.plans.kintungu.features", { returnObjects: true }) as string[],
      popular: true,
      borderColor: "border-purple-600",
      buttonClasses: "bg-purple-600 hover:bg-orange-500 text-white",
    },
    {
      icon: <Globe className="h-10 w-10 text-green-500" />,
      frameColor: "bg-green-500",
      name: t("pricing.plans.global.name"),
      adhesion: "67.989 Kz",
      methods: t("pricing.plans.global.methods"),
      taxa: t("pricing.plans.global.rate"),
      mensalidade: t("pricing.exempt"),
      features: t("pricing.plans.global.features", { returnObjects: true }) as string[],
      popular: false,
      borderColor: "border-green-500",
      buttonClasses: "bg-green-500 hover:bg-orange-500 text-white",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("pricing.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('relative flex flex-col h-full transition-all duration-300 hover:-translate-y-2 border-2 shadow-md', plan.borderColor, { 'shadow-lg': plan.popular })}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  {t("pricing.popular")}
                </div>
              )}
              <CardHeader className="items-center text-center pt-8">
                {plan.icon}
                <div className={cn("w-1/4 h-1 rounded-full mb-4", plan.frameColor)} />
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-4xl font-bold pt-4">{plan.adhesion}<span className="text-sm font-normal text-muted-foreground"> / {t("pricing.adhesion")}</span></p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4 mb-6 border-t pt-4">
                  <div>
                    <p className="text-sm font-semibold">{t("pricing.methods")}</p>
                    <p className="text-sm text-muted-foreground">{plan.methods}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t("pricing.rate")}</p>
                    <p className="text-sm text-muted-foreground">{plan.taxa}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t("pricing.monthly_fee")}</p>
                    <p className="text-sm text-muted-foreground">{plan.mensalidade}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className={cn("w-full", plan.buttonClasses)}>{t("pricing.cta")}</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};