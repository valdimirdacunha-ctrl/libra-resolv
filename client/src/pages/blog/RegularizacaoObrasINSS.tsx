/**
 * Artigo: Regularização de Obras no INSS - Passo a Passo Completo
 * SEO: Long-tail keywords para regularização de obras em São Carlos
 */

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, HardHat } from "lucide-react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogArticles } from "@/lib/blog-data";

const article = blogArticles.find(
  (a) => a.slug === "regularizacao-de-obras-inss-passo-a-passo"
)!;

export default function RegularizacaoObrasINSS() {
  return (
    <BlogArticleLayout article={article}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>O Que é a Regularização de Obras no INSS?</h2>
        <p>
          A regularização de obras no INSS é o processo pelo qual o proprietário de uma construção comprova
          o recolhimento das contribuições previdenciárias incidentes sobre a mão de obra utilizada na obra.
          Esse procedimento é obrigatório para obter a <strong>Certidão Negativa de Débitos (CND)</strong>,
          documento necessário para averbar a construção no Cartório de Registro de Imóveis.
        </p>
        <p>
          Sem a regularização, não é possível registrar a construção, o que impede a venda formal do imóvel,
          o financiamento bancário e pode gerar multas e penalidades junto à Receita Federal.
        </p>

        <h2>Quem Precisa Regularizar a Obra?</h2>
        <p>
          A regularização é obrigatória para qualquer tipo de construção, reforma ou demolição, seja pessoa
          física ou jurídica. Isso inclui:
        </p>

        <div className="glass-card rounded-lg p-6 my-8">
          <ul className="space-y-3">
            {[
              "Construção de casas, apartamentos e edifícios residenciais",
              "Construção de galpões, lojas e imóveis comerciais",
              "Reformas que alterem a área construída (ampliações)",
              "Demolições totais ou parciais",
              "Obras de incorporação imobiliária",
              "Construção de muros, piscinas e áreas de lazer (em alguns casos)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4A843] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2>Passo a Passo da Regularização</h2>

        <h3>Passo 1: Cadastro no CNO (Cadastro Nacional de Obras)</h3>
        <p>
          O primeiro passo é registrar a obra no <strong>CNO</strong>, que substituiu o antigo CEI (Cadastro Específico do INSS).
          O cadastro é feito online pelo portal e-CAC da Receita Federal. Você precisará informar:
        </p>
        <ul>
          <li>CPF ou CNPJ do responsável pela obra</li>
          <li>Endereço completo da obra</li>
          <li>Área total da construção em metros quadrados</li>
          <li>Tipo de obra (construção, reforma, demolição, acréscimo)</li>
          <li>Data de início e previsão de término</li>
          <li>Número do alvará de construção (emitido pela Prefeitura de São Carlos)</li>
        </ul>

        <h3>Passo 2: Cálculo das Contribuições Previdenciárias</h3>
        <p>
          O cálculo das contribuições pode ser feito por dois métodos:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <div className="glass-card rounded-lg p-6">
            <h4 className="text-[#D4A843] font-bold mb-4">Aferição Indireta (CUB)</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Utiliza o <strong>Custo Unitário Básico (CUB)</strong> da construção civil, publicado pelo SINDUSCON,
              multiplicado pela área construída. É o método mais comum para obras de pessoa física.
            </p>
          </div>
          <div className="glass-card rounded-lg p-6">
            <h4 className="text-[#D4A843] font-bold mb-4">Contabilidade Regular</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Utiliza a folha de pagamento real da obra e as notas fiscais de prestadores de serviço.
              É o método utilizado por construtoras e incorporadoras com contabilidade regular.
            </p>
          </div>
        </div>

        <h3>Passo 3: Recolhimento das Contribuições</h3>
        <p>
          Após o cálculo, as contribuições previdenciárias devem ser recolhidas através de DARF (Documento de
          Arrecadação de Receitas Federais). O percentual incidente sobre a mão de obra é de <strong>20% de INSS
          patronal</strong>, acrescido do <strong>RAT (Risco Ambiental do Trabalho)</strong> e das contribuições
          a terceiros (SESC, SENAI, SEBRAE, etc.).
        </p>

        <div className="glass-card rounded-lg p-6 my-8">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <AlertTriangle className="w-5 h-5 text-[#D4A843]" />
            Atenção aos prazos
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            As contribuições devem ser recolhidas mensalmente durante a execução da obra, até o dia 20 do mês
            seguinte ao da competência. O não recolhimento gera multas e juros, além de impedir a emissão da CND.
          </p>
        </div>

        <h3>Passo 4: Encerramento da Obra no CNO</h3>
        <p>
          Ao término da construção, o responsável deve informar o encerramento da obra no CNO, indicando a data
          de conclusão e a área total construída. Esse passo é necessário para solicitar a CND.
        </p>

        <h3>Passo 5: Obtenção da CND (Certidão Negativa de Débitos)</h3>
        <p>
          Com todas as contribuições quitadas e a obra encerrada no CNO, é possível solicitar a CND junto à
          Receita Federal. A certidão pode ser emitida online pelo e-CAC e tem validade de 180 dias.
        </p>

        <h3>Passo 6: Averbação no Cartório de Registro de Imóveis</h3>
        <p>
          Com a CND em mãos, o proprietário pode averbar a construção no Cartório de Registro de Imóveis de
          São Carlos. Para isso, também será necessário apresentar:
        </p>
        <ul>
          <li>Habite-se emitido pela Prefeitura de São Carlos</li>
          <li>CND da obra (INSS)</li>
          <li>ART ou RRT do responsável técnico (engenheiro ou arquiteto)</li>
          <li>Certidão de matrícula atualizada do imóvel</li>
        </ul>

        <h2>Documentos Necessários Para a Regularização</h2>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Documento</th>
                <th className="text-left text-[#D4A843] font-semibold py-3">Onde Obter</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Alvará de construção</td>
                <td className="py-3">Prefeitura de São Carlos</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Habite-se</td>
                <td className="py-3">Prefeitura de São Carlos</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Projeto aprovado / Planta</td>
                <td className="py-3">Engenheiro ou Arquiteto</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">ART ou RRT</td>
                <td className="py-3">CREA ou CAU</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Notas fiscais de serviços</td>
                <td className="py-3">Prestadores de serviço</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Matrícula do imóvel</td>
                <td className="py-3">Cartório de Registro de Imóveis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Quanto Custa Regularizar Uma Obra?</h2>
        <p>
          O custo da regularização varia conforme o tamanho da obra, o tipo de construção e o método de cálculo
          utilizado. De forma geral, os custos envolvem:
        </p>
        <ul>
          <li><strong>Contribuições previdenciárias</strong> (INSS patronal + RAT + terceiros) sobre a mão de obra</li>
          <li><strong>Taxas da Prefeitura</strong> para emissão do habite-se</li>
          <li><strong>Honorários do contador</strong> para conduzir o processo</li>
          <li><strong>Taxas do cartório</strong> para averbação</li>
        </ul>

        <blockquote>
          <strong>Dica do contador:</strong> Muitas pessoas constroem sem se preocupar com a regularização e depois
          enfrentam dificuldades para vender ou financiar o imóvel. O ideal é iniciar o processo de regularização
          junto com a obra, evitando acúmulo de pendências e valores retroativos.
        </blockquote>

        <h2>Regularização de Obras em São Carlos com a Libra Resolv</h2>
        <p>
          A <strong>Libra Resolv Contabilidade</strong> é especialista em regularização de obras no INSS em São Carlos
          e região. Com mais de 35 anos de experiência, especialmente no setor imobiliário, o contador Valdimir da Cunha
          conduz todo o processo: cadastro no CNO, cálculo das contribuições, recolhimento, obtenção da CND e
          orientação para averbação no cartório.
        </p>

        <div className="glass-card rounded-lg p-6 my-8 border-l-4 border-[#D4A843]">
          <div className="flex items-start gap-4">
            <HardHat className="w-8 h-8 text-[#D4A843] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Precisa regularizar sua obra?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Entre em contato com a Libra Resolv Contabilidade para uma consulta sobre a regularização da sua obra.
                Atendemos em São Carlos e toda a região. WhatsApp: (16) 99752-1540.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </BlogArticleLayout>
  );
}
