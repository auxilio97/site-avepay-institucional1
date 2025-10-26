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

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="overflow-x-hidden">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <Solutions />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Integration />
        </AnimatedSection>
        <AnimatedSection>
          <CTA />
        </AnimatedSection>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;