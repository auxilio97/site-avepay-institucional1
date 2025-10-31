import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { showLoading, showSuccess, showError, dismissToast } from "@/utils/toast";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: t("contact.validation.name") }),
    email: z.string().email({ message: t("contact.validation.email") }),
    subject: z.string().min(5, { message: t("contact.validation.subject") }),
    message: z.string().min(10, { message: t("contact.validation.message") }),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    const toastId = showLoading(t("contact.toast.sending"));

    // ========================================================================
    // INÍCIO DA ÁREA DE INTEGRAÇÃO MANUAL
    // ========================================================================
    //
    // Olá! É aqui que você precisa de adicionar a sua lógica de backend.
    // O objeto `data` contém os dados do formulário: { name, email, subject, message }
    //
    // Substitua o código de simulação abaixo pela sua chamada `fetch` real
    // para o seu endpoint no CyberPanel que envia o e-mail.
    //
    // Exemplo de chamada para um script PHP:
    //
    // try {
    //   const response = await fetch('https://seu-dominio.com/api/enviar-email.php', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    //
    //   if (!response.ok) {
    //     throw new Error('A resposta da rede não foi OK');
    //   }
    //
    //   dismissToast(toastId);
    //   showSuccess(t("contact.toast.success"));
    //   form.reset();
    //
    // } catch (error) {
    //   console.error('Erro ao enviar e-mail:', error);
    //   dismissToast(toastId);
    //   showError(t("contact.toast.error"));
    // } finally {
    //   setIsSubmitting(false);
    // }
    //

    // Simulação de chamada de API (substitua isto)
    console.log("Dados do formulário a serem enviados para o backend:", data);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simula atraso da rede

    // Simulação de sucesso (remova isto quando integrar)
    dismissToast(toastId);
    showSuccess(`${t("contact.toast.success")} (Simulação)`);
    form.reset();
    
    // ========================================================================
    // FIM DA ÁREA DE INTEGRAÇÃO MANUAL
    // ========================================================================

    setIsSubmitting(false);
  };

  return (
    <>
      <SEO
        title={t("contact.title")}
        description={t("contact.subtitle")}
      />
      <Header />
      <Breadcrumbs />
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
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form_name")}</FormLabel>
                              <FormControl>
                                <Input placeholder={t("contact.form_name_placeholder")} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form_email")}</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder={t("contact.form_email_placeholder")} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form_subject")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("contact.form_subject_placeholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form_message")}</FormLabel>
                            <FormControl>
                              <Textarea placeholder={t("contact.form_message_placeholder")} rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-primary text-white" disabled={isSubmitting}>
                        {isSubmitting ? t("contact.form_sending") : t("contact.form_submit")}
                      </Button>
                    </form>
                  </Form>
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