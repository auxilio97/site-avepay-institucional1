import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Integration } from "@/components/landing/Integration";
import { AnimatedSection } from "@/components/AnimatedSection";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("header.howItWorks")}
        description={t("integration.subtitle")}
      />
      <Header />
      <Breadcrumbs />
      <main className="bg-background dark:bg-slate-950 pt-10">
        <AnimatedSection>
          <Integration />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;