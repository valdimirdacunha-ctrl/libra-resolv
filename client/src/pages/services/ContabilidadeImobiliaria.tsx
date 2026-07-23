/**
 * Página: Contabilidade Área Imobiliária em São Carlos SP
 * Destaque: 35+ anos de experiência no setor imobiliário
 */

import { Building2, CheckCircle, Award, FileText, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData, getRelatedServices } from "@/lib/services-data";

const service = servicesData.find((s) => s.slug === "contabilidade-imobiliaria")!;

export default function ContabilidadeImobiliaria() {
  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      metaDescription={service.metaDescription}
      keywords={service.keywords}
      slug={service.slug}
      icon={<Building2 className="w-8 h-8 text-[#D4A843]" />}
      relatedServices={getRelatedServices(service.slug)}
    >
      {/* Experiência */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Mais de 35 anos de experiência no <span className="gold-text">setor imobiliário</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            A contabilidade do setor imobiliário possui particularidades que exigem conhecimento técnico especializado. Desde 1990, o contador Valdimir da Cunha atuou como contador responsável pela antiga Construtora Bianco e atual Estilo Construtora São Carlos Ltda, acumulando vasta experiência em incorporação, construção de imóveis e loteamento.
          </p>
          <p>
            Essa expertise de mais de três décadas permite à Libra Resolv oferecer um serviço diferenciado para empresas do setor imobiliário em São Carlos e região, com domínio completo das normas contábeis específicas do segmento.
          </p>
        </div>
      </motion.article>

      {/* Segmentos atendidos */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Segmentos <span className="gold-text">Atendidos</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Building2, text: "Incorporadoras de imóveis" },
            { icon: Shield, text: "Construtoras e empreiteiras" },
            { icon: TrendingUp, text: "Loteadoras e urbanizadoras" },
            { icon: FileText, text: "Imobiliárias e corretoras" },
            { icon: Award, text: "Empresas de administração de condomínios" },
            { icon: Building2, text: "Investidores imobiliários" },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-lg p-5 flex items-start gap-4">
              <item.icon className="w-5 h-5 text-[#D4A843] mt-0.5 shrink-0" />
              <span className="text-white/80 text-[15px]">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Serviços específicos */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Serviços <span className="gold-text">Especializados</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <ul className="space-y-3">
            {[
              "Contabilidade de incorporação imobiliária conforme NBC TG 47 (CPC 47)",
              "Apuração de custos por empreendimento e unidade",
              "Regime Especial de Tributação (RET) para incorporações",
              "Patrimônio de Afetação — constituição e gestão contábil",
              "DIMOB (Declaração de Informações sobre Atividades Imobiliárias)",
              "Escrituração contábil de contratos de compra e venda",
              "Apuração de receita pelo método POC (Percentual de Conclusão)",
              "Cálculo e recolhimento de PIS, COFINS, IRPJ e CSLL específicos",
              "Obrigações acessórias do setor (SPED, EFD-Contribuições)",
              "Regularização de obras junto ao INSS (CEI/CNO)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4A843] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      {/* Diferencial */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-lg p-8 border-[#D4A843]/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6">
          Nosso <span className="gold-text">Diferencial</span>
        </h2>
        <div className="text-white/70 leading-relaxed space-y-4 text-base">
          <p>
            A experiência prática de mais de 35 anos no setor imobiliário é o nosso maior diferencial. Conhecemos as particularidades contábeis e tributárias de cada tipo de empreendimento — desde loteamentos até edifícios residenciais e comerciais.
          </p>
          <p>
            Na Libra Resolv, cada cliente recebe atendimento personalizado com soluções sob medida para o seu negócio. Agende uma consulta: WhatsApp <strong>(16) 99752-1540</strong> | E-mail: <strong>librarsv@gmail.com</strong>.
          </p>
        </div>
      </motion.article>
    </ServicePageLayout>
  );
}
