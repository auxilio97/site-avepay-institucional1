import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Partners } from "@/components/landing/Partners";
import { Features } from "@/components/landing/Features";
import { Solutions } from "@/components/landing/Solutions";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Integration } from "@/components/landing/Integration";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/landing/FAQ";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AvePay",
    "url": "https://avepay.avenatec.it.com",
    "logo": "https://avepay.avenatec.it.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+244-935-325-003",
      "contactType": "customer service",
      "email": "avepay@avenatec.it.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ingombota",
      "addressLocality": "Luanda",
      "addressCountry": "AO"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://avepay.avenatec.it.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://avepay.avenatec.it.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title={t("hero.title")}
        description={t("hero.subtitle")}
      >
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
      </SEO>
      <div className="text-foreground overflow-x-hidden">
        <Header />
        <main className="pb-80">
          <AnimatedSection animation="fade-in-up">
            <Hero />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up">
            <Partners />
          </AnimatedSection>
          <AnimatedSection animation="zoom-in">
            <Features />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-left">
            <Solutions />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up">
            <Pricing />
          </AnimatedSection>
          <AnimatedSection animation="zoom-in">
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right">
            <Integration />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up">
            <CTA />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up">
            <FAQ />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;