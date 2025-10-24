import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Crie sua conta gratuita e comece a aceitar pagamentos em minutos
        </p>
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <Input type="email" placeholder="Seu e-mail comercial" className="flex-grow" />
            <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Criar Conta →</Button>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              Concordo em receber comunicações da AvePay sobre produtos, serviços e eventos
            </label>
          </div>
          <p className="text-xs text-muted-foreground">
            Ao criar uma conta, você concorda com nossos Termos de Serviço e Política de Privacidade
          </p>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1" /> PCI DSS Certificado</div>
            <div className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1" /> SOC1 & SOC2</div>
            <div className="flex items-center"><ShieldCheck className="h-4 w-4 mr-1" /> Criptografia SSL</div>
        </div>
      </div>
    </section>
  );
};