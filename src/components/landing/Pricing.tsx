import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Ofetikilo",
      description: "Ideal para pequenos negócios e empreendedores individuais.",
      adhesion: "4.999 Kz",
      features: ["Pagamento via QR Code", "Mobile Money", "Suporte básico"],
    },
    {
      name: "Jikulomesso",
      description: "Para empresas em crescimento que precisam de mais opções.",
      adhesion: "9.999 Kz",
      features: ["Tudo do Ofetikilo", "Unitel Money", "Referências Kwanza", "Suporte prioritário"],
    },
    {
      name: "Kintungu",
      description: "A solução completa para negócios estabelecidos.",
      adhesion: "12.999 Kz",
      features: ["Tudo do Jikulomesso", "Pagamento com Cripto", "Dashboard avançado", "API completa"],
      popular: true,
    },
    {
      name: "Global",
      description: "Para empresas que operam em escala internacional.",
      adhesion: "67.989 Kz",
      features: ["Visa & Mastercard", "Métodos globais", "Multi-moeda", "Suporte 24/7"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para cada tipo de negócio
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Escolha o plano ideal para sua empresa e comece a aceitar pagamentos hoje mesmo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col h-full ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
              {plan.popular && <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 rounded-t-md">Mais Popular</div>}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="text-4xl font-bold pt-4">{plan.adhesion}<span className="text-sm font-normal text-muted-foreground"> / adesão</span></p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>Começar agora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};