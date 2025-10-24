import { CheckCircle } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    "Contas Comerciais",
    "AvePay Spend",
    "Pagamentos",
    "APIs Financeiras",
  ];
  const platformFeatures = [
    "Contas comerciais globais",
    "Pagamentos em múltiplas moedas",
    "Controle de gastos inteligente",
    "Transferências internacionais",
    "APIs robustas e seguras",
    "Dashboard intuitivo",
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções AvePay</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tudo o que sua empresa precisa para crescer globalmente
            </p>
            <div className="space-y-4">
              {solutions.map((solution) => (
                <div key={solution} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="/placeholder.svg" alt="AvePay Dashboard" className="rounded-lg shadow-lg" />
            <p className="text-center text-sm text-muted-foreground mt-2">AvePay Dashboard - 99.9% Uptime</p>
          </div>
        </div>
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                    <p className="text-4xl font-bold">60+</p>
                    <p className="text-muted-foreground">países com recebimentos locais</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold">120+</p>
                    <p className="text-muted-foreground">países com transferências diretas</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold">200Mi Kz</p>
                    <p className="text-muted-foreground">processados por ano</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold">180+</p>
                    <p className="text-muted-foreground">mercados de atuação</p>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plataforma Unificada</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tudo o que sua empresa precisa — contas, pagamentos, gastos e transferências — em uma única plataforma integrada e fácil de usar.
            </p>
            <ul className="space-y-2">
                {platformFeatures.map(feature => (
                    <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};