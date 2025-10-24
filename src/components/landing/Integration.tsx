import { CheckCircle, Code } from "lucide-react";

export const Integration = () => {
  const languages = ["Python", "PHP", "Node.js", "Java", "C#", "+ Mais"];
  const features = [
    "Guias passo a passo",
    "Exemplos de código",
    "Sandbox para testes",
    "Suporte técnico dedicado",
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integre a AvePay ao seu negócio</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Integre a AvePay ao seu site, app ou sistema com nossa API multilíngue segura e bem documentada. Comece a aceitar pagamentos em minutos.
            </p>
            <div className="space-y-3">
              {features.map(feature => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 text-slate-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Documentação Completa</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              {languages.map(lang => (
                <div key={lang} className="bg-slate-800 p-4 rounded-md flex flex-col items-center justify-center">
                  <Code className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};