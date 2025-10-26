import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { Separator } from "@/components/ui/separator";

export const Hero = () => {
  const { t } = useTranslation();
  const stats = [
    { end: 15000, suffix: "+", separator: ".", label: t("hero.stats.companies") },
    { end: 180, suffix: "+", label: t("hero.stats.countries") },
    { end: 200, suffix: "Mi Kz", label: t("hero.stats.processed") },
  ];

  return (
    <>
      {/* Top Section with Text and CTA */}
      <section className="py-28 md:py-32 bg-gradient-to-b from-background via-slate-50 to-muted/40 dark:from-slate-950 dark:via-slate-900 dark:to-background">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-50 dark:to-slate-300">
            {t("hero.title")}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            {t("hero.subtitle")}
          </p>
          <a href="https://avepaygateway.avenatec.it.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-orange-500 hover:bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {t("hero.cta")}
              <ArrowRight className="ms-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Section with Stats and Video Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/hero-video.mp4"
          />
          <div className="absolute inset-0 bg-background/70 dark:bg-slate-950/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/50 backdrop-blur-sm border dark:border-slate-800 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                {stats.map((stat, index) => (
                  <React.Fragment key={stat.label}>
                    <div className="flex flex-col items-center">
                      <p className="text-4xl font-bold text-primary dark:text-orange-400">
                        <CountUp 
                          end={stat.end} 
                          duration={2.5} 
                          separator={stat.separator} 
                          suffix={stat.suffix} 
                        />
                      </p>
                      <p className="text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                    {index < stats.length - 1 && (
                      <>
                        <Separator orientation="vertical" className="hidden md:block h-16" />
                        <Separator orientation="horizontal" className="block md:hidden w-1/2 mx-auto" />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};