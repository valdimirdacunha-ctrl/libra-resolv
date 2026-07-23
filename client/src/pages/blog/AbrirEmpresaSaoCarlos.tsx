/**
 * Artigo: Como Abrir Uma Empresa em São Carlos - Guia Passo a Passo
 * SEO: Long-tail keywords para abertura de empresa em São Carlos
 */

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Briefcase } from "lucide-react";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogArticles } from "@/lib/blog-data";

const article = blogArticles.find(
  (a) => a.slug === "como-abrir-empresa-em-sao-carlos-guia-passo-a-passo"
)!;

export default function AbrirEmpresaSaoCarlos() {
  return (
    <BlogArticleLayout article={article}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Por Que Abrir Uma Empresa em São Carlos?</h2>
        <p>
          São Carlos é uma das cidades mais dinâmicas do interior de São Paulo, conhecida como a "Capital da Tecnologia"
          por abrigar duas grandes universidades (USP e UFSCar), diversos centros de pesquisa e um ecossistema de
          inovação vibrante. A cidade oferece excelente infraestrutura, mão de obra qualificada e um mercado
          consumidor em crescimento, tornando-se um local estratégico para empreender.
        </p>

        <h2>Tipos de Empresa: Qual Escolher?</h2>
        <p>
          Antes de iniciar o processo de abertura, é fundamental escolher o tipo societário mais adequado ao seu
          negócio. Os principais tipos são:
        </p>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Tipo</th>
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Sócios</th>
                <th className="text-left text-[#D4A843] font-semibold py-3">Características</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">MEI</td>
                <td className="py-3 pr-4">1</td>
                <td className="py-3">Faturamento até R$ 81 mil/ano, 1 funcionário</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">EI</td>
                <td className="py-3 pr-4">1</td>
                <td className="py-3">Empresário Individual, sem separação patrimonial</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">SLU</td>
                <td className="py-3 pr-4">1</td>
                <td className="py-3">Sociedade Limitada Unipessoal, patrimônio protegido</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white/80">LTDA</td>
                <td className="py-3 pr-4">2+</td>
                <td className="py-3">Sociedade Limitada, responsabilidade limitada ao capital</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white/80">S/A</td>
                <td className="py-3 pr-4">2+</td>
                <td className="py-3">Sociedade Anônima, para grandes empreendimentos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Para a maioria dos pequenos e médios empreendedores em São Carlos, a <strong>SLU (Sociedade Limitada Unipessoal)</strong>
          é a opção mais recomendada, pois permite operar sozinho com proteção patrimonial, sem exigência de capital social mínimo.
        </p>

        <h2>Passo a Passo Para Abrir Sua Empresa</h2>

        <h3>Passo 1: Planejamento e Definição do Negócio</h3>
        <p>
          Antes de qualquer registro, defina claramente:
        </p>
        <ul>
          <li>Atividades que a empresa vai exercer (CNAE - Classificação Nacional de Atividades Econômicas)</li>
          <li>Tipo societário (MEI, EI, SLU, LTDA)</li>
          <li>Regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real)</li>
          <li>Nome empresarial e nome fantasia</li>
          <li>Endereço comercial (verifique se o zoneamento permite a atividade na Prefeitura de São Carlos)</li>
          <li>Capital social inicial</li>
        </ul>

        <h3>Passo 2: Consulta de Viabilidade</h3>
        <p>
          Antes de registrar a empresa, é necessário fazer a <strong>consulta de viabilidade</strong> junto à
          Prefeitura de São Carlos e à Junta Comercial do Estado de São Paulo (JUCESP). Essa consulta verifica:
        </p>
        <ul>
          <li>Se o nome empresarial está disponível</li>
          <li>Se a atividade é permitida no endereço escolhido (zoneamento urbano)</li>
          <li>Se há restrições ambientais ou sanitárias</li>
        </ul>

        <h3>Passo 3: Registro na Junta Comercial (JUCESP)</h3>
        <p>
          O registro do contrato social (ou requerimento de empresário) é feito na JUCESP, que pode ser realizado
          online pelo sistema VRE (Via Rápida Empresa). Documentos necessários:
        </p>
        <ul>
          <li>Contrato Social ou Requerimento de Empresário (elaborado pelo contador)</li>
          <li>Cópia do RG e CPF dos sócios</li>
          <li>Comprovante de endereço dos sócios</li>
          <li>Certidão de casamento (se aplicável)</li>
          <li>Comprovante de endereço do estabelecimento</li>
        </ul>

        <div className="glass-card rounded-lg p-6 my-8">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <AlertTriangle className="w-5 h-5 text-[#D4A843]" />
            Importante sobre o Contrato Social
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            O contrato social é o documento mais importante da empresa. Ele define as regras de funcionamento,
            responsabilidades dos sócios, distribuição de lucros e procedimentos para alterações societárias.
            É fundamental que seja elaborado por um contador ou advogado experiente.
          </p>
        </div>

        <h3>Passo 4: Obtenção do CNPJ</h3>
        <p>
          Com o registro na Junta Comercial aprovado, o CNPJ é gerado automaticamente pela Receita Federal
          através do sistema integrado da JUCESP. O processo é rápido e geralmente leva de 1 a 3 dias úteis.
        </p>

        <h3>Passo 5: Inscrição Estadual (IE)</h3>
        <p>
          Empresas que comercializam produtos (mercadorias) precisam da Inscrição Estadual junto à Secretaria
          da Fazenda do Estado de São Paulo (SEFAZ-SP). A inscrição é necessária para recolher o ICMS e emitir
          notas fiscais de venda de produtos.
        </p>

        <h3>Passo 6: Inscrição Municipal (CCM)</h3>
        <p>
          Todas as empresas precisam da inscrição no Cadastro de Contribuintes Mobiliários (CCM) da Prefeitura
          de São Carlos. Empresas prestadoras de serviço precisam dessa inscrição para recolher o ISS e emitir
          notas fiscais de serviço eletrônicas (NFS-e).
        </p>

        <h3>Passo 7: Alvará de Funcionamento</h3>
        <p>
          O alvará de funcionamento é emitido pela Prefeitura de São Carlos e autoriza o exercício da atividade
          no endereço informado. Dependendo da atividade, pode ser necessário obter licenças adicionais:
        </p>
        <ul>
          <li><strong>Licença sanitária</strong> (Vigilância Sanitária) — para restaurantes, clínicas, farmácias</li>
          <li><strong>Licença ambiental</strong> (CETESB) — para indústrias e atividades com impacto ambiental</li>
          <li><strong>Auto de Vistoria do Corpo de Bombeiros (AVCB)</strong> — para estabelecimentos comerciais</li>
          <li><strong>Registro em conselhos profissionais</strong> — para atividades regulamentadas (CRM, OAB, CREA, etc.)</li>
        </ul>

        <h3>Passo 8: Emissão do Certificado Digital</h3>
        <p>
          O certificado digital (e-CNPJ) é obrigatório para empresas que emitem notas fiscais eletrônicas e
          para cumprir obrigações acessórias junto à Receita Federal. Ele funciona como a assinatura digital
          da empresa e pode ser adquirido em certificadoras credenciadas.
        </p>

        <h2>Quanto Tempo Leva Para Abrir Uma Empresa em São Carlos?</h2>

        <div className="glass-card rounded-lg p-6 my-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[#D4A843] font-semibold py-3 pr-4">Etapa</th>
                <th className="text-right text-[#D4A843] font-semibold py-3">Prazo Estimado</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Consulta de viabilidade</td>
                <td className="text-right py-3">1 a 3 dias</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Registro na JUCESP + CNPJ</td>
                <td className="text-right py-3">3 a 7 dias</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Inscrição Estadual</td>
                <td className="text-right py-3">1 a 5 dias</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Inscrição Municipal + Alvará</td>
                <td className="text-right py-3">5 a 15 dias</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Certificado Digital</td>
                <td className="text-right py-3">1 a 3 dias</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="py-3 pr-4 font-semibold text-white">Total estimado</td>
                <td className="text-right py-3 font-semibold text-[#D4A843]">15 a 30 dias</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Quanto Custa Abrir Uma Empresa?</h2>
        <p>
          Os custos variam conforme o tipo de empresa e as licenças necessárias. De forma geral, os principais
          custos são:
        </p>
        <ul>
          <li><strong>Taxa da JUCESP</strong>: R$ 150 a R$ 300 (registro do contrato social)</li>
          <li><strong>Certificado Digital</strong>: R$ 150 a R$ 500 (validade de 1 a 3 anos)</li>
          <li><strong>Alvará de funcionamento</strong>: varia conforme a atividade e o município</li>
          <li><strong>Honorários do contador</strong>: para elaboração do contrato social e condução de todo o processo</li>
        </ul>

        <blockquote>
          <strong>Dica do contador:</strong> Não tente abrir a empresa sozinho para economizar. Erros no contrato social,
          na escolha do CNAE ou do regime tributário podem custar muito mais caro no futuro. Um contador experiente
          garante que tudo seja feito corretamente desde o início.
        </blockquote>

        <h2>Abra Sua Empresa em São Carlos com a Libra Resolv</h2>
        <p>
          A <strong>Libra Resolv Contabilidade</strong> cuida de todo o processo de abertura da sua empresa em São Carlos:
          desde o planejamento inicial, passando pelo registro na Junta Comercial, obtenção do CNPJ, inscrições
          estadual e municipal, alvará de funcionamento, até a contabilidade mensal após a abertura.
        </p>
        <p>
          Com mais de 35 anos de experiência, o contador Valdimir da Cunha já ajudou centenas de empreendedores
          a formalizarem seus negócios em São Carlos e região.
        </p>

        <div className="glass-card rounded-lg p-6 my-8 border-l-4 border-[#D4A843]">
          <div className="flex items-start gap-4">
            <Briefcase className="w-8 h-8 text-[#D4A843] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Quer abrir sua empresa?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Entre em contato com a Libra Resolv Contabilidade para uma consulta gratuita sobre a abertura
                da sua empresa em São Carlos. WhatsApp: (16) 99752-1540.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </BlogArticleLayout>
  );
}
