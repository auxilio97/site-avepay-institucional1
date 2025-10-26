import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";

const Terms = () => {
  return (
    <>
      <Header />
      <main className="bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <article className="prose dark:prose-invert max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md">
            <h2>TERMOS E CONDIÇÕES DE USO – AVEPAY</h2>
            <p>
              <strong>Última atualização: 27/09/2025</strong>
            </p>

            <h4>1. Definições</h4>
            <p>
              <strong>1.1 “Plataforma AvePay”</strong> refere-se ao ecossistema de serviços de pagamento, contas multimoeda, faturamento, POS, cartões corporativos e APIs fornecidos pela Avenatec Lda.
            </p>
            <p>
              <strong>1.2 “Usuário” ou “Comerciante”</strong> refere-se à pessoa jurídica ou autónoma registada na plataforma para receber, cobrar ou gerir pagamentos.
            </p>
            <p>
              <strong>1.3 “Cliente”</strong> refere-se ao cliente final que realiza pagamento através da plataforma do Usuário.
            </p>
            <p>
              <strong>1.4 “Moeda de liquidação”</strong> refere-se à moeda (Kwanza, USD, Euro, Libra etc.) escolhida para recebimento ou saque.
            </p>
            <p>
              <strong>1.5 “Serviços”</strong> refere-se a todos os produtos da AvePay: contas comerciais, pagamentos, cartões, faturamento, API, gestão financeira, etc.
            </p>

            <h4>2. Aceitação dos Termos</h4>
            <p>
              Ao registar-se e utilizar a Plataforma AvePay, o Usuário concorda em cumprir estes Termos e todas as políticas aplicáveis (Privacidade, Tarifas, Uso Aceitável). Se não concordar, não deve usar a plataforma.
            </p>

            <h4>3. Elegibilidade e Registo</h4>
            <p>
              3.1 O Usuário deverá fornecer informações corretas, completas e atualizadas no momento do registo.
            </p>
            <p>
              3.2 A Avenatec reserva-se o direito de recusar, suspender ou encerrar o acesso se identificar fraude, risco elevado ou incumprimento.
            </p>
            <p>
              3.3 O Usuário deverá cumprir com todas as obrigações de Conheça Seu Cliente (KYC), prevenção à lavagem de dinheiro (AML) e regulamentos locais e internacionais.
            </p>

            <h4>4. Serviços e Funcionamento</h4>
            <p>4.1 A Plataforma permite:</p>
            <ul>
              <li>abertura de contas em múltiplas moedas;</li>
              <li>emissão de cartões corporativos;</li>
              <li>processamento de pagamentos em várias moedas e criptomoedas;</li>
              <li>geração de links de pagamento, faturas, POS virtual;</li>
              <li>automação financeira e relatórios;</li>
              <li>integração via API e com CMS como WordPress, Shopify, Magento, Joomla.</li>
            </ul>
            <p>
              4.2 A Avenatec não garante que todos os métodos de pagamento ou moedas estejam disponíveis em todos os momentos.
            </p>
            <p>
              4.3 O Usuário é responsável pela correta configuração, inserção de dados (ex: faturas, links) e interface com os seus clientes.
            </p>

            <h4>5. Tarifas, Moeda e Liquidação</h4>
            <p>
              5.1 O Usuário pagará as tarifas conforme o plano escolhido (Ofetikilo, Jikulomesso, Kintungu, Global) vigentes.
            </p>
            <p>
              5.2 As transações em Kwanza e outras moedas serão liquidadas conforme contrato, podendo existir taxas de conversão e levantamento.
            </p>
            <p>
              5.3 A Avenatec poderá alterar as tarifas mediante aviso prévio, conforme previsto no contrato suplementar.
            </p>

            <h4>6. Moedas e Câmbio</h4>
            <p>
              6.1 A Plataforma suporta Kwanza, USD, Euro, Libra, Real Brasileiro, Yuan, Yen, Rublo, Naira, Rand e criptomoedas – sujeitas a disponibilidade.
            </p>
            <p>
              6.2 Se uma transação envolver conversão de moeda, o câmbio utilizado e eventuais taxas deverão estar claramente informados ao Usuário.
            </p>
            <p>
              6.3 A Avenatec não se responsabiliza por variações cambiais ou atrasos de entidades bancárias externas.
            </p>

            <h4>7. Segurança, Compliance e Dados</h4>
            <p>
              7.1 A Avenatec cumpre normas internacionais de segurança (ex: PCI DSS, SOC1, SOC2) e mantém fundos de clientes em instituições financeiras reguladas.
            </p>
            <p>
              7.2 O Usuário deverá manter credenciais de acesso seguras e comunicar imediatamente qualquer uso não autorizado.
            </p>
            <p>
              7.3 O tratamento de dados pessoais segue a Política de Privacidade da Avenatec, respeitando legislação angolana e internacional.
            </p>

            <h4>8. Responsabilidades e Limitações de Responsabilidade</h4>
            <p>
              8.1 A Avenatec envidará esforços para garantir disponibilidade da plataforma, mas não garante funcionamento ininterrupto ou ausência de erro.
            </p>
            <p>
              8.2 Em nenhum caso a Avenatec será responsável por danos indiretos, lucro cessante, perda de dados ou danos emergentes resultantes da utilização ou impossibilidade de utilização da plataforma.
            </p>
            <p>
              8.3 O Usuário é responsável por verificar dados dos Clientes, conformidade de transações, envio correto de links/faturas e uso dos Serviços conforme contratos comerciais.
            </p>

            <h4>9. Fraude, Charge-back e Disputas</h4>
            <p>
              9.1 O Usuário deverá implementar os seus próprios processos de verificação e prevenção de fraude.
            </p>
            <p>
              9.2 Em caso de charge-back ou disputa de pagamento, o Usuário aceita que a Avenatec possa reter valores ou reverter transações, conforme cláusulas contratuais.
            </p>
            <p>
              9.3 O Usuário deverá cooperar com a Avenatec em investigações e repor perdas causadas por fraude ou incumprimento.
            </p>

            <h4>10. Rescisão e Suspensão</h4>
            <p>
              10.1 A Avenatec poderá suspender ou encerrar o acesso do Usuário em caso de fraude, alto risco, violação destes Termos ou ordem regulatória.
            </p>
            <p>
              10.2 Após encerrar o Serviço, o Usuário deverá saldar todas as obrigações pendentes e cessará o direito de utilizar a plataforma.
            </p>
            <p>
              10.3 Cláusulas de confidencialidade, responsabilidade e tarifas sobrevivem à rescisão.
            </p>

            <h4>11. Alterações aos Termos</h4>
            <p>
              A Avenatec poderá alterar estes Termos a qualquer momento, com aviso prévio. O Usuário que continuar a usar a plataforma após publicação das alterações concorda com os termos revistos.
            </p>

            <h4>12. Força Maior</h4>
            <p>
              Nenhuma das partes será responsabilizada por atraso ou incumprimento causado por evento fora do seu controlo razoável (ex: guerra, desastre natural, falha de infraestrutura de terceiros) conforme legislação aplicável.
            </p>

            <h4>13. Propriedade Intelectual</h4>
            <p>
              A Avenatec detém todos os direitos de propriedade intelectual associados à Plataforma AvePay. O Usuário concede uma licença limitada, não exclusiva e intransmissível para utilizar os serviços segundo estes Termos.
            </p>

            <h4>14. Lei Aplicável e Jurisdição</h4>
            <p>
              Estes Termos são regidos pela legislação da República de Angola. As partes elegem o foro de Luanda para dirimir quaisquer conflitos.
            </p>

            <h4>15. Contatos</h4>
            <p>
              Para dúvidas ou reclamações, o Usuário poderá contactar:
              <br />
              Avenatec Lda
              <br />
              Email: avepay@avenatec.it.com
              <br />
              Telefone: +244 935 325 003
              <br />
              Endereço: luanda, ingombota
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;