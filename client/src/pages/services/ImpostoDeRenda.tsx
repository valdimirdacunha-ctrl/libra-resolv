/**
 * Página: Imposto de Renda PF/PJ/ITR em São Carlos SP
 * SEO: Keywords long-tail, conteúdo rico, schema Service
 */

import { FileText, CheckCircle, AlertTriangle, Calendar, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData, getRelatedServices } from "@/lib/services-data";

const service = servicesData.find((s) => s.slug === "imposto-de-renda")!;

export default function ImpostoDeRenda() {
  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      metaDescription={service.metaDescription}
      keywords={service.keywords}
      slug={service.slug}
      icon={<FileText className="w-8 h-8 text-[#D4A843]" />}
      relatedServices={getRelatedServices(service.slug)}
    >
      {/* Sobre o serviço */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Declaração de <span className="gold-text">Imposto de Renda</span> com Segurança
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            A declaração do Imposto de Renda é uma obrigação anual que exige atenção aos detalhes para evitar erros que podem levar à malha fina. Na Libra Resolv, cuidamos de toda a sua declaração com análise minuciosa de rendimentos, deduções legais e bens, garantindo que você pague apenas o que é devido e maximize sua restituição.
          </p>
          <p>
            Atendemos <strong>Pessoa Física (IRPF)</strong>, <strong>Pessoa Jurídica (IRPJ)</strong> e <strong>Imposto Territorial Rural (ITR)</strong> em São Carlos e região, com mais de 35 anos de experiência em declarações complexas.
          </p>
        </div>
      </motion.article>

      {/* Tipos de declaração */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Tipos de <span className="gold-text">Declaração</span>
        </h2>
        <div className="grid gap-6">
          {[
            {
              icon: Users,
              title: "IRPF — Pessoa Física",
              items: [
                "Análise completa de rendimentos tributáveis e isentos",
                "Levantamento de todas as deduções legais (saúde, educação, previdência)",
                "Declaração de bens e direitos",
                "Cálculo de ganho de capital na venda de imóveis e veículos",
                "Declaração de investimentos e aplicações financeiras",
                "Acompanhamento da restituição junto à Receita Federal",
              ],
            },
            {
              icon: Shield,
              title: "IRPJ — Pessoa Jurídica",
              items: [
                "Apuração do imposto de renda da empresa",
                "Escrituração contábil e fiscal",
                "LALUR (Livro de Apuração do Lucro Real)",
                "ECF (Escrituração Contábil Fiscal)",
                "Cálculo de CSLL e contribuições",
                "Planejamento tributário para redução legal de impostos",
              ],
            },
            {
              icon: Calendar,
              title: "ITR — Imposto Territorial Rural",
              items: [
                "Declaração anual do ITR para propriedades rurais",
                "Cálculo do Valor da Terra Nua (VTN)",
                "Análise do grau de utilização da terra",
                "Cadastro e atualização no CAFIR",
                "Regularização de declarações em atraso",
              ],
            },
          ].map((type) => (
            <div key={type.title} className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <type.icon className="w-6 h-6 text-[#D4A843]" />
                <h3 className="text-xl font-bold text-white">{type.title}</h3>
              </div>
              <ul className="space-y-2">
                {type.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-[15px]">
                    <CheckCircle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Quem precisa declarar */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Quem precisa <span className="gold-text">declarar</span>?
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>Está obrigado a declarar o Imposto de Renda em 2026 quem, em 2025:</p>
          <ul className="space-y-2">
            {[
              "Recebeu rendimentos tributáveis acima do limite estabelecido pela Receita Federal",
              "Recebeu rendimentos isentos, não tributáveis ou tributados na fonte acima de R$ 200.000",
              "Obteve ganho de capital na venda de bens ou direitos",
              "Realizou operações na Bolsa de Valores",
              "Possuía bens ou direitos acima de R$ 800.000 em 31/12/2025",
              "Obteve receita bruta de atividade rural acima de R$ 153.199,50",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* CTA */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-lg p-8 border-[#D4A843]/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Não deixe o <span className="gold-text">Leão</span> esperando!
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Evite cair na malha fina e garanta sua restituição no menor prazo possível. Na Libra Resolv Contabilidade em São Carlos, o contador Valdimir da Cunha (CRC: 1SP154706) cuida da sua declaração com atenção a cada detalhe.
          </p>
          <p>
            Atendimento presencial e online, de segunda a sexta das 08h às 18h e sábados das 08h às 12h. WhatsApp <strong>(16) 99752-1540</strong> | E-mail: <strong>librarsv@gmail.com</strong>.
          </p>
        </div>
      </motion.article>
    </ServicePageLayout>
  );
}
