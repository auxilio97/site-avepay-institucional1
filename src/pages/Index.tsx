import { MadeWithDyad } from "@/components/made-with-dyad";
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

const Index = () => {
  return (
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
          <FAQ />
        </AnimatedSection>
        <AnimatedSection animation="fade-in-up">
          <CTA />
        </AnimatedSection>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;