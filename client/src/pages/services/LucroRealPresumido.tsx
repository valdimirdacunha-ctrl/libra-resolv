/**
 * Página: Lucro Real e Lucro Presumido em São Carlos SP
 */

import { Calculator, CheckCircle, TrendingUp, BarChart3, Shield, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData, getRelatedServices } from "@/lib/services-data";

const service = servicesData.find((s) => s.slug === "lucro-real-lucro-presumido")!;

export default function LucroRealPresumido() {
  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      metaDescription={service.metaDescription}
      keywords={service.keywords}
      slug={service.slug}
      icon={<Calculator className="w-8 h-8 text-[#D4A843]" />}
      relatedServices={getRelatedServices(service.slug)}
    >
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Planejamento <span className="gold-text">Tributário</span> Estratégico
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            A escolha entre Lucro Real e Lucro Presumido pode representar uma economia significativa nos impostos da sua empresa. Na Libra Resolv, fazemos uma análise detalhada do seu negócio para determinar o regime tributário mais vantajoso, considerando faturamento, margem de lucro, despesas dedutíveis e projeções de crescimento.
          </p>
          <p>
            Com mais de 35 anos de experiência em contabilidade empresarial em São Carlos, oferecemos assessoria completa para empresas de todos os portes e segmentos.
          </p>
        </div>
      </motion.article>

      {/* Comparativo */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          <span className="gold-text">Lucro Real</span> vs <span className="gold-text">Lucro Presumido</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-[#D4A843]" />
              <h3 className="text-xl font-bold text-white">Lucro Real</h3>
            </div>
            <ul className="space-y-3 text-white/70 text-[15px]">
              {[
                "Impostos calculados sobre o lucro efetivo da empresa",
                "Obrigatório para empresas com faturamento acima de R$ 78 milhões/ano",
                "Ideal para empresas com margens de lucro baixas",
                "Permite compensação de prejuízos fiscais",
                "Maior número de obrigações acessórias",
                "Possibilidade de créditos de PIS e COFINS",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#D4A843]" />
              <h3 className="text-xl font-bold text-white">Lucro Presumido</h3>
            </div>
            <ul className="space-y-3 text-white/70 text-[15px]">
              {[
                "Base de cálculo presumida conforme atividade da empresa",
                "Disponível para empresas com faturamento até R$ 78 milhões/ano",
                "Ideal para empresas com margens de lucro altas",
                "Menor complexidade contábil e fiscal",
                "Menos obrigações acessórias que o Lucro Real",
                "Alíquotas de presunção variam de 1,6% a 32%",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>

      {/* Nossos serviços */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          O que fazemos por <span className="gold-text">sua empresa</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: ArrowRightLeft, text: "Análise comparativa entre regimes tributários" },
            { icon: Calculator, text: "Apuração mensal de IRPJ, CSLL, PIS e COFINS" },
            { icon: BarChart3, text: "Escrituração contábil e fiscal completa" },
            { icon: Shield, text: "ECF, ECD e SPED Fiscal" },
            { icon: TrendingUp, text: "Planejamento tributário para redução legal de impostos" },
            { icon: CheckCircle, text: "Acompanhamento de obrigações acessórias" },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-lg p-5 flex items-start gap-4">
              <item.icon className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span className="text-white/80 text-[15px]">{item.text}</span>
            </div>
          ))}
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
          Pague menos impostos <span className="gold-text">legalmente</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            Não pague mais impostos do que o necessário. Na Libra Resolv Contabilidade em São Carlos, fazemos uma análise completa do seu negócio para identificar o regime tributário ideal e implementar estratégias legais de economia fiscal.
          </p>
          <p>
            Agende uma consulta: WhatsApp <strong>(16) 99752-1540</strong> | E-mail: <strong>librarsv@gmail.com</strong>.
          </p>
        </div>
      </motion.article>
    </ServicePageLayout>
  );
}
