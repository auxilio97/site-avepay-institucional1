import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Solutions } from "@/components/landing/Solutions";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Integration } from "@/components/landing/Integration";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQ } from "@/components/landing/FAQ";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AvePay",
    "url": "https://avepaygateway.avenatec.it.com",
    "logo": "https://avepaygateway.avenatec.it.com/logo.png",
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

  return (
    <>
      <SEO
        title={t("hero.title")}
        description={t("hero.subtitle")}
      >
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </SEO>
      <div className="text-foreground">
        <Header />
        <main className="overflow-x-hidden">
          <AnimatedSection animation="fade-in-up">
            <Hero />
          </AnimatedSection>
          <TrustedBy />
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