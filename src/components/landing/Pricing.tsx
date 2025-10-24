import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Ofetikilo",
      adhesion: "4.999 Kz",
      methods: "Express (QR e Mobile)",
      taxa: "0,95% + IVA",
      mensalidade: "Isenta",
      features: ["Pagamento via QR Code", "Mobile Money", "Suporte básico"],
      popular: false,
    },
    {
      name: "Jikulomesso",
      adhesion: "9.999 Kz",
      methods: "Express, Unitel Money, Referências Kwanza",
      taxa: "0,95% + IVA",
      mensalidade: "Isenta",
      features: ["Todos os métodos Express", "Unitel Money", "Referências Kwanza", "Suporte prioritário"],
      popular: false,
    },
    {
      name: "Kintungu",
      adhesion: "12.999 Kz",
      methods: "Express, Unitel Money, Referências, Criptomoedas",
      taxa: "0,95% + IVA",
      mensalidade: "Isenta",
      features: ["Todos os métodos anteriores", "Pagamento com Cripto", "Dashboard avançado", "API completa"],
      popular: true,
    },
    {
      name: "Global",
      adhesion: "67.989 Kz",
      methods: "Visa, Mastercard, Amex, UnionPay, PIX, MBWay, Skrill, Neteller, SEPA",
      taxa: "0,95% + IVA (Kwanza)",
      mensalidade: "Isenta",
      features: ["Todos os cartões internacionais", "Métodos globais", "Multi-moeda", "Suporte 24/7"],
      popular: false,
    },
  ];

  const PlanCard = ({ plan }: { plan: typeof plans[0] }) => (
    <Card className={`flex flex-col h-full ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
      {plan.popular && <div className="bg-primary text-primary-foreground text-center text-sm font-bold py-1 rounded-t-lg">Mais Popular</div>}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
        <p className="text-4xl font-bold pt-4">{plan.adhesion}<span className="text-sm font-normal text-muted-foreground"> / adesão</span></p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4 mb-6 border-t pt-4">
          <div>
            <p className="text-sm font-semibold">Métodos:</p>
            <p className="text-sm text-muted-foreground">{plan.methods}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Taxa:</p>
            <p className="text-sm text-muted-foreground">{plan.taxa}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Mensalidade:</p>
            <p className="text-sm text-muted-foreground">{plan.mensalidade}</p>
          </div>
        </div>
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
  );

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
        
        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {plans.map((plan, index) => (
                <CarouselItem key={index} className="pl-4 basis-4/5 sm:basis-2/3 md:basis-1/2">
                  <div className="p-1 h-full">
                    <PlanCard plan={plan} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};