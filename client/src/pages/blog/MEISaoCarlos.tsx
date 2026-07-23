/**
 * Artigo: MEI - Tudo o Que Você Precisa Saber Para Abrir em São Carlos
 * SEO: Long-tail keywords para MEI em São Carlos
 */

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogArticles } from "@/lib/blog-data";

const article = blogArticles.find(
  (a) => a.slug === "mei-tudo-que-voce-precisa-saber-para-abrir-em-sao-carlos"
)!;

export default function MEISaoCarlos() {
  return (
    <BlogArticleLayout article={article}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>O Que é o MEI?</h2>
        <p>
          O <strong>Microempreendedor Individual (MEI)</strong> é uma categoria empresarial criada pelo governo federal
          para formalizar trabalhadores autônomos e pequenos empreendedores. Com o MEI, você obtém um CNPJ, pode emitir
          notas fiscais, tem acesso a benefícios previdenciários e paga impostos reduzidos em uma guia única mensal (DAS).
        </p>
        <p>
          Em São Carlos, o MEI é uma excelente opção para profissionais como cabeleireiros, eletricistas, pintores,
          desenvolvedores de software, fotógrafos, personal trainers, entre centenas de outras atividades permitidas.
        </p>

        <h2>Requisitos Para Ser MEI em 2026</h2>
        <p>Para se formalizar como MEI, você precisa atender aos seguintes requisitos:</p>

        <div className="glass-card rounded-lg p-6 my-8">
          <ul className="space-y-3">
            {[
              "Faturamento anual de até R$ 81.000,00 (R$ 6.750,00 por mês em média)",
              "Não ser sócio, administrador ou titular de outra empresa",
              "Ter no máximo 1 funcionário contratado (com salário mínimo ou piso da categoria)",
              "Exercer uma das atividades permitidas pela lista oficial do MEI (CNAE)",
              "Não ser servidor público federal em atividade",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2>Passo a Passo Para Abrir o MEI em São Carlos</h2>

        <h3>1. Verifique se sua atividade é permitida</h3>
        <p>
          Acesse o site do Portal do Empreendedor e consulte a lista de atividades permitidas para o MEI.
          Nem todas as profissões podem se enquadrar nesta categoria. Profissões regulamentadas como advogados,
          médicos e engenheiros, por exemplo, não podem ser MEI.
        </p>

        <h3>2. Acesse o Portal do Empreendedor</h3>
        <p>
          A formalização é feita online, gratuitamente, pelo site gov.br/mei. Você precisará de:
        </p>
        <ul>
          <li>Conta gov.br com nível prata ou ouro</li>
          <li>CPF e data de nascimento</li>
          <li>Número do título de eleitor ou recibo da última declaração de IR</li>
          <li>CEP do endereço comercial (pode ser residencial)</li>
          <li>Número de celular e e-mail válidos</li>
        </ul>

        <h3>3. Preencha o cadastro</h3>
        <p>
          Informe seus dados pessoais, endereço comercial, atividades que irá exercer (principal e secundárias)
          e a forma de atuação (estabelecimento fixo, internet, porta a porta, etc.).
        </p>

        <h3>4. Emita o CCMEI</h3>
        <p>
          Após a conclusão do cadastro, você receberá o <strong>Certificado da Condição de Microempreendedor Individual (CCMEI)</strong>,
          que funciona como seu alvará de funcionamento provisório. Este documento já contém o seu CNPJ.
        </p>

        <h2>Quanto o MEI Paga de Imposto?</h2>
        <p>
          O MEI paga uma contribuição mensal fixa através do <strong>DAS (Documento de Arrecadação do Simples Nacional)</strong>,
          com valores atualizados para 2026:
        </p>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Atividade</th>
                <th className="text-right text-[#D4A843] font-semibold py-3">Valor Mensal (2026)</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Comércio e Indústria (ICMS)</td>
                <td className="text-right py-3">R$ 76,90</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Prestação de Serviços (ISS)</td>
                <td className="text-right py-3">R$ 80,90</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Comércio e Serviços (ICMS + ISS)</td>
                <td className="text-right py-3">R$ 81,90</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Esses valores incluem a contribuição ao INSS (5% do salário mínimo), garantindo ao MEI acesso a
          aposentadoria, auxílio-doença, salário-maternidade e pensão por morte.
        </p>

        <h2>Obrigações do MEI</h2>
        <p>Mesmo sendo um regime simplificado, o MEI tem algumas obrigações que precisam ser cumpridas:</p>

        <ul>
          <li><strong>Pagar o DAS mensalmente</strong> até o dia 20 de cada mês (pode ser por boleto, débito automático ou PIX)</li>
          <li><strong>Entregar a DASN-SIMEI</strong> (Declaração Anual do Simples Nacional) até 31 de maio de cada ano</li>
          <li><strong>Emitir nota fiscal</strong> quando vender para outras empresas (para pessoa física é opcional)</li>
          <li><strong>Manter o controle de receitas</strong> com o relatório mensal de faturamento</li>
        </ul>

        <h2>Quando é Hora de Migrar do MEI?</h2>
        <p>
          Existem situações em que o MEI precisa migrar para outro regime tributário, como o Simples Nacional (ME).
          Os principais motivos são:
        </p>

        <div className="glass-card rounded-lg p-6 my-8">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <AlertTriangle className="w-5 h-5 text-[#D4A843]" />
            Sinais de que é hora de migrar:
          </h3>
          <ul className="space-y-3">
            {[
              "Faturamento ultrapassou ou vai ultrapassar R$ 81.000,00 no ano",
              "Necessidade de contratar mais de 1 funcionário",
              "Inclusão de sócio na empresa",
              "Abertura de filial",
              "Atividade não permitida para MEI",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <blockquote>
          <strong>Dica do contador:</strong> Se você está próximo do limite de faturamento do MEI, não espere ultrapassar
          para buscar orientação. O planejamento antecipado evita multas e garante a melhor transição para o regime
          tributário mais adequado ao seu negócio.
        </blockquote>

        <h2>MEI em São Carlos: Conte com a Libra Resolv</h2>
        <p>
          A <strong>Libra Resolv Contabilidade</strong> em São Carlos oferece assessoria completa para MEI: abertura,
          emissão de DAS, entrega da DASN-SIMEI, regularização de pendências e migração para Simples Nacional quando
          necessário. Com mais de 35 anos de experiência, o contador Valdimir da Cunha garante um atendimento
          personalizado e eficiente.
        </p>
        <p>
          Entre em contato pelo WhatsApp <strong>(16) 99752-1540</strong> ou visite nosso escritório na Avenida Plaza,
          Sala 59, Vila Marina, São Carlos - SP.
        </p>
      </motion.div>
    </BlogArticleLayout>
  );
}
