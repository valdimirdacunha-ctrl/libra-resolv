/**
 * Artigo: Lucro Real ou Lucro Presumido - Qual o Melhor Para Sua Empresa?
 * SEO: Long-tail keywords para planejamento tributário em São Carlos
 */

import { motion } from "framer-motion";
import { CheckCircle, XCircle, Calculator } from "lucide-react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogArticles } from "@/lib/blog-data";

const article = blogArticles.find(
  (a) => a.slug === "lucro-real-ou-lucro-presumido-qual-melhor-para-sua-empresa"
)!;

export default function LucroRealPresumido() {
  return (
    <BlogArticleLayout article={article}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Entendendo os Regimes Tributários no Brasil</h2>
        <p>
          A escolha do regime tributário é uma das decisões mais importantes para qualquer empresa. Ela impacta
          diretamente quanto você paga de impostos, como sua contabilidade é organizada e até a competitividade
          do seu negócio no mercado. No Brasil, os três principais regimes são o <strong>Simples Nacional</strong>,
          o <strong>Lucro Presumido</strong> e o <strong>Lucro Real</strong>.
        </p>
        <p>
          Neste artigo, vamos focar na comparação entre Lucro Real e Lucro Presumido, explicando as diferenças,
          vantagens, desvantagens e como escolher o melhor regime para a sua empresa em São Carlos.
        </p>

        <h2>O Que é o Lucro Presumido?</h2>
        <p>
          O <strong>Lucro Presumido</strong> é um regime tributário simplificado em que a Receita Federal presume
          qual foi o lucro da empresa com base em um percentual fixo sobre o faturamento bruto. Esse percentual
          varia conforme a atividade:
        </p>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Atividade</th>
                <th className="text-right text-[#D4A843] font-semibold py-3">Presunção de Lucro</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Comércio e Indústria</td>
                <td className="text-right py-3">8%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Transporte de cargas</td>
                <td className="text-right py-3">8%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Serviços em geral</td>
                <td className="text-right py-3">32%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Transporte de passageiros</td>
                <td className="text-right py-3">16%</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Serviços hospitalares</td>
                <td className="text-right py-3">8%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Sobre esse lucro presumido, aplica-se o IRPJ (15%) e a CSLL (9%). Além disso, a empresa paga PIS (0,65%)
          e COFINS (3%) sobre o faturamento bruto, no regime cumulativo.
        </p>

        <h3>Vantagens do Lucro Presumido</h3>
        <div className="space-y-3 my-6">
          {[
            "Contabilidade mais simples e menos custosa",
            "Previsibilidade na carga tributária (baseada no faturamento)",
            "Ideal para empresas com margem de lucro real superior à presunção",
            "Menos obrigações acessórias que o Lucro Real",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <p className="text-white/70">{item}</p>
            </div>
          ))}
        </div>

        <h3>Desvantagens do Lucro Presumido</h3>
        <div className="space-y-3 my-6">
          {[
            "Se a margem de lucro real for menor que a presunção, você paga mais imposto",
            "Não permite compensar prejuízos fiscais de períodos anteriores",
            "PIS e COFINS no regime cumulativo (sem créditos)",
            "Limite de faturamento anual de R$ 78 milhões",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-white/70">{item}</p>
            </div>
          ))}
        </div>

        <h2>O Que é o Lucro Real?</h2>
        <p>
          No <strong>Lucro Real</strong>, o IRPJ e a CSLL são calculados sobre o <strong>lucro contábil efetivo</strong>
          da empresa, ajustado por adições e exclusões previstas na legislação fiscal. Ou seja, os impostos são
          proporcionais ao lucro que a empresa realmente obteve.
        </p>

        <h3>Vantagens do Lucro Real</h3>
        <div className="space-y-3 my-6">
          {[
            "Impostos proporcionais ao lucro real — se não houve lucro, não há IRPJ/CSLL a pagar",
            "Possibilidade de compensar prejuízos fiscais de períodos anteriores (até 30% do lucro)",
            "PIS e COFINS no regime não cumulativo (com direito a créditos)",
            "Ideal para empresas com margens de lucro apertadas ou prejuízo",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <p className="text-white/70">{item}</p>
            </div>
          ))}
        </div>

        <h3>Desvantagens do Lucro Real</h3>
        <div className="space-y-3 my-6">
          {[
            "Contabilidade mais complexa e rigorosa (exige escrituração completa)",
            "Mais obrigações acessórias (ECF, ECD, LALUR, etc.)",
            "Custo contábil mais elevado",
            "Alíquotas de PIS (1,65%) e COFINS (7,6%) mais altas (compensadas por créditos)",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-white/70">{item}</p>
            </div>
          ))}
        </div>

        <h2>Comparação Direta: Lucro Real vs. Lucro Presumido</h2>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Critério</th>
                <th className="text-center text-[#D4A843] font-semibold py-3 px-4">Lucro Presumido</th>
                <th className="text-center text-[#D4A843] font-semibold py-3">Lucro Real</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">Base de cálculo</td>
                <td className="text-center py-3 px-4">% fixo do faturamento</td>
                <td className="text-center py-3">Lucro contábil efetivo</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">PIS/COFINS</td>
                <td className="text-center py-3 px-4">Cumulativo (3,65%)</td>
                <td className="text-center py-3">Não cumulativo (9,25%)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">Créditos PIS/COFINS</td>
                <td className="text-center py-3 px-4">Não</td>
                <td className="text-center py-3">Sim</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">Compensação de prejuízo</td>
                <td className="text-center py-3 px-4">Não</td>
                <td className="text-center py-3">Sim (até 30%)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">Complexidade contábil</td>
                <td className="text-center py-3 px-4">Menor</td>
                <td className="text-center py-3">Maior</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white/80">Ideal para</td>
                <td className="text-center py-3 px-4">Lucro alto e estável</td>
                <td className="text-center py-3">Lucro baixo ou variável</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Exemplo Prático</h2>
        <p>
          Imagine uma empresa de serviços em São Carlos com faturamento anual de <strong>R$ 1.200.000,00</strong>
          e despesas operacionais de <strong>R$ 900.000,00</strong> (lucro real de R$ 300.000,00, ou 25% do faturamento).
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <div className="glass-card rounded-lg p-6">
            <h4 className="text-[#D4A843] font-bold mb-4">Lucro Presumido</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Presunção: 32% = R$ 384.000</li>
              <li>IRPJ: 15% = R$ 57.600</li>
              <li>Adicional IRPJ: R$ 14.400</li>
              <li>CSLL: 9% = R$ 34.560</li>
              <li className="border-t border-white/10 pt-2 text-white font-semibold">
                Total IRPJ + CSLL: R$ 106.560
              </li>
            </ul>
          </div>
          <div className="glass-card rounded-lg p-6">
            <h4 className="text-[#D4A843] font-bold mb-4">Lucro Real</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Lucro efetivo: R$ 300.000</li>
              <li>IRPJ: 15% = R$ 45.000</li>
              <li>Adicional IRPJ: R$ 6.000</li>
              <li>CSLL: 9% = R$ 27.000</li>
              <li className="border-t border-white/10 pt-2 text-white font-semibold">
                Total IRPJ + CSLL: R$ 78.000
              </li>
            </ul>
          </div>
        </div>

        <p>
          Neste exemplo, o <strong>Lucro Real economizaria R$ 28.560 por ano</strong> em IRPJ e CSLL. Porém, é preciso
          considerar também o impacto do PIS/COFINS e o custo contábil adicional do Lucro Real para uma análise completa.
        </p>

        <blockquote>
          <strong>Dica do contador:</strong> Não existe regime tributário universalmente melhor. A escolha ideal depende
          da margem de lucro, do volume de despesas dedutíveis, do tipo de atividade e do faturamento da empresa.
          Um planejamento tributário profissional pode gerar economia significativa.
        </blockquote>

        <h2>Planejamento Tributário em São Carlos</h2>
        <p>
          A <strong>Libra Resolv Contabilidade</strong> em São Carlos oferece consultoria especializada em planejamento
          tributário para ajudar sua empresa a escolher o regime mais vantajoso. Com mais de 35 anos de experiência,
          o contador Valdimir da Cunha analisa a situação fiscal da sua empresa e recomenda a melhor estratégia
          para reduzir legalmente a carga tributária.
        </p>

        <div className="glass-card rounded-lg p-6 my-8 border-l-4 border-[#D4A843]">
          <div className="flex items-start gap-4">
            <Calculator className="w-8 h-8 text-[#D4A843] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Solicite uma análise tributária</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Entre em contato com a Libra Resolv e solicite uma análise comparativa entre os regimes tributários
                para a sua empresa. WhatsApp: (16) 99752-1540.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </BlogArticleLayout>
  );
}
