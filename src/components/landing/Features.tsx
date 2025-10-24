import { Globe, CreditCard, Zap, Percent } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Alcance Global",
      description: "Opere em mais de 180 países com suporte a múltiplas moedas",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Múltiplos Métodos",
      description: "Aceite Visa, Mastercard, PIX, MBWay e muito mais",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Conversão Inteligente",
      description: "Receba em Kwanza e saque em qualquer moeda global",
    },
    {
      icon: <Percent className="h-8 w-8 text-primary" />,
      title: "Taxas Competitivas",
      description: "A partir de 0.95% + IVA com mensalidade isenta",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções poderosas para empresas modernas
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            A AvePay permite cobrar em Kwanza (AOA) e sacar para qualquer conta no mundo, em dólar, euro, real, yuan, cripto e libra. Na fase inicial, suporta Visa e Mastercard.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-lg">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};