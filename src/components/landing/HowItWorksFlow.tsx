import React from "react";
import { useTranslation } from "react-i18next";
import {
  User,
  Wallet,
  CreditCard,
  Bell,
  BarChart,
  ArrowRightLeft,
  Shield,
  Headset,
  CheckCircle,
  ArrowDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: React.ReactNode } = {
  User: <User className="h-6 w-6 text-primary" />,
  Wallet: <Wallet className="h-6 w-6 text-primary" />,
  CreditCard: <CreditCard className="h-6 w-6 text-primary" />,
  Bell: <Bell className="h-6 w-6 text-primary" />,
  BarChart: <BarChart className="h-6 w-6 text-primary" />,
  ArrowRightLeft: <ArrowRightLeft className="h-6 w-6 text-primary" />,
  Shield: <Shield className="h-6 w-6 text-primary" />,
  Headset: <Headset className="h-6 w-6 text-primary" />,
};

interface Subsection {
  title: string | null;
  items: string[];
}

interface FlowSection {
  key: string;
  icon: keyof typeof iconMap;
  title: string;
  intro: string;
  subsections: Subsection[];
  footer: string;
}

interface SummaryItem {
  title: string;
  items: string[];
}

export const HowItWorksFlow = () => {
  const { t } = useTranslation();
  const pageData = t("how_it_works_page", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    sections: FlowSection[];
    summary: SummaryItem;
  };

  if (!pageData || !pageData.sections) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
              dangerouslySetInnerHTML={{ __html: pageData.title }}
            />
            <p
              className="text-muted-foreground text-lg"
              dangerouslySetInnerHTML={{ __html: pageData.subtitle }}
            />
          </div>
        </AnimatedSection>

        <div className="relative space-y-12 md:space-y-20">
          {pageData.sections.map((section, index) => (
            <AnimatedSection key={section.key} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
              <div className={cn("flex", index % 2 === 1 ? "md:justify-end" : "md:justify-start")}>
                <Card className="w-full md:max-w-3xl shadow-xl hover:shadow-primary/20 transition-shadow duration-300 relative">
                  {/* Timeline Connector */}
                  {index < pageData.sections.length - 1 && (
                    <div className={cn(
                      "absolute hidden md:block w-px h-full bg-primary/20 top-0",
                      index % 2 === 0 ? "right-[-4rem] translate-x-1/2" : "left-[-4rem] -translate-x-1/2"
                    )}>
                      <ArrowDown className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary/50" />
                    </div>
                  )}
                  
                  <CardHeader className="flex flex-row items-center gap-4 border-b pb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      {iconMap[section.icon]}
                    </div>
                    <CardTitle className="text-xl" dangerouslySetInnerHTML={{ __html: section.title }} />
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
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
                    {section.footer && (
                      <p className="text-sm italic text-primary/80 pt-4 border-t" dangerouslySetInnerHTML={{ __html: section.footer }} />
                    )}
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary Section */}
        <AnimatedSection animation="fade-in-up">
          <div className="mt-20 max-w-4xl mx-auto bg-primary/10 border-l-4 border-primary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4" dangerouslySetInnerHTML={{ __html: pageData.summary.title }} />
            <ul className="space-y-2">
              {pageData.summary.items.map((item, index) => (
                <li key={index} className="flex items-start text-foreground">
                  <span className="font-bold text-primary mr-2 flex-shrink-0">{index + 1}.</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};