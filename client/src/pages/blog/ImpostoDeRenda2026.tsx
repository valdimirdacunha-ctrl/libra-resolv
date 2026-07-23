/**
 * Artigo: Como Declarar o Imposto de Renda 2026
 * SEO: Long-tail keywords para IR em São Carlos
 */

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, FileText } from "lucide-react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogArticles } from "@/lib/blog-data";

const article = blogArticles.find(
  (a) => a.slug === "como-declarar-imposto-de-renda-2026-guia-completo"
)!;

export default function ImpostoDeRenda2026() {
  return (
    <BlogArticleLayout article={article}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Quem Precisa Declarar o Imposto de Renda em 2026?</h2>
        <p>
          A Receita Federal estabelece critérios específicos para determinar quem é obrigado a declarar o Imposto de Renda
          Pessoa Física (IRPF) em 2026, referente ao ano-calendário 2025. Se você se enquadra em qualquer uma das situações
          abaixo, a declaração é obrigatória.
        </p>

        <div className="glass-card rounded-lg p-6 my-8">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <AlertTriangle className="w-5 h-5 text-[#D4A843]" />
            Está obrigado a declarar quem:
          </h3>
          <ul className="space-y-3">
            {[
              "Recebeu rendimentos tributáveis acima de R$ 33.888,00 em 2025",
              "Recebeu rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte acima de R$ 200.000,00",
              "Obteve ganho de capital na alienação de bens ou direitos",
              "Realizou operações em bolsas de valores com soma superior a R$ 40.000,00",
              "Teve receita bruta de atividade rural superior a R$ 169.440,00",
              "Possuía bens ou direitos com valor total superior a R$ 800.000,00 em 31/12/2025",
              "Passou à condição de residente no Brasil em qualquer mês de 2025",
              "Optou pela isenção do IR sobre ganho de capital na venda de imóvel residencial",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2>Prazos Importantes do IRPF 2026</h2>
        <p>
          O prazo para entrega da declaração do Imposto de Renda 2026 vai de <strong>17 de março a 30 de maio de 2026</strong>.
          Quem perder o prazo está sujeito a multa mínima de R$ 165,74, podendo chegar a 20% do imposto devido.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <div className="glass-card rounded-lg p-6 text-center">
            <p className="text-[#D4A843] text-3xl font-bold mb-2">17/03</p>
            <p className="text-white/60 text-sm">Início do prazo de entrega</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <p className="text-[#D4A843] text-3xl font-bold mb-2">30/05</p>
            <p className="text-white/60 text-sm">Último dia para declarar</p>
          </div>
        </div>

        <h2>Documentos Necessários Para a Declaração</h2>
        <p>
          Organizar os documentos com antecedência é fundamental para uma declaração correta e sem erros.
          Abaixo listamos os principais documentos que você deve separar:
        </p>

        <h3>Documentos pessoais</h3>
        <ul>
          <li>CPF do titular e de todos os dependentes</li>
          <li>Título de eleitor (para primeira declaração)</li>
          <li>Comprovante de endereço atualizado</li>
          <li>Dados bancários para restituição (banco, agência, conta e tipo)</li>
          <li>Cópia da declaração do ano anterior (se houver)</li>
        </ul>

        <h3>Comprovantes de rendimentos</h3>
        <ul>
          <li>Informe de rendimentos do empregador ou pró-labore</li>
          <li>Informe de rendimentos de bancos e corretoras</li>
          <li>Informe de rendimentos de aluguéis recebidos</li>
          <li>Comprovantes de rendimentos de aposentadoria ou pensão (INSS)</li>
          <li>Recibos de trabalho autônomo (carnê-leão)</li>
        </ul>

        <h3>Comprovantes de despesas dedutíveis</h3>
        <ul>
          <li>Recibos e notas fiscais de despesas médicas (médicos, dentistas, psicólogos, exames, internações)</li>
          <li>Comprovantes de despesas com educação (escolas, faculdades, cursos técnicos)</li>
          <li>Comprovantes de contribuição ao INSS e previdência privada (PGBL)</li>
          <li>Recibos de pagamento de pensão alimentícia judicial</li>
          <li>Comprovantes de doações incentivadas (ECA, fundos do idoso, cultura)</li>
        </ul>

        <h2>Deduções Permitidas no Imposto de Renda 2026</h2>
        <p>
          As deduções são a principal forma de reduzir o imposto a pagar ou aumentar a restituição. Conheça os principais
          limites de dedução para o IRPF 2026:
        </p>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Tipo de Dedução</th>
                <th className="text-right text-[#D4A843] font-semibold py-3">Limite Anual</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Dependentes</td>
                <td className="text-right py-3">R$ 2.275,08 por dependente</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Educação</td>
                <td className="text-right py-3">R$ 3.561,50 por pessoa</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Despesas médicas</td>
                <td className="text-right py-3">Sem limite</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Previdência privada (PGBL)</td>
                <td className="text-right py-3">12% da renda bruta</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Pensão alimentícia</td>
                <td className="text-right py-3">Valor integral (judicial)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Desconto simplificado</td>
                <td className="text-right py-3">20% (máx. R$ 16.754,34)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Como Evitar a Malha Fina</h2>
        <p>
          A malha fina é o processo de verificação da Receita Federal que retém declarações com inconsistências.
          Para evitar problemas, siga estas recomendações:
        </p>

        <ul>
          <li><strong>Declare todos os rendimentos</strong>, mesmo os isentos. A Receita cruza informações com empregadores, bancos e outras fontes.</li>
          <li><strong>Não infle despesas médicas</strong>. A Receita verifica os valores com os profissionais de saúde através da DMED.</li>
          <li><strong>Confira os dados dos dependentes</strong>. CPF incorreto ou dependente declarado por duas pessoas gera retenção.</li>
          <li><strong>Atenção aos aluguéis</strong>. Se você recebe aluguel, declare corretamente e recolha o carnê-leão mensal.</li>
          <li><strong>Revise antes de enviar</strong>. Use a opção "Verificar pendências" no programa da Receita Federal.</li>
        </ul>

        <h2>Declaração Completa ou Simplificada?</h2>
        <p>
          O próprio programa da Receita Federal calcula automaticamente qual modelo é mais vantajoso para você.
          De forma geral:
        </p>
        <ul>
          <li>A <strong>declaração completa</strong> é indicada para quem tem muitas despesas dedutíveis (saúde, educação, dependentes, previdência privada)</li>
          <li>A <strong>declaração simplificada</strong> aplica um desconto padrão de 20% sobre os rendimentos tributáveis, limitado a R$ 16.754,34</li>
        </ul>

        <blockquote>
          <strong>Dica do contador:</strong> Se suas despesas dedutíveis somam mais de R$ 16.754,34 no ano, a declaração completa
          provavelmente será mais vantajosa. Na dúvida, consulte um contador de confiança.
        </blockquote>

        <h2>Por Que Contratar um Contador Para Declarar o IR?</h2>
        <p>
          Embora seja possível fazer a declaração por conta própria, um contador profissional pode identificar deduções
          que você não conhece, evitar erros que levam à malha fina e maximizar sua restituição. Além disso, em caso de
          notificação da Receita Federal, o contador pode representá-lo e resolver a situação com agilidade.
        </p>

        <div className="glass-card rounded-lg p-6 my-8 border-l-4 border-[#D4A843]">
          <div className="flex items-start gap-4">
            <FileText className="w-8 h-8 text-[#D4A843] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Declare seu IR com a Libra Resolv</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                A Libra Resolv Contabilidade em São Carlos SP oferece o serviço completo de declaração de Imposto de Renda
                para pessoa física e jurídica. Com mais de 35 anos de experiência, garantimos uma declaração correta,
                otimizada e dentro do prazo. Entre em contato pelo WhatsApp: (16) 99752-1540.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </BlogArticleLayout>
  );
}
