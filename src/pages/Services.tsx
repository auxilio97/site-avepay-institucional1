import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  CreditCard,
  Link,
  LayoutDashboard,
  Receipt,
  Code,
  ShieldCheck,
  Building2,
  Headset,
  Rocket,
  CheckCircle,
} from "lucide-react";
import React from "react";

// Define the structure for type safety
interface ServiceItem {
  title: string | null;
  items: string[];
}

interface ServiceSection {
  key: string;
  icon: string;
  title: string;
  intro: string;
  subsections: ServiceItem[];
  footer: string | null;
}

const iconMap: { [key: string]: React.ReactNode } = {
  CreditCard: <CreditCard className="h-8 w-8 text-primary" />,
  Link: <Link className="h-8 w-8 text-primary" />,
  LayoutDashboard: <LayoutDashboard className="h-8 w-8 text-primary" />,
  Receipt: <Receipt className="h-8 w-8 text-primary" />,
  Code: <Code className="h-8 w-8 text-primary" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8 text-primary" />,
  Building2: <Building2 className="h-8 w-8 text-primary" />,
  Headset: <Headset className="h-8 w-8 text-primary" />,
  Rocket: <Rocket className="h-8 w-8 text-primary" />,
};

const Services = () => {
  const { t } = useTranslation();
  const pageData = t("services_page", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    description: string;
    sections: ServiceSection[];
    conclusion: string;
  };

  // Fallback check in case translation is not loaded yet
  if (!pageData || !pageData.sections) {
    return null;
  }

  return (
    <>
      <SEO
        title={pageData.title.replace(/<[^>]*>?/gm, '')}
        description={pageData.description}
      />
      <Header />
      <Breadcrumbs />
      <main>
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                  dangerouslySetInnerHTML={{ __html: pageData.title }}
                />
                <p
                  className="text-xl font-semibold text-foreground mb-4"
                  dangerouslySetInnerHTML={{ __html: pageData.subtitle }}
                />
                <p
                  className="text-muted-foreground text-lg"
                  dangerouslySetInnerHTML={{ __html: pageData.description }}
                />
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pageData.sections.map((section, index) => (
                <AnimatedSection key={section.key} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
                  <Card className="h-full flex flex-col shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 border-b pb-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        {iconMap[section.icon]}
                      </div>
                      <CardTitle className="text-2xl" dangerouslySetInnerHTML={{ __html: section.title }} />
                    </CardHeader>
                    <CardContent className="flex-grow pt-6 space-y-6">
                      <p className="text-lg font-medium text-foreground" dangerouslySetInnerHTML={{ __html: section.intro }} />
                      
                      {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="space-y-3">
                          {subsection.title && (
                            <h4 className="font-bold text-primary/90" dangerouslySetInnerHTML={{ __html: subsection.title }} />
                          )}
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-muted-foreground">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                    {section.footer && (
                      <CardFooter className="pt-4 border-t">
                        <p className="text-sm italic text-primary/80" dangerouslySetInnerHTML={{ __html: section.footer }} />
                      </CardFooter>
                    )}
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in-up">
              <div className="mt-20 max-w-4xl mx-auto text-center">
                <p className="text-2xl font-bold text-primary/90" dangerouslySetInnerHTML={{ __html: pageData.conclusion }} />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;