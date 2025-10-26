import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const CTA = () => {
  const { t } = useTranslation();
  const complianceItems = t("cta.compliance", { returnObjects: true }) as string[];

  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isButtonDisabled = !isValidEmail || !agreed;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-background/60 dark:bg-slate-900/60 backdrop-blur-lg rounded-3xl border p-8 md:p-16 shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t("cta.subtitle")}
          </p>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <Input
                type="email"
                placeholder={t("cta.placeholder")}
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <a 
                href="https://avepaygateway.avenatec.it.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(isButtonDisabled && "cursor-not-allowed")}
                onClick={(e) => isButtonDisabled && e.preventDefault()}
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-primary text-white w-full sm:w-auto"
                  disabled={isButtonDisabled}
                >
                  {t("cta.button")}
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Checkbox 
                id="terms" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                {t("cta.agreement")}
              </label>
            </div>
            <p className="text-xs text-muted-foreground">
              {t("cta.terms")}
            </p>
          </div>
          <div className="flex justify-center items-center space-x-6 mt-8 text-sm text-muted-foreground">
              {complianceItems.map(item => (
                <div key={item} className="flex items-center"><ShieldCheck className="h-4 w-4 me-1" /> {item}</div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};