import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimatedSection } from "@/components/AnimatedSection";
import { HowItWorksFlow } from "@/components/landing/HowItWorksFlow";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("header.howItWorks")}
        description={t("how_it_works_page.subtitle")}
      />
      <Header />
      <Breadcrumbs />
      <main className="bg-background dark:bg-slate-950 pt-10">
        <HowItWorksFlow />
      </main>
      <Footer />
    </>
  );
};

export default HowItWorks;