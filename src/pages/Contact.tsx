import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="bg-slate-50 dark:bg-slate-900 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t("contact.subtitle")}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fade-in-right">
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.form_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.form_name")}</Label>
                        <Input id="name" placeholder={t("contact.form_name_placeholder")} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.form_email")}</Label>
                        <Input id="email" type="email" placeholder={t("contact.form_email_placeholder")} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("contact.form_subject")}</Label>
                      <Input id="subject" placeholder={t("contact.form_subject_placeholder")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.form_message")}</Label>
                      <Textarea id="message" placeholder={t("contact.form_message_placeholder")} rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-primary text-white">
                      {t("contact.form_submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-left">
              <div className="space-y-8 md:pt-8">
                <h3 className="text-2xl font-bold">{t("contact.info_title")}</h3>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("contact.info_email_title")}</h4>
                    <p className="text-muted-foreground">{t("contact.info_email_description")}</p>
                    <a href="mailto:avepay@avenatec.it.com" className="text-primary hover:underline">
                      avepay@avenatec.it.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("contact.info_phone_title")}</h4>
                    <p className="text-muted-foreground">{t("contact.info_phone_description")}</p>
                    <a href="tel:+244935325003" className="text-primary hover:underline">
                      +244 935 325 003
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("contact.info_address_title")}</h4>
                    <p className="text-muted-foreground">{t("contact.info_address_description")}</p>
                    <p className="text-primary">Luanda, Ingombota, Angola</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;