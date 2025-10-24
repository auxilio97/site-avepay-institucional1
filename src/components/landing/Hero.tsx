import { Button } from "@/components/ui/button";

export const Hero = () => {
  const stats = [
    { value: "15.000+", label: "Empresas" },
    { value: "180+", label: "Países" },
    { value: "200Mi Kz", label: "Processados" },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          A plataforma global de pagamentos e finanças para empresas em expansão
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Mais de 15.000 empresas confiam na AvePay para gerenciar finanças e expandir globalmente. Abra contas comerciais, aceite pagamentos e controle gastos em uma única plataforma.
        </p>
        <Button size="lg">Comece agora</Button>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};