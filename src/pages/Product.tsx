import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Features } from "@/components/landing/Features";
import { AnimatedSection } from "@/components/AnimatedSection";

const Product = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("header.product")}
        description={t("features.subtitle")}
      />
      <Header />
      <Breadcrumbs />
      <main className="bg-slate-50 dark:bg-slate-900 pt-10">
        <AnimatedSection>
          <Features />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
};

export default Product;