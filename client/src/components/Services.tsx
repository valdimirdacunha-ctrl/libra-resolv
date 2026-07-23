/**
 * Services Section - Libra Resolv
 * SEO: Rich keyword descriptions, semantic article tags, aria-labels, long-tail content
 * Design: Dark luxe cards with golden accents
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText, Building2, HardHat, Briefcase, Calculator, Receipt, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Simples Nacional e MEI",
    slug: "simples-nacional-mei",
    description:
      "Gestão completa para microempreendedores individuais (MEI) e empresas do Simples Nacional em São Carlos e região. Abertura de MEI, regularização, emissão de DAS, DASN-SIMEI e acompanhamento mensal personalizado.",
    keywords: "MEI São Carlos, Simples Nacional São Carlos, abrir MEI, DASN-SIMEI",
  },
  {
    icon: FileText,
    title: "Imposto de Renda PF/PJ/ITR",
    slug: "imposto-de-renda",
    description:
      "Declaração de Imposto de Renda para Pessoa Física (IRPF), Pessoa Jurídica (IRPJ) e Imposto Territorial Rural (ITR) em São Carlos SP. Análise completa de rendimentos, deduções e restituição com segurança e pontualidade.",
    keywords: "Imposto de Renda São Carlos, IRPF, IRPJ, ITR, declaração IR",
  },
  {
    icon: Calculator,
    title: "Lucro Real e Lucro Presumido",
    slug: "lucro-real-lucro-presumido",
    description:
      "Assessoria especializada para empresas tributadas pelo Lucro Real e Lucro Presumido em São Carlos. Planejamento tributário estratégico, apuração de impostos e otimização da carga tributária para maximizar seus resultados.",
    keywords: "Lucro Real São Carlos, Lucro Presumido, planejamento tributário",
  },
  {
    icon: Building2,
    title: "Contabilidade Área Imobiliária",
    slug: "contabilidade-imobiliaria",
    description:
      "Contabilidade especializada para incorporadoras, construtoras, loteadoras e empresas do setor imobiliário em São Carlos e região. Expertise de mais de 35 anos no segmento de incorporação e construção de imóveis.",
    keywords: "contabilidade imobiliária São Carlos, construtora, incorporadora",
  },
  {
    icon: HardHat,
    title: "Regularização de Obras no INSS",
    slug: "regularizacao-obras-inss",
    description:
      "Regularização completa de obras junto ao INSS em São Carlos SP. Cadastro CEI/CNO, cálculo de contribuições previdenciárias, recolhimento de valores e obtenção da CND para averbação no cartório de registro de imóveis.",
    keywords: "regularização obras INSS São Carlos, CND, CEI, CNO",
  },
  {
    icon: Briefcase,
    title: "Abertura e Contabilidade de Empresas",
    slug: "abertura-contabilidade-empresas",
    description:
      "Abertura, alteração e encerramento de empresas em São Carlos SP. Registro na Junta Comercial, obtenção de CNPJ, inscrição estadual/municipal, alvará de funcionamento e contabilidade mensal completa.",
    keywords: "abertura empresa São Carlos, abrir CNPJ, contabilidade mensal",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 section-dark"
      aria-label="Serviços de contabilidade oferecidos pela Libra Resolv em São Carlos"
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4A843] to-transparent" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-sm font-semibold tracking-[0.2em] uppercase">
            Serviços Contábeis em São Carlos SP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Nossos <span className="gold-text">Serviços</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Oferecemos soluções contábeis completas para pessoas físicas e jurídicas em São Carlos e região, 
            com atendimento personalizado e foco em resultados. Mais de 35 anos de experiência no mercado.
          </p>
        </motion.header>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Lista de serviços contábeis"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group glass-card rounded-lg p-8 hover:border-[#D4A843]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#D4A843]/5 flex flex-col"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="w-14 h-14 rounded-lg bg-[#D4A843]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A843]/20 transition-colors duration-300" aria-hidden="true">
                <service.icon className="w-7 h-7 text-[#D4A843]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A843] transition-colors duration-300" itemProp="name">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-[15px] flex-1" itemProp="description">
                {service.description}
              </p>
              <Link href={`/servicos/${service.slug}`}>
                <span className="inline-flex items-center gap-1 text-[#D4A843] text-sm font-semibold mt-5 group-hover:gap-2 transition-all duration-300 cursor-pointer">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
              <meta itemProp="areaServed" content="São Carlos, SP, Brasil" />
              <meta itemProp="provider" content="Libra Resolv Contabilidade" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
