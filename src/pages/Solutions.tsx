import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Solutions as SolutionsSection } from "@/components/landing/Solutions";
import { AnimatedSection } from "@/components/AnimatedSection";

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("header.solutions")}
        description={t("solutions.subtitle")}
      />
      <Header />
      <Breadcrumbs />
      <main className="bg-slate-50 dark:bg-slate-900 pt-10">
        <AnimatedSection>
          <SolutionsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default Solutions;