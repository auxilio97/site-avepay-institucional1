export const Footer = () => {
  const products = ["Contas Comerciais", "AvePay Spend", "Pagamentos", "APIs Financeiras"];
  const company = ["Sobre Nós", "Carreiras", "Imprensa", "Parceiros"];
  const resources = ["Documentação", "Blog", "Suporte", "Status"];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-2 inline-block mb-2">
              <img src="/logo.png" alt="AvePay Logo" className="h-12" />
            </div>
            <p className="text-sm mb-4 max-w-sm">
              A plataforma global de pagamentos e finanças para empresas em expansão. Aceite pagamentos em Kwanza e saque para qualquer moeda do mundo.
            </p>
            <div className="space-y-2 text-sm">
              <p>avepay@avenatec.it.com</p>
              <p>+244 935325003</p>
              <p>Luanda, Angola</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              {products.map(p => <li key={p}><a href="#" className="hover:text-white">{p}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {company.map(c => <li key={c}><a href="#" className="hover:text-white">{c}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              {resources.map(r => <li key={r}><a href="#" className="hover:text-white">{r}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; AvePay 2025 – Todos os direitos reservados. Criado e desenvolvido pela: Avenatec LDA</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <span>PCI DSS</span>
              <span>SOC1</span>
              <span>SOC2</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-center sm:text-left">
            Fundos mantidos em instituições financeiras seguras e regulamentadas. Serviços de pagamento fornecidos pela AvePay Angola, Lda.
          </p>
        </div>
      </div>
    </footer>
  );
};