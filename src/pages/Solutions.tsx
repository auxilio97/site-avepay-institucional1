import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Puzzle,
  ShieldCheck,
  Smartphone,
  Globe,
  Briefcase,
  Cloud,
  LifeBuoy,
  CheckCircle,
} from "lucide-react";
import React from "react";

const iconMap: { [key: string]: React.ReactNode } = {
  ecommerce: <Puzzle className="h-8 w-8 text-primary" />,
  gateway: <ShieldCheck className="h-8 w-8 text-primary" />,
  multichannel: <Smartphone className="h-8 w-8 text-primary" />,
  fintech: <Globe className="h-8 w-8 text-primary" />,
  corporate: <Briefcase className="h-8 w-8 text-primary" />,
  tech: <Cloud className="h-8 w-8 text-primary" />,
  support: <LifeBuoy className="h-8 w-8 text-primary" />,
};

interface Solution {
  key: string;
  title: string;
  features: string[];
}

const Solutions = () => {
  const { t } = useTranslation();
  const solutions = t("solutions_page.solutions", { returnObjects: true }) as Solution[];

  return (
    <>
      <SEO
        title={t("solutions_page.title")}
        description={t("solutions_page.subtitle")}
      />
      <Header />
      <Breadcrumbs />
      <main>
        <AnimatedSection>
          <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: t("solutions_page.title") }}
                />
                <p className="text-muted-foreground text-lg mb-12"
                  dangerouslySetInnerHTML={{ __html: t("solutions_page.subtitle") }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution) => (
                  <Card
                    key={solution.key}
                    className="bg-background/50 backdrop-blur-sm border shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        {iconMap[solution.key]}
                      </div>
                      <CardTitle dangerouslySetInnerHTML={{ __html: solution.title }} />
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: feature }} />
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default Solutions;