import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Pricing } from "@/components/landing/Pricing";
import { AnimatedSection } from "@/components/AnimatedSection";

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("header.services")}
        description={t("pricing.subtitle")}
      />
      <Header />
      <Breadcrumbs />
      <main className="bg-background dark:bg-slate-950 pt-10">
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default Services;