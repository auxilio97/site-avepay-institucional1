import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings,
  CreditCard,
  LayoutDashboard,
  Puzzle,
  ShieldCheck,
  Globe,
  Lightbulb,
  Rocket,
} from "lucide-react";
import React from "react";

const iconMap: { [key: string]: React.ReactNode } = {
  gateway: <Settings className="h-8 w-8 text-primary" />,
  checkout: <CreditCard className="h-8 w-8 text-primary" />,
  dashboard: <LayoutDashboard className="h-8 w-8 text-primary" />,
  api: <Puzzle className="h-8 w-8 text-primary" />,
  security: <ShieldCheck className="h-8 w-8 text-primary" />,
  multichannel: <Globe className="h-8 w-8 text-primary" />,
  experience: <Lightbulb className="h-8 w-8 text-primary" />,
  innovation: <Rocket className="h-8 w-8 text-primary" />,
};

const Product = () => {
  const { t } = useTranslation();
  const features = t("product_page.features", { returnObjects: true }) as {
    key: string;
    title: string;
    description: string;
  }[];

  return (
    <>
      <SEO
        title={t("header.product")}
        description={t("product_page.subtitle").replace(/<[^>]*>?/gm, "")}
      />
      <Header />
      <Breadcrumbs />
      <main>
        <AnimatedSection>
          <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                  dangerouslySetInnerHTML={{ __html: t("product_page.title") }}
                />
                <p
                  className="text-muted-foreground text-lg mb-12"
                  dangerouslySetInnerHTML={{ __html: t("product_page.subtitle") }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                  <Card
                    key={feature.key}
                    className="text-center bg-background/50 backdrop-blur-sm border border-transparent hover:border-primary/20 shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                  >
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 p-4 rounded-full inline-block">
                        {iconMap[feature.key]}
                      </div>
                      <CardTitle
                        className="pt-2"
                        dangerouslySetInnerHTML={{ __html: feature.title }}
                      />
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: feature.description }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 max-w-4xl mx-auto">
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg text-center">
                  <p
                    className="text-lg font-medium text-primary/90"
                    dangerouslySetInnerHTML={{ __html: t("product_page.summary") }}
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default Product;